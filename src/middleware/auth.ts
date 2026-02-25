import type { Context, Next } from 'hono'
import { auth } from '../auth'

export async function requireAuth(c: Context, next: Next) {
  // Get session info
  const session = await auth.api.getSession({
    headers: c.req.raw.headers, // Use raw headers for better compatibility
  })

  if (!session) {
    return c.json({ error: 'Unauthorized' }, 401)
  }

  // Attach session to context
  c.set('session', session)

  await next()
}