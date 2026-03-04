import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { authRoutes } from './auth/auth.routes'
import { businessRoutes } from './business/business.routes'
import { menuRoutes } from './menu/menu.routes'

const app = new Hono()

app.use('*', cors({
    origin: 'http://localhost:5173',
    allowMethods: ['GET', 'POST', 'PATCH', 'DELETE', 'OPTIONS'],
    allowHeaders: ['Content-Type', 'Authorization'],
    exposeHeaders: ['Content-Length'],
    maxAge: 600,
    credentials: true,
}))

// Root route
app.get('/', (c) => c.text('Is It Open? – JKLU API'))

// Mount modular routes
app.route('/api/auth', authRoutes)
app.route('/business', businessRoutes)
app.route('/menu', menuRoutes)

export default {
    port: 3000,
    fetch: app.fetch,
}