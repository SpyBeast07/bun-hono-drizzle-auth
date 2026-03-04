import { Hono } from 'hono'
import { auth } from '../auth'

export const authRoutes = new Hono()

// Better Auth provides its own routing logic, so we just pass all requests to its handler
authRoutes.all('/*', async (c) => {
    return auth.handler(c.req.raw)
})
