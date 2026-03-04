import { db } from '../db'
import { menuItems, businesses } from '../db/schema'
import { eq, and } from 'drizzle-orm'

export class MenuService {
    static async addMenuItem(ownerId: string, businessId: string, data: { name: string; price?: string; available: boolean }) {
        // Verify ownership of business
        const [business] = await db.select().from(businesses).where(and(eq(businesses.id, businessId), eq(businesses.ownerId, ownerId)))
        if (!business) throw new Error('Business not found or unauthorized')

        const id = crypto.randomUUID()
        const [item] = await db.insert(menuItems).values({
            id,
            businessId,
            name: data.name,
            price: data.price,
            available: data.available,
        }).returning()
        return item
    }

    static async updateMenuItem(ownerId: string, itemId: string, data: Partial<{ name: string; price: string; available: boolean }>) {
        // Find item and check business ownership in one go (or join)
        const [item] = await db.select({ item: menuItems, business: businesses })
            .from(menuItems)
            .innerJoin(businesses, eq(menuItems.businessId, businesses.id))
            .where(and(eq(menuItems.id, itemId), eq(businesses.ownerId, ownerId)))

        if (!item) throw new Error('Menu item not found or unauthorized')

        const [updated] = await db.update(menuItems)
            .set(data)
            .where(eq(menuItems.id, itemId))
            .returning()
        return updated
    }

    static async getMenuItems(businessId: string) {
        return await db.select().from(menuItems).where(eq(menuItems.businessId, businessId))
    }
}
