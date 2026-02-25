// const server = Bun.serve({
//   port: 3000,
//   routes: {
//     "/": () => new Response('Bun!'),
//   }
// });

// console.log(`Listening on ${server.url}`);

import { Hono } from 'hono'
import { db } from './db'
import { users } from './db/schema'
import { auth } from './auth'

const app = new Hono()

app.on(['POST', 'GET'], '/api/auth/*', (c) => {
  return auth.handler(c.req.raw)
})

app.get('/', (c) =>
    c.text('Welcome to Bun!')
)
app.get('/hello', (c) =>
    c.text('Hello Bun!')
)
app.post('/data', async (c) =>
    c.json({ message: 'Data received' })
)

export default {
    port: 3000,
    fetch: app.fetch,
}

// // Create a new user
// await db.insert(users).values({
//   name: 'Alice',
//   email: 'alice@example.com',
// })

// // Fetch all users
// const allUsers = await db.select().from(users)
// console.log(allUsers)