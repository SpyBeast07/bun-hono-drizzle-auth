import { db } from '../db'
import { businesses, menuItems } from '../db/schema'
import { eq, and, gt } from 'drizzle-orm'

export class BusinessService {
    static async createBusiness(ownerId: string, data: { name: string; description?: string; location?: string }) {
        const id = crypto.randomUUID()
        const [business] = await db.insert(businesses).values({
            id,
            ownerId,
            name: data.name,
            description: data.description,
            location: data.location,
            isOpen: false,
        }).returning()
        return business
    }

    static async updateBusinessStatus(ownerId: string, businessId: string, data: { isOpen: boolean; statusMessage?: string }) {
        // Verify ownership
        const [business] = await db.select().from(businesses).where(and(eq(businesses.id, businessId), eq(businesses.ownerId, ownerId)))
        if (!business) throw new Error('Business not found or unauthorized')

        const expiresAt = data.statusMessage ? new Date(Date.now() + 12 * 60 * 60 * 1000) : null

        const [updated] = await db.update(businesses)
            .set({
                isOpen: data.isOpen,
                statusMessage: data.statusMessage,
                statusMessageExpiresAt: expiresAt,
            })
            .where(eq(businesses.id, businessId))
            .returning()
        return updated
    }

    static async getAllBusinesses() {
        const now = new Date()
        const all = await db.select().from(businesses)

        // Handle message expiry on read
        return all.map(b => {
            if (b.statusMessageExpiresAt && b.statusMessageExpiresAt < now) {
                return { ...b, statusMessage: null, statusMessageExpiresAt: null }
            }
            return b
        })
    }

    static async getBusinessById(id: string) {
        const [business] = await db.select().from(businesses).where(eq(businesses.id, id))
        if (!business) return null

        const now = new Date()
        if (business.statusMessageExpiresAt && business.statusMessageExpiresAt < now) {
            business.statusMessage = null
            business.statusMessageExpiresAt = null
        }
        return business
    }
}
