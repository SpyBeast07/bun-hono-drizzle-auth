// const server = Bun.serve({
//   port: 3000,
//   routes: {
//     "/": () => new Response('Bun!'),
//   }
// });

// console.log(`Listening on ${server.url}`);

import { Hono } from 'hono'
import { db } from './db'
import { user } from './db/schema'
import { auth } from './auth'
import { requireAuth } from './middleware/auth'

type Variables = {
    session: typeof auth.$Infer.Session
}

const app = new Hono<{ Variables: Variables }>()

// Mount Better Auth handler for auth API
app.on(['POST', 'GET'], '/api/auth/*', (c) => {
    return auth.handler(c.req.raw)
})

app.get('/', (c) =>
    c.text('Welcome to Bun!')
)
app.get('/hello', (c) =>
    c.text('Hello Bun!')
)

app.get('/protected', requireAuth, (c) => {
    const session = c.get('session')!
    const user = session.user

    return c.json({ message: `Hello ${user.email}` })
})

app.get('/dashboard', requireAuth, (c) => {
    return c.json({ secret: 'Dashboard content' })
})

export default {
    port: 3000,
    fetch: app.fetch,
}

// // Create a new user
// await db.insert(user).values({
//   id: "1",
//   name: 'Alice',
//   email: 'alice@example.com',
//   emailVerified: true,
//   createdAt: new Date(),
//   updatedAt: new Date(),
// })

// // Fetch all users
// const allUsers = await db.select().from(user)
// console.log(allUsers)









// Sign up

// curl -X POST http://localhost:3000/api/auth/sign-up/email \
//   -H "Content-Type: application/json" \
//   -d '{"email":"alice@example.com","password":"securePass123","name":"Alice"}' \
//   -c cookies.txt


// Sign in

// curl -X POST http://localhost:3000/api/auth/sign-in/email \
//   -H "Content-Type: application/json" \
//   -d '{"email":"alice@example.com","password":"securePass123"}' \
//   -c cookies.txt


// Protected route

// curl http://localhost:3000/protected \
//   -b cookies.txt