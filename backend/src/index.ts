import { Hono } from 'hono'
import { authRoutes } from './auth/auth.routes'
import { businessRoutes } from './business/business.routes'
import { menuRoutes } from './menu/menu.routes'

const app = new Hono()

// Root route
app.get('/', (c) => c.text('Is It Open? – IIITH API'))

// Mount modular routes
app.route('/api/auth', authRoutes)
app.route('/business', businessRoutes)
app.route('/menu', menuRoutes)

export default {
    port: 3000,
    fetch: app.fetch,
}