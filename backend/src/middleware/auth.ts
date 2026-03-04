import type { Context, Next } from 'hono'
import { auth } from '../auth'

export async function requireAuth(c: Context, next: Next) {
  // Get session info
  const session = await auth.api.getSession({
    headers: c.req.raw.headers,
  })

  if (!session) {
    return c.json({ error: 'Unauthorized' }, 401)
  }

  // Attach session to context
  c.set('user', session.user)
  c.set('session', session.session)

  await next()
}