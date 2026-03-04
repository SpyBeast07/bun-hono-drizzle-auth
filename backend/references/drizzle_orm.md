# Drizzle ORM

## Introduction

Drizzle is a modern TypeScript ORM designed for developers who want a lightweight, type-safe database layer without sacrificing performance or flexibility. At only ~7.4kb minified and gzipped with zero dependencies, Drizzle supports PostgreSQL, MySQL, SQLite, SingleStore, and Gel databases, including serverless platforms like Turso, Neon, Xata, PlanetScale, Cloudflare D1, Vercel Postgres, Supabase, PGlite, TiDB Cloud, and Upstash Redis. It works seamlessly across all major JavaScript runtimes including Node.js, Bun, Deno, Cloudflare Workers, Supabase functions, React Native (via OP SQLite and Expo SQLite), and even browsers, making it truly serverless-ready by design.

Drizzle provides a thin, typed layer on top of SQL that enables developers to declare SQL schemas and build both relational and SQL-like queries with full type safety. The ecosystem includes Drizzle Kit for hassle-free migrations (generating SQL files or applying schema changes directly), Drizzle Studio for visual database browsing, and schema validation packages for Zod, Valibot, TypeBox, and ArkType. The monorepo also includes drizzle-seed for generating realistic test data and an ESLint plugin for enforcing best practices.

---

## Schema Definition

### Defining PostgreSQL Tables

```typescript
import { pgTable, serial, text, integer, timestamp, boolean, varchar } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  email: varchar('email', { length: 255 }).unique().notNull(),
  verified: boolean('verified').default(false),
  createdAt: timestamp('created_at').defaultNow(),
});

export const posts = pgTable('posts', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  content: text('content'),
  authorId: integer('author_id').references(() => users.id).notNull(),
  publishedAt: timestamp('published_at'),
  createdAt: timestamp('created_at').defaultNow(),
});
```

### Defining MySQL Tables

```typescript
import { mysqlTable, int, varchar, text, boolean, datetime } from 'drizzle-orm/mysql-core';

export const users = mysqlTable('users', {
  id: int('id').primaryKey().autoincrement(),
  name: varchar('name', { length: 255 }).notNull(),
  email: varchar('email', { length: 255 }).unique().notNull(),
  verified: boolean('verified').default(false),
  createdAt: datetime('created_at').default(sql`CURRENT_TIMESTAMP`),
});

export const posts = mysqlTable('posts', {
  id: int('id').primaryKey().autoincrement(),
  title: varchar('title', { length: 500 }).notNull(),
  content: text('content'),
  authorId: int('author_id').references(() => users.id).notNull(),
  createdAt: datetime('created_at').default(sql`CURRENT_TIMESTAMP`),
});
```

### Defining SQLite Tables

```typescript
import { sqliteTable, integer, text, blob } from 'drizzle-orm/sqlite-core';
import { sql } from 'drizzle-orm';

export const users = sqliteTable('users', {
  id: integer('id').primaryKey(),
  name: text('name').notNull(),
  verified: integer('verified').notNull().default(0),
  json: blob('json', { mode: 'json' }).$type<string[]>(),
  bigInt: blob('big_int', { mode: 'bigint' }),
  createdAt: integer('created_at', { mode: 'timestamp_ms' })
    .notNull()
    .default(sql`strftime('%s', 'now')`),
});
```

---

## Database Initialization

### PostgreSQL with node-postgres

```typescript
import { drizzle } from 'drizzle-orm/node-postgres';
import { Client } from 'pg';
import * as schema from './schema';

const client = new Client({
  host: 'localhost',
  port: 5432,
  user: 'postgres',
  password: 'password',
  database: 'mydb',
});

await client.connect();
const db = drizzle(client, { schema });

// Use the database
const users = await db.select().from(schema.users);
```

### MySQL with mysql2

```typescript
import { drizzle } from 'drizzle-orm/mysql2';
import mysql from 'mysql2/promise';
import * as schema from './schema';

const pool = mysql.createPool({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'password',
  database: 'mydb',
});

const db = drizzle(pool, { schema });

// Use the database
const users = await db.select().from(schema.users);
```

### SQLite with Bun

```typescript
import { Database } from 'bun:sqlite';
import { drizzle } from 'drizzle-orm/bun-sqlite';
import * as schema from './schema';

const client = new Database(':memory:'); // or './db.sqlite'
const db = drizzle(client, { schema });

// Use the database
const users = db.select().from(schema.users).all();
```

### SQLite with better-sqlite3

```typescript
import { drizzle } from 'drizzle-orm/better-sqlite3';
import Database from 'better-sqlite3';
import * as schema from './schema';

const sqlite = new Database('./db.sqlite');
const db = drizzle(sqlite, { schema });

// Use the database
const users = db.select().from(schema.users).all();
```

### PostgreSQL with PGlite (In-Browser PostgreSQL)

```typescript
import { PGlite } from '@electric-sql/pglite';
import { drizzle } from 'drizzle-orm/pglite';
import * as schema from './schema';

// In-memory database
const client = new PGlite();

// Or persistent database (in browser with IndexedDB)
// const client = new PGlite('idb://my-database');

const db = drizzle(client, { schema });

// Use the database
const users = await db.select().from(schema.users);
```

### PostgreSQL with Neon Serverless

```typescript
import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schema';

const sql = neon(process.env.DATABASE_URL!);
const db = drizzle(sql, { schema });

// Use the database
const users = await db.select().from(schema.users);
```

---

## Select Queries

### Basic SELECT

```typescript
import { eq, and, or, like, gte, inArray } from 'drizzle-orm';

// Select all users
const allUsers = await db.select().from(users);

// Select with WHERE clause
const user = await db.select()
  .from(users)
  .where(eq(users.id, 1));

// Select specific columns
const userNames = await db.select({
  id: users.id,
  name: users.name,
  email: users.email,
})
  .from(users);

// Complex WHERE conditions
const filteredUsers = await db.select()
  .from(users)
  .where(
    and(
      or(
        like(users.name, '%John%'),
        like(users.email, '%@example.com')
      ),
      gte(users.createdAt, new Date('2024-01-01')),
      eq(users.verified, true)
    )
  );
```

### SELECT with JOINs

```typescript
// LEFT JOIN
const postsWithAuthors = await db.select({
  postId: posts.id,
  postTitle: posts.title,
  postContent: posts.content,
  authorId: users.id,
  authorName: users.name,
  authorEmail: users.email,
})
  .from(posts)
  .leftJoin(users, eq(posts.authorId, users.id));

// INNER JOIN with WHERE
const publishedPosts = await db.select()
  .from(posts)
  .innerJoin(users, eq(posts.authorId, users.id))
  .where(eq(users.verified, true));
```

### SELECT with Aggregations

```typescript
import { count, sum, avg, min, max } from 'drizzle-orm';

// Count rows
const userCount = await db.select({
  count: count(),
})
  .from(users);

// GROUP BY with aggregations
const postsByAuthor = await db.select({
  authorId: posts.authorId,
  postCount: count(posts.id),
  authorName: users.name,
})
  .from(posts)
  .leftJoin(users, eq(posts.authorId, users.id))
  .groupBy(posts.authorId, users.name);
```

### SELECT with Subqueries

```typescript
// Subqueries in select fields (v0.45.0+)
const postsWithCommentCount = await db.select({
  id: posts.id,
  title: posts.title,
  commentCount: db.select({ count: count() })
    .from(comments)
    .where(eq(comments.postId, posts.id))
    .as('comment_count'),
})
  .from(posts);

// Multiple subqueries
const userStats = await db.select({
  id: users.id,
  name: users.name,
  postCount: db.select({ count: count() })
    .from(posts)
    .where(eq(posts.authorId, users.id))
    .as('post_count'),
  totalLikes: db.select({ sum: sum(posts.likes) })
    .from(posts)
    .where(eq(posts.authorId, users.id))
    .as('total_likes'),
})
  .from(users);
```

### SELECT with ORDER BY and LIMIT

```typescript
import { desc, asc } from 'drizzle-orm';

// Order by and limit
const recentPosts = await db.select()
  .from(posts)
  .orderBy(desc(posts.createdAt))
  .limit(10);

// Multiple order columns
const sortedUsers = await db.select()
  .from(users)
  .orderBy(asc(users.verified), desc(users.createdAt))
  .limit(20)
  .offset(10);
```

---

## Insert Queries

### Basic INSERT

```typescript
// Insert single row
const result = await db.insert(users)
  .values({
    name: 'John Doe',
    email: 'john@example.com',
    verified: false,
  });

// Insert with RETURNING (PostgreSQL/SQLite)
const [newUser] = await db.insert(users)
  .values({
    name: 'Jane Smith',
    email: 'jane@example.com',
  })
  .returning();

console.log(newUser); // { id: 1, name: 'Jane Smith', email: 'jane@example.com', verified: false, createdAt: Date }
```

### Bulk INSERT

```typescript
// Insert multiple rows
await db.insert(users)
  .values([
    { name: 'Alice', email: 'alice@example.com' },
    { name: 'Bob', email: 'bob@example.com' },
    { name: 'Charlie', email: 'charlie@example.com' },
  ]);

// Bulk insert with RETURNING
const newUsers = await db.insert(users)
  .values([
    { name: 'David', email: 'david@example.com' },
    { name: 'Eve', email: 'eve@example.com' },
  ])
  .returning();
```

### INSERT with ON CONFLICT

```typescript
// PostgreSQL: Insert or do nothing on conflict
await db.insert(users)
  .values({
    name: 'John Doe',
    email: 'john@example.com',
  })
  .onConflictDoNothing();

// PostgreSQL: Insert or update on conflict
await db.insert(users)
  .values({
    name: 'John Doe',
    email: 'john@example.com',
  })
  .onConflictDoUpdate({
    target: users.email,
    set: { name: 'John Updated' },
  });

// MySQL: Insert or replace
await db.insert(users)
  .values({
    name: 'John Doe',
    email: 'john@example.com',
  })
  .onDuplicateKeyUpdate({
    set: { name: sql`VALUES(name)` },
  });
```

---

## Update Queries

### Basic UPDATE

```typescript
// Update with WHERE clause
await db.update(users)
  .set({ verified: true })
  .where(eq(users.id, 1));

// Update multiple columns
await db.update(users)
  .set({
    name: 'John Updated',
    verified: true,
  })
  .where(eq(users.email, 'john@example.com'));

// Update with RETURNING (PostgreSQL/SQLite)
const [updatedUser] = await db.update(users)
  .set({ verified: true })
  .where(eq(users.id, 1))
  .returning();

console.log(updatedUser); // { id: 1, name: 'John', email: 'john@example.com', verified: true, ... }
```

### UPDATE with SQL expressions

```typescript
import { sql } from 'drizzle-orm';

// Increment a value
await db.update(posts)
  .set({
    viewCount: sql`${posts.viewCount} + 1`,
  })
  .where(eq(posts.id, 1));

// Update with computed value
await db.update(users)
  .set({
    updatedAt: sql`NOW()`,
  })
  .where(eq(users.id, 1));
```

---

## Delete Queries

### Basic DELETE

```typescript
// Delete with WHERE clause
await db.delete(users)
  .where(eq(users.id, 1));

// Delete multiple rows
await db.delete(users)
  .where(
    and(
      eq(users.verified, false),
      lt(users.createdAt, new Date('2023-01-01'))
    )
  );

// Delete with RETURNING (PostgreSQL/SQLite)
const deletedUsers = await db.delete(users)
  .where(eq(users.verified, false))
  .returning();

console.log(deletedUsers); // Array of deleted user objects
```

---

## Relational Queries

### Defining Relations

```typescript
import { relations } from 'drizzle-orm';

export const usersRelations = relations(users, ({ many }) => ({
  posts: many(posts),
}));

export const postsRelations = relations(posts, ({ one }) => ({
  author: one(users, {
    fields: [posts.authorId],
    references: [users.id],
  }),
}));

// Self-referential relations
export const employeesRelations = relations(employees, ({ one, many }) => ({
  manager: one(employees, {
    fields: [employees.managerId],
    references: [employees.id],
    relationName: 'manager',
  }),
  subordinates: many(employees, {
    relationName: 'subordinates',
  }),
}));
```

### Querying with Relations

```typescript
// Find single user with posts
const userWithPosts = await db.query.users.findFirst({
  where: eq(users.id, 1),
  with: {
    posts: true,
  },
});

console.log(userWithPosts);
// {
//   id: 1,
//   name: 'John',
//   email: 'john@example.com',
//   verified: true,
//   createdAt: Date,
//   posts: [
//     { id: 1, title: 'First Post', content: '...', authorId: 1, createdAt: Date },
//     { id: 2, title: 'Second Post', content: '...', authorId: 1, createdAt: Date },
//   ]
// }

// Find many with nested relations
const postsWithAuthors = await db.query.posts.findMany({
  with: {
    author: true,
  },
  where: (fields, { eq }) => eq(fields.publishedAt, null),
  orderBy: (fields, { desc }) => desc(fields.createdAt),
  limit: 10,
});
```

### Advanced Relational Queries

```typescript
// Nested relations with filtering
const users = await db.query.users.findMany({
  columns: {
    id: true,
    name: true,
  },
  with: {
    posts: {
      columns: {
        id: true,
        title: true,
      },
      where: (fields, { isNotNull }) => isNotNull(fields.publishedAt),
      orderBy: (fields, { desc }) => desc(fields.publishedAt),
      limit: 5,
      with: {
        comments: {
          where: (fields, { eq }) => eq(fields.approved, true),
          with: {
            author: true,
          },
        },
      },
    },
  },
  where: (fields, { eq }) => eq(fields.verified, true),
});
```

---

## Transactions

### Basic Transactions

```typescript
// Execute multiple operations in a transaction
await db.transaction(async (tx) => {
  const [newUser] = await tx.insert(users)
    .values({ name: 'John', email: 'john@example.com' })
    .returning();

  await tx.insert(posts)
    .values({
      title: 'My First Post',
      content: 'Hello world!',
      authorId: newUser.id,
    });
});

// Transaction with error handling
try {
  await db.transaction(async (tx) => {
    await tx.update(accounts)
      .set({ balance: sql`${accounts.balance} - 100` })
      .where(eq(accounts.id, 1));

    await tx.update(accounts)
      .set({ balance: sql`${accounts.balance} + 100` })
      .where(eq(accounts.id, 2));
  });
} catch (error) {
  console.error('Transaction failed:', error);
}
```

---

## Prepared Statements

### Creating and Executing Prepared Statements

```typescript
// PostgreSQL prepared statement
const getUserById = db.select()
  .from(users)
  .where(eq(users.id, sql.placeholder('id')))
  .prepare('get_user_by_id');

const user1 = await getUserById.execute({ id: 1 });
const user2 = await getUserById.execute({ id: 2 });

// Prepared statement with multiple placeholders
const getUserByEmailAndVerified = db.select()
  .from(users)
  .where(
    and(
      eq(users.email, sql.placeholder('email')),
      eq(users.verified, sql.placeholder('verified'))
    )
  )
  .prepare('get_user_by_email_verified');

const verifiedUser = await getUserByEmailAndVerified.execute({
  email: 'john@example.com',
  verified: true,
});
```

---

## Migrations with Drizzle Kit

### Configuration File

```typescript
// drizzle.config.ts
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './src/schema.ts',
  out: './drizzle',
  dialect: 'postgresql', // 'postgresql' | 'mysql' | 'sqlite' | 'turso' | 'singlestore' | 'gel'
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
  verbose: true,
  strict: true,
  migrations: {
    table: '__drizzle_migrations',
    schema: 'public',
  },
});

// Example for SQLite/Turso
export default defineConfig({
  schema: './src/schema.ts',
  out: './drizzle',
  dialect: 'sqlite',
  dbCredentials: {
    url: './local.db', // or 'libsql://...' for Turso
  },
});

// Example for MySQL/SingleStore
export default defineConfig({
  schema: './src/schema.ts',
  out: './drizzle',
  dialect: 'mysql', // or 'singlestore'
  dbCredentials: {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'password',
    database: 'mydb',
  },
});

// Example for Gel (PostgreSQL-compatible)
export default defineConfig({
  schema: './src/schema.ts',
  out: './drizzle',
  dialect: 'gel',
  dbCredentials: {
    url: process.env.GEL_URL!,
  },
});
```

### CLI Commands

```bash
# Generate migration files from schema changes
npx drizzle-kit generate

# Apply schema changes directly to database (push mode)
npx drizzle-kit push

# Pull existing schema from database (introspection)
npx drizzle-kit introspect

# Apply migrations to database
npx drizzle-kit migrate

# Open Drizzle Studio (visual database browser)
npx drizzle-kit studio

# Check for schema differences without generating migrations
npx drizzle-kit check

# Drop migration files
npx drizzle-kit drop
```

### Programmatic Migrations

```typescript
import { drizzle } from 'drizzle-orm/node-postgres';
import { migrate } from 'drizzle-orm/node-postgres/migrator';
import { Client } from 'pg';

const client = new Client({
  connectionString: process.env.DATABASE_URL,
});

await client.connect();
const db = drizzle(client);

// Run migrations
await migrate(db, { migrationsFolder: './drizzle' });

await client.end();
```

---

## Database Seeding

### Basic Seeding with drizzle-seed

```typescript
import { drizzle } from 'drizzle-orm/node-postgres';
import { seed } from 'drizzle-seed';
import * as schema from './schema';

const db = drizzle(client, { schema });

// Seed the database with random data
await seed(db, schema);

// Seed with options
await seed(db, schema, {
  count: 100, // Number of rows per table
});

// Seed specific tables
await seed(db, { users, posts }, {
  count: 50,
});
```

---

## Schema Validation

### Zod Integration

```typescript
// drizzle-zod generates Zod schemas from Drizzle tables
import { createInsertSchema, createSelectSchema } from 'drizzle-zod';
import { users } from './schema';

// Generate schemas
const insertUserSchema = createInsertSchema(users);
const selectUserSchema = createSelectSchema(users);

// Use for validation
const newUser = insertUserSchema.parse({
  name: 'John Doe',
  email: 'john@example.com',
});

// Refine schemas
const customInsertSchema = createInsertSchema(users, {
  email: (schema) => schema.email.email(),
  name: (schema) => schema.name.min(3).max(50),
});

// Validate and insert
const validatedUser = customInsertSchema.parse(requestBody);
await db.insert(users).values(validatedUser);
```

### Valibot Integration

```typescript
import { createInsertSchema, createSelectSchema } from 'drizzle-valibot';
import { users } from './schema';

const insertUserSchema = createInsertSchema(users);
const selectUserSchema = createSelectSchema(users);

// Use for validation
const result = insertUserSchema.parse({
  name: 'John Doe',
  email: 'john@example.com',
});
```

### TypeBox Integration

```typescript
import { createInsertSchema, createSelectSchema, createUpdateSchema } from 'drizzle-typebox';
import { Type } from '@sinclair/typebox';
import { users } from './schema';

// Generate schemas
const insertUserSchema = createInsertSchema(users);
const updateUserSchema = createUpdateSchema(users);
const selectUserSchema = createSelectSchema(users);

// Use for validation
import { Value } from '@sinclair/typebox/value';

const isValid = Value.Check(insertUserSchema, {
  name: 'John Doe',
  email: 'john@example.com',
});

// Override fields with custom TypeBox types
const customInsertSchema = createInsertSchema(users, {
  email: Type.String({ format: 'email' }),
  name: Type.String({ minLength: 3, maxLength: 50 }),
});

// Validate and insert
const data = {
  name: 'John Doe',
  email: 'john@example.com',
};

if (Value.Check(customInsertSchema, data)) {
  await db.insert(users).values(data);
}
```

### ArkType Integration

```typescript
import { createInsertSchema, createSelectSchema, createUpdateSchema } from 'drizzle-arktype';
import { type } from 'arktype';
import { users } from './schema';

// Generate schemas
const insertUserSchema = createInsertSchema(users);
const updateUserSchema = createUpdateSchema(users);
const selectUserSchema = createSelectSchema(users);

// Use for validation
const isUserValid = insertUserSchema({
  name: 'John Doe',
  email: 'john@example.com',
});

// Override fields
const customInsertSchema = createInsertSchema(users, {
  email: type('string.email'),
  name: type('string>=3<=50'),
});

// Refine fields - useful for adding constraints before they become nullable/optional
const refinedInsertSchema = createInsertSchema(users, {
  id: (schema) => schema.atLeast(1),
  role: type('string'),
});
```

---

## Custom Column Types

### Creating Custom Types

```typescript
import { customType } from 'drizzle-orm/pg-core';

// Define custom type for PostgreSQL CITEXT
const citext = customType<{ data: string }>({
  dataType() {
    return 'citext';
  },
  toDriver(value: string): string {
    return value;
  },
  fromDriver(value: unknown): string {
    return value as string;
  },
});

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  email: citext('email').notNull().unique(),
});

// Custom type for JSON with validation
const validatedJson = customType<{ data: MyType }>({
  dataType() {
    return 'jsonb';
  },
  toDriver(value: MyType): string {
    return JSON.stringify(value);
  },
  fromDriver(value: unknown): MyType {
    return JSON.parse(value as string);
  },
});
```

---

## Advanced Features

### SQL Raw Queries

```typescript
import { sql } from 'drizzle-orm';

// Execute raw SQL
const result = await db.execute(sql`SELECT * FROM users WHERE id = ${1}`);

// Raw SQL in queries
const users = await db.select()
  .from(users)
  .where(sql`lower(${users.name}) = lower(${'john'})`);

// Complex raw expressions
const stats = await db.select({
  totalUsers: sql<number>`COUNT(*)`,
  avgAge: sql<number>`AVG(age)`,
  maxCreated: sql<Date>`MAX(created_at)`,
})
  .from(users);
```

### Database Logger

```typescript
import { drizzle } from 'drizzle-orm/node-postgres';

// Enable query logging
const db = drizzle(client, {
  schema,
  logger: true,
});

// Custom logger
const db = drizzle(client, {
  schema,
  logger: {
    logQuery(query, params) {
      console.log('[QUERY]', query);
      console.log('[PARAMS]', params);
    },
  },
});
```

### Type Inference

```typescript
import { type InferSelectModel, type InferInsertModel } from 'drizzle-orm';

// Infer types from schema
type User = InferSelectModel<typeof users>;
type NewUser = InferInsertModel<typeof users>;

// Use inferred types
const user: User = await db.select().from(users).where(eq(users.id, 1)).then(r => r[0]);

const newUser: NewUser = {
  name: 'John Doe',
  email: 'john@example.com',
  // verified and createdAt are optional (have defaults)
};

await db.insert(users).values(newUser);
```

---

## Query Caching

### Upstash Redis Cache

```typescript
import { drizzle } from 'drizzle-orm/node-postgres';
import { upstashCache } from 'drizzle-orm/cache/upstash';
import * as schema from './schema';

// Initialize database with Upstash cache
const db = drizzle(client, {
  schema,
  cache: upstashCache({
    url: process.env.UPSTASH_REDIS_URL!,
    token: process.env.UPSTASH_REDIS_TOKEN!,
    // Enable caching for all queries by default
    global: false, // default: false (explicit caching)
    // Default cache TTL in seconds
    config: { ex: 60 },
  }),
});

// Explicit caching with .$withCache()
const users = await db.select()
  .from(users)
  .where(eq(users.verified, true))
  .$withCache({ ex: 300 }); // Cache for 5 minutes

// Tag queries for selective invalidation
const posts = await db.select()
  .from(posts)
  .where(eq(posts.published, true))
  .$withCache({ ex: 120, tags: ['recent-posts'] });

// Mutations automatically invalidate related cache entries
await db.update(posts)
  .set({ title: 'Updated Title' })
  .where(eq(posts.id, 1));
// All cached queries using the 'posts' table are invalidated
```

### Custom Cache Implementation

```typescript
import { Cache } from 'drizzle-orm/cache/core';
import type { CacheConfig } from 'drizzle-orm/cache/core';

class CustomCache extends Cache {
  // Return 'all' to cache all queries, or 'explicit' for opt-in caching
  override strategy(): 'explicit' | 'all' {
    return 'explicit';
  }

  // Retrieve cached query results by key
  override async get(key: string): Promise<any[] | undefined> {
    // Implement cache retrieval logic
    return await yourCacheStore.get(key);
  }

  // Store query results with optional TTL
  override async put(
    key: string,
    response: any[],
    tables: string[],
    config?: CacheConfig,
  ): Promise<void> {
    // Store the response with metadata about which tables were queried
    await yourCacheStore.set(key, {
      data: response,
      tables,
      expiry: Date.now() + (config?.ex || 60) * 1000,
    });
  }

  // Invalidate cache on mutations
  override async onMutate(params: {
    tags: string | string[];
    tables: string | string[];
  }): Promise<void> {
    // Invalidate cache entries for affected tables/tags
    const tableArray = Array.isArray(params.tables) ? params.tables : [params.tables];
    await yourCacheStore.deleteByTables(tableArray);
  }
}

// Use custom cache
const db = drizzle(client, {
  schema,
  cache: new CustomCache(),
});
```

---

## Error Handling

### DrizzleQueryError

```typescript
import { DrizzleQueryError } from 'drizzle-orm';

try {
  await db.select()
    .from(users)
    .where(eq(users.id, invalidId));
} catch (error) {
  if (error instanceof DrizzleQueryError) {
    // Access the generated SQL query
    console.error('Failed query:', error.query);

    // Access query parameters
    console.error('Parameters:', error.params);

    // Get Drizzle stack trace (shows which query failed)
    console.error('Drizzle trace:', error.stack);

    // Access original database driver error
    console.error('Database error:', error.cause);
    console.error('Driver trace:', error.cause?.stack);
  }
  throw error;
}

// Example error output structure:
// DrizzleQueryError: Failed query: select "id", "name" from "users" where "id" = $1
// params: [null]
//   Caused by: PostgresError: invalid input syntax for type integer
```

---

## Summary

Drizzle ORM excels in applications requiring type-safe database operations without the overhead of traditional ORMs. Its primary use cases include serverless applications where bundle size and cold start times are critical, TypeScript projects demanding compile-time type checking, and projects that need to support multiple databases with minimal code changes. The library is particularly well-suited for Next.js applications, API backends, edge functions, and microservices where developers want SQL-level control with TypeScript safety. The relational query API simplifies complex joins while maintaining type inference, and the migration tooling ensures database schema changes are tracked and applied consistently across environments. Support for subqueries in select fields (v0.45.0+) enables more complex data aggregation patterns while maintaining type safety.

Integration patterns typically involve defining schemas in dedicated files, exporting typed database instances, and organizing queries into repository patterns or service layers. Drizzle works seamlessly with connection pooling, supports prepared statements for performance-critical queries, and provides transaction support for maintaining data consistency. The v0.44.0 release introduced native query caching with Upstash Redis integration and improved error handling through DrizzleQueryError, providing better debugging capabilities with full stack traces and SQL context. Version 0.45.0 added support for subqueries in select fields and improved date handling for PostgreSQL types. Version 0.45.1 fixed pg-native Pool detection issues in node-postgres transactions. The ecosystem packages enable progressive enhancement: start with core ORM functionality, add schema validation with Zod/Valibot/TypeBox/ArkType when needed, use drizzle-seed for development and testing environments, and leverage the ESLint plugin to catch common mistakes. The library's design philosophy of being a thin layer over SQL means developers retain full control while gaining TypeScript superpowers, making it an ideal choice for teams that understand SQL but want modern developer experience.
