import { Hono } from 'hono'
import { BusinessService } from './business.service'
import { requireAuth } from '../middleware/auth'
import { auth } from '../auth'

export const businessRoutes = new Hono<{ Variables: { user: typeof auth.$Infer.Session.user } }>()

// Public: Get all businesses
businessRoutes.get('/', async (c) => {
    const list = await BusinessService.getAllBusinesses()
    return c.json(list)
})

// Public: Get business details
businessRoutes.get('/:id', async (c) => {
    const id = c.req.param('id')
    const business = await BusinessService.getBusinessById(id)
    if (!business) return c.json({ error: 'Business not found' }, 404)
    return c.json(business)
})

// Protected: Create business
businessRoutes.post('/', requireAuth, async (c) => {
    const user = c.get('user')!
    const body = await c.req.json()
    try {
        const business = await BusinessService.createBusiness(user.id, body)
        return c.json(business, 201)
    } catch (e: any) {
        return c.json({ error: e.message }, 400)
    }
})

// Protected: Update status
businessRoutes.patch('/:id/status', requireAuth, async (c) => {
    const user = c.get('user')!
    const id = c.req.param('id')
    const body = await c.req.json()
    try {
        const updated = await BusinessService.updateBusinessStatus(user.id, id, body)
        return c.json(updated)
    } catch (e: any) {
        return c.json({ error: e.message }, 403)
    }
})
