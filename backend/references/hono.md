### Create Hono Project - Minimal Interactive Setup

Source: https://context7_llms

Initializes a new Hono project with interactive prompts for template and configuration selection. This is the simplest way to get started with Hono, allowing users to choose their preferred template and options through an interactive CLI interface.

```bash
npm create hono@latest my-app
```

--------------------------------

### Hello World Application with Hono and Bun

Source: https://context7_llms

Basic Hono application setup for Bun runtime with a simple GET route that returns 'Hello Bun!' text response. This is the minimal example to get started with Hono on Bun.

```typescript
import { Hono } from 'hono'

const app = new Hono()
app.get('/', (c) => c.text('Hello Bun!'))

export default app
```

--------------------------------

### Install Google Cloud CLI

Source: https://context7_llms

Install the gcloud command-line interface for managing Google Cloud Platform resources. Example uses Homebrew on macOS. After installation, authenticate with your Google Cloud account.

```shell
brew install --cask gcloud-cli
```

```shell
gcloud auth login
```

--------------------------------

### Create a Basic Hono Application in TypeScript

Source: https://hono.dev/docs

This snippet demonstrates how to initialize a basic Hono application, define a GET route for the root path, and return a simple text response. It showcases the minimal setup required to get a Hono server running and export it for use.

```ts
import { Hono } from 'hono'
const app = new Hono()

app.get('/', (c) => c.text('Hono!'))

export default app
```

--------------------------------

### Create New Hono Project with Bun

Source: https://context7_llms

Shows how to initialize a new Hono project using Bun's create command and install dependencies. This is the recommended way to start a new Hono application on the Bun runtime.

```shell
bun create hono@latest my-app
cd my-app
bun install
```

--------------------------------

### Define Hono Application Entry Point with app.fetch

Source: https://context7_llms

These examples demonstrate how to set up the entry point for a Hono application using `app.fetch` for different environments. It covers standard Cloudflare Workers setup, a simplified `export default app` approach, and configuration for Bun, allowing the Hono app to handle incoming requests.

```ts
import { Hono } from 'hono'
const app = new Hono()
type Env = any
type ExecutionContext = any
// ---cut---
export default {
  fetch(request: Request, env: Env, ctx: ExecutionContext) {
    return app.fetch(request, env, ctx)
  }
}
```

```ts
import { Hono } from 'hono'
const app = new Hono()
// ---cut---
export default app
```

```ts
export default {
  port: 3000,
  fetch: app.fetch
}
```

--------------------------------

### Setup Hono Project for Alibaba Cloud Function Compute

Source: https://context7_llms

Initializes a new Hono project for deployment to Alibaba Cloud Function Compute. This involves creating a directory, installing necessary packages (`hono`, `hono-alibaba-cloud-fc3-adapter`, `@serverless-devs/s`, `esbuild`), and setting up the basic file structure.

```sh
mkdir my-app
cd my-app
npm i hono hono-alibaba-cloud-fc3-adapter
npm i -D @serverless-devs/s esbuild
mkdir src
touch src/index.ts
```

```sh
mkdir my-app
cd my-app
yarn add hono hono-alibaba-cloud-fc3-adapter
yarn add -D @serverless-devs/s esbuild
mkdir src
touch src/index.ts
```

```sh
mkdir my-app
cd my-app
pnpm add hono hono-alibaba-cloud-fc3-adapter
pnpm add -D @serverless-devs/s esbuild
mkdir src
touch src/index.ts
```

```sh
mkdir my-app
cd my-app
bun add hono hono-alibaba-cloud-fc3-adapter
bun add -D esbuild @serverless-devs/s
mkdir src
touch src/index.ts
```

--------------------------------

### GET / (Timing Middleware Example)

Source: https://context7_llms

This endpoint demonstrates the integration of the `timing` middleware to measure and report response times, including custom metrics and database operation timings within a Hono application.

```APIDOC
## GET /

### Description
This endpoint demonstrates the integration of the `timing` middleware to measure and report response times, including custom metrics and database operation timings. It uses `setMetric`, `startTime`, `endTime`, and `wrapTime` to track various parts of the request processing.

### Method
GET

### Endpoint
/

### Parameters
#### Path Parameters
- No path parameters.

#### Query Parameters
- No query parameters.

#### Request Body
- No request body.

### Request Example
```json
{}
```

### Response
#### Success Response (200)
- **response** (object) - The data returned from the simulated database operation.

#### Response Example
```json
{
  "response": {
    "id": 1,
    "name": "Example Data"
  }
}
```
```

--------------------------------

### Hello World Hono Application on Deno

Source: https://context7_llms

TypeScript entry point for a basic Hono application running on Deno runtime. Imports Hono framework, creates a simple GET route returning 'Hello Deno!', and starts the server using Deno.serve. Serves on default port 8000.

```typescript
import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => c.text('Hello Deno!'))

Deno.serve(app.fetch)
```

--------------------------------

### GET / (Accepts Helper Example)

Source: https://context7_llms

This endpoint showcases the `accepts` helper function to determine the preferred language from the `Accept-Language` header, supporting 'en', 'ja', 'zh' and defaulting to 'en'.

```APIDOC
## GET /

### Description
This endpoint showcases the `accepts` helper function to determine the preferred language from the `Accept-Language` header. It supports 'en', 'ja', 'zh' and defaults to 'en' if no match is found.

### Method
GET

### Endpoint
/

### Parameters
#### Path Parameters
- No path parameters.

#### Query Parameters
- No query parameters.

#### Request Body
- No request body.

### Request Example
```json
{}
```

### Response
#### Success Response (200)
- **lang** (string) - The preferred language determined from the 'Accept-Language' header (e.g., 'en', 'ja', 'zh').

#### Response Example
```json
{
  "lang": "en"
}
```
```

--------------------------------

### SSG Plugin Examples - GET Only Filter

Source: https://context7_llms

Example plugin that filters and processes only GET requests during SSG. Demonstrates the use of BeforeRequestHook to skip non-GET requests.

```APIDOC
## GET Only Plugin

### Description
Filters the SSG process to only generate files for GET requests, skipping all other HTTP methods.

### Implementation

```ts
const getOnlyPlugin: SSGPlugin = {
  beforeRequestHook: (req) => {
    if (req.method === 'GET') {
      return req
    }
    return false
  },
}
```

### Hook Used
- **BeforeRequestHook**: Inspects the request method before processing

### Behavior
- Allows GET requests to proceed with file generation
- Skips all other HTTP methods (POST, PUT, DELETE, etc.)
- Returns `false` to prevent route processing for non-GET requests

### Usage

```ts
toSSG(app, fs, {
  plugins: [getOnlyPlugin],
})
```
```

--------------------------------

### Get Basic Route Information with Hono Route Helpers

Source: https://context7_llms

This example demonstrates the basic usage of `routePath()` and `matchedRoutes()` within a Hono application. It shows how to retrieve the path pattern of the current route handler and an array of all routes that matched the incoming request, providing fundamental debugging and informational capabilities.

```ts
const app = new Hono()

app.get('/posts/:id', (c) => {
  const currentPath = routePath(c) // '/posts/:id'
  const routes = matchedRoutes(c) // Array of matched routes

  return c.json({
    path: currentPath,
    totalRoutes: routes.length,
  })
})
```

--------------------------------

### JWT Middleware Setup

Source: https://hono.dev/docs/middleware/builtin/jwt

Basic setup and configuration of JWT authentication middleware in a Hono application. This example demonstrates how to protect routes with JWT verification using a secret key and algorithm specification.

```APIDOC
## JWT Auth Middleware

### Description
The JWT Auth Middleware provides authentication by verifying tokens with JWT. The middleware will check for an `Authorization` header if the `cookie` option is not set. You can customize the header name using the `headerName` option.

### Import
```typescript
import { Hono } from 'hono'
import { jwt } from 'hono/jwt'
import type { JwtVariables } from 'hono/jwt'
```

### Basic Usage
```typescript
type Variables = JwtVariables

const app = new Hono<{ Variables: Variables }>()

app.use(
  '/auth/*',
  jwt({
    secret: 'it-is-very-secret',
    alg: 'HS256',
  })
)

app.get('/auth/page', (c) => {
  return c.text('You are authorized')
})
```

### Get JWT Payload
```typescript
const app = new Hono()

app.use(
  '/auth/*',
  jwt({
    secret: 'it-is-very-secret',
    alg: 'HS256',
    issuer: 'my-trusted-issuer',
  })
)

app.get('/auth/page', (c) => {
  const payload = c.get('jwtPayload')
  return c.json(payload)
  // eg: { "sub": "1234567890", "name": "John Doe", "iat": 1516239022, "iss": "my-trusted-issuer" }
})
```

### Using Environment Variables
```javascript
app.use('/auth/*', (c, next) => {
  const jwtMiddleware = jwt({
    secret: c.env.JWT_SECRET,
    alg: 'HS256',
  })
  return jwtMiddleware(c, next)
})
```
```

--------------------------------

### Run Development Server - Multiple Package Managers

Source: https://context7_llms

Start the local development server on http://localhost:7676 using npm, yarn, pnpm, or bun. Each command runs the start script defined in package.json to enable local testing before deployment.

```shell
npm run start
```

```shell
yarn start
```

```shell
pnpm run start
```

```shell
bun run start
```

--------------------------------

### SSG Plugin Examples - Log Files Plugin

Source: https://context7_llms

Example plugin that logs all generated files after SSG completion. Demonstrates AfterGenerateHook for post-processing and monitoring.

```APIDOC
## Log Files Plugin

### Description
Logs all generated files to the console after the SSG process completes. Useful for monitoring and debugging the generation process.

### Implementation

```ts
const logFilesPlugin: SSGPlugin = {
  afterGenerateHook: (result) => {
    if (result.files) {
      result.files.forEach((file) => console.log(file))
    }
  },
}
```

### Hook Used
- **AfterGenerateHook**: Executes after the entire generation process completes

### Behavior
- Checks if the result contains a files array
- Iterates through each generated file
- Logs each file path to the console
- Executes after all other generation hooks

### Usage

```ts
toSSG(app, fs, {
  plugins: [logFilesPlugin],
})
```

### Output Example
```
/index.html
/about.html
/blog/post-1.html
/blog/post-2.html
```
```

--------------------------------

### SSG Plugin Examples - Sitemap Generation

Source: https://context7_llms

Advanced plugin example that generates a sitemap.xml file after SSG completion. Demonstrates complex AfterGenerateHook implementation with file system operations.

```APIDOC
## Sitemap Plugin

### Description
Generates a `sitemap.xml` file containing all generated pages after the SSG process completes. This plugin creates a standard XML sitemap for search engine optimization.

### Implementation

```ts
import fs from 'node:fs/promises'
import path from 'node:path'
import type { SSGPlugin } from 'hono/ssg'
import { DEFAULT_OUTPUT_DIR } from 'hono/ssg'

export const sitemapPlugin = (baseURL: string): SSGPlugin => {
  return {
    afterGenerateHook: (result, fsModule, options) => {
      const outputDir = options?.dir ?? DEFAULT_OUTPUT_DIR
      const filePath = path.join(outputDir, 'sitemap.xml')
      const urls = result.files.map((file) =>
        new URL(file, baseURL).toString()
      )
      const siteMapText = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((url) => `<url><loc>${url}</loc></url>`).join('\n')}
</urlset>`
      fsModule.writeFile(filePath, siteMapText)
    },
  }
}
```

### Hook Used
- **AfterGenerateHook**: Executes after all files are generated

### Parameters
- **baseURL** (string) - Required - The base URL for the sitemap (e.g., 'https://example.com')

### Behavior
- Retrieves the output directory from options or uses default
- Converts all generated file paths to absolute URLs
- Creates XML sitemap format with proper namespace
- Writes sitemap.xml to the output directory

### Usage

```ts
import app from './index'
import { toSSG } from 'hono/ssg'
import { sitemapPlugin } from './plugins'

toSSG(app, fs, {
  plugins: [
    sitemapPlugin('https://example.com'),
  ],
})
```

### Output Example
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
<url><loc>https://example.com/index.html</loc></url>
<url><loc>https://example.com/about.html</loc></url>
<url><loc>https://example.com/blog/post-1.html</loc></url>
</urlset>
```
```

--------------------------------

### Initialize CDK Project and Install Hono for Lambda@Edge

Source: https://context7_llms

These commands set up a new AWS CDK (Cloud Development Kit) project for TypeScript, create a `my-app` directory, initialize the CDK application, install the Hono library, and create a `lambda` directory for Lambda@Edge function code. This prepares the environment for deploying Hono on AWS Lambda@Edge.

```sh
mkdir my-app
cd my-app
cdk init app -l typescript
npm i hono
mkdir lambda
```

```sh
mkdir my-app
cd my-app
cdk init app -l typescript
yarn add hono
mkdir lambda
```

```sh
mkdir my-app
cd my-app
cdk init app -l typescript
pnpm add hono
mkdir lambda
```

```sh
mkdir my-app
cd my-app
cdk init app -l typescript
bun add hono
mkdir lambda
```

--------------------------------

### Initialize Hono Project and Install Dependencies for Node.js

Source: https://hono.dev/docs/getting-started/nodejs

These commands demonstrate how to initialize a new Hono project configured for Node.js using various package managers (npm, yarn, pnpm, bun, deno) and subsequently install the necessary dependencies within the created project directory.

```sh
npm create hono@latest my-app
```

```sh
yarn create hono my-app
```

```sh
pnpm create hono my-app
```

```sh
bun create hono@latest my-app
```

```sh
deno init --npm hono my-app
```

```sh
cd my-app
npm i
```

```sh
cd my-app
yarn
```

```sh
cd my-app
pnpm i
```

```sh
cd my-app
bun i
```

--------------------------------

### Navigate and Install Dependencies for Hono Project (Node.js)

Source: https://context7_llms

After creating the Hono project, navigate into the project directory and install all required dependencies using npm. This prepares the project for development and running.

```sh
cd my-app
npm i
```

--------------------------------

### Handle POST and DELETE requests in Hono

Source: https://context7_llms

Demonstrate POST and DELETE HTTP method handlers in Hono. POST example returns 201 Created status, DELETE example uses path parameter to identify resource. Shows multiple HTTP verb support beyond GET.

```typescript
app.post('/posts', (c) => c.text('Created!', 201))
app.delete('/posts/:id', (c) =>
  c.text(`${c.req.param('id')} is deleted!`)
)
```

--------------------------------

### Server-Side RPC Route Setup

Source: https://hono.dev/docs/guides/rpc

Configure a server-side route with validation and export its type signature for client consumption. This example demonstrates creating a POST endpoint with Zod validation that returns a JSON response.

```APIDOC
## POST /posts

### Description
Server-side RPC route definition that accepts form data with title and body fields, validates them using Zod, and returns a success response with a message.

### Method
POST

### Endpoint
/posts

### Parameters
#### Request Body (Form Data)
- **title** (string) - Required - The title of the post
- **body** (string) - Required - The body content of the post

### Request Example
```typescript
const route = app.post(
  '/posts',
  zValidator(
    'form',
    z.object({
      title: z.string(),
      body: z.string(),
    })
  ),
  (c) => {
    // Handler logic
    return c.json(
      {
        ok: true,
        message: 'Created!',
      },
      201
    )
  }
)

export type AppType = typeof route
```

### Response
#### Success Response (201)
- **ok** (boolean) - Indicates successful creation
- **message** (string) - Success message

#### Response Example
```json
{
  "ok": true,
  "message": "Created!"
}
```
```

--------------------------------

### GET / (Accepts Helper Example)

Source: https://hono.dev/docs/helpers/accepts

This endpoint demonstrates how to use the `accepts` helper to determine the preferred language from the `Accept-Language` header and return it in a JSON response. It supports 'en', 'ja', and 'zh', defaulting to 'en'.

```APIDOC
## GET /

### Description
This endpoint uses the `accepts` helper to parse the `Accept-Language` header from the incoming request. It checks if the client supports 'en', 'ja', or 'zh' and returns the preferred language. If no supported language is found, it defaults to 'en'.

### Method
GET

### Endpoint
/

### Parameters
#### Path Parameters
(None)

#### Query Parameters
(None)

#### Request Body
(None)

### Request Example
{}

### Response
#### Success Response (200)
- **lang** (string) - The preferred language determined from the `Accept-Language` header.

#### Response Example
{
  "lang": "ja"
}
```

--------------------------------

### Initialize Hono Project with CDK for AWS Lambda

Source: https://hono.dev/docs/getting-started/aws-lambda

Setup a new Hono project with AWS CDK using TypeScript. Creates project structure with lambda directory and installs required dependencies (hono and esbuild). Supports multiple package managers: npm, yarn, pnpm, and bun.

```shell
mkdir my-app
cd my-app
cdk init app -l typescript
npm i hono
npm i -D esbuild
mkdir lambda
touch lambda/index.ts
```

--------------------------------

### Import Hono Quick Preset (TypeScript)

Source: https://context7_llms

This example demonstrates how to import the `Hono` class using the `/quick` preset. This preset is specifically optimized for environments where the application is initialized for every request, prioritizing faster startup times over long-term routing performance.

```ts
import { Hono } from 'hono/quick'
```

--------------------------------

### Hello World Endpoint with Hono on Cloudflare Workers

Source: https://hono.dev/getting-started/cloudflare-workers

Create a basic Hono application with a single GET endpoint that returns a text response. This example demonstrates the minimal setup required to create a working Cloudflare Workers application using Hono, with TypeScript support via Wrangler's built-in transpiler.

```typescript
import { Hono } from 'hono'
const app = new Hono()

app.get('/', (c) => c.text('Hello Cloudflare Workers!'))

export default app
```

--------------------------------

### Filter GET Requests Only Plugin

Source: https://hono.dev/docs/helpers/ssg

Example plugin that implements BeforeRequestHook to filter and process only GET requests, skipping all other HTTP methods during the toSSG process.

```APIDOC
## GET Only Filter Plugin

### Description
Filters the toSSG process to only generate static files for GET requests, skipping all other HTTP methods.

### Implementation
```typescript
const getOnlyPlugin: SSGPlugin = {
  beforeRequestHook: (req) => {
    if (req.method === 'GET') {
      return req
    }
    return false
  },
}
```

### Hook Used
- **beforeRequestHook**: Examines each request before processing

### Logic
1. Check if the request method is 'GET'
2. If true, return the request object to continue processing
3. If false, return `false` to skip the route and prevent file generation

### Use Cases
- Generate static files only for GET endpoints
- Exclude POST, PUT, DELETE, and other non-idempotent methods
- Optimize static site generation for read-only routes
```

--------------------------------

### Get basic route information in Hono

Source: https://hono.dev/docs/helpers/route

This example illustrates how to retrieve fundamental route information within a Hono GET handler. It uses `routePath(c)` to get the current route pattern and `matchedRoutes(c)` to obtain an array of all routes that matched the request, returning this data as a JSON response.

```ts
const app = new Hono()

app.get('/posts/:id', (c) => {
  const currentPath = routePath(c) // '/posts/:id'
  const routes = matchedRoutes(c) // Array of matched routes

  return c.json({
    path: currentPath,
    totalRoutes: routes.length,
  })
})
```

--------------------------------

### Create a Basic Hono GET Endpoint

Source: https://hono.dev/docs/concepts/stacks

This snippet demonstrates how to set up a basic GET endpoint using Hono. It initializes a Hono application and defines a route `/hello` that responds with a JSON object containing a simple 'Hello!' message. This serves as the foundation for building Hono-based APIs.

```typescript
import { Hono } from 'hono'

const app = new Hono()

app.get('/hello', (c) => {
  return c.json({
    message: `Hello!`,
  })
})
```

--------------------------------

### Generate Static Site with Hono SSG using Deno and Bun Adapters

Source: https://hono.dev/docs/helpers/ssg

These examples demonstrate how to use the `toSSG` function with platform-specific adapters for Deno and Bun environments. Each adapter simplifies static site generation by providing a `toSSG` function that integrates with the respective runtime's file system.

```ts
import { toSSG } from 'hono/deno'

toSSG(app) // The second argument is an option typed `ToSSGOptions`.
```

```ts
import { toSSG } from 'hono/bun'

toSSG(app) // The second argument is an option typed `ToSSGOptions`.
```

--------------------------------

### Example of signing a JWT token with Hono

Source: https://hono.dev/docs/helpers/jwt

This example shows how to use the `sign()` function to create a JWT. It defines a payload with user information and an expiration time, then signs it with a secret key to generate a token.

```ts
import { sign } from 'hono/jwt'

const payload = {
  sub: 'user123',
  role: 'admin',
  exp: Math.floor(Date.now() / 1000) + 60 * 5, // Token expires in 5 minutes
}
const secret = 'mySecretKey'
const token = await sign(payload, secret)
```

--------------------------------

### WebSocket with Bun and JSX Example

Source: https://context7_llms

Complete Bun example combining WebSocket server with JSX HTML rendering. The server sends current time to connected clients every 200ms, and the client displays it in real-time on the webpage.

```typescript
import { Hono } from 'hono'
import { upgradeWebSocket, websocket } from 'hono/bun'
import { html } from 'hono/html'

const app = new Hono()

app.get('/', (c) => {
  return c.html(
    <html>
      <head>
        <meta charset='UTF-8' />
      </head>
      <body>
        <div id='now-time'></div>
        {html`
          <script>
            const ws = new WebSocket('ws://localhost:3000/ws')
            const $nowTime = document.getElementById('now-time')
            ws.onmessage = (event) => {
              $nowTime.textContent = event.data
            }
          </script>
        `}
      </body>
    </html>
  )
})

const ws = app.get(
  '/ws',
  upgradeWebSocket((c) => {
    let intervalId
    return {
      onOpen(_event, ws) {
        intervalId = setInterval(() => {
          ws.send(new Date().toString())
        }, 200)
      },
      onClose() {
        clearInterval(intervalId)
      },
    }
  })
)

export default {
  fetch: app.fetch,
  websocket,
}
```

--------------------------------

### Define Simple Hono Route for Type Inference Example (TypeScript)

Source: https://context7_llms

This code provides a minimal Hono route definition used to illustrate the impact of Hono's type inference on IDE performance. It shows a basic GET route and explains how the deep type instantiation for even a single route can lead to slower IDE responsiveness due to extensive type computations.

```ts
// app.ts
export const app = new Hono().get('foo/:id', (c) =>
  c.json({ ok: true }, 200)
)
```

--------------------------------

### GET /auth/page (JWK Auth - Basic Usage)

Source: https://context7_llms

An example endpoint protected by the JWK authentication middleware. Requires a valid JWT token in the `Authorization` header, verified against JWKS from a specified URI.

```APIDOC
## GET /auth/page

### Description
An example endpoint protected by the JWK authentication middleware. Requires a valid JWT token in the `Authorization` header, verified against JWKS from a specified URI.

### Method
GET

### Endpoint
/auth/page

### Parameters
#### Path Parameters
- None

#### Query Parameters
- None

#### Request Body
- None

### Request Example
```
GET /auth/page
Authorization: Bearer <your_jwt_token>
```

### Response
#### Success Response (200)
- **message** (string) - A simple text message indicating successful authorization.

#### Response Example
```
You are authorized
```
```

--------------------------------

### GET /static/*

Source: https://hono.dev/docs/getting-started/nodejs

Configure Hono to serve static files from a local directory when the request path matches `/static/*`. For example, a request to `/static/hello.txt` would serve `./static/hello.txt` if `root` is `./`.

```APIDOC
## GET /static/*

### Description
Configures Hono to serve static files from a specified root directory when the request path matches the pattern `/static/*`. This is useful for serving assets like CSS, JavaScript, or images.

### Method
GET

### Endpoint
/static/*

### Parameters
#### Request Body (serveStatic options)
- **root** (string) - Required - The base directory from which to serve static files. In this example, it's the project root.

### Request Example
```typescript
import { serveStatic } from '@hono/node-server/serve-static'

app.use('/static/*', serveStatic({ root: './' }))
```

### Response
#### Success Response (200)
- **file_content** (any) - The content of the requested static file.

#### Response Example
```text
(Content of ./static/hello.txt or ./static/image.png)
```
```

--------------------------------

### WebSocket Server and Client Example

Source: https://context7_llms

Complete example demonstrating a WebSocket server that logs incoming messages and a client that sends the current date/time every second. Uses Hono's hc client for type-safe communication.

```typescript
// server.ts
import { Hono } from 'hono'
import { upgradeWebSocket } from 'hono/cloudflare-workers'

const app = new Hono().get(
  '/ws',
  upgradeWebSocket(() => {
    return {
      onMessage: (event) => {
        console.log(event.data)
      },
    }
  })
)

export default app
```

```typescript
// client.ts
import { hc } from 'hono/client'
import type app from './server'

const client = hc<typeof app>('http://localhost:8787')
const ws = client.ws.$ws(0)

ws.addEventListener('open', () => {
  setInterval(() => {
    ws.send(new Date().toString())
  }, 1000)
})
```

--------------------------------

### Create a Basic Hono GET API Endpoint (TypeScript)

Source: https://context7_llms

This snippet demonstrates how to set up a basic GET endpoint using Hono. It initializes a Hono application and defines a '/hello' route that returns a JSON response with a simple message. This serves as the foundation for building Hono APIs.

```ts
import { Hono } from 'hono'

const app = new Hono()

app.get('/hello', (c) => {
  return c.json({
    message: `Hello!`
  })
})
```

--------------------------------

### Install Hono and Azure Functions Adapter

Source: https://context7_llms

Commands for installing the Hono framework and the `@marplex/hono-azurefunc-adapter` package using various Node.js package managers. These dependencies are crucial for running Hono applications on Azure Functions.

```sh
npm i @marplex/hono-azurefunc-adapter hono
```

```sh
yarn add @marplex/hono-azurefunc-adapter hono
```

```sh
pnpm add @marplex/hono-azurefunc-adapter hono
```

```sh
bun add @marplex/hono-azurefunc-adapter hono
```

--------------------------------

### Basic View Transition with startViewTransition Hook

Source: https://context7_llms

Demonstrates the simplest usage of startViewTransition() to handle View Transitions API. The example toggles between a small and large image with a smooth transition effect. Requires importing startViewTransition from hono/jsx and Style component from hono/css.

```typescript
import { useState, startViewTransition } from 'hono/jsx'
import { css, Style } from 'hono/css'

export default function App() {
  const [showLargeImage, setShowLargeImage] = useState(false)
  return (
    <>
      <Style />
      <button
        onClick={() =>
          startViewTransition(() =>
            setShowLargeImage((state) => !state)
          )
        }
      >
        Click!
      </button>
      <div>
        {!showLargeImage ? (
          <img src='https://hono.dev/images/logo.png' />
        ) : (
          <div
            class={css`
              background: url('https://hono.dev/images/logo-large.png');
              background-size: contain;
              background-repeat: no-repeat;
              background-position: center;
              width: 600px;
              height: 600px;
            `}
          ></div>
        )}
      </div>
    </>
  )
}
```

--------------------------------

### Install Dependencies and Initialize TypeScript with npm

Source: https://context7_llms

Install project dependencies and initialize TypeScript configuration file (tsconfig.json) in a Hono WebAssembly project using npm package manager.

```shell
npm i
npx tsc --init
```

--------------------------------

### Install Dependencies and Initialize TypeScript with yarn

Source: https://context7_llms

Install project dependencies and initialize TypeScript configuration file (tsconfig.json) in a Hono WebAssembly project using yarn package manager.

```shell
yarn
yarn tsc --init
```

--------------------------------

### Validate Hono GET Endpoint Query Parameters with Zod

Source: https://hono.dev/docs/concepts/stacks

This example extends the Hono GET endpoint to include query parameter validation using Zod and `@hono/zod-validator`. It ensures that the `name` query parameter is a string before processing the request. The validated `name` is then used to construct a personalized JSON response.

```typescript
import { zValidator } from '@hono/zod-validator'
import * as z from 'zod'

app.get(
  '/hello',
  zValidator(
    'query',
    z.object({
      name: z.string(),
    })
  ),
  (c) => {
    const { name } = c.req.valid('query')
    return c.json({
      message: `Hello! ${name}`,
    })
  }
)
```

--------------------------------

### Install Dependencies with bun

Source: https://context7_llms

Install project dependencies in a Hono WebAssembly project using bun package manager.

```shell
bun i
```

--------------------------------

### Setup Pretty JSON Middleware in Hono Application

Source: https://hono.dev/docs/middleware/builtin/pretty-json

Initialize a Hono application and apply the prettyJSON middleware to enable JSON pretty printing. The middleware can be configured with optional parameters like space for indentation. When a GET request is made to the root path, it returns a JSON response that will be prettified if the query parameter is present.

```typescript
const app = new Hono()

app.use(prettyJSON()) // With options: prettyJSON({ space: 4 })
app.get('/', (c) => {
  return c.json({ message: 'Hono!' })
})
```

--------------------------------

### ALL /api/*

Source: https://hono.dev/docs/helpers/route

A wildcard route demonstrating a middleware that matches all methods and paths under `/api/`. This example shows a common pattern for applying middleware to a broad set of routes.

```APIDOC
## ALL /api/*

### Description
This route acts as a middleware, matching any HTTP method and any path that starts with `/api/`. It proceeds to the next middleware or route handler in the stack, allowing for common processing logic across multiple API endpoints.

### Method
ALL

### Endpoint
/api/*

### Parameters
#### Path Parameters
- **\*** (string) - Required - Wildcard representing any path segment(s) following `/api/`.

#### Query Parameters
(None)

#### Request Body
(None)

### Request Example
(Not applicable for this middleware example)

### Response
#### Success Response (200)
(No explicit response body shown, as it typically calls `next()` to pass control to subsequent handlers)

#### Response Example
(No explicit response body shown)
```

--------------------------------

### Initialize a New Hono Project

Source: https://hono.dev/docs

These commands provide various ways to quickly set up a new Hono application using different package managers or runtimes. Choose the command that corresponds to your preferred environment (npm, yarn, pnpm, bun, or deno) to scaffold a new Hono project.

```sh
npm create hono@latest
```

```sh
yarn create hono
```

```sh
pnpm create hono@latest
```

```sh
bun create hono@latest
```

```sh
deno init --npm hono@latest
```

--------------------------------

### Initialize Hono App with Service Worker Handler

Source: https://hono.dev/docs/getting-started/service-worker

Creates a Hono application instance with a base path of '/sw', defines a GET route that returns 'Hello World', and registers a fetch event listener using Hono's service worker handler. This setup allows the Service Worker to intercept and handle HTTP requests routed through the Hono application.

```javascript
import { handle } from 'hono/service-worker'

const app = new Hono().basePath('/sw')
app.get('/', (c) => c.text('Hello World'))

self.addEventListener('fetch', handle(app))
```

--------------------------------

### Use routePath() to get the current route pattern in Hono

Source: https://hono.dev/docs/helpers/route

This snippet demonstrates the `routePath()` function, which returns the exact route path pattern (e.g., '/posts/:id') that was registered for the currently executing handler. It provides a straightforward example of logging the route path within a Hono GET request handler.

```ts
app.get('/posts/:id', (c) => {
  console.log(routePath(c)) // '/posts/:id'
  return c.text('Post details')
})
```

--------------------------------

### GET / (Basic HTML Rendering)

Source: https://hono.dev/docs/api/context

Shows how to set a global renderer with `c.setRenderer()` in a middleware and then use `c.render()` to wrap content in a basic HTML layout.

```APIDOC
## GET /

### Description
This endpoint demonstrates basic HTML rendering using `c.setRenderer()` to define a layout in a middleware and `c.render()` to inject content into that layout within a route handler.

### Method
GET

### Endpoint
/

### Parameters
#### Path Parameters
- N/A

#### Query Parameters
- N/A

#### Request Body
- N/A

### Request Example
```json
{}
```

### Response
#### Success Response (200)
- **body** (string) - HTML content rendered with the defined layout.

#### Response Example
```html
<html>
  <body>
    <p>Hello!</p>
  </body>
</html>
```
```

--------------------------------

### GET /api/users/:id

Source: https://hono.dev/docs/helpers/route

Retrieves details for a specific user ID. This example also demonstrates the usage of `routePath` to inspect the matched route paths at different positions in the routing stack.

```APIDOC
## GET /api/users/:id

### Description
This endpoint fetches details for a user identified by their unique `id`. It also illustrates how to use `routePath(c, 0)` to get the first matched route (`/api/*` from the middleware) and `routePath(c, -1)` to get the last matched route (`/api/users/:id`), providing insight into the routing chain.

### Method
GET

### Endpoint
/api/users/:id

### Parameters
#### Path Parameters
- **id** (string) - Required - The unique identifier of the user to retrieve.

#### Query Parameters
(None)

#### Request Body
(None)

### Request Example
(No specific request body for GET requests)

### Response
#### Success Response (200)
- **body** (string) - A plain text message indicating user details.

#### Response Example
```
User details
```
```

--------------------------------

### Install Dependencies and Initialize TypeScript with pnpm

Source: https://context7_llms

Install project dependencies and initialize TypeScript configuration file (tsconfig.json) in a Hono WebAssembly project using pnpm package manager.

```shell
pnpm i
pnpm exec --init
```

--------------------------------

### GET /:sub/posts/:id

Source: https://hono.dev/docs/helpers/route

Retrieves details for a specific post ID within a sub-application context. This example demonstrates the usage of `baseRoutePath` to identify the base path pattern of the current route.

```APIDOC
## GET /:sub/posts/:id

### Description
This endpoint is part of a sub-application mounted at a dynamic base path `/:sub`. It retrieves details for a post identified by `id` and demonstrates the use of `baseRoutePath(c)` to return the base path pattern of the current route, which is `/:sub` in this nested routing scenario.

### Method
GET

### Endpoint
/:sub/posts/:id

### Parameters
#### Path Parameters
- **sub** (string) - Required - The base path segment for the sub-application where the posts route is mounted.
- **id** (string) - Required - The unique identifier of the post to retrieve.

#### Query Parameters
(None)

#### Request Body
(None)

### Request Example
(No specific request body for GET requests)

### Response
#### Success Response (200)
- **body** (string) - The base route path pattern of the current route.

#### Response Example
```
/:sub
```
```

--------------------------------

### Configure Hono Client with Custom Fetch Method for Cloudflare Workers (TOML, TypeScript)

Source: https://hono.dev/docs/guides/rpc

This example illustrates how to provide a custom `fetch` method to the Hono client. It specifically shows a Cloudflare Worker setup where a Service Binding's `fetch` method is used instead of the default global `fetch`, enabling interaction with other services.

```toml
# wrangler.toml
services = [
  { binding = "AUTH", service = "auth-service" },
]
```

```ts
// src/client.ts
const client = hc<CreateProfileType>('http://localhost', {
      fetch: c.env.AUTH.fetch.bind(c.env.AUTH),
    })
```

--------------------------------

### Run Hono Application with Cloudflare Wrangler CLI

Source: https://context7_llms

This command demonstrates how to start a Hono application using the Cloudflare Wrangler CLI. It minifies the application code located at `./src/index.ts` and initiates a development server, listening for requests on specified local network addresses. The output also shows the minified and gzipped size of the application.

```bash
npx wrangler dev --minify ./src/index.ts
```

--------------------------------

### Install ArkType via yarn

Source: https://hono.dev/docs/guides/validation

Install the ArkType package using yarn package manager as an alternative to npm.

```shell
yarn add arktype
```

--------------------------------

### Configure Hono to Trim Trailing Slashes from URLs

Source: https://context7_llms

This example illustrates how to implement the `trimTrailingSlash` middleware in Hono. It redirects GET requests to URLs with a trailing slash to their equivalent without a trailing slash, particularly useful when handling 404 responses.

```ts
import { Hono } from 'hono'
import { trimTrailingSlash } from 'hono/trailing-slash'

const app = new Hono({ strict: true })

app.use(trimTrailingSlash())
app.get('/about/me', (c) => c.text('Without Trailing Slash'))
```

--------------------------------

### Add Hono to Existing Bun Project

Source: https://context7_llms

Demonstrates how to install Hono in an existing Bun project and configure the dev script in package.json for hot-reloading during development.

```shell
bun add hono
```

--------------------------------

### Install ArkType via bun

Source: https://hono.dev/docs/guides/validation

Install the ArkType package using bun package manager, a modern JavaScript runtime and package manager.

```shell
bun add arktype
```

--------------------------------

### Create Hello World Hono application

Source: https://context7_llms

Basic Hono application demonstrating app initialization and simple GET route handler. Returns plain text response. The import and export statements may vary by runtime, but core application logic remains consistent across all platforms.

```typescript
import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

export default app
```

--------------------------------

### Install Hono Node.js Adapter for Next.js Pages Router

Source: https://context7_llms

These commands install the `@hono/node-server` package, which is required when integrating Hono with the Next.js Pages Router. This adapter provides the necessary utilities for Hono to run in a Node.js environment compatible with the Pages Router.

```sh
npm i @hono/node-server
```

```sh
yarn add @hono/node-server
```

```sh
pnpm add @hono/node-server
```

```sh
bun add @hono/node-server
```

--------------------------------

### Example of verifying a JWT token with Hono

Source: https://hono.dev/docs/helpers/jwt

This example demonstrates how to use the `verify()` function to validate a JWT. It takes a token string, a secret key, and the algorithm, then logs the decoded payload if the token is valid.

```ts
import { verify } from 'hono/jwt'

const tokenToVerify = 'token'
const secretKey = 'mySecretKey'

const decodedPayload = await verify(tokenToVerify, secretKey, 'HS256')
console.log(decodedPayload)
```

--------------------------------

### Apply Basic Auth to Specific Route and Method - TypeScript

Source: https://hono.dev/docs/middleware/builtin/basic-auth

Apply Basic authentication to a specific HTTP method on a route. This example protects only the DELETE method on '/auth/page' while allowing GET requests without authentication.

```typescript
const app = new Hono()

app.get('/auth/page', (c) => {
  return c.text('Viewing page')
})

app.delete(
  '/auth/page',
  basicAuth({ username: 'hono', password: 'acoolproject' }),
  (c) => {
    return c.text('Page deleted')
  }
)
```

--------------------------------

### Basic CORS Middleware Setup - Hono TypeScript

Source: https://hono.dev/docs/middleware/builtin/cors

Configure basic CORS middleware with default settings and custom options. CORS middleware must be applied before route definitions. Includes examples with default wildcard origin and custom origin with specific headers and methods.

```typescript
const app = new Hono()

// CORS should be called before the route
app.use('/api/*', cors())
app.use(
  '/api2/*',
  cors({
    origin: 'http://example.com',
    allowHeaders: ['X-Custom-Header', 'Upgrade-Insecure-Requests'],
    allowMethods: ['POST', 'GET', 'OPTIONS'],
    exposeHeaders: ['Content-Length', 'X-Kuma-Revision'],
    maxAge: 600,
    credentials: true,
  })
)

app.all('/api/abc', (c) => {
  return c.json({ success: true })
})
app.all('/api2/abc', (c) => {
  return c.json({ success: true })
})
```

--------------------------------

### Chain HTTP Methods on a Single Hono Route

Source: https://hono.dev/docs/api/routing

This example demonstrates Hono's chained routing feature, allowing multiple HTTP methods (GET, POST, DELETE) to be defined for the same path in a concise, fluent manner. This improves readability and organization when handling different operations on a single resource.

```ts
app
  .get('/endpoint', (c) => {
    return c.text('GET /endpoint')
  })
  .post((c) => {
    return c.text('POST /endpoint')
  })
  .delete((c) => {
    return c.text('DELETE /endpoint')
  })
```

--------------------------------

### GET Basic Routing

Source: https://context7_llms

Demonstrates basic HTTP method routing including GET, POST, PUT, DELETE, wildcards, and custom HTTP methods.

```APIDOC
## GET/POST/PUT/DELETE Basic Routes

### Description
Basic HTTP method routing with various patterns including wildcards and custom methods.

### Methods
GET, POST, PUT, DELETE, PURGE, or any custom HTTP method

### Endpoints
- `GET /` - Basic GET request
- `POST /` - Basic POST request
- `PUT /` - Basic PUT request
- `DELETE /` - Basic DELETE request
- `GET /wild/*/card` - Wildcard pattern
- `GET/POST/PUT/DELETE /hello` - Any HTTP method
- `PURGE /cache` - Custom HTTP method
- `PUT/DELETE /post` - Multiple methods
- `GET /hello`, `/ja/hello`, `/en/hello` - Multiple paths

### Request Examples
```ts
// HTTP Methods
app.get('/', (c) => c.text('GET /'))
app.post('/', (c) => c.text('POST /'))
app.put('/', (c) => c.text('PUT /'))
app.delete('/', (c) => c.text('DELETE /'))

// Wildcard
app.get('/wild/*/card', (c) => {
  return c.text('GET /wild/*/card')
})

// Any HTTP methods
app.all('/hello', (c) => c.text('Any Method /hello'))

// Custom HTTP method
app.on('PURGE', '/cache', (c) => c.text('PURGE Method /cache'))

// Multiple Methods
app.on(['PUT', 'DELETE'], '/post', (c) =>
  c.text('PUT or DELETE /post')
)

// Multiple Paths
app.on('GET', ['/hello', '/ja/hello', '/en/hello'], (c) =>
  c.text('Hello')
)
```

### Response Examples
```
GET /
POST /
GET /wild/*/card
Any Method /hello
PURGE Method /cache
PUT or DELETE /post
Hello
```
```

--------------------------------

### Create Hello World Hono App with Fastly Compute

Source: https://context7_llms

Initialize a basic Hono application for Fastly Compute using the fire function from @fastly/hono-fastly-compute. This creates a simple GET endpoint that returns 'Hello Fastly!' and uses Hono from 'hono' rather than 'hono/quick' for proper router initialization.

```typescript
// src/index.ts
import { Hono } from 'hono'
import { fire } from '@fastly/hono-fastly-compute'

const app = new Hono()

app.get('/', (c) => c.text('Hello Fastly!'))

fire(app)
```

--------------------------------

### Initialize Hono WebAssembly Project with bun

Source: https://context7_llms

Create a new Hono WebAssembly project directory and install required dependencies including Hono framework, Bytecode Alliance tools (jco, componentize-js, jco-std) using bun package manager.

```shell
mkdir my-app
cd my-app
npm init
bun add hono
bun add -D @bytecodealliance/jco @bytecodealliance/componentize-js @bytecodealliance/jco-std
```

--------------------------------

### Adding Custom Headers to a Single Hono Client Request

Source: https://context7_llms

This example shows how to include custom HTTP headers for a specific client request. Headers are passed as an object within the options argument of the `$get` (or other HTTP method) call, allowing for request-specific header customization.

```ts
const res = await client.search.$get(
  {
    //...
  },
  {
    headers: {
      'X-Custom-Header': 'Here is Hono Client',
      'X-User-Agent': 'hc',
    },
  }
)
```

--------------------------------

### Initialize Supabase Project

Source: https://context7_llms

Initializes a new Supabase project in the current directory. This command sets up the necessary configuration files and directory structure for a Supabase project.

```bash
supabase init
```

--------------------------------

### Initialize Service Worker with Hono (TypeScript)

Source: https://hono.dev/docs/getting-started/service-worker

Starts the `sw.ts` file, declaring `self` as `ServiceWorkerGlobalScope` for type support and importing the `Hono` class. This is the initial setup for creating a Hono application within the Service Worker context, allowing Hono to handle fetch events.

```ts
// To support types
// https://github.com/microsoft/TypeScript/issues/14877
declare const self: ServiceWorkerGlobalScope

import { Hono } from 'hono'
```

--------------------------------

### Start Vite Development Server

Source: https://context7_llms

Multi-package manager commands to start the Vite development server for Service Worker development. Server runs on port 5173 by default.

```shell
npm run dev
```

```shell
yarn dev
```

```shell
pnpm run dev
```

```shell
bun run dev
```

--------------------------------

### Initialize app with createFactory() initApp option

Source: https://context7_llms

Use the initApp option in createFactory() to initialize the application with middleware or setup logic. Useful for configuring database connections or other initialization tasks.

```typescript
type Env = {
  Bindings: {
    MY_DB: D1Database
  }
  Variables: {
    db: DrizzleD1Database
  }
}

export default createFactory<Env>({
  initApp: (app) => {
    app.use(async (c, next) => {
      const db = drizzle(c.env.MY_DB)
      c.set('db', db)
      await next()
    })
  },
})
```

```typescript
import factoryWithDB from './factory-with-db'

const app = factoryWithDB.createApp()

app.post('/posts', (c) => {
  c.var.db.insert()
  // ...
})
```

--------------------------------

### Create Hono Project with Template Selection

Source: https://context7_llms

Shows command-line syntax for create-hono initializer with template selection across different package managers. Arguments must be passed after -- for npm, but directly for yarn, pnpm, bun, and deno. The --template flag allows selecting specific project templates like cloudflare-workers.

```shell
# npm requires `--` to forward arguments to create-hono
npm create hono@latest my-app -- --template cloudflare-workers
```

```shell
# yarn - template argument passed directly
yarn create hono my-app --template cloudflare-workers
```

```shell
# pnpm - template argument passed directly
pnpm create hono@latest my-app --template cloudflare-workers
```

```shell
# bun - template argument passed directly
bun create hono@latest my-app --template cloudflare-workers
```

```shell
# deno - template argument passed directly
deno init --npm hono@latest my-app --template cloudflare-workers
```

--------------------------------

### Implement Multiple Bearer Tokens with Role-Based Access - Hono TypeScript

Source: https://hono.dev/docs/middleware/builtin/bearer-auth

Support multiple tokens with different privilege levels. This example allows any valid token for GET requests but restricts POST, PUT, PATCH, and DELETE operations to a privileged token.

```typescript
const app = new Hono()

const readToken = 'read'
const privilegedToken = 'read+write'
const privilegedMethods = ['POST', 'PUT', 'PATCH', 'DELETE']

app.on('GET', '/api/page/*', async (c, next) => {
  // List of valid tokens
  const bearer = bearerAuth({ token: [readToken, privilegedToken] })
  return bearer(c, next)
})
app.on(privilegedMethods, '/api/page/*', async (c, next) => {
  // Single valid privileged token
  const bearer = bearerAuth({ token: privilegedToken })
  return bearer(c, next)
})

// Define handlers for GET, POST, etc.
```

--------------------------------

### Create Hono app with JSX and WebSocket on Bun

Source: https://hono.dev/docs/helpers/websocket

Sets up a Hono application with a GET route that serves JSX-rendered HTML containing a WebSocket client script, and a WebSocket endpoint that broadcasts the current time to connected clients at regular intervals. Requires the 'hono' package and Bun runtime with WebSocket support.

```typescript
import { Hono } from 'hono'
import { upgradeWebSocket, websocket } from 'hono/bun'
import { html } from 'hono/html'

const app = new Hono()

app.get('/', (c) => {
  return c.html(
    <html>
      <head>
        <meta charset='UTF-8' />
      </head>
      <body>
        <div id='now-time'></div>
        {html`
          <script>
            const ws = new WebSocket('ws://localhost:3000/ws')
            const $nowTime = document.getElementById('now-time')
            ws.onmessage = (event) => {
              $nowTime.textContent = event.data
            }
          </script>
        `}
      </body>
    </html>
  )
})

const ws = app.get(
  '/ws',
  upgradeWebSocket((c) => {
    let intervalId
    return {
      onOpen(_event, ws) {
        intervalId = setInterval(() => {
          ws.send(new Date().toString())
        }, 200)
      },
      onClose() {
        clearInterval(intervalId)
      }
    }
  })
)

export default {
  fetch: app.fetch,
  websocket
}
```

--------------------------------

### Apply Bearer Auth to Specific Route and Method - Hono TypeScript

Source: https://hono.dev/docs/middleware/builtin/bearer-auth

Restrict bearer authentication to specific HTTP methods on particular routes. This example protects only POST requests while leaving GET requests unprotected.

```typescript
const app = new Hono()

const token = 'honoiscool'

app.get('/api/page', (c) => {
  return c.json({ message: 'Read posts' })
})

app.post('/api/page', bearerAuth({ token }), (c) => {
  return c.json({ message: 'Created post!' }, 201)
})
```

--------------------------------

### Install Valibot Package

Source: https://hono.dev/docs/guides/validation

This snippet provides commands to install Valibot using different Node.js package managers. Valibot is a schema validation library used as a lightweight alternative to Zod.

```shell
npm i valibot
```

```shell
yarn add valibot
```

```shell
pnpm add valibot
```

```shell
bun add valibot
```

--------------------------------

### Install ArkType via pnpm

Source: https://hono.dev/docs/guides/validation

Install the ArkType package using pnpm package manager for faster and more efficient dependency management.

```shell
pnpm add arktype
```

--------------------------------

### Example console output for Hono `showRoutes()`

Source: https://hono.dev/docs/helpers/dev

This snippet shows the expected console output from the `showRoutes()` function. It lists the HTTP methods and paths for all registered routes in a clear, readable format.

```txt
GET   /v1/posts
GET   /v1/posts/:id
POST  /v1/posts
```

--------------------------------

### Initialize Hono Project with Deno

Source: https://context7_llms

Shell command to initialize a new Hono project using Deno runtime. Creates a project template with npm compatibility and Deno-specific configuration. Generates a my-app directory with starter files.

```shell
deno init --npm hono --template=deno my-app
```

--------------------------------

### GET /api/

Source: https://hono.dev/docs/concepts/stacks

Retrieves all existing todo items. Returns an array of todo objects.

```APIDOC
## GET /api/

### Description
Retrieves a list of all todo items currently stored on the server.

### Method
GET

### Endpoint
/api/

### Parameters
#### Path Parameters
(None)

#### Query Parameters
(None)

#### Request Body
(None)

### Request Example
(None)

### Response
#### Success Response (200)
- **todos** (array) - An array of todo objects.
  - **id** (string) - Unique identifier for the todo item.
  - **title** (string) - The title or description of the todo item.

#### Response Example
{
  "todos": [
    {
      "id": "1678886400000",
      "title": "Write code"
    },
    {
      "id": "1678886401000",
      "title": "Buy groceries"
    }
  ]
}
```

--------------------------------

### Install Azure Functions Core Tools on macOS

Source: https://context7_llms

Commands to install the Azure Functions Core Tools on macOS using Homebrew. These tools are essential for creating, running, and managing Azure Functions locally.

```sh
brew tap azure/functions
brew install azure-functions-core-tools@4
```

--------------------------------

### Initialize Hono WebAssembly Project with npm

Source: https://context7_llms

Create a new Hono WebAssembly project directory and install required dependencies including Hono framework, Bytecode Alliance tools (jco, componentize-js, jco-std), and Rolldown bundler using npm package manager.

```shell
mkdir my-app
cd my-app
npm init
npm i hono
npm i -D @bytecodealliance/jco @bytecodealliance/componentize-js @bytecodealliance/jco-std
npm i -D rolldown
```

--------------------------------

### GET /search (with custom headers)

Source: https://hono.dev/docs/guides/rpc

Shows how to send custom headers with a GET request using the Hono client. Common headers can also be set globally for the client.

```APIDOC
## GET /search

### Description
This endpoint performs a search operation and demonstrates how to include custom HTTP headers in the request using the Hono client.

### Method
GET

### Endpoint
/search

### Parameters
#### Path Parameters
(None)

#### Query Parameters
(None)

#### Request Body
(None)

### Headers
- **X-Custom-Header** (string) - Optional - A custom header value.
- **X-User-Agent** (string) - Optional - An identifier for the user agent.

### Request Example
```typescript
// client.ts
const res = await client.search.$get(
  {},
  {
    headers: {
      'X-Custom-Header': 'Here is Hono Client',
      'X-User-Agent': 'hc',
    },
  }
)

// Global headers example:
const clientWithGlobalHeaders = hc<AppType>('/api', {
  headers: {
    Authorization: 'Bearer TOKEN',
  },
})
```

### Response
#### Success Response (200)
- **results** (array) - An array of search result objects.

#### Response Example
```json
{
  "results": [
    { "item": "Result 1", "score": 0.95 },
    { "item": "Result 2", "score": 0.88 }
  ]
}
```
```

--------------------------------

### Run Hono Development Server on Node.js

Source: https://hono.dev/docs/getting-started/nodejs

These commands show how to start the development server for a Hono application running on Node.js, using common package manager scripts. After execution, the application will typically be accessible at `http://localhost:3000`.

```sh
npm run dev
```

```sh
yarn dev
```

```sh
pnpm dev
```

--------------------------------

### Enable Precompressed Static Files with serveStatic

Source: https://context7_llms

Demonstrates how to use the precompressed option to automatically serve pre-compressed files (.br, .gz) based on client Accept-Encoding headers, prioritizing Brotli, then Zstd, then Gzip.

```typescript
app.get(
  '/static/*',
  serveStatic({
    precompressed: true,
  })
)
```

--------------------------------

### Run Hono Vercel Project Locally

Source: https://context7_llms

Starts the local development server for a Hono application using the Vercel CLI. This allows developers to test their application at `localhost:3000` before deploying.

```sh
vercel dev
```

--------------------------------

### Apply `compress` middleware to Hono app (TypeScript)

Source: https://hono.dev/docs/middleware/builtin/compress

This example shows how to initialize a Hono application and then apply the `compress` middleware using `app.use()`. When applied, the middleware will automatically handle response body compression for all subsequent routes.

```ts
const app = new Hono()

app.use(compress())
```

--------------------------------

### GET /welcome - Return Response Body

Source: https://context7_llms

Demonstrates returning a response body with custom headers and status code. Shows both simple and advanced usage of the c.body() method.

```APIDOC
## GET /welcome

### Description
Return a response body with optional status code and headers.

### Method
GET

### Endpoint
/welcome

### Response
#### Success Response (200 or custom)
- **body** (string) - Response body text
- **headers** (object) - Response headers

#### Response Example
```
Thank you for coming
```

### Code Example - Simple
```typescript
import { Hono } from 'hono'
const app = new Hono()

app.get('/welcome', (c) => {
  c.header('Content-Type', 'text/plain')
  return c.body('Thank you for coming')
})
```

### Code Example - Advanced
```typescript
app.get('/welcome', (c) => {
  return c.body('Thank you for coming', 201, {
    'X-Message': 'Hello!',
    'Content-Type': 'text/plain'
  })
})
```

### Notes
- Recommended to use c.text() or c.html() for text/HTML responses
- c.body() is equivalent to creating a new Response object directly
```

--------------------------------

### Define and configure Hono middleware with createMiddleware (TypeScript)

Source: https://hono.dev/docs/helpers/factory

This example illustrates how to create custom Hono middleware using `createMiddleware()`. It also demonstrates a pattern for making middleware configurable by wrapping it in a function that accepts arguments, allowing dynamic behavior based on provided values.

```typescript
const messageMiddleware = createMiddleware(async (c, next) => {
  await next()
  c.res.headers.set('X-Message', 'Good morning!')
})
```

```typescript
const messageMiddleware = (message: string) => {
  return createMiddleware(async (c, next) => {
    await next()
    c.res.headers.set('X-Message', message)
  })
}

app.use(messageMiddleware('Good evening!'))
```

--------------------------------

### Combine Default and Custom Plugins in Hono SSG (TypeScript)

Source: https://hono.dev/docs/helpers/ssg

This example demonstrates how to explicitly include the `defaultPlugin` alongside custom plugins when configuring `toSSG`. This ensures that the default behavior of skipping non-200 responses is maintained while extending functionality with additional custom plugins.

```ts
toSSG(app, fs, {
  plugins: [defaultPlugin, myCustomPlugin],
})
```

--------------------------------

### Initialize Hono WebAssembly Project with yarn

Source: https://context7_llms

Create a new Hono WebAssembly project directory and install required dependencies including Hono framework, Bytecode Alliance tools (jco, componentize-js, jco-std), and Rolldown bundler using yarn package manager.

```shell
mkdir my-app
cd my-app
npm init
yarn add hono
yarn add -D @bytecodealliance/jco @bytecodealliance/componentize-js @bytecodealliance/jco-std
yarn add -D rolldown
```

--------------------------------

### Import Accepts Helper - Hono

Source: https://hono.dev/docs/helpers/accepts

Import the Accepts Helper and Hono framework to handle Accept headers in your application. This is the initial setup required to use the accepts() function for content negotiation.

```typescript
import { Hono } from 'hono'
import { accepts } from 'hono/accepts'
```

--------------------------------

### Initialize Theme and Detect Platform in JavaScript

Source: https://hono.dev/docs/middleware/builtin/language

This JavaScript snippet handles the initial setup of the website's theme, checking for user preferences stored in `localStorage` or system dark mode settings. It applies the 'dark' class to the document's root element if appropriate. Additionally, it detects if the user agent is on a Mac or iOS device and toggles a 'mac' class for platform-specific styling, enhancing the user interface's adaptability.

```javascript
(()=>{const e=localStorage.getItem("vitepress-theme-appearance")||"auto",a=window.matchMedia("(prefers-color-scheme: dark)").matches;(!e||e==="auto"?a:e==="dark")&&document.documentElement.classList.add("dark")})(); document.documentElement.classList.toggle("mac",/Mac|iPhone|iPod|iPad/i.test(navigator.platform));
```

--------------------------------

### Extend Hono ContextRenderer for Dynamic Content in TSX

Source: https://context7_llms

This snippet demonstrates how to extend Hono's `ContextRenderer` interface to allow passing additional properties, such as a `title`, to the renderer function. It includes the type declaration, the setup of a JSX renderer with a dynamic head title, and an example route using the extended renderer to set a page-specific title.

```tsx
declare module 'hono' {
  interface ContextRenderer {
    (
      content: string | Promise<string>,
      props: { title: string }
    ): Response
  }
}
```

```tsx
const app = new Hono()

app.get(
  '/page/*',
  jsxRenderer(({ children, title }) => {
    return (
      <html>
        <head>
          <title>{title}</title>
        </head>
        <body>
          <header>Menu</header>
          <div>{children}</div>
        </body>
      </html>
    )
  })
)
```

```tsx
app.get('/page/favorites', (c) => {
  return c.render(
    <div>
      <ul>
        <li>Eating sushi</li>
        <li>Watching baseball games</li>
      </ul>
    </div>,
    {
      title: 'My favorites'
    }
  )
})
```

--------------------------------

### GET /about/me - Get Request URL

Source: https://hono.dev/docs/api/request

Retrieves the full request URL string including protocol, domain, and path.

```APIDOC
## GET /about/me

### Description
Retrieves the full request URL string from the incoming request.

### Method
GET

### Endpoint
/about/me

### Request Example
```typescript
app.get('/about/me', async (c) => {
  const url = c.req.url // `http://localhost:8787/about/me`
  // url contains the full request URL
})
```

### Response
#### Success Response (200)
- **url** (string) - Full request URL

### Notes
- Use `c.req.url` to access the full request URL
- Returns complete URL including protocol and domain
```

--------------------------------

### Handle WebSocket Connections using `upgradeWebSocket()` in Hono

Source: https://hono.dev/docs/helpers/websocket

This example illustrates how to set up a WebSocket endpoint using `upgradeWebSocket()` within a Hono application. It defines handlers for `onMessage` to process incoming client messages and `onClose` to log connection termination, demonstrating basic server-side WebSocket interaction and event handling.

```typescript
const app = new Hono()

app.get(
  '/ws',
  upgradeWebSocket((c) => {
    return {
      onMessage(event, ws) {
        console.log(`Message from client: ${event.data}`)
        ws.send('Hello from server!')
      },
      onClose: () => {
        console.log('Connection closed')
      }
    }
  })
)
```

--------------------------------

### Implement `ssgParams` Middleware for Dynamic Static Generation (TypeScript)

Source: https://hono.dev/docs/helpers/ssg

This example demonstrates using the `ssgParams` middleware to generate static pages based on dynamic data, similar to Next.js's `generateStaticParams`. It fetches a list of shops and maps their IDs to route parameters, allowing `toSSG` to generate a static page for each shop.

```ts
app.get(
  '/shops/:id',
  ssgParams(async () => {
    const shops = await getShops()
    return shops.map((shop) => ({ id: shop.id }))
  }),
  async (c) => {
    const shop = await getShop(c.req.param('id'))
    if (!shop) {
      return c.notFound()
    }
    return c.render(
      <div>
        <h1>{shop.name}</h1>
      </div>
    )
  }
)
```

--------------------------------

### Run Bun Tests

Source: https://context7_llms

Demonstrates the command to execute test files using Bun's test runner.

```shell
bun test index.test.ts
```

--------------------------------

### GET /about/me - Get Request Method

Source: https://hono.dev/docs/api/request

Retrieves the HTTP method name of the incoming request.

```APIDOC
## GET /about/me

### Description
Retrieves the HTTP method name of the incoming request.

### Method
GET

### Endpoint
/about/me

### Request Example
```typescript
app.get('/about/me', async (c) => {
  const method = c.req.method // `GET`
  // method contains the HTTP method
})
```

### Response
#### Success Response (200)
- **method** (string) - HTTP method name (GET, POST, PUT, DELETE, etc.)

### Notes
- Use `c.req.method` to access the HTTP method
- Returns uppercase method name
```

--------------------------------

### param() - Get Path Parameters

Source: https://hono.dev/docs/api/request

Retrieves path parameters from the URL route. Can get a single parameter by name or all parameters at once as an object.

```APIDOC
## param()

### Description
Get the values of path parameters from the URL route.

### Method
GET

### Usage

#### Get Single Parameter
```typescript
app.get('/entry/:id', async (c) => {
  const id = c.req.param('id')
  // id contains the captured path parameter
})
```

#### Get All Parameters
```typescript
app.get('/entry/:id/comment/:commentId', async (c) => {
  const { id, commentId } = c.req.param()
  // Returns object with all captured parameters
})
```

### Parameters
- **paramName** (string) - Optional - Name of the specific path parameter to retrieve

### Returns
- (string | object) - Single parameter value or object containing all parameters
```

--------------------------------

### Install ArkType via npm

Source: https://hono.dev/docs/guides/validation

Install the ArkType package using npm package manager. This is the first step to integrate ArkType validation into your Hono project.

```shell
npm i arktype
```

--------------------------------

### POST /api/posts (with RequestInit options)

Source: https://hono.dev/docs/guides/rpc

Illustrates how to pass standard fetch `RequestInit` options, such as `signal` for aborting a request, to a POST request using the Hono client.

```APIDOC
## POST /api/posts

### Description
This endpoint creates a new post. It demonstrates how to use the `init` option to pass a `RequestInit` object, allowing for advanced request configurations like aborting the request.

### Method
POST

### Endpoint
/api/posts

### Parameters
#### Path Parameters
(None)

#### Query Parameters
(None)

#### Request Body
- **json** (object) - Required - The JSON payload for the new post.
  - **title** (string) - Required - The title of the post.
  - **content** (string) - Required - The content of the post.

### Request Example
```typescript
// client.ts
import { hc } from 'hono/client'

const client = hc<AppType>('http://localhost:8787/')

const abortController = new AbortController()
const res = await client.api.posts.$post(
  {
    json: {
      "title": "My New Post",
      "content": "This is the content of my new post."
    },
  },
  {
    init: {
      signal: abortController.signal,
    },
  }
)

// To abort the request later:
abortController.abort()
```

### Response
#### Success Response (201 Created)
- **id** (string) - The unique identifier of the newly created post.
- **status** (string) - A status message indicating success.

#### Response Example
```json
{
  "id": "new-post-uuid-123",
  "status": "created"
}
```
```

--------------------------------

### GET /about/me - Get Request Path Property

Source: https://hono.dev/docs/api/request

Retrieves the request pathname. Returns the path portion of the request URL.

```APIDOC
## GET /about/me

### Description
Retrieves the request pathname from the incoming request.

### Method
GET

### Endpoint
/about/me

### Request Example
```typescript
app.get('/about/me', async (c) => {
  const pathname = c.req.path // `/about/me`
  // pathname contains the request path
})
```

### Response
#### Success Response (200)
- **path** (string) - Request pathname

### Notes
- Use `c.req.path` to access the request pathname
- Returns only the path portion without query parameters or domain
```

--------------------------------

### Create Google Cloud Project and Set Environment Variables

Source: https://context7_llms

Create a new Google Cloud project with auto-generated ID, then extract and store the project ID and project number as environment variables for use in subsequent commands. May take ~30 seconds for project to appear in listings.

```shell
gcloud projects create --set-as-default --name="my app"
```

```shell
PROJECT_ID=$(gcloud projects list \
    --format='value(projectId)' \
    --filter='name="my app"')

PROJECT_NUMBER=$(gcloud projects list \
    --format='value(projectNumber)' \
    --filter='name="my app"')

echo $PROJECT_ID $PROJECT_NUMBER
```

--------------------------------

### Initialize Hono WebAssembly Project with pnpm

Source: https://context7_llms

Create a new Hono WebAssembly project directory with ES module configuration and install required dependencies including Hono framework, Bytecode Alliance tools (jco, componentize-js, jco-std), and Rolldown bundler using pnpm package manager.

```shell
mkdir my-app
cd my-app
pnpm init --init-type module
pnpm add hono
pnpm add -D @bytecodealliance/jco @bytecodealliance/componentize-js @bytecodealliance/jco-std
pnpm add -D rolldown
```

--------------------------------

### SSG Plugin Examples - Status Code Filter

Source: https://context7_llms

Example plugin that filters responses based on HTTP status codes. Demonstrates AfterResponseHook to selectively generate files for specific status codes.

```APIDOC
## Status Code Filter Plugin

### Description
Filters the SSG process to only generate files for responses with specific status codes (200 and 500 in this example).

### Implementation

```ts
const statusFilterPlugin: SSGPlugin = {
  afterResponseHook: (res) => {
    if (res.status === 200 || res.status === 500) {
      return res
    }
    return false
  },
}
```

### Hook Used
- **AfterResponseHook**: Inspects the response status code after receiving the response

### Behavior
- Allows responses with status 200 (OK) to generate files
- Allows responses with status 500 (Server Error) to generate files
- Skips all other status codes (redirects, 404s, etc.)
- Returns `false` to prevent file generation for filtered responses

### Usage

```ts
toSSG(app, fs, {
  plugins: [statusFilterPlugin],
})
```

### Customization
Modify the status code conditions to match your requirements:

```ts
if (res.status >= 200 && res.status < 300) {
  return res
}
```
```

--------------------------------

### CDK Application Entry Point for Lambda@Edge Deployment (TypeScript)

Source: https://context7_llms

This TypeScript file serves as the entry point for the AWS CDK application. It initializes the CDK app and instantiates the `MyAppStack`, passing environment variables for account and region. This stack defines the AWS resources for the Lambda@Edge deployment.

```ts
#!/usr/bin/env node
import 'source-map-support/register'
import * as cdk from 'aws-cdk-lib'
import { MyAppStack } from '../lib/my-app-stack'

const app = new cdk.App()
new MyAppStack(app, 'MyAppStack', {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: 'us-east-1',
  }
})
```

--------------------------------

### Illustrate Hono Route Handling for Index File Generation (TypeScript)

Source: https://hono.dev/docs/helpers/ssg

These Hono route examples show how paths ending with a slash (`/`) are handled during static site generation. Regardless of the content type, such routes will result in an `index.html` or `index.txt` file being saved within the corresponding directory.

```ts
// save to ./static/html/index.html
app.get('/html/', (c) => c.html('html'))

// save to ./static/text/index.txt
app.get('/text/', (c) => c.text('text'))
```

--------------------------------

### Hono Quick Preset Router Configuration (TypeScript)

Source: https://context7_llms

This code illustrates the internal router setup for the `hono/quick` preset. It configures a `SmartRouter` that integrates `LinearRouter` and `TrieRouter`, providing a balance between quick initialization and routing efficiency for request-scoped application environments.

```ts
this.router = new SmartRouter({
  routers: [new LinearRouter(), new TrieRouter()]
})
```

--------------------------------

### Implement Basic Hono 'Hello World' Route

Source: https://context7_llms

This TypeScript/TSX code defines a simple Hono application's entry point in `src/index.tsx`. It sets up a renderer and a root route that renders an H1 tag with 'Hello, Cloudflare Pages!', demonstrating a basic server-side rendering setup.

```tsx
import { Hono } from 'hono'
import { renderer } from './renderer'

const app = new Hono()

app.get('*', renderer)

app.get('/', (c) => {
  return c.render(<h1>Hello, Cloudflare Pages!</h1>)
})

export default app
```

--------------------------------

### Create a Basic Hono Application with Node.js Server and Graceful Shutdown

Source: https://hono.dev/docs/getting-started/nodejs

This TypeScript code snippet illustrates how to create a simple 'Hello World' Hono application and serve it using the `@hono/node-server` adapter. It also includes an example of implementing graceful shutdown logic for the Node.js server to handle `SIGINT` and `SIGTERM` signals.

```ts
import { serve } from '@hono/node-server'
import { Hono } from 'hono'

const app = new Hono()
app.get('/', (c) => c.text('Hello Node.js!'))

serve(app)
```

```ts
const server = serve(app)

// graceful shutdown
process.on('SIGINT', () => {
  server.close()
  process.exit(0)
})
process.on('SIGTERM', () => {
  server.close((err) => {
    if (err) {
      console.error(err)
      process.exit(1)
    }
    process.exit(0)
  })
})
```

--------------------------------

### query() - Get Query String Parameters

Source: https://hono.dev/docs/api/request

Retrieves query string parameters from the URL. Can get a single query parameter by name or all query parameters at once as an object.

```APIDOC
## query()

### Description
Get querystring parameters from the request URL.

### Method
GET

### Usage

#### Get Single Query Parameter
```typescript
app.get('/search', async (c) => {
  const query = c.req.query('q')
  // query contains the value of ?q=...
})
```

#### Get All Query Parameters
```typescript
app.get('/search', async (c) => {
  const { q, limit, offset } = c.req.query()
  // Returns object with all query parameters
})
```

### Parameters
- **paramName** (string) - Optional - Name of the specific query parameter to retrieve

### Returns
- (string | object) - Single parameter value or object containing all query parameters
```

--------------------------------

### Import Hono WebSocket Helper for Cloudflare Workers, Deno, and Bun

Source: https://hono.dev/docs/helpers/websocket

This snippet demonstrates how to import the `Hono` application and the `upgradeWebSocket` utility for different serverless and runtime environments. It shows specific import paths for Cloudflare Workers, Deno, and Bun, including an additional `websocket` export for Bun applications to handle WebSocket connections.

```typescript
import { Hono } from 'hono'
import { upgradeWebSocket } from 'hono/cloudflare-workers'
```

```typescript
import { Hono } from 'hono'
import { upgradeWebSocket } from 'hono/deno'
```

```typescript
import { Hono } from 'hono'
import { upgradeWebSocket, websocket } from 'hono/bun'

// ...

export default {
  fetch: app.fetch,
  websocket,
}
```

--------------------------------

### Create Sub-applications with Route Mounting in Hono

Source: https://hono.dev/docs/api/routing

Demonstrates how to create sub-applications using Hono instances and mount them to a main application using the route() method. Each sub-application can have its own base path and handlers that respond to specific HTTP methods.

```typescript
const book = new Hono()
book.post('/book', (c) => c.text('Create Book')) // POST /book

const user = new Hono().basePath('/user')
user.get('/', (c) => c.text('List Users')) // GET /user
user.post('/', (c) => c.text('Create User')) // POST /user

const app = new Hono()
app.route('/', book) // Handle /book
app.route('/', user) // Handle /user
```

--------------------------------

### Simplify Hono Env type definition with factory.createApp (TypeScript)

Source: https://hono.dev/docs/helpers/factory

This example demonstrates how `factory.createApp()` simplifies the definition of the `Env` type in Hono applications. By setting `Env` only once in `createFactory()`, it avoids redundancy when using `createMiddleware()` and improves type safety and reduces boilerplate.

```typescript
import { createFactory } from 'hono/factory'

// ...

// Set the `Env` to `createFactory()`
const factory = createFactory<Env>()

const app = factory.createApp()

// factory also has `createMiddleware()`
const mw = factory.createMiddleware(async (c, next) => {
  await next()
})
```

--------------------------------

### GET /posts/:id - Get Request Path

Source: https://hono.dev/docs/api/request

Retrieves the registered route path from the request. Deprecated in v4.8.0 - use Route Helper instead.

```APIDOC
## GET /posts/:id

### Description
Retrieves the registered path pattern within the handler. **Deprecated in v4.8.0** - Use `routePath()` from Route Helper instead.

### Method
GET

### Endpoint
/posts/:id

### Path Parameters
- **id** (string) - Required - Post identifier

### Request Example
```typescript
app.get('/posts/:id', (c) => {
  return c.json({ path: c.req.routePath })
})
```

### Response
#### Success Response (200)
- **path** (string) - Registered route path pattern

### Response Example
```json
{
  "path": "/posts/:id"
}
```

### Notes
- Accessing `/posts/123` returns `/posts/:id`
- **Deprecated**: Use Route Helper's `routePath()` function instead
- Returns the route pattern, not the actual request path
```

--------------------------------

### Install Dependencies for Hono Cloudflare Workers Project

Source: https://hono.dev/getting-started/cloudflare-workers

Install project dependencies after creating the Hono application. Multiple package managers are supported to accommodate different development environments.

```shell
cd my-app
npm i
```

```shell
cd my-app
yarn
```

```shell
cd my-app
pnpm i
```

```shell
cd my-app
bun i
```

--------------------------------

### GET /posts/:id (with slashes)

Source: https://hono.dev/docs/guides/rpc

Demonstrates how to handle path parameters containing slashes using regular expressions in the server route and the Hono client for a GET request.

```APIDOC
## GET /posts/:id{.}

### Description
This endpoint retrieves a post by its ID, which can include slashes. The server-side route uses a regular expression to match the ID parameter.

### Method
GET

### Endpoint
/posts/:id{.}

### Parameters
#### Path Parameters
- **id** (string) - Required - The post ID, which can contain slashes (e.g., '123/456').

#### Query Parameters
(None)

#### Request Body
(None)

### Request Example
```typescript
// client.ts
const res = await client.posts[':id'].$get({
  param: {
    id: '123/456',
  },
})
```

### Response
#### Success Response (200)
- **id** (string) - The ID of the retrieved post.
- **title** (string) - The title of the post.
- **content** (string) - The content of the post.

#### Response Example
```json
{
  "id": "123/456",
  "title": "Post with Slashes",
  "content": "This is a post content."
}
```
```

--------------------------------

### GET /page/* (ContextRenderer - General Page)

Source: https://context7_llms

Renders a general page using the `jsxRenderer` with a dynamic title. This endpoint demonstrates how to use the extended `ContextRenderer` to provide a common layout and pass page-specific data.

```APIDOC
## GET /page/*

### Description
Renders a general page using the `jsxRenderer` with a dynamic title. This endpoint demonstrates how to use the extended `ContextRenderer` to provide a common layout and pass page-specific data.

### Method
GET

### Endpoint
/page/*

### Parameters
#### Path Parameters
- No explicit path parameters defined, `*` captures path segments.

#### Query Parameters
- None

#### Request Body
- None

### Request Example
N/A (GET request)

### Response
#### Success Response (200)
- **HTML Content** (string) - The rendered HTML content of the page.

#### Response Example
```html
<html>
  <head>
    <title>My Page Title</title>
  </head>
  <body>
    <header>Menu</header>
    <div>Page content here</div>
  </body>
</html>
```
```

--------------------------------

### GET /:lang/home

Source: https://context7_llms

Demonstrates path-based routing in Hono, allowing the extraction of a language parameter from the URL to serve localized content.

```APIDOC
## GET /:lang/home

### Description
This endpoint showcases Hono's path-based routing, where a dynamic segment `:lang` is used to capture a language code from the URL. The extracted language is then used to retrieve and return localized content.

### Method
GET

### Endpoint
/:lang/home

### Parameters
#### Path Parameters
- **lang** (string) - Required - The language code for the requested content (e.g., 'en', 'ar').

#### Query Parameters
(None)

#### Request Body
(None)

### Request Example
(No specific request body for GET)

### Response
#### Success Response (200)
- **message** (string) - The localized content for the specified language.

#### Response Example
```json
{
  "message": "Hello from Hono!"
}
```
```

--------------------------------

### GET /hello - Access Request Headers

Source: https://context7_llms

Demonstrates accessing request headers through the Context object's req property. Shows how to retrieve the User-Agent header from an incoming request.

```APIDOC
## GET /hello

### Description
Access request headers from the incoming request using the HonoRequest object.

### Method
GET

### Endpoint
/hello

### Request Example
No request body required.

### Response
#### Success Response (200)
- **body** (string) - Text response with User-Agent header value

#### Response Example
```
Hello, Mozilla/5.0 (Windows NT 10.0; Win64; x64)
```

### Code Example
```typescript
import { Hono } from 'hono'
const app = new Hono()

app.get('/hello', (c) => {
  const userAgent = c.req.header('User-Agent')
  return c.text(`Hello, ${userAgent}`)
})
```
```

--------------------------------

### GET Request Method Property

Source: https://context7_llms

Retrieves the HTTP method name of the incoming request from the context object. Returns values such as GET, POST, PUT, DELETE, etc.

```APIDOC
## GET /method

### Description
Get the HTTP method name of the request.

### Method
GET (context property)

### Endpoint
Context property: `c.req.method`

### Response
#### Success Response
- **method** (string) - The HTTP method name (GET, POST, PUT, DELETE, etc.)

### Request Example
```ts
app.get('/about/me', async (c) => {
  const method = c.req.method // `GET`
  return c.json({ method })
})
```

### Response Example
```json
{
  "method": "GET"
}
```
```

--------------------------------

### Apply Default Timeout Middleware in Hono

Source: https://context7_llms

This example shows how to apply the `timeout` middleware in Hono with default settings. It sets a 5-second timeout for routes under `/api` and demonstrates a basic route handler. It requires importing `Hono` and `timeout` from their respective modules.

```ts
import { Hono } from 'hono'
import { timeout } from 'hono/timeout'

const app = new Hono()

// Applying a 5-second timeout
app.use('/api', timeout(5000))

// Handling a route
app.get('/api/data', async (c) => {
  // Your route handler logic
  return c.json({ data: 'Your data here' })
})
```

--------------------------------

### Create new Hono project with create-hono command

Source: https://context7_llms

Initialize a new Hono project using the create-hono scaffolding tool across different package managers. Prompts user to select a template (Cloudflare Workers, AWS Lambda, Deno, etc.) and generates starter project structure.

```shell
npm create hono@latest my-app
```

```shell
yarn create hono my-app
```

```shell
pnpm create hono@latest my-app
```

```shell
bun create hono@latest my-app
```

```shell
deno init --npm hono@latest my-app
```

--------------------------------

### Initialize Hono app with createFactory initApp option (TypeScript)

Source: https://hono.dev/docs/helpers/factory

This snippet illustrates how to use the `initApp` option within `createFactory()` to perform initial setup or apply global middleware to the Hono app instance created by `createApp()`. This pattern is particularly useful for injecting dependencies like a database connection into the context, as shown with D1Database and Drizzle.

```typescript
// factory-with-db.ts
type Env = {
  Bindings: {
    MY_DB: D1Database
  }
  Variables: {
    db: DrizzleD1Database
  }
}

export default createFactory<Env>({
  initApp: (app) => {
    app.use(async (c, next) => {
      const db = drizzle(c.env.MY_DB)
      c.set('db', db)
      await next()
    })
  },
})
```

```typescript
// crud.ts
import factoryWithDB from './factory-with-db'

const app = factoryWithDB.createApp()

app.post('/posts', (c) => {
  c.var.db.insert()
  // ...
})
```

--------------------------------

### Complex Access Control with Combine Middleware

Source: https://context7_llms

This example demonstrates implementing complex access control rules by combining IP restriction, bearer authentication, and rate limiting using the some() and every() middleware combinators.

```APIDOC
## Complex Access Control Rules

### Description
Implement sophisticated access control by combining multiple middleware using some() and every() combinators for IP restriction, authentication, and rate limiting.

### Usage Example
```ts
import { Hono } from 'hono'
import { bearerAuth } from 'hono/bearer-auth'
import { getConnInfo } from 'hono/cloudflare-workers'
import { every, some } from 'hono/combine'
import { ipRestriction } from 'hono/ip-restriction'
import { rateLimit } from '@/my-rate-limit'

const app = new Hono()

app.use(
  '*',
  some(
    every(
      ipRestriction(getConnInfo, { allowList: ['192.168.0.2'] }),
      bearerAuth({ token })
    ),
    rateLimit()
  )
)

app.get('/', (c) => c.text('Hello Hono!'))
```

### Logic Flow
1. First condition: Check if IP is in allowList AND has valid bearer token
2. If first condition passes, skip rate limiting
3. If first condition fails, apply rate limiting
4. If both conditions fail, request is rejected

### Middleware Stack
- **ipRestriction**: Validates client IP against allowList
- **bearerAuth**: Validates bearer token
- **rateLimit**: Applies rate limiting if other conditions fail
```

--------------------------------

### Route Helper - Import and Setup

Source: https://hono.dev/docs/helpers/route

Import the Route Helper functions from Hono to access routing information. These utilities provide detailed information about matched routes and current route patterns for debugging and middleware development.

```APIDOC
## Route Helper Import

### Description
Import routing helper functions from Hono to access route information in your handlers and middleware.

### Import Statement
```typescript
import { Hono } from 'hono'
import {
  matchedRoutes,
  routePath,
  baseRoutePath,
  basePath,
} from 'hono/route'
```

### Available Functions
- **matchedRoutes** - Returns array of all matched routes for current request
- **routePath** - Returns the route path pattern for current handler
- **baseRoutePath** - Returns the base route path for sub-applications
- **basePath** - Returns the base path with actual parameters
```

--------------------------------

### Run Hono Application with Netlify CLI Development Server

Source: https://context7_llms

This command starts the local development server for a Netlify project using the Netlify CLI. It allows developers to test their Hono application running on Netlify Edge Functions locally before deploying it to the production environment.

```sh
netlify dev
```

--------------------------------

### Analytics Initialization - JavaScript

Source: https://hono.dev/docs/helpers/adapter

Initializes Zaraz analytics tracking by collecting browser and page metadata including screen dimensions, timezone, referrer, and character set. Loads analytics script dynamically with deferred execution and handles localStorage/sessionStorage data persistence.

```javascript
bH[bJ].t=bI.getElementsByTagName("title")[0].text;
bH[bJ].x=Math.random();
bH[bJ].w=bH.screen.width;
bH[bJ].h=bH.screen.height;
bH[bJ].j=bH.innerHeight;
bH[bJ].e=bH.innerWidth;
bH[bJ].l=bH.location.href;
bH[bJ].r=bI.referrer;
bH[bJ].k=bH.screen.colorDepth;
bH[bJ].n=bI.characterSet;
bH[bJ].o=(new Date).getTimezoneOffset();
```

--------------------------------

### Mount sub-applications using app.route() in Hono (TypeScript)

Source: https://hono.dev/docs/guides/best-practices

This example shows how to import separate Hono application instances (e.g., `authors` and `books`) from different files and mount them onto specific base paths within a main Hono application using `app.route()`. This approach promotes modularity and better organization for larger Hono projects.

```typescript
// index.ts
import { Hono } from 'hono'
import authors from './authors'
import books from './books'

const app = new Hono()

// 😃
app.route('/authors', authors)
app.route('/books', books)

export default app
```

--------------------------------

### Configure Serverless-Devs AccessKey for Alibaba Cloud

Source: https://context7_llms

This command initializes Serverless-Devs configuration, prompting the user to select Alibaba Cloud as a provider and input their AccessKeyID and AccessKeySecret. This is a prerequisite for deploying resources to Alibaba Cloud using Serverless-Devs.

```sh
npx s config add
# Please select a provider: Alibaba Cloud (alibaba)
# Input your AccessKeyID & AccessKeySecret
```

--------------------------------

### Create Hono Hello World for Alibaba Cloud Function Compute

Source: https://context7_llms

Defines a simple Hono application that responds with 'Hello Hono!' to GET requests. It uses `hono-alibaba-cloud-fc3-adapter` to adapt the Hono app for Alibaba Cloud Function Compute, exposing the `handler` for the serverless environment.

```ts
import { Hono } from 'hono'
import { handle } from 'hono-alibaba-cloud-fc3-adapter'

const app = new Hono()

app.get('/', (c) => c.text('Hello Hono!'))

export const handler = handle(app)
```

--------------------------------

### Hono Pretty JSON Middleware Output (After Prettification)

Source: https://context7_llms

This example demonstrates the effect of the `prettyJSON` middleware when the `?pretty` query parameter is appended to the URL. The JSON response is formatted with indentation and newlines, making it more human-readable.

```js
// GET /?pretty
{
  "project": {
    "name": "Hono",
    "repository": "https://github.com/honojs/hono"
  }
}
```

--------------------------------

### GET /aws-lambda-info/

Source: https://hono.dev/docs/getting-started/aws-lambda

Access AWS Lambda Events and Context by binding `LambdaEvent` and `LambdaContext` types and using `c.env`.

```APIDOC
## GET /aws-lambda-info/

### Description
This endpoint demonstrates how to access the AWS Lambda event and context objects within a Hono application. It retrieves specific properties like `isBase64Encoded` from the event and `awsRequestId` from the context.

### Method
GET

### Endpoint
/aws-lambda-info/

### Parameters
#### Path Parameters
(None)

#### Query Parameters
(None)

#### Request Body
(None)

### Request Example
(No request body required)

### Response
#### Success Response (200)
- **isBase64Encoded** (boolean) - Indicates if the event body is base64 encoded.
- **awsRequestId** (string) - The AWS request ID for the current invocation.

#### Response Example
```json
{
  "isBase64Encoded": false,
  "awsRequestId": "49a0b1c2-d3e4-5f67-890a-1b2c3d4e5f67"
}
```
```

--------------------------------

### GET /auth/page (JWK Auth - Get Payload)

Source: https://context7_llms

An endpoint protected by JWK authentication, demonstrating how to retrieve the decoded JWT payload from the Hono context (`c.get('jwtPayload')`) after successful token verification.

```APIDOC
## GET /auth/page

### Description
An endpoint protected by JWK authentication, demonstrating how to retrieve the decoded JWT payload from the Hono context (`c.get('jwtPayload')`) after successful token verification.

### Method
GET

### Endpoint
/auth/page

### Parameters
#### Path Parameters
- None

#### Query Parameters
- None

#### Request Body
- None

### Request Example
```
GET /auth/page
Authorization: Bearer <your_jwt_token>
```

### Response
#### Success Response (200)
- **payload** (object) - The decoded JSON payload of the verified JWT token.

#### Response Example
```json
{
  "sub": "1234567890",
  "name": "John Doe",
  "iat": 1516239022
}
```
```

--------------------------------

### Test GET request with Hono app.request

Source: https://context7_llms

Make a GET request to an endpoint and validate the response status and text content. Uses async/await with Vitest or Jest test framework to assert response properties.

```typescript
describe('Example', () => {
  test('GET /posts', async () => {
    const res = await app.request('/posts')
    expect(res.status).toBe(200)
    expect(await res.text()).toBe('Many posts')
  })
})
```

--------------------------------

### header() - Get Request Headers

Source: https://hono.dev/docs/api/request

Retrieves request header values. Can get a specific header by name or all headers as an object. Note that header names are case-sensitive when retrieving specific headers.

```APIDOC
## header()

### Description
Get the request header value. Header names are case-insensitive when specified, but all keys are lowercase when retrieving all headers.

### Method
GET

### Usage

#### Get Specific Header
```typescript
app.get('/', (c) => {
  const userAgent = c.req.header('User-Agent')
  return c.text(`Your user agent is ${userAgent}`)
})
```

#### Get All Headers (Lowercase Keys)
```typescript
// ❌ Will not work - X-Foo will be lowercase
const headerRecord = c.req.header()
const foo = headerRecord['X-Foo']

// ✅ Will work - use specific header name
const foo = c.req.header('X-Foo')
```

### Parameters
- **headerName** (string) - Optional - Name of the specific header to retrieve

### Returns
- (string | object) - Single header value or object containing all headers with lowercase keys

### Important Notes
- When called with no arguments, all header keys are lowercase
- To retrieve a specific header with uppercase characters, pass the header name explicitly
- Header names are case-insensitive in HTTP but the return object uses lowercase keys
```

--------------------------------

### Bearer Auth Request Example - cURL

Source: https://hono.dev/docs/middleware/builtin/bearer-auth

Example of making an authenticated request using cURL with the Bearer authentication scheme. The Authorization header contains the Bearer token that will be validated by the middleware.

```shell
curl -H 'Authorization: Bearer honoiscool' http://localhost:8787/auth/page
```

--------------------------------

### Serve Static Files with Hono and Bun

Source: https://context7_llms

Shows how to use the serveStatic middleware from hono/bun to serve static files with various route patterns and fallback handling for different file types.

```typescript
import { serveStatic } from 'hono/bun'

const app = new Hono()

app.use('/static/*', serveStatic({ root: './' }))
app.use('/favicon.ico', serveStatic({ path: './favicon.ico' }))
app.get('/', (c) => c.text('You can access: /static/hello.txt'))
app.get('*', serveStatic({ path: './static/fallback.txt' }))
```

--------------------------------

### Get HTTP Request Method with method Property in Hono

Source: https://context7_llms

Retrieve the HTTP method name (GET, POST, PUT, DELETE, etc.) of the incoming request from the context object.

```typescript
import { Hono } from 'hono'
const app = new Hono()

app.get('/about/me', async (c) => {
  const method = c.req.method // `GET`
  // ...
})
```

--------------------------------

### Define a basic GET route with dynamic parameter in Hono

Source: https://hono.dev/docs/guides/best-practices

This snippet demonstrates how to create a simple GET route in a Hono application that captures a dynamic parameter from the URL. The route responds with a JSON object containing the value of the captured parameter.

```javascript
app.get('/:id', (c) => c.json(`get ${c.req.param('id')}`))
```

--------------------------------

### Create and Navigate Project Directory (Shell)

Source: https://hono.dev/docs/getting-started/service-worker

Initializes a new project directory named 'my-app' and navigates into it. This is the foundational step for setting up any new Hono application with Vite, preparing the environment for further configuration.

```sh
mkdir my-app
cd my-app
```

--------------------------------

### Install Hono and Vite Dependencies

Source: https://hono.dev/docs/getting-started/service-worker

Installs the core Hono library and Vite as a development dependency using various package managers. These packages are crucial for building and running the Hono application with a development server and handling web requests.

```sh
npm i hono
npm i -D vite
```

```sh
yarn add hono
yarn add -D vite
```

```sh
pnpm add hono
pnpm add -D vite
```

```sh
bun add hono
bun add -D vite
```

--------------------------------

### GET / - Set Response Headers

Source: https://context7_llms

Demonstrates setting custom HTTP response headers using the c.header() method. Shows how to add custom headers to the response.

```APIDOC
## GET /

### Description
Return a response with custom HTTP headers.

### Method
GET

### Endpoint
/

### Response
#### Success Response (200)
- **body** (string) - Text response
- **headers** (object) - Custom response headers
  - **X-Message** (string) - Custom message header

#### Response Example
```
HellO!
```

### Code Example
```typescript
import { Hono } from 'hono'
const app = new Hono()

app.get('/', (c) => {
  c.header('X-Message', 'My custom message')
  return c.text('HellO!')
})
```
```

--------------------------------

### Install Cloudflare Workers TypeScript types

Source: https://hono.dev/getting-started/cloudflare-workers

Commands to install the `@cloudflare/workers-types` package as a development dependency using different package managers (npm, yarn, pnpm, bun) to provide type definitions for Cloudflare Workers.

```sh
npm i --save-dev @cloudflare/workers-types
```

```sh
yarn add -D @cloudflare/workers-types
```

```sh
pnpm add -D @cloudflare/workers-types
```

```sh
bun add --dev @cloudflare/workers-types
```

--------------------------------

### ETag Middleware - Import and Basic Setup

Source: https://hono.dev/docs/middleware/builtin/etag

Import the ETag middleware from Hono and apply it to your application routes. This middleware automatically generates ETag headers for responses to enable efficient caching.

```APIDOC
## ETag Middleware

### Description
The ETag middleware adds ETag headers to HTTP responses, enabling efficient caching and conditional requests. It supports both strong and weak validation modes.

### Import
```typescript
import { Hono } from 'hono'
import { etag } from 'hono/etag'
```

### Basic Usage
```typescript
const app = new Hono()

app.use('/etag/*', etag())
app.get('/etag/abc', (c) => {
  return c.text('Hono is cool')
})
```

### Configuration Options

#### weak (boolean) - Optional
- **Type**: boolean
- **Default**: false
- **Description**: Enable weak validation by adding 'w/' prefix to ETag value. Weak ETags are used for semantic equivalence rather than byte-for-byte equivalence.

#### retainedHeaders (string[]) - Optional
- **Type**: string array
- **Description**: Headers to retain in 304 Not Modified responses. Default retained headers include: Cache-Control, Content-Location, Date, ETag, Expires, and Vary.

### Example with Options
```typescript
import { etag, RETAINED_304_HEADERS } from 'hono/etag'

app.use(
  '/etag/*',
  etag({
    weak: true,
    retainedHeaders: ['x-message', ...RETAINED_304_HEADERS]
  })
)
```

### Response Behavior
- **200 OK**: Response includes generated ETag header
- **304 Not Modified**: Response includes only retained headers (Cache-Control, Content-Location, Date, ETag, Expires, Vary, and any custom headers specified)
```

--------------------------------

### Configure Vite for Hono Client and Server Builds

Source: https://context7_llms

Provides a Vite configuration file that handles both client and server builds for Hono applications. When mode is 'client', it builds the client script to a static directory. Otherwise, it configures plugins for Cloudflare Pages and the development server. This setup enables proper bundling of client-side TypeScript/JavaScript.

```ts
import pages from '@hono/vite-cloudflare-pages'
import devServer from '@hono/vite-dev-server'
import { defineConfig } from 'vite'

export default defineConfig(({ mode }) => {
  if (mode === 'client') {
    return {
      build: {
        rollupOptions: {
          input: './src/client.ts',
          output: {
            entryFileNames: 'static/client.js',
          },
        },
      },
    }
  } else {
    return {
      plugins: [
        pages(),
        devServer({
          entry: 'src/index.tsx',
        }),
      ],
    }
  }
})
```

--------------------------------

### Define Hono sub-router for books resource (TypeScript)

Source: https://hono.dev/docs/guides/rpc

Similar to the authors router, this TypeScript snippet creates another Hono sub-router for 'books'. It illustrates the pattern for defining resource-specific routes (GET /, POST /, GET /:id) to keep the application's routing organized and maintainable, ready to be combined with other sub-routers.

```typescript
// books.ts
import { Hono } from 'hono'

const app = new Hono()
  .get('/', (c) => c.json('list books'))
  .post('/', (c) => c.json('create a book', 201))
  .get('/:id', (c) => c.json(`get ${c.req.param('id')}`))

export default app
```

--------------------------------

### Return Response Body with Status and Headers in Hono (c.body)

Source: https://context7_llms

This example illustrates an alternative, more concise way to use `c.body()` by passing the response body, status code, and headers as arguments in a single call. This method streamlines the creation of responses with custom status and headers.

```ts
import { Hono } from 'hono'
const app = new Hono()
app.get('/welcome', (c) => {
  return c.body('Thank you for coming', 201, {
    'X-Message': 'Hello!',
    'Content-Type': 'text/plain'
  })
})
```

--------------------------------

### GET /api/posts and GET /api/posts/:id (URL generation)

Source: https://hono.dev/docs/guides/rpc

Explains how to generate `URL` objects for API endpoints using the `$url()` method of the Hono client, including handling path parameters for dynamic URLs.

```APIDOC
## GET /api/posts and GET /api/posts/:id

### Description
This section demonstrates the use of the `$url()` method in Hono client to programmatically obtain a `URL` object for an endpoint, both for static paths and paths with parameters.

### Method
GET

### Endpoint
/api/posts
/api/posts/:id

### Parameters
#### Path Parameters
- **id** (string) - Required (for `/api/posts/:id`) - The ID of the post.

#### Query Parameters
(None)

#### Request Body
(None)

### Request Example
```typescript
// client.ts
import { hc } from 'hono/client'

const route = app
  .get('/api/posts', (c) => c.json({ posts }))
  .get('/api/posts/:id', (c) => c.json({ post }))

const client = hc<typeof route>('http://localhost:8787/')

// Get URL for /api/posts
let url = client.api.posts.$url()
console.log(url.pathname) // Outputs: /api/posts

// Get URL for /api/posts/:id
url = client.api.posts[':id'].$url({
  param: {
    id: '123',
  },
})
console.log(url.pathname) // Outputs: /api/posts/123
```

### Response
#### Success Response (N/A)
This method generates a URL object, it does not make an HTTP request or return an API response directly. The 'response' is the generated URL's pathname.

#### Response Example
```
/api/posts
/api/posts/123
```
```

--------------------------------

### Filter GET Requests Only in Hono toSSG Plugin

Source: https://hono.dev/docs/helpers/ssg

Implements a BeforeRequestHook that filters requests to process only GET method requests. Returns the request object to continue processing or false to skip the route entirely.

```typescript
const getOnlyPlugin: SSGPlugin = {
  beforeRequestHook: (req) => {
    if (req.method === 'GET') {
      return req
    }
    return false
  },
}
```

--------------------------------

### Define Hono Application for Vercel Deployment

Source: https://context7_llms

Sets up a basic Hono application that exports the Hono instance as a default export, which is a common pattern for Vercel deployment. It defines a root GET endpoint that returns a welcome message, demonstrating a simple API.

```ts
import { Hono } from 'hono'

const app = new Hono()

const welcomeStrings = [
  'Hello Hono!',
  'To learn more about Hono on Vercel, visit https://vercel.com/docs/frameworks/backend/hono'
]

app.get('/', (c) => {
  return c.text(welcomeStrings.join('\n\n'))
})

export default app
```

--------------------------------

### Hono Pretty JSON Middleware Output (Before Prettification)

Source: https://context7_llms

This example displays a typical JSON response body from a Hono application without any prettification. The output is a single-line, compact JSON string, common for API responses.

```js
// GET /
{"project":{"name":"Hono","repository":"https://github.com/honojs/hono"}}
```

--------------------------------

### POST Request with RequestInit Options

Source: https://context7_llms

Configure HTTP requests using the RequestInit object to set custom options like abort signals. The init option takes highest priority and can override other settings like body, method, and headers.

```APIDOC
## POST Request with RequestInit

### Description
Pass a fetch RequestInit object to configure request behavior, such as aborting requests with an AbortController.

### Method
POST

### Parameters
#### Request Options
- **init** (RequestInit) - Optional - Fetch RequestInit object for request configuration
- **json** (object) - Optional - Request body as JSON

### Request Example
```ts
const abortController = new AbortController()
const res = await client.api.posts.$post(
  {
    json: {
      // Request body
    },
  },
  {
    init: {
      signal: abortController.signal,
    },
  }
)

abortController.abort()
```

### Notes
- RequestInit object has highest priority and can overwrite body, method, and headers
- Useful for implementing request cancellation and timeout handling
```

--------------------------------

### Implement Hono WebSocket Server in TypeScript

Source: https://hono.dev/docs/helpers/websocket

This TypeScript snippet demonstrates how to set up a WebSocket server using the Hono framework, specifically leveraging `upgradeWebSocket` for Cloudflare Workers environments. It defines a GET endpoint at `/ws` that upgrades the connection to a WebSocket and logs any messages received from the client to the console. This serves as the backend for WebSocket communication.

```ts
import { Hono } from 'hono';
import { upgradeWebSocket } from 'hono/cloudflare-workers';

const app = new Hono().get(
  '/ws',
  upgradeWebSocket(() => {
    return {
      onMessage: (event) => {
        console.log(event.data);
      }
    };
  })
);

export default app;
```

--------------------------------

### Log Generated Files Plugin

Source: https://hono.dev/docs/helpers/ssg

Example plugin that implements AfterGenerateHook to log all generated files after the toSSG process completes, useful for debugging and monitoring file generation.

```APIDOC
## Log Generated Files Plugin

### Description
Logs all generated files to the console after the toSSG process completes. Useful for debugging and monitoring which files were created.

### Implementation
```typescript
const logFilesPlugin: SSGPlugin = {
  afterGenerateHook: (result) => {
    if (result.files) {
      result.files.forEach((file) => console.log(file))
    }
  },
}
```

### Hook Used
- **afterGenerateHook**: Executes after the entire generation process completes

### Logic
1. Check if the result object contains a files property
2. If files exist, iterate through each file
3. Log each file to the console

### Use Cases
- Debug and verify which files were generated
- Monitor the toSSG process output
- Create audit logs of generated static files
- Validate that expected files were created
- Integration with logging or monitoring systems
```

--------------------------------

### Example of JWT `decode` Function Usage in Hono (TypeScript)

Source: https://hono.dev/docs/helpers/jwt

This example demonstrates how to use the `decode` function from `hono/jwt` to extract information from a JWT token. It shows importing the function, providing a sample token, and then logging the resulting header and payload objects. This function performs decoding without signature verification.

```ts
import { decode } from 'hono/jwt'

// Decode the JWT token
const tokenToDecode =
  'eyJhbGciOiAiSFMyNTYiLCAidHlwIjogIkpXVCJ9.eyJzdWIiOiAidXNlcjEyMyIsICJyb2xlIjogImFkbWluIn0.JxUwx6Ua1B0D1B0FtCrj72ok5cm1Pkmr_hL82sd7ELA'

const { header, payload } = decode(tokenToDecode)

console.log('Decoded Header:', header)
console.log('Decoded Payload:', payload)
```

--------------------------------

### Simple Hono route for IDE performance example (TypeScript)

Source: https://hono.dev/docs/guides/rpc

This TypeScript snippet presents a basic Hono route definition used to illustrate the impact of Hono's type inference on IDE performance. Even for a simple route, Hono generates extensive type instantiations, which can lead to slowdowns in development environments with many routes.

```typescript
// app.ts
export const app = new Hono().get('foo/:id', (c) =>
  c.json({ ok: true }, 200)
)
```

--------------------------------

### JWT Auth Middleware - Basic Setup

Source: https://context7_llms

Initialize JWT authentication middleware with required secret and algorithm configuration. This middleware verifies JWT tokens from the Authorization header and makes the payload available via c.get('jwtPayload').

```APIDOC
## JWT Auth Middleware

### Description
Provides authentication by verifying JWT tokens with configurable algorithms and validation rules. Checks for Authorization header by default or retrieves token from cookies if configured.

### Import
```ts
import { Hono } from 'hono'
import { jwt } from 'hono/jwt'
import type { JwtVariables } from 'hono/jwt'
```

### Basic Usage
```ts
type Variables = JwtVariables
const app = new Hono<{ Variables: Variables }>()

app.use(
  '/auth/*',
  jwt({
    secret: 'it-is-very-secret',
    alg: 'HS256',
  })
)

app.get('/auth/page', (c) => {
  return c.text('You are authorized')
})
```

### Get JWT Payload
```ts
app.get('/auth/page', (c) => {
  const payload = c.get('jwtPayload')
  return c.json(payload)
  // eg: { "sub": "1234567890", "name": "John Doe", "iat": 1516239022, "iss": "my-trusted-issuer" }
})
```

### Configuration Options

#### Required Parameters
- **secret** (string) - Required - Your secret key for token verification
- **alg** (string) - Required - Algorithm type: HS256 | HS384 | HS512 | RS256 | RS384 | RS512 | PS256 | PS384 | PS512 | ES256 | ES384 | ES512 | EdDSA

#### Optional Parameters
- **cookie** (string) - Optional - Cookie name to retrieve JWT token instead of Authorization header
- **headerName** (string) - Optional - Custom header name for JWT token (default: Authorization)
- **verifyOptions** (VerifyOptions) - Optional - Token verification rules

### Verify Options
- **iss** (string | RegExp) - Optional - Expected issuer for token verification
- **nbf** (boolean) - Optional - Verify nbf (not before) claim if present (default: true)
- **iat** (boolean) - Optional - Verify iat (issued at) claim if present (default: true)
- **exp** (boolean) - Optional - Verify exp (expiration) claim if present (default: true)

### Custom Header Example
```ts
app.use(
  '/auth/*',
  jwt({
    secret: 'it-is-very-secret',
    alg: 'HS256',
    headerName: 'x-custom-auth-header',
  })
)
```

### Environment Variable Usage
```ts
app.use('/auth/*', (c, next) => {
  const jwtMiddleware = jwt({
    secret: c.env.JWT_SECRET,
    alg: 'HS256',
  })
  return jwtMiddleware(c, next)
})
```
```

--------------------------------

### Test Hono GET Request with `app.request()` in TypeScript

Source: https://hono.dev/docs/api/hono

This snippet demonstrates how to use the `app.request()` method in Hono to simulate a GET request for testing purposes. It takes a URL path and returns a `Response` object, allowing assertions on its status.

```ts
test('GET /hello is ok', async () => {
  const res = await app.request('/hello')
  expect(res.status).toBe(200)
})
```

--------------------------------

### Specify Hono Router Implementation with router Option

Source: https://context7_llms

This example demonstrates how to configure a Hono application to use a specific router implementation, such as `RegExpRouter`, instead of the default `SmartRouter`. This is achieved by passing an instance of the desired router to the `Hono` constructor's `router` option.

```ts
import { Hono } from 'hono'
// ---cut---
import { RegExpRouter } from 'hono/router/reg-exp-router'

const app = new Hono({ router: new RegExpRouter() })
```

--------------------------------

### Configure Custom File Extensions for Hono SSG (TypeScript)

Source: https://hono.dev/docs/helpers/ssg

This example demonstrates how to customize file extensions for generated static files using the `extensionMap` option in `toSSG`. It allows mapping specific `Content-Type` headers to desired file extensions, extending or overriding the `defaultExtensionMap`.

```ts
import { toSSG, defaultExtensionMap } from 'hono/ssg'

// Save `application/x-html` content with `.html`
toSSG(app, fs, {
  extensionMap: {
    'application/x-html': 'html',
    ...defaultExtensionMap,
  },
})
```

--------------------------------

### GET / - Return HTML Response

Source: https://context7_llms

Demonstrates returning an HTML response with Content-Type: text/html. This is the recommended method for returning HTML content.

```APIDOC
## GET /

### Description
Return an HTML response with Content-Type: text/html.

### Method
GET

### Endpoint
/

### Response
#### Success Response (200)
- **body** (string) - HTML content
- **Content-Type** (string) - text/html

#### Response Example
```html
<h1>Hello! Hono!</h1>
```

### Code Example
```typescript
import { Hono } from 'hono'
const app = new Hono()

app.get('/', (c) => {
  return c.html('<h1>Hello! Hono!</h1>')
})
```
```

--------------------------------

### Registering Hono Middleware for Route and Method Specificity (TypeScript)

Source: https://context7_llms

This example illustrates various methods for registering middleware in a Hono application, including global application, path-specific, and method-and-path-specific middleware. It highlights how middleware can intercept requests before a handler or return a response early, demonstrating the typical processing order.

```ts
// match any method, all routes
app.use(logger())

// specify path
app.use('/posts/*', cors())

// specify method and path
app.post('/posts/*', basicAuth())
```

--------------------------------

### Run Supabase Functions Locally

Source: https://context7_llms

Starts the local Supabase stack and serves Edge Functions with a watcher. The `--no-verify-jwt` flag allows bypassing JWT verification during local development, simplifying testing.

```bash
supabase start # start the supabase stack
supabase functions serve --no-verify-jwt # start the Functions watcher
```

--------------------------------

### Return a Not Found Response in Hono (c.notFound)

Source: https://context7_llms

This example illustrates how to generate a `404 Not Found` response using `c.notFound()`. This method provides a standardized way to signal that the requested resource could not be found, and its behavior can be customized.

```ts
import { Hono } from 'hono'
const app = new Hono()
app.get('/notfound', (c) => {
  return c.notFound()
})
```

--------------------------------

### GET / - Layout Component with Props

Source: https://context7_llms

Renders a complete HTML page using a functional component pattern with props. Demonstrates how to use html template literals as reusable components that accept properties and render dynamic content.

```APIDOC
## GET /

### Description
Renders an HTML page using a Layout component that accepts site data props and renders a personalized greeting.

### Method
GET

### Endpoint
/

### Response
#### Success Response (200)
- **Content-Type** (string) - text/html
- **Body** (HTML) - Complete HTML document with meta tags and dynamic content

#### Response Example
```html
<html>
<head>
  <meta charset="UTF-8">
  <title>Hello <> World</title>
  <meta name="description" content="This is a description">
  <meta property="og:type" content="article">
  <meta property="og:title" content="Hello <> World">
  <meta property="og:image" content="https://example.com/image.png">
</head>
<body>
  <h1>Hello World</h1>
</body>
</html>
```

### Implementation
```typescript
interface SiteData {
  title: string
  description: string
  image: string
  children?: any
}

const Layout = (props: SiteData) => html`
<html>
<head>
  <meta charset="UTF-8">
  <title>${props.title}</title>
  <meta name="description" content="${props.description}">
  <head prefix="og: http://ogp.me/ns#">
  <meta property="og:type" content="article">
  <meta property="og:title" content="${props.title}">
  <meta property="og:image" content="${props.image}">
</head>
<body>
  ${props.children}
</body>
</html>
`

const Content = (props: { siteData: SiteData; name: string }) => (
  <Layout {...props.siteData}>
    <h1>Hello {props.name}</h1>
  </Layout>
)

app.get('/', (c) => {
  const props = {
    name: 'World',
    siteData: {
      title: 'Hello <> World',
      description: 'This is a description',
      image: 'https://example.com/image.png',
    },
  }
  return c.html(<Content {...props} />)
})
```
```

--------------------------------

### Defining Hono Route with Multiple Path Parameters

Source: https://context7_llms

This example demonstrates how to define a Hono route that accepts multiple path parameters, such as `:postId` and `:authorId`. It also includes an optional query parameter for further filtering.

```ts
const route = app.get(
  '/posts/:postId/:authorId',
  zValidator(
    'query',
    z.object({
      page: z.string().optional(),
    })
  ),
  (c) => {
    // ...
    return c.json({
      title: 'Night',
      body: 'Time to sleep',
    })
  }
)
```

--------------------------------

### Define Hono sub-router for authors resource (TypeScript)

Source: https://hono.dev/docs/guides/rpc

This TypeScript code defines a Hono sub-router specifically for handling 'authors' related API endpoints. It demonstrates how to create routes for listing all authors (GET /), creating a new author (POST /), and retrieving a single author by ID (GET /:id), promoting modularity in larger applications.

```typescript
// authors.ts
import { Hono } from 'hono'

const app = new Hono()
  .get('/', (c) => c.json('list authors'))
  .post('/', (c) => c.json('create an author', 201))
  .get('/:id', (c) => c.json(`get ${c.req.param('id')}`))

export default app
```

--------------------------------

### Initialize Hono Application

Source: https://context7_llms

Create a new Hono instance as the primary application object. This is the entry point for defining routes and middleware in a Hono application.

```typescript
import { Hono } from 'hono'

const app = new Hono()

export default app
```

--------------------------------

### Configure Renovate for Hono Projects

Source: https://context7_llms

Sets up Renovate configuration for automated dependency updates in Hono projects. Since the Hono team does not maintain an official Renovate config, this example uses a third-party community-maintained configuration from shinGangan/renovate-config-hono.

```json
{
  "$schema": "https://docs.renovatebot.com/renovate-schema.json",
  "extends": [
    "github>shinGangan/renovate-config-hono"
  ]
}
```

--------------------------------

### Define Basic Routes with HTTP Methods in Hono

Source: https://context7_llms

Set up basic routing with standard HTTP methods (GET, POST, PUT, DELETE), wildcards, custom methods, and multiple method/path combinations. Supports flexible route definition patterns.

```typescript
import { Hono } from 'hono'
const app = new Hono()

// HTTP Methods
app.get('/', (c) => c.text('GET /'))
app.post('/', (c) => c.text('POST /'))
app.put('/', (c) => c.text('PUT /'))
app.delete('/', (c) => c.text('DELETE /'))

// Wildcard
app.get('/wild/*/card', (c) => {
  return c.text('GET /wild/*/card')
})

// Any HTTP methods
app.all('/hello', (c) => c.text('Any Method /hello'))

// Custom HTTP method
app.on('PURGE', '/cache', (c) => c.text('PURGE Method /cache'))

// Multiple Method
app.on(['PUT', 'DELETE'], '/post', (c) =>
  c.text('PUT or DELETE /post')
)

// Multiple Paths
app.on('GET', ['/hello', '/ja/hello', '/en/hello'], (c) =>
  c.text('Hello')
)
```

--------------------------------

### GET /welcome - Return Response Body

Source: https://hono.dev/docs/api/context

Return an HTTP response body with optional status code and headers using the c.body() method. This is a low-level method; c.text() or c.html() are recommended for specific content types.

```APIDOC
## GET /welcome

### Description
Return a response body with custom status code and headers.

### Method
GET

### Endpoint
/welcome

### Code Example
```typescript
app.get('/welcome', (c) => {
  c.header('Content-Type', 'text/plain')
  // Return the response body
  return c.body('Thank you for coming')
})
```

### Alternative Syntax
```typescript
app.get('/welcome', (c) => {
  return c.body('Thank you for coming', 201, {
    'X-Message': 'Hello!',
    'Content-Type': 'text/plain'
  })
})
```

### Response Example
```
HTTP/1.1 201 Created
X-Message: Hello!
Content-Type: text/plain

Thank you for coming
```
```

--------------------------------

### Create Hono Application for Azure Functions (`src/app.ts`)

Source: https://context7_llms

Defines a basic Hono application in `src/app.ts` that responds with 'Hello Azure Functions!' for GET requests to the root path. This file serves as the core Hono instance.

```ts
// src/app.ts
import { Hono } from 'hono'
const app = new Hono()

app.get('/', (c) => c.text('Hello Azure Functions!'))

export default app
```

--------------------------------

### GET /echo (Custom Context Variables)

Source: https://hono.dev/docs/api/context

Demonstrates creating a custom middleware to provide a method via `c.set()` and accessing it through `c.var` in a route handler, ensuring type safety with `Env` generics.

```APIDOC
## GET /echo

### Description
This endpoint showcases the use of `c.var` to access custom methods or values provided by middleware. A `createMiddleware` function sets an `echo` function into the context, which is then called by the route handler.

### Method
GET

### Endpoint
/echo

### Parameters
#### Path Parameters
- N/A

#### Query Parameters
- N/A

#### Request Body
- N/A

### Request Example
```json
{}
```

### Response
#### Success Response (200)
- **body** (string) - The string returned by the custom `echo` function.

#### Response Example
```json
"Hello!"
```
```

--------------------------------

### GET /*

Source: https://hono.dev/docs/getting-started/nodejs

Configure Hono to serve all incoming requests by mapping them to files within a specified static root directory. This can be used as a fallback for all routes to serve files from a static folder.

```APIDOC
## GET /*

### Description
Configures Hono to serve all incoming requests by mapping them to files within a specified static root directory. This can be used to serve an entire static site or as a catch-all for static assets.

### Method
GET

### Endpoint
/*

### Parameters
#### Request Body (serveStatic options)
- **root** (string) - Required - The base directory from which to serve static files for all matching requests.

### Request Example
```typescript
import { serveStatic } from '@hono/node-server/serve-static'

app.use('*', serveStatic({ root: './static' }))
```

### Response
#### Success Response (200)
- **file_content** (any) - The content of the requested static file.

#### Response Example
```text
(Content of ./static/hello.txt for a request to /hello.txt)
```
```

--------------------------------

### GET /pages/* (Advanced HTML Rendering with Custom Head)

Source: https://hono.dev/docs/api/context

Illustrates how to define a type-safe `ContextRenderer` to pass additional arguments like `head` to the renderer, allowing for dynamic title and header content based on the route.

```APIDOC
## GET /pages/my-favorite

### Description
This endpoint demonstrates advanced HTML rendering where `c.setRenderer()` is configured to accept additional arguments (e.g., `head` for title) for more dynamic layout generation. The route handler then passes specific data to `c.render()`.

### Method
GET

### Endpoint
/pages/my-favorite

### Parameters
#### Path Parameters
- N/A

#### Query Parameters
- N/A

#### Request Body
- N/A

### Request Example
```json
{}
```

### Response
#### Success Response (200)
- **body** (string) - HTML content with a dynamically generated title and header based on the `head` argument passed to `c.render()`.

#### Response Example
```html
<html>
  <head>
    <title>My favorite</title>
  </head>
  <body>
    <header>My favorite</header>
    <p>Ramen and Sushi</p>
  </body>
</html>
```
```

--------------------------------

### GET /custom-context/

Source: https://hono.dev/docs/getting-started/aws-lambda

Access the full AWS Lambda request context by binding the `LambdaEvent` type and using `c.env.event.requestContext`.

```APIDOC
## GET /custom-context/

### Description
This endpoint allows access to the complete AWS Lambda request context object, which contains detailed information about the invocation, including HTTP request details, API Gateway context, and more.

### Method
GET

### Endpoint
/custom-context/

### Parameters
#### Path Parameters
(None)

#### Query Parameters
(None)

#### Request Body
(None)

### Request Example
(No request body required)

### Response
#### Success Response (200)
- **requestContext** (object) - The AWS Lambda request context object, containing details like account ID, API ID, HTTP method, path, source IP, etc.

#### Response Example
```json
{
  "accountId": "123456789012",
  "apiId": "abcdef123",
  "authorizer": null,
  "domainName": "example.com",
  "domainPrefix": "example",
  "extendedRequestId": "abcdef123=",
  "http": {
    "method": "GET",
    "path": "/custom-context/",
    "protocol": "HTTP/1.1",
    "sourceIp": "192.0.2.1",
    "userAgent": "curl/7.64.1"
  },
  "requestId": "abcdef12-3456-7890-1234-567890abcdef",
  "routeKey": "GET /custom-context/",
  "stage": "$default",
  "time": "12/Dec/2023:12:00:00 +0000",
  "timeEpoch": 1670841600000
}
```
```

--------------------------------

### Define Hono Routes with Basic HTTP Methods and Wildcards

Source: https://hono.dev/docs/api/routing

This snippet illustrates how to define basic routes in Hono using standard HTTP methods like GET, POST, PUT, DELETE, and ALL. It also shows how to use wildcards for flexible path matching and how to handle custom HTTP methods or multiple methods/paths with `app.on()`.

```ts
// HTTP Methods
app.get('/', (c) => c.text('GET /'))
app.post('/', (c) => c.text('POST /'))
app.put('/', (c) => c.text('PUT /'))
app.delete('/', (c) => c.text('DELETE /'))
    
// Wildcard
app.get('/wild/*/card', (c) => {
  return c.text('GET /wild/*/card')
})
    
// Any HTTP methods
app.all('/hello', (c) => c.text('Any Method /hello'))
    
// Custom HTTP method
app.on('PURGE', '/cache', (c) => c.text('PURGE Method /cache'))
    
// Multiple Method
app.on(['PUT', 'DELETE'], '/post', (c) =>
  c.text('PUT or DELETE /post')
)
    
// Multiple Paths
app.on('GET', ['/hello', '/ja/hello', '/en/hello'], (c) =>
  c.text('Hello')
)
```

--------------------------------

### GET /ws - WebSocket Upgrade

Source: https://context7_llms

This endpoint initiates a WebSocket connection using the `upgradeWebSocket` helper. It defines handlers for various WebSocket events like `onMessage`, `onClose`, `onOpen`, and `onError`.

```APIDOC
## GET /ws

### Description
This endpoint handles the upgrade of an HTTP GET request to a WebSocket connection. It utilizes Hono's `upgradeWebSocket` helper to define event handlers for the WebSocket lifecycle, including message reception, connection closure, and error handling.

### Method
GET

### Endpoint
/ws

### Parameters
#### Path Parameters
None

#### Query Parameters
None

#### Request Body
Not applicable for the initial WebSocket upgrade request.

#### WebSocket Handler Configuration (passed to `upgradeWebSocket`)
- **onOpen** (function) - Optional - A callback function executed when the WebSocket connection is established. Takes `event` and `ws` (WebSocket object) as arguments. *Note: Currently not supported on Cloudflare Workers.*
- **onMessage** (function) - Optional - A callback function executed when a message is received from the client. Takes `event` (MessageEvent) and `ws` (WebSocket object) as arguments.
- **onClose** (function) - Optional - A callback function executed when the WebSocket connection is closed. Takes `event` (CloseEvent) and `ws` (WebSocket object) as arguments.
- **onError** (function) - Optional - A callback function executed when an error occurs on the WebSocket. Takes `event` (Event) and `ws` (WebSocket object) as arguments.

### Request Example
```ts
app.get(
  '/ws',
  upgradeWebSocket((c) => {
    return {
      onMessage(event, ws) {
        console.log(`Message from client: ${event.data}`)
        ws.send('Hello from server!')
      },
      onClose: () => {
        console.log('Connection closed')
      },
      // onOpen and onError can also be defined here
    }
  })
)
```

### Response
#### Success Response (101 Switching Protocols)
The server responds with a `101 Switching Protocols` status, indicating a successful upgrade to the WebSocket protocol. Subsequent communication occurs over the WebSocket connection, managed by the defined event handlers.

#### Response Example
(Illustrative example of server-side message handling within the WebSocket connection)
```json
{
  "event": "onMessage",
  "data_received": "Client message content",
  "server_action": "ws.send('Hello from server!')"
}
```
```

--------------------------------

### Initialize Hono Application in TypeScript

Source: https://hono.dev/docs/api/hono

This snippet demonstrates how to import the `Hono` class and create a new application instance. It also shows how to export the app, making it the primary entry point for handling requests in environments like Cloudflare Workers or Bun.

```ts
import { Hono } from 'hono'

const app = new Hono()
//...

export default app // for Cloudflare Workers or Bun
```

--------------------------------

### Wrap Hono Middleware for Cloudflare Pages

Source: https://context7_llms

Demonstrates using `handleMiddleware` to convert Hono middleware into Cloudflare Pages middleware format. This allows developers to use Hono's middleware API while running on Cloudflare Pages. The example logs the request URL using Hono's context object.

```ts
// functions/_middleware.ts
import { handleMiddleware } from 'hono/cloudflare-pages'

export const onRequest = handleMiddleware(async (c, next) => {
  console.log(`You are accessing ${c.req.url}`)
  await next()
})
```

--------------------------------

### Build and Run Node.js Application with Multi-Stage Dockerfile

Source: https://hono.dev/docs/getting-started/nodejs

This Dockerfile defines a multi-stage build process for a Node.js application, optimizing the final image size and enhancing security. It includes a 'base' stage for common dependencies, a 'builder' stage for installing development dependencies and compiling the application, and a 'runner' stage that creates a non-root user and copies only the essential runtime artifacts.

```dockerfile
FROM node:22-alpine AS base

FROM base AS builder

RUN apk add --no-cache gcompat
WORKDIR /app

COPY package*json tsconfig.json src ./

RUN npm ci && \
    npm run build && \
    npm prune --production

FROM base AS runner
WORKDIR /app

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 hono

COPY --from=builder --chown=hono:nodejs /app/node_modules /app/node_modules
COPY --from=builder --chown=hono:nodejs /app/dist /app/dist
COPY --from=builder --chown=hono:nodejs /app/package.json /app/package.json

USER hono
EXPOSE 3000

CMD ["node", "/app/dist/index.js"]
```

--------------------------------

### GET /favicon.ico

Source: https://hono.dev/docs/getting-started/nodejs

Configure Hono to serve a single, specific static file directly from a given path. This is ideal for files like `favicon.ico` located at the root of your project.

```APIDOC
## GET /favicon.ico

### Description
Configures Hono to serve a single, specific static file directly from a given file system path. This is typically used for files like `favicon.ico` that are requested at a precise URL.

### Method
GET

### Endpoint
/favicon.ico

### Parameters
#### Request Body (serveStatic options)
- **path** (string) - Required - The exact file system path to the static file to be served.

### Request Example
```typescript
import { serveStatic } from '@hono/node-server/serve-static'

app.use('/favicon.ico', serveStatic({ path: './favicon.ico' }))
```

### Response
#### Success Response (200)
- **file_content** (any) - The content of the requested static file.

#### Response Example
```text
(Content of ./favicon.ico)
```
```

--------------------------------

### GET /say - Return Text Response

Source: https://context7_llms

Demonstrates returning a plain text response with Content-Type: text/plain. This is the recommended method for returning text content.

```APIDOC
## GET /say

### Description
Return a plain text response with Content-Type: text/plain.

### Method
GET

### Endpoint
/say

### Response
#### Success Response (200)
- **body** (string) - Plain text response
- **Content-Type** (string) - text/plain

#### Response Example
```
Hello!
```

### Code Example
```typescript
import { Hono } from 'hono'
const app = new Hono()

app.get('/say', (c) => {
  return c.text('Hello!')
})
```
```

--------------------------------

### GET /posts/:postId/:authorId (Multiple Parameters)

Source: https://hono.dev/docs/guides/rpc

Handles routes with multiple path parameters (postId, authorId) and an optional query parameter (page).

```APIDOC
## GET /posts/:postId/:authorId

### Description
Retrieves a post using both a post ID and an author ID as path parameters. An optional 'page' query parameter can also be included.

### Method
GET

### Endpoint
/posts/:postId/:authorId

### Parameters
#### Path Parameters
- **postId** (string) - Required - The unique identifier of the post.
- **authorId** (string) - Required - The unique identifier of the author.

#### Query Parameters
- **page** (string) - Optional - A page identifier.

### Request Example
```json
{
  "param": {
    "postId": "123",
    "authorId": "456"
  },
  "query": {}
}
```

### Response
#### Success Response (200)
- **title** (string) - The title of the retrieved post.
- **body** (string) - The body content of the retrieved post.

#### Response Example
```json
{
  "title": "Night",
  "body": "Time to sleep"
}
```
```

--------------------------------

### Hono `every` Middleware for Sequential Execution

Source: https://context7_llms

This example demonstrates the `every` middleware from `hono/combine`. It ensures all provided middleware functions are executed in order, stopping if any of them fail or throw an error. Here, it's used within `some` to apply both authentication and rate limiting if the client is not on the local network.

```ts
import { some, every } from 'hono/combine'
import { bearerAuth } from 'hono/bearer-auth'
import { myCheckLocalNetwork } from '@/check-local-network'
import { myRateLimit } from '@/rate-limit'

// If client is in local network, skip authentication and rate limiting.
// Otherwise, apply authentication and rate limiting.
app.use(
  '/api/*',
  some(
    myCheckLocalNetwork(),
    every(bearerAuth({ token }), myRateLimit({ limit: 100 }))
  )
)
```

--------------------------------

### Regular Cookies - Set, Get, Delete

Source: https://hono.dev/docs/helpers/cookie

Manage regular cookies by setting, retrieving, and deleting them. This includes operations for individual cookies and retrieving all cookies at once.

```APIDOC
## Regular Cookies

### Description
Manage regular cookies in your Hono application with simple set, get, and delete operations.

### Method
GET

### Endpoint
/cookie

### Functions

#### setCookie(c, name, value, options?)
- **c** (Context) - Required - The Hono context object
- **name** (string) - Required - The cookie name
- **value** (string) - Required - The cookie value
- **options** (object) - Optional - Cookie options (path, secure, httpOnly, domain, etc.)

#### getCookie(c, name?)
- **c** (Context) - Required - The Hono context object
- **name** (string) - Optional - Specific cookie name to retrieve. If omitted, returns all cookies

#### deleteCookie(c, name, options?)
- **c** (Context) - Required - The Hono context object
- **name** (string) - Required - The cookie name to delete
- **options** (object) - Optional - Cookie options

### Usage Example
```typescript
app.get('/cookie', (c) => {
  setCookie(c, 'cookie_name', 'cookie_value')
  const yummyCookie = getCookie(c, 'cookie_name')
  deleteCookie(c, 'cookie_name')
  const allCookies = getCookie(c)
  // ...
})
```

### Response
- **yummyCookie** (string) - The retrieved cookie value
- **allCookies** (object) - Object containing all cookies from the request
```

--------------------------------

### GET / (Context Variables)

Source: https://hono.dev/docs/api/context

Illustrates how to use `c.set()` and `c.get()` to pass arbitrary key-value pairs between middleware and route handlers within a single request, ensuring type safety with `Variables` generics.

```APIDOC
## GET /

### Description
This endpoint demonstrates how to set and retrieve context-specific variables (`message`) using `c.set()` and `c.get()`. The variable is set in a middleware and accessed in the route handler, showcasing request-scoped data passing.

### Method
GET

### Endpoint
/

### Parameters
#### Path Parameters
- N/A

#### Query Parameters
- N/A

#### Request Body
- N/A

### Request Example
```json
{}
```

### Response
#### Success Response (200)
- **body** (string) - A text message containing the value retrieved from the context variable.

#### Response Example
```json
"The message is \"Hono is cool!!\""
```
```

--------------------------------

### Run Azure Functions Local Development Server

Source: https://context7_llms

Commands to start the local development server for an Azure Functions project using various Node.js package managers. This allows for testing the Hono application running on Azure Functions locally.

```sh
npm run start
```

```sh
yarn start
```

```sh
pnpm start
```

```sh
bun run start
```

--------------------------------

### Response Object Manipulation

Source: https://hono.dev/docs/api/context

Demonstrates how to access and modify the `Response` object, for example, by appending custom headers in a middleware.

```APIDOC
## Middleware: Response Object Manipulation

### Description
This middleware example shows how to access the `Response` object via `c.res` and modify its headers before the response is sent.

### Method
N/A (Middleware)

### Endpoint
N/A (Applies to all routes where middleware is used)

### Parameters
#### Path Parameters
- N/A

#### Query Parameters
- N/A

#### Request Body
- N/A

### Request Example
```json
{}
```

### Response
#### Success Response (200)
- **Headers** (object) - The response headers will include 'X-Debug: Debug message'.

#### Response Example
```json
{
  "headers": {
    "X-Debug": "Debug message",
    "Content-Type": "text/plain;charset=UTF-8"
  },
  "body": "Original response body"
}
```
```

--------------------------------

### GET /notfound - Return Not Found Response

Source: https://context7_llms

Demonstrates returning a 404 Not Found response using the c.notFound() method. This response can be customized using app.notFound().

```APIDOC
## GET /notfound

### Description
Return a 404 Not Found response.

### Method
GET

### Endpoint
/notfound

### Response
#### Error Response (404)
- **status** (number) - 404
- **body** (string) - Not Found message

### Code Example
```typescript
import { Hono } from 'hono'
const app = new Hono()

app.get('/notfound', (c) => {
  return c.notFound()
})
```

### Notes
- Response can be customized using app.notFound() method
```

--------------------------------

### Define REST API endpoints in Hono

Source: https://context7_llms

Create GET and POST endpoints that return text and JSON responses with custom headers. The GET endpoint returns plain text, while the POST endpoint returns JSON with a 201 status code and custom header.

```typescript
app.get('/posts', (c) => {
  return c.text('Many posts')
})

app.post('/posts', (c) => {
  return c.json(
    {
      message: 'Created',
    },
    201,
    {
      'X-Custom': 'Thank you',
    }
  )
})
```

--------------------------------

### GET /foo (Cloudflare Workers ExecutionContext)

Source: https://hono.dev/docs/api/context

Demonstrates accessing the Cloudflare Workers `ExecutionContext` via `c.executionCtx` to perform operations like `waitUntil`.

```APIDOC
## GET /foo

### Description
This endpoint shows how to access the Cloudflare Workers `ExecutionContext` through `c.executionCtx`. This allows for operations such as `waitUntil`, which extends the lifetime of the request to complete asynchronous tasks.

### Method
GET

### Endpoint
/foo

### Parameters
#### Path Parameters
- N/A

#### Query Parameters
- N/A

#### Request Body
- N/A

### Request Example
```json
{}
```

### Response
#### Success Response (200)
- **body** (string) - The response body is not explicitly defined in the example, but the `waitUntil` operation will be initiated.

#### Response Example
```json
"OK"
```
```

--------------------------------

### GET /redirect - Redirect Response

Source: https://context7_llms

Demonstrates redirecting to another URL using the c.redirect() method. Shows both temporary (302) and permanent (301) redirects.

```APIDOC
## GET /redirect

### Description
Redirect to another URL with optional status code.

### Method
GET

### Endpoint
/redirect

### Response
#### Redirect Response (302 or custom)
- **status** (number) - 302 (default) or custom status code
- **Location** (string) - Target URL

### Code Example - Temporary Redirect
```typescript
import { Hono } from 'hono'
const app = new Hono()

app.get('/redirect', (c) => {
  return c.redirect('/')
})
```

### Code Example - Permanent Redirect
```typescript
app.get('/redirect-permanently', (c) => {
  return c.redirect('/', 301)
})
```

### Notes
- Default status code is 302 (temporary redirect)
- Use 301 for permanent redirects
- Use 307 or 308 for preserving HTTP method
```

--------------------------------

### GET /posts

Source: https://context7_llms

Retrieves a specific post by its ID. The ID is provided as a query parameter.

```APIDOC
## GET /posts

### Description
Retrieves a specific post by its ID. The ID is provided as a query parameter.

### Method
GET

### Endpoint
/posts

### Parameters
#### Path Parameters
(None)

#### Query Parameters
- **id** (string) - Required - The unique identifier of the post to retrieve.

#### Request Body
(None)

### Request Example
(No request body for GET)

### Response
#### Success Response (200)
- **post** (object) - The retrieved post object.
  - **id** (string) - The ID of the post.
  - **title** (string) - The title of the post.
  - **body** (string) - The body content of the post.

#### Error Response (404)
- **error** (string) - An error message indicating the post was not found.

#### Response Example
```json
{
  "post": {
    "id": "123",
    "title": "Hello",
    "body": "Hono is a cool project"
  }
}
```

#### Error Response Example
```json
{
  "error": "not found"
}
```
```

--------------------------------

### GET /posts/:id (Basic Retrieval)

Source: https://hono.dev/docs/guides/rpc

Retrieves a single post by its unique ID. If the post is not found, a 404 error is returned.

```APIDOC
## GET /posts/:id

### Description
Retrieves a single post by its unique ID. If the post corresponding to the provided ID is not found, a 404 Not Found error is returned.

### Method
GET

### Endpoint
/posts/:id

### Parameters
#### Path Parameters
- **id** (string) - Required - The unique identifier of the post to retrieve.

### Request Example
```json
{
  "param": {
    "id": "123"
  }
}
```

### Response
#### Success Response (200)
- **post** (object) - The post object containing details like id, title, and body.

#### Response Example
```json
{
  "post": {
    "id": "123",
    "title": "My First Post",
    "body": "This is the content of my first post."
  }
}
```

#### Error Response (404)
- **error** (string) - A message indicating that the resource was not found.

#### Response Example
```json
{
  "error": "not found"
}
```
```

--------------------------------

### GET /notfound - Return 404 Not Found

Source: https://hono.dev/docs/api/context

Return a 404 Not Found response using the c.notFound() method. This response can be customized using app.notFound().

```APIDOC
## GET /notfound

### Description
Return a 404 Not Found response.

### Method
GET

### Endpoint
/notfound

### Code Example
```typescript
app.get('/notfound', (c) => {
  return c.notFound()
})
```

### Response Status Code
- **404** - Not Found

### Response Example
```
HTTP/1.1 404 Not Found
```

### Notes
This response can be customized using app.notFound() method.
```

--------------------------------

### GET Path Parameter

Source: https://context7_llms

Retrieves path parameters from the request URL. Supports both single parameter retrieval and bulk retrieval of all parameters.

```APIDOC
## GET /user/:name

### Description
Retrieve path parameters from the request URL.

### Method
GET

### Endpoint
`/user/:name` or `/posts/:id/comment/:comment_id`

### Parameters
#### Path Parameters
- **name** (string) - Required - The user name parameter
- **id** (string) - Required - The post ID parameter
- **comment_id** (string) - Required - The comment ID parameter

### Request Example - Single Parameter
```ts
app.get('/user/:name', async (c) => {
  const name = c.req.param('name')
  return c.json({ name })
})
```

### Request Example - Multiple Parameters
```ts
app.get('/posts/:id/comment/:comment_id', async (c) => {
  const { id, comment_id } = c.req.param()
  return c.json({ id, comment_id })
})
```

### Response Example
```json
{
  "name": "john"
}
```
```

--------------------------------

### GET /api - Return JSON Response

Source: https://context7_llms

Demonstrates returning a JSON response with Content-Type: application/json. This is the recommended method for returning JSON data.

```APIDOC
## GET /api

### Description
Return a JSON response with Content-Type: application/json.

### Method
GET

### Endpoint
/api

### Response
#### Success Response (200)
- **message** (string) - Response message
- **Content-Type** (string) - application/json

#### Response Example
```json
{
  "message": "Hello!"
}
```

### Code Example
```typescript
import { Hono } from 'hono'
const app = new Hono()

app.get('/api', (c) => {
  return c.json({ message: 'Hello!' })
})
```
```

--------------------------------

### Execute Build and Deploy Commands for Serverless-Devs

Source: https://context7_llms

These shell commands execute the `build` and `deploy` scripts defined in `package.json`. First, `npm run build` compiles the Hono application, and then `npm run deploy` pushes the compiled code to Alibaba Cloud Function Compute using Serverless-Devs.

```sh
npm run build # Compile the TypeScript code to JavaScript
npm run deploy # Deploy the function to Alibaba Cloud Function Compute
```

--------------------------------

### GET /posts/:id (with Query Parameters)

Source: https://hono.dev/docs/guides/rpc

Retrieves a post by its ID, allowing an optional 'page' query parameter for additional context or filtering.

```APIDOC
## GET /posts/:id

### Description
Retrieves a post by its unique ID. This endpoint also demonstrates how to include and validate optional query parameters, such as a 'page' number.

### Method
GET

### Endpoint
/posts/:id

### Parameters
#### Path Parameters
- **id** (string) - Required - The unique identifier of the post.

#### Query Parameters
- **page** (string) - Optional - A page number, which will be coerced to a number by the validator.

### Request Example
```json
{
  "param": {
    "id": "123"
  },
  "query": {
    "page": "1"
  }
}
```

### Response
#### Success Response (200)
- **title** (string) - The title of the retrieved post.
- **body** (string) - The body content of the retrieved post.

#### Response Example
```json
{
  "title": "Night",
  "body": "Time to sleep"
}
```
```

--------------------------------

### Basic Auth Middleware Setup

Source: https://hono.dev/docs/middleware/builtin/basic-auth

Configure and apply Basic authentication middleware to protect routes in your Hono application. This middleware can be applied globally to path patterns or to specific route handlers.

```APIDOC
## Basic Auth Middleware

### Description
Applies HTTP Basic authentication to specified routes or paths in a Hono application. Supports both static credentials and custom verification functions.

### Import
```typescript
import { Hono } from 'hono'
import { basicAuth } from 'hono/basic-auth'
```

### Usage - Path Pattern
Apply middleware to all routes matching a path pattern:
```typescript
const app = new Hono()

app.use(
  '/auth/*',
  basicAuth({
    username: 'hono',
    password: 'acoolproject',
  })
)

app.get('/auth/page', (c) => {
  return c.text('You are authorized')
})
```

### Usage - Specific Route
Apply middleware to a specific route and HTTP method:
```typescript
const app = new Hono()

app.delete(
  '/auth/page',
  basicAuth({ username: 'hono', password: 'acoolproject' }),
  (c) => {
    return c.text('Page deleted')
  }
)
```

### Usage - Custom Verification
Verify credentials using a custom function:
```typescript
const app = new Hono()

app.use(
  basicAuth({
    verifyUser: (username, password, c) => {
      return (
        username === 'dynamic-user' && password === 'hono-password'
      )
    },
  })
)
```

### Options

#### Required Options
- **username** (string) - The username for authentication
- **password** (string) - The password for authentication

#### Optional Options
- **realm** (string) - The domain name of the realm for WWW-Authenticate header. Default: `"Secure Area"`
- **hashFunction** (Function) - Custom function for secure password comparison
- **verifyUser** ((username: string, password: string, c: Context) => boolean | Promise<boolean>) - Custom function to verify user credentials
- **invalidUserMessage** (string | object | MessageFunction) - Custom message returned when authentication fails. MessageFunction signature: `(c: Context) => string | object | Promise<string | object>`

### Response
#### Success Response (200)
User is authenticated and request proceeds to the next handler.

#### Authentication Failure Response (401)
Returns 401 Unauthorized with WWW-Authenticate challenge header when credentials are invalid or missing.
```

--------------------------------

### Simple Proxy Setup in Hono TypeScript

Source: https://context7_llms

Basic proxy implementation using Hono's proxy() function to forward requests to an origin server. The proxy automatically handles Accept-Encoding headers and removes unnecessary response headers, returning a Response object suitable for HTTP handlers.

```typescript
app.get('/proxy/:path', (c) => {
  return proxy(`http://${originServer}/${c.req.param('path')}`)
})
```

--------------------------------

### app.fetch()

Source: https://context7_llms

Serves as the entry point for handling incoming requests in environments like Cloudflare Workers or Bun, returning a `Response` object.

```APIDOC
## app.fetch()

### Description
The `app.fetch` method is designed to be the primary entry point for your Hono application, especially in serverless environments like Cloudflare Workers or Bun. It takes a `Request` object along with environment variables and an execution context, and returns a `Response` object, effectively making your Hono app an HTTP server.

### Method
N/A (Handles incoming requests from the environment runtime)

### Endpoint
N/A

### Parameters
#### Path Parameters
N/A

#### Query Parameters
N/A

#### Request Body
- **request** (Request) - Required - The incoming HTTP request object from the environment runtime.
- **env** (any) - Optional - Environment variables provided by the runtime (e.g., Cloudflare Workers `env`).
- **ctx** (ExecutionContext) - Optional - The execution context for the request (e.g., Cloudflare Workers `ctx`).

### Request Example
```typescript
import { Hono } from 'hono';
const app = new Hono();

// Define a simple route
app.get('/', (c) => c.text('Hello from Hono!'));

// Cloudflare Workers entry point
type Env = {}; // Replace with your actual environment type
type ExecutionContext = {}; // Replace with your actual context type

export default {
  fetch(request: Request, env: Env, ctx: ExecutionContext) {
    return app.fetch(request, env, ctx);
  },
};

// Bun entry point (simplified)
// export default app;
// Or with custom port:
// export default {
//   port: 3000,
//   fetch: app.fetch,
// };
```

### Response
#### Success Response (2xx)
- **response** (Response) - The HTTP response object generated by the Hono application based on the incoming request.

#### Response Example
```typescript
// Assuming a GET / request to the example above
new Response('Hello from Hono!', { status: 200, headers: { 'Content-Type': 'text/plain' } });
```
```

--------------------------------

### Configure and Use Hono Language Detector Middleware (TypeScript)

Source: https://hono.dev/docs/middleware/builtin/language

This example illustrates how to initialize and apply the `languageDetector` middleware to a Hono application. It configures `supportedLanguages` and a `fallbackLanguage`, then shows how to retrieve the detected language using `c.get('language')` within a route handler to provide locale-specific responses.

```ts
const app = new Hono()

app.use(
  languageDetector({
    supportedLanguages: ['en', 'ar', 'ja'], // Must include fallback
    fallbackLanguage: 'en', // Required
  })
)

app.get('/', (c) => {
  const lang = c.get('language')
  return c.text(`Hello! Your language is ${lang}`)
})
```

--------------------------------

### Setup Logger Middleware in Hono Application

Source: https://hono.dev/docs/middleware/builtin/logger

Initialize a Hono application and apply the logger middleware using app.use(). This middleware will automatically log all incoming requests and outgoing responses with HTTP method, path, status code, and timing information.

```typescript
const app = new Hono()

app.use(logger())
app.get('/', (c) => c.text('Hello Hono!'))
```

--------------------------------

### JSON Response Formatting Examples

Source: https://hono.dev/docs/middleware/builtin/pretty-json

Demonstrates the difference between compact JSON response and prettified JSON response. Without the query parameter, JSON is returned in compact form. With the ?pretty query parameter, the same JSON is formatted with indentation for readability.

```javascript
// GET /
{"project":{"name":"Hono","repository":"https://github.com/honojs/hono"}}
```

```javascript
// GET /?pretty
{
  "project": {
    "name": "Hono",
    "repository": "https://github.com/honojs/hono"
  }
}
```

--------------------------------

### Define Hono Route for Redirection (TypeScript)

Source: https://hono.dev/docs/helpers/ssg

This Hono route example demonstrates how to define a simple HTTP redirect. When the `redirectPlugin` is active, this route will trigger the generation of a static HTML file at `/old.html` containing a meta refresh tag that redirects to `/new`.

```ts
app.get('/old', (c) => c.redirect('/new'))
```

--------------------------------

### GET Path Parameter with Regex

Source: https://context7_llms

Defines path parameters with regular expression constraints. Allows validation of parameter format at the routing level.

```APIDOC
## GET /post/:date/:title

### Description
Retrieve path parameters with regex pattern validation.

### Method
GET

### Endpoint
`/post/:date{[0-9]+}/:title{[a-z]+}`

### Parameters
#### Path Parameters
- **date** (string) - Required - Numeric date parameter (digits only)
- **title** (string) - Required - Lowercase title parameter (lowercase letters only)

### Request Example
```ts
app.get('/post/:date{[0-9]+}/:title{[a-z]+}', async (c) => {
  const { date, title } = c.req.param()
  return c.json({ date, title })
})
```

### Matching Behavior
- Matches `/post/20231215/mypost`
- Does not match `/post/abc/mypost` (date not numeric)
- Does not match `/post/20231215/MyPost` (title has uppercase)

### Response Example
```json
{
  "date": "20231215",
  "title": "mypost"
}
```
```

--------------------------------

### Example Hono application for testing purposes (TypeScript)

Source: https://hono.dev/getting-started/cloudflare-workers

A simple Hono application that responds with 'Please test me!' on the root path. This application serves as a target for unit testing.

```ts
import { Hono } from 'hono'

const app = new Hono()
app.get('/', (c) => c.text('Please test me!'))
```

--------------------------------

### Basic JWT Middleware Usage in Hono with Type Inference

Source: https://context7_llms

This example shows how to apply the JWT middleware to a Hono application to protect routes under '/auth/*'. It configures the middleware with a secret and algorithm, and demonstrates how to infer the type of the JWT payload for better development experience.

```ts
type Variables = JwtVariables

const app = new Hono<{ Variables: Variables }>()

app.use(
  '/auth/*',
  jwt({
    secret: 'it-is-very-secret',
    alg: 'HS256',
  })
)

app.get('/auth/page', (c) => {
  return c.text('You are authorized')
})
```

--------------------------------

### GET Request URL Property

Source: https://context7_llms

Retrieves the complete request URL string including protocol, host, path, and query parameters from the context object.

```APIDOC
## GET /url

### Description
Get the complete request URL string.

### Method
GET (context property)

### Endpoint
Context property: `c.req.url`

### Response
#### Success Response
- **url** (string) - The complete request URL

### Request Example
```ts
app.get('/about/me', async (c) => {
  const url = c.req.url // `http://localhost:8787/about/me`
  return c.json({ url })
})
```

### Response Example
```json
{
  "url": "http://localhost:8787/about/me"
}
```
```

--------------------------------

### Use matchedRoutes() to inspect all matching routes in Hono

Source: https://hono.dev/docs/helpers/route

This example explains the functionality of `matchedRoutes()`, which returns an array of all routes, including middleware, that matched the current request. It illustrates how both a wildcard middleware and a specific route handler are captured in the array, providing insight into the request's routing path.

```ts
app.all('/api/*', (c, next) => {
  console.log('API middleware')
  return next()
})

app.get('/api/users/:id', (c) => {
  const routes = matchedRoutes(c)
  // Returns: [
  //   { method: 'ALL', path: '/api/*', handler: [Function] },
  //   { method: 'GET', path: '/api/users/:id', handler: [Function] }
  // ]
  return c.json({ routes: routes.length })
})
```

--------------------------------

### Apply Basic Auth to Path Pattern - TypeScript

Source: https://hono.dev/docs/middleware/builtin/basic-auth

Apply Basic authentication middleware to a path pattern using app.use(). This example protects all routes matching '/auth/*' with static username and password credentials.

```typescript
const app = new Hono()

app.use(
  '/auth/*',
  basicAuth({
    username: 'hono',
    password: 'acoolproject',
  })
)

app.get('/auth/page', (c) => {
  return c.text('You are authorized')
})
```

--------------------------------

### Combining Hono JSX and HTML Middleware for Templating (TSX)

Source: https://context7_llms

This example illustrates how to effectively combine Hono's JSX rendering with its `html` middleware to create robust and reusable HTML templates. It defines a `Layout` component using the `html` template literal and a `Content` component using JSX, demonstrating how to pass data and render dynamic pages.

```tsx
import { Hono } from 'hono'
import { html } from 'hono/html'

const app = new Hono()

interface SiteData {
  title: string
  children?: any
}

const Layout = (props: SiteData) =>
  html`<!doctype html>
    <html>
      <head>
        <title>${props.title}</title>
      </head>
      <body>
        ${props.children}
      </body>
    </html>`

const Content = (props: { siteData: SiteData; name: string }) => (
  <Layout {...props.siteData}>
    <h1>Hello {props.name}</h1>
  </Layout>
)

app.get('/:name', (c) => {
  const { name } = c.req.param()
  const props = {
    name: name,
    siteData: {
      title: 'JSX with html sample',
    },
  }
  return c.html(<Content {...props} />)
})

export default app
```

--------------------------------

### Build project for deployment with npm, yarn, pnpm, bun

Source: https://context7_llms

Build commands for preparing Hono project for deployment across different package managers. Each command compiles the project into a production-ready format. Required before deploying to Azure Cloud or other platforms.

```shell
npm run build
```

```shell
yarn build
```

```shell
pnpm build
```

```shell
bun run build
```

--------------------------------

### Implement Nested Layouts with Hono JSX Renderer

Source: https://context7_llms

This example demonstrates how to create nested layouts using Hono's JSX Renderer middleware. It shows how a parent layout can wrap the `children` and how a child layout can further wrap its content within the parent `Layout` component, enabling modular and hierarchical UI structures.

```tsx
app.use(
  jsxRenderer(({ children }) => {
    return (
      <html>
        <body>{children}</body>
      </html>
    )
  })
)

const blog = new Hono()
blog.use(
  jsxRenderer(({ children, Layout }) => {
    return (
      <Layout>
        <nav>Blog Menu</nav>
        <div>{children}</div>
      </Layout>
    )
  })
)

app.route('/blog', blog)
```

--------------------------------

### GET /foo (Cloudflare Workers FetchEvent)

Source: https://hono.dev/docs/api/context

Shows how to access the Cloudflare Workers `FetchEvent` via `c.event` for compatibility with Service Worker syntax, though this method is not currently recommended.

```APIDOC
## GET /foo

### Description
This endpoint demonstrates accessing the Cloudflare Workers `FetchEvent` via `c.event`. This is primarily for compatibility with older Service Worker syntax, allowing operations like `waitUntil` to be performed on the event object. Note that this method is generally not recommended for new development.

### Method
GET

### Endpoint
/foo

### Parameters
#### Path Parameters
- N/A

#### Query Parameters
- N/A

#### Request Body
- N/A

### Request Example
```json
{}
```

### Response
#### Success Response (200)
- **body** (string) - The response body is not explicitly defined in the example, but the `waitUntil` operation will be initiated.

#### Response Example
```json
"OK"
```
```

--------------------------------

### Render HTML with template literals in Hono

Source: https://context7_llms

Create a Hono route that renders HTML using template literals. This example demonstrates dynamic content insertion with username parameter extraction from the request.

```typescript
const app = new Hono()

app.get('/:username', (c) => {
  const { username } = c.req.param()
  return c.html(
    html`<!doctype html>
      <h1>Hello! ${username}!</h1>`
  )
})
```

--------------------------------

### Secure Headers Middleware Import and Default Setup in Hono

Source: https://context7_llms

Imports and applies Secure Headers middleware with default optimal security settings. Automatically configures standard security headers without additional configuration.

```typescript
import { Hono } from 'hono'
import { secureHeaders } from 'hono/secure-headers'

const app = new Hono()
app.use(secureHeaders())
```

--------------------------------

### Render JSON Response in Hono (c.json)

Source: https://context7_llms

This example shows how to return a JSON object as a response using `c.json()`. The method automatically serializes the object to JSON and sets the `Content-Type` header to `application/json`.

```ts
import { Hono } from 'hono'
const app = new Hono()
app.get('/api', (c) => {
  return c.json({ message: 'Hello!' })
})
```

--------------------------------

### Access Request HTTP Method in Hono

Source: https://hono.dev/docs/api/request

Retrieves the HTTP method name of the incoming request (GET, POST, PUT, DELETE, etc.).

```typescript
app.get('/about/me', async (c) => {
  const method = c.req.method // `GET`
  // ...
})
```

--------------------------------

### Define Chained Routes with Hono

Source: https://context7_llms

Demonstrates how to define multiple HTTP methods (GET, POST, DELETE) for the same endpoint using method chaining on a Hono application instance. This allows for concise route definitions for a single path, improving readability and organization.

```ts
import { Hono } from 'hono'
const app = new Hono()
// ---cut---
app
  .get('/endpoint', (c) => {
    return c.text('GET /endpoint')
  })
  .post((c) => {
    return c.text('POST /endpoint')
  })
  .delete((c) => {
    return c.text('DELETE /endpoint')
  })
```

--------------------------------

### Deno: Using npm and JSR with Middleware

Source: https://context7_llms

This code demonstrates how to use Hono and third-party middleware from npm and JSR, emphasizing the importance of using the same registry for Hono and the middleware for correct TypeScript type inference.

```JSON
{
  "imports": {
    "hono": "npm:hono",
    "zod": "npm:zod",
    "@hono/zod-validator": "npm:@hono/zod-validator"
  }
}
```

```JSON
{
  "imports": {
    "hono": "jsr:@hono/hono",
    "zod": "npm:zod",
    "@hono/zod-validator": "jsr:@hono/zod-validator"
  }
}
```

--------------------------------

### Generate Unsigned Cookie String with generateCookie

Source: https://hono.dev/docs/helpers/cookie

This example shows how to use the `generateCookie` function to create a cookie string without directly setting it in the response headers. It demonstrates both basic cookie generation and generation with additional options like `path`, `secure`, `httpOnly`, and `domain`, returning a formatted cookie string.

```ts
// Basic cookie generation
const cookie = generateCookie('delicious_cookie', 'macha')
// Returns: 'delicious_cookie=macha; Path=/'

// Cookie with options
const cookie = generateCookie('delicious_cookie', 'macha', {
  path: '/',
  secure: true,
  httpOnly: true,
  domain: 'example.com'
})
```

--------------------------------

### GET / - Return HTML Response

Source: https://hono.dev/docs/api/context

Return an HTML response with Content-Type set to text/html using the c.html() method. This is the recommended way to return HTML content.

```APIDOC
## GET /

### Description
Return an HTML response with automatic Content-Type header.

### Method
GET

### Endpoint
/

### Code Example
```typescript
app.get('/', (c) => {
  return c.html('<h1>Hello! Hono!</h1>')
})
```

### Response
- **Content-Type** - text/html
- **Body** - HTML content

### Response Example
```
HTTP/1.1 200 OK
Content-Type: text/html

<h1>Hello! Hono!</h1>
```
```

--------------------------------

### GET /posts/:id - routePath() Function

Source: https://hono.dev/docs/helpers/route

Returns the route path pattern registered for the current handler. This is useful for logging and debugging route information.

```APIDOC
## GET /posts/:id

### Description
Returns the route path pattern registered for the current handler. Useful for logging and debugging to understand which route pattern matched the request.

### Method
GET

### Endpoint
/posts/:id

### Function: routePath()

### Handler Implementation
```typescript
app.get('/posts/:id', (c) => {
  console.log(routePath(c)) // '/posts/:id'
  return c.text('Post details')
})
```

### Response
#### Success Response (200)
- **body** (string) - Plain text response

#### Response Example
```
Post details
```

### Console Output
```
/posts/:id
```
```

--------------------------------

### Initialize Cloudflare Zaraz Analytics and Performance Tracking (JavaScript)

Source: https://hono.dev/docs/helpers/ssg

This extensive JavaScript snippet initializes the Cloudflare Zaraz tracking service. It collects a wide range of client-side data, including screen dimensions, URL, referrer, color depth, and timezone offset. It also sets up methods for tracking events, setting variables, and debugging, and dynamically injects the main Zaraz script for further processing. The script includes error handling and ensures proper execution timing.

```javascript
try{(function(w,d){!function(bH,bI,bJ,bK){if(bH.zaraz)console.error("zaraz is loaded twice");else{bH[bJ]=bH[bJ]||{};bH[bJ].executed=[];bH.zaraz={deferred:[],listeners:[]};bH.zaraz._v="5876";bH.zaraz._n="51ddae6d-b108-456e-9aee-b927aad3a953";bH.zaraz.q=[];bH.zaraz._f=function(bL){return async function(){var bM=Array.prototype.slice.call(arguments);bH.zaraz.q.push({m:bL,a:bM})}};for(const bN of["track","set","debug"])bH.zaraz[bN]=bH.zaraz._f(bN);bH.zaraz.init=()=>{var bO=bI.getElementsByTagName(bK)[0],bP=bI.createElement(bK),bQ=bI.getElementsByTagName("title")[0];bQ&&(bH[bJ].t=bI.getElementsByTagName("title")[0].text);bH[bJ].x=Math.random();bH[bJ].w=bH.screen.width;bH[bJ].h=bH.screen.height;bH[bJ].j=bH.innerHeight;bH[bJ].e=bH.innerWidth;bH[bJ].l=bH.location.href;bH[bJ].r=bI.referrer;bH[bJ].k=bH.screen.colorDepth;bH[bJ].n=bI.characterSet;bH[bJ].o=(new Date).getTimezoneOffset();if(bH.dataLayer)for(const bR of Object.entries(Object.entries(dataLayer).reduce((bS,bT)=>({...bS[1],...bT[1]}),{})))zaraz.set(bR[0],bR[1],{scope:"page"});bH[bJ].q=[];for(;bH.zaraz.q.length;){const bU=bH.zaraz.q.shift();bH[bJ].q.push(bU)}bP.defer=!0;for(const bV of[localStorage,sessionStorage])Object.keys(bV||{}).filter(bX=>bX.startsWith("_zaraz_")).forEach(bW=>{try{bH[bJ]["z_"+bW.slice(7)]=JSON.parse(bV.getItem(bW))}catch{bH[bJ]["z_"+bW.slice(7)]=bV.getItem(bW)}});bP.referrerPolicy="origin";bP.src="/cdn-cgi/zaraz/s.js?z="+btoa(encodeURIComponent(JSON.stringify(bH[bJ])));bO.parentNode.insertBefore(bP,bO)};["complete","interactive"].includes(bI.readyState)?zaraz.init():bH.addEventListener("DOMContentLoaded",zaraz.init)}}(w,d,"zarazData","script");window.zaraz._p=async bc=>new Promise(bd=>{if(bc){bc.e&&bc.e.forEach(be=>{try{const bf=d.querySelector("script[nonce]"),bg=bf?.nonce||bf?.getAttribute("nonce"),bh=d.createElement("script");bg&&(bh.nonce=bg);bh.innerHTML=be;bh.onload=()=>{d.head.removeChild(bh)};d.head.appendChild(bh)}catch(bi){console.error(`Error executing script: ${be}\n`,bi)}});Promise.allSettled((bc.f||[]).map(bj=>fetch(bj[0],bj[1])))}bd()});zaraz._p({"e":["(function(w,d){})(window,document)"]});})(window,document)}catch(e){throw fetch("/cdn-cgi/zaraz/t"),e;};
```

--------------------------------

### GET Optional Path Parameter

Source: https://context7_llms

Defines optional path parameters that match routes with or without the parameter. The route will match both with and without the specified parameter.

```APIDOC
## GET /api/animal/:type?

### Description
Retrieve optional path parameters from the request URL.

### Method
GET

### Endpoint
`/api/animal/:type?`

### Parameters
#### Path Parameters
- **type** (string) - Optional - The animal type parameter

### Request Example
```ts
app.get('/api/animal/:type?', (c) => {
  const type = c.req.param('type')
  return c.text('Animal!')
})
```

### Matching Behavior
- Matches `/api/animal` (without parameter)
- Matches `/api/animal/dog` (with parameter)
- Matches `/api/animal/cat` (with parameter)

### Response Example
```
Animal!
```
```

--------------------------------

### Theme Appearance Toggle - JavaScript

Source: https://hono.dev/docs/helpers/adapter

Initializes theme appearance based on localStorage preference or system color scheme preference. Detects dark mode preference and applies 'dark' class to document root. Also detects Mac platform and applies 'mac' class accordingly.

```javascript
const e=localStorage.getItem("vitepress-theme-appearance")||"auto",a=window.matchMedia("(prefers-color-scheme: dark)").matches;(!e||e==="auto"?a:e==="dark")&&document.documentElement.classList.add("dark");
document.documentElement.classList.toggle("mac",/Mac|iPhone|iPod|iPad/i.test(navigator.platform));
```

--------------------------------

### Import Hono Method Override Middleware

Source: https://context7_llms

This snippet provides the necessary import statements for utilizing the `methodOverride` middleware in a Hono application. It imports `Hono` for application setup and `methodOverride` from its respective module.

```ts
import { Hono } from 'hono'
import { methodOverride } from 'hono/method-override'
```

--------------------------------

### Implement Complex Access Control with Hono Combine Middleware

Source: https://context7_llms

This example demonstrates how to use `some` and `every` from `hono/combine` along with `ipRestriction`, `bearerAuth`, and `rateLimit` to create sophisticated access control rules in a Hono application. It allows access if a specific IP is used *and* a valid bearer token is present, or if a rate limit is applied as a fallback.

```ts
import { Hono } from 'hono'
import { bearerAuth } from 'hono/bearer-auth'
import { getConnInfo } from 'hono/cloudflare-workers'
import { every, some } from 'hono/combine'
import { ipRestriction } from 'hono/ip-restriction'
import { rateLimit } from '@/my-rate-limit'

const app = new Hono()

app.use(
  '*',
  some(
    every(
      ipRestriction(getConnInfo, { allowList: ['192.168.0.2'] }),
      bearerAuth({ token })
    ),
    // If both conditions are met, rateLimit will not execute.
    rateLimit()
  )
)

app.get('/', (c) => c.text('Hello Hono!'))
```

--------------------------------

### Safely Retrieving Hono Context with tryGetContext (TypeScript)

Source: https://hono.dev/docs/middleware/builtin/context-storage

This example illustrates the use of `tryGetContext()` which attempts to retrieve the Hono `Context` but returns `undefined` if the context is not available, instead of throwing an error. This allows for safer, conditional access to context variables.

```ts
const context = tryGetContext<Env>()
if (context) {
      // Context is available
      console.log(context.var.message)
    }
```

--------------------------------

### GET / - Set Response Headers

Source: https://hono.dev/docs/api/context

Set custom HTTP response headers using the c.header() method. Headers can be set before returning the response body.

```APIDOC
## GET /

### Description
Return a text response with custom HTTP headers.

### Method
GET

### Endpoint
/

### Code Example
```typescript
app.get('/', (c) => {
  // Set headers
  c.header('X-Message', 'My custom message')
  return c.text('HellO!')
})
```

### Response Headers
- **X-Message** (string) - Custom message header
- **Content-Type** (string) - text/plain

### Response Example
```
HTTP/1.1 200 OK
X-Message: My custom message
Content-Type: text/plain

HellO!
```
```

--------------------------------

### Basic HTML template with variable interpolation

Source: https://hono.dev/docs/helpers/html

Create a basic HTML response using the html template literal tag with variable interpolation. The example demonstrates rendering an HTML document with dynamic username parameter from the request.

```typescript
const app = new Hono()

app.get('/:username', (c) => {
  const { username } = c.req.param()
  return c.html(
    html`<!doctype html>
      <h1>Hello! ${username}!</h1>`
  )
})
```

--------------------------------

### Configure JWT Secret Dynamically from Environment Variables

Source: https://hono.dev/docs/middleware/builtin/jwt

This example demonstrates how to dynamically provide the JWT secret to the middleware, for instance, by retrieving it from environment variables (`c.env.JWT_SECRET`). This approach enhances security and flexibility by keeping sensitive information out of the codebase.

```js
app.use('/auth/*', (c, next) => {
  const jwtMiddleware = jwt({
    secret: c.env.JWT_SECRET,
    alg: 'HS256',
  })
  return jwtMiddleware(c, next)
})
```

--------------------------------

### Create a Basic Hono 'Hello World' Endpoint for Next.js App Router

Source: https://context7_llms

This TypeScript code defines a simple Hono application that responds with a JSON message on the `/api/hello` path. It integrates with Next.js App Router by exporting `GET` and `POST` handlers using `hono/vercel`, allowing Hono to serve API routes.

```ts
import { Hono } from 'hono'
import { handle } from 'hono/vercel'

const app = new Hono().basePath('/api')

app.get('/hello', (c) => {
  return c.json({
    message: 'Hello Next.js!',
  })
})

export const GET = handle(app)
export const POST = handle(app)
```

--------------------------------

### Group Hono Routes with `app.route()`

Source: https://context7_llms

Illustrates how to organize routes by creating a separate Hono instance for a specific group (e.g., 'book') and then attaching it to the main application using `app.route('/prefix', groupInstance)`. This helps in modularizing route definitions and applying a common prefix to a set of related routes.

```ts
import { Hono } from 'hono'
// ---cut---
const book = new Hono()

book.get('/', (c) => c.text('List Books')) // GET /book
book.get('/:id', (c) => {
  // GET /book/:id
  const id = c.req.param('id')
  return c.text('Get Book: ' + id)
})
book.post('/', (c) => c.text('Create Book')) // POST /book

const app = new Hono()
app.route('/book', book)
```

--------------------------------

### Hono: Handle File Found Event

Source: https://context7_llms

This code demonstrates how to handle the event when a requested file is found using the `onFound` option in Hono's `serveStatic` middleware. It allows for actions like setting cache headers. The provided example sets a cache-control header.

```TypeScript
app.get(
  '/static/*',
  serveStatic({
    // ...
    onFound: (_path, c) => {
      c.header('Cache-Control', `public, immutable, max-age=31536000`)
    },
  })
)
```

--------------------------------

### Create Interactive Counter Component with hono/jsx

Source: https://context7_llms

Builds a client-side interactive counter component using hono/jsx/dom with React-like syntax. This example demonstrates state management with useState hook and event handling, resulting in a lightweight 2.8KB component (with Brotli compression) compared to React's 47.8KB, showcasing the efficiency of hono/jsx for client-side interactivity.

```typescript
import { useState } from 'hono/jsx'
import { render } from 'hono/jsx/dom'

function Counter() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}

function App() {
  return (
    <html>
      <body>
        <Counter />
      </body>
    </html>
  )
}

const root = document.getElementById('root')
render(<App />, root)
```

--------------------------------

### GET /page/favorites (ContextRenderer - Specific Page)

Source: https://context7_llms

Renders a specific "favorites" page using the extended `ContextRenderer`. This endpoint showcases passing a specific title and content to the renderer.

```APIDOC
## GET /page/favorites

### Description
Renders a specific "favorites" page using the extended `ContextRenderer`. This endpoint showcases passing a specific title and content to the renderer.

### Method
GET

### Endpoint
/page/favorites

### Parameters
#### Path Parameters
- None

#### Query Parameters
- None

#### Request Body
- None

### Request Example
N/A (GET request)

### Response
#### Success Response (200)
- **HTML Content** (string) - The rendered HTML content of the favorites page.

#### Response Example
```html
<html>
  <head>
    <title>My favorites</title>
  </head>
  <body>
    <header>Menu</header>
    <div>
      <ul>
        <li>Eating sushi</li>
        <li>Watching baseball games</li>
      </ul>
    </div>
  </body>
</html>
```
```

--------------------------------

### Define Hono Supabase Edge Function 'hello-world'

Source: https://context7_llms

Defines a Hono application for the 'hello-world' Supabase Edge Function. It sets up a GET endpoint '/hello' that responds with 'Hello from hono-server!' and uses Deno.serve to handle incoming requests, making it compatible with Deno-based Supabase functions.

```ts
import { Hono } from 'jsr:@hono/hono'

// change this to your function name
const functionName = 'hello-world'
const app = new Hono().basePath(`/${functionName}`)

app.get('/hello', (c) => c.text('Hello from hono-server!'))

Deno.serve(app.fetch)
```

--------------------------------

### GET /say - Return Text Response

Source: https://hono.dev/docs/api/context

Return a text response with Content-Type set to text/plain using the c.text() method. This is the recommended way to return plain text responses.

```APIDOC
## GET /say

### Description
Return a plain text response with automatic Content-Type header.

### Method
GET

### Endpoint
/say

### Code Example
```typescript
app.get('/say', (c) => {
  return c.text('Hello!')
})
```

### Response
- **Content-Type** - text/plain
- **Body** - Hello!

### Response Example
```
HTTP/1.1 200 OK
Content-Type: text/plain

Hello!
```
```

--------------------------------

### queries() - Get Multiple Query Parameter Values

Source: https://hono.dev/docs/api/request

Retrieves multiple values for the same query parameter name, such as when using array-style query strings like ?tags=A&tags=B.

```APIDOC
## queries()

### Description
Get multiple querystring parameter values for the same parameter name.

### Method
GET

### Usage
```typescript
app.get('/search', async (c) => {
  // For URL: /search?tags=A&tags=B
  const tags = c.req.queries('tags')
  // tags will be ['A', 'B']
})
```

### Parameters
- **paramName** (string) - Required - Name of the query parameter to retrieve multiple values for

### Returns
- (string[]) - Array of all values for the specified query parameter
```

--------------------------------

### GET Route Path (Deprecated)

Source: https://context7_llms

Retrieves the registered path pattern within the handler. Deprecated in v4.8.0 - use routePath() from Route Helper instead.

```APIDOC
## GET /posts/:id

### Description
Retrieve the registered route path pattern (deprecated in v4.8.0).

### Method
GET

### Endpoint
`/posts/:id`

### Deprecation Notice
**Deprecated in v4.8.0**: Use `routePath()` from Route Helper instead.

### Request Example
```ts
app.get('/posts/:id', (c) => {
  return c.json({ path: c.req.routePath })
})
```

### Response
#### Success Response (200)
- **path** (string) - The registered route path pattern

### Response Example
When accessing `/posts/123`:
```json
{
  "path": "/posts/:id"
}
```

### Notes
- Returns the route pattern, not the actual request path
- Useful for debugging route matching
- Deprecated - use Route Helper's routePath() method instead
```

--------------------------------

### Hono Application with Method Override and HTML Form

Source: https://context7_llms

This combined example shows a Hono application configured with the `methodOverride` middleware and a corresponding `app.delete` route. It illustrates how an HTML form using the `_method` hidden input can effectively trigger a DELETE handler in the Hono application.

```ts
import { methodOverride } from 'hono/method-override'

const app = new Hono()
app.use('/posts', methodOverride({ app }))

app.delete('/posts', () => {
  // ...
})
```

--------------------------------

### GET /stream - Basic Streaming Response

Source: https://context7_llms

Returns a simple streaming response using the stream() helper. Allows writing binary data, piping readable streams, and handling abort events.

```APIDOC
## GET /stream

### Description
Provides a basic streaming response endpoint that returns data as a stream. Supports writing Uint8Array data, piping readable streams, and handling client abort events.

### Method
GET

### Endpoint
/stream

### Response Headers
- **Content-Type**: application/octet-stream (default)
- **Transfer-Encoding**: chunked

### Implementation

```ts
import { Hono } from 'hono'
import { stream } from 'hono/streaming'

const app = new Hono()

app.get('/stream', (c) => {
  return stream(c, async (stream) => {
    // Write a process to be executed when aborted.
    stream.onAbort(() => {
      console.log('Aborted!')
    })
    // Write a Uint8Array.
    await stream.write(new Uint8Array([0x48, 0x65, 0x6c, 0x6c, 0x6f]))
    // Pipe a readable stream.
    await stream.pipe(anotherReadableStream)
  })
})
```

### Stream Methods

#### stream.onAbort(callback)
- **Description**: Registers a callback to execute when the client aborts the connection
- **Parameters**: callback - Function to execute on abort
- **Use Case**: Cleanup operations when streaming is interrupted

#### stream.write(data)
- **Description**: Writes binary data to the stream
- **Parameters**: data (Uint8Array) - Binary data to write
- **Returns**: Promise<void>
- **Use Case**: Send raw binary data to client

#### stream.pipe(readableStream)
- **Description**: Pipes a readable stream to the response
- **Parameters**: readableStream - Node.js readable stream
- **Returns**: Promise<void>
- **Use Case**: Stream file contents or other readable sources

### Response Example
Binary stream data (Hello followed by piped stream content)

### Use Cases
- Large file downloads
- Real-time data streaming
- Binary data transmission
- Piping file contents
```

--------------------------------

### Use Type-Safe Custom Renderer with Arguments in Hono.js (TypeScript)

Source: https://hono.dev/docs/api/context

This comprehensive example demonstrates setting up a custom renderer that accepts additional arguments (like `head.title`) and then using `c.render()` with those arguments in multiple route handlers. It showcases how to create dynamic, type-safe layouts.

```ts
app.use('/pages/*', async (c, next) => {
  c.setRenderer((content, head) => {
    return c.html(
      <html>
        <head>
          <title>{head.title}</title>
        </head>
        <body>
          <header>{head.title}</header>
          <p>{content}</p>
        </body>
      </html>
    )
  })
  await next()
})

app.get('/pages/my-favorite', (c) => {
  return c.render(<p>Ramen and Sushi</p>, {
    title: 'My favorite'
  })
})

app.get('/pages/my-hobbies', (c) => {
  return c.render(<p>Watching baseball</p>, {
    title: 'My hobbies'
  })
})
```

--------------------------------

### GET /api - Return JSON Response

Source: https://hono.dev/docs/api/context

Return a JSON response with Content-Type set to application/json using the c.json() method. This is the recommended way to return JSON data.

```APIDOC
## GET /api

### Description
Return a JSON response with automatic Content-Type header.

### Method
GET

### Endpoint
/api

### Code Example
```typescript
app.get('/api', (c) => {
  return c.json({ message: 'Hello!' })
})
```

### Response
- **Content-Type** - application/json
- **message** (string) - Response message

### Response Example
```json
{
  "message": "Hello!"
}
```
```

--------------------------------

### Apply Hono Cache Middleware for Cloudflare Workers and Deno

Source: https://context7_llms

These examples demonstrate how to apply the Hono Cache middleware to routes for different environments. For Cloudflare Workers, a basic configuration with `cacheName` and `cacheControl` is sufficient. For Deno, the `wait: true` option is required to ensure proper caching behavior.

```ts
app.get(
  '*',
  cache({
    cacheName: 'my-app',
    cacheControl: 'max-age=3600'
  })
)
```

```ts
// Must use `wait: true` for the Deno runtime
app.get(
  '*',
  cache({
    cacheName: 'my-app',
    cacheControl: 'max-age=3600',
    wait: true
  })
)
```

--------------------------------

### GET Request Path Property

Source: https://context7_llms

Retrieves the request pathname from the context object. Returns the path portion of the URL without query parameters or protocol information.

```APIDOC
## GET /path

### Description
Get the request pathname from the context.

### Method
GET (context property)

### Endpoint
Context property: `c.req.path`

### Response
#### Success Response
- **path** (string) - The request pathname

### Request Example
```ts
app.get('/about/me', async (c) => {
  const pathname = c.req.path // `/about/me`
  return c.json({ pathname })
})
```

### Response Example
```json
{
  "pathname": "/about/me"
}
```
```

--------------------------------

### POST /posts - Get Validated Data

Source: https://hono.dev/docs/api/request

Retrieves validated data from the request. Supports validation targets including form, json, query, header, cookie, and param.

```APIDOC
## POST /posts

### Description
Gets validated data from the request using the specified validation target.

### Method
POST

### Endpoint
/posts

### Parameters
#### Validation Targets
- **form** (string) - Validate form data
- **json** (string) - Validate JSON body
- **query** (string) - Validate query parameters
- **header** (string) - Validate headers
- **cookie** (string) - Validate cookies
- **param** (string) - Validate path parameters

### Request Example
```typescript
app.post('/posts', async (c) => {
  const { title, body } = c.req.valid('form')
  // title and body contain validated form data
})
```

### Response
#### Success Response (200)
- **data** (object) - Validated data object with requested fields

### Notes
- Use `c.req.valid(target)` to retrieve validated data
- Available targets: form, json, query, header, cookie, param
- See Validation section for detailed usage examples
```

--------------------------------

### Configure Permission-Policy header in Hono applications

Source: https://hono.dev/docs/middleware/builtin/secure-headers

This example demonstrates how to set various directives for the `Permission-Policy` header using Hono's `secureHeaders` middleware. It showcases different configurations for features like `fullscreen`, `bluetooth`, `payment`, and `camera`, allowing control over which browser APIs and features are permitted for the current origin or specific domains.

```ts
const app = new Hono()
app.use(
  '*',
  secureHeaders({
    permissionsPolicy: {
      fullscreen: ['self'], // fullscreen=(self)
      bluetooth: ['none'], // bluetooth=(none)
      payment: ['self', 'https://example.com'], // payment=(self "https://example.com")
      syncXhr: [], // sync-xhr=()
      camera: false, // camera=none
      microphone: true, // microphone=*
      geolocation: ['*'], // geolocation=*
      usb: ['self', 'https://a.example.com', 'https://b.example.com'], // usb=(self "https://a.example.com" "https://b.example.com")
      accelerometer: ['https://*.example.com'], // accelerometer=("https://*.example.com")
      gyroscope: ['src'], // gyroscope=(src)
      magnetometer: [
        'https://a.example.com',
        'https://b.example.com',
      ], // magnetometer=("https://a.example.com" "https://b.example.com")
    },
  })
)
```

--------------------------------

### Initialize Cloudflare Zaraz Analytics and Script Loader in JavaScript

Source: https://hono.dev/docs/middleware/builtin/cache

This minified JavaScript code block initializes the Cloudflare Zaraz tracking and analytics system. It collects various client-side data and loads the main Zaraz script, including mechanisms for executing inline scripts and fetching resources. It also toggles a 'mac' class based on the user's platform.

```javascript
document.documentElement.classList.toggle("mac",/Mac|iPhone|iPod|iPad/i.test(navigator.platform)); try{(function(w,d){!function(bH,bI,bJ,bK){if(bH.zaraz)console.error("zaraz is loaded twice");else{bH[bJ]=bH[bJ]||{};bH[bJ].executed=[];bH.zaraz={deferred:[],listeners:[]};bH.zaraz._v="5876";bH.zaraz._n="72c7c3b2-123e-4c11-997a-907e613fc330";bH.zaraz.q=[];bH.zaraz._f=function(bL){return async function(){var bM=Array.prototype.slice.call(arguments);bH.zaraz.q.push({m:bL,a:bM})}};for(const bN of["track","set","debug"])bH.zaraz[bN]=bH.zaraz._f(bN);bH.zaraz.init=()=>{var bO=bI.getElementsByTagName(bK)[0],bP=bI.createElement(bK),bQ=bI.getElementsByTagName("title")[0];bQ&&(bH[bJ].t=bI.getElementsByTagName("title")[0].text);bH[bJ].x=Math.random();bH[bJ].w=bH.screen.width;bH[bJ].h=bH.screen.height;bH[bJ].j=bH.innerHeight;bH[bJ].e=bH.innerWidth;bH[bJ].l=bH.location.href;bH[bJ].r=bI.referrer;bH[bJ].k=bH.screen.colorDepth;bH[bJ].n=bI.characterSet;bH[bJ].o=(new Date).getTimezoneOffset();if(bH.dataLayer)for(const bR of Object.entries(Object.entries(dataLayer).reduce((bS,bT)=>({...bS[1],...bT[1]}),{})))zaraz.set(bR[0],bR[1],{scope:"page"});bH[bJ].q=[];for(;bH.zaraz.q.length;){const bU=bH.zaraz.q.shift();bH[bJ].q.push(bU)}bP.defer=!0;for(const bV of[localStorage,sessionStorage])Object.keys(bV||{}).filter(bX=>bX.startsWith("_zaraz_")).forEach(bW=>{try{bH[bJ]["z_"+bW.slice(7)]=JSON.parse(bV.getItem(bW))}catch{bH[bJ]["z_"+bW.slice(7)]=bV.getItem(bW)}});bP.referrerPolicy="origin";bP.src="/cdn-cgi/zaraz/s.js?z="+btoa(encodeURIComponent(JSON.stringify(bH[bJ])));bO.parentNode.insertBefore(bP,bO)};["complete","interactive"].includes(bI.readyState)?zaraz.init():bH.addEventListener("DOMContentLoaded",zaraz.init)}}(w,d,"zarazData","script");window.zaraz._p=async bc=>new Promise(bd=>{if(bc){bc.e&&bc.e.forEach(be=>{try{const bf=d.querySelector("script[nonce]"),bg=bf?.nonce||bf?.getAttribute("nonce"),bh=d.createElement("script");bg&&(bh.nonce=bg);bh.innerHTML=be;bh.onload=()=>{d.head.removeChild(bh)};d.head.appendChild(bh)}catch(bi){console.error(`Error executing script: ${be}\n`,bi)}});Promise.allSettled((bc.f||[]).map(bj=>fetch(bj[0],bj[1])))}bd()});zaraz._p({"e":["(function(w,d){})(window,document)"]});})(window,document)}catch(e){throw fetch("/cdn-cgi/zaraz/t"),e;};
```

--------------------------------

### GET Matched Routes (Deprecated)

Source: https://context7_llms

Returns matched routes within the handler for debugging purposes. Deprecated in v4.8.0 - use matchedRoutes() from Route Helper instead.

```APIDOC
## GET Matched Routes

### Description
Retrieve matched routes within the handler for debugging (deprecated in v4.8.0).

### Method
GET (context property)

### Endpoint
Context property: `c.req.matchedRoutes`

### Deprecation Notice
**Deprecated in v4.8.0**: Use `matchedRoutes()` from Route Helper instead.

### Request Example
```ts
app.use(async function logger(c, next) {
  await next()
  c.req.matchedRoutes.forEach(({ handler, method, path }, i) => {
    const name =
      handler.name ||
      (handler.length < 2 ? '[handler]' : '[middleware]')
    console.log(
      method,
      ' ',
      path,
      ' '.repeat(Math.max(10 - path.length, 0)),
      name,
      i === c.req.routeIndex ? '<- respond from here' : ''
    )
  })
})
```

### Response
#### Success Response
- **matchedRoutes** (array) - Array of matched route objects
  - **handler** (function) - The route handler function
  - **method** (string) - HTTP method
  - **path** (string) - Route path pattern

### Notes
- Useful for debugging route matching
- Deprecated - use Route Helper's matchedRoutes() method instead
- Returns all routes that matched the request
```

--------------------------------

### Retrieve All Matched Routes Including Middleware in Hono

Source: https://context7_llms

This example showcases the `matchedRoutes()` function, which returns an array of all routes that matched the current request, including any middleware. The output provides details like the HTTP method, path pattern, and handler function for each matched route, useful for understanding the request's processing flow.

```ts
app.all('/api/*', (c, next) => {
  console.log('API middleware')
  return next()
})

app.get('/api/users/:id', (c) => {
  const routes = matchedRoutes(c)
  // Returns:
  //   [
  //     { method: 'ALL', path: '/api/*', handler: [Function] },
  //     { method: 'GET', path: '/api/users/:id', handler: [Function] }
  //   ]
  return c.json({ routes: routes.length })
})
```

--------------------------------

### Create Hello World Hono Handler for AWS Lambda

Source: https://hono.dev/docs/getting-started/aws-lambda

Implements a basic Hono application with a single GET route that returns 'Hello Hono!' text response. Uses the AWS Lambda handler adapter from Hono to convert the app into a Lambda-compatible handler function.

```typescript
import { Hono } from 'hono'
import { handle } from 'hono/aws-lambda'

const app = new Hono()

app.get('/', (c) => c.text('Hello Hono!'))

export const handler = handle(app)
```

--------------------------------

### GET Path Parameter with Slashes

Source: https://context7_llms

Defines path parameters that can include slashes and special characters using regex patterns. Useful for file paths and complex identifiers.

```APIDOC
## GET /posts/:filename

### Description
Retrieve path parameters that include slashes and file extensions.

### Method
GET

### Endpoint
`/posts/:filename{.+\\.png}`

### Parameters
#### Path Parameters
- **filename** (string) - Required - File path with .png extension

### Request Example
```ts
app.get('/posts/:filename{.+\\.png}', async (c) => {
  const filename = c.req.param('filename')
  return c.json({ filename })
})
```

### Matching Behavior
- Matches `/posts/images/photo.png`
- Matches `/posts/path/to/image.png`
- Does not match `/posts/image.jpg` (wrong extension)

### Response Example
```json
{
  "filename": "images/photo.png"
}
```
```

--------------------------------

### GET Raw Request Object

Source: https://context7_llms

Accesses the raw Request object from the Web API. Useful for accessing platform-specific properties like Cloudflare Workers metadata.

```APIDOC
## GET /raw

### Description
Get the raw Request object from the context.

### Method
GET (context property)

### Endpoint
Context property: `c.req.raw`

### Response
#### Success Response
- **raw** (Request) - The raw Web API Request object

### Request Example
```ts
app.post('/', async (c) => {
  const metadata = c.req.raw.cf?.hostMetadata
  return c.json({ metadata })
})
```

### Notes
- Returns the standard Web API Request object
- Supports platform-specific properties (e.g., `cf` for Cloudflare Workers)
```

--------------------------------

### GET * - Cache Middleware

Source: https://context7_llms

Implements response caching using Web Standards Cache API. Supports Cloudflare Workers and Deno environments with configurable cache names, control headers, and key generation strategies.

```APIDOC
## GET * - Cache Middleware

### Description
Implements HTTP response caching using the Web Standards Cache API. Supports Cloudflare Workers with custom domains and Deno 1.26+ environments.

### Method
GET

### Endpoint
*

### Import
```ts
import { Hono } from 'hono'
import { cache } from 'hono/cache'
```

### Configuration Examples

#### Cloudflare Workers
```ts
app.get(
  '*',
  cache({
    cacheName: 'my-app',
    cacheControl: 'max-age=3600'
  })
)
```

#### Deno
```ts
app.get(
  '*',
  cache({
    cacheName: 'my-app',
    cacheControl: 'max-age=3600',
    wait: true
  })
)
```

### Options

#### Required Parameters
- **cacheName** (string | (c: Context) => string | Promise<string>) - Required - The name of the cache store for multiple cache identifiers

#### Optional Parameters
- **wait** (boolean) - Optional - Wait for cache.put Promise to resolve before continuing. Required for Deno. Default: false
- **cacheControl** (string) - Optional - Cache-Control header directives. No header added if not provided
- **vary** (string | string[]) - Optional - Sets Vary header in response. Merges with existing values, removing duplicates
- **keyGenerator** ((c: Context) => string | Promise<string>) - Optional - Generates cache keys per request. Default: c.req.url
- **cacheableStatusCodes** (number[]) - Optional - Array of status codes to cache. Default: [200]

### Advanced Configuration Example
```ts
app.get(
  '*',
  cache({
    cacheName: 'my-app',
    cacheControl: 'max-age=3600',
    cacheableStatusCodes: [200, 404, 412],
    keyGenerator: (c) => c.req.url,
    vary: 'Accept-Encoding'
  })
)
```

### Platform Support
- **Cloudflare Workers**: Respects Cache-Control header, returns cached responses
- **Deno**: Does not respect headers, requires custom cache update mechanism
- **Deno Deploy**: Fully supported
```

--------------------------------

### Rewrite Request Path with serveStatic

Source: https://hono.dev/docs/getting-started/nodejs

Use the rewriteRequestPath option to map incoming request paths to different file system paths. This example maps requests to /static/* to files in the ./statics directory by replacing the /static prefix with /statics.

```typescript
app.get(
  '/static/*',
  serveStatic({
    root: './',
    rewriteRequestPath: (path) =>
      path.replace(/^\/static/, '/statics'),
  })
)
```

--------------------------------

### GET / - JSX with Inline Scripts

Source: https://context7_llms

Renders an HTML page using JSX syntax with embedded inline scripts. Demonstrates how to insert unescaped script content within JSX components using the html template literal.

```APIDOC
## GET /

### Description
Renders an HTML page with JSX syntax including inline script tags that are not escaped.

### Method
GET

### Endpoint
/

### Response
#### Success Response (200)
- **Content-Type** (string) - text/html
- **Body** (HTML) - Complete HTML document with head and body sections

#### Response Example
```html
<html>
  <head>
    <title>Test Site</title>
    <script>
      // No need to use dangerouslySetInnerHTML.
      // If you write it here, it will not be escaped.
    </script>
  </head>
  <body>Hello!</body>
</html>
```

### Implementation
```typescript
app.get('/', (c) => {
  return c.html(
    <html>
      <head>
        <title>Test Site</title>
        {html`
          <script>
            // No need to use dangerouslySetInnerHTML.
            // If you write it here, it will not be escaped.
          </script>
        `}
      </head>
      <body>Hello!</body>
    </html>
  )
})
```
```

--------------------------------

### GET /posts/:id - Basic Route Information

Source: https://hono.dev/docs/helpers/route

Retrieve basic route information including the current path pattern and all matched routes. This endpoint demonstrates how to access route details within a handler.

```APIDOC
## GET /posts/:id

### Description
Retrieve basic route information including the current path pattern and array of matched routes for the request.

### Method
GET

### Endpoint
/posts/:id

### Parameters
#### Path Parameters
- **id** (string) - Required - The post identifier

### Handler Implementation
```typescript
const app = new Hono()

app.get('/posts/:id', (c) => {
  const currentPath = routePath(c) // '/posts/:id'
  const routes = matchedRoutes(c) // Array of matched routes

  return c.json({
    path: currentPath,
    totalRoutes: routes.length,
  })
})
```

### Response
#### Success Response (200)
- **path** (string) - The route path pattern
- **totalRoutes** (number) - Total number of matched routes

#### Response Example
```json
{
  "path": "/posts/:id",
  "totalRoutes": 1
}
```
```

--------------------------------

### PatternRouter Bundle Size Deployment

Source: https://context7_llms

Shows deployment output for a Hono application using only PatternRouter, achieving minimal bundle size under 15KB. This demonstrates PatternRouter's suitability for resource-constrained environments like Cloudflare Workers with strict size limitations.

```console
$ npx wrangler deploy --minify ./src/index.ts
 ⛅️ wrangler 3.20.0
-------------------
Total Upload: 14.68 KiB / gzip: 5.38 KiB
```

--------------------------------

### Filter by Status Code Plugin

Source: https://hono.dev/docs/helpers/ssg

Example plugin that implements AfterResponseHook to filter responses based on HTTP status codes, only generating files for successful (200) or error (500) responses.

```APIDOC
## Status Code Filter Plugin

### Description
Filters the toSSG process to only generate static files for responses with specific HTTP status codes (200 or 500).

### Implementation
```typescript
const statusFilterPlugin: SSGPlugin = {
  afterResponseHook: (res) => {
    if (res.status === 200 || res.status === 500) {
      return res
    }
    return false
  },
}
```

### Hook Used
- **afterResponseHook**: Examines each response after it is received

### Logic
1. Check if the response status is 200 (OK) or 500 (Internal Server Error)
2. If true, return the response object to continue file generation
3. If false, return `false` to skip file generation for this response

### Use Cases
- Generate files only for successful responses
- Include error pages (500) in static generation
- Skip redirect (3xx), client error (4xx), and other status codes
- Optimize storage by excluding unwanted response types
```

--------------------------------

### GET /static/* (with rewrite)

Source: https://hono.dev/docs/getting-started/nodejs

Configure Hono to serve static files while dynamically rewriting the request path before looking up the file. This allows mapping a public URL path (e.g., `/static`) to a different internal file system path (e.g., `/statics`).

```APIDOC
## GET /static/* (with rewrite)

### Description
Demonstrates how to serve static files while dynamically rewriting the request path before the file lookup occurs. This is useful for mapping a public URL path (e.g., `/static`) to a different internal file system path (e.g., `/statics`).

### Method
GET

### Endpoint
/static/*

### Parameters
#### Request Body (serveStatic options)
- **root** (string) - Required - The base directory from which to serve static files.
- **rewriteRequestPath** (function) - Required - A function that takes the request path as input and returns the rewritten path used for file lookup.

### Request Example
```typescript
import { serveStatic } from '@hono/node-server/serve-static'

app.get(
  '/static/*',
  serveStatic({
    root: './',
    rewriteRequestPath: (path) =>
      path.replace(/^\/static/, '/statics'),
  })
)
```

### Response
#### Success Response (200)
- **file_content** (any) - The content of the requested static file after path rewriting.

#### Response Example
```text
(Content of ./statics/somefile.txt for a request to /static/somefile.txt)
```
```

--------------------------------

### Deploy Hono Application to Netlify Production

Source: https://context7_llms

This command deploys the Hono application to Netlify's production environment. It uses the Netlify CLI to publish the project, making it accessible online. Ensure your Netlify project is linked and configured correctly before running this command.

```sh
netlify deploy --prod
```

--------------------------------

### Generate URLs for Hono Client Endpoints using `$url()` (TypeScript)

Source: https://hono.dev/docs/guides/rpc

This example illustrates how to use the `$url()` method on a Hono Client instance to retrieve a `URL` object for specific API endpoints. It demonstrates generating URLs for both static paths and paths with parameters, providing a convenient way to construct full URLs for client-side navigation or external linking.

```ts
const route = app
      .get('/api/posts', (c) => c.json({ posts }))
      .get('/api/posts/:id', (c) => c.json({ post }))
    
const client = hc<typeof route>('http://localhost:8787/')

let url = client.api.posts.$url()
console.log(url.pathname) // `/api/posts`

url = client.api.posts[':id'].$url({
  param: {
    id: '123',
  },
})
console.log(url.pathname) // `/api/posts/123`
```

--------------------------------

### Create Hono Project for Cloudflare Workers

Source: https://hono.dev/getting-started/cloudflare-workers

Initialize a new Hono project using the create-hono command with the cloudflare-workers template. Supports multiple package managers including npm, yarn, pnpm, bun, and deno. After creation, navigate to the project directory and install dependencies.

```shell
npm create hono@latest my-app
```

```shell
yarn create hono my-app
```

```shell
pnpm create hono my-app
```

```shell
bun create hono@latest my-app
```

```shell
deno init --npm hono my-app
```

--------------------------------

### GET / - Raw HTML Content

Source: https://context7_llms

Renders HTML content with unescaped raw HTML strings. Demonstrates the use of the raw() function to prevent HTML entity encoding of special characters.

```APIDOC
## GET /

### Description
Renders HTML content with raw unescaped strings, preventing HTML entity encoding.

### Method
GET

### Endpoint
/

### Response
#### Success Response (200)
- **Content-Type** (string) - text/html
- **Body** (HTML) - HTML paragraph with unescaped content

#### Response Example
```html
<p>I'm John "Johnny" Smith.</p>
```

### Implementation
```typescript
app.get('/', (c) => {
  const name = 'John &quot;Johnny&quot; Smith'
  return c.html(html`<p>I'm ${raw(name)}.</p>`)
})
```
```

--------------------------------

### HTTP Method Routing

Source: https://hono.dev/docs/api/hono

Define route handlers for specific HTTP methods (GET, POST, PUT, DELETE, etc.). Routes can include path parameters and multiple handlers or middleware.

```APIDOC
## HTTP Method Routing

### Description
Define route handlers for HTTP requests using specific HTTP methods or wildcard routing.

### Methods
- **app.HTTP_METHOD([path,] handler|middleware...)** - Route for specific HTTP method (GET, POST, PUT, DELETE, PATCH, HEAD, OPTIONS)
- **app.all([path,] handler|middleware...)** - Route for all HTTP methods
- **app.on(method|method[], path|path[], handler|middleware...)** - Route for specified method(s) and path(s)

### Parameters
#### Path Parameters
- **path** (string) - Optional - Route path pattern
- **handler** (function) - Route handler function
- **middleware** (function) - Middleware function(s)

### Usage Examples
```typescript
// Single HTTP method
app.get('/users', (c) => c.json({ users: [] }))
app.post('/users', (c) => c.json({ created: true }))

// All methods
app.all('/api/*', middleware)

// Multiple methods
app.on(['GET', 'POST'], '/data', handler)
```
```

--------------------------------

### GET /api/users

Source: https://hono.dev/docs/guides/rpc

Fetches a list of users, illustrating how to apply global response types for both success and various error statuses (e.g., 500, 401) to the client using `ApplyGlobalResponse` for enhanced type safety.

```APIDOC
## GET /api/users

### Description
This endpoint returns a list of users. It serves as an example for how to integrate global error handlers into the Hono client's type inference using `ApplyGlobalResponse`, allowing the client to correctly anticipate both successful responses and various error types (e.g., 500, 401).

### Method
GET

### Endpoint
/api/users

### Parameters
#### Path Parameters
- No path parameters.

#### Query Parameters
- No query parameters.

#### Request Body
- No request body.

### Request Example
```json
// No request body for GET
```

### Response
#### Success Response (200)
- **users** (string[]) - An array of user names.

#### Error Response (500)
- **error** (string) - A message indicating a server-side error.

#### Error Response (401)
- **error** (string) - A general error message.
- **message** (string) - A more specific error message.

#### Response Example
```json
// Success (200)
{
  "users": ["alice", "bob"]
}

// Server Error (500)
{
  "error": "Internal Server Error"
}

// Unauthorized (401)
{
  "error": "Unauthorized",
  "message": "Authentication required"
}
```
```

--------------------------------

### Configure Hono Basic Auth with Multiple Users from External Config (TypeScript)

Source: https://hono.dev/docs/middleware/builtin/basic-auth

This example illustrates a more flexible approach to configuring Hono `basicAuth` middleware by importing user credentials from an external `users` configuration file. It uses object spreading (`...users[0]`) for the first user to include additional parameters like `realm`, and array spreading (`...users.slice(1)`) to pass the remaining users dynamically.

```ts
import { users } from '../config/users'
    
app.use(
  '/auth/*',
  basicAuth(
    {
      realm: 'www.example.com',
      ...users[0],
    },
    ...users.slice(1)
  )
)
```

--------------------------------

### Serve Static Files with serveStatic Middleware

Source: https://hono.dev/docs/getting-started/nodejs

Configure serveStatic middleware to serve static files from a specified root directory. The root option specifies the base directory path, and the middleware will serve files matching the route pattern. This example serves files from the ./static directory when requests match /static/*.

```typescript
import { serveStatic } from '@hono/node-server/serve-static'

app.use('/static/*', serveStatic({ root: './' }))
```

--------------------------------

### Understand Hono Route Priority: Specific vs. Wildcard

Source: https://context7_llms

Illustrates Hono's routing priority where more specific routes are matched before general wildcard routes if defined earlier in the application. In this example, a request to `/book/a` will match its specific handler, while `/book/b` will fall through to the more general `:slug` wildcard handler.

```ts
import { Hono } from 'hono'
const app = new Hono()
// ---cut---
app.get('/book/a', (c) => c.text('a')) // a
app.get('/book/:slug', (c) => c.text('common')) // common
```

--------------------------------

### GET /:username - HTML Template Rendering

Source: https://context7_llms

Renders an HTML response with a personalized greeting using the html template literal. This endpoint demonstrates basic HTML rendering with dynamic parameter interpolation in Hono.

```APIDOC
## GET /:username

### Description
Renders an HTML response with a personalized greeting using the username path parameter.

### Method
GET

### Endpoint
/:username

### Parameters
#### Path Parameters
- **username** (string) - Required - The username to be displayed in the greeting

### Request Example
```
GET /john
```

### Response
#### Success Response (200)
- **Content-Type** (string) - text/html
- **Body** (HTML) - HTML document with personalized greeting

#### Response Example
```html
<!doctype html>
<h1>Hello! john!</h1>
```

### Implementation
```typescript
const app = new Hono()

app.get('/:username', (c) => {
  const { username } = c.req.param()
  return c.html(
    html`<!doctype html>
      <h1>Hello! ${username}!</h1>`
  )
})
```
```

--------------------------------

### WebSocket RPC-mode Server and Client Setup

Source: https://context7_llms

Configure WebSocket Handler to support RPC mode by exporting the handler type from the server and using hc client to create a typed WebSocket connection. This enables type-safe WebSocket communication.

```typescript
// server.ts
const wsApp = app.get(
  '/ws',
  upgradeWebSocket((c) => {
    //...
  })
)

export type WebSocketApp = typeof wsApp

// client.ts
const client = hc<WebSocketApp>('http://localhost:8787')
const socket = client.ws.$ws() // A WebSocket object for a client
```

--------------------------------

### GET /api/posts/:id - Sub-application Route Information

Source: https://hono.dev/docs/helpers/route

Access route information for sub-applications including route path, base route path, and base path with parameters. Demonstrates routing in nested Hono applications.

```APIDOC
## GET /api/posts/:id

### Description
Retrieve route information from a sub-application including the route path, base route path, and base path with actual parameters.

### Method
GET

### Endpoint
/api/posts/:id

### Parameters
#### Path Parameters
- **id** (string) - Required - The post identifier

### Handler Implementation
```typescript
const app = new Hono()
const apiApp = new Hono()

apiApp.get('/posts/:id', (c) => {
  return c.json({
    routePath: routePath(c), // '/posts/:id'
    baseRoutePath: baseRoutePath(c), // '/api'
    basePath: basePath(c), // '/api' (with actual params)
  })
})

app.route('/api', apiApp)
```

### Response
#### Success Response (200)
- **routePath** (string) - The route path pattern for current handler
- **baseRoutePath** (string) - The base route path for sub-application
- **basePath** (string) - The base path with actual parameters

#### Response Example
```json
{
  "routePath": "/posts/:id",
  "baseRoutePath": "/api",
  "basePath": "/api"
}
```
```

--------------------------------

### app.mount()

Source: https://context7_llms

Allows integrating applications built with other frameworks, like `itty-router`, into a Hono application under a specified base path.

```APIDOC
## app.mount()

### Description
The `app.mount()` method enables you to integrate and serve applications developed with other web frameworks directly within your Hono application. You can specify a base path, and Hono will delegate requests matching that path to the mounted application's handler, allowing for hybrid application architectures.

### Method
N/A (Integrates other applications)

### Endpoint
N/A

### Parameters
#### Path Parameters
N/A

#### Query Parameters
N/A

#### Request Body
- **path** (string) - Required - The base path at which to mount the external application (e.g., `'/api/v1'`).
- **anotherAppHandler** (function) - Required - The request handler function of the external application that Hono will delegate requests to.

### Request Example
```typescript
import { Router as IttyRouter } from 'itty-router';
import { Hono } from 'hono';

// Create an itty-router application
const ittyRouter = IttyRouter();
ittyRouter.get('/hello', () => new Response('Hello from itty-router'));

// Hono application
const app = new Hono();

// Mount the itty-router app under '/itty-router'
app.mount('/itty-router', ittyRouter.handle);

// Now, a GET request to '/itty-router/hello' will be handled by ittyRouter.
// Example of a simulated request:
// const res = await app.request('/itty-router/hello');
// console.log(await res.text()); // 'Hello from itty-router'
```

### Response
N/A (The response is generated by the mounted application's handler.)
```

--------------------------------

### Validate File Uploads on Hono Server with Zod (TypeScript)

Source: https://context7_llms

Illustrates the server-side setup for handling file uploads in Hono, specifically demonstrating how to use `zValidator` with Zod to validate an incoming `File` object from a form body.

```ts
// server
const route = app.put(
  '/user/picture',
  zValidator(
    'form',
    z.object({
      file: z.instanceof(File),
    })
  )
  // ...
)
```

--------------------------------

### GET Response Parsing with Type Safety

Source: https://context7_llms

Parse HTTP responses with automatic type safety using the parseResponse helper. Automatically handles Content-Type detection and error handling.

```APIDOC
## parseResponse() - Type-Safe Response Parsing

### Description
Parse responses from Hono client requests with automatic type safety and Content-Type detection.

### Method
GET (or any HTTP method)

### Request Example
```ts
import { parseResponse, DetailedError } from 'hono/client'

const result = await parseResponse(client.hello.$get()).catch(
  (e: DetailedError) => {
    console.error(e)
  }
)
```

### Response
#### Success Response (200)
- **result** (any) - Parsed response body based on Content-Type
  - Automatically detects JSON, text, blob, etc.

#### Error Response
- **DetailedError** - Error object with detailed information
  - Thrown when response status is not ok
  - Contains error details and status information

### Features
- Automatic Content-Type detection and parsing
- JSON parsing for application/json
- Text parsing for text/* types
- Blob handling for binary data
- Type-safe error handling
- Automatic error throwing for non-ok responses

### Use Cases
- Safe response parsing with error handling
- Content-Type agnostic parsing
- Type-safe data extraction
- Error boundary implementation

### Notes
- Automatically throws errors for non-ok responses
- Supports multiple content types
- Provides detailed error information
```

--------------------------------

### Serve Static Files with Hono on Deno

Source: https://context7_llms

TypeScript implementation for serving static files using serveStatic middleware from hono/deno. Configures routes for static directory, favicon, root path, and fallback file handling. Requires specific directory structure with static folder containing assets.

```typescript
import { Hono } from 'hono'
import { serveStatic } from 'hono/deno'

const app = new Hono()

app.use('/static/*', serveStatic({ root: './' }))
app.use('/favicon.ico', serveStatic({ path: './favicon.ico' }))
app.get('/', (c) => c.text('You can access: /static/hello.txt'))
app.get('*', serveStatic({ path: './static/fallback.txt' }))

Deno.serve(app.fetch)
```

--------------------------------

### GET /streamText - Text Streaming Response

Source: https://context7_llms

Returns a streaming response with text/plain content type. Supports writing text with newlines, sleeping for delays, and proper streaming headers.

```APIDOC
## GET /streamText

### Description
Provides a text streaming response endpoint that returns text data as a stream with proper headers. Supports writing text with automatic newlines, delays, and chunked transfer encoding.

### Method
GET

### Endpoint
/streamText

### Response Headers
- **Content-Type**: text/plain
- **Transfer-Encoding**: chunked
- **X-Content-Type-Options**: nosniff

### Implementation

```ts
import { Hono } from 'hono'
import { streamText } from 'hono/streaming'

const app = new Hono()

app.get('/streamText', (c) => {
  return streamText(c, async (stream) => {
    // Write a text with a new line ('\n').
    await stream.writeln('Hello')
    // Wait 1 second.
    await stream.sleep(1000)
    // Write a text without a new line.
    await stream.write(`Hono!`)
  })
})
```

### Stream Methods

#### stream.writeln(text)
- **Description**: Writes text to the stream with a newline character appended
- **Parameters**: text (string) - Text to write
- **Returns**: Promise<void>
- **Use Case**: Write complete lines of text

#### stream.write(text)
- **Description**: Writes text to the stream without appending a newline
- **Parameters**: text (string) - Text to write
- **Returns**: Promise<void>
- **Use Case**: Write text fragments or control newline placement

#### stream.sleep(milliseconds)
- **Description**: Pauses streaming for the specified duration
- **Parameters**: milliseconds (number) - Duration to sleep
- **Returns**: Promise<void>
- **Use Case**: Add delays between streamed content

### Response Example
```
Hello
Hono!
```

### Cloudflare Workers Note

If developing for Cloudflare Workers, streaming may not work well on Wrangler. Add `Identity` for `Content-Encoding` header:

```ts
app.get('/streamText', (c) => {
  c.header('Content-Encoding', 'Identity')
  return streamText(c, async (stream) => {
    // ...
  })
})
```

### Use Cases
- Server-sent text updates
- Real-time log streaming
- Progressive content delivery
- Chat message streaming
```

--------------------------------

### Implement Error Handling Middleware in Hono

Source: https://hono.dev/docs/api/context

This example illustrates how to create a middleware in Hono to gracefully handle errors that occur during the execution of subsequent handlers. By checking `c.error` after `await next()`, the middleware can detect and process any exceptions thrown.

```ts
    app.use(async (c, next) => {
      await next()
      if (c.error) {
        // do something...
      }
    })
```

--------------------------------

### Use Regular Expressions for Path Parameters in Hono

Source: https://hono.dev/docs/api/routing

This example demonstrates how to apply regular expressions to path parameters in Hono routes. It allows for more precise matching of parameter values, such as ensuring a 'date' parameter consists only of digits and a 'title' parameter only of lowercase letters.

```ts
app.get('/post/:date{[0-9]+}/:title{[a-z]+}', async (c) => {
  const { date, title } = c.req.param()
  // ...
})
```

--------------------------------

### Build Static Site with Hono SSG in Node.js

Source: https://hono.dev/docs/helpers/ssg

This TypeScript script demonstrates how to generate static files from a Hono application using `toSSG` in a Node.js environment. It imports the Hono app and the `fs/promises` module to handle file system operations, saving generated HTML files to a specified directory.

```ts
// build.ts
import app from './index'
import { toSSG } from 'hono/ssg'
import fs from 'fs/promises'

toSSG(app, fs)
```

--------------------------------

### Run Hono Development Server for Cloudflare Workers

Source: https://hono.dev/getting-started/cloudflare-workers

Start the local development server for testing the Hono application before deployment. The server runs on http://localhost:8787 and supports hot-reloading for rapid development iteration.

```shell
npm run dev
```

```shell
yarn dev
```

```shell
pnpm dev
```

```shell
bun run dev
```

--------------------------------

### GET /ws - upgradeWebSocket Handler

Source: https://hono.dev/docs/helpers/websocket

Creates a WebSocket handler that manages WebSocket connections with support for message handling, connection lifecycle events, and error handling. Returns a handler function that processes WebSocket upgrade requests.

```APIDOC
## GET /ws - upgradeWebSocket Handler

### Description
UpgradeWebSocket returns a handler for managing WebSocket connections with lifecycle event callbacks.

### Method
GET

### Endpoint
/ws

### Handler Configuration

#### Callback Function
- **c** (Context) - Required - Hono context object

#### Return Object Properties
- **onOpen** (function) - Optional - Called when connection opens (not supported on Cloudflare Workers)
- **onMessage** (function) - Required - Called when message is received from client
- **onClose** (function) - Optional - Called when connection closes
- **onError** (function) - Optional - Called when an error occurs

### Event Handler Parameters

#### onMessage
- **event** (MessageEvent) - The message event containing data from client
- **ws** (WebSocket) - WebSocket instance for sending messages to client

### Request Example
```typescript
const app = new Hono()

app.get(
  '/ws',
  upgradeWebSocket((c) => {
    return {
      onMessage(event, ws) {
        console.log(`Message from client: ${event.data}`)
        ws.send('Hello from server!')
      },
      onClose: () => {
        console.log('Connection closed')
      },
    }
  })
)
```

### Available Events
- **onOpen** - Connection opened (not supported on Cloudflare Workers)
- **onMessage** - Message received from client
- **onClose** - Connection closed
- **onError** - Error occurred

### Notes
- When using middleware that modifies headers (e.g., CORS) on WebSocket routes, conflicts may occur as upgradeWebSocket also modifies headers internally
- Exercise caution when combining WebSocket Helper with header-modifying middleware
```

--------------------------------

### Build Client and Server Scripts with Vite

Source: https://context7_llms

Shell command that builds both the client script and server application sequentially. The first command builds the client in 'client' mode, and the second builds the server in default mode. This ensures both assets are properly compiled for deployment.

```sh
vite build --mode client && vite build
```

--------------------------------

### Context API with useContext in Hono JSX

Source: https://hono.dev/docs/guides/jsx

Use createContext and useContext to share data globally across the component tree without prop drilling. This example demonstrates theme context management for styling components at any depth.

```typescript
import type { FC } from 'hono/jsx'
import { createContext, useContext } from 'hono/jsx'

const themes = {
  light: {
    color: '#000000',
    background: '#eeeeee',
  },
  dark: {
    color: '#ffffff',
    background: '#222222',
  },
}

const ThemeContext = createContext(themes.light)

const Button: FC = () => {
  const theme = useContext(ThemeContext)
  return <button style={theme}>Push!</button>
}

const Toolbar: FC = () => {
  return (
    <div>
      <Button />
    </div>
  )
}

app.get('/', (c) => {
  return c.html(
    <div>
      <ThemeContext.Provider value={themes.dark}>
        <Toolbar />
      </ThemeContext.Provider>
    </div>
  )
})
```

--------------------------------

### Deno: Import Hono from npm or JSR

Source: https://context7_llms

This code demonstrates how to configure imports in `deno.json` to use Hono from either npm or JSR. It shows the syntax for specifying the registry and version.

```JSON
{
  "imports": {
    "hono": "jsr:@hono/hono" // [!code --]
    "hono": "npm:hono" // [!code ++]
  }
}
```

--------------------------------

### Using Hono Context Storage for Global Context Access (TypeScript)

Source: https://hono.dev/docs/middleware/builtin/context-storage

This example shows how to apply the `contextStorage()` middleware to a Hono app and then access a context variable (`message`) globally using `getContext()`. It illustrates setting a variable within a middleware and retrieving it from a separate function, demonstrating global accessibility.

```ts
type Env = {
      Variables: {
        message: string
      }
    }
    
    const app = new Hono<Env>()
    
    app.use(contextStorage())
    
    app.use(async (c, next) => {
      c.set('message', 'Hello!')
      await next()
    })
    
    // You can access the variable outside the handler.
    const getMessage = () => {
      return getContext<Env>().var.message
    }
    
    app.get('/', (c) => {
      return c.text(getMessage())
    })
```

--------------------------------

### Fetch WebAssembly Interface Types Dependencies

Source: https://context7_llms

Execute wkg command to fetch and populate standardized WebAssembly Interface Types (WIT) dependencies from the Bytecode Alliance, including wasi-http, wasi-io, wasi-cli, wasi-clocks, and wasi-random packages.

```shell
wkg wit fetch
```

--------------------------------

### Apply Secure Headers Middleware with Default Settings in Hono (TypeScript)

Source: https://hono.dev/docs/middleware/builtin/secure-headers

This example shows the basic usage of the `secureHeaders` middleware. By calling `app.use(secureHeaders())` without any arguments, the middleware applies a set of optimal security headers by default to the Hono application.

```ts
const app = new Hono()
app.use(secureHeaders())
```

--------------------------------

### GET /posts

Source: https://hono.dev/docs/guides/rpc

Retrieves a specific post by ID, demonstrating explicit status code handling for success (200) and not found (404) scenarios, which allows the Hono client to infer response types correctly.

```APIDOC
## GET /posts

### Description
This endpoint retrieves a single post resource based on its ID. It demonstrates how to explicitly return different HTTP status codes (200 for success, 404 for not found) with corresponding typed JSON bodies, which the Hono client can then infer.

### Method
GET

### Endpoint
/posts

### Parameters
#### Query Parameters
- **id** (string) - Required - The unique identifier of the post to retrieve.

#### Request Body
- No request body.

### Request Example
```json
// No request body for GET with query parameters
```

### Response
#### Success Response (200)
- **post** (object) - The requested post object.

#### Error Response (404)
- **error** (string) - A message indicating that the post was not found.

#### Response Example
```json
// Success (200)
{
  "post": {
    "id": "123",
    "title": "My Awesome Post",
    "content": "..."
  }
}

// Not Found (404)
{
  "error": "not found"
}
```
```

--------------------------------

### Get current Hono router name using `getRouterName()`

Source: https://hono.dev/docs/helpers/dev

The `getRouterName()` function retrieves the name of the router currently in use by a Hono application instance. This is useful for debugging and understanding the routing configuration.

```ts
const app = new Hono()

// ...

console.log(getRouterName(app))
```

--------------------------------

### Restrict Routes to Hono SSG with `onlySSG` Middleware (TypeScript)

Source: https://hono.dev/docs/helpers/ssg

This example demonstrates the `onlySSG` middleware, which ensures a route is only accessible during the static site generation process. After `toSSG` execution, any requests to this route will be overridden to return `c.notFound()`, making it suitable for pages exclusively meant for static output.

```ts
app.get('/static-page', onlySSG(), (c) => c.html(<h1>Welcome to my site</h1>))
```

--------------------------------

### Run Hono Development Server (npm, yarn, pnpm, bun)

Source: https://hono.dev/docs/getting-started/service-worker

These commands show how to start the development server for a Hono application using different JavaScript package managers. The server typically runs on port 5173, allowing access to the Service Worker registration and the Hono application routes.

```shell
npm run dev
```

```shell
yarn dev
```

```shell
pnpm run dev
```

```shell
bun run dev
```

--------------------------------

### Test Hono Routes with Headers and RequestInit Options

Source: https://context7_llms

Demonstrates passing headers and RequestInit options to testClient() calls. The second parameter accepts headers, method, body, and other RequestInit properties for comprehensive request configuration in tests.

```typescript
// index.test.ts
import { Hono } from 'hono'
import { testClient } from 'hono/testing'
import { describe, it, expect } from 'vitest'
import app from './app'

describe('Search Endpoint', () => {
  const client = testClient(app)

  it('should return search results', async () => {
    const token = 'this-is-a-very-clean-token'
    const res = await client.search.$get(
      {
        query: { q: 'hono' },
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': `application/json`,
        },
      }
    )

    expect(res.status).toBe(200)
    expect(await res.json()).toEqual({
      query: 'hono',
      results: ['result1', 'result2'],
    })
  })
})
```

--------------------------------

### GET /redirect - Redirect Response

Source: https://hono.dev/docs/api/context

Redirect to another URL using the c.redirect() method. The default status code is 302 (temporary redirect), but can be customized to 301 (permanent redirect) or other redirect codes.

```APIDOC
## GET /redirect

### Description
Redirect to another URL with optional custom status code.

### Method
GET

### Endpoint
/redirect

### Code Example
```typescript
app.get('/redirect', (c) => {
  return c.redirect('/')
})

app.get('/redirect-permanently', (c) => {
  return c.redirect('/', 301)
})
```

### Parameters
- **path** (string) - Required - The URL to redirect to
- **status** (number) - Optional - HTTP status code (default: 302)

### Response Status Codes
- **302** - Found (temporary redirect, default)
- **301** - Moved Permanently (permanent redirect)

### Response Example
```
HTTP/1.1 302 Found
Location: /
```
```

--------------------------------

### GET /hello - Access Request Headers

Source: https://hono.dev/docs/api/context

Access request headers using the Context object's req property. The req property is an instance of HonoRequest that provides methods to retrieve header values.

```APIDOC
## GET /hello

### Description
Access request headers from the incoming request using the Context object.

### Method
GET

### Endpoint
/hello

### Request Example
```
GET /hello HTTP/1.1
User-Agent: Mozilla/5.0
```

### Code Example
```typescript
app.get('/hello', (c) => {
  const userAgent = c.req.header('User-Agent')
  // Use userAgent value
})
```

### Response
- **userAgent** (string) - The User-Agent header value from the request
```

--------------------------------

### Integrate Hono Client with SWR for Data Fetching in React (TSX)

Source: https://hono.dev/docs/guides/rpc

This example illustrates how to integrate the Hono client with the SWR React Hook library for efficient data fetching. It shows how to create a type-safe fetcher function using `InferRequestType` and `hc` to interact with a Hono API, providing robust caching and revalidation capabilities.

```tsx
import useSWR from 'swr'
import { hc } from 'hono/client'
import type { InferRequestType } from 'hono/client'
import type { AppType } from '../functions/api/[[route]]'

const App = () => {
  const client = hc<AppType>('/api')
  const $get = client.hello.$get

  const fetcher =
    (arg: InferRequestType<typeof $get>) => async () => {
      const res = await $get(arg)
      return await res.json()
    }

  const { data, error, isLoading } = useSWR(
    'api-hello',
    fetcher({
      query: {
        name: 'SWR',
      },
    })
  )
}
```

--------------------------------

### Test Hono Routes with app.request Method

Source: https://context7_llms

These examples illustrate how to use the `app.request` method for testing Hono application routes. It allows simulating HTTP requests by passing a URL or a `Request` object and receiving a `Response` object, simplifying integration testing of endpoints.

```ts
import { Hono } from 'hono'
const app = new Hono()
declare const test: (name: string, fn: () => void) => void
declare const expect: (value: any) => any
// ---cut---
test('GET /hello is ok', async () => {
  const res = await app.request('/hello')
  expect(res.status).toBe(200)
})
```

```ts
import { Hono } from 'hono'
const app = new Hono()
declare const test: (name: string, fn: () => void) => void
declare const expect: (value: any) => any
// ---cut---
test('POST /message is ok', async () => {
  const req = new Request('Hello!', {
    method: 'POST'
  })
  const res = await app.request(req)
  expect(res.status).toBe(201)
})
```

--------------------------------

### Configure CSP `scriptSrc` with Hono's `NONCE` constant

Source: https://hono.dev/docs/middleware/builtin/secure-headers

This example demonstrates how to automatically generate and apply a `nonce` to `scriptSrc` directives within a Content Security Policy using the `NONCE` constant from `hono/secure-headers`. It shows how to integrate `secureHeaders` middleware and retrieve the generated nonce value in an HTML template for `script` elements.

```tsx
import { secureHeaders, NONCE } from 'hono/secure-headers'
import type { SecureHeadersVariables } from 'hono/secure-headers'

// Specify the variable types to infer the `c.get('secureHeadersNonce')`:
type Variables = SecureHeadersVariables

const app = new Hono<{ Variables: Variables }>()

// Set the pre-defined nonce value to `scriptSrc`:
app.get(
  '*',
  secureHeaders({
    contentSecurityPolicy: {
      scriptSrc: [NONCE, 'https://allowed1.example.com'],
    },
  })
)

// Get the value from `c.get('secureHeadersNonce')`:
app.get('/', (c) => {
  return c.html(
    <html>
      <body>
        {/** contents */}
        <script
          src='/js/client.js'
          nonce={c.get('secureHeadersNonce')}
        />
      </body>
    </html>
  )
})
```

--------------------------------

### Test Supabase Edge Function with cURL

Source: https://context7_llms

Makes a GET request to the locally running Supabase Edge Function using cURL. This command verifies that the function is accessible and returns the expected 'Hello from hono-server!' text.

```bash
curl  --location  'http://127.0.0.1:54321/functions/v1/hello-world/hello'
```

--------------------------------

### Test Hono POST Request with `app.request()` and `Request` object in TypeScript

Source: https://hono.dev/docs/api/hono

This example shows how to send a POST request using `app.request()` by constructing a standard `Request` object. This allows for more complex request configurations, such as specifying the HTTP method, for testing Hono application routes.

```ts
test('POST /message is ok', async () => {
  const req = new Request('Hello!', {
    method: 'POST',
  })
  const res = await app.request(req)
  expect(res.status).toBe(201)
})
```

--------------------------------

### Apply Hono SSG Plugins (TypeScript)

Source: https://hono.dev/docs/helpers/ssg

This TypeScript snippet demonstrates how to apply multiple SSG plugins, including the custom `sitemapPlugin`, to a Hono application during the static site generation process. It uses the `toSSG` function from `hono/ssg`, passing the Hono app, a file system module, and an options object containing an array of plugins.

```typescript
import app from './index'
import { toSSG } from 'hono/ssg'
import { sitemapPlugin } from './plugins'

toSSG(app, fs, {
  plugins: [
    getOnlyPlugin,
    statusFilterPlugin,
    logFilesPlugin,
    sitemapPlugin('https://example.com')
  ]
})
```

--------------------------------

### Configure Fastly Compute Bindings with buildFire

Source: https://context7_llms

Set up typed bindings for Fastly platform resources (KV Stores, Config Stores, Secret Stores, Backends, ACLs, Named Log Streams, Environment Variables) using buildFire. Define bindings configuration, create a Hono instance with typed Bindings, and access resources through c.env in route handlers.

```typescript
// src/index.ts
import { buildFire } from '@fastly/hono-fastly-compute'

const fire = buildFire({
  siteData: 'KVStore:site-data', // I have a KV Store named "site-data"
})

const app = new Hono<{ Bindings: typeof fire.Bindings }>()

app.put('/upload/:key', async (c, next) => {
  // e.g., Access the KV Store
  const key = c.req.param('key')
  await c.env.siteData.put(key, c.req.body)
  return c.text(`Put ${key} successfully!`)
})

fire(app)
```

--------------------------------

### Correctly Handle Not Found Responses in Hono Server for Typed Clients

Source: https://hono.dev/docs/guides/rpc

This example provides the recommended way to handle 'Not Found' responses in a Hono server when working with RPC clients. By using `c.json()` and explicitly setting the status code to 404, the client can correctly infer the response type, ensuring type safety.

```ts
export const routes = new Hono().get(
  '/posts',
  zValidator(
    'query',
    z.object({
      id: z.string(),
    })
  ),
  async (c) => {
    const { id } = c.req.valid('query')
    const post = await getPost(id)

    if (!post) {
      return c.json({ error: 'not found' }, 404) // Specify 404
    }

    return c.json({ post }, 200) // Specify 200
  }
)
```

--------------------------------

### View Transition with Keyframes Animation and viewTransition Function

Source: https://context7_llms

Advanced example combining viewTransition() function with keyframes() to create custom animations for view transitions. The viewTransition() generates a unique view-transition-name that can be used with ::view-transition-old() and ::view-transition-new() pseudo-elements. Requires imports from hono/jsx, hono/jsx/dom/css, and hono/css.

```typescript
import { useState, startViewTransition } from 'hono/jsx'
import { viewTransition } from 'hono/jsx/dom/css'
import { css, keyframes, Style } from 'hono/css'

const rotate = keyframes`
  from {
    rotate: 0deg;
  }
  to {
    rotate: 360deg;
  }
`

export default function App() {
  const [showLargeImage, setShowLargeImage] = useState(false)
  const [transitionNameClass] = useState(() =>
    viewTransition(css`
      ::view-transition-old() {
        animation-name: ${rotate};
      }
      ::view-transition-new() {
        animation-name: ${rotate};
      }
    `)
  )
  return (
    <>
      <Style />
      <button
        onClick={() =>
          startViewTransition(() =>
            setShowLargeImage((state) => !state)
          )
        }
      >
        Click!
      </button>
      <div>
        {!showLargeImage ? (
          <img src='https://hono.dev/images/logo.png' />
        ) : (
          <div
            class={css`
              ${transitionNameClass}
              background: url('https://hono.dev/images/logo-large.png');
              background-size: contain;
              background-repeat: no-repeat;
              background-position: center;
              width: 600px;
              height: 600px;
            `}
          ></div>
        )}
      </div>
    </>
  )
}
```

--------------------------------

### Implement Hono.js Response Streaming with AWS Lambda Adaptor

Source: https://hono.dev/docs/getting-started/aws-lambda

This TypeScript example demonstrates how to achieve traditional Hono.js streaming responses when deployed to AWS Lambda. It utilizes `streamHandle` instead of `handle` and `streamText` from `hono/streaming` to write incremental data to the client, showcasing a simple streamed counter.

```ts
import { Hono } from 'hono'
import { streamHandle } from 'hono/aws-lambda'
import { streamText } from 'hono/streaming'

const app = new Hono()

app.get('/stream', async (c) => {
  return streamText(c, async (stream) => {
    for (let i = 0; i < 3; i++) {
      await stream.writeln(`${i}`)
      await stream.sleep(1)
    }
  })
})

export const handler = streamHandle(app)
```

--------------------------------

### Advanced Proxy Configuration with Custom Headers in Hono

Source: https://context7_llms

Advanced proxy setup with custom header manipulation including X-Forwarded-For and X-Forwarded-Host headers, optional request data forwarding, and selective header removal. Demonstrates how to exclude specific headers like Authorization and Set-Cookie from being propagated.

```typescript
app.get('/proxy/:path', async (c) => {
  const res = await proxy(
    `http://${originServer}/${c.req.param('path')}`,
    {
      headers: {
        ...c.req.header(), // optional, specify only when forwarding all the request data (including credentials) is necessary.
        'X-Forwarded-For': '127.0.0.1',
        'X-Forwarded-Host': c.req.header('host'),
        Authorization: undefined, // do not propagate request headers contained in c.req.header('Authorization')
      },
    }
  )
  res.headers.delete('Set-Cookie')
  return res
})
```

--------------------------------

### GET $url() - URL Object Generation

Source: https://context7_llms

Generate a URL object for accessing endpoints using the $url() method. Requires an absolute URL for proper functionality. Supports path parameters and typed URLs for type-safe operations.

```APIDOC
## GET $url()

### Description
Generate a URL object for accessing API endpoints with support for path parameters and type-safe URL construction.

### Method
GET

### Parameters
#### URL Configuration
- **base_url** (string) - Required - Absolute URL (e.g., 'http://localhost:8787/')
- **param** (object) - Optional - Path parameters for dynamic routes

### Request Example
```ts
const client = hc<typeof route>('http://localhost:8787/')

let url = client.api.posts.$url()
console.log(url.pathname) // `/api/posts`

url = client.api.posts[':id'].$url({
  param: {
    id: '123',
  },
})
console.log(url.pathname) // `/api/posts/123`
```

### Response
#### Success Response (200)
- **pathname** (string) - The path component of the URL
- **protocol** (string) - URL protocol (when using TypedURL)
- **host** (string) - URL host (when using TypedURL)

### Important Notes
- Must use absolute URLs; relative URLs will throw 'Invalid URL' error
- TypedURL provides precise type information for type-safe key usage with libraries like SWR
- Can be used as type-safe keys for state management libraries
```

--------------------------------

### Pass `RequestInit` Options to Hono Client Requests (TypeScript)

Source: https://hono.dev/docs/guides/rpc

This code shows how to utilize the `init` option to pass a standard `RequestInit` object, such as an `AbortController.signal`, to a Hono Client request. The `init` object provides a flexible way to configure underlying fetch request properties and takes the highest priority, potentially overwriting other options like `body`, `method`, or `headers`.

```ts
import { hc } from 'hono/client'

const client = hc<AppType>('http://localhost:8787/')

const abortController = new AbortController()
const res = await client.api.posts.$post(
  {
    json: {
      // Request body
    },
  },
  {
    // RequestInit object
    init: {
      signal: abortController.signal,
    },
  }
)

// ...

abortController.abort()
```

--------------------------------

### Set HTTP Response Headers in Hono (c.header)

Source: https://context7_llms

This example shows how to add custom HTTP headers to the outgoing response using the `c.header()` method. It enables developers to include additional metadata or instructions for the client, like `X-Message` in this case.

```ts
import { Hono } from 'hono'
const app = new Hono()
app.get('/', (c) => {
  c.header('X-Message', 'My custom message')
  return c.text('HellO!')
})
```

--------------------------------

### Get Cookie with Security Prefix in Hono

Source: https://hono.dev/docs/helpers/cookie

Shows how to retrieve cookies with __Secure- and __Host- prefixes using getCookie and getSignedCookie functions. The prefix parameter ('secure' or 'host') verifies that the cookie name has the appropriate prefix, enhancing security compliance.

```typescript
const securePrefixCookie = getCookie(c, 'yummy_cookie', 'secure')
const hostPrefixCookie = getCookie(c, 'yummy_cookie', 'host')

const securePrefixSignedCookie = await getSignedCookie(
  c,
  secret,
  'fortune_cookie',
  'secure'
)
const hostPrefixSignedCookie = await getSignedCookie(
  c,
  secret,
  'fortune_cookie',
  'host'
)
```

--------------------------------

### Create Hono WebAssembly Component with jco-std

Source: https://context7_llms

Initialize a basic Hono HTTP server as a WebAssembly component using jco-std adapters. The component defines a GET endpoint that returns JSON and exports the WASI HTTP incoming handler interface for componentize-js compatibility.

```typescript
import { Hono } from 'hono'
import { fire } from '@bytecodealliance/jco-std/wasi/0.2.6/http/adapters/hono/server'

const app = new Hono()

app.get('/hello', (c) => {
  return c.json({ message: 'Hello from WebAssembly!' })
})

fire(app)

export { incomingHandler } from '@bytecodealliance/jco-std/wasi/0.2.6/http/adapters/hono/server'
```

--------------------------------

### Get Path Parameters in Hono

Source: https://context7_llms

Demonstrates how to retrieve individual path parameters by name or all parameters as an object from the request context (`c.req.param()`) in Hono. This method is essential for handling dynamic routes and extracting variable segments from the URL path.

```ts
import { Hono } from 'hono'
const app = new Hono()
app.get('/entry/:id', async (c) => {
  const id = c.req.param('id')
  // ...
})
```

```ts
import { Hono } from 'hono'
const app = new Hono()
app.get('/entry/:id/comment/:commentId', async (c) => {
  const { id, commentId } = c.req.param()
})
```

--------------------------------

### Get Validated Request Data in Hono

Source: https://hono.dev/docs/api/request

Retrieves validated data from the request using specified targets (form, json, query, header, cookie, param). Returns data that has been validated according to middleware validators.

```typescript
app.post('/posts', async (c) => {
  const { title, body } = c.req.valid('form')
  // ...
})
```

--------------------------------

### Import Hono Default Preset (TypeScript)

Source: https://context7_llms

This code shows the standard way to import the `Hono` class, which utilizes the default router preset. This preset is highly recommended for most applications, offering high performance after initial registration and suitability for long-life servers and various platforms like Deno, Bun, Node.js, Cloudflare Workers, and Deno Deploy.

```ts
import { Hono } from 'hono'
```

--------------------------------

### Request ID Middleware Import and Basic Setup in Hono

Source: https://context7_llms

Imports and configures Request ID middleware to generate unique identifiers for each request. Uses crypto.randomUUID() for ID generation (requires Node.js 20+) and allows access to request IDs through context variables.

```typescript
import { Hono } from 'hono'
import { requestId } from 'hono/request-id'

const app = new Hono()

app.use('*', requestId())

app.get('/', (c) => {
  return c.text(`Your request id is ${c.get('requestId')}`)
})
```

--------------------------------

### Return JSON response in Hono

Source: https://context7_llms

Handle GET request to `/api/hello` endpoint and return JSON response with application/json content type. Demonstrates Hono's c.json() method for serializing JavaScript objects to JSON.

```typescript
app.get('/api/hello', (c) => {
  return c.json({
    ok: true,
    message: 'Hello Hono!'
  })
})
```

--------------------------------

### Extract path parameters with param() method

Source: https://hono.dev/docs/api/request

Retrieve individual or all path parameters from the URL route. The param() method can be called with a specific parameter name to get a single value, or without arguments to retrieve all captured parameters as an object.

```typescript
// Captured params
app.get('/entry/:id', async (c) => {
  const id = c.req.param('id')
  // ...
})

// Get all params at once
app.get('/entry/:id/comment/:commentId', async (c) => {
  const { id, commentId } = c.req.param()
})
```

--------------------------------

### Manage Regular Cookies in Hono

Source: https://hono.dev/docs/helpers/cookie

This example illustrates how to set, retrieve, and delete regular (unsigned) cookies within a Hono application's route handler. It shows the usage of `setCookie` to create a cookie, `getCookie` to read a specific cookie or all cookies, and `deleteCookie` to remove a cookie from the client.

```ts
app.get('/cookie', (c) => {
  setCookie(c, 'cookie_name', 'cookie_value')
  const yummyCookie = getCookie(c, 'cookie_name')
  deleteCookie(c, 'cookie_name')
  const allCookies = getCookie(c)
  // ...
})
```

--------------------------------

### Initialize Hono Service Worker with `fire()` (TypeScript)

Source: https://hono.dev/docs/getting-started/service-worker

This snippet illustrates how to use the `fire()` function from 'hono/service-worker' to automatically set up a Hono application as a Service Worker. It imports Hono, defines a simple GET route, and then activates the application using `fire()`, making the Service Worker code concise.

```typescript
import { Hono } from 'hono'
import { fire } from 'hono/service-worker'

const app = new Hono().basePath('/sw')
app.get('/', (c) => c.text('Hello World'))

fire(app)
```

--------------------------------

### Deploy Hono Project to Vercel

Source: https://context7_llms

Deploys the Hono application to Vercel using the Vercel CLI. This command initiates the deployment process to Vercel's cloud infrastructure, making the application publicly accessible.

```sh
vercel deploy
```

--------------------------------

### Signed Cookies - Set, Get, Delete

Source: https://hono.dev/docs/helpers/cookie

Manage signed cookies with HMAC SHA-256 signatures for enhanced security. These operations are asynchronous due to the WebCrypto API. Signed cookies return false if the signature is tampered with or invalid.

```APIDOC
## Signed Cookies

### Description
Manage signed cookies with HMAC SHA-256 signatures for enhanced security. All operations are asynchronous due to WebCrypto API usage.

### Method
GET

### Endpoint
/signed-cookie

### Functions

#### setSignedCookie(c, name, value, secret, options?)
- **c** (Context) - Required - The Hono context object
- **name** (string) - Required - The cookie name
- **value** (string) - Required - The cookie value
- **secret** (string) - Required - Secret key for HMAC SHA-256 signature (must be sufficiently large for security)
- **options** (object) - Optional - Cookie options

#### getSignedCookie(c, secret, name?)
- **c** (Context) - Required - The Hono context object
- **secret** (string) - Required - Secret key for signature verification
- **name** (string) - Optional - Specific cookie name to retrieve. If omitted, returns all signed cookies

#### deleteCookie(c, name, options?)
- **c** (Context) - Required - The Hono context object
- **name** (string) - Required - The cookie name to delete
- **options** (object) - Optional - Cookie options

### Usage Example
```typescript
app.get('/signed-cookie', async (c) => {
  const secret = 'secret' // make sure it's a large enough string to be secure

  await setSignedCookie(c, 'cookie_name0', 'cookie_value', secret)
  const fortuneCookie = await getSignedCookie(
    c,
    secret,
    'cookie_name0'
  )
  deleteCookie(c, 'cookie_name0')
  // getSignedCookie returns false if signature was tampered with or is invalid
  const allSignedCookies = await getSignedCookie(c, secret)
  // ...
})
```

### Response
- **fortuneCookie** (string|false) - The retrieved cookie value, or false if signature is invalid
- **allSignedCookies** (object|false) - Object containing all signed cookies, or false if any signature is invalid

### Notes
- Returns Promise due to async WebCrypto API
- Returns false for tampered or invalid signatures
- Secret should be sufficiently large for security
```

--------------------------------

### Handle Found Files with onFound Callback

Source: https://context7_llms

Demonstrates how to use the onFound callback in serveStatic to add custom headers or perform actions when a static file is successfully found, such as setting cache control headers.

```typescript
app.get(
  '/static/*',
  serveStatic({
    onFound: (_path, c) => {
      c.header('Cache-Control', `public, immutable, max-age=31536000`)
    },
  })
)
```

--------------------------------

### Get Client Remote Address with getConnInfo

Source: https://hono.dev/docs/helpers/conninfo

Use getConnInfo to retrieve connection information from the Hono context and access the client's remote address. Returns a ConnInfo object containing remote network address details.

```typescript
const app = new Hono()

app.get('/', (c) => {
  const info = getConnInfo(c) // info is `ConnInfo`
  return c.text(`Your remote address is ${info.remote.address}`)
})
```

--------------------------------

### Combine Hono JSX with HTML Middleware for Templating

Source: https://hono.dev/docs/guides/jsx

This example showcases the integration of Hono JSX components with the `hono/html` middleware for flexible templating. It defines a `Layout` component using `hono/html`'s tagged template literal and then renders a JSX `Content` component within this layout, demonstrating a powerful hybrid approach to server-side rendering in Hono.

```tsx
    import { Hono } from 'hono'
    import { html } from 'hono/html'
    
    const app = new Hono()
    
    interface SiteData {
      title: string
      children?: any
    }
    
    const Layout = (props: SiteData) =>
      html`<!doctype html>
        <html>
          <head>
            <title>${props.title}</title>
          </head>
          <body>
            ${props.children}
          </body>
        </html>`
    
    const Content = (props: { siteData: SiteData; name: string }) => (
      <Layout {...props.siteData}>
        <h1>Hello {props.name}</h1>
      </Layout>
    )
    
    app.get('/:name', (c) => {
      const { name } = c.req.param()
      const props = {
        name: name,
        siteData: {
          title: 'JSX with html sample',
        },
      }
      return c.html(<Content {...props} />)
    })
    
    export default app
```

--------------------------------

### Apply Body Limit Middleware to a Hono Route (TypeScript)

Source: https://hono.dev/docs/middleware/builtin/body-limit

This example demonstrates how to integrate the `bodyLimit` middleware into a Hono route. It configures a `POST` endpoint that limits the request body size to 50KB, provides a custom error handler for oversized requests, and processes the request body if it passes the limit.

```typescript
const app = new Hono()

app.post(
  '/upload',
  bodyLimit({
    maxSize: 50 * 1024, // 50kb
    onError: (c) => {
      return c.text('overflow :(', 413)
    },
  }),
  async (c) => {
    const body = await c.req.parseBody()
    if (body['file'] instanceof File) {
      console.log(`Got file sized: ${body['file'].size}`)
    }
    return c.text('pass :)')
  }
)
```

--------------------------------

### Body Limit Middleware - Error Handler Configuration

Source: https://context7_llms

Configure error handling for Body Limit Middleware when request file size exceeds specified limits. Includes platform-specific setup for Bun runtime with custom request body size limits.

```APIDOC
## Body Limit Middleware - onError Handler

### Description
Configures error handling when request body size exceeds the specified limit. Essential for Bun runtime where default body limit is 128MiB.

### Configuration Parameter
- **onError** (OnError) - Optional - Error handler invoked when file size is exceeded

### Bun Runtime Configuration

#### Option 1: Export Configuration
```ts
export default {
  port: process.env['PORT'] || 3000,
  fetch: app.fetch,
  maxRequestBodySize: 1024 * 1024 * 200
}
```

#### Option 2: Bun.serve Configuration
```ts
Bun.serve({
  fetch(req, server) {
    return app.fetch(req, { ip: server.requestIP(req) })
  },
  maxRequestBodySize: 1024 * 1024 * 200
})
```

### Important Notes
- Bun.serve default request body limit: 128MiB
- If Hono Body Limit exceeds Bun limit, requests fail with 413 status before reaching onError handler
- Both Bun and Hono limits must be configured for requests larger than 128MiB
- The onError handler will not be called if Bun terminates the connection first
```

--------------------------------

### Enable Progressive Locale Matching

Source: https://hono.dev/docs/middleware/builtin/language

Configure language detection to progressively truncate locale subtags when exact matches are not found. For example, 'ja-JP' matches 'ja', and 'zh-Hant-CN' matches 'zh-Hant'. Exact matches are always preferred over partial matches.

```typescript
app.use(
  languageDetector({
    supportedLanguages: ['en', 'ja', 'zh-Hant'],
    fallbackLanguage: 'en',
  })
)

// Accept-Language: ja-JP → matches 'ja'
// Accept-Language: zh-Hant-CN → matches 'zh-Hant'
```

--------------------------------

### Deno: Import Middleware from npm

Source: https://context7_llms

This code snippet shows how to import middleware from npm, using the Deno directory syntax for proper type inference. It highlights the use of the `hono/` import.

```JSON
{
  "imports": {
    "hono/": "npm:/hono/"
  }
}
```

--------------------------------

### Import Hono Cache Middleware in TypeScript

Source: https://hono.dev/docs/middleware/builtin/cache

This snippet demonstrates how to import the `Hono` application instance and the `cache` middleware from the Hono library. These imports are necessary to utilize the caching functionality in a Hono application.

```ts
import { Hono } from 'hono'
import { cache } from 'hono/cache'
```

--------------------------------

### Configuring Hono Strict Mode for Route Matching in TypeScript

Source: https://hono.dev/docs/api/hono

This example shows how to disable strict mode in a Hono application during initialization. By setting `strict: false`, Hono will treat routes like `/hello` and `/hello/` as equivalent, providing more flexible route matching behavior.

```ts
const app = new Hono({ strict: false })
```

--------------------------------

### GET /auth/page (JWK Auth - Anonymous Access)

Source: https://context7_llms

An endpoint protected by JWK authentication, configured to allow anonymous access (`allow_anon: true`). It returns the JWT payload if present, otherwise a default message for unauthenticated users.

```APIDOC
## GET /auth/page

### Description
An endpoint protected by JWK authentication, configured to allow anonymous access (`allow_anon: true`). It returns the JWT payload if present, otherwise a default message for unauthenticated users.

### Method
GET

### Endpoint
/auth/page

### Parameters
#### Path Parameters
- None

#### Query Parameters
- None

#### Request Body
- None

### Request Example
```
GET /auth/page
// Can optionally include Authorization header for authenticated access
```

### Response
#### Success Response (200)
- **payload** (object) - The decoded JSON payload if authenticated.
- **message** (string) - A default message if the request is anonymous.

#### Response Example (Authenticated)
```json
{
  "sub": "1234567890",
  "name": "John Doe",
  "iat": 1516239022
}
```

#### Response Example (Anonymous)
```json
{
  "message": "hello anon"
}
```
```

--------------------------------

### Extract query string parameters with query() method

Source: https://hono.dev/docs/api/request

Retrieve individual or all query string parameters from the URL. The query() method accepts an optional parameter name to get a single value, or returns all parameters as an object when called without arguments.

```typescript
// Query params
app.get('/search', async (c) => {
  const query = c.req.query('q')
})

// Get all params at once
app.get('/search', async (c) => {
  const { q, limit, offset } = c.req.query()
})
```

--------------------------------

### Define a Hono Application for Static Site Generation

Source: https://hono.dev/docs/helpers/ssg

This Hono application defines routes, including a root path and an `/about` page with a custom renderer. It serves as the input for the `toSSG` function, demonstrating how to structure a Hono app for static site generation.

```tsx
// index.tsx
const app = new Hono()

app.get('/', (c) => c.html('Hello, World!'))

app.use('/about', async (c, next) => {
  c.setRenderer((content) => {
    return c.html(
      <html>
        <head />
        <body>
          <p>{content}</p>
        </body>
      </html>
    )
  })
  await next()
})

app.get('/about', (c) => {
  return c.render(
    <>
      <title>Hono SSG Page</title>Hello!
    </>
  )
})

export default app
```

--------------------------------

### Conditionally Enable Hono Timing Middleware based on Request Method

Source: https://context7_llms

This example illustrates how to configure the Hono timing middleware to be conditionally enabled. The `enabled` option accepts a function that determines whether timings should be added based on the request context, such as the HTTP method.

```ts
const app = new Hono()

app.use(
  '*',
  timing({
    // c: Context of the request
    enabled: (c) => c.req.method === 'POST',
  })
)
```

--------------------------------

### Use Cookie Helper in Hono Application

Source: https://context7_llms

Demonstrates how to use the Cookie helper to get and set cookies in a Hono application. The helper provides getCookie and setCookie functions that simplify cookie management without requiring middleware, making it easy to handle cookie operations in route handlers.

```typescript
import { getCookie, setCookie } from 'hono/cookie'

const app = new Hono()

app.get('/cookie', (c) => {
  const yummyCookie = getCookie(c, 'yummy_cookie')
  // ...
  setCookie(c, 'delicious_cookie', 'macha')
  //
})
```

--------------------------------

### Handle Timeout for Server-Sent Events (SSE) in Hono

Source: https://context7_llms

This example demonstrates how to manage timeouts for Server-Sent Events (SSE) in Hono, as the `timeout` middleware cannot be used directly with streams. It shows how to manually set a timeout using `setTimeout` and `stream.close()` to terminate the SSE stream after a specified duration, along with handling client disconnections.

```ts
app.get('/sse', async (c) => {
  let id = 0
  let running = true
  let timer: number | undefined

  return streamSSE(c, async (stream) => {
    timer = setTimeout(() => {
      console.log('Stream timeout reached, closing stream')
      stream.close()
    }, 3000) as unknown as number

    stream.onAbort(async () => {
      console.log('Client closed connection')
      running = false
      clearTimeout(timer)
    })

    while (running) {
      const message = `It is ${new Date().toISOString()}`
      await stream.writeSSE({
        data: message,
        event: 'time-update',
        id: String(id++)
      })
      await stream.sleep(1000)
    }
  })
})
```

--------------------------------

### Validate Multiple Request Parts with Hono Validators

Source: https://hono.dev/docs/guides/validation

Shows how to chain multiple validators to validate different parts of an HTTP request simultaneously. This example validates path parameters, query strings, and JSON body in a single POST route handler.

```TypeScript
app.post(
  '/posts/:id',
  validator('param', ...),
  validator('query', ...),
  validator('json', ...),
  (c) => {
  }
)
```

--------------------------------

### POST /blog with Custom Logger

Source: https://context7_llms

Illustrates how to provide a custom `PrintFunc` to the Logger Middleware, allowing for tailored logging behavior and integration with specific route logic.

```APIDOC
## POST /blog with Custom Logger

### Description
This example demonstrates how to customize the Hono Logger Middleware by providing a `PrintFunc`. It shows how to define a custom logging function and use it within a specific route handler to log additional, context-specific information alongside the standard middleware output.

### Method
POST

### Endpoint
/blog

### Parameters
#### Path Parameters
(None)

#### Query Parameters
(None)

#### Request Body
- **(dynamic)** (any) - Required - The request body for creating a blog post. Specific fields depend on application logic.

### Request Example
```ts
export const customLogger = (message: string, ...rest: string[]) => {
  console.log(message, ...rest)
}

app.use(logger(customLogger))

app.post('/blog', (c) => {
  // Assume 'blog' object is created from request body
  const blog = { url: '/blog/example', id: 1 }; 

  customLogger('Blog saved:', `Path: ${blog.url},`, `ID: ${blog.id}`)
  
  // Return Context (e.g., status 201 Created)
  return c.text('Blog created', 201)
})
```

### Response
#### Success Response (201 Created)
- **(text)** (string) - A confirmation message indicating the blog post was created.

#### Response Example
```text
<-- POST /blog
Blog saved: Path: /blog/example, ID: 1
--> POST /blog 201 93ms
Blog created
```
```

--------------------------------

### Correct Hono Header Validation Using Lowercase Key

Source: https://context7_llms

This example demonstrates the correct way to validate headers in Hono using the `validator` middleware. It shows that header keys must be accessed in lowercase (e.g., `idempotency-key`) to successfully retrieve their values for validation.

```ts
// ✅ this will work
app.post(
  '/api',
  validator('header', (value, c) => {
    // can retrieve the value of the header as expected
    const idempotencyKey = value['idempotency-key']

    if (idempotencyKey == undefined || idempotencyKey === '') {
      throw new HTTPException(400, {
        message: 'Idempotency-Key is required'
      })
    }
    return { idempotencyKey }
  }),
  (c) => {
    const { idempotencyKey } = c.req.valid('header')
    // ...
  }
)
```

--------------------------------

### METHOD factory.createApp()

Source: https://context7_llms

Creates a Hono application instance with proper TypeScript types, especially useful for consistently applying `Env` types defined in the factory.

```APIDOC
## METHOD factory.createApp()

### Description
The `factory.createApp()` method generates a new Hono application instance. When used with `createFactory()`, it ensures that the `Env` types are consistently applied across the application and its components, reducing redundancy in type definitions. It can also initialize the app with specific middleware via the `initApp` option in `createFactory()`.

### Method
METHOD

### Endpoint
factory.createApp()

### Parameters
#### Arguments
(None)

#### Options
(None)

#### Request Body
(None)

### Request Example
```ts
import { createFactory } from 'hono/factory'
import { drizzle } from 'drizzle-orm/d1' // Example dependency

// Define Env once for the factory
type Env = {
  Bindings: { MY_DB: D1Database },
  Variables: { db: DrizzleD1Database }
}

// Create factory with Env and an initApp function
const factory = createFactory<Env>({
  initApp: (app) => {
    app.use(async (c, next) => {
      const db = drizzle(c.env.MY_DB)
      c.set('db', db)
      await next()
    })
  },
})

// Create app using the factory
const app = factory.createApp()

// The app now has the Env types and the middleware applied
app.post('/posts', (c) => {
  c.var.db.insert() // 'db' is typed correctly
  // ...
})
```

### Response
#### Success Response (Hono instance)
- **app** (Hono) - A Hono application instance with configured types and initial middleware.

#### Response Example
```ts
// The returned value is a Hono application instance
const app = new Hono<Env>()
```
```

--------------------------------

### Define Hono Sub-router for Authors (TypeScript)

Source: https://context7_llms

This code defines a modular Hono sub-router specifically for 'authors'. It sets up basic GET and POST endpoints for listing, creating, and retrieving a single author by ID, demonstrating how to structure routes for a larger RPC-style application.

```ts
// authors.ts
import { Hono } from 'hono'

const app = new Hono()
  .get('/', (c) => c.json('list authors'))
  .post('/', (c) => c.json('create an author', 201))
  .get('/:id', (c) => c.json(`get ${c.req.param('id')}`))

export default app
```

--------------------------------

### Configure cacheableStatusCodes in Hono Cache Middleware

Source: https://hono.dev/docs/middleware/builtin/cache

Demonstrates how to use the cacheableStatusCodes option to cache responses with multiple HTTP status codes. This example caches responses with status codes 200, 404, and 412 with a max-age of 3600 seconds. The cache middleware requires a cacheName and cacheControl configuration.

```typescript
app.get(
  '*',
  cache({
    cacheName: 'my-app',
    cacheControl: 'max-age=3600',
    cacheableStatusCodes: [200, 404, 412]
  })
)
```

--------------------------------

### Create Hono WebSocket Client in TypeScript

Source: https://hono.dev/docs/helpers/websocket

This TypeScript code illustrates how to create a WebSocket client that connects to a Hono server. It uses Hono's `hc` client to establish a WebSocket connection to the `/ws` endpoint. Once connected, the client sends the current timestamp to the server every second, demonstrating basic real-time data transmission. This client is designed to interact with the Hono WebSocket server example.

```ts
import { hc } from 'hono/client';
import type app from './server';

const client = hc<typeof app>('http://localhost:8787');
const ws = client.ws.$ws(0);

ws.addEventListener('open', () => {
  setInterval(() => {
    ws.send(new Date().toString());
  }, 1000);
});
```

--------------------------------

### Test Hono Language Detection with cURL (Shell)

Source: https://hono.dev/docs/middleware/builtin/language

These `curl` commands provide practical examples of how clients can interact with the Hono Language Detector middleware to specify their preferred language. It demonstrates detection via URL path segments, query parameters, HTTP cookies, and the `Accept-Language` header, showcasing the middleware's flexibility.

```sh
# Via path
curl http://localhost:8787/ar/home

# Via query parameter
curl http://localhost:8787/?lang=ar

# Via cookie
curl -H 'Cookie: language=ja' http://localhost:8787/

# Via header
curl -H 'Accept-Language: ar,en;q=0.9' http://localhost:8787/
```

--------------------------------

### Configure Custom Port for Hono Node.js Server

Source: https://hono.dev/docs/getting-started/nodejs

This TypeScript example demonstrates how to specify a custom port number for the Hono Node.js server. By passing a `port` option to the `serve` function, you can change the default listening port from 3000 to another value, such as 8787.

```ts
serve({
  fetch: app.fetch,
  port: 8787,
})
```

--------------------------------

### Implementing Manual Form Data Validation in Hono

Source: https://context7_llms

This example shows how to use the `validator` middleware to manually validate form data. It checks if the 'body' field exists and is a string, returning an error if validation fails, otherwise passing the validated data.

```ts
app.post(
  '/posts',
  validator('form', (value, c) => {
    const body = value['body']
    if (!body || typeof body !== 'string') {
      return c.text('Invalid!', 400)
    }
    return {
      body: body,
    }
  }),
  //...
```

--------------------------------

### Retrieve Base Route Path Pattern with Hono `baseRoutePath()`

Source: https://context7_llms

This example illustrates the `baseRoutePath()` function, which returns the base path pattern of the current route as defined in the routing configuration, especially useful with sub-applications. It also shows how an optional index parameter can be used to access the base path pattern of a specific matched route.

```ts
const subApp = new Hono()
subApp.get('/posts/:id', (c) => {
  return c.text(baseRoutePath(c)) // '/:sub'
})

app.route('/:sub', subApp)
```

```ts
app.all('/api/*', (c, next) => {
  return next()
})

const subApp = new Hono()
subApp.get('/users/:id', (c) => {
  console.log(baseRoutePath(c, 0)) // '/' (first matched route)
  console.log(baseRoutePath(c, -1)) // '/api' (last matched route)
  return c.text('User details')
})

app.route('/api', subApp)
```

--------------------------------

### ToSSGOptions Configuration

Source: https://hono.dev/docs/helpers/ssg

Configure the static site generation process with options for output directory, concurrency, file extensions, and plugins. These options control how Hono generates static files from your application routes.

```APIDOC
## ToSSGOptions Interface

### Description
Configuration interface for the `toSSG` function that controls static site generation behavior.

### Properties

#### dir
- **Type**: `string`
- **Required**: Optional
- **Default**: `"./static"`
- **Description**: The output destination directory for generated static files.

#### concurrency
- **Type**: `number`
- **Required**: Optional
- **Default**: `2`
- **Description**: The concurrent number of files to be generated at the same time.

#### extensionMap
- **Type**: `Record<string, string>`
- **Required**: Optional
- **Description**: A map containing the `Content-Type` as a key and the file extension string as a value. Used to determine the file extension of output files.

#### plugins
- **Type**: `SSGPlugin[]`
- **Required**: Optional
- **Description**: An array of SSG plugins that extend the functionality of the static site generation process.

### Example
```typescript
export interface ToSSGOptions {
  dir?: string
  concurrency?: number
  extensionMap?: Record<string, string>
  plugins?: SSGPlugin[]
}
```
```

--------------------------------

### Get Multiple Query String Parameter Values in Hono

Source: https://context7_llms

Demonstrates how to retrieve an array of values for a single query parameter that appears multiple times in the URL (e.g., `/search?tags=A&tags=B`) using `c.req.queries()`. This is crucial for handling multi-select filters or tags.

```ts
import { Hono } from 'hono'
const app = new Hono()
app.get('/search', async (c) => {
  // tags will be string[]
  const tags = c.req.queries('tags')
  // ...
})
```

--------------------------------

### Configure Dev Script in package.json for Bun

Source: https://context7_llms

Shows the package.json configuration needed to run Hono with Bun's hot-reloading feature during development.

```json
{
  "scripts": {
    "dev": "bun run --hot src/index.ts"
  }
}
```

--------------------------------

### Configure Hono to Append Trailing Slashes to URLs

Source: https://context7_llms

This code demonstrates how to use the `appendTrailingSlash` middleware in a Hono application. It redirects GET requests to URLs without a trailing slash to their equivalent with a trailing slash, typically when the original path results in a 404.

```ts
import { Hono } from 'hono'
import { appendTrailingSlash } from 'hono/trailing-slash'

const app = new Hono({ strict: true })

app.use(appendTrailingSlash())
app.get('/about/me/', (c) => c.text('With Trailing Slash'))
```

--------------------------------

### Infer Request and Response Types with Hono Client (TypeScript)

Source: https://hono.dev/docs/guides/rpc

This example showcases the utility of `InferRequestType` and `InferResponseType` from `hono/client`. These types allow developers to automatically infer the types of objects expected in requests and returned in responses, significantly enhancing type safety and developer experience.

```ts
import type { InferRequestType, InferResponseType } from 'hono/client'
    
    // InferRequestType
    const $post = client.todo.$post
    type ReqType = InferRequestType<typeof $post>['form']
    
    // InferResponseType
    type ResType = InferResponseType<typeof $post>
```

--------------------------------

### Import Cookie Helper Functions in Hono

Source: https://context7_llms

Lists the various functions available from `hono/cookie` for comprehensive cookie management within a Hono application. These imports include functions for setting, getting, deleting, and handling signed cookies, providing a complete API for cookie operations.

```ts
import { Hono } from 'hono'
import {
  deleteCookie,
  getCookie,
  getSignedCookie,
  setCookie,
  setSignedCookie,
  generateCookie,
  generateSignedCookie
} from 'hono/cookie'
```

--------------------------------

### Generate Hono RPC Client and Make Type-Safe API Call (TypeScript)

Source: https://context7_llms

This code illustrates how to create a type-safe client using `hc` from Hono, leveraging the `AppType` exported from the server. It demonstrates making a GET request to the '/hello' endpoint with type-checked query parameters and handling the typed JSON response. This ensures compile-time safety for client-side API interactions.

```ts
import { AppType } from './server'
import { hc } from 'hono/client'

const client = hc<AppType>('/api')
const res = await client.hello.$get({
  query: {
    name: 'Hono'
  }
})
```

--------------------------------

### Get Query String Parameters in Hono

Source: https://context7_llms

Explains how to access individual query string parameters by name or all query parameters as an object from the request context (`c.req.query()`) in Hono. This is useful for handling URL-based filtering, pagination, and other data passed via the query string.

```ts
import { Hono } from 'hono'
const app = new Hono()
app.get('/search', async (c) => {
  const query = c.req.query('q')
})
```

```ts
import { Hono } from 'hono'
const app = new Hono()
app.get('/search', async (c) => {
  const { q, limit, offset } = c.req.query()
})
```

--------------------------------

### Link Billing Account to Google Cloud Project

Source: https://context7_llms

Retrieve billing account ID and link it to the created project to enable resource provisioning. First list available billing accounts, then link the desired account to the project using the project ID.

```shell
gcloud billing accounts list
```

```shell
gcloud billing projects link $PROJECT_ID \
    --billing-account=[billing_account_id]
```

--------------------------------

### Retrieve Environment Variables using Hono's `env()` function in TypeScript

Source: https://hono.dev/docs/helpers/adapter

This example shows how to use the `env()` function to access environment variables within a Hono application. It retrieves a variable named `NAME` from the context, which can originate from `process.env` on Node.js/Bun or `wrangler.toml` on Cloudflare Workers, providing a unified interface for environment access across different runtimes.

```typescript
import { env } from 'hono/adapter'

app.get('/env', (c) => {
  // NAME is process.env.NAME on Node.js or Bun
  // NAME is the value written in `wrangler.toml` on Cloudflare
  const { NAME } = env<{ NAME: string }>(c)
  return c.text(NAME)
})
```

--------------------------------

### Create a Basic Hono 'Hello World' Endpoint for Netlify Edge Functions

Source: https://context7_llms

This TypeScript code defines a simple Hono application that responds with 'Hello Hono!' on the root path. It utilizes `jsr:@hono/hono` for the framework and `jsr:@hono/hono/netlify` to adapt the Hono app for Netlify Edge Functions, exporting the `handle` function.

```ts
import { Hono } from 'jsr:@hono/hono'
import { handle } from 'jsr:@hono/hono/netlify'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

export default handle(app)
```

--------------------------------

### Group Hono Routes Without Modifying Base Path

Source: https://hono.dev/docs/api/routing

This example shows an alternative way to group routes where the base path of the grouped instance is not automatically prefixed. Instead, the full path, including the desired base, is specified directly within the grouped Hono instance, allowing for more explicit path control.

```ts
const book = new Hono()
book.get('/book', (c) => c.text('List Books')) // GET /book
```

--------------------------------

### Apply JWT Middleware to Hono Routes

Source: https://hono.dev/docs/middleware/builtin/jwt

This example shows how to apply the JWT middleware to a specific route group (`/auth/*`) in a Hono application. It configures the required secret and algorithm for token verification, protecting the `/auth/page` endpoint and ensuring only authorized requests proceed.

```ts
// Specify the variable types to infer the `c.get('jwtPayload')`:
type Variables = JwtVariables

const app = new Hono<{ Variables: Variables }>()

app.use(
  '/auth/*',
  jwt({
    secret: 'it-is-very-secret',
    alg: 'HS256',
  })
)

app.get('/auth/page', (c) => {
  return c.text('You are authorized')
})
```

--------------------------------

### Handle Hono Application Errors with app.onError

Source: https://context7_llms

This example shows how to implement a global error handler in Hono using `app.onError`. It catches uncaught errors, logs them to the console, and returns a custom 500 Internal Server Error response. Route-level handlers take precedence over parent app handlers.

```ts
import { Hono } from 'hono'
const app = new Hono()
// ---cut---
app.onError((err, c) => {
  console.error(`${err}`)
  return c.text('Custom Error Message', 500)
})
```

--------------------------------

### Access AWS Lambda Event and Context Objects in Hono

Source: https://hono.dev/docs/getting-started/aws-lambda

Demonstrates how to bind LambdaEvent and LambdaContext types to access AWS Lambda events and context information in a Hono application. The example shows retrieving isBase64Encoded from the event and awsRequestId from the Lambda context via c.env.

```typescript
import { Hono } from 'hono'
import type { LambdaEvent, LambdaContext } from 'hono/aws-lambda'
import { handle } from 'hono/aws-lambda'

type Bindings = {
  event: LambdaEvent
  lambdaContext: LambdaContext
}

const app = new Hono<{ Bindings: Bindings }>()

app.get('/aws-lambda-info/', (c) => {
  return c.json({
    isBase64Encoded: c.env.event.isBase64Encoded,
    awsRequestId: c.env.lambdaContext.awsRequestId,
  })
})

export const handler = handle(app)
```

--------------------------------

### Serve All Files from Static Directory

Source: https://hono.dev/docs/getting-started/nodejs

Configure serveStatic to serve all files from a specific static directory using a wildcard route. Any request path will be mapped to files within the ./static directory, allowing direct access to hello.txt and image.png.

```typescript
app.use('*', serveStatic({ root: './static' }))
```

--------------------------------

### Configure JSX Streaming Response with Hono

Source: https://hono.dev/docs/middleware/builtin/jsx-renderer

Enable streaming responses in Hono's JSX renderer by setting the stream option to true or providing custom headers. This example demonstrates an async component with Suspense that streams HTML chunks to the client with appropriate transfer encoding headers.

```typescript
const AsyncComponent = async () => {
  await new Promise((r) => setTimeout(r, 1000)) // sleep 1s
  return <div>Hi!</div>
}

app.get(
  '*',
  jsxRenderer(
    ({ children }) => {
      return (
        <html>
          <body>
            <h1>SSR Streaming</h1>
            {children}
          </body>
        </html>
      )
    },
    { stream: true }
  )
)

app.get('/', (c) => {
  return c.render(
    <Suspense fallback={<div>loading...</div>}>
      <AsyncComponent />
    </Suspense>
  )
})
```

```typescript
{
  'Transfer-Encoding': 'chunked',
  'Content-Type': 'text/html; charset=UTF-8',
  'Content-Encoding': 'Identity'
}
```

--------------------------------

### Test Hono Application with bun:test

Source: https://context7_llms

Shows how to write and run unit tests for Hono applications using Bun's built-in testing framework, including testing HTTP responses and status codes.

```typescript
import { describe, expect, it } from 'bun:test'
import app from '.'

describe('My first test', () => {
  it('Should return 200 Response', async () => {
    const req = new Request('http://localhost/')
    const res = await app.fetch(req)
    expect(res.status).toBe(200)
  })
})
```

--------------------------------

### Handling Asynchronous Errors with Hono ErrorBoundary and Suspense (TSX)

Source: https://context7_llms

This example illustrates the combined use of `ErrorBoundary` and `Suspense` for managing errors in asynchronous components within Hono. `Suspense` provides a loading state while `AsyncComponent` resolves, and `ErrorBoundary` catches any errors that occur during its execution, displaying a specified fallback UI.

```tsx
async function AsyncComponent() {
  await new Promise((resolve) => setTimeout(resolve, 2000))
  throw new Error('Error')
  return <div>Hello</div>
}

app.get('/with-suspense', async (c) => {
  return c.html(
    <html>
      <body>
        <ErrorBoundary fallback={<div>Out of Service</div>}>
          <Suspense fallback={<div>Loading...</div>}>
            <AsyncComponent />
          </Suspense>
        </ErrorBoundary>
      </body>
    </html>
  )
})
```

--------------------------------

### Import WebSocket Helper - Deno

Source: https://context7_llms

Import Hono and upgradeWebSocket from the Deno adapter to enable WebSocket support in Deno runtime environments.

```typescript
import { Hono } from 'hono'
import { upgradeWebSocket } from 'hono/deno'
```

--------------------------------

### Add Custom Headers to a Single Hono Client Request (TypeScript)

Source: https://hono.dev/docs/guides/rpc

This example illustrates how to append custom HTTP headers to a specific Hono Client request. Headers are passed as an object within the request options, allowing for fine-grained control over individual API calls.

```ts
const res = await client.search.$get(
  {
    //...
  },
  {
    headers: {
      'X-Custom-Header': 'Here is Hono Client',
      'X-User-Agent': 'hc',
    },
  }
)
```

--------------------------------

### Create `wrangler.toml` for Cloudflare Bindings

Source: https://context7_llms

This command creates an empty `wrangler.toml` file, which is essential for configuring Cloudflare Workers and Pages projects. This file will be used to define local bindings such as environment variables and KV namespaces.

```sh
touch wrangler.toml
```

--------------------------------

### Apply Hono Method Override Middleware with Default Options

Source: https://context7_llms

This example shows how to apply the `methodOverride` middleware to a specific path (`/posts`) in a Hono application. By default, it uses the value of a form field named `_method` to override the HTTP method, enabling handlers like `app.delete()` to be triggered by POST requests.

```ts
const app = new Hono()

// If no options are specified, the value of `_method` in the form,
// e.g. DELETE, is used as the method.
app.use('/posts', methodOverride({ app }))

app.delete('/posts', (c) => {
  // ....
})
```

--------------------------------

### Create Hono handlers with `factory.createHandlers()` for type-safe controllers

Source: https://hono.dev/docs/guides/best-practices

If a 'Ruby on Rails-like Controller' structure is desired, Hono's `factory.createHandlers()` provides a way to maintain correct type inference. This example illustrates how to use `createFactory` to define middleware and handlers, ensuring type safety even with a more separated controller pattern.

```ts
import { createFactory } from 'hono/factory'
import { logger } from 'hono/logger'

// ...

// 😃
const factory = createFactory()

const middleware = factory.createMiddleware(async (c, next) => {
  c.set('foo', 'bar')
  await next()
})

const handlers = factory.createHandlers(logger(), middleware, (c) => {
  return c.json(c.var.foo)
})

app.get('/api', ...handlers)
```

--------------------------------

### Create Modular Endpoints with app.route() in Hono

Source: https://context7_llms

Shows how to organize a larger Hono application by separating endpoints into different files (authors.ts, books.ts) and mounting them using app.route(). Each module exports a Hono instance with its own routes, which are then combined in the main index.ts file. This pattern improves code organization and maintainability.

```typescript
// authors.ts
import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => c.json('list authors'))
app.post('/', (c) => c.json('create an author', 201))
app.get('/:id', (c) => c.json(`get ${c.req.param('id')}`))

export default app
```

```typescript
// books.ts
import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => c.json('list books'))
app.post('/', (c) => c.json('create a book', 201))
app.get('/:id', (c) => c.json(`get ${c.req.param('id')}`))

export default app
```

```typescript
// index.ts
import { Hono } from 'hono'
import authors from './authors'
import books from './books'

const app = new Hono()

// 😃
app.route('/authors', authors)
app.route('/books', books)

export default app
```

--------------------------------

### Override Default Secure Header Values in Hono (TypeScript)

Source: https://hono.dev/docs/middleware/builtin/secure-headers

This example demonstrates how to customize the values of specific security headers. By providing string values for options like `strictTransportSecurity`, `xFrameOptions`, and `xXssProtection` in the configuration object, you can override their default settings with custom policies.

```ts
const app = new Hono()
app.use(
  '*',
  secureHeaders({
    strictTransportSecurity:
      'max-age=63072000; includeSubDomains; preload',
    xFrameOptions: 'DENY',
    xXssProtection: '1',
  })
)
```

--------------------------------

### Hono `some` Middleware for Conditional Execution

Source: https://context7_llms

This snippet illustrates the `some` middleware from `hono/combine`. It allows multiple middleware functions to be applied, executing only the first one that returns true or successfully processes the request. In this example, it's used to skip rate limiting if a valid bearer token is present.

```ts
import { some } from 'hono/combine'
import { bearerAuth } from 'hono/bearer-auth'
import { myRateLimit } from '@/rate-limit'

// If client has a valid token, skip rate limiting.
// Otherwise, apply rate limiting.
app.use(
  '/api/*',
  some(bearerAuth({ token }), myRateLimit({ limit: 100 }))
)
```

--------------------------------

### Configure Environment Variable to Disable Vercel Node.js Helpers

Source: https://context7_llms

This configuration sets the `NODEJS_HELPERS` environment variable to `0`. This is crucial for ensuring proper functionality when using Hono with the Next.js Pages Router on Vercel, as it disables Vercel's default Node.js helpers that might conflict with Hono's serverless setup.

```text
NODEJS_HELPERS=0
```

--------------------------------

### Handle Path and Query Parameters with Validation in Hono

Source: https://hono.dev/docs/guides/rpc

Demonstrates using zValidator middleware to validate and coerce query parameters (e.g., converting string to number) in a GET route with path parameters. Path parameters and query values must be passed as strings, with validation converting them to appropriate types.

```typescript
const route = app.get(
  '/posts/:id',
  zValidator(
    'query',
    z.object({
      page: z.coerce.number().optional()
    })
  ),
  (c) => {
    return c.json({
      title: 'Night',
      body: 'Time to sleep'
    })
  }
)
```

--------------------------------

### Create Type-Safe Hono RPC Client with `hc`

Source: https://hono.dev/docs/concepts/stacks

This code demonstrates how to create a type-safe client using `hc` from `hono/client` by leveraging the `AppType` exported from the server. The `hc` client automatically infers the available endpoints and their expected request types, providing auto-completion and compile-time safety for API calls. It shows an example of calling the `/hello` endpoint with a query parameter.

```typescript
import { AppType } from './server'
import { hc } from 'hono/client'

const client = hc<AppType>('/api')
const res = await client.hello.$get({
      query: {

```

--------------------------------

### Define Multiple Global Error Status Codes for Hono Client

Source: https://hono.dev/docs/guides/rpc

This example illustrates how to define multiple global error status codes and their corresponding JSON response types simultaneously using the `ApplyGlobalResponse` type helper, enhancing the type safety of the Hono RPC client for various error scenarios.

```ts
type AppWithErrors = ApplyGlobalResponse<
  typeof app,
  {
    401: { json: { error: string; message: string } }
    500: { json: { error: string; message: string } }
  }
>
```

--------------------------------

### Access EventContext in Cloudflare Pages Middleware

Source: https://context7_llms

Shows how to access Cloudflare's `EventContext` object via `c.env` within Hono middleware on Cloudflare Pages. The example demonstrates storing user data in the event context that can be accessed in route handlers. This enables sharing data between middleware and handlers.

```ts
// functions/_middleware.ts
import { handleMiddleware } from 'hono/cloudflare-pages'

export const onRequest = [
  handleMiddleware(async (c, next) => {
    c.env.eventContext.data.user = 'Joe'
    await next()
  }),
]
```

--------------------------------

### Run WebAssembly Component with jco serve

Source: https://context7_llms

Execute the WebAssembly component using jco serve, a development-only WASI runtime that converts the component to a core module for execution in NodeJS. The server listens on localhost:8000 and serves HTTP requests to the defined endpoints.

```shell
npx jco serve dist/component.wasm
```

```shell
yarn jco serve dist/component.wasm
```

```shell
pnpm exec jco serve dist/component.wasm
```

```shell
bun run jco serve dist/component.wasm
```

--------------------------------

### Handle Asynchronous Hono JSX Components with ErrorBoundary and Suspense

Source: https://hono.dev/docs/guides/jsx

This example illustrates the combined use of `ErrorBoundary` and `Suspense` for asynchronous Hono JSX components. `Suspense` provides a loading fallback while the `AsyncComponent` resolves, and `ErrorBoundary` catches any errors that occur during or after resolution, offering a robust error handling mechanism for async operations.

```tsx
    async function AsyncComponent() {
      await new Promise((resolve) => setTimeout(resolve, 2000))
      throw new Error('Error')
      return <div>Hello</div>
    }
    
    app.get('/with-suspense', async (c) => {
      return c.html(
        <html>
          <body>
            <ErrorBoundary fallback={<div>Out of Service</div>}>
              <Suspense fallback={<div>Loading...</div>}>
                <AsyncComponent />
              </Suspense>
            </ErrorBoundary>
          </body>
        </html>
      )
    })
```

--------------------------------

### Verify Generated Static Files after Hono SSG Build

Source: https://hono.dev/docs/helpers/ssg

This bash command lists the contents of the `./static` directory, confirming that the `toSSG` process successfully generated `about.html` and `index.html` files. It's used to check the output of the static site generation.

```bash
ls ./static
about.html  index.html
```

--------------------------------

### Avoid RoR-like Controllers for better type inference in Hono

Source: https://hono.dev/docs/guides/best-practices

This snippet demonstrates why traditional 'Ruby on Rails-like Controllers' can lead to type inference issues with path parameters in Hono. It shows problematic examples where type inference fails and contrasts them with the recommended approach of defining handlers directly after path definitions for improved type safety and clarity.

```ts
// 🙁
// A RoR-like Controller
const booksList = (c: Context) => {
  return c.json('list books')
}

app.get('/books', booksList)

// 🙁
// A RoR-like Controller
const bookPermalink = (c: Context) => {
  const id = c.req.param('id') // Can't infer the path param
  return c.json(`get ${id}`)
}

// 😃
app.get('/books/:id', (c) => {
  const id = c.req.param('id') // Can infer the path param
  return c.json(`get ${id}`)
})
```

--------------------------------

### Configure Hono Method Override with Custom Options

Source: https://context7_llms

This snippet demonstrates how to customize the `methodOverride` middleware in Hono. It shows examples of specifying a custom form field name (`_custom_name`), using a custom header (`X-METHOD-OVERRIDE`), or a query parameter (`_method`) to determine the overridden HTTP method.

```ts
app.use('/posts', methodOverride({ app, form: '_custom_name' }))
app.use(
  '/posts',
  methodOverride({ app, header: 'X-METHOD-OVERRIDE' })
)
app.use('/posts', methodOverride({ app, query: '_method' }))
```

--------------------------------

### Get Request Header Values in Hono

Source: https://context7_llms

Illustrates how to fetch a specific request header's value by name using `c.req.header()` in Hono. It also highlights an important consideration regarding case sensitivity when attempting to retrieve all headers without arguments, advising direct access by name for uppercase headers.

```ts
import { Hono } from 'hono'
const app = new Hono()
app.get('/', (c) => {
  const userAgent = c.req.header('User-Agent')
  return c.text(`Your user agent is ${userAgent}`)
})
```

```ts
// ❌ Will not work
const headerRecord = c.req.header()
const foo = headerRecord['X-Foo']
```

```ts
// ✅ Will work
const foo = c.req.header('X-Foo')
```

--------------------------------

### Render Unescaped Raw HTML Content in Hono with `raw()`

Source: https://hono.dev/docs/helpers/html

This example demonstrates how to use the `raw()` helper function within Hono's `html` template literals to prevent automatic HTML escaping. This is essential when you need to inject pre-formatted HTML strings, such as those containing entities like `&quot;`, directly into the output without them being converted to their literal characters.

```ts
app.get('/', (c) => {
  const name = 'John &quot;Johnny&quot; Smith'
  return c.html(html`<p>I'm ${raw(name)}.</p>`)
})
```

--------------------------------

### Create Custom Middleware with Type-Safe `c.var` in Hono.js (TypeScript)

Source: https://hono.dev/docs/api/context

This example illustrates how to define an `Env` type for `Variables` and create a custom middleware using `createMiddleware`. The middleware sets a function (`echo`) onto `c.set()`, which then becomes accessible via `c.var` in subsequent handlers, ensuring type safety for custom methods.

```ts
type Env = {
  Variables: {
    echo: (str: string) => string
  }
}

const app = new Hono()

const echoMiddleware = createMiddleware<Env>(async (c, next) => {
  c.set('echo', (str) => str)
  await next()
})

app.get('/echo', echoMiddleware, (c) => {
  return c.text(c.var.echo('Hello!'))
})
```

--------------------------------

### Mounting an Itty-Router Application into Hono with `app.mount()` in TypeScript

Source: https://hono.dev/docs/api/hono

This snippet illustrates how to integrate an application built with another framework, like `itty-router`, into a Hono application using the `app.mount()` method. It demonstrates defining an `itty-router` instance and then mounting its `handle` function under a specific path in Hono.

```ts
import { Router as IttyRouter } from 'itty-router'
import { Hono } from 'hono'

// Create itty-router application
const ittyRouter = IttyRouter()

// Handle `GET /itty-router/hello`
ittyRouter.get('/hello', () => new Response('Hello from itty-router'))

// Hono application
const app = new Hono()

// Mount!
app.mount('/itty-router', ittyRouter.handle)
```

--------------------------------

### Chain Multiple Middleware on Cloudflare Pages

Source: https://context7_llms

Demonstrates how to apply multiple middleware functions to Cloudflare Pages by exporting an array of `handleMiddleware` wrapped functions. Each middleware is executed in order, allowing composition of multiple concerns like authentication, logging, and validation.

```ts
import { handleMiddleware } from 'hono/cloudflare-pages'

// ...

export const onRequest = [
  handleMiddleware(middleware1),
  handleMiddleware(middleware2),
  handleMiddleware(middleware3),
]
```

--------------------------------

### Configure `redirectPlugin` for Hono SSG (TypeScript)

Source: https://hono.dev/docs/helpers/ssg

This code snippet shows how to integrate the `redirectPlugin` into the `toSSG` configuration. The `redirectPlugin` generates HTML redirect pages for routes returning HTTP redirect responses, and it's crucial to place it before `defaultPlugin` to ensure redirects are processed.

```ts
import { toSSG, redirectPlugin, defaultPlugin } from 'hono/ssg'

toSSG(app, fs, {
  plugins: [redirectPlugin(), defaultPlugin()],
})
```

--------------------------------

### Import Hono Route Helper Functions

Source: https://context7_llms

This snippet shows how to import the necessary components for using Hono's Route Helper. It includes `Hono` itself and specific route helper functions like `matchedRoutes`, `routePath`, `baseRoutePath`, and `basePath` from the `hono/route` module, enabling access to detailed routing information.

```ts
import { Hono } from 'hono'
import {
  matchedRoutes,
  routePath,
  baseRoutePath,
  basePath,
} from 'hono/route'
```

--------------------------------

### Building a Hono API Server with Zod Validation for Cloudflare Pages

Source: https://hono.dev/docs/concepts/stacks

This TypeScript code defines a Hono API server for managing todos, integrated with Cloudflare Pages. It uses Zod for request body validation and demonstrates POST and GET endpoints, showcasing type-safe API definition and handling requests.

```ts
// functions/api/[[route]].ts
import { Hono } from 'hono'
import { handle } from 'hono/cloudflare-pages'
import * as z from 'zod'
import { zValidator } from '@hono/zod-validator'

const app = new Hono()

const schema = z.object({
  id: z.string(),
  title: z.string(),
})

type Todo = z.infer<typeof schema>

const todos: Todo[] = []

const route = app
  .post('/todo', zValidator('form', schema), (c) => {
    const todo = c.req.valid('form')
    todos.push(todo)
    return c.json({
      message: 'created!',
    })
  })
  .get((c) => {
    return c.json({
      todos,
    })
  })

export type AppType = typeof route

export const onRequest = handle(app, '/api')
```

--------------------------------

### Set and Get Request-Scoped Variables in Hono

Source: https://context7_llms

Store and retrieve arbitrary key-value pairs within a single request lifecycle using c.set() and c.get(). Values are request-scoped and cannot be shared across requests. Type safety is achieved by passing a Variables generic type to the Hono constructor.

```TypeScript
import { Hono } from 'hono'
const app = new Hono<{ Variables: { message: string } }>()

app.use(async (c, next) => {
  c.set('message', 'Hono is cool!!')
  await next()
})

app.get('/', (c) => {
  const message = c.get('message')
  return c.text(`The message is "${message}"`)
})
```

--------------------------------

### Set HTTP Status Code with status()

Source: https://hono.dev/docs/api/context

Set the HTTP status code for the response using c.status(). The default status code is 200, so you only need to use this method when returning a non-200 status. This example demonstrates setting a 201 Created status for a POST request.

```typescript
app.post('/posts', (c) => {
  // Set HTTP status code
  c.status(201)
  return c.text('Your post is created!')
})
```

--------------------------------

### Validate Form Data with Zod Schema

Source: https://hono.dev/docs/guides/validation

Demonstrates form data validation using Zod schema validation library. Defines a Zod schema object, uses safeParse() to validate incoming form data, and returns validated data or an error response. Requires installing the 'zod' package from npm.

```TypeScript
import * as z from 'zod'

const schema = z.object({
  body: z.string(),
})

const route = app.post(
  '/posts',
  validator('form', (value, c) => {
    const parsed = schema.safeParse(value)
    if (!parsed.success) {
      return c.text('Invalid!', 401)
    }
    return parsed.data
  }),
  (c) => {
    const { body } = c.req.valid('form')
    return c.json(
      {
        message: 'Created!',
      },
      201
    )
  }
)
```

--------------------------------

### Implement RPC-mode with Hono WebSocket Helper

Source: https://hono.dev/docs/helpers/websocket

This snippet demonstrates how to set up a Hono WebSocket application for RPC (Remote Procedure Call) mode. It shows how to define the server-side WebSocket handler and export its type, then how a client can use `hc` (Hono Client) to create a WebSocket object for communication, enabling type-safe RPC over WebSockets.

```typescript
// server.ts
const wsApp = app.get(
  '/ws',
  upgradeWebSocket((c) => {
    //...
  })
)

export type WebSocketApp = typeof wsApp

// client.ts
const client = hc<WebSocketApp>('http://localhost:8787')
const socket = client.ws.$ws() // A WebSocket object for a client
```

--------------------------------

### Add Build and Deploy Scripts to `package.json` for Serverless-Devs

Source: https://context7_llms

This JSON snippet adds `build` and `deploy` scripts to the `package.json` file. The `build` script uses `esbuild` to compile TypeScript to JavaScript for Node.js 20, and the `deploy` script uses Serverless-Devs to deploy the compiled function.

```json
{
  "scripts": {
    "build": "esbuild --bundle --outfile=./dist/index.js --platform=node --target=node20 ./src/index.ts",
    "deploy": "s deploy -y"
  }
}
```

--------------------------------

### Configure Bun for large Hono requests using `export default`

Source: https://context7_llms

This configuration snippet demonstrates how to set the `maxRequestBodySize` for Bun when using the `export default` syntax for server setup. This is crucial when Hono's Body Limit Middleware is configured to accept requests larger than Bun's default 128MiB limit, preventing `413` errors and ensuring Hono's error handler is invoked.

```ts
export default {
  port: process.env['PORT'] || 3000,
  fetch: app.fetch,
  maxRequestBodySize: 1024 * 1024 * 200
}
```

--------------------------------

### WebSocket Helper - Import

Source: https://hono.dev/docs/helpers/websocket

Import the upgradeWebSocket function from the appropriate Hono adapter based on your runtime environment. Cloudflare Workers, Deno, and Bun are supported, with Node.js support available through @hono/node-ws middleware.

```APIDOC
## WebSocket Helper - Import

### Description
Import the upgradeWebSocket function from the appropriate Hono adapter based on your runtime environment.

### Cloudflare Workers
```typescript
import { Hono } from 'hono'
import { upgradeWebSocket } from 'hono/cloudflare-workers'
```

### Deno
```typescript
import { Hono } from 'hono'
import { upgradeWebSocket } from 'hono/deno'
```

### Bun
```typescript
import { Hono } from 'hono'
import { upgradeWebSocket, websocket } from 'hono/bun'

export default {
  fetch: app.fetch,
  websocket,
}
```

### Node.js
For Node.js environments, use the @hono/node-ws middleware package.
```

--------------------------------

### Extract JWT Payload from Hono Context in TypeScript

Source: https://context7_llms

This snippet illustrates how to access the verified JWT payload within a Hono route handler after the JWK middleware has processed the request. The payload is retrieved using `c.get('jwtPayload')` and can then be used, for example, to return user-specific information.

```ts
const app = new Hono()

app.use(
  '/auth/*',
  jwk({
    jwks_uri: `https://${backendServer}/.well-known/jwks.json`,
    alg: ['RS256']
  })
)

app.get('/auth/page', (c) => {
  const payload = c.get('jwtPayload')
  return c.json(payload) // eg: { "sub": "1234567890", "name": "John Doe", "iat": 1516239022 }
})
```

--------------------------------

### Access Netlify Context (Geo Location) in Hono Edge Function

Source: https://context7_llms

This TypeScript example demonstrates how to access Netlify's `Context` object, specifically geo-location data, within a Hono application. It defines a custom `Env` type to include the Netlify `Context` and uses `c.env.context` to retrieve country information for a JSON response.

```ts
import { Hono } from 'jsr:@hono/hono'
import { handle } from 'jsr:@hono/hono/netlify'

// Import the type definition
import type { Context } from 'https://edge.netlify.com/'

export type Env = {
  Bindings: {
    context: Context
  }
}

const app = new Hono<Env>()

app.get('/country', (c) =>
  c.json({
    'You are in': c.env.context.geo.country?.name,
  })
)

export default handle(app)
```

--------------------------------

### Specify HTTP Status Codes in Hono Server Responses

Source: https://hono.dev/docs/guides/rpc

This example shows how to explicitly specify HTTP status codes (e.g., 200 for success, 404 for not found) when returning JSON responses from a Hono server. This allows the Hono RPC client to infer the correct response types based on the status code.

```ts
// server.ts
const app = new Hono().get(
  '/posts',
  zValidator(
    'query',
    z.object({
      id: z.string(),
    })
  ),
  async (c) => {
    const { id } = c.req.valid('query')
    const post: Post | undefined = await getPost(id)

    if (post === undefined) {
      return c.json({ error: 'not found' }, 404) // Specify 404
    }

    return c.json({ post }, 200) // Specify 200
  }
)

export type AppType = typeof app
```

--------------------------------

### Calling Hono Client with Path Parameters and Query Values

Source: https://context7_llms

This snippet shows how to make a client-side request using `hono/client` for a route that expects both path parameters and query values. It highlights that both `param` and `query` values must be passed as strings, even if the server-side validator converts them to a different type.

```ts
const res = await client.posts[':id'].$get({
  param: {
    id: '123',
  },
  query: {
    page: '1', // `string`, converted by the validator to `number`
  },
})
```

--------------------------------

### Pass Request-Scoped Variables in Hono.js Middleware (TypeScript)

Source: https://hono.dev/docs/api/context

This example illustrates how to set and retrieve arbitrary key-value pairs using `c.set()` and `c.get()` within Hono.js middleware and route handlers. These variables are scoped to the current request, allowing data to be passed between different parts of the request lifecycle.

```ts
app.use(async (c, next) => {
  c.set('message', 'Hono is cool!!')
  await next()
})

app.get('/', (c) => {
  const message = c.get('message')
  return c.text(`The message is "${message}"`) attention
})
```

--------------------------------

### Configure Bun.serve maxRequestBodySize for Large Requests

Source: https://hono.dev/docs/middleware/builtin/body-limit

Set the maxRequestBodySize property in Bun.serve configuration to accept request bodies larger than the default 128MiB limit. This configuration must be set in Bun to prevent the server from terminating connections before Hono receives the request. The example shows setting a 200MiB limit using byte calculation.

```typescript
export default {
  port: process.env['PORT'] || 3000,
  fetch: app.fetch,
  maxRequestBodySize: 1024 * 1024 * 200, // your value here
}
```

--------------------------------

### Create Factory instance with createFactory()

Source: https://context7_llms

Create a Factory instance that can be used to generate properly-typed Hono components. Supports passing Env types as generics and optional HonoOptions for default application configuration.

```typescript
import { createFactory } from 'hono/factory'

const factory = createFactory()
```

```typescript
type Env = {
  Variables: {
    foo: string
  }
}

const factory = createFactory<Env>()
```

```typescript
const factory = createFactory({
  defaultAppOptions: { strict: false },
})

const app = factory.createApp() // `strict: false` is applied
```

--------------------------------

### Analytics Initialization and Data Collection in JavaScript

Source: https://hono.dev/docs/guides/best-practices

Sets up Zaraz analytics tracking by collecting page metadata including viewport dimensions, location, referrer, color depth, and character set. Processes dataLayer entries and initializes deferred tracking queue. Loads analytics script with encoded configuration data and handles localStorage/sessionStorage for persistent tracking values.

```javascript
bH.zaraz.init=()=>{
  var bO=bI.getElementsByTagName(bK)[0];
  var bP=bI.createElement(bK);
  var bQ=bI.getElementsByTagName("title")[0];
  bQ&&(bH[bJ].t=bI.getElementsByTagName("title")[0].text);
  bH[bJ].x=Math.random();
  bH[bJ].w=bH.screen.width;
  bH[bJ].h=bH.screen.height;
  bH[bJ].j=bH.innerHeight;
  bH[bJ].e=bH.innerWidth;
  bH[bJ].l=bH.location.href;
  bH[bJ].r=bI.referrer;
  bH[bJ].k=bH.screen.colorDepth;
  bH[bJ].n=bI.characterSet;
  bH[bJ].o=(new Date).getTimezoneOffset();
  bP.defer=!0;
  bP.referrerPolicy="origin";
  bP.src="/cdn-cgi/zaraz/s.js?z="+btoa(encodeURIComponent(JSON.stringify(bH[bJ])));
  bO.parentNode.insertBefore(bP,bO);
};
```

--------------------------------

### Customize Hono IP Restriction Error Response

Source: https://context7_llms

This example illustrates how to provide a custom error response when an IP address is denied by the `ipRestriction` middleware. It uses a third argument, an asynchronous function, to return a `Response` with a custom message and a 403 status code, indicating the blocking of a specific remote address.

```ts
app.use(
  '*',
  ipRestriction(
    getConnInfo,
    {
      denyList: ['192.168.2.0/24']
    },
    async (remote, c) => {
      return c.text(`Blocking access from ${remote.addr}`, 403)
    }
  )
)
```

--------------------------------

### Configure AWS Lambda Function URL for Response Streaming (CDK Diff)

Source: https://hono.dev/docs/getting-started/aws-lambda

This `diff` snippet illustrates how to enable response streaming for an AWS Lambda Function URL. It shows the addition of `invokeMode: lambda.InvokeMode.RESPONSE_STREAM` to the function URL configuration, typically within an AWS CDK or similar infrastructure-as-code setup.

```diff
fn.addFunctionUrl({
  authType: lambda.FunctionUrlAuthType.NONE,
+  invokeMode: lambda.InvokeMode.RESPONSE_STREAM,
})
```

--------------------------------

### Deploy Hono Application to Google Cloud Run

Source: https://context7_llms

This command deploys the Hono application to Google Cloud Run. It builds a container image from the current directory and deploys it, allowing unauthenticated access. Users will be prompted for configuration details like region.

```sh
gcloud run deploy my-app --source . --allow-unauthenticated
```

--------------------------------

### Validate Hono API Query Parameters with Zod (TypeScript)

Source: https://context7_llms

This code shows how to integrate Zod for input validation on a Hono GET endpoint. It uses `zValidator` middleware to define a schema for query parameters, ensuring that the 'name' parameter is a string before processing the request. This enhances API robustness and type safety.

```ts
import { zValidator } from '@hono/zod-validator'
import * as z from 'zod'

app.get(
  '/hello',
  zValidator(
    'query',
    z.object({
      name: z.string()
    })
  ),
  (c) => {
    const { name } = c.req.valid('query')
    return c.json({
      message: `Hello! ${name}`
    })
  }
)
```

--------------------------------

### Apply Global Error Response Types to Hono RPC Client

Source: https://hono.dev/docs/guides/rpc

This example shows how to use the `ApplyGlobalResponse` type helper to merge global error handler response types (defined via `app.onError()`) into all routes for a Hono RPC client. This ensures the client is aware of potential error responses alongside successful ones.

```ts
import type { ApplyGlobalResponse } from 'hono/client'

const app = new Hono()
  .get('/api/users', (c) => c.json({ users: ['alice', 'bob'] }, 200))
  .onError((err, c) => c.json({ error: err.message }, 500))

type AppWithErrors = ApplyGlobalResponse<
  typeof app,
  {
    500: { json: { error: string } }
  }
>

const client = hc<AppWithErrors>('http://localhost')
```

--------------------------------

### Apply Multiple Plugins to Hono SSG

Source: https://context7_llms

Demonstrates applying multiple SSG plugins together including custom plugins like getOnlyPlugin, statusFilterPlugin, logFilesPlugin, and sitemapPlugin to the toSSG function.

```typescript
import app from './index'
import { toSSG } from 'hono/ssg'
import { sitemapPlugin } from './plugins'

toSSG(app, fs, {
  plugins: [
    getOnlyPlugin,
    statusFilterPlugin,
    logFilesPlugin,
    sitemapPlugin('https://example.com'),
  ],
})
```

--------------------------------

### Create Encrypted HTTP/2 Server with TLS

Source: https://hono.dev/docs/getting-started/nodejs

Configure a secure HTTP/2 server using createSecureServer with TLS certificates. This requires providing key and cert files in serverOptions. The certificates (localhost-privkey.pem and localhost-cert.pem) must be present in the project root.

```typescript
import { createSecureServer } from 'node:http2'
import { readFileSync } from 'node:fs'

const server = serve({
  fetch: app.fetch,
  createServer: createSecureServer,
  serverOptions: {
    key: readFileSync('localhost-privkey.pem'),
    cert: readFileSync('localhost-cert.pem'),
  },
})
```

--------------------------------

### Handle Hono RPC Client Responses by Status Code

Source: https://hono.dev/docs/guides/rpc

This client-side snippet demonstrates how to handle different response types based on the HTTP status code received from a Hono server. It shows conditional logic for 404 and 200 responses and illustrates how to use `InferResponseType` to get specific types for different status codes.

```ts
// client.ts
const client = hc<AppType>('http://localhost:8787/')

const res = await client.posts.$get({
  query: {
    id: '123',
  },
})

if (res.status === 404) {
  const data: { error: string } = await res.json()
  console.log(data.error)
}

if (res.ok) {
  const data: { post: Post } = await res.json()
  console.log(data.post)
}

// { post: Post } | { error: string }
type ResponseType = InferResponseType<typeof client.posts.$get>

// { post: Post }
type ResponseType200 = InferResponseType<
  typeof client.posts.$get,
  200
>
```

--------------------------------

### Cookie Helper Functions - Set, Get, and Delete Cookies

Source: https://context7_llms

The Cookie Helper provides functions to manage HTTP cookies seamlessly. It enables setting regular and signed cookies, retrieving cookie values, deleting cookies, and generating cookie strings. This helper abstracts cookie handling complexity across different runtime environments.

```APIDOC
## Cookie Helper Functions

### Description
Provides an easy interface to manage cookies, enabling developers to set, parse, retrieve, delete, and generate cookies with optional signing support.

### Import
```ts
import { Hono } from 'hono'
import {
  deleteCookie,
  getCookie,
  getSignedCookie,
  setCookie,
  setSignedCookie,
  generateCookie,
  generateSignedCookie
} from 'hono/cookie'
```

### Available Functions

#### setCookie()
Sets a regular cookie in the response.
```ts
setCookie(c, 'cookie_name', 'cookie_value', options?)
```

#### getCookie()
Retrieves a cookie value from the request or all cookies if no name is specified.
```ts
const value = getCookie(c, 'cookie_name')
const allCookies = getCookie(c)
```

#### deleteCookie()
Deletes a cookie by setting its expiration to the past.
```ts
deleteCookie(c, 'cookie_name')
```

#### setSignedCookie()
Sets a signed cookie with cryptographic verification.
```ts
setSignedCookie(c, 'cookie_name', 'cookie_value', 'secret_key', options?)
```

#### getSignedCookie()
Retrieves and verifies a signed cookie.
```ts
const value = getSignedCookie(c, 'secret_key', 'cookie_name')
```

#### generateCookie()
Generates a cookie string without setting it in the response.
```ts
const cookieString = generateCookie('cookie_name', 'cookie_value', options?)
```

#### generateSignedCookie()
Generates a signed cookie string without setting it in the response.
```ts
const cookieString = generateSignedCookie('cookie_name', 'cookie_value', 'secret_key', options?)
```

### Usage Example
```ts
app.get('/cookie', (c) => {
  setCookie(c, 'cookie_name', 'cookie_value')
  const yummyCookie = getCookie(c, 'cookie_name')
  deleteCookie(c, 'cookie_name')
  const allCookies = getCookie(c)
  return c.text('Cookie operations completed')
})
```
```

--------------------------------

### Import WebSocket Helper - Bun

Source: https://context7_llms

Import Hono, upgradeWebSocket, and websocket from the Bun adapter to enable WebSocket support in Bun runtime. The websocket object must be exported in the default export.

```typescript
import { Hono } from 'hono'
import { upgradeWebSocket, websocket } from 'hono/bun'

// ...

export default {
  fetch: app.fetch,
  websocket,
}
```

--------------------------------

### Modify Response Object Headers in Hono Middleware (c.res)

Source: https://context7_llms

This example shows how to access and modify the underlying `Response` object's headers within a Hono middleware using `c.res`. This is useful for adding cross-cutting concerns like debugging information or security headers after the main route handler has executed.

```ts
import { Hono } from 'hono'
const app = new Hono()
app.use('/', async (c, next) => {
  await next()
  c.res.headers.append('X-Debug', 'Debug message')
})
```

--------------------------------

### createFactory(options) - defaultAppOptions

Source: https://hono.dev/docs/helpers/factory

Configures the `createFactory` function with default options that will be applied to Hono applications created by `factory.createApp()`.

```APIDOC
## FUNCTION createFactory(options) - defaultAppOptions

### Description
This section describes how to configure the `createFactory` function by providing `defaultAppOptions`. These options are then automatically applied to any Hono application instance created using `factory.createApp()`, ensuring consistent application settings.

### Method
N/A (Configuration Option)

### Endpoint
N/A (Function Configuration)

### Parameters
#### Request Body
- **defaultAppOptions** (object) - Optional - An object containing default options to pass to the Hono application created by `createApp()`.
    - **strict** (boolean) - Optional - Example option for `HonoOptions`, e.g., `false` to disable strict mode.

### Request Example
```ts
const factory = createFactory({
  defaultAppOptions: { strict: false },
})

const app = factory.createApp() // `strict: false` is applied
```

### Response
#### Success Response (N/A)
- **factoryInstance** (object) - Returns a configured factory instance.

#### Response Example
```json
// No direct JSON response, returns a factory instance.
```
```

--------------------------------

### Initialize VitePress Theme Appearance in JavaScript

Source: https://hono.dev/docs/middleware/builtin/cache

This self-executing JavaScript function initializes the theme appearance for a VitePress application. It checks for a saved preference in localStorage or the user's system dark mode setting and applies the 'dark' class to the document's root element if appropriate.

```javascript
(()=>{const e=localStorage.getItem("vitepress-theme-appearance")||"auto",a=window.matchMedia("(prefers-color-scheme: dark)").matches;(!e||e==="auto"?a:e==="dark")&&document.documentElement.classList.add("dark")})();
```

--------------------------------

### POST /api/todo

Source: https://hono.dev/docs/concepts/stacks

Creates a new todo item. The request body expects 'id' and 'title' fields.

```APIDOC
## POST /api/todo

### Description
Creates a new todo item and adds it to the list. The request body is validated against a Zod schema.

### Method
POST

### Endpoint
/api/todo

### Parameters
#### Path Parameters
(None)

#### Query Parameters
(None)

#### Request Body
- **id** (string) - Required - Unique identifier for the todo item.
- **title** (string) - Required - The title or description of the todo item.

### Request Example
{
  "id": "1678886400000",
  "title": "Write code"
}

### Response
#### Success Response (200)
- **message** (string) - A confirmation message indicating the todo was created.

#### Response Example
{
  "message": "created!"
}
```

--------------------------------

### Hono API Server with Zod Validation for Cloudflare Pages (TypeScript)

Source: https://context7_llms

This code defines a Hono API server designed for Cloudflare Pages, demonstrating POST and GET endpoints for a todo list. It integrates Zod for request body validation (`zValidator('form', schema)`) and exports the `AppType` for RPC client generation. The `handle` function from `hono/cloudflare-pages` is used to expose the API.

```ts
// functions/api/[[route]].ts
import { Hono } from 'hono'
import { handle } from 'hono/cloudflare-pages'
import * as z from 'zod'
import { zValidator } from '@hono/zod-validator'

const app = new Hono()

const schema = z.object({
  id: z.string(),
  title: z.string()
})

type Todo = z.infer<typeof schema>

const todos: Todo[] = []

const route = app
  .post('/todo', zValidator('form', schema), (c) => {
    const todo = c.req.valid('form')
    todos.push(todo)
    return c.json({
      message: 'created!'
    })
  })
  .get((c) => {
    return c.json({
      todos
    })
  })

export type AppType = typeof route

export const onRequest = handle(app, '/api')
```

--------------------------------

### Hono Hello World Application with Port Configuration (TypeScript)

Source: https://context7_llms

This TypeScript code defines a basic Hono application that responds with 'Hello Hono!' on the root path. It uses `@hono/node-server` to serve the application and explicitly sets the server port to `8080`.

```ts
import { serve } from '@hono/node-server'
import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

serve({
  fetch: app.fetch,
  port: 3000 // [!code --]
  port: 8080 // [!code ++]
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})
```

--------------------------------

### Apply Basic Authentication Middleware on Cloudflare Pages

Source: https://context7_llms

Shows how to use Hono's built-in Basic Authentication middleware with Cloudflare Pages through `handleMiddleware`. This protects routes with username and password credentials. The middleware is wrapped to work with Cloudflare Pages' middleware system.

```ts
// functions/_middleware.ts
import { handleMiddleware } from 'hono/cloudflare-pages'
import { basicAuth } from 'hono/basic-auth'

export const onRequest = handleMiddleware(
  basicAuth({
    username: 'hono',
    password: 'acoolproject',
  })
)
```

--------------------------------

### Deno: Testing Hono Application

Source: https://context7_llms

This code snippet demonstrates how to test a Hono application in Deno using `Deno.test` and assertions from the `@std/assert` module. It defines a simple Hono app and tests its response status.

```TypeScript
import { Hono } from 'hono'
import { assertEquals } from '@std/assert'

Deno.test('Hello World', async () => {
  const app = new Hono()
  app.get('/', (c) => c.text('Please test me'))

  const res = await app.request('http://localhost/')
  assertEquals(res.status, 200)
})
```

--------------------------------

### Get base path with embedded parameters in Hono

Source: https://hono.dev/docs/helpers/route

Demonstrates using basePath() to retrieve the base path with embedded parameters from the actual request. This function returns the base path that was matched, including any dynamic parameters from the route definition. Useful for determining the base path of a sub-application when handling requests to nested routes.

```typescript
const subApp = new Hono()
subApp.get('/posts/:id', (c) => {
  return c.text(basePath(c)) // '/api' (for request to '/api/posts/123')
})

app.route('/:sub', subApp)
```

--------------------------------

### Get base route path with index parameter in Hono

Source: https://hono.dev/docs/helpers/route

Demonstrates using baseRoutePath() with an optional index parameter to retrieve the base route path at a specific position in the matched routes. Similar to Array.prototype.at(), positive indices count from the first matched route and negative indices from the last. Useful for nested route applications where you need to identify which route matched at a particular level.

```typescript
app.all('/api/*', (c, next) => {
  return next()
})

const subApp = new Hono()
subApp.get('/users/:id', (c) => {
  console.log(baseRoutePath(c, 0)) // '/' (first matched route)
  console.log(baseRoutePath(c, -1)) // '/api' (last matched route)
  return c.text('User details')
})

app.route('/api', subApp)
```

--------------------------------

### Initialize Azure Functions TypeScript Project

Source: https://context7_llms

Command to initialize a new Azure Functions project configured for TypeScript (Node.js V4) in the current directory. This sets up the basic project structure and necessary configuration files.

```sh
func init --typescript
```

--------------------------------

### Access Custom Type-Safe Context Variables in Hono Handler

Source: https://hono.dev/docs/api/context

This example illustrates how to retrieve a custom variable from the Hono context within a handler using `c.get()`. Due to the prior extension of `ContextVariableMap`, the `val` variable is automatically inferred as the correct type (string in this case), ensuring type safety and improving developer experience.

```ts
    app.get('/', (c) => {
      const val = c.get('result') // val is a string
      // ...
      return c.json({ result: val })
    })
```

--------------------------------

### Create Hono Project - Offline Mode with Deno Template

Source: https://context7_llms

Initializes a Hono project using cached templates without requiring network access. This is beneficial for offline environments or when you need deterministic builds using local cached templates with the Deno runtime.

```bash
pnpm create hono@latest my-app --template deno --offline
```

--------------------------------

### Get Current Hono Route Path Pattern with `routePath()`

Source: https://context7_llms

This snippet demonstrates the `routePath()` function, which returns the registered route path pattern for the current handler. It also shows how to use an optional index parameter to retrieve the path pattern of a specific matched route, similar to `Array.prototype.at()`, useful when multiple routes or middleware match.

```ts
app.get('/posts/:id', (c) => {
  console.log(routePath(c)) // '/posts/:id'
  return c.text('Post details')
})
```

```ts
app.all('/api/*', (c, next) => {
  return next()
})

app.get('/api/users/:id', (c) => {
  console.log(routePath(c, 0)) // '/api/*' (first matched route)
  console.log(routePath(c, -1)) // '/api/users/:id' (last matched route)
  return c.text('User details')
})
```

--------------------------------

### Build Hono Application with bun

Source: https://hono.dev/docs/getting-started/nodejs

Execute the build script using bun package manager. This compiles the Hono application for production deployment.

```shell
bun run build
```

--------------------------------

### Handle Streaming Errors in Hono Callback

Source: https://hono.dev/docs/helpers/streaming

Shows error handling within Hono's streaming helper callback. When an error occurs during streaming, the onError event handler cannot be triggered because the stream has already started. Errors must be handled within the callback function itself using stream methods like writeln().

```javascript
(err, stream) => {
  stream.writeln('An error occurred!')
  console.error(err)
}
```

--------------------------------

### onAuthSuccess Callback Configuration

Source: https://hono.dev/docs/middleware/builtin/basic-auth

Configure the onAuthSuccess callback to execute custom logic after successful basic authentication. This callback receives the Context object and the authenticated username, allowing you to set context variables or perform side effects.

```APIDOC
## onAuthSuccess Callback

### Description
An optional callback function invoked after successful authentication in Hono's basicAuth middleware. This allows you to set context variables or perform side effects without re-parsing the Authorization header.

### Signature
```typescript
onAuthSuccess: (c: Context, username: string) => void | Promise<void>
```

### Parameters
#### Function Parameters
- **c** (Context) - Required - The Hono Context object for the current request
- **username** (string) - Required - The authenticated username extracted from the Authorization header

### Usage
The callback is passed as an option to the basicAuth middleware and is executed only after successful authentication.

### Request Example
```typescript
app.use(
  '/auth/*',
  basicAuth({
    username: 'hono',
    password: 'acoolproject',
    onAuthSuccess: (c, username) => {
      c.set('username', username)
    }
  })
)
```

### Response
After the onAuthSuccess callback executes, the request proceeds to the next middleware or route handler.

#### Example Route Handler
```typescript
app.get('/auth/page', (c) => {
  const username = c.get('username')
  return c.text(`Hello, ${username}!`)
})
```

### Use Cases
- Setting authenticated username in context for use in route handlers
- Logging authentication events
- Initializing user-specific context variables
- Performing side effects after successful authentication

### Return Value
- **void** - Synchronous callback with no return value
- **Promise<void>** - Asynchronous callback for operations requiring async/await
```

--------------------------------

### FUNCTION createMiddleware()

Source: https://context7_llms

A shortcut for `factory.createMiddleware()`, this function helps in creating custom Hono middleware with simplified type handling.

```APIDOC
## FUNCTION createMiddleware()

### Description
`createMiddleware()` is a utility function, often a shortcut for `factory.createMiddleware()`, designed to simplify the creation of custom Hono middleware. It allows for easy integration of logic before or after route handling.

### Method
FUNCTION

### Endpoint
createMiddleware<Env>(handler)

### Parameters
#### Arguments
- **handler** (MiddlewareHandler) - Required - The asynchronous function that defines the middleware logic, receiving `c` (Context) and `next` (NextFunction) as arguments.

#### Options
(None)

#### Request Body
(None)

### Request Example
```ts
import { createMiddleware } from 'hono/factory'

// Basic middleware
const messageMiddleware = createMiddleware(async (c, next) => {
  await next()
  c.res.headers.set('X-Message', 'Good morning!')
})

// Middleware with arguments
const messageMiddlewareWithArg = (message: string) => {
  return createMiddleware(async (c, next) => {
    await next()
    c.res.headers.set('X-Message', message)
  })
}
// Usage: app.use(messageMiddlewareWithArg('Good evening!'))
```

### Response
#### Success Response (MiddlewareHandler)
- **middleware** (MiddlewareHandler) - A Hono middleware function.

#### Response Example
```ts
// The returned value is a middleware function that can be used with app.use()
const myMiddleware = async (c, next) => { /* ... */ }
```
```

--------------------------------

### Hono Application Bundle Size Measurement

Source: https://hono.dev/docs

This snippet shows the console output from `npx wrangler dev`, illustrating Hono's small bundle size for a Cloudflare Workers application. It demonstrates how Hono remains lightweight, with its minified size under 14KB, contributing to faster deployments and execution.

```console
$ npx wrangler dev --minify ./src/index.ts
 ⛅️ wrangler 2.20.0
--------------------
⬣ Listening at http://0.0.0.0:8787
- http://127.0.0.1:8787
- http://192.168.128.165:8787
Total Upload: 11.47 KiB / gzip: 4.34 KiB
```

--------------------------------

### Deploy Hono App to Cloudflare Workers using `app.fetch`

Source: https://hono.dev/docs/api/hono

This code shows the standard way to deploy a Hono application to Cloudflare Workers. It exports an object with a `fetch` method that delegates to `app.fetch`, making the Hono app the entry point for handling incoming requests.

```ts
export default {
  fetch(request: Request, env: Env, ctx: ExecutionContext) {
    return app.fetch(request, env, ctx)
  }
}
```

--------------------------------

### Calling Hono Client with Multiple Path Parameters

Source: https://context7_llms

This code shows how to construct a client-side request using `hono/client` for a route with multiple path parameters. Parameters are specified by chaining `[':paramName']` and providing an object to the `param` property.

```ts
const res = await client.posts[':postId'][':authorId'].$get({
  param: {
    postId: '123',
    authorId: '456',
  },
  query: {},
})
```

--------------------------------

### Configure Hono default app options with createFactory (TypeScript)

Source: https://hono.dev/docs/helpers/factory

This snippet demonstrates how to set default options for Hono applications created by `createApp()` using `createFactory()`. It shows how to apply a configuration, such as `strict: false`, globally to all apps instantiated from the factory.

```typescript
const factory = createFactory({
  defaultAppOptions: { strict: false },
})

const app = factory.createApp() // `strict: false` is applied
```

--------------------------------

### Import Hono Tiny Preset (TypeScript)

Source: https://context7_llms

This snippet shows the import statement for the `Hono` class when using the `/tiny` preset. The `tiny` preset is designed for environments with severe resource constraints, offering the smallest router package footprint.

```ts
import { Hono } from 'hono/tiny'
```

--------------------------------

### Create Cloudflare KV Namespace for Local Development

Source: https://context7_llms

This `wrangler` command creates a new Key-Value (KV) namespace named `MY_KV` for local development and preview purposes. It outputs a `preview_id` which is necessary to link this KV namespace in your `wrangler.toml` configuration.

```sh
wrangler kv namespace create MY_KV --preview
```

--------------------------------

### Detect Current Runtime using Hono's `getRuntimeKey()` function in TypeScript

Source: https://hono.dev/docs/helpers/adapter

This code demonstrates how to use the `getRuntimeKey()` function to identify the current execution environment of the Hono application. It allows for conditional logic based on the detected runtime, such as 'workerd' for Cloudflare or 'bun' for Bun, enabling platform-specific responses or configurations within a single codebase.

```typescript
app.get('/', (c) => {
  if (getRuntimeKey() === 'workerd') {
    return c.text('You are on Cloudflare')
  } else if (getRuntimeKey() === 'bun') {
    return c.text('You are on Bun')
  }
  ...
})
```

--------------------------------

### Handle Not Found Files with onNotFound Callback

Source: https://context7_llms

Shows how to use the onNotFound callback in serveStatic to log or handle cases when a requested static file is not found.

```typescript
app.get(
  '/static/*',
  serveStatic({
    onNotFound: (path, c) => {
      console.log(`${path} is not found, you access ${c.req.path}`)
    },
  })
)
```

--------------------------------

### Creating a React Client with React Query for Hono API

Source: https://hono.dev/docs/concepts/stacks

This React component demonstrates how to consume the Hono API using `hono/client` and `react-query`. It includes fetching todos, adding new todos via mutation, and invalidating queries for UI updates, providing a type-safe client-side experience.

```tsx
// src/App.tsx
import {
  useQuery,
  useMutation,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { AppType } from '../functions/api/[[route]]'
import { hc, InferResponseType, InferRequestType } from 'hono/client'

const queryClient = new QueryClient()
const client = hc<AppType>('/api')

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Todos />
    </QueryClientProvider>
  )
}

const Todos = () => {
  const query = useQuery({
    queryKey: ['todos'],
    queryFn: async () => {
      const res = await client.todo.$get()
      return await res.json()
    },
  })

  const $post = client.todo.$post

  const mutation = useMutation<
    InferResponseType<typeof $post>,
    Error,
    InferRequestType<typeof $post>['form']
  >({
    mutationFn: async (todo) => {
      const res = await $post({
        form: todo,
      })
      return await res.json()
    },
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] })
    },
    onError: (error) => {
      console.log(error)
    },
  })

  return (
    <div>
      <button
        onClick={() => {
          mutation.mutate({
            id: Date.now().toString(),
            title: 'Write code',
          })
        }}
      >
        Add Todo
      </button>

      <ul>
        {query.data?.todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  )
}
```

--------------------------------

### Bearer Auth Middleware - Configuration Options

Source: https://context7_llms

Complete reference for all bearer authentication middleware configuration options including token validation, custom headers, and error handling.

```APIDOC
## Bearer Auth Middleware - Configuration Options

### Required Options

#### token: string | string[]
- **Type**: string or array of strings
- **Description**: The token(s) to validate incoming bearer tokens against
- **Example**: `{ token: 'secret-token' }` or `{ token: ['token1', 'token2'] }`

### Optional Options

#### realm: string
- **Type**: string
- **Default**: `""`
- **Description**: The domain name of the realm, included in WWW-Authenticate challenge header
- **Reference**: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/WWW-Authenticate#directives

#### prefix: string
- **Type**: string
- **Default**: `"Bearer"`
- **Description**: The schema/prefix for the Authorization header value
- **Example**: `{ prefix: 'Bearer' }` or `{ prefix: 'Token' }`

#### headerName: string
- **Type**: string
- **Default**: `"Authorization"`
- **Description**: The header name to check for authentication

#### hashFunction: Function
- **Type**: Function
- **Description**: Function to handle hashing for safe token comparison

#### verifyToken: (token: string, c: Context) => boolean | Promise<boolean>
- **Type**: Function
- **Description**: Custom function to verify the token
- **Parameters**:
  - token (string): The bearer token
  - c (Context): Hono context object
- **Returns**: boolean or Promise<boolean>

#### noAuthenticationHeader: object
- **Description**: Customizes error response when authentication header is missing
- **Properties**:
  - wwwAuthenticateHeader: string | object | MessageFunction
  - message: string | object | MessageFunction

#### invalidAuthenticationHeader: object
- **Description**: Customizes error response when header format is invalid
- **Properties**:
  - wwwAuthenticateHeader: string | object | MessageFunction
  - message: string | object | MessageFunction

#### invalidToken: object
- **Description**: Customizes error response when token is invalid
- **Properties**:
  - wwwAuthenticateHeader: string | object | MessageFunction
  - message: string | object | MessageFunction

### MessageFunction Type
```ts
type MessageFunction = (c: Context) => string | object | Promise<string | object>
```
```

--------------------------------

### Import Server-Timing Middleware Components in Hono

Source: https://context7_llms

This snippet shows the necessary imports for using the `Server-Timing` middleware in Hono. It includes importing the main `timing` middleware, utility functions like `setMetric`, `startTime`, `endTime`, `wrapTime`, and the `TimingVariables` type for type safety, enabling performance metric collection in response headers.

```ts
import { Hono } from 'hono'
import {
  timing,
  setMetric,
  startTime,
  endTime,
  wrapTime
} from 'hono/timing'
import type { TimingVariables } from 'hono/timing'
```

--------------------------------

### Hono Routing Methods

Source: https://context7_llms

An overview of the primary methods used for defining routes and middleware in a Hono application, including `HTTP_METHOD`, `all`, `on`, `use`, `route`, and `basePath`.

```APIDOC
## Hono Routing Methods

### Description
These methods are fundamental for defining routes and applying middleware within a Hono application. They form the core of Hono's routing capabilities, allowing you to specify how different HTTP methods and paths are handled. For detailed usage and examples, refer to the dedicated routing section of the Hono documentation.

### Method
GET, POST, PUT, DELETE, PATCH, OPTIONS, HEAD (for app.HTTP_METHOD), N/A (for others like app.use)

### Endpoint
`/[path]`

### Parameters
#### Path Parameters
- **path** (string) - Optional - The URL path or path pattern to match for the route or middleware. Can include dynamic segments.

#### Query Parameters
N/A

#### Request Body
N/A

### Request Example
```typescript
import { Hono } from 'hono';
const app = new Hono();

// Example: Defining a GET route
app.get('/users', (c) => c.json({ message: 'List of users' }));

// Example: Applying middleware to a path prefix
app.use('/admin/*', (c, next) => {
  console.log('Admin middleware triggered');
  return next();
});

// Example: Handling all HTTP methods for a path
app.all('/data', (c) => c.text('Data endpoint'));
```

### Response
N/A (Responses are defined by the handler functions for each route.)
```

--------------------------------

### Theme Appearance Detection and Application - JavaScript

Source: https://hono.dev/docs/concepts/web-standard

Initializes theme appearance by checking localStorage for saved preference or system preference, then applies dark class to document element if needed. Also detects Mac platform and toggles appropriate class. This runs immediately on page load to prevent theme flashing.

```javascript
(()=>{
  const e=localStorage.getItem("vitepress-theme-appearance")||"auto";
  const a=window.matchMedia("(prefers-color-scheme: dark)").matches;
  (!e||e==="auto"?a:e==="dark")&&document.documentElement.classList.add("dark");
})();
document.documentElement.classList.toggle("mac",/Mac|iPhone|iPod|iPad/i.test(navigator.platform));
```

--------------------------------

### Implementing Middleware in Hono (TypeScript)

Source: https://hono.dev/docs

This TypeScript snippet demonstrates how to easily integrate built-in middleware like ETag and Logger into a Hono application. It shows importing `Hono` and specific middleware functions, then applying them to the application instance using `app.use()` for enhanced functionality.

```ts
import { Hono } from 'hono'
import { etag } from 'hono/etag'
import { logger } from 'hono/logger'

const app = new Hono()
app.use(etag(), logger())
```

--------------------------------

### Deploy Hono app to Azure Cloud Functions

Source: https://context7_llms

Azure CLI command to publish a built Hono project to Azure Function App. Requires Azure resources to be pre-configured and the function app name to be specified. Uses the Azure Functions Core Tools 'func' command.

```shell
func azure functionapp publish <YourFunctionAppName>
```

--------------------------------

### Deploy Hono App to Bun with Custom Port

Source: https://hono.dev/docs/api/hono

This snippet demonstrates how to deploy a Hono application on Bun, specifying a custom port. It exports an object that includes the `port` and assigns `app.fetch` as the handler for incoming requests, allowing the Bun runtime to serve the Hono application.

```ts
export default {
  port: 3000,
  fetch: app.fetch
}
```

--------------------------------

### Apply Default Plugin in Hono SSG (TypeScript)

Source: https://hono.dev/docs/helpers/ssg

This snippet shows how the `defaultPlugin` is automatically applied by `toSSG` when no plugins are explicitly specified, skipping non-200 status responses. It also demonstrates how to explicitly include `defaultPlugin` for clarity or when combining with other plugins.

```ts
import { toSSG, defaultPlugin } from 'hono/ssg'

// defaultPlugin is automatically applied when no plugins specified
toSSG(app, fs)

// Equivalent to:
toSSG(app, fs, { plugins: [defaultPlugin] })
```

--------------------------------

### getConnInfo() - Connection Information Helper

Source: https://context7_llms

The getConnInfo() helper retrieves connection information from the HTTP request context, such as the client's remote address, port, and transport protocol. This function provides a unified interface across multiple runtimes including Cloudflare Workers, Deno, Bun, Vercel, Lambda@Edge, and Node.js.

```APIDOC
## getConnInfo()

### Description
Retrieves HTTP connection information including remote address, port, and transport protocol from the request context.

### Import
```ts
import { Hono } from 'hono'
import { getConnInfo } from 'hono/cloudflare-workers'
// or
import { getConnInfo } from 'hono/deno'
// or
import { getConnInfo } from 'hono/bun'
// or
import { getConnInfo } from 'hono/vercel'
// or
import { getConnInfo } from 'hono/lambda-edge'
// or
import { getConnInfo } from '@hono/node-server/conninfo'
```

### Usage
```ts
const app = new Hono()

app.get('/', (c) => {
  const info = getConnInfo(c)
  return c.text(`Your remote address is ${info.remote.address}`)
})
```

### Parameters
#### Function Parameters
- **c** (Context) - Required - The Hono context object

### Response
#### ConnInfo Type
```ts
interface ConnInfo {
  remote: NetAddrInfo
}

type NetAddrInfo = {
  transport?: 'tcp' | 'udp'
  port?: number
  address?: string
  addressType?: 'IPv6' | 'IPv4' | undefined
}
```

### Response Example
```ts
{
  "remote": {
    "address": "192.168.1.100",
    "addressType": "IPv4",
    "port": 54321,
    "transport": "tcp"
  }
}
```
```

--------------------------------

### Configure Rolldown for WebAssembly Component Bundling

Source: https://context7_llms

Create a Rolldown configuration file (rolldown.config.mjs) to bundle TypeScript source into a single ESM JavaScript file for WebAssembly componentization. Excludes WASI external dependencies and outputs to dist/component.js.

```javascript
import { defineConfig } from 'rolldown'

export default defineConfig({
  input: 'src/component.ts',
  external: /wasi:.*/,
  output: {
    file: 'dist/component.js',
    format: 'esm',
  },
})
```

--------------------------------

### Basic Web Standard Server Response in TypeScript

Source: https://hono.dev/docs/concepts/web-standard

A minimal server implementation using Web Standards that returns 'Hello World'. This code demonstrates the fundamental pattern that works across Cloudflare Workers, Deno, Bun, and other Web Standard-compliant runtimes without modification.

```typescript
export default {
  async fetch() {
    return new Response('Hello World')
  },
}
```

--------------------------------

### Create Hono Project - Non-Interactive with Template and Package Manager

Source: https://context7_llms

Creates a Hono project with specified template and package manager without interactive prompts. This approach is useful for automated scripts or CI/CD pipelines where you want to skip user interaction and directly specify the Vercel template with npm package manager.

```bash
npm create hono@latest my-app -- --template vercel --pm npm --install
```

--------------------------------

### Configure JWKS Fetch Request Options in Hono Middleware in TypeScript

Source: https://context7_llms

This snippet illustrates how to pass `RequestInit` options to the JWK middleware for customizing the fetch request used to retrieve JWKS from the `jwks_uri`. This allows for advanced configurations like adding authorization headers to the JWKS fetch itself.

```ts
const app = new Hono()

app.use(
  '/auth/*',
  jwk(
    {
      jwks_uri: `https://${backendServer}/.well-known/jwks.json`,
      alg: ['RS256']
    },
    {
      headers: {
        Authorization: 'Bearer TOKEN'
      }
    }
  )
)
```

--------------------------------

### Initialize Cloudflare Zaraz Analytics (JavaScript)

Source: https://hono.dev/docs/middleware/builtin/secure-headers

This comprehensive JavaScript block initializes Cloudflare Zaraz, a web analytics and security tool. It collects various client-side data (screen size, URL, referrer, timezone, etc.), sets up tracking functions, and injects the main Zaraz script. It also handles dynamic script execution and data fetching.

```javascript
try{(function(w,d){!function(bH,bI,bJ,bK){if(bH.zaraz)console.error("zaraz is loaded twice");else{bH[bJ]=bH[bJ]||{};bH[bJ].executed=[];bH.zaraz={deferred:[],listeners:[]};bH.zaraz._v="5876";bH.zaraz._n="fe1e7f84-6763-4853-81b3-54d24fe63821";bH.zaraz.q=[];bH.zaraz._f=function(bL){return async function(){var bM=Array.prototype.slice.call(arguments);bH.zaraz.q.push({m:bL,a:bM})}};for(const bN of["track","set","debug"])bH.zaraz[bN]=bH.zaraz._f(bN);bH.zaraz.init=()=>{var bO=bI.getElementsByTagName(bK)[0],bP=bI.createElement(bK),bQ=bI.getElementsByTagName("title")[0];bQ&&(bH[bJ].t=bI.getElementsByTagName("title")[0].text);bH[bJ].x=Math.random();bH[bJ].w=bH.screen.width;bH[bJ].h=bH.screen.height;bH[bJ].j=bH.innerHeight;bH[bJ].e=bH.innerWidth;bH[bJ].l=bH.location.href;bH[bJ].r=bI.referrer;bH[bJ].k=bH.screen.colorDepth;bH[bJ].n=bI.characterSet;bH[bJ].o=(new Date).getTimezoneOffset();if(bH.dataLayer)for(const bR of Object.entries(Object.entries(dataLayer).reduce((bS,bT)=>({...bS[1],...bT[1]}),{})))zaraz.set(bR[0],bR[1],{scope:"page"});bH[bJ].q=[];for(;bH.zaraz.q.length;){const bU=bH.zaraz.q.shift();bH[bJ].q.push(bU)}bP.defer=!0;for(const bV of[localStorage,sessionStorage])Object.keys(bV||{}).filter(bX=>bX.startsWith("_zaraz_")).forEach(bW=>{try{bH[bJ]["z_"+bW.slice(7)]=JSON.parse(bV.getItem(bW))}catch{bH[bJ]["z_"+bW.slice(7)]=bV.getItem(bW)}});bP.referrerPolicy="origin";bP.src="/cdn-cgi/zaraz/s.js?z="+btoa(encodeURIComponent(JSON.stringify(bH[bJ])));bO.parentNode.insertBefore(bP,bO)};["complete","interactive"].includes(bI.readyState)?zaraz.init():bH.addEventListener("DOMContentLoaded",zaraz.init)}}(w,d,"zarazData","script");window.zaraz._p=async bc=>new Promise(bd=>{if(bc){bc.e&&bc.e.forEach(be=>{try{const bf=d.querySelector("script[nonce]"),bg=bf?.nonce||bf?.getAttribute("nonce"),bh=d.createElement("script");bg&&(bh.nonce=bg);bh.innerHTML=be;bh.onload=()=>{d.head.removeChild(bh)};d.head.appendChild(bh)}catch(bi){console.error(`Error executing script: ${be}\n`,bi)}});Promise.allSettled((bc.f||[]).map(bj=>fetch(bj[0],bj[1])))}bd()});zaraz._p({"e":["(function(w,d){})(window,document)"]});})(window,document)}catch(e){throw fetch("/cdn-cgi/zaraz/t"),e;};
```

--------------------------------

### Create typed Hono app with factory.createApp()

Source: https://context7_llms

Create a Hono application instance with proper TypeScript types inherited from the factory. Eliminates redundancy by setting Env type only once in createFactory() instead of multiple locations.

```typescript
import { createFactory } from 'hono/factory'

type Env = {
  Variables: {
    myVar: string
  }
}

const factory = createFactory<Env>()

const app = factory.createApp()

const mw = factory.createMiddleware(async (c, next) => {
  await next()
})
```

--------------------------------

### Add Custom MIME Types to serveStatic

Source: https://context7_llms

Shows how to configure custom MIME types for file extensions using the mimes option in serveStatic, useful for serving specialized media formats.

```typescript
app.get(
  '/static/*',
  serveStatic({
    mimes: {
      m3u8: 'application/vnd.apple.mpegurl',
      ts: 'video/mp2t',
    },
  })
)
```

--------------------------------

### Initialize Hono RPC Client with AppType and Server URL

Source: https://hono.dev/docs/guides/rpc

This snippet demonstrates how to create an instance of the Hono RPC client using the `hc` function. It passes the `AppType` as a generic parameter to enable type inference and specifies the server's base URL, allowing the client to interact with the defined API endpoints.

```ts
const client = hc<AppType>('http://localhost:8787/')
```

--------------------------------

### Enable Google Cloud APIs and Configure Service Account

Source: https://context7_llms

Enable Cloud Run and Cloud Build APIs required for deploying Hono applications. Then update the default service account permissions to allow Cloud Build access by assigning the run.builder role.

```shell
gcloud services enable run.googleapis.com \
    cloudbuild.googleapis.com
```

```shell
gcloud projects add-iam-policy-binding $PROJECT_ID \
    --member=serviceAccount:$PROJECT_NUMBER-compute@developer.gserviceaccount.com \
    --role=roles/run.builder
```

--------------------------------

### Importing Hono and CSRF Middleware

Source: https://context7_llms

This snippet shows how to import the `Hono` application framework and the `csrf` middleware from the `hono/csrf` module. These imports are essential for setting up a Hono application with Cross-Site Request Forgery (CSRF) protection.

```ts
import { Hono } from 'hono'
import { csrf } from 'hono/csrf'
```

--------------------------------

### Integrate Zaraz Analytics and Script Loader in JavaScript

Source: https://hono.dev/docs/middleware/builtin/language

This extensive JavaScript snippet integrates Cloudflare Zaraz, a third-party analytics and script management solution. It initializes Zaraz, collects various user and browser data points (e.g., screen dimensions, URL, referrer, timezone offset), and provides mechanisms for tracking events and dynamically loading additional scripts. The script is designed to run asynchronously, ensuring minimal impact on page load performance, and includes error handling for script execution.

```javascript
try{(function(w,d){!function(bH,bI,bJ,bK){if(bH.zaraz)console.error("zaraz is loaded twice");else{bH[bJ]=bH[bJ]||{};bH[bJ].executed=[];bH.zaraz={deferred:[],listeners:[]};bH.zaraz._v="5876";bH.zaraz._n="7847b8b0-8aa7-465f-963b-1ed8ddf9a830";bH.zaraz.q=[];bH.zaraz._f=function(bL){return async function(){var bM=Array.prototype.slice.call(arguments);bH.zaraz.q.push({m:bL,a:bM})}};for(const bN of["track","set","debug"])bH.zaraz[bN]=bH.zaraz._f(bN);bH.zaraz.init=()=>{var bO=bI.getElementsByTagName(bK)[0],bP=bI.createElement(bK),bQ=bI.getElementsByTagName("title")[0];bQ&&(bH[bJ].t=bI.getElementsByTagName("title")[0].text);bH[bJ].x=Math.random();bH[bJ].w=bH.screen.width;bH[bJ].h=bH.screen.height;bH[bJ].j=bH.innerHeight;bH[bJ].e=bH.innerWidth;bH[bJ].l=bH.location.href;bH[bJ].r=bI.referrer;bH[bJ].k=bH.screen.colorDepth;bH[bJ].n=bI.characterSet;bH[bJ].o=(new Date).getTimezoneOffset();if(bH.dataLayer)for(const bR of Object.entries(Object.entries(dataLayer).reduce((bS,bT)=>({...bS[1],...bT[1]}),{})))zaraz.set(bR[0],bR[1],{scope:"page"});bH[bJ].q=[];for(;bH.zaraz.q.length;){const bU=bH.zaraz.q.shift();bH[bJ].q.push(bU)}bP.defer=!0;for(const bV of[localStorage,sessionStorage])Object.keys(bV||{}).filter(bX=>bX.startsWith("_zaraz_")).forEach(bW=>{try{bH[bJ]["z_"+bW.slice(7)]=JSON.parse(bV.getItem(bW))}catch{bH[bJ]["z_"+bW.slice(7)]=bV.getItem(bW)}});bP.referrerPolicy="origin";bP.src="/cdn-cgi/zaraz/s.js?z="+btoa(encodeURIComponent(JSON.stringify(bH[bJ])));bO.parentNode.insertBefore(bP,bO)};["complete","interactive"].includes(bI.readyState)?zaraz.init():bH.addEventListener("DOMContentLoaded",zaraz.init)}}(w,d,"zarazData","script");window.zaraz._p=async bc=>new Promise(bd=>{if(bc){bc.e&&bc.e.forEach(be=>{try{const bf=d.querySelector("script[nonce]"),bg=bf?.nonce||bf?.getAttribute("nonce"),bh=d.createElement("script");bg&&(bh.nonce=bg);bh.innerHTML=be;bh.onload=()=>{d.head.removeChild(bh)};d.head.appendChild(bh)}catch(bi){console.error(`Error executing script: ${be}\n`,bi)}});Promise.allSettled((bc.f||[]).map(bj=>fetch(bj[0],bj[1])))}bd()});zaraz._p({"e":["(function(w,d){})(window,document)"]});})(window,document)}catch(e){throw fetch("/cdn-cgi/zaraz/t"),e;};
```

--------------------------------

### Analytics Initialization with Zaraz - JavaScript

Source: https://hono.dev/docs/concepts/web-standard

Initializes Zaraz analytics tracking by collecting page metadata (dimensions, referrer, timezone, character set), merging dataLayer entries, and loading analytics script with encoded configuration. Handles localStorage/sessionStorage for persistent tracking data and supports deferred script execution with nonce for security.

```javascript
!function(bH,bI,bJ,bK){
  if(bH.zaraz)console.error("zaraz is loaded twice");
  else{
    bH[bJ]=bH[bJ]||{};
    bH[bJ].executed=[];
    bH.zaraz={deferred:[],listeners:[]};
    bH.zaraz._v="5876";
    bH.zaraz._n="1dd33fd2-1c20-424f-8b45-0817a1a40e87";
    bH.zaraz.q=[];
    bH.zaraz._f=function(bL){
      return async function(){
        var bM=Array.prototype.slice.call(arguments);
        bH.zaraz.q.push({m:bL,a:bM})
      }
    };
    for(const bN of["track","set","debug"])bH.zaraz[bN]=bH.zaraz._f(bN);
    bH.zaraz.init=()=>{
      var bO=bI.getElementsByTagName(bK)[0];
      var bP=bI.createElement(bK);
      var bQ=bI.getElementsByTagName("title")[0];
      bQ&&(bH[bJ].t=bI.getElementsByTagName("title")[0].text);
      bH[bJ].x=Math.random();
      bH[bJ].w=bH.screen.width;
      bH[bJ].h=bH.screen.height;
      bH[bJ].j=bH.innerHeight;
      bH[bJ].e=bH.innerWidth;
      bH[bJ].l=bH.location.href;
      bH[bJ].r=bI.referrer;
      bH[bJ].k=bH.screen.colorDepth;
      bH[bJ].n=bI.characterSet;
      bH[bJ].o=(new Date).getTimezoneOffset();
      if(bH.dataLayer){
        for(const bR of Object.entries(Object.entries(dataLayer).reduce((bS,bT)=>({...bS[1],...bT[1]}),{}))){
          zaraz.set(bR[0],bR[1],{scope:"page"})
        }
      }
      bH[bJ].q=[];
      for(;bH.zaraz.q.length;){
        const bU=bH.zaraz.q.shift();
        bH[bJ].q.push(bU)
      }
      bP.defer=!0;
      for(const bV of[localStorage,sessionStorage]){
        Object.keys(bV||{}).filter(bX=>bX.startsWith("_zaraz_")).forEach(bW=>{
          try{
            bH[bJ]["z_"+bW.slice(7)]=JSON.parse(bV.getItem(bW))
          }catch{
            bH[bJ]["z_"+bW.slice(7)]=bV.getItem(bW)
          }
        })
      }
      bP.referrerPolicy="origin";
      bP.src="/cdn-cgi/zaraz/s.js?z="+btoa(encodeURIComponent(JSON.stringify(bH[bJ])));
      bO.parentNode.insertBefore(bP,bO)
    };
    ["complete","interactive"].includes(bI.readyState)?zaraz.init():bH.addEventListener("DOMContentLoaded",zaraz.init)
  }
}(window,document,"zarazData","script");
```

--------------------------------

### Create Hono SSG Sitemap Plugin (TypeScript)

Source: https://hono.dev/docs/helpers/ssg

This TypeScript code defines an SSG plugin for Hono that generates a `sitemap.xml` file after the static site generation process completes. It takes a base URL as input, iterates through the generated files, constructs a sitemap XML string, and writes it to the specified output directory.

```typescript
// plugins.ts
import fs from 'node:fs/promises'
import path from 'node:path'
import type { SSGPlugin } from 'hono/ssg'
import { DEFAULT_OUTPUT_DIR } from 'hono/ssg'

export const sitemapPlugin = (baseURL: string): SSGPlugin => {
  return {
    afterGenerateHook: (result, fsModule, options) => {
      const outputDir = options?.dir ?? DEFAULT_OUTPUT_DIR
      const filePath = path.join(outputDir, 'sitemap.xml')
      const urls = result.files.map((file) =>
        new URL(file, baseURL).toString()
      )
      const siteMapText = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((url) => `<url><loc>${url}</loc></url>`).join('\n')}
</urlset>`
      fsModule.writeFile(filePath, siteMapText)
    }
  }
}
```

--------------------------------

### createMiddleware()

Source: https://hono.dev/docs/helpers/factory

A utility function to create custom Hono middleware. It can be used directly or as a higher-order function to accept arguments.

```APIDOC
## FUNCTION createMiddleware()

### Description
`createMiddleware()` is a shortcut for `factory.createMiddleware()`. This function allows you to define and create custom middleware for your Hono application, enabling logic to be executed before or after route handlers. It supports both direct middleware creation and higher-order functions for parameterized middleware.

### Method
N/A (Function Call)

### Endpoint
N/A (Function Call)

### Parameters
#### Request Body
- **middlewareFunction** (function) - Required - An asynchronous function `(c, next) => { ... }` that defines the middleware logic. `c` is the Hono context, and `next` is a function to call the next middleware or handler.
- **message** (string) - Optional - (When used as a higher-order function) A string argument passed to the middleware factory to customize its behavior.

### Request Example
```ts
// Basic usage
const messageMiddleware = createMiddleware(async (c, next) => {
  await next()
  c.res.headers.set('X-Message', 'Good morning!')
})

// Usage as a higher-order function
const messageMiddlewareWithArg = (message: string) => {
  return createMiddleware(async (c, next) => {
    await next()
    c.res.headers.set('X-Message', message)
  })
}

app.use(messageMiddlewareWithArg('Good evening!'))
```

### Response
#### Success Response (N/A)
- **middleware** (function) - Returns a Hono middleware function.

#### Response Example
```json
// No direct JSON response, returns a middleware function.
```
```

--------------------------------

### Combine Middleware - some()

Source: https://context7_llms

The some() middleware runs the first middleware that returns true in sequence. If any middleware exits successfully, subsequent middleware will not execute. This is useful for implementing alternative authentication or conditional rate limiting.

```APIDOC
## Combine Middleware - some()

### Description
Runs the first middleware that returns true. Middleware is applied in order, and if any middleware exits successfully, subsequent middleware will not run.

### Usage
Implement alternative authentication or conditional rate limiting by providing multiple middleware options.

### Parameters
- **middleware1** (Middleware) - Required - First middleware to evaluate
- **middleware2** (Middleware) - Required - Second middleware to evaluate
- **middlewareN** (Middleware) - Optional - Additional middleware to evaluate

### Request Example
```ts
import { some } from 'hono/combine'
import { bearerAuth } from 'hono/bearer-auth'
import { myRateLimit } from '@/rate-limit'

app.use(
  '/api/*',
  some(bearerAuth({ token }), myRateLimit({ limit: 100 }))
)
```

### Behavior
- If client has a valid token, skip rate limiting
- Otherwise, apply rate limiting
- Middleware execution stops at first successful middleware
```

--------------------------------

### Importing Hono Adapter Helper functions in TypeScript

Source: https://hono.dev/docs/helpers/adapter

This code snippet demonstrates how to import the necessary `Hono` class and the `env`, `getRuntimeKey` functions from the `hono/adapter` module. These imports are essential for utilizing the Adapter Helper's functionalities within a Hono application, enabling environment variable access and runtime detection.

```typescript
import { Hono } from 'hono'
import { env, getRuntimeKey } from 'hono/adapter'
```

--------------------------------

### Import Route Helper utilities in Hono

Source: https://hono.dev/docs/helpers/route

This snippet demonstrates how to import the necessary functions from 'hono/route' to utilize the Route Helper. It includes `matchedRoutes`, `routePath`, `baseRoutePath`, and `basePath` for accessing various routing details within your Hono application.

```ts
import { Hono } from 'hono'
import {
  matchedRoutes,
  routePath,
  baseRoutePath,
  basePath,
} from 'hono/route'
```

--------------------------------

### Build Hono Application with pnpm

Source: https://hono.dev/docs/getting-started/nodejs

Execute the build script using pnpm package manager. This compiles the Hono application for production deployment.

```shell
pnpm run build
```

--------------------------------

### Hono Tiny Preset Router Configuration (TypeScript)

Source: https://context7_llms

This code details the internal router configuration for the `hono/tiny` preset. It exclusively uses a `PatternRouter`, which is the most lightweight option, making it ideal for highly resource-limited environments where minimal overhead is crucial.

```ts
this.router = new PatternRouter()
```

--------------------------------

### Body Limit Middleware - Configuration Options

Source: https://context7_llms

Reference for body limit middleware configuration options including maximum size and error handling.

```APIDOC
## Body Limit Middleware - Configuration Options

### Required Options

#### maxSize: number
- **Type**: number
- **Default**: `100 * 1024` (100kb)
- **Description**: The maximum file size in bytes for request bodies
- **Example**: `{ maxSize: 50 * 1024 }` for 50kb limit

### Optional Options

#### onError: (c: Context) => Response
- **Type**: Function
- **Description**: Error handler called when body size exceeds maxSize
- **Parameters**:
  - c (Context): Hono context object
- **Returns**: Response object
- **Default**: Returns 413 Payload Too Large response
- **Example**:
```ts
onError: (c) => {
  return c.json({ error: 'File too large' }, 413)
}
```

### Common Size Examples
- 1kb: `1 * 1024`
- 10kb: `10 * 1024`
- 50kb: `50 * 1024`
- 100kb: `100 * 1024`
- 1mb: `1 * 1024 * 1024`
- 5mb: `5 * 1024 * 1024`
- 10mb: `10 * 1024 * 1024`
```

--------------------------------

### Benchmark Hono's LinearRouter performance (Console)

Source: https://hono.dev/docs/concepts/routers

This console output presents benchmark results comparing LinearRouter against other routers like MedleyRouter and FindMyWay for a specific route. It highlights LinearRouter's efficiency, especially in scenarios involving route registration, showing its performance in microseconds per iteration.

```console
• GET /user/lookup/username/hey
----------------------------------------------------- -----------------------------
LinearRouter     1.82 µs/iter      (1.7 µs … 2.04 µs)   1.84 µs   2.04 µs   2.04 µs
MedleyRouter     4.44 µs/iter     (4.34 µs … 4.54 µs)   4.48 µs   4.54 µs   4.54 µs
FindMyWay       60.36 µs/iter      (45.5 µs … 1.9 ms)  59.88 µs  78.13 µs  82.92 µs
```

--------------------------------

### Upload Files from Hono Client using Form Body (TypeScript)

Source: https://context7_llms

Demonstrates how to perform a file upload from the client side using the Hono client. It shows how to construct a `File` object and pass it within a `form` body to an endpoint.

```ts
// client
const res = await client.user.picture.$put({
  form: {
    file: new File([fileToUpload], filename, {
      type: fileToUpload.type,
    }),
  },
})
```

--------------------------------

### Create Factory Instance in TypeScript

Source: https://hono.dev/docs/helpers/factory

Initialize a Factory instance using createFactory(). This basic factory can be used to create typed components. Optionally pass Env types as generics to ensure proper type checking for Variables and other environment properties.

```typescript
import { createFactory } from 'hono/factory'

const factory = createFactory()
```

--------------------------------

### Serve Single File with serveStatic path Option

Source: https://hono.dev/docs/getting-started/nodejs

Use the path option in serveStatic to serve a specific file from the root directory. This is useful for serving files like favicon.ico that are located at the project root rather than in a subdirectory.

```typescript
app.use('/favicon.ico', serveStatic({ path: './favicon.ico' }))
```

--------------------------------

### Hono Performance Benchmark Comparison

Source: https://hono.dev/docs

This snippet displays the performance benchmark results comparing Hono with other routers for Cloudflare Workers, demonstrating Hono's superior speed. It shows operations per second for Hono, itty-router, sunder, and worktop, highlighting Hono as the fastest.

```console
Hono x 402,820 ops/sec ±4.78% (80 runs sampled)
itty-router x 212,598 ops/sec ±3.11% (87 runs sampled)
sunder x 297,036 ops/sec ±4.76% (77 runs sampled)
worktop x 197,345 ops/sec ±2.40% (88 runs sampled)
Fastest is Hono
✨  Done in 28.06s.
```

--------------------------------

### FUNCTION showRoutes()

Source: https://context7_llms

Displays the registered routes of a Hono application in the console, with optional verbose and colorized output.

```APIDOC
## FUNCTION showRoutes()

### Description
The `showRoutes()` function is used to display all registered routes within a Hono application instance directly in your console. It supports options for verbose output and colorization.

### Method
FUNCTION

### Endpoint
showRoutes(app, options)

### Parameters
#### Arguments
- **app** (Hono instance) - Required - The Hono application instance whose routes are to be displayed.

#### Options
- **verbose** (boolean) - Optional - When set to `true`, it displays verbose information about the routes. Default is `false`.
- **colorize** (boolean) - Optional - When set to `false`, the output will not be colored. Default is `true`.

#### Request Body
(None)

### Request Example
```ts
import { Hono } from 'hono'
import { showRoutes } from 'hono/dev'

const app = new Hono().basePath('/v1')

app.get('/posts', (c) => { /* ... */ })
app.get('/posts/:id', (c) => { /* ... */ })
app.post('/posts', (c) => { /* ... */ })

showRoutes(app, {
  verbose: true,
  colorize: false,
})
```

### Response
#### Success Response (void)
This function prints directly to the console and does not return a value.

#### Response Example
```txt
// Example console output
GET   /v1/posts
GET   /v1/posts/:id
POST  /v1/posts
```
```

--------------------------------

### Define `FileSystemModule` Interface for Hono SSG

Source: https://hono.dev/docs/helpers/ssg

This TypeScript interface outlines the essential file system operations (`writeFile` and `mkdir`) required by the `toSSG` function. It standardizes how `toSSG` interacts with different file systems, assuming compatibility with `node:fs/promise`.

```ts
export interface FileSystemModule {
  writeFile(path: string, data: string | Uint8Array): Promise<void>
  mkdir(
    path: string,
    options: { recursive: boolean }
  ): Promise<void | string>
}
```

--------------------------------

### Create a Basic Hono 'Hello World' Endpoint for Next.js Pages Router

Source: https://context7_llms

This TypeScript code defines a Hono application for the Next.js Pages Router, responding with a JSON message on `/api/hello`. It uses `@hono/node-server/vercel` for handling and disables `bodyParser` via `PageConfig` to ensure compatibility with Hono's request handling.

```ts
import { Hono } from 'hono'
import { handle } from '@hono/node-server/vercel'
import type { PageConfig } from 'next'

export const config: PageConfig = {
  api: {
    bodyParser: false,
  },
}

const app = new Hono().basePath('/api')

app.get('/hello', (c) => {
  return c.json({
    message: 'Hello Next.js!',
  })
})

export default handle(app)
```

--------------------------------

### app.request()

Source: https://context7_llms

A utility method for programmatically sending requests to the Hono application, primarily used for testing purposes.

```APIDOC
## app.request()

### Description
The `app.request` method provides a convenient way to simulate HTTP requests against your Hono application programmatically. It's particularly useful for writing unit and integration tests, allowing you to send a URL string (for GET requests) or a full `Request` object and receive a `Response` object directly from the application.

### Method
N/A (Simulates requests internally)

### Endpoint
N/A

### Parameters
#### Path Parameters
N/A

#### Query Parameters
N/A

#### Request Body
- **path_or_request** (string | Request) - Required - Either a URL path string (e.g., `'/hello'`) for a GET request, or a complete `Request` object for more complex requests (e.g., POST, with headers or body).

### Request Example
```typescript
import { Hono } from 'hono';
const app = new Hono();

app.get('/hello', (c) => c.text('Hello Hono!'));
app.post('/message', async (c) => {
  const body = await c.req.text();
  return c.text(`Received: ${body}`, 201);
});

// Test case: Sending a GET request by path
const resGet = await app.request('/hello');
console.log(resGet.status); // 200
console.log(await resGet.text()); // 'Hello Hono!'

// Test case: Sending a POST request with a Request object
const reqPost = new Request('http://localhost/message', {
  method: 'POST',
  body: 'This is a test message.',
  headers: { 'Content-Type': 'text/plain' },
});
const resPost = await app.request(reqPost);
console.log(resPost.status); // 201
console.log(await resPost.text()); // 'Received: This is a test message.'
```

### Response
#### Success Response (2xx)
- **response** (Response) - The HTTP response object from the simulated request, containing status, headers, and body.

#### Response Example
```typescript
// For GET /hello:
// Response status: 200
// Response body: "Hello Hono!"

// For POST /message:
// Response status: 201
// Response body: "Received: This is a test message."
```
```

--------------------------------

### Correctly Initialize Hono Client for `$url()` with Absolute URL (TypeScript)

Source: https://context7_llms

Illustrates the importance of providing an absolute URL when initializing the Hono client (`hc`) to use the `$url()` utility. Using a relative URL will result in a `TypeError`.

```ts
// ❌ Will throw error
const client = hc<AppType>('/')
client.api.post.$url()

// ✅ Will work as expected
const client = hc<AppType>('http://localhost:8787/')
client.api.post.$url()
```

--------------------------------

### Configure wrangler.toml for Hono Project

Source: https://hono.dev/getting-started/cloudflare-workers

Configuration additions for wrangler.toml to specify the main entry point and enable minification for Hono TypeScript projects. These settings should be added after the compatibility_date line in the wrangler configuration file.

```toml
main = "src/index.ts"
minify = true
```

--------------------------------

### Hono Application Object

Source: https://context7_llms

The primary `Hono` object used to create and configure the application, serving

--------------------------------

### Handle path parameters and query strings in Hono

Source: https://context7_llms

Extract URL path parameters using c.req.param(), query string values using c.req.query(), and set response headers using c.header(). Demonstrates request parsing and response header manipulation in Hono routing.

```typescript
app.get('/posts/:id', (c) => {
  const page = c.req.query('page')
  const id = c.req.param('id')
  c.header('X-Message', 'Hi!')
  return c.text(`You want to see ${page} of ${id}`)
})
```

--------------------------------

### FUNCTION proxy()

Source: https://context7_llms

`proxy()` is a `fetch()` API wrapper for proxy. It handles `Accept-Encoding` and removes unnecessary response headers, returning a `Response` object.

```APIDOC
## FUNCTION proxy()

### Description
`proxy()` is a `fetch()` API wrapper for proxy. The parameters and return value are the same as for `fetch()` (except for the proxy-specific options). It handles `Accept-Encoding` and removes unnecessary response headers, returning a `Response` object.

### Method
N/A (Used within Hono HTTP handlers)

### Endpoint
N/A (Used within Hono HTTP handlers)

### Parameters
#### Path Parameters
N/A

#### Query Parameters
N/A

#### Request Body
- **url** (string) - Required - The target URL to proxy the request to.
- **options** (object) - Optional - Configuration object for the proxy request.
    - **headers** (object) - Optional - Custom HTTP headers to send with the proxied request.
        - **X-Forwarded-For** (string) - Optional - Overrides or sets the `X-Forwarded-For` header.
        - **X-Forwarded-Host** (string) - Optional - Overrides or sets the `X-Forwarded-Host` header.
        - **Authorization** (undefined) - Optional - Set to `undefined` to prevent propagating the original `Authorization` header.
    - **customFetch** (function) - Optional - A custom `fetch` function to use instead of the global one.

### Request Example
```ts
import { Hono } from 'hono'
import { proxy } from 'hono/proxy'

const app = new Hono()
const originServer = 'example.com' // Replace with your actual origin server

app.all('/proxy/:path', (c) => {
  return proxy(`http://${originServer}/${c.req.param('path')}`, {
    ...c.req, // Optional: forward all request data (including credentials)
    headers: {
      ...c.req.header(),
      'X-Forwarded-For': '127.0.0.1',
      'X-Forwarded-Host': c.req.header('host'),
      Authorization: undefined, // Do not propagate original Authorization header
    },
  })
})
```

### Response
#### Success Response (200)
- **Response** (object) - A standard `Response` object from the proxied request, with unnecessary headers removed.

#### Response Example
```json
{
  "status": 200,
  "statusText": "OK",
  "headers": {
    "content-type": "application/json",
    "x-powered-by": "Hono"
  },
  "body": {
    "message": "Proxied content from origin server"
  }
}
```
```

--------------------------------

### Build Hono Application with npm

Source: https://hono.dev/docs/getting-started/nodejs

Execute the build script using npm package manager. This compiles the Hono application for production deployment.

```shell
npm run build
```

--------------------------------

### Configure Hono IP Restriction Middleware for Deno

Source: https://context7_llms

This snippet shows how to integrate Hono's IP restriction middleware in a Deno environment. It highlights the use of `getConnInfo` from `hono/deno` as the first argument to `ipRestriction`, adapting the middleware for Deno-specific connection information retrieval.

```ts
import { getConnInfo } from 'hono/deno'
import { ipRestriction } from 'hono/ip-restriction'

//...

app.use(
  '*',
  ipRestriction(getConnInfo, {
    // ...
  })
)
```

--------------------------------

### Set a Base Path for Hono Routes

Source: https://context7_llms

Demonstrates how to configure a base path for all routes defined on a specific Hono instance using `new Hono().basePath('/prefix')`. This automatically prefixes all subsequent route definitions within that instance, simplifying route management for APIs or specific sections of an application.

```ts
import { Hono } from 'hono'
// ---cut---
const api = new Hono().basePath('/api')
api.get('/book', (c) => c.text('List Books')) // GET /api/book
```

--------------------------------

### Implement Cloudflare Pages Middleware with onRequest Export

Source: https://context7_llms

Shows how to create a basic Cloudflare Pages middleware by exporting an `onRequest` function in `_middleware.ts`. The middleware logs incoming requests and passes control to the next handler. This is the native Cloudflare Pages middleware pattern before using Hono's middleware wrapper.

```ts
// functions/_middleware.ts
export async function onRequest(pagesContext) {
  console.log(`You are accessing ${pagesContext.request.url}`)
  return await pagesContext.next()
}
```

--------------------------------

### Configure `wrangler.toml` with KV Namespace Binding

Source: https://context7_llms

This TOML configuration snippet adds a `kv_namespaces` entry to `wrangler.toml`, binding the `MY_KV` namespace to its specific `preview_id`. This allows the Hono application to access the KV store locally during development.

```toml
[[kv_namespaces]]
binding = "MY_KV"
id = "abcdef"
```

--------------------------------

### env() - Environment Variable Retrieval

Source: https://hono.dev/docs/helpers/adapter

The env() function facilitates retrieving environment variables across different runtimes, extending beyond just Cloudflare Workers' Bindings. It provides a unified interface to access environment variables from various platforms including Node.js, Deno, Bun, Cloudflare Workers, Vercel, AWS Lambda, and more.

```APIDOC
## env()

### Description
Retrieves environment variables across different runtimes with a unified interface. The value retrieved may differ depending on the runtime environment.

### Syntax
```typescript
env<T>(c: Context, runtime?: string): T
```

### Parameters
- **c** (Context) - Required - The Hono context object
- **runtime** (string) - Optional - Specify the runtime key to retrieve environment variables from a specific platform

### Supported Runtimes
- Cloudflare Workers (wrangler.toml, wrangler.jsonc)
- Deno (Deno.env, .env file)
- Bun (Bun.env, process.env)
- Node.js (process.env)
- Vercel (Environment Variables)
- AWS Lambda (Environment Variables)
- Lambda@Edge (via event structure)
- Fastly Compute (ConfigStore)
- Netlify (Netlify Contexts)

### Request Example
```typescript
import { env } from 'hono/adapter'

app.get('/env', (c) => {
  const { NAME } = env<{ NAME: string }>(c)
  return c.text(NAME)
})
```

### Request Example with Runtime Specification
```typescript
app.get('/env', (c) => {
  const { NAME } = env<{ NAME: string }>(c, 'workerd')
  return c.text(NAME)
})
```

### Response
- **Returns** (T) - Object containing the requested environment variables typed according to the generic parameter
```

--------------------------------

### SSGPlugin Interface

Source: https://hono.dev/docs/helpers/ssg

Defines the SSGPlugin interface that plugins must implement to hook into the toSSG process. Each hook property can be a single function or an array of functions.

```APIDOC
## SSGPlugin Interface

### Description
The main plugin interface for customizing the toSSG (Static Site Generation) process. Plugins can optionally implement any combination of the three available hooks.

### Interface Definition
```typescript
export interface SSGPlugin {
  beforeRequestHook?: BeforeRequestHook | BeforeRequestHook[]
  afterResponseHook?: AfterResponseHook | AfterResponseHook[]
  afterGenerateHook?: AfterGenerateHook | AfterGenerateHook[]
}
```

### Properties

#### beforeRequestHook
- **Type**: BeforeRequestHook | BeforeRequestHook[] (Optional)
- **Description**: Single hook function or array of hook functions called before processing each request
- **Default**: undefined

#### afterResponseHook
- **Type**: AfterResponseHook | AfterResponseHook[] (Optional)
- **Description**: Single hook function or array of hook functions called after receiving each response
- **Default**: undefined

#### afterGenerateHook
- **Type**: AfterGenerateHook | AfterGenerateHook[] (Optional)
- **Description**: Single hook function or array of hook functions called after the entire generation process completes
- **Default**: undefined
```

--------------------------------

### Structure large Hono applications using `app.route()` with separate files

Source: https://hono.dev/docs/guides/best-practices

For building larger Hono applications, `app.route()` is recommended to organize endpoints into separate files, promoting modularity and maintainability. This pattern avoids monolithic application files by allowing developers to define related routes in distinct modules (e.g., `authors.ts`, `books.ts`) and then mount them onto the main Hono application.

```ts
// authors.ts
import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => c.json('list authors'))
app.post('/', (c) => c.json('create an author', 201))
app.get('/:id', (c) => c.json(`get ${c.req.param('id')}`))

export default app
```

```ts
// books.ts
import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => c.json('list books'))
app.post('/', (c) => c.json('create a book', 201))
```

--------------------------------

### Deploy Hono application to Cloudflare Workers

Source: https://hono.dev/getting-started/cloudflare-workers

Instructions for deploying a Hono application using various package managers (npm, yarn, pnpm, bun) via their respective `deploy` scripts. This assumes `wrangler` is configured and `$npm_execpath` is set correctly in `package.json`.

```sh
npm run deploy
```

```sh
yarn deploy
```

```sh
pnpm run deploy
```

```sh
bun run deploy
```

--------------------------------

### Import Factory Helper from Hono

Source: https://hono.dev/docs/helpers/factory

Import the createFactory and createMiddleware functions from the hono/factory module. These utilities help create properly typed Hono components and middleware.

```typescript
import { Hono } from 'hono'
import { createFactory, createMiddleware } from 'hono/factory'
```

--------------------------------

### useViewTransition Hook for Animated Transitions

Source: https://context7_llms

Implement view transitions with animations using the useViewTransition hook. Returns isUpdating flag and startViewTransition function to trigger animations during state changes. Component re-evaluates during transition callback and when transition completes.

```typescript
import { useState, useViewTransition } from 'hono/jsx'
import { viewTransition } from 'hono/jsx/dom/css'
import { css, keyframes, Style } from 'hono/css'

const rotate = keyframes`
  from {
    rotate: 0deg;
  }
  to {
    rotate: 360deg;
  }
`

export default function App() {
  const [isUpdating, startViewTransition] = useViewTransition()
  const [showLargeImage, setShowLargeImage] = useState(false)
  const [transitionNameClass] = useState(() =>
    viewTransition(css`
      ::view-transition-old() {
        animation-name: ${rotate};
      }
      ::view-transition-new() {
        animation-name: ${rotate};
      }
    `)
  )
  return (
    <>
      <Style />
      <button
        onClick={() =>
          startViewTransition(() =>
            setShowLargeImage((state) => !state)
          )
        }
      >
        Click!
      </button>
      <div>
        {!showLargeImage ? (
          <img src='https://hono.dev/images/logo.png' />
        ) : (
          <div
            class={css`
              ${transitionNameClass}
              background: url('https://hono.dev/images/logo-large.png');
              background-size: contain;
              background-repeat: no-repeat;
              background-position: center;
              width: 600px;
              height: 600px;
              position: relative;
              ${isUpdating &&
              css`
                &:before {
                  content: 'Loading...';
                  position: absolute;
                  top: 50%;
                  left: 50%;
                }
              `}
            `}
          ></div>
        )}
      </div>
    </>
  )
}
```

--------------------------------

### Build Hono Application with yarn

Source: https://hono.dev/docs/getting-started/nodejs

Execute the build script using yarn package manager. This compiles the Hono application for production deployment.

```shell
yarn run build
```

--------------------------------

### ssgParams Middleware

Source: https://context7_llms

This middleware allows you to define static parameters for dynamic routes, enabling the generation of multiple static pages from a single route definition, similar to Next.js's `generateStaticParams`.

```APIDOC
## Middleware ssgParams

### Description
`ssgParams` is a built-in middleware that facilitates the generation of multiple static pages for dynamic routes by providing a function to define the parameters for each page.

### Method
Hono Middleware

### Signature
```ts
ssgParams<T>(generator: () => Promise<T[]>): MiddlewareHandler
```

### Parameters
#### Function Arguments
- **generator** (function) - Required - An asynchronous function that returns an array of objects. Each object represents a set of parameters for a dynamic route (e.g., `[{ id: '1' }, { id: '2' }]`).

### Request Example
```ts
app.get(
  '/shops/:id',
  ssgParams(async () => {
    const shops = await getShops() // Assume getShops() fetches shop data
    return shops.map((shop) => ({ id: shop.id }))
  }),
  async (c) => {
    const shop = await getShop(c.req.param('id'))
    if (!shop) {
      return c.notFound()
    }
    return c.render(
      `<div><h1>${shop.name}</h1></div>`
    )
  }
)
```

### Response
#### Middleware Effect
This middleware modifies the route's behavior during SSG, causing `toSSG` to generate a separate static file for each parameter set returned by the `generator` function. It does not return a direct value but influences the SSG output.
```

--------------------------------

### Implement Hono Fallback Routes with Wildcard

Source: https://context7_llms

Explains how to create a fallback route in Hono using a wildcard (`*`) handler placed after more specific routes. This ensures that if no other route matches, the fallback handler will catch the request, providing a default response for unhandled paths, often used for 404 pages.

```ts
import { Hono } from 'hono'
const app = new Hono()
// ---cut---
app.get('/bar', (c) => c.text('bar')) // bar
app.get('*', (c) => c.text('fallback')) // fallback
```

--------------------------------

### React Client with TanStack Query and Hono RPC (TypeScript/TSX)

Source: https://context7_llms

This React component demonstrates consuming a Hono RPC API using `hc` and TanStack Query. It sets up a `QueryClientProvider`, fetches todos with `useQuery`, and adds new todos with `useMutation`, all while maintaining full type safety thanks to `InferResponseType` and `InferRequestType` from `hono/client`. This showcases a complete type-safe full-stack application.

```tsx
// src/App.tsx
import {
  useQuery,
  useMutation,
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'
import { AppType } from '../functions/api/[[route]]'
import { hc, InferResponseType, InferRequestType } from 'hono/client'

const queryClient = new QueryClient()
const client = hc<AppType>('/api')

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Todos />
    </QueryClientProvider>
  )
}

const Todos = () => {
  const query = useQuery({
    queryKey: ['todos'],
    queryFn: async () => {
      const res = await client.todo.$get()
      return await res.json()
    }
  })

  const $post = client.todo.$post

  const mutation = useMutation<
    InferResponseType<typeof $post>,
    Error,
    InferRequestType<typeof $post>['form']
  >({
    mutationFn: async (todo) => {
      const res = await $post({
        form: todo
      })
      return await res.json()
    },
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] })
    },
    onError: (error) => {
      console.log(error)
    }
  })

  return (
    <div>
      <button
        onClick={() => {
          mutation.mutate({
            id: Date.now().toString(),
            title: 'Write code'
          })
        }}
      >
        Add Todo
      </button>

      <ul>
        {query.data?.todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  )
}
```

--------------------------------

### toSSG Function

Source: https://context7_llms

The core function for generating static sites from a Hono application. It takes the Hono app, a filesystem module, and optional configuration to produce static files.

```APIDOC
## Function toSSG

### Description
The `toSSG` function is the primary utility for converting a Hono application into a set of static files. It processes registered routes and renders them to disk using a provided filesystem module.

### Method
TypeScript Function

### Signature
```ts
toSSG(
  app: Hono,
  fsModule: FileSystemModule,
  options?: ToSSGOptions
): Promise<ToSSGResult>
```

### Parameters
#### Function Arguments
- **app** (Hono) - Required - The Hono application instance with all registered routes.
- **fsModule** (FileSystemModule) - Required - An object providing `writeFile` and `mkdir` methods, typically `node:fs/promises` or an adapter for Deno/Bun.
- **options** (ToSSGOptions) - Optional - Configuration options to control the SSG process, such as output directory, concurrency, and file extension mapping.

#### FileSystemModule Interface
```ts
export interface FileSystemModule {
  writeFile(path: string, data: string | Uint8Array): Promise<void>
  mkdir(
    path: string,
    options: { recursive: boolean }
  ): Promise<void | string>
}
```

#### ToSSGOptions Interface
```ts
export interface ToSSGOptions {
  dir?: string
  concurrency?: number
  extensionMap?: Record<string, string>
  plugins?: SSGPlugin[]
}
```
- **dir** (string) - Optional - The output destination for static files. Default is `./static`.
- **concurrency** (number) - Optional - The number of files to be generated concurrently. Default is `2`.
- **extensionMap** (Record<string, string>) - Optional - A map from `Content-Type` to file extension, used to determine output file extensions.
- **plugins** (SSGPlugin[]) - Optional - An array of SSG plugins to extend functionality.

### Request Example
```ts
import app from './index'
import { toSSG } from 'hono/ssg'
import fs from 'fs/promises'

toSSG(app, fs, {
  dir: './dist',
  concurrency: 4,
  extensionMap: {
    'application/x-html': 'html'
  }
})
```

### Response
#### Success Response (Promise<ToSSGResult>)
```ts
export interface ToSSGResult {
  success: boolean
  files: string[]
  error?: Error
}
```
- **success** (boolean) - Indicates whether the static site generation process completed successfully.
- **files** (string[]) - An array of paths to all files that were successfully generated.
- **error** (Error) - Optional - An error object if the SSG process encountered an issue.

#### Response Example
```json
{
  "success": true,
  "files": [
    "./static/index.html",
    "./static/about.html",
    "./static/shops/123.html"
  ]
}
```
```

--------------------------------

### Integrate Hono Client with SWR in React (TypeScript/TSX)

Source: https://context7_llms

This snippet demonstrates how to use the `hono/client` library with the React SWR hook for efficient data fetching. It shows defining a fetcher function that leverages Hono's type inference for API requests and then consuming the data within a React component, handling loading and error states.

```tsx
import useSWR from 'swr'
import { hc } from 'hono/client'
import type { InferRequestType } from 'hono/client'
import type { AppType } from '../functions/api/[[route]]'

const App = () => {
  const client = hc<AppType>('/api')
  const $get = client.hello.$get

  const fetcher =
    (arg: InferRequestType<typeof $get>) => async () => {
      const res = await $get(arg)
      return await res.json()
    }

  const { data, error, isLoading } = useSWR(
    'api-hello',
    fetcher({
      query: {
        name: 'SWR',
      },
    })
  )

  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>

  return <h1>{data?.message}</h1>
}

export default App
```

--------------------------------

### Adapter Helper Import

Source: https://hono.dev/docs/helpers/adapter

Import statement for accessing the Adapter Helper functions in Hono applications. Provides access to env() and getRuntimeKey() functions for cross-platform compatibility.

```APIDOC
## Import Adapter Helper

### Description
Import the necessary functions from Hono's adapter module to enable cross-platform environment variable access and runtime detection.

### Import Statement
```typescript
import { Hono } from 'hono'
import { env, getRuntimeKey } from 'hono/adapter'
```

### Available Exports
- **env** - Function to retrieve environment variables across different runtimes
- **getRuntimeKey** - Function to detect the current runtime environment

### Usage Context
These imports enable developers to write platform-agnostic code that works seamlessly across Cloudflare Workers, Node.js, Deno, Bun, Vercel, AWS Lambda, and other supported platforms.
```

--------------------------------

### Route Mounting and Base Path

Source: https://hono.dev/docs/api/hono

Mount sub-applications or set a base path for all routes. Useful for organizing large applications and creating API versioning.

```APIDOC
## Route Mounting and Base Path

### Description
Mount sub-applications at specific paths or set a base path prefix for all routes in the application.

### Methods
- **app.route(path, [app])** - Mount routes at a specific path
- **app.basePath(path)** - Set base path prefix for all routes
- **app.mount(path, anotherApp)** - Mount another Hono app at a path

### Parameters
#### Path Parameters
- **path** (string) - Required - Path prefix or mount point
- **app** (Hono) - Optional - Sub-application to mount
- **anotherApp** (Hono) - Required for mount - Another Hono application instance

### Usage Examples
```typescript
// Set base path
app.basePath('/api/v1')

// Mount sub-app
const userApp = new Hono()
userApp.get('/', (c) => c.json({ users: [] }))
app.mount('/users', userApp)

// Route mounting
app.route('/admin', adminApp)
```
```

--------------------------------

### Combine Middleware - every()

Source: https://context7_llms

The every() middleware runs all middleware in sequence and stops if any of them fail. If any middleware throws an error, subsequent middleware will not execute. This is useful for implementing mandatory access control requirements.

```APIDOC
## Combine Middleware - every()

### Description
Runs all middleware and stops if any of them fail. Middleware is applied in order, and if any middleware throws an error, subsequent middleware will not run.

### Usage
Implement mandatory access control by requiring all middleware conditions to pass.

### Parameters
- **middleware1** (Middleware) - Required - First middleware to execute
- **middleware2** (Middleware) - Required - Second middleware to execute
- **middlewareN** (Middleware) - Optional - Additional middleware to execute

### Request Example
```ts
import { some, every } from 'hono/combine'
import { bearerAuth } from 'hono/bearer-auth'
import { myCheckLocalNetwork } from '@/check-local-network'
import { myRateLimit } from '@/rate-limit'

app.use(
  '/api/*',
  some(
    myCheckLocalNetwork(),
    every(bearerAuth({ token }), myRateLimit({ limit: 100 }))
  )
)
```

### Behavior
- If client is in local network, skip authentication and rate limiting
- Otherwise, apply authentication and rate limiting
- All middleware must pass for request to proceed
```

--------------------------------

### Extension Map Configuration

Source: https://hono.dev/docs/helpers/ssg

Customize file extensions for different content types during static site generation. Use the `extensionMap` option to override default extension mappings and the `defaultExtensionMap` for reference.

```APIDOC
## File Extension Customization

### Description
Customize how file extensions are determined based on Content-Type headers returned by routes.

### Usage

Import `toSSG` and `defaultExtensionMap` from `hono/ssg`, then pass a custom `extensionMap` in the options:

### Example
```typescript
import { toSSG, defaultExtensionMap } from 'hono/ssg'

// Save `application/x-html` content with `.html`
toSSG(app, fs, {
  extensionMap: {
    'application/x-html': 'html',
    ...defaultExtensionMap
  }
})
```

### Parameters

#### extensionMap
- **Type**: `Record<string, string>`
- **Description**: Object where keys are Content-Type values and values are file extension strings (without the dot).
- **Note**: Spread `defaultExtensionMap` to preserve default mappings while adding custom ones.
```

--------------------------------

### Importing Context Storage Middleware and Utilities in Hono (TypeScript)

Source: https://hono.dev/docs/middleware/builtin/context-storage

This snippet demonstrates how to import the `Hono` class and the `contextStorage`, `getContext`, and `tryGetContext` utilities from the `hono/context-storage` module. These are essential for using the context storage functionality in a Hono application.

```ts
import { Hono } from 'hono'
import {
  contextStorage,
  getContext,
  tryGetContext,
} from 'hono/context-storage'
```

--------------------------------

### app.fire()

Source: https://context7_llms

Automatically adds a global `fetch` event listener, useful for environments adhering to the Service Worker API. Note: This method is deprecated; use `fire()` from `hono/service-worker` instead.

```APIDOC
## app.fire()

### Description
This method automatically registers a global `fetch` event listener, making the Hono application respond to incoming fetch requests. It is particularly useful for environments that implement the Service Worker API, such as non-ES module Cloudflare Workers. This method is deprecated; it is recommended to use `fire()` from `hono/service-worker` for new implementations.

### Method
N/A (Registers a global event listener)

### Endpoint
N/A

### Parameters
#### Path Parameters
N/A

#### Query Parameters
N/A

#### Request Body
N/A

### Request Example
N/A

### Response
N/A
```

--------------------------------

### Import Basic Auth Middleware - TypeScript

Source: https://hono.dev/docs/middleware/builtin/basic-auth

Import the Hono framework and basicAuth middleware from the hono package. This is the first step to use Basic authentication in your Hono application.

```typescript
import { Hono } from 'hono'
import { basicAuth } from 'hono/basic-auth'
```

--------------------------------

### Bundle JavaScript with Rolldown for WebAssembly

Source: https://context7_llms

Bundle TypeScript and dependencies into a single JavaScript file using Rolldown. This step is necessary because WebAssembly JS ecosystem tooling requires a single JS file to include Hono and related libraries before componentization.

```shell
npx rolldown -c
```

```shell
yarn rolldown -c
```

```shell
pnpm exec rolldown -c
```

```shell
bun build --target=bun --outfile=dist/component.js ./src/component.ts
```

--------------------------------

### Implement Hono Timing Middleware with Custom Metrics and Timers

Source: https://context7_llms

This snippet demonstrates how to integrate the Hono timing middleware, set custom metrics, and measure execution times for asynchronous operations. It shows the use of `setMetric`, `startTime`, `endTime`, and `wrapTime` functions, along with type inference for variables.

```js
// Specify the variable types to infer the `c.get('metric')`:
type Variables = TimingVariables

const app = new Hono<{ Variables: Variables }>()

// add the middleware to your router
app.use(timing());

app.get('/', async (c) => {

  // add custom metrics
  setMetric(c, 'region', 'europe-west3')

  // add custom metrics with timing, must be in milliseconds
  setMetric(c, 'custom', 23.8, 'My custom Metric')

  // start a new timer
  startTime(c, 'db');
  const data = await db.findMany(...);

  // end the timer
  endTime(c, 'db');

  // ...or you can also just wrap a Promise using this function:
  const data = await wrapTime(c, 'db', db.findMany(...));

  return c.json({ response: data });
})
```

--------------------------------

### Create custom middleware with createMiddleware()

Source: https://context7_llms

Create custom middleware functions with proper TypeScript typing. Can be used as a shortcut to factory.createMiddleware() or wrapped in a function to accept parameters.

```typescript
const messageMiddleware = createMiddleware(async (c, next) => {
  await next()
  c.res.headers.set('X-Message', 'Good morning!')
})
```

```typescript
const messageMiddleware = (message: string) => {
  return createMiddleware(async (c, next) => {
    await next()
    c.res.headers.set('X-Message', message)
  })
}

app.use(messageMiddleware('Good evening!'))
```

--------------------------------

### Define WebAssembly Component WIT Interface

Source: https://context7_llms

Create a WIT (WebAssembly Interface Types) file that defines the component's world and exports the wasi:http/incoming-handler interface for handling incoming HTTP requests in a Hono WebAssembly component.

```text
package example:hono;

world component {
    export wasi:http/incoming-handler@0.2.6;
}
```

--------------------------------

### Import Hono JWK Middleware Modules in TypeScript

Source: https://context7_llms

This snippet shows the necessary import statements for setting up JWK (JSON Web Key) authentication middleware in a Hono application. It includes imports for the `Hono` application instance, the `jwk` middleware, and the `verifyWithJwks` utility function.

```ts
import { Hono } from 'hono'
import { jwk } from 'hono/jwk'
import { verifyWithJwks } from 'hono/jwt'
```

--------------------------------

### Configure Bun.serve with Custom Request Handler

Source: https://hono.dev/docs/middleware/builtin/body-limit

Alternative Bun.serve configuration that uses a custom fetch handler to pass request IP information to Hono. The maxRequestBodySize must be set here as well to handle large request bodies and ensure the onError handler in Hono's Body Limit Middleware is properly invoked.

```typescript
Bun.serve({
  fetch(req, server) {
    return app.fetch(req, { ip: server.requestIP(req) })
  },
  maxRequestBodySize: 1024 * 1024 * 200, // your value here
})
```

--------------------------------

### Handle route information in Hono sub-applications

Source: https://hono.dev/docs/helpers/route

This snippet demonstrates how routing helper functions behave when dealing with sub-applications in Hono. It shows how `routePath`, `baseRoutePath`, and `basePath` provide context-aware route information within a nested application structure, specifically when a sub-app is mounted under a base path.

```ts
const app = new Hono()
const apiApp = new Hono()

apiApp.get('/posts/:id', (c) => {
  return c.json({
    routePath: routePath(c), // '/posts/:id'
    baseRoutePath: baseRoutePath(c), // '/api'
    basePath: basePath(c), // '/api' (with actual params)
  })
})

app.route('/api', apiApp)
```

--------------------------------

### Hono App Initialization

Source: https://hono.dev/docs/api/hono

Initialize a new Hono application instance. This is the primary object imported and used throughout the application lifecycle. The app can be exported as the default export for Cloudflare Workers or Bun environments.

```APIDOC
## Hono App Initialization

### Description
Create and initialize a new Hono application instance that serves as the primary object for defining routes, middleware, and handlers.

### Usage
```typescript
import { Hono } from 'hono'

const app = new Hono()
// Define routes and middleware here

export default app // for Cloudflare Workers or Bun
```

### Constructor
- **Hono()** - Creates a new Hono application instance

### Export Options
- **Cloudflare Workers**: `export default app`
- **Bun**: `export default app`
- **Service Worker**: Use with `fire()` method or `fire()` from `hono/service-worker`
```

--------------------------------

### SSG Plugins System

Source: https://hono.dev/docs/helpers/ssg

Extensible plugin system for customizing the static site generation process. Plugins use hooks to modify generation behavior at different stages, allowing you to extend Hono SSG functionality beyond the built-in capabilities.

```APIDOC
## SSG Plugins

### Description
Plugins allow you to extend the functionality of the static site generation process. They use hooks to customize the generation process at different stages.

### Plugin Configuration

Pass plugins to `toSSG` via the options object:

```typescript
toSSG(app, fs, {
  plugins: [plugin1, plugin2, ...]
})
```

### Available Plugins

#### defaultPlugin
- Automatically applied when no plugins specified
- Skips non-200 status responses
- Not included when custom plugins are specified

#### redirectPlugin
- Generates HTML redirect pages for 3xx responses
- Includes meta refresh tags and canonical links
- Must be ordered before `defaultPlugin`

### Custom Plugins

You can create custom plugins to extend SSG behavior:

```typescript
const myCustomPlugin: SSGPlugin = {
  // Plugin implementation with hooks
}

toSSG(app, fs, {
  plugins: [defaultPlugin, myCustomPlugin]
})
```

### Plugin Ordering

- Plugin execution order matters
- Place plugins that process responses before plugins that skip them
- Example: `[redirectPlugin(), defaultPlugin()]`
```

--------------------------------

### Configure Hono's default SmartRouter with RegExpRouter and TrieRouter (TypeScript)

Source: https://hono.dev/docs/concepts/routers

This TypeScript code snippet illustrates how Hono's core configures its default SmartRouter. It initializes SmartRouter with both RegExpRouter and TrieRouter, enabling Hono to dynamically select the most performant router based on the application's routing patterns during startup.

```typescript
readonly defaultRouter: Router = new SmartRouter({
  routers: [new RegExpRouter(), new TrieRouter()],
})
```

--------------------------------

### Create Unencrypted HTTP/2 Server

Source: https://hono.dev/docs/getting-started/nodejs

Set up an unencrypted HTTP/2 server using Node.js http2 module. Pass the createServer function from node:http2 to the serve function to enable HTTP/2 protocol support without TLS encryption.

```typescript
import { createServer } from 'node:http2'

const server = serve({
  fetch: app.fetch,
  createServer,
})
```

--------------------------------

### Log Generated Files in Hono toSSG Plugin

Source: https://hono.dev/docs/helpers/ssg

Implements an AfterGenerateHook that logs all generated files after the toSSG process completes. Iterates through the result.files array and outputs each file path to the console.

```typescript
const logFilesPlugin: SSGPlugin = {
  afterGenerateHook: (result) => {
    if (result.files) {
      result.files.forEach((file) => console.log(file))
    }
  },
}
```

--------------------------------

### Configuring Streaming Components with Hono StreamingContext (TSX)

Source: https://context7_llms

This snippet demonstrates how to use `StreamingContext` to provide global configuration, such as a `scriptNonce`, for streaming components like `Suspense` and `ErrorBoundary` in Hono. This is crucial for adhering to Content Security Policy (CSP) by automatically adding the nonce to dynamically generated script tags.

```tsx
import { Suspense, StreamingContext } from 'hono/jsx/streaming'

// ...

app.get('/', (c) => {
  const stream = renderToReadableStream(
    <html>
      <body>
        <StreamingContext
          value={{ scriptNonce: 'random-nonce-value' }}
        >
          <Suspense fallback={<div>Loading...</div>}>
            <AsyncComponent />
          </Suspense>
        </StreamingContext>
      </body>
    </html>
  )

  return c.body(stream, {
    headers: {
      'Content-Type': 'text/html; charset=UTF-8',
      'Transfer-Encoding': 'chunked',
      'Content-Security-Policy':
        "script-src 'nonce-random-nonce-value'",
    },
  })
})
```

--------------------------------

### Import `compress` middleware in Hono (TypeScript)

Source: https://hono.dev/docs/middleware/builtin/compress

This snippet demonstrates how to import the `Hono` class from 'hono' and the `compress` middleware from 'hono/compress'. These imports are necessary to create a Hono application and apply the compression functionality.

```ts
import { Hono } from 'hono'
import { compress } from 'hono/compress'
```

--------------------------------

### Define index.html for Service Worker Registration (HTML)

Source: https://hono.dev/docs/getting-started/service-worker

Creates the main HTML file, including a link to trigger the Service Worker and a script tag to load `main.ts` which handles the Service Worker registration. This serves as the entry point for the web application, initiating the Service Worker lifecycle.

```html
<!doctype html>
<html>
  <body>
    <a href="/sw">Hello World by Service Worker</a>
    <script type="module" src="/main.ts"></script>
  </body>
</html>
```

--------------------------------

### Review Default Configuration for Hono Language Detector (TypeScript)

Source: https://hono.dev/docs/middleware/builtin/language

This snippet presents the `DEFAULT_OPTIONS` object, outlining all the default settings for the `languageDetector` middleware. It details properties such as detection `order`, lookup keys for query strings, cookies, and headers, caching behavior, and cookie options, providing insight into the middleware's out-of-the-box functionality.

```ts
export const DEFAULT_OPTIONS: DetectorOptions = {
  order: ['querystring', 'cookie', 'header'],
  lookupQueryString: 'lang',
  lookupCookie: 'language',
  lookupFromHeaderKey: 'accept-language',
  lookupFromPathIndex: 0,
  caches: ['cookie'],
  ignoreCase: true,
  fallbackLanguage: 'en',
  supportedLanguages: ['en'],
  cookieOptions: {
    sameSite: 'Strict',
    secure: true,
    maxAge: 365 * 24 * 60 * 60,
    httpOnly: true,
  },
  debug: false,
}
```

--------------------------------

### Import getConnInfo from Hono Bun

Source: https://hono.dev/docs/helpers/conninfo

Import the getConnInfo function from the Hono Bun package to access connection information in Bun runtime environments.

```typescript
import { Hono } from 'hono'
import { getConnInfo } from 'hono/bun'
```

--------------------------------

### LinearRouter Benchmark Results for Route Lookup

Source: https://context7_llms

Performance benchmark comparing LinearRouter with other JavaScript routers for a specific route lookup. LinearRouter demonstrates significant speed advantages, being 2.1x faster than KoaTreeRouter and 33.24x faster than FindMyWay, making it ideal for serverless environments with per-request initialization.

```console
• GET /user/lookup/username/hey
----------------------------------------------------- -----------------------------
LinearRouter     1.82 µs/iter      (1.7 µs … 2.04 µs)   1.84 µs   2.04 µs   2.04 µs
MedleyRouter     4.44 µs/iter     (4.34 µs … 4.54 µs)   4.48 µs   4.54 µs   4.54 µs
FindMyWay       60.36 µs/iter      (45.5 µs … 1.9 ms)  59.88 µs  78.13 µs  82.92 µs
KoaTreeRouter    3.81 µs/iter     (3.73 µs … 3.87 µs)   3.84 µs   3.87 µs   3.87 µs
TrekRouter       5.84 µs/iter     (5.75 µs … 6.04 µs)   5.86 µs   6.04 µs   6.04 µs

summary for GET /user/lookup/username/hey
  LinearRouter
   2.1x faster than KoaTreeRouter
   2.45x faster than MedleyRouter
   3.21x faster than TrekRouter
   33.24x faster than FindMyWay
```

--------------------------------

### Combine Hono sub-routers and export application type (TypeScript)

Source: https://hono.dev/docs/guides/rpc

This TypeScript code demonstrates how to integrate multiple Hono sub-routers (like 'authors' and 'books') into a main Hono application instance. It uses `app.route()` to mount the sub-routers under specific paths and exports the inferred `AppType` of the combined routes, which is crucial for generating type-safe RPC clients.

```typescript
// index.ts
import { Hono } from 'hono'
import authors from './authors'
import books from './books'

const app = new Hono()

const routes = app.route('/authors', authors).route('/books', books)

export default app
export type AppType = typeof routes
```

--------------------------------

### Create Handlers with Factory Pattern in Hono

Source: https://context7_llms

Demonstrates using createFactory() from 'hono/factory' to create middleware and handlers with proper type inference. This approach allows creating RoR-like controllers while maintaining TypeScript type safety. The factory enables chaining middleware and handlers together before mounting on routes.

```typescript
import { createFactory } from 'hono/factory'
import { logger } from 'hono/logger'

// 😃
const factory = createFactory()

const middleware = factory.createMiddleware(async (c, next) => {
  c.set('foo', 'bar')
  await next()
})

const handlers = factory.createHandlers(logger(), middleware, (c) => {
  return c.json(c.var.foo)
})

app.get('/api', ...handlers)
```

--------------------------------

### Import Hono Combine Middleware Functions

Source: https://context7_llms

This code snippet illustrates how to import the utility functions (`some`, `every`, `except`) from `hono/combine`. These functions are used to group and conditionally execute multiple Hono middleware functions as a single unit.

```ts
import { Hono } from 'hono'
import { some, every, except } from 'hono/combine'
```

--------------------------------

### Hono Service Worker Application with handle()

Source: https://context7_llms

Creates a Hono application that runs within a Service Worker context using the handle() adapter function. Intercepts fetch events at the '/sw' path and responds with 'Hello World'. Requires ServiceWorkerGlobalScope type declaration.

```typescript
declare const self: ServiceWorkerGlobalScope

import { Hono } from 'hono'
import { handle } from 'hono/service-worker'

const app = new Hono().basePath('/sw')
app.get('/', (c) => c.text('Hello World'))

self.addEventListener('fetch', handle(app))
```

--------------------------------

### POST /posts - Set HTTP Status Code

Source: https://context7_llms

Demonstrates setting a custom HTTP status code using the c.status() method. Shows how to return a 201 Created status for a successful resource creation.

```APIDOC
## POST /posts

### Description
Create a new post and return a 201 Created status code.

### Method
POST

### Endpoint
/posts

### Response
#### Success Response (201)
- **body** (string) - Confirmation message

#### Response Example
```
Your post is created!
```

### Code Example
```typescript
import { Hono } from 'hono'
const app = new Hono()

app.post('/posts', (c) => {
  c.status(201)
  return c.text('Your post is created!')
})
```

### Notes
- Default status code is 200 if not explicitly set
- Use c.status() to set custom status codes
```

--------------------------------

### Apply Hono Basic Auth to all routes under a path

Source: https://context7_llms

This snippet demonstrates how to apply basic authentication to all routes under a specific path (e.g., `/auth/*`) using Hono's `basicAuth` middleware. It configures a static username and password for access, securing all subsequent routes within that path.

```ts
const app = new Hono()

app.use(
  '/auth/*',
  basicAuth({
    username: 'hono',
    password: 'acoolproject'
  })
)

app.get('/auth/page', (c) => {
  return c.text('You are authorized')
})
```

--------------------------------

### Import getConnInfo from Hono Deno

Source: https://hono.dev/docs/helpers/conninfo

Import the getConnInfo function from the Hono Deno package to access connection information in Deno runtime environments.

```typescript
import { Hono } from 'hono'
import { getConnInfo } from 'hono/deno'
```

--------------------------------

### tryGetContext() - Safe Context Retrieval

Source: https://hono.dev/docs/middleware/builtin/context-storage

Safely retrieve the current Hono Context object globally. Unlike getContext(), this function returns undefined instead of throwing an error when the context is unavailable, making it ideal for optional context access.

```APIDOC
## tryGetContext<Env>() - Safe Global Context Retrieval

### Description
Safely retrieve the current Context object globally. Returns undefined if context is unavailable instead of throwing an error.

### Method
Function

### Signature
```typescript
tryGetContext<Env>(): Context<Env> | undefined
```

### Type Parameters
- **Env** - The environment type extending Hono's Env interface

### Returns
- **Context<Env> | undefined** - The current Hono Context object or undefined if unavailable

### Usage Example
```typescript
const context = tryGetContext<Env>()
if (context) {
  // Context is available
  console.log(context.var.message)
}
```

### Difference from getContext()
- **getContext()** - Throws error if context unavailable
- **tryGetContext()** - Returns undefined if context unavailable

### Best Practices
Use tryGetContext() when context availability is uncertain or optional.
```

--------------------------------

### Configure `wrangler.toml` with Environment Variables

Source: https://context7_llms

This TOML configuration snippet adds a `vars` section to `wrangler.toml`, defining an environment variable named `MY_NAME` with a default value. This variable can then be accessed within the Cloudflare Pages application during local development.

```toml
[vars]
MY_NAME = "Hono"
```

--------------------------------

### Define multiple users for Hono Basic Auth from an external source

Source: https://context7_llms

This snippet shows a more dynamic approach to defining multiple users for basic authentication by importing user data from an external `users` array. It uses spread syntax to pass the first user with additional options and the rest of the users as separate arguments to the `basicAuth` middleware.

```ts
import { users } from '../config/users'

app.use(
  '/auth/*',
  basicAuth(
    {
      realm: 'www.example.com',
      ...users[0]
    },
    ...users.slice(1)
  )
)
```

--------------------------------

### getRuntimeKey() - Runtime Detection

Source: https://context7_llms

The getRuntimeKey() function returns the identifier of the current runtime environment. This allows developers to conditionally execute code based on the deployment platform, enabling runtime-specific optimizations or feature detection.

```APIDOC
## getRuntimeKey()

### Description
Returns the identifier string of the current runtime environment, enabling runtime-specific conditional logic and feature detection.

### Import
```ts
import { getRuntimeKey } from 'hono/adapter'
```

### Usage
```ts
app.get('/', (c) => {
  if (getRuntimeKey() === 'workerd') {
    return c.text('You are on Cloudflare')
  } else if (getRuntimeKey() === 'bun') {
    return c.text('You are on Bun')
  }
})
```

### Returns
- **runtimeKey** (string) - The identifier of the current runtime

### Available Runtime Keys
- `workerd` - Cloudflare Workers
- `deno` - Deno runtime
- `bun` - Bun runtime
- `node` - Node.js runtime
- `edge-light` - Vercel Edge Functions
- `fastly` - Fastly Compute
- `other` - Other unknown runtimes
```

--------------------------------

### Specifying a Custom Router for Hono Application in TypeScript

Source: https://hono.dev/docs/api/hono

This snippet demonstrates how to configure a Hono application to use a specific router implementation, such as `RegExpRouter`, instead of the default `SmartRouter`. It involves importing the desired router and passing an instance to the `router` option during Hono application initialization.

```ts
import { RegExpRouter } from 'hono/router/reg-exp-router'

const app = new Hono({ router: new RegExpRouter() })
```

--------------------------------

### Hono Middleware Priority: Before Handlers

Source: https://context7_llms

Shows the correct placement for middleware in Hono: it should be registered using `app.use()` before the routes it intends to intercept. This ensures the middleware (e.g., `logger()`) executes for all subsequent routes, such as `/foo`, allowing for pre-processing or logging.

```ts
import { Hono } from 'hono'
import { logger } from 'hono/logger'
const app = new Hono()
// ---cut---
app.use(logger())
app.get('/foo', (c) => c.text('foo'))
```

--------------------------------

### Supported JWT Algorithms

Source: https://hono.dev/docs/helpers/jwt

The JWT module supports a comprehensive set of cryptographic algorithms for signing and verifying tokens. Choose the appropriate algorithm based on your security requirements.

```APIDOC
## Supported JWT Algorithms

### Description
The module supports the following JWT cryptographic algorithms for token signing and verification.

### HMAC Algorithms
- **HS256** - HMAC using SHA-256
- **HS384** - HMAC using SHA-384
- **HS512** - HMAC using SHA-512

### RSA Algorithms (PKCS#1 v1.5)
- **RS256** - RSASSA-PKCS1-v1_5 using SHA-256
- **RS384** - RSASSA-PKCS1-v1_5 using SHA-384
- **RS512** - RSASSA-PKCS1-v1_5 using SHA-512

### RSA PSS Algorithms
- **PS256** - RSASSA-PSS using SHA-256 and MGF1 with SHA-256
- **PS384** - RSASSA-PSS using SHA-384 and MGF1 with SHA-384
- **PS512** - RSASSA-PSS using SHA-512 and MGF1 with SHA-512

### ECDSA Algorithms
- **ES256** - ECDSA using P-256 and SHA-256
- **ES384** - ECDSA using P-384 and SHA-384
- **ES512** - ECDSA using P-521 and SHA-512

### EdDSA Algorithm
- **EdDSA** - EdDSA using Ed25519

### Algorithm Selection
Choose based on your security requirements and key infrastructure. HMAC is simpler but requires shared secrets. RSA and ECDSA support public-key cryptography. EdDSA provides modern elliptic curve signing.
```

--------------------------------

### CDK Stack Definition for Hono Lambda@Edge Deployment (TypeScript)

Source: https://context7_llms

This TypeScript code defines an AWS CDK stack (`MyAppStack`) that provisions resources for deploying a Hono application to Lambda@Edge. It creates an S3 bucket for origin content, a Node.js Lambda function (`NodejsFunction`) for the Hono app, and a CloudFront distribution configured to trigger the Lambda function on viewer requests.

```ts
import { Construct } from 'constructs'
import * as cdk from 'aws-cdk-lib'
import * as cloudfront from 'aws-cdk-lib/aws-cloudfront'
import * as origins from 'aws-cdk-lib/aws-cloudfront-origins'
import * as lambda from 'aws-cdk-lib/aws-lambda'
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs'
import * as s3 from 'aws-cdk-lib/aws-s3'

export class MyAppStack extends cdk.Stack {
  public readonly edgeFn: lambda.Function

  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props)
    const edgeFn = new NodejsFunction(this, 'edgeViewer', {
      entry: 'lambda/index_edge.ts',
      handler: 'handler',
      runtime: lambda.Runtime.NODEJS_20_X,
    })

    // Upload any html
    const originBucket = new s3.Bucket(this, 'originBucket')

    new cloudfront.Distribution(this, 'Cdn', {
      defaultBehavior: {
        origin: new origins.S3Origin(originBucket),
        edgeLambdas: [
          {
            functionVersion: edgeFn.currentVersion,
            eventType: cloudfront.LambdaEdgeEventType.VIEWER_REQUEST,
          }
        ]
      }
    })
  }
}
```

--------------------------------

### Define Hono `ProxyFetch` and `ProxyRequestInit` Types

Source: https://context7_llms

This code defines the TypeScript interfaces `ProxyRequestInit` and `ProxyFetch`. `ProxyRequestInit` extends `RequestInit` to include custom options like `raw`, `customFetch`, `strictConnectionProcessing`, and flexible `headers` definitions. `ProxyFetch` is the type signature for the `proxy()` function, indicating it takes an input and optional `ProxyRequestInit` and returns a Promise of a Response.

```ts
interface ProxyRequestInit extends Omit<RequestInit, 'headers'> {
  raw?: Request
  customFetch?: (request: Request) => Promise<Response>
  strictConnectionProcessing?: boolean
  headers?:
    | HeadersInit
    | [string, string][]
    | Record<RequestHeader, string | undefined>
    | Record<string, string | undefined>
}

interface ProxyFetch {
  (
    input: string | URL | Request,
    init?: ProxyRequestInit
  ): Promise<Response>
}
```

--------------------------------

### Return Not Found Response with notFound()

Source: https://hono.dev/docs/api/context

Return a 404 Not Found response using c.notFound(). This method can be customized globally using app.notFound() to provide custom 404 error pages or responses.

```typescript
app.get('/notfound', (c) => {
  return c.notFound()
})
```

--------------------------------

### app.notFound

Source: https://context7_llms

Allows customization of the response returned when no route matches the incoming request, providing a custom 404 Not Found page.

```APIDOC
## app.notFound

### Description
This method enables you to define a custom handler for requests that do not match any defined routes in your Hono application. It allows you to return a personalized 404 Not Found response, improving the user experience for invalid URLs. Note that `notFound` is only called from the top-level app.

### Method
N/A (Handles any unmatched request)

### Endpoint
N/A

### Parameters
#### Path Parameters
N/A

#### Query Parameters
N/A

#### Request Body
N/A

### Request Example
N/A

### Response
#### Success Response (404)
- **body** (string) - The custom message or content for the 404 response.

#### Response Example
```typescript
import { Hono } from 'hono';
const app = new Hono();

app.notFound((c) => {
  return c.text('Custom 404 Message: The page you are looking for does not exist.', 404);
});

// Example of a request that would trigger this:
// GET /non-existent-path
```
```
Custom 404 Message: The page you are looking for does not exist.
```
```

--------------------------------

### Import WebSocket Helper - Cloudflare Workers

Source: https://context7_llms

Import Hono and upgradeWebSocket from the Cloudflare Workers adapter to enable WebSocket support in Cloudflare Workers environments.

```typescript
import { Hono } from 'hono'
import { upgradeWebSocket } from 'hono/cloudflare-workers'
```

--------------------------------

### Define `ToSSGInterface` for Hono Static Site Generation

Source: https://hono.dev/docs/helpers/ssg

This TypeScript interface specifies the contract for the `toSSG` function, detailing its required arguments: a Hono application, a `FileSystemModule`, and optional `ToSSGOptions`. It ensures type safety and consistency when implementing static site generation.

```ts
export interface ToSSGInterface {
  (
    app: Hono,
    fsModule: FileSystemModule,
    options?: ToSSGOptions
  ): Promise<ToSSGResult>
}
```

--------------------------------

### Middleware Execution Order in Hono

Source: https://context7_llms

Demonstrates how middleware executes in registration order with nested pre-next processing and reverse post-next processing. The first registered middleware's pre-next code runs first, while its post-next code runs last, creating a stack-like execution pattern.

```typescript
app.use(async (_, next) => {
  console.log('middleware 1 start')
  await next()
  console.log('middleware 1 end')
})
app.use(async (_, next) => {
  console.log('middleware 2 start')
  await next()
  console.log('middleware 2 end')
})
app.use(async (_, next) => {
  console.log('middleware 3 start')
  await next()
  console.log('middleware 3 end')
})

app.get('/', (c) => {
  console.log('handler')
  return c.text('Hello!')
})
```

--------------------------------

### Default Plugin

Source: https://hono.dev/docs/helpers/ssg

The built-in default plugin for static site generation that automatically skips non-200 status responses including redirects, errors, and 404s. This prevents generating files for unsuccessful responses.

```APIDOC
## defaultPlugin

### Description
The built-in default plugin used by `toSSG` that skips non-200 status responses (redirects, errors, 404s). This prevents generating static files for unsuccessful responses.

### Automatic Application

The `defaultPlugin` is automatically applied when no plugins are specified:

```typescript
import { toSSG, defaultPlugin } from 'hono/ssg'

// defaultPlugin is automatically applied when no plugins specified
toSSG(app, fs)

// Equivalent to:
toSSG(app, fs, { plugins: [defaultPlugin] })
```

### Custom Plugins

When you specify custom plugins, `defaultPlugin` is **not** automatically included. To keep the default behavior while adding custom plugins, explicitly include it:

```typescript
toSSG(app, fs, {
  plugins: [defaultPlugin, myCustomPlugin]
})
```

### Behavior
- Skips responses with status codes other than 200
- Prevents generation of redirect pages (301, 302, 303, 307, 308)
- Prevents generation of error pages (4xx, 5xx)
- Only generates files for successful responses
```

--------------------------------

### Configure Custom Port Number in Hono Bun Application

Source: https://context7_llms

Demonstrates how to export a configuration object with a custom port number instead of the default port 3000 when running Hono on Bun.

```typescript
import { Hono } from 'hono'

const app = new Hono()
app.get('/', (c) => c.text('Hello Bun!'))

export default {
  port: 3000,
  fetch: app.fetch,
}
```

--------------------------------

### Create Sitemap XML Plugin for Hono SSG

Source: https://context7_llms

Implements an advanced SSG plugin that generates a sitemap.xml file after the generation process. Takes a baseURL parameter and creates a properly formatted XML sitemap with all generated file URLs.

```typescript
// plugins.ts
import fs from 'node:fs/promises'
import path from 'node:path'
import type { SSGPlugin } from 'hono/ssg'
import { DEFAULT_OUTPUT_DIR } from 'hono/ssg'

export const sitemapPlugin = (baseURL: string): SSGPlugin => {
  return {
    afterGenerateHook: (result, fsModule, options) => {
      const outputDir = options?.dir ?? DEFAULT_OUTPUT_DIR
      const filePath = path.join(outputDir, 'sitemap.xml')
      const urls = result.files.map((file) =>
        new URL(file, baseURL).toString()
      )
      const siteMapText = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((url) => `<url><loc>${url}</loc></url>`).join('\n')}
</urlset>`
      fsModule.writeFile(filePath, siteMapText)
    },
  }
}
```

--------------------------------

### Display Cloudflare Workers Router Benchmark Results (Shell)

Source: https://context7_llms

This shell output presents the performance benchmark results for various JavaScript routers when deployed on Cloudflare Workers. It quantifies operations per second for Hono, itty-router, sunder, and worktop, clearly identifying Hono as the fastest among the tested options.

```shell
Hono x 402,820 ops/sec ±4.78% (80 runs sampled)
itty-router x 212,598 ops/sec ±3.11% (87 runs sampled)
sunder x 297,036 ops/sec ±4.76% (77 runs sampled)
worktop x 197,345 ops/sec ±2.40% (88 runs sampled)
Fastest is Hono
✨  Done in 28.06s.
```

--------------------------------

### Import WebSocket Upgrade from Cloudflare Workers Adapter

Source: https://context7_llms

Demonstrates how to import and use the upgradeWebSocket function from the Cloudflare Workers adapter to handle WebSocket connections in Hono applications. This adapter enables platform-specific functionality for WebSocket handling.

```typescript
import { upgradeWebSocket } from 'hono/cloudflare-workers'

app.get(
  '/ws',
  upgradeWebSocket((c) => {
    // ...
  })
)
```

--------------------------------

### Import Testing Helper in Hono

Source: https://hono.dev/docs/helpers/testing

Import the Hono framework and testClient function from the testing module. This is the first step to set up testing utilities for your Hono application.

```typescript
import { Hono } from 'hono'
import { testClient } from 'hono/testing'
```

--------------------------------

### Define Hono SSG Options Interface (TypeScript)

Source: https://hono.dev/docs/helpers/ssg

This TypeScript interface defines the configuration options available for the `toSSG` function. It specifies properties like the output directory (`dir`), the number of concurrent file generations (`concurrency`), a map for custom file extensions (`extensionMap`), and an array of SSG plugins.

```ts
export interface ToSSGOptions {
  dir?: string
  concurrency?: number
  extensionMap?: Record<string, string>
  plugins?: SSGPlugin[]
}
```

--------------------------------

### Custom Fetch Method Configuration

Source: https://context7_llms

Configure a custom fetch method for the Hono client, useful for service bindings and specialized fetch implementations like Cloudflare Workers.

```APIDOC
## Custom Fetch Method

### Description
Set a custom fetch method for the Hono client to use alternative fetch implementations, such as Cloudflare Worker Service Bindings.

### Configuration

#### Wrangler Configuration
```toml
services = [
  { binding = "AUTH", service = "auth-service" },
]
```

#### Client Setup
```ts
const client = hc<CreateProfileType>('http://localhost', {
  fetch: c.env.AUTH.fetch.bind(c.env.AUTH),
})
```

### Parameters
- **fetch** (function) - Optional - Custom fetch method to use instead of default

### Use Cases
- Cloudflare Worker Service Bindings
- Custom authentication fetch wrappers
- Specialized request handling
- Service-to-service communication

### Notes
- Bind the fetch method to maintain proper context
- Useful for microservice architectures
- Enables service-to-service authentication
```

--------------------------------

### Import html and raw helpers from Hono

Source: https://hono.dev/docs/helpers/html

Import the html and raw functions from the hono/html module to enable HTML template literal syntax in your Hono application.

```typescript
import { Hono } from 'hono'
import { html, raw } from 'hono/html'
```

--------------------------------

### Access Route Information in Hono Sub-applications

Source: https://context7_llms

This snippet illustrates how route helper functions behave when working with Hono sub-applications. It demonstrates the distinction between `routePath()` (the route pattern within the sub-app), `baseRoutePath()` (the base path pattern of the sub-app), and `basePath()` (the actual base path with resolved parameters from the request).

```ts
const app = new Hono()
const apiApp = new Hono()

apiApp.get('/posts/:id', (c) => {
  return c.json({
    routePath: routePath(c), // '/posts/:id'
    baseRoutePath: baseRoutePath(c), // '/api'
    basePath: basePath(c), // '/api' (with actual params)
  })
})

app.route('/api', apiApp)
```

--------------------------------

### Define package.json for Vite/Hono Project (JSON)

Source: https://hono.dev/docs/getting-started/service-worker

Sets up the `package.json` file, defining the project name, privacy settings, a 'dev' script for running Vite, and specifying the module type as 'module'. This configuration is essential for a modern JavaScript project using Vite, enabling development commands and module resolution.

```json
{
  "name": "my-app",
  "private": true,
  "scripts": {
    "dev": "vite dev"
  },
  "type": "module"
}
```

--------------------------------

### Configure hono/jsx/dom Runtime - tsconfig.json

Source: https://context7_llms

Set up the lightweight hono/jsx/dom runtime for client-side components to reduce bundle size. Modify jsxImportSource to use hono/jsx/dom instead of hono/jsx.

```json
{
  "compilerOptions": {
    "jsx": "react-jsx",
    "jsxImportSource": "hono/jsx/dom"
  }
}
```

--------------------------------

### Configure Bun for large Hono requests using `Bun.serve`

Source: https://context7_llms

This snippet illustrates how to configure `maxRequestBodySize` directly within the `Bun.serve()` call. This is necessary to accommodate large request bodies processed by Hono's Body Limit Middleware, overriding Bun's default limit and allowing Hono to handle requests that exceed 128MiB.

```ts
Bun.serve({
  fetch(req, server) {
    return app.fetch(req, { ip: server.requestIP(req) })
  },
  maxRequestBodySize: 1024 * 1024 * 200
})
```