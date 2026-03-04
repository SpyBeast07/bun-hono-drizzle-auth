import { Hono } from 'hono'
import { MenuService } from './menu.service'
import { requireAuth } from '../middleware/auth'
import { auth } from '../auth'

export const menuRoutes = new Hono<{ Variables: { user: typeof auth.$Infer.Session.user } }>()

// Public: Get menu for a business
menuRoutes.get('/business/:businessId', async (c) => {
    const businessId = c.req.param('businessId')
    const items = await MenuService.getMenuItems(businessId)
    return c.json(items)
})

// Protected: Add menu item
menuRoutes.post('/', requireAuth, async (c) => {
    const user = c.get('user')!
    const body = await c.req.json()
    try {
        const item = await MenuService.addMenuItem(user.id, body.businessId, body)
        return c.json(item, 201)
    } catch (e: any) {
        return c.json({ error: e.message }, 400)
    }
})

// Protected: Update menu item
menuRoutes.patch('/:id', requireAuth, async (c) => {
    const user = c.get('user')!
    const id = c.req.param('id')
    const body = await c.req.json()
    try {
        const updated = await MenuService.updateMenuItem(user.id, id, body)
        return c.json(updated)
    } catch (e: any) {
        return c.json({ error: e.message }, 403)
    }
})
