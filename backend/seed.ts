import { db } from './src/db'
import { businesses } from './src/db/schema'
import { auth } from './src/auth'

async function seed() {
    console.log('🌱 Seeding database...')

    // Create a test user via Better Auth
    const user = await auth.api.signUpEmail({
        body: {
            email: 'owner@example.com',
            password: 'password123',
            name: 'Test Owner',
        },
    })

    console.log('✅ User created:', user.user.email)

    // Create a sample business
    const [business] = await db.insert(businesses).values({
        id: crypto.randomUUID(),
        ownerId: user.user.id,
        name: 'The JKLU Cafeteria',
        description: 'Best samosas on campus!',
        location: 'Academic Block B',
        isOpen: true,
        statusMessage: 'Fresh snacks available now!',
    }).returning()

    if (business) {
        console.log('✅ Business created:', business.name)
    } else {
        console.log('⚠️ Business not created (returning was empty)')
    }
    console.log('-----------------------------------')
    console.log('Login Email: owner@example.com')
    console.log('Login Password: password123')
    console.log('-----------------------------------')

    process.exit(0)
}

seed().catch((err) => {
    console.error('❌ Seeding failed:', err)
    process.exit(1)
})
