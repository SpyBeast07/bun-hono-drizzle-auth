### Initialize Qwik App with Bun

Source: https://bun.sh/docs/guides/ecosystem/qwik

This command initializes a new Qwik application. When executed with `bunx`, it automatically detects the environment and uses Bun to install project dependencies. The process guides the user through project setup, starter selection, and dependency installation.

```sh
bun create qwik
```

--------------------------------

### Example Test Setup Script

Source: https://bun.sh/docs/test/configuration

A TypeScript example demonstrating a `test-setup.ts` file used for global test setup, including database initialization and cleanup using `beforeAll` and `afterAll` hooks from `bun:test`.

```typescript
// Global test setup
import { beforeAll, afterAll } from "bun:test";

beforeAll(() => {
  // Set up test database
  setupTestDatabase();
});

afterAll(() => {
  // Clean up
  cleanupTestDatabase();
});
```

--------------------------------

### Start a WebSocket Server

Source: https://bun.sh/docs/runtime/http/websockets

This example demonstrates how to start a basic WebSocket server using `Bun.serve()`. All incoming requests are upgraded to WebSocket connections.

```APIDOC
## POST /ws

### Description
Starts a WebSocket server that upgrades incoming HTTP requests to WebSocket connections.

### Method
POST

### Endpoint
/

### Parameters
#### Query Parameters
None

#### Request Body
None

### Request Example
```typescript
Bun.serve({
  fetch(req, server) {
    // upgrade the request to a WebSocket
    if (server.upgrade(req)) {
      return; // do not return a Response
    }
    return new Response("Upgrade failed", { status: 500 });
  },
  websocket: {},
});
```

### Response
#### Success Response (200)
No explicit response body for a successful upgrade; the connection is upgraded.

#### Response Example
(Connection upgraded to WebSocket)
```

--------------------------------

### Plugin Definition Example

Source: https://bun.sh/docs/bundler/esbuild

An example of how to define a basic Bun plugin using the `BunPlugin` type and the `setup` function.

```APIDOC
## Plugin Definition Example

This example demonstrates how to define a simple Bun plugin.

### Method
N/A (This is a code definition, not an API endpoint)

### Endpoint
N/A

### Request Body
```typescript
import type { BunPlugin } from "bun";

const myPlugin: BunPlugin = {
  name: "my-plugin",
  setup(builder) {
    // Plugin logic goes here
    builder.onStart(() => {
      console.log("Bundle started!");
    });

    builder.onResolve({ filter: /some-module/ }, async (args) => {
      console.log("Resolving module:", args.path);
      // Return resolution result
      return { path: args.path };
    });

    builder.onLoad({ filter: /.*/ }, async (args) => {
      console.log("Loading file:", args.path);
      // Return loaded content
      return {
        contents: `export default "Hello from ${args.path}"`, 
        loader: "js"
      };
    });

    builder.onEnd(result => {
      console.log("Bundle finished with result:", result);
    });
  },
};

export default myPlugin;
```

### Response
N/A
```

--------------------------------

### Write a Simple HTTP Server with Bun

Source: https://bun.sh/docs/guides

This guide demonstrates how to create a basic HTTP server using Bun. It covers the fundamental setup and handling of incoming requests. No external dependencies are required.

```typescript
const server = Bun.serve({
  fetch(req) {
    return new Response("Hello Bun!");
  },
});

console.log(`Listening on http://localhost:${server.port}`);
```

--------------------------------

### Install Dependencies and Run Dev Server with Bun

Source: https://bun.sh/docs/guides/ecosystem/solidstart

Installs project dependencies using `bun install` and starts the development server with `bun dev`. These commands are typically run after initializing a SolidStart project. Ensure you are in the project directory.

```sh
cd my-app
bun install
```

```sh
bun dev
```

--------------------------------

### Start Simple HTTP Server with Bun.js

Source: https://bun.sh/docs/guides/http/simple

This code snippet demonstrates how to start an HTTP server using Bun.js. The server listens on port 3000 and responds to all incoming requests with a 'Welcome to Bun!' message. It utilizes the `Bun.serve` function for server creation. Ensure Bun.js is installed to run this code.

```typescript
const server = Bun.serve({
  port: 3000,
  fetch(request) {
    return new Response("Welcome to Bun!");
  },
});

console.log(`Listening on ${server.url}`);
```

--------------------------------

### Bun HTTP Server Basic Setup with Routes

Source: https://bun.sh/docs/runtime/http/server

Demonstrates how to start a high-performance HTTP server using Bun.serve with various routing configurations, including static, dynamic, method-specific, wildcard, and file serving routes. It also shows how to define a fallback fetch handler for unmatched routes.

```typescript
const server = Bun.serve({
  // `routes` requires Bun v1.2.3+
  routes: {
    // Static routes
    "/api/status": new Response("OK"),

    // Dynamic routes
    "/users/:id": req => {
      return new Response(`Hello User ${req.params.id}!`);
    },

    // Per-HTTP method handlers
    "/api/posts": {
      GET: () => new Response("List posts"),
      POST: async req => {
        const body = await req.json();
        return Response.json({ created: true, ...body });
      },
    },

    // Wildcard route for all routes that start with "/api/" and aren't otherwise matched
    "/api/*": Response.json({ message: "Not found" }, { status: 404 }),

    // Redirect from /blog/hello to /blog/hello/world
    "/blog/hello": Bun.redirect("/blog/hello/world"),

    // Serve a file by lazily loading it into memory
    "/favicon.ico": Bun.file("./favicon.ico"),
  },

  // (optional) fallback for unmatched routes:
  // Required if Bun's version < 1.2.3
  fetch(req) {
    return new Response("Not Found", { status: 404 });
  },
});

console.log(`Server running at ${server.url}`);
```

--------------------------------

### Bun: Running Global Setup with CLI and Config

Source: https://bun.sh/docs/test/lifecycle

Provides examples of how to execute global setup and teardown scripts in Bun tests. This can be done via the command line using `bun test --preload ./setup.ts` or by configuring the `preload` array in the `bunfig.toml` file.

```bash
bun test --preload ./setup.ts
```

```toml
[test]
preload = ["./setup.ts"]
```

--------------------------------

### Build a Simple WebSocket Server with Bun

Source: https://bun.sh/docs/guides

This guide explains how to build a simple WebSocket server using Bun. It covers the setup for handling WebSocket connections and messages. This is useful for real-time communication applications.

```typescript
const server = Bun.serve({
  fetch(req) {
    if (server.upgrade(req)) {
      return new Response();
    }
    return new Response("Hello Bun!");
  },
  websocket: {
    open(ws) {
      console.log("New WebSocket connection");
    },
    message(ws, message) {
      console.log(`Received: ${message}`);
      ws.send(`Echo: ${message}`);
    },
    close() {
      console.log("WebSocket connection closed");
    },
  },
});

console.log(`WebSocket server listening on ws://localhost:${server.port}`);
```

--------------------------------

### Bun Auto-install Example

Source: https://bun.sh/docs/runtime/auto-install

Demonstrates Bun's auto-installation of a package 'foo' when it's imported in a TypeScript script. If 'foo' is not found, Bun installs the latest version automatically.

```typescript
import { foo } from "foo"; // install `latest` version

foo();
```

--------------------------------

### Install Bun (Native)

Source: https://bun.sh/docs/project/contributing

Installs the latest release of Bun directly using the official installation script. This is a common method for getting Bun on most systems.

```bash
curl -fsSL https://bun.com/install | bash
```

--------------------------------

### Create TanStack Start App using Bun

Source: https://bun.sh/docs/guides/ecosystem/tanstack-start

Initializes a new TanStack Start application using the TanStack CLI and Bun. This command requires Bun to be installed on your system.

```shell
bunx @tanstack/cli create my-tanstack-app
```

--------------------------------

### Install and Run Bun in GitHub Actions (YAML)

Source: https://bun.sh/docs/guides/runtime/cicd

Installs and runs Bun in GitHub Actions using the official `setup-bun` action. It demonstrates how to check out code, set up Bun, and execute common Bun commands like `install`, `index.ts`, and `build`.

```yaml
name: my-workflow
jobs:
  my-job:
    name: my-job
    runs-on: ubuntu-latest
    steps:
      # ...
      - uses: actions/checkout@v4
      - uses: oven-sh/setup-bun@v2

      # run any `bun` or `bunx` command
      - run: bun install
      - run: bun index.ts
      - run: bun run build
```

--------------------------------

### Install Bun in GitHub Actions

Source: https://bun.sh/docs/pm/cli/install

This YAML snippet demonstrates how to set up Bun within a GitHub Actions workflow. It checks out the repository, installs Bun using the official setup-bun action, and then proceeds to install dependencies and build the application.

```yaml
name: bun-types
jobs:
  build:
    name: build-app
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repo
        uses: actions/checkout@v4
      - name: Install bun
        uses: oven-sh/setup-bun@v2
      - name: Install dependencies
        run: bun install
      - name: Build app
        run: bun run build
```

--------------------------------

### Install Bun (npm)

Source: https://bun.sh/docs/project/contributing

Installs Bun globally using npm. This method requires Node.js and npm to be installed on your system.

```bash
npm install -g bun
```

--------------------------------

### Install with Clonefile Backend (Bash)

Source: https://bun.sh/docs/pm/cli/install

Installs dependencies using the 'clonefile' backend, the default and fastest on macOS. This backend is macOS-specific and optimizes installation by cloning files efficiently. Ensure node_modules is removed before running.

```bash
rm -rf node_modules
bun install --backend clonefile
```

--------------------------------

### Installing Workspace Dependencies with Filters

Source: https://bun.sh/docs/pm/workspaces

Provides examples of using the `bun install` command with the `--filter` flag to manage dependencies across workspaces. It demonstrates how to include or exclude specific packages based on their names or paths.

```bash
# Install dependencies for all workspaces starting with `pkg-` except for `pkg-c`
bun install --filter "pkg-*" --filter "!pkg-c"

# Paths can also be used. This is equivalent to the command above.
bun install --filter "./packages/pkg-*" --filter "!pkg-c" # or --filter "!./packages/pkg-c"
```

--------------------------------

### Install with Copyfile Backend (Bash)

Source: https://bun.sh/docs/pm/cli/install

Installs dependencies using the 'copyfile' backend, which serves as a fallback when other backends fail. This method involves copying files and is generally the slowest. It uses fcopyfile() on macOS and copy_file_range() on Linux. Ensure node_modules is removed before running.

```bash
rm -rf node_modules
bun install --backend copyfile
```

--------------------------------

### Install ccache (openSUSE)

Source: https://bun.sh/docs/project/contributing

Installs `ccache` on openSUSE using zypper. This command requires sudo privileges.

```bash
sudo zypper install ccache
```

--------------------------------

### Basic Bun.serve() Routing Setup

Source: https://bun.sh/docs/runtime/http/routing

Demonstrates the basic setup for Bun.serve() with static routes for '/', '/api', and '/users', along with a fallback fetch handler for unmatched routes. Routes can handle standard HTTP requests and return Responses or Promises of Responses.

```typescript
Bun.serve({
  routes: {
    "/": () => new Response("Home"),
    "/api": () => Response.json({ success: true }),
    "/users": async () => Response.json({ users: [] }),
  },
  fetch() {
    return new Response("Unmatched route");
  },
});
```

--------------------------------

### Install NAPI CLI and Bun Native Plugin Crate

Source: https://bun.sh/docs/bundler/plugins

Installs the NAPI CLI globally and adds the `bun-native-plugin` crate to your Rust project. These are the initial steps required to start developing native plugins for Bun.

```bash
bun add -g @napi-rs/cli
napi new
cargo add bun-native-plugin
```

--------------------------------

### Define HTTP Route and Start Express Server with Bun

Source: https://bun.sh/docs/guides/ecosystem/express

Defines a basic HTTP GET route for the root path and starts an Express server listening on port 8080. This code requires the 'express' package to be installed.

```typescript
import express from "express";

const app = express();
const port = 8080;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
```

--------------------------------

### Install Bun (Homebrew)

Source: https://bun.sh/docs/project/contributing

Installs Bun on macOS using Homebrew. This command first taps the official Bun repository and then installs the bun package.

```bash
brew tap oven-sh/bun
brew install bun
```

--------------------------------

### Glob Quickstart

Source: https://bun.sh/docs/runtime/glob

Demonstrates how to scan a directory for files matching a pattern and how to match a string against a glob pattern using Bun's Glob class.

```APIDOC
## POST /websites/bun_sh

### Description
This section provides quickstart examples for using Bun's Glob class. It shows how to scan directories for files matching a specified pattern (e.g., `*.ts`) and how to check if a given string matches a glob pattern.

### Method
GET

### Endpoint
/websites/bun_sh

### Parameters
#### Path Parameters
None

#### Query Parameters
None

#### Request Body
None

### Request Example
```json
{
  "example": "No request body needed for this documentation example."
}
```

### Response
#### Success Response (200)
- **documentation_content** (string) - The markdown content detailing the Glob API and its usage.

#### Response Example
```json
{
  "documentation_content": "## Documentation Index\nFetch the complete documentation index at: https://bun.com/docs/llms.txt\nUse this file to discover all available pages before exploring further.\n\n# Glob\n\n> Use Bun\'s fast native implementation of file globbing\n\n## Quickstart\n\n**Scan a directory for files matching `*.ts`**:\n\n```ts  theme=\"{\\\"theme\\\":{\\\"light\\\":\\\"github-light\\\",\\\"dark\\\":\\\"dracula\\\"}}\"\nimport { Glob } from \"bun\";\n\nconst glob = new Glob(\"**/*.ts\");\n\n// Scans the current working directory and each of its sub-directories recursively\nfor await (const file of glob.scan(\".\")) {\n  console.log(file); // => \"index.ts\"\n}\n```\n\n**Match a string against a glob pattern**:\n\n```ts  theme=\"{\\\"theme\\\":{\\\"light\\\":\\\"github-light\\\",\\\"dark\\\":\\\"dracula\\\"}}\"\nimport { Glob } from \"bun\";\n\nconst glob = new Glob(\"*.ts\");\n\nglob.match(\"index.ts\"); // => true\nglob.match(\"index.js\"); // => false\n```\n\n`Glob` is a class which implements the following interface:\n\n```ts  theme=\"{\\\"theme\\\":{\\\"light\\\":\\\"github-light\\\",\\\"dark\\\":\\\"dracula\\\"}}\"\nclass Glob {\n  scan(root: string | ScanOptions): AsyncIterable<string>;\n  scanSync(root: string | ScanOptions): Iterable<string>;\n\n  match(path: string): boolean;\n}\n\ninterface ScanOptions {\n  /**\n   * The root directory to start matching from. Defaults to `process.cwd()`\n   */\n  cwd?: string;\n\n  /**\n   * Allow patterns to match entries that begin with a period (`.`).\n   *\n   * @default false\n   */\n  dot?: boolean;\n\n  /**\n   * Return the absolute path for entries.\n   *\n   * @default false\n   */\n  absolute?: boolean;\n\n  /**\n   * Indicates whether to traverse descendants of symbolic link directories.\n   *\n   * @default false\n   */\n  followSymlinks?: boolean;\n\n  /**\n   * Throw an error when symbolic link is broken\n   *\n   * @default false\n   */\n  throwErrorOnBrokenSymlink?: boolean;\n\n  /**\n   * Return only files.\n   *\n   * @default true\n   */\n  onlyFiles?: boolean;\n}\n```\n\n## Supported Glob Patterns\n\nBun supports the following glob patterns:\n\n### `?` - Match any single character\n\n```ts  theme=\"{\\\"theme\\\":{\\\"light\\\":\\\"github-light\\\",\\\"dark\\\":\\\"dracula\\\"}}\"\nconst glob = new Glob(\"???.ts\");\nglob.match(\"foo.ts\"); // => true\nglob.match(\"foobar.ts\"); // => false\n```\n\n### `*` - Matches zero or more characters, except for path separators (`/` or `\`)\n\n```ts  theme=\"{\\\"theme\\\":{\\\"light\\\":\\\"github-light\\\",\\\"dark\\\":\\\"dracula\\\"}}\"\nconst glob = new Glob(\"*.ts\");\nglob.match(\"index.ts\"); // => true\nglob.match(\"src/index.ts\"); // => false\n```\n\n### `**` - Match any number of characters including `/`\n\n```ts  theme=\"{\\\"theme\\\":{\\\"light\\\":\\\"github-light\\\",\\\"dark\\\":\\\"dracula\\\"}}\"\nconst glob = new Glob(\"**/*.ts\");\nglob.match(\"index.ts\"); // => true\nglob.match(\"src/index.ts\"); // => true\nglob.match(\"src/index.js\"); // => false\n```\n\n### `[ab]` - Matches one of the characters contained in the brackets, as well as character ranges\n\n```ts  theme=\"{\\\"theme\\\":{\\\"light\\\":\\\"github-light\\\",\\\"dark\\\":\\\"dracula\\\"}}\"\nconst glob = new Glob(\"ba[rz].ts\");\nglob.match(\"bar.ts\"); // => true\nglob.match(\"baz.ts\"); // => true\nglob.match(\"bat.ts\"); // => false\n```\n\nYou can use character ranges (e.g `[0-9]`, `[a-z]`) as well as the negation operators `^` or `!` to match anything *except* the characters contained within the braces (e.g `[^ab]`, `[!a-z]`)\n\n```ts  theme=\"{\\\"theme\\\":{\\\"light\\\":\\\"github-light\\\",\\\"dark\\\":\\\"dracula\\\"}}\"\nconst glob = new Glob(\"ba[a-z][0-9][^4-9].ts\");\nglob.match(\"bar01.ts\"); // => true\nglob.match(\"baz83.ts\"); // => true\nglob.match(\"bat22.ts\"); // => true\nglob.match(\"bat24.ts\"); // => false\nglob.match(\"ba0a8.ts\"); // => false\n```\n\n### `{a,b,c}` - Match any of the given patterns\n\n```ts  theme=\"{\\\"theme\\\":{\\\"light\\\":\\\"github-light\\\",\\\"dark\\\":\\\"dracula\\\"}}\"\nconst glob = new Glob(\"{a,b,c}.ts\");\nglob.match(\"a.ts\"); // => true\nglob.match(\"b.ts\"); // => true\nglob.match(\"c.ts\"); // => true\nglob.match(\"d.ts\"); // => false\n```\n\nThese match patterns can be deeply nested (up to 10 levels), and contain any of the wildcards from above.\n\n### `!` - Negates the result at the start of a pattern\n\n```ts  theme=\"{\\\"theme\\\":{\\\"light\\\":\\\"github-light\\\",\\\"dark\\\":\\\"dracula\\\"}}\"\nconst glob = new Glob(\"\!index.ts\");\nglob.match(\"index.ts\"); // => false\nglob.match(\"foo.ts\"); // => true\n```\n\n### `\` - Escapes any of the special characters above\n\n```ts  theme=\"{\\\"theme\\\":{\\\"light\\\":\\\"github-light\\\",\\\"dark\\\":\\\"dracula\\\"}}\"\nconst glob = new Glob(\"\\\!index.ts\");\nglob.match(\"\!index.ts\"); // => true\nglob.match(\"index.ts\"); // => false\n```\n\n## Node.js `fs.glob()` compatibility\n\nBun also implements Node.js\'s `fs.glob()` functions with additional features:\n\n```ts  theme=\"{\\\"theme\\\":{\\\"light\\\":\\\"github-light\\\",\\\"dark\\\":\\\"dracula\\\"}}\"\nimport { glob, globSync, promises } from \"node:fs\";\n\n// Array of patterns\nconst files = await promises.glob([\"**/*.ts\", \"**/*.js\"]);\n\n// Exclude patterns\nconst filtered = await promises.glob(\"**/*\", {\n  exclude: [\"node_modules/**\", \"*.test.*\"]\n});\n```\n\nAll three functions (`fs.glob()`, `fs.globSync()`, `fs.promises.glob()`) support:\n\n* Array of patterns as the first argument\n* `exclude` option to filter results\n"
}
```
    }
  ]
}
```
```

--------------------------------

### Add Start Script to package.json

Source: https://bun.sh/docs/quickstart

This JSON snippet shows how to add a 'start' script to the package.json file. This script utilizes 'bun run index.ts' to execute the main server file. Adding this script allows for convenient execution using 'bun run start'.

```json
{
  "name": "quickstart",
  "module": "index.ts",
  "type": "module",
  "private": true,
  "scripts": { // [!code ++]
    "start": "bun run index.ts" // [!code ++]
  }, // [!code ++]
  "devDependencies": {
    "@types/bun": "latest"
  },
  "peerDependencies": {
    "typescript": "^5"
  }
}
```

--------------------------------

### Install with Clonefile-Each-Dir Backend (Bash)

Source: https://bun.sh/docs/pm/cli/install

Installs dependencies using the 'clonefile_each_dir' backend on macOS. This method clones each file individually per directory, which may be slower than the standard 'clonefile' backend but offers different cloning behavior. Ensure node_modules is removed before running.

```bash
rm -rf node_modules
bun install --backend clonefile_each_dir
```

--------------------------------

### Execute Bun Script from Terminal

Source: https://bun.sh/docs/quickstart

This bash command demonstrates how to run the 'start' script defined in the package.json file using Bun. This is a common way to start development servers or application processes. The output indicates the server is listening on the specified port.

```bash
bun run start
```

--------------------------------

### Get Path to Executable Bin File

Source: https://bun.sh/docs/guides

Retrieves the absolute path to a specified executable binary file. This is useful for locating system commands or installed programs.

```javascript
import { which } from "bun";

const path = await which("node");
console.log(path);
```

--------------------------------

### Omit Specific Dependencies During Bun Install

Source: https://bun.sh/docs/pm/cli/install

Allows excluding specific types of dependencies (e.g., `dev`, `peer`, `optional`) during the installation process. This provides fine-grained control over what gets installed.

```bash
# Exclude "devDependencies" from the installation.
bun install --omit dev

# Install only dependencies from "dependencies"
bun install --omit=dev --omit=peer --omit=optional
```

--------------------------------

### Define HTTP Route with Elysia and Bun

Source: https://bun.sh/docs/guides/ecosystem/elysia

A TypeScript example demonstrating how to define a simple HTTP GET route using Elysia. This code initializes an Elysia app, sets up a route for the root path ('/') that returns 'Hello Elysia', and starts the server listening on port 8080.

```typescript
import { Elysia } from "elysia";

const app = new Elysia().get("/", () => "Hello Elysia").listen(8080);

console.log(`🦊 Elysia is running at on port ${app.server?.port}...`);
```

--------------------------------

### Install Dependencies with Bun

Source: https://bun.sh/docs/guides/ecosystem/vite

Navigate to the project directory and use `bun install` to download and install project dependencies. Bun is a faster alternative to npm or yarn.

```bash
cd my-app
bun install
```

--------------------------------

### Start TanStack Start Dev Server with Bun

Source: https://bun.sh/docs/guides/ecosystem/tanstack-start

Navigates into the newly created TanStack Start project directory and starts the development server using Bun. This command assumes the project has already been created.

```shell
cd my-tanstack-app
bun --bun run dev
```

--------------------------------

### Creating a Native Plugin in Rust

Source: https://bun.sh/docs/runtime/plugins

This section details the steps to create a native plugin using Rust and NAPI for Bun. It covers installation, project setup, and implementing lifecycle hooks.

```APIDOC
## Creating a Native Plugin in Rust

Native plugins are NAPI modules which expose lifecycle hooks as C ABI functions.

To create a native plugin, you must export a C ABI function which matches the signature of the native lifecycle hook you want to implement.

### Installation

```bash
bun add -g @napi-rs/cli
napi new
```

### Adding the Crate

```bash
cargo add bun-native-plugin
```

### Implementing the `onBeforeParse` Hook

Inside the `lib.rs` file, use the `bun_native_plugin::bun` proc macro to define a function that implements a native plugin hook. Here's an example for `onBeforeParse`:

```rust
use bun_native_plugin::{define_bun_plugin, OnBeforeParse, bun, Result, anyhow, BunLoader};
use napi_derive::napi;

/// Define the plugin and its name
define_bun_plugin!("replace-foo-with-bar");

/// Implements `onBeforeParse` to replace all occurrences of `foo` with `bar`.
///
/// The `#[bun]` macro generates boilerplate code.
/// The function argument (`handle: &mut OnBeforeParse`) indicates that this function implements the `onBeforeParse` hook.
#[bun]
pub fn replace_foo_with_bar(handle: &mut OnBeforeParse) -> Result<()> {
  // Fetch the input source code.
  let input_source_code = handle.input_source_code()?;

  // Get the Loader for the file
  let loader = handle.output_loader();

  let output_source_code = input_source_code.replace("foo", "bar");

  handle.set_output_source_code(output_source_code, BunLoader::BUN_LOADER_JSX);

  Ok(())
}
```

### Usage in `Bun.build()`

```typescript
import myNativeAddon from "./my-native-addon";

Bun.build({
  entrypoints: ["./app.tsx"],
  plugins: [
    {
      name: "my-plugin",
      setup(build) {
        build.onBeforeParse(
          {
            namespace: "file",
            filter: "**/*.tsx",
          },
          {
            napiModule: myNativeAddon,
            symbol: "replace_foo_with_bar",
            // external: myNativeAddon.getSharedState()
          },
        );
      },
    },
  ],
});
```
```

--------------------------------

### Astro Project Initialization Output

Source: https://bun.sh/docs/guides/ecosystem/astro

The output from the `bun create astro` command, detailing project setup steps like directory selection, template choice, dependency installation, TypeScript configuration, and Git initialization.

```txt
╭─────╮  Houston:
│ ◠ ◡ ◠  We're glad to have you on board.
╰─────╯

 astro   v3.1.4 Launch sequence initiated.

   dir   Where should we create your new project?
         ./fumbling-field

  tmpl   How would you like to start your new project?
         Use blog template
      ✔  Template copied

  deps   Install dependencies?
         Yes
      ✔  Dependencies installed

    ts   Do you plan to write TypeScript?
         Yes

   use   How strict should TypeScript be?
         Strict
      ✔  TypeScript customized

   git   Initialize a new git repository?
         Yes
      ✔  Git initialized

  next   Liftoff confirmed. Explore your project!

         Enter your project directory using cd ./fumbling-field
         Run `bun run dev` to start the dev server. CTRL+C to stop.
         Add frameworks like react or tailwind using astro add.

         Stuck? Join us at https://astro.build/chat

╭─────╮  Houston:
│ ◠ ◡ ◠  Good luck out there, astronaut! 🚀
╰─────╯
```

--------------------------------

### Start Remix Production Server with Bun

Source: https://bun.sh/docs/guides/ecosystem/remix

Starts the production server for the built Remix application using Bun. This command serves the application from the build output.

```sh
bun start
```

--------------------------------

### Initialize Bun Project and Install Prisma Dependencies

Source: https://bun.sh/docs/guides/ecosystem/prisma-postgres

This snippet shows how to create a new Bun project and install the necessary Prisma packages, including the Prisma CLI, Prisma Client, and the Accelerate extension.

```bash
mkdir prisma-postgres-app
cd prisma-postgres-app
bun init
bun add -d prisma
bun add @prisma/client @prisma/extension-accelerate
```

--------------------------------

### Update package.json Scripts for Building and Starting (JSON)

Source: https://bun.sh/docs/guides/ecosystem/tanstack-start

Modifies the scripts section of the package.json file to include build and start commands. The build command uses Vite with Bun, and the start command executes the Nitro output server. Note: The custom start script is not needed for Vercel deployments.

```json
{
  "scripts": {
    "build": "bun --bun vite build", // [!code ++]
    // The .output files are created by Nitro when you run `bun run build`.
    // Not necessary when deploying to Vercel.
    "start": "bun run .output/server/index.mjs" // [!code ++]
  }
}
```

--------------------------------

### Install ccache (Fedora)

Source: https://bun.sh/docs/project/contributing

Installs `ccache` on Fedora using dnf. This command requires sudo privileges.

```bash
sudo dnf install ccache
```

--------------------------------

### Install with Hardlink Backend (Bash)

Source: https://bun.sh/docs/pm/cli/install

Installs dependencies using the 'hardlink' backend, which is the default and fastest on Linux. This method creates hard links to cached files instead of copying them, optimizing installation speed. Ensure node_modules is removed before running.

```bash
rm -rf node_modules
bun install --backend hardlink
```

--------------------------------

### Start a Basic WebSocket Server with Bun.serve

Source: https://bun.sh/docs/runtime/http/websockets

This snippet demonstrates how to initiate a WebSocket server using `Bun.serve()`. It upgrades incoming HTTP requests to WebSocket connections within the `fetch` handler. The `websocket` parameter is used to declare handlers for socket events, though it's empty in this basic example.

```typescript
Bun.serve({
  fetch(req, server) {
    // upgrade the request to a WebSocket
    if (server.upgrade(req)) {
      return;
    }
    return new Response("Upgrade failed", { status: 500 });
  },
  websocket: {}, // handlers
});
```

--------------------------------

### Start SvelteKit Development Server with Bun

Source: https://bun.sh/docs/guides/ecosystem/sveltekit

Navigate into the newly created project directory and start the development server using Bun. This command leverages Vite for fast hot-reloading.

```sh
cd my-app
bun --bun run dev
```

--------------------------------

### Install ccache (Ubuntu/Debian)

Source: https://bun.sh/docs/project/contributing

Installs `ccache` on Ubuntu or Debian-based systems using apt. This command requires sudo privileges.

```bash
sudo apt install ccache
```

--------------------------------

### Bun Installation Strategies with Backend Flag (Bash)

Source: https://bun.sh/docs/pm/global-cache

This snippet demonstrates how to use the `--backend` flag with `bun install` to control the file copying strategy. It shows an example of using `--backend symlink` and the corresponding Node.js flag `--preserve-symlinks`.

```bash
bun install --backend symlink
node --preserve-symlinks ./foo.js

```

--------------------------------

### Bun Install General Configuration Options

Source: https://bun.sh/docs/pm/cli/install

Flags to specify configuration files and the current working directory for the Bun installation process.

```sh
bun install --config <path_to_config>
bun install --cwd <specific_cwd>
```

--------------------------------

### Build and Run Bun Application

Source: https://bun.sh/docs/guides/ecosystem/tanstack-start

These commands demonstrate how to build your application using Bun and then start the custom server. The server defaults to port 3000 but can be configured using the PORT environment variable.

```sh
bun run build
bun run start
```

--------------------------------

### bunx examples

Source: https://bun.sh/docs/pm/bunx

Illustrative examples of using bunx for common tasks. These include running database migrations with Prisma, formatting code with Prettier, executing a specific version of a package, and using the '--package' flag when binary and package names differ.

```bash
# Run Prisma migrations
bunx prisma migrate

# Format a file with Prettier
bunx prettier foo.js

# Run a specific version of a package
bunx uglify-js@3.14.0 app.js

# Use --package when binary name differs from package name
bunx -p @angular/cli ng new my-app
```

--------------------------------

### Install ccache (Arch Linux)

Source: https://bun.sh/docs/project/contributing

Installs `ccache` on Arch Linux using pacman. This command requires sudo privileges.

```bash
sudo pacman -S ccache
```

--------------------------------

### Bun Bundler: CLI Command Example

Source: https://bun.sh/docs/bundler

Shows the command-line interface usage for Bun's bundler. This command takes an entry point file and an output directory to create a bundled application.

```bash
bun build ./index.tsx --outdir ./build
```

--------------------------------

### Develop with Nix

Source: https://bun.sh/docs/project/contributing

Use Nix to enter a reproducible development environment for Bun. This command installs all necessary dependencies in an isolated manner, avoiding the need for sudo privileges.

```bash
nix develop
# or explicitly use the pure shell
# nix develop .#pure
export CMAKE_SYSTEM_PROCESSOR=$(uname -m)
bun bd
```

--------------------------------

### Start a TCP Server with Bun.listen() in TypeScript

Source: https://bun.sh/docs/runtime/networking/tcp

Demonstrates how to initiate a TCP server using `Bun.listen()`. It configures the hostname, port, and defines handlers for various socket events such as data reception, connection opening, closing, draining, and errors. This is a fundamental example for setting up network communication.

```typescript
Bun.listen({
  hostname: "localhost",
  port: 8080,
  socket: {
    data(socket, data) {}, // message received from client
    open(socket) {}, // socket opened
    close(socket, error) {}, // socket closed
    drain(socket) {}, // socket ready for more data
    error(socket, error) {}, // error handler
  },
});
```

--------------------------------

### Update package.json for Bun Server

Source: https://bun.sh/docs/guides/ecosystem/tanstack-start

This snippet shows how to add a 'start' script to your package.json file to run a custom Bun server. This script is essential for deploying and running your application with Bun.

```json
{
  "scripts": {
    "build": "bun --bun vite build",
    "start": "bun run server.ts" // [!code ++]
  }
}
```

--------------------------------

### Install Bun Dependencies on macOS (Homebrew)

Source: https://bun.sh/docs/project/contributing

Installs Bun's build dependencies on macOS using the Homebrew package manager. Ensure Homebrew is installed before running this command.

```bash
brew install automake ccache cmake coreutils gnu-sed go icu4c libiconv libtool ninja pkg-config rust ruby
```

--------------------------------

### Perform a Dry Run of Bun Install

Source: https://bun.sh/docs/pm/cli/install

Simulates the installation process without actually downloading or installing any packages. This is useful for checking potential installation issues or understanding what would be installed.

```bash
bun install --dry-run
```

--------------------------------

### Install Bun Dependencies on openSUSE Tumbleweed

Source: https://bun.sh/docs/project/contributing

Installs Bun's build dependencies on openSUSE Tumbleweed using zypper. This command requires sudo privileges.

```bash
sudo zypper install go cmake ninja automake git icu rustup && rustup toolchain install stable
```

--------------------------------

### Initialize a New Bun Project

Source: https://bun.sh/docs/quickstart

Initializes a new Bun project with a specified name. It prompts the user to select a project template (Blank, React, or Library) and automatically sets up the project structure. This command requires Bun to be installed.

```bash
bun init my-app
```

--------------------------------

### Preconnect to Host at Startup

Source: https://bun.sh/docs/runtime/networking/fetch

Illustrates how to preconnect to a host when starting a Bun script using the `--fetch-preconnect` command-line flag. This is analogous to HTML's `<link rel="preconnect">` and helps optimize initial connection times. This feature is not yet implemented on Windows.

```shell
bun --fetch-preconnect https://bun.com ./my-script.ts
```

--------------------------------

### Install ccache (macOS)

Source: https://bun.sh/docs/project/contributing

Installs `ccache`, a compiler cache, on macOS using Homebrew. `ccache` can significantly speed up build times by caching compilation artifacts.

```bash
brew install ccache
```

--------------------------------

### Bun Install with --filter

Source: https://bun.sh/docs/pm/filter

Demonstrates how to use the --filter flag with `bun install` to manage dependencies for specific packages or groups of packages within a monorepo. It shows examples of excluding packages, filtering by path, and excluding the root package.

```bash
# Install dependencies for all workspaces except `pkg-c`
bun install --filter '!pkg-c'

# Install dependencies for packages in `./packages` (`pkg-a`, `pkg-b`, `pkg-c`)
bun install --filter './packages/*'

# Save as above, but exclude the root package.json
bun install --filter '!./' --filter './packages/*'
```

--------------------------------

### Install Bun Dependencies on Fedora

Source: https://bun.sh/docs/project/contributing

Installs Bun's build dependencies on Fedora using dnf. This command requires sudo privileges.

```bash
sudo dnf install cargo clang21 llvm21 lld21 cmake git golang libtool ninja-build pkg-config rustc ruby libatomic-static libstdc++-static sed unzip which libicu-devel 'perl(Math::BigInt)'
```

--------------------------------

### Install Bun Dependencies on Ubuntu/Debian

Source: https://bun.sh/docs/project/contributing

Installs Bun's build dependencies on Ubuntu or Debian-based systems using apt. This command requires sudo privileges.

```bash
sudo apt install curl wget lsb-release software-properties-common cargo cmake git golang libtool ninja-build pkg-config rustc ruby-full xz-utils
```

--------------------------------

### Install Bun and Run Commands in GitHub Actions (YAML)

Source: https://bun.sh/docs/guides/install/cicd

This snippet demonstrates how to use the `oven-sh/setup-bun@v2` action to install Bun in a GitHub Actions runner and subsequently run `bun install`. It requires the `actions/checkout` action to be used beforehand. The `version` input can be specified to install a particular Bun version.

```yaml
title: my-workflow
jobs:
  my-job:
    title: my-job
    runs-on: ubuntu-latest
    steps:
      # ...
      - uses: actions/checkout@v4
      - uses: oven-sh/setup-bun@v2 # [!code ++]

      # run any `bun` or `bunx` command
      - run: bun install # [!code ++]
```

```yaml
title: my-workflow
jobs:
  my-job:
    title: my-job
    runs-on: ubuntu-latest
    steps:
      # ...
      - uses: oven-sh/setup-bun@v2
         with: # [!code ++]
          version: "latest" # or "canary" # [!code ++]
```

--------------------------------

### Bun Build CLI: Entrypoints

Source: https://bun.sh/docs/bundler

Illustrates how to initiate a build process using the Bun command-line interface by specifying the entrypoint file.

```bash
bun build ./index.ts
```

--------------------------------

### Install Bun Dependencies on Arch Linux

Source: https://bun.sh/docs/project/contributing

Installs Bun's build dependencies on Arch Linux using pacman. This command requires sudo privileges.

```bash
sudo pacman -S base-devel cmake git go libiconv libtool make ninja pkg-config python rust sed unzip ruby
```

--------------------------------

### Example: Building with Inlined Environment Variables

Source: https://bun.sh/docs/bundler/html-static

Demonstrates how to build a project with environment variables inlined. This example shows a TypeScript file that uses an environment variable and how to run the build command to include it in the output.

```typescript
const apiUrl = process.env.PUBLIC_API_URL;
console.log(`API URL: ${apiUrl}`);
```

```bash
PUBLIC_API_URL=https://api.example.com bun build ./index.html --outdir=dist --env=PUBLIC_*
```

```javascript
const apiUrl = "https://api.example.com";
console.log(`API URL: ${apiUrl}`);
```

--------------------------------

### Install Packages with Bun

Source: https://bun.sh/docs/pm/cli/install

Install packages using the `bun install` command. Supports installing specific versions or the latest tag. This command is a faster alternative to npm, yarn, and pnpm.

```bash
bun install react
bun install react@19.1.1 # specific version
bun install react@latest # specific tag
```

--------------------------------

### Add Nitro to Project (Shell)

Source: https://bun.sh/docs/guides/ecosystem/tanstack-start

Installs the Nitro package into your project using the Bun package manager. Nitro is a tool that facilitates deploying TanStack Start applications to various platforms.

```sh
bun add nitro
```

--------------------------------

### Create and Configure Bun Server (TypeScript)

Source: https://bun.sh/docs/guides/ecosystem/tanstack-start

This snippet demonstrates the creation of a Bun server. It configures the server port, integrates preloaded static routes, and sets up a fallback handler for all other routes using the initialized TanStack Start application handler. It includes error handling for the fetch request to the handler.

```typescript
// Build static routes with intelligent preloading
const { routes } = await initializeStaticRoutes(CLIENT_DIRECTORY)

// Create Bun server
const server = Bun.serve({
  port: SERVER_PORT,

  routes: {
    // Serve static assets (preloaded or on-demand)
    ...routes,

    // Fallback to TanStack Start handler for all other routes
    '/*': (req: Request) => {
      try {
        return handler.fetch(req)
      } catch (error) {
        log.error(`Server handler error: ${String(error)}`)
        return new Response('Internal Server Error', { status: 500 })
      }
    },
  },
})
```

--------------------------------

### Start Remix Development Server with Bun

Source: https://bun.sh/docs/guides/ecosystem/remix

Starts the Remix development server using Bun. Note that Bun is used to execute the command, but the underlying `remix dev` process currently relies on Node.js APIs.

```sh
cd my-app
bun run dev
```

--------------------------------

### Install LLVM 21.1.8 for Bun

Source: https://bun.sh/docs/project/contributing

Installs LLVM version 21.1.8, a requirement for building Bun. This version is enforced by the build system to prevent runtime memory allocation failures. Installation methods vary by operating system and package manager.

```bash
brew install llvm@21
```

```bash
# LLVM has an automatic installation script that is compatible with all versions of Ubuntu
wget https://apt.llvm.org/llvm.sh -O - | sudo bash -s -- 21 all
```

```bash
sudo pacman -S llvm clang lld
```

```bash
sudo dnf install llvm clang lld-devel
```

```bash
sudo zypper install clang21 lld21 llvm21
```

--------------------------------

### Build Simple WebSocket Server

Source: https://bun.sh/docs/guides

Demonstrates how to create a basic WebSocket server using Bun. This allows for real-time, bi-directional communication between clients and the server.

```javascript
Bun.serve({
  fetch(req) {
    if (req.url.endsWith("/ws")) {
      const websocket = new WebSocket(req);
      websocket.send("Welcome!");
      return websocket;
    }
    return new Response("Hello World!");
  },
});

console.log("WebSocket server is running on port 3000");
```

--------------------------------

### Install Gel CLI

Source: https://bun.sh/docs/guides/ecosystem/gel

Installs the Gel command-line interface for Linux, macOS, and Windows. This is the first step to using Gel in your project.

```sh
curl https://www.geldata.com/sh --proto "=https" -sSf1 | sh
```

```sh
irm https://www.geldata.com/ps1 | iex
```

```sh
brew install geldata/tap/gel-cli
```

--------------------------------

### Bun.build() Complete Compilation Example

Source: https://bun.sh/docs/bundler/executables

A comprehensive example demonstrating a full `Bun.build()` configuration. It includes setting entrypoints, specifying detailed compilation options like target, outfile, and disabling dotenv/bunfig autoloading, along with enabling minification, sourcemaps, and bytecode generation. The example also shows how to define environment variables and integrate custom Bun plugins.

```typescript
import type { BunPlugin } from "bun";

const myPlugin: BunPlugin = {
  name: "my-plugin",
  setup(build) {
    // Plugin implementation
  },
};

const result = await Bun.build({
  entrypoints: ["./src/cli.ts"],
  compile: {
    target: "bun-linux-x64",
    outfile: "./dist/mycli",
    execArgv: ["--smol"],
    autoloadDotenv: false,
    autoloadBunfig: false,
  },
  minify: true,
  sourcemap: "linked",
  bytecode: true,
  define: {
    "process.env.NODE_ENV": JSON.stringify("production"),
    VERSION: JSON.stringify("1.0.0"),
  },
  plugins: [myPlugin],
});

if (result.success) {
  console.log("Build successful:", result.outputs[0].path);
}
```

--------------------------------

### Running Dev Server with Inlined Environment Variables

Source: https://bun.sh/docs/bundler/html-static

Demonstrates how to run the Bun development server while setting and inlining environment variables. The example shows how to set a `PUBLIC_API_URL` and run the server using `bun ./index.html`.

```bash
PUBLIC_API_URL=https://api.example.com bun ./index.html
```

--------------------------------

### Initialize Astro App with Bun

Source: https://bun.sh/docs/guides/ecosystem/astro

Initializes a new Astro project using the `bun create astro` command. Bun automatically handles dependency installation.

```sh
bun create astro
```

--------------------------------

### Enable and Start Bun Application Service with systemd

Source: https://bun.sh/docs/guides/ecosystem/systemd

These commands manage the systemd service for your Bun application. `systemctl enable` ensures the service starts on boot, while `systemctl start` starts it immediately. You will need sudo privileges to run these commands.

```bash
systemctl enable my-app
systemctl start my-app
```

--------------------------------

### Initialize Bun Project and Add Neon Serverless Driver

Source: https://bun.sh/docs/guides/ecosystem/neon-serverless-postgres

This command sequence initializes a new Bun project and adds the Neon serverless driver as a project dependency. Ensure you have Bun installed. The `bun init -y` command creates a default `package.json` and other project files, while `bun add @neondatabase/serverless` installs the necessary driver.

```sh
mkdir bun-neon-postgres
cd bun-neon-postgres
bun init -y
bun add @neondatabase/serverless
```

--------------------------------

### Start Astro Dev Server with Bun Runtime

Source: https://bun.sh/docs/guides/ecosystem/astro

Starts the Astro development server using the Bun runtime by appending the `--bun` flag to the `bunx astro dev` command.

```sh
bunx --bun astro dev
```

--------------------------------

### Bun Install Installation Process Control Options

Source: https://bun.sh/docs/pm/cli/install

Options to control the installation process, including dry runs, forcing reinstallation, global installations, and filtering packages.

```sh
bun install --dry-run
bun install --force
bun install --global
bun install --backend <clonefile|hardlink|symlink|copyfile>
bun install --filter <workspace_package>
bun install --analyze
```

--------------------------------

### Build WebSocket Server with Bun.serve (TypeScript)

Source: https://bun.sh/docs/guides/websocket/simple

This snippet shows how to start a WebSocket server using Bun.serve. It handles upgrading incoming requests to WebSocket connections and defines a message handler for received messages. The `server.upgrade()` function attempts the upgrade, and if successful, Bun automatically responds with a 101 Switching Protocols. If not, it handles the request as a standard HTTP request.

```typescript
const server = Bun.serve({
  fetch(req, server) {
    const success = server.upgrade(req);
    if (success) {
      // Bun automatically returns a 101 Switching Protocols
      // if the upgrade succeeds
      return undefined;
    }

    // handle HTTP request normally
    return new Response("Hello world!");
  },
  websocket: {
    // TypeScript: specify the type of ws.data like this
    data: {} as { authToken: string },

    // this is called when a message is received
    async message(ws, message) {
      console.log(`Received ${message}`);
      // send back a message
      ws.send(`You said: ${message}`);
    },
  },
});

console.log(`Listening on ${server.hostname}:${server.port}`);
```

--------------------------------

### Start a TCP Server (Bun.listen)

Source: https://bun.sh/docs/runtime/networking/tcp

This section details how to start a TCP server using `Bun.listen()`, including configuration options for hostname, port, and socket event handlers.

```APIDOC
## POST /websites/bun_sh

### Description
Starts a TCP server using `Bun.listen()`. This API is designed for performance-sensitive applications and offers a more efficient way to handle socket events compared to traditional methods.

### Method
POST

### Endpoint
/websites/bun_sh

### Parameters
#### Request Body
- **hostname** (string) - Required - The hostname for the server.
- **port** (number) - Required - The port number for the server.
- **socket** (object) - Required - An object containing event handlers for socket events:
  - **data** (function) - Callback for when data is received from a client.
  - **open** (function) - Callback for when a new socket connection is opened.
  - **close** (function) - Callback for when a socket connection is closed.
  - **drain** (function) - Callback for when the socket is ready to send more data.
  - **error** (function) - Callback for socket errors.
- **tls** (object) - Optional - An object for configuring TLS:
  - **key** (string | BunFile | Buffer | Array) - Required if TLS is enabled - The TLS private key.
  - **cert** (string | BunFile | Buffer | Array) - Required if TLS is enabled - The TLS certificate.

### Request Example
```json
{
  "hostname": "localhost",
  "port": 8080,
  "socket": {
    "data": "(socket, data) => {}",
    "open": "(socket) => {}",
    "close": "(socket, error) => {}",
    "drain": "(socket) => {}",
    "error": "(socket, error) => {}"
  }
}
```

### Response
#### Success Response (200)
- **server** (TCPServer) - The created TCP server instance.

#### Response Example
```json
{
  "server": "TCPServer instance"
}
```
```

--------------------------------

### Start HTTP Server with Bun

Source: https://bun.sh/docs/guides/http/server

Starts an HTTP server using Bun.serve, listening on port 3000. It handles incoming requests by defining routes for different pathnames and HTTP methods, including serving files, responding with JSON, and redirecting requests. This example also shows how to process POST data submitted via forms or as JSON.

```typescript
const server = Bun.serve({
  async fetch(req) {
    const path = new URL(req.url).pathname;

    // respond with text/html
    if (path === "/") return new Response("Welcome to Bun!");

    // redirect
    if (path === "/abc") return Response.redirect("/source", 301);

    // send back a file (in this case, *this* file)
    if (path === "/source") return new Response(Bun.file(import.meta.path));

    // respond with JSON
    if (path === "/api") return Response.json({ some: "buns", for: "you" });

    // receive JSON data to a POST request
    if (req.method === "POST" && path === "/api/post") {
      const data = await req.json();
      console.log("Received JSON:", data);
      return Response.json({ success: true, data });
    }

    // receive POST data from a form
    if (req.method === "POST" && path === "/form") {
      const data = await req.formData();
      console.log(data.get("someField"));
      return new Response("Success");
    }

    // 404s
    return new Response("Page not found", { status: 404 });
  },
});

console.log(`Listening on ${server.url}`);
```

--------------------------------

### Package.json Git Dependency Examples

Source: https://bun.sh/docs/pm/cli/add

Demonstrates how to specify Git dependencies in package.json using different URL formats and protocols supported by Bun.

```json
{
  "dependencies": {
    "dayjs": "git+https://github.com/iamkun/dayjs.git",
    "lodash": "git+ssh://github.com/lodash/lodash.git#4.17.21",
    "moment": "git@github.com:moment/moment.git",
    "zod": "github:colinhacks/zod"
  }
}
```

--------------------------------

### Install Development Tools using Scoop (PowerShell)

Source: https://bun.sh/docs/project/building-windows

Installs essential development tools like Node.js LTS, Go, Rust, NASM, Ruby, Perl, and CCache using the Scoop package manager. LLVM is installed separately due to potential conflicts.

```powershell
irm https://get.scoop.sh | iex
scoop install nodejs-lts go rust nasm ruby perl ccache
# scoop seems to be buggy if you install llvm and the rest at the same time
scoop install llvm@21.1.8
```

--------------------------------

### Running Scripts

Source: https://bun.sh/docs/runtime

Examples demonstrating how to run JavaScript or TypeScript files, and package.json scripts using the Bun runtime.

```APIDOC
## Examples

### Description
Examples for running scripts with Bun.

### Method
N/A (Command-line usage)

### Endpoint
N/A

### Parameters
None

### Request Example

Run a JavaScript or TypeScript file:

```bash
bun run ./index.js
bun run ./index.tsx
```

Run a package.json script:

```bash
bun run dev
bun run lint
```

### Response
#### Success Response (N/A)
N/A

#### Response Example
N/A
```

--------------------------------

### Install with Yarn Lockfile Support

Source: https://bun.sh/docs/pm/lockfile

This command installs packages and generates a `bun.lock` file, while also supporting the inclusion of a Yarn lockfile. This can be configured in `bunfig.toml`.

```bash
bun install --yarn
```

```toml
[install.lockfile]
# whether to save a non-Bun lockfile alongside bun.lock
# only "yarn" is supported
print = "yarn"

```

--------------------------------

### Troubleshoot libarchive on macOS

Source: https://bun.sh/docs/project/contributing

Resolves compilation errors related to `libarchive` on macOS by installing the `pkg-config` utility using Homebrew.

```bash
brew install pkg-config
```

--------------------------------

### Initialize Bun project with default options

Source: https://bun.sh/docs/runtime/templating/init

Automatically accepts all default prompts during project initialization, skipping interactive questions. This is useful for scripting or quick project setup.

```bash
bun init -y
```

--------------------------------

### Glob Pattern '!' Negation Example (TypeScript)

Source: https://bun.sh/docs/runtime/glob

Demonstrates the negation operator `!` at the start of a glob pattern in Bun, which inverts the match result.

```typescript
const glob = new Glob("!index.ts");
glob.match("index.ts"); // => false
glob.match("foo.ts"); // => true
```

--------------------------------

### Initialize SolidStart App with Bun

Source: https://bun.sh/docs/guides/ecosystem/solidstart

Creates a new SolidStart application using the `create-solid` command with Bun. This command initializes a project with TypeScript support and a basic template. It requires Bun to be installed.

```sh
bun create solid my-app --solidstart --ts
```

--------------------------------

### Configure Bun Test Preload Scripts in bunfig.toml

Source: https://bun.sh/docs/guides/test/testing-library

Configures the `bunfig.toml` file to specify preload scripts for the test runner. This example includes scripts for Happy DOM and Testing Library setup.

```toml
[test]
preload = ["./happydom.ts", "./testing-library.ts"]
```

--------------------------------

### Bun.nanoseconds: Get High-Precision Process Start Time

Source: https://bun.sh/docs/runtime/utils

Returns the number of nanoseconds elapsed since the Bun process started. This function is useful for accurate performance measurements and benchmarking. It returns a single numeric value.

```typescript
Bun.nanoseconds();
// => 7288958
```

--------------------------------

### Run a package with bunx

Source: https://bun.sh/docs/pm/bunx

Execute a package from npm using bunx. This command will automatically install the package if it's not already present and then run the specified command. For example, running 'cowsay' will display a message in a cow's speech bubble.

```bash
bunx cowsay "Hello world!"
```

--------------------------------

### Migrate Express Static Files and Routes to Bun

Source: https://bun.sh/docs/bundler/fullstack

Demonstrates migrating from an Express.js setup using `express.static` and basic GET routes to Bun's integrated `serve` function. It shows how to replace static file serving and API route handling with Bun's native approach.

```typescript
// Before (Express + Webpack)
app.use(express.static("dist"));
app.get("/api/users", (req, res) => {
  res.json(users);
});

// After (Bun fullstack)
serve({
  routes: {
    "/": homepage, // Replaces express.static
    "/api/users": {
      GET() {
        return Response.json(users);
      },
    },
  },
});
```

--------------------------------

### Troubleshoot macOS 'library not found for -lSystem'

Source: https://bun.sh/docs/project/contributing

Fixes the 'library not found for -lSystem' error during compilation on macOS by installing the Xcode command-line tools.

```bash
xcode-select --install
```

--------------------------------

### Configure npm Registry in bunfig.toml

Source: https://bun.sh/docs/guides/install/custom-registry

This TOML snippet demonstrates how to configure the default npm registry for `bun install` within the `bunfig.toml` file. It shows examples for setting a simple registry URL, a registry with a token, and a registry with basic authentication.

```toml
[install]
# set default registry as a string
registry = "https://registry.npmjs.org"

# if needed, set a token
registry = { url = "https://registry.npmjs.org", token = "123456" }

# if needed, set a username/password
registry = "https://usertitle:password@registry.npmjs.org"
```

--------------------------------

### Verify LLVM Installation

Source: https://bun.sh/docs/project/contributing

Checks if the clang-21 executable is available in the system's PATH. If not, it provides instructions to manually add the LLVM bin directory to the PATH.

```bash
which clang-21
```

--------------------------------

### Start an HTTP Server with Bun.serve

Source: https://bun.sh/docs/runtime/bun-apis

This snippet demonstrates how to start a basic HTTP server using Bun's native `Bun.serve` API. It listens for incoming requests and returns a 'Success!' response. This API is part of Bun's networking capabilities.

```typescript
Bun.serve({
  fetch(req: Request) {
    return new Response("Success!");
  },
});
```

--------------------------------

### Initialize Gel Project

Source: https://bun.sh/docs/guides/ecosystem/gel

Initializes a new Gel instance for the current project, creating a `gel.toml` configuration file. It prompts for project name and Gel version.

```sh
gel project init
```

--------------------------------

### Download and Install LLVM for ARM64 (PowerShell)

Source: https://bun.sh/docs/project/building-windows

Downloads and silently installs LLVM version 21.1.8 specifically for Windows ARM64 architecture. This is an alternative to Scoop for ARM64 builds.

```powershell
# Download and install LLVM for ARM64
Invoke-WebRequest -Uri "https://github.com/llvm/llvm-project/releases/download/llvmorg-21.1.8/LLVM-21.1.8-woa64.exe" -OutFile "$env:TEMP\LLVM-21.1.8-woa64.exe"
Start-Process -FilePath "$env:TEMP\LLVM-21.1.8-woa64.exe" -ArgumentList "/S" -Wait
```

--------------------------------

### Bun Install Configuration with bunfig.toml

Source: https://bun.sh/docs/pm/cli/install

This TOML snippet defines configuration settings for `bun install` within the `bunfig.toml` file. It controls which types of dependencies are installed, lockfile behavior, and the minimum release age for packages, with specific exclusions.

```toml
[install]

# whether to install optionalDependencies
optional = true

# whether to install devDependencies
dev = true

# whether to install peerDependencies
peer = true

# equivalent to `--production` flag
production = false

# equivalent to `--save-text-lockfile` flag
saveTextLockfile = false

# equivalent to `--frozen-lockfile` flag
frozenLockfile = false

# equivalent to `--dry-run` flag
dryRun = false

# equivalent to `--concurrent-scripts` flag
concurrentScripts = 16 # (cpu count or GOMAXPROCS) x2

# installation strategy: "hoisted" or "isolated"
# default depends on lockfile configVersion and workspaces:
# - configVersion = 1: "isolated" if using workspaces, otherwise "hoisted"
# - configVersion = 0: "hoisted"
linker = "hoisted"


# minimum age config
minimumReleaseAge = 259200 # seconds
minimumReleaseAgeExcludes = ["@types/node", "typescript"]
```

--------------------------------

### Implement Custom Bun Plugin

Source: https://bun.sh/docs/bundler/fullstack

A TypeScript example of a custom Bun bundler plugin. It defines a `name` and a `setup` function that intercepts files with a `.custom` extension, reads their text content, and transforms them into JavaScript modules.

```typescript
import type { BunPlugin } from "bun";

const myPlugin: BunPlugin = {
  name: "my-custom-plugin",
  setup(build) {
    // Plugin implementation
    build.onLoad({ filter: /\.custom$/ }, async args => {
      const text = await Bun.file(args.path).text();
      return {
        contents: `export default ${JSON.stringify(text)};`,
        loader: "js",
      };
    });
  },
};

export default myPlugin;
```

--------------------------------

### Create an SSR HTTP Server with Bun and React

Source: https://bun.sh/docs/guides/ecosystem/ssr-react

Combines React's SSR stream rendering with Bun's `Bun.serve()` to create a basic HTTP server that serves a React component. This example shows a complete, runnable SSR setup.

```tsx
Bun.serve({
  async fetch() {
    const stream = await renderToReadableStream(<Component message="Hello from server!" />);
    return new Response(stream, {
      headers: { "Content-Type": "text/html" },
    });
  },
});

```

--------------------------------

### Bun Install with Hoisted Linker (CLI)

Source: https://bun.sh/docs/pm/isolated-installs

Shows how to use the `bun install` command with the `--linker hoisted` flag to revert to traditional, non-isolated dependency installation. This is useful for projects that require a standard hoisted `node_modules` structure.

```bash
bun install --linker hoisted
```

--------------------------------

### Get Absolute Path of Current File

Source: https://bun.sh/docs/guides

Obtains the absolute file system path of the currently executing script. This utilizes the `import.meta.path` property.

```javascript
// Assuming this code is in a file named 'my-script.js'
console.log(import.meta.path);
```

--------------------------------

### Use Bun Global in TypeScript

Source: https://bun.sh/docs/runtime/typescript

A simple TypeScript example demonstrating the usage of the `Bun` global object to log the Bun version. This code will work after installing the necessary type definitions.

```ts
console.log(Bun.version);
```

--------------------------------

### Gel REPL Example

Source: https://bun.sh/docs/guides/ecosystem/gel

Opens the Gel REPL (Read-Eval-Print Loop) to interact with the database and execute simple queries. Demonstrates connecting to the instance and running a basic arithmetic query.

```sh
gel
gel> select 1 + 1;
2
gel> \quit
```

--------------------------------

### Migrate to bun install and manage dependencies

Source: https://bun.sh/docs/guides/install/from-npm-install-to-bun-install

Easily migrate from `npm install` to `bun install` with a single command. This snippet shows how to install, add, add devDependencies, and remove dependencies using Bun's package manager.

```bash
# It only takes one command to migrate
bun i

# To add dependencies:
bun i @types/bun

# To add devDependencies:
bun i -d @types/bun

# To remove a dependency:
bun rm @types/bun
```

--------------------------------

### Bun.build - Entrypoints and External Configuration

Source: https://bun.sh/docs/bundler/esbuild

Configure the entry points for the build process using the `entrypoints` option and specify external modules with the `external` option. `entrypoints` has a capitalization difference compared to some other bundlers, and `external` has no differences.

```APIDOC
## Bun.build - Entrypoints and External Configuration

### Description
Configure the entry points for the build process using the `entrypoints` option and specify external modules with the `external` option. `entrypoints` has a capitalization difference compared to some other bundlers, and `external` has no differences.

### Method
N/A (Configuration Option)

### Endpoint
N/A (Configuration Option)

### Parameters
#### Path Parameters
N/A

#### Query Parameters
N/A

#### Request Body
- **entrypoints** (string[]) - Required - An array of file paths to use as entry points for the build.
- **external** (string[]) - Optional - An array of module names to be treated as external dependencies and not included in the bundle.

### Request Example
```typescript
Bun.build({
  entrypoints: ["./src/index.ts"],
  external: ["react", "react-dom"],
});
```

### Response
#### Success Response (200)
N/A (Configuration Option)

#### Response Example
N/A
```

--------------------------------

### Snapshot File Example with Dynamic Values

Source: https://bun.sh/docs/test/snapshots

Provides an example of a snapshot file generated by Bun's testing framework when using property matchers for dynamic values. It illustrates how `expect.any()` is used to represent values that are expected to change.

```txt
exports[`snapshot with dynamic values 1`] = `
{
  "createdAt": Any<String>,
  "id": Any<Number>,
  "name": "John",
}
`;
```

--------------------------------

### Bun Install with Isolated Linker (CLI)

Source: https://bun.sh/docs/pm/isolated-installs

Demonstrates how to use the `bun install` command with the `--linker isolated` flag to enforce isolated dependency installation. This is useful for ensuring strict dependency management in projects.

```bash
bun install --linker isolated
```

--------------------------------

### Install Bun using PowerShell Script (PowerShell)

Source: https://bun.sh/docs/project/building-windows

Downloads and executes the official Bun installation script from bun.sh. This command installs the latest version of Bun, which is required for running Bun's own code generators.

```powershell
irm bun.sh/install.ps1 | iex
```

--------------------------------

### Bun Global Installation Configuration

Source: https://bun.sh/docs/pm/cli/add

Configuration options for global package installations in Bun, specifying directories for global packages and their linked binaries.

```toml
[install]
globalDir = "~/.bun/install/global"
globalBinDir = "~/.bun/bin"
```

--------------------------------

### Install with Symlink Backend (Bash)

Source: https://bun.sh/docs/pm/cli/install

Installs dependencies using the 'symlink' backend, primarily for file-based dependencies. This backend skips symlinking the node_modules folder to prevent infinite loops. If used, Node.js or Bun may require the '--preserve-symlinks' flag for correct module resolution. Ensure node_modules is removed before running.

```bash
rm -rf node_modules
bun install --backend symlink
bun --preserve-symlinks ./my-file.js
node --preserve-symlinks ./my-file.js # https://nodejs.org/api/cli.html#--preserve-symlinks
```

--------------------------------

### Get Absolute Path to Current Entrypoint

Source: https://bun.sh/docs/guides

Retrieves the absolute file system path of the main entry point script for the Bun application. This is equivalent to `import.meta.path` when the file is the main module.

```javascript
import { main } from "bun";

console.log(main);
// This will output the absolute path to the script that started the Bun process.
```

--------------------------------

### Start Express Server with Bun

Source: https://bun.sh/docs/guides/ecosystem/express

Starts the previously defined Express server using the Bun runtime. This command executes the 'server.ts' file.

```shell
bun server.ts
```

--------------------------------

### Bun Secrets API: Get, Set, and Delete Credentials (TypeScript)

Source: https://bun.sh/docs/runtime/secrets

Provides examples of the core Bun.secrets API functions: `get`, `set`, and `delete`. These functions allow for programmatic management of sensitive credentials, leveraging the operating system's secure storage mechanisms.

```typescript
import { secrets } from "bun";

const password = await Bun.secrets.get({
  service: "my-app",
  name: "alice@example.com",
});
// Returns: string | null

// Or if you prefer without an object
const password = await Bun.secrets.get("my-app", "alice@example.com");
```

```typescript
import { secrets } from "bun";

await secrets.set({
  service: "my-app",
  name: "alice@example.com",
  value: "super-secret-password",
});
```

```typescript
const deleted = await Bun.secrets.delete({
  service: "my-app",
  name: "alice@example.com",
  value: "super-secret-password",
});
// Returns: boolean
```

--------------------------------

### Bun Install: Enable Verbose Logging for Isolated Installs

Source: https://bun.sh/docs/pm/isolated-installs

Enables verbose logging during the 'bun install' process when using the isolated linker. This provides detailed output on store entry creation, symlink operations, peer dependency resolution, and deduplication decisions, aiding in understanding the installation flow.

```bash
bun install --linker isolated --verbose
```

--------------------------------

### API Server Setup for Bun.js Tests

Source: https://bun.sh/docs/test/lifecycle

Manages the lifecycle of an API server during testing with Bun.js. It includes functions to start the server before tests and stop it afterwards, ensuring a controlled environment for API-related tests.

```typescript
import { beforeAll, afterAll } from "bun:test";
import { startServer, stopServer } from "./server";

let server;

beforeAll(async () => {
  // Start test server
  server = await startServer({
    port: 3001,
    env: "test",
  });
});

afterAll(async () => {
  // Stop test server
  await stopServer(server);
});
```

--------------------------------

### Astro Dev Server Start Output

Source: https://bun.sh/docs/guides/ecosystem/astro

The output indicating that the Astro development server has started successfully using the Bun runtime, along with the local URL.

```txt
  🚀  astro  v3.1.4 started in 200ms

  ┃ Local    http://localhost:4321/
  ┃ Network  use --host to expose
```

--------------------------------

### Use Appropriate Scope for Bun Test Hooks

Source: https://bun.sh/docs/test/lifecycle

Explains the importance of using the correct scope for Bun test hooks. Shows examples of `beforeAll` for file-level setup of shared resources and `beforeEach` for test-specific state initialization.

```typescript
// Good: File-level setup for shared resources
beforeAll(async () => {
  await startTestServer();
});

// Good: Test-level setup for test-specific state
beforeEach(() => {
  user = createTestUser();
});
```

--------------------------------

### Example Output of PostgreSQL Version

Source: https://bun.sh/docs/guides/ecosystem/neon-serverless-postgres

This is an example of the output you can expect when running the Bun script to query the PostgreSQL version. The output will show the specific version and build information of the database.

```text
PostgreSQL 16.2 on x86_64-pc-linux-gnu, compiled by gcc (Debian 10.2.1-6) 10.2.1 20210110, 64-bit
```

--------------------------------

### Bun Bundler: JavaScript API Example

Source: https://bun.sh/docs/bundler

Demonstrates how to use the `Bun.build()` JavaScript API to bundle entry points into an output directory. This API is part of Bun's fast native bundler.

```typescript
await Bun.build({
  entrypoints: ['./index.tsx'],
  outdir: './build',
});
```

--------------------------------

### Bun init CLI Usage

Source: https://bun.sh/docs/runtime/templating/init

Displays the help menu for the `bun init` command, outlining available options and their usage. This is useful for understanding the full capabilities of the command.

```bash
bun init --help
```

--------------------------------

### Run Bun HTTP Server (Bash)

Source: https://bun.sh/docs/guides/http/file-uploads

This bash command executes the TypeScript file 'index.ts' using the Bun runtime. It starts the HTTP server and prints a confirmation message to the console indicating the listening address. Requires Bun to be installed.

```bash
bun run index.ts
Listening on http://localhost:4000
```

--------------------------------

### Run Bun Debug Build with Arguments

Source: https://bun.sh/docs/project/contributing

Executes a debug build of Bun with specified arguments. This allows for targeted testing or running specific Bun scripts. Examples include running tests or executing a TypeScript file.

```sh
bun bd <args>
```

```sh
bun bd test foo.test.ts
```

```sh
bun bd ./foo.ts
```

--------------------------------

### Bun Inspector Output

Source: https://bun.sh/docs/guides/runtime/web-debugger

This is an example of the output displayed in the terminal when Bun starts with the `--inspect` flag. It provides the WebSocket URL for connecting the debugger and a link to the web-based debugger.

```text
------------------ Bun Inspector ------------------
Listening at:
  ws://localhost:6499/0tqxs9exrgrm

Inspect in browser:
  https://debug.bun.sh/#localhost:6499/0tqxs9exrgrm
------------------ Bun Inspector ------------------
```

--------------------------------

### Bun Install: Migrate from pnpm to Isolated Installs

Source: https://bun.sh/docs/pm/isolated-installs

Instructions for migrating a project from pnpm to Bun's isolated dependency installation. This involves removing pnpm-specific files and then running 'bun install' with the isolated linker, noting the conceptual similarity but implementation difference regarding the global store.

```bash
# Remove pnpm files
rm -rf node_modules pnpm-lock.yaml

# Install with Bun's isolated linker
bun install --linker isolated
```

--------------------------------

### Bun Install CLI Command

Source: https://bun.sh/docs/pm/cli/install

The primary command for installing dependencies using Bun. It accepts a package name and version as arguments.

```sh
bun install <name>@<version>
```

--------------------------------

### Run and Test Application with Bun

Source: https://bun.sh/docs/guides/ecosystem/prisma-postgres

These commands show how to execute a TypeScript file using the Bun runtime and observe the output. The example demonstrates running an `index.ts` script multiple times, with each execution creating a new user and incrementing the displayed user count in the database. This is useful for verifying application logic and database interactions.

```bash
bun run index.ts
```

```text
There are 1 users in the database.
```

```bash
bun run index.ts
```

```text
There are 2 users in the database.
```

```bash
bun run index.ts
```

```text
There are 3 users in the database.
```

--------------------------------

### Enable Script Execution Policy (PowerShell)

Source: https://bun.sh/docs/project/building-windows

Sets the script execution policy for the current user to 'Unrestricted' to allow running unsigned scripts. This is a prerequisite for installing and running Bun's setup scripts.

```powershell
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy Unrestricted
```

--------------------------------

### Initialize Bun Project

Source: https://bun.sh/docs/guides/ecosystem/gel

Creates a new Bun project directory and initializes it with default settings. This sets up the basic structure for your application.

```sh
mkdir my-edgedb-app
cd my-edgedb-app
bun init -y
```

--------------------------------

### Get Bin Directory Path with Bun PM Bin

Source: https://bun.sh/docs/pm/cli/pm

The `bun pm bin` command prints the path to the `bin` directory for the local project or the global Bun installation. Use the `-g` flag to specify the global directory.

```bash
bun pm bin
```

```bash
bun pm bin -g
```

--------------------------------

### Initialize Bun Project

Source: https://bun.sh/docs/guides/ecosystem/prisma

Creates a new project directory and initializes it using Bun's built-in init command. This sets up the basic project structure for a Bun application.

```bash
mkdir prisma-app
cd prisma-app
bun init
```

--------------------------------

### Bun Install React and ReactDOM

Source: https://bun.sh/docs/bundler/standalone-html

Installs the necessary React and ReactDOM packages for a React project using Bun. This command is essential for setting up a React development environment with Bun.

```bash
bun install react react-dom
```

--------------------------------

### Bun Install: Migrate from npm/Yarn to Isolated Installs

Source: https://bun.sh/docs/pm/isolated-installs

Steps to migrate a project from npm or Yarn to Bun's isolated dependency installation. It involves removing existing node_modules and lock files, then running 'bun install' with the isolated linker.

```bash
# Remove existing node_modules and lockfiles
rm -rf node_modules package-lock.json yarn.lock

# Install with isolated linker
bun install --linker isolated
```

--------------------------------

### Global Package Installation with Bun

Source: https://bun.sh/docs/guides/install/from-npm-install-to-bun-install

Install packages globally using `bun i -g <package>`. By default, packages are installed in `~/.bun/install/global/node_modules`. Globally installed packages can be run directly without the `bun run` prefix.

```sh
# Install a package globally
bun i -g eslint

# Run a globally-installed package without the `bun run` prefix
eslint --init
```

--------------------------------

### Create and Run Elysia App with Bun

Source: https://bun.sh/docs/guides/ecosystem/elysia

Steps to create a new Elysia project using Bun, navigate into the project directory, and start the development server. This involves using the `bun create elysia` command followed by `bun run dev`.

```bash
bun create elysia myapp
cd myapp
bun run dev
```

--------------------------------

### Install SQLite via Homebrew

Source: https://bun.sh/docs/runtime/sqlite

Provides instructions for macOS users to install a vanilla build of SQLite using Homebrew. This is necessary if the default macOS SQLite build does not support extensions. The command `brew install sqlite` installs the package, and `which sqlite` helps locate the binary path.

```bash
brew install sqlite
which sqlite # get path to binary
```

--------------------------------

### Bun Configuration for Isolated Installs (TOML)

Source: https://bun.sh/docs/pm/isolated-installs

Illustrates how to configure Bun to use isolated installs by default in the `bunfig.toml` configuration file. This setting applies globally or per-project, ensuring consistent installation behavior.

```toml
[install]
linker = "isolated"
```

--------------------------------

### Install Gel Client and Seed Data

Source: https://bun.sh/docs/guides/ecosystem/gel

Installs the Gel JavaScript client library and its codegen CLI using Bun. It also creates a `seed.ts` file for populating the database.

```sh
bun add gel
bun add -D @gel/generate
touch seed.ts
```

--------------------------------

### install.globalBinDir

Source: https://bun.sh/docs/runtime/bunfig

Configures the directory where Bun installs the binaries and CLIs of globally installed packages. Can also be set via the `BUN_INSTALL_BIN` environment variable.

```APIDOC
## `install.globalBinDir`

### Description
To configure the directory where Bun installs globally installed binaries and CLIs.

Environment variable: `BUN_INSTALL_BIN`

### Method
Configuration

### Endpoint
N/A (Configuration setting)

### Parameters
#### Path Parameters
None

#### Query Parameters
None

#### Request Body
None

### Request Example
```toml
[install]
# where globally-installed package bins are linked
globalBinDir = "~/.bun/bin"
```

### Response
#### Success Response (200)
N/A (Configuration setting)

#### Response Example
N/A
```

--------------------------------

### Install Global Package with Bun

Source: https://bun.sh/docs/pm/cli/install

Installs a package globally using the `-g` or `--global` flag, typically for command-line tools. After installation, the package can be executed directly from the terminal.

```bash
bun install --global cowsay # or `bun install -g cowsay`
cowsay "Bun!"
```

--------------------------------

### Run Bun Project Tests with PowerShell

Source: https://bun.sh/docs/project/building-windows

This snippet demonstrates how to install dependencies and run the test suite for the Bun project using PowerShell. It covers installing packages, running all tests via a package.json script, and executing individual test files.

```powershell
# Setup
bun i --cwd packages\bun-internal-test

# Run the entire test suite with reporter
# the package.json script "test" uses "build/debug/bun-debug.exe" by default
bun run test

# Run an individual test file:
bun-debug test node\fs
bun-debug test "C:\bun\test\js\bun\resolve\import-meta.test.js"
```

--------------------------------

### Install Specific Bun Version (Windows)

Source: https://bun.sh/docs/installation

Instructions for installing a specific older version of Bun on Windows using the PowerShell install script with a version number. This enables precise version control for Windows users.

```powershell
iex "& {$(irm https://bun.com/install.ps1)} -Version 1.3.3"
```

--------------------------------

### Example HTML Structure for Bun Dev Server

Source: https://bun.sh/docs/bundler/fullstack

This is a sample 'index.html' file that includes links to CSS and script files. When processed by Bun's dev server, it demonstrates how Bun automatically bundles and optimizes these assets, replacing direct file references with hashed versions for cache busting.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Home</title>
    <link rel="stylesheet" href="./reset.css" />
    <link rel="stylesheet" href="./styles.css" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="./sentry-and-preloads.ts"></script>
    <script type="module" src="./my-app.tsx"></script>
  </body>
</html>

```

--------------------------------

### Handling Requests with Bun.serve

Source: https://bun.sh/docs/bundler/fullstack

This TypeScript example demonstrates comprehensive request handling within `Bun.serve`. It shows how to parse JSON request bodies, access request headers, extract URL parameters, and retrieve query parameters. The example also illustrates how to construct and return JSON responses.

```typescript
serve({
  routes: {
    "/api/data": {
      async POST(req) {
        // Parse JSON body
        const body = await req.json();

        // Access headers
        const auth = req.headers.get("Authorization");

        // Access URL parameters
        const { id } = req.params;

        // Access query parameters
        const url = new URL(req.url);
        const page = url.searchParams.get("page") || "1";

        // Return response
        return Response.json({
          message: "Data processed",
          page: parseInt(page),
          authenticated: !!auth,
        });
      },
    },
  },
});
```

--------------------------------

### Install Dependencies for Hono App

Source: https://bun.sh/docs/guides/ecosystem/hono

Navigate into the newly created Hono project directory and install all required dependencies using Bun's package manager. This step ensures all necessary libraries are available for the project.

```sh
cd myapp
bun install
```

--------------------------------

### Bun: Global Test Setup/Teardown with preload

Source: https://bun.sh/docs/test/lifecycle

Explains how to implement global setup and teardown for Bun test runs by defining `beforeAll` and `afterAll` hooks in a separate file (e.g., `setup.ts`) and using the `--preload` flag or `bunfig.toml` configuration. This is useful for initializing resources like database connections or servers for the entire test suite.

```typescript
import { beforeAll, afterAll } from "bun:test";

beforeAll(() => {
  // global setup
  console.log("Global test setup");
  // Initialize database connections, start servers, etc.
});

afterAll(() => {
  // global teardown
  console.log("Global test teardown");
  // Close database connections, stop servers, etc.
});
```

--------------------------------

### Implement a Simple HTTP Server with StricJS (TypeScript)

Source: https://bun.sh/docs/guides/ecosystem/stric

This TypeScript code defines a basic HTTP server using StricJS. It initializes a Router and sets up a GET route for the root path ('/') that returns a simple 'Hi' response. This is the minimal setup for a StricJS server.

```typescript
import { Router } from "@stricjs/router";

export default new Router().get("/", () => new Response("Hi"));
```

--------------------------------

### Configure Entry and Chunk Naming in Bun.build (TypeScript)

Source: https://bun.sh/docs/bundler/esbuild

This example shows how to configure both entry and chunk naming in Bun.build using the `naming` option. It supports a string for general naming or an object for granular control over `entry`, `asset`, and `chunk` naming. The templating syntax is similar to esbuild, with `[ext]` required.

```typescript
Bun.build({
  entrypoints: ["./index.tsx"],
  // when string, this is equivalent to entryNames
  naming: "[name].[ext]",

  // granular naming options
  naming: {
    entry: "[name].[ext]",
    asset: "[name].[ext]",
    chunk: "[name].[ext]",
  },
});
```

--------------------------------

### Clone GitHub Repository and Navigate

Source: https://bun.sh/docs/guides/deployment/render

Clones a GitHub repository locally and navigates into the project directory. This is the initial step for setting up a new project on a local machine.

```shell
git clone git@github.com:my-github-username/myapp.git
cd myapp
```

--------------------------------

### Enable Dry Run for Installation (TOML)

Source: https://bun.sh/docs/runtime/bunfig

Determines if `bun install` will actually install dependencies. When `true`, it simulates the installation process without making changes, similar to the `--dry-run` CLI flag. Defaults to `false`.

```toml
[install]
dryRun = false
```

--------------------------------

### Bun SQL PostgreSQL Connection Examples (TypeScript)

Source: https://bun.sh/docs/runtime/sql

Illustrates establishing connections to PostgreSQL databases using Bun's SQL module. It shows how to utilize the default connection (via environment variables) and explicitly create a PostgreSQL connection using the SQL class with a connection string.

```typescript
import { sql } from "bun";
// Uses PostgreSQL if DATABASE_URL is not set or is a PostgreSQL URL
await sql`SELECT ...`;

import { SQL } from "bun";
const pg = new SQL("postgres://user:pass@localhost:5432/mydb");
await pg`SELECT ...`;
```

--------------------------------

### Bun Install Dependency Scope and Management Options

Source: https://bun.sh/docs/pm/cli/install

Options to control which dependencies are installed (production, dev, optional, peer) and whether to save them to package.json and the lockfile.

```sh
bun install --production
bun install --no-save
bun install --save
bun install --omit <dev|optional|peer>
bun install --only-missing
```

--------------------------------

### Create SvelteKit Project with Bun

Source: https://bun.sh/docs/guides/ecosystem/sveltekit

Use the Bunx command to create a new SvelteKit project. This command initiates the Svelte CLI, prompts for project configuration, and installs dependencies using Bun.

```sh
bunx sv create my-app
```

--------------------------------

### Interact with Upstash Redis using Bun Client (TypeScript)

Source: https://bun.sh/docs/guides/ecosystem/upstash

Provides examples of common Redis operations using Bun's Redis client, including getting a value, setting a value if it doesn't exist, and incrementing a counter. The client handles background connections automatically.

```typescript
import { redis } from "bun";

// Get a value
let counter = await redis.get("counter");

// Set a value if it doesn't exist
if (!counter) {
	await redis.set("counter", "0");
}

// Increment the counter
await redis.incr("counter");

// Get the updated value
counter = await redis.get("counter");
console.log(counter);
```

--------------------------------

### Initialize Bun Project and Install Dependencies

Source: https://bun.sh/docs/guides/ecosystem/neon-drizzle

Sets up a new Bun project and installs Drizzle ORM and the Neon serverless driver. This is the initial step for integrating Neon with Drizzle in a Bun project.

```sh
mkdir bun-drizzle-neon
cd bun-drizzle-neon
bun init -y
bun add drizzle-orm @neondatabase/serverless
bun add -D drizzle-kit
```

--------------------------------

### onStart Callback

Source: https://bun.sh/docs/runtime/plugins

Registers a callback function to be executed when the Bun bundler starts a new bundle process. This callback can be asynchronous and the bundler will wait for all `onStart` callbacks to complete before proceeding.

```APIDOC
## `onStart` Callback

### Description
Registers a callback to be run when the bundler starts a new bundle. The callback can return a `Promise`. After the bundle process has initialized, the bundler waits until all `onStart()` callbacks have completed before continuing.

### Method
`onStart`

### Parameters
#### Path Parameters
None

#### Query Parameters
None

#### Request Body
- **callback** (() => void) - Required - The function to execute when the bundle starts.

### Request Example
```typescript
build.onStart(() => {
  console.log("Bundle started!");
});
```

### Response
#### Success Response (void)
- Returns `void` or a `Promise<void>`.

#### Response Example
```typescript
// No specific response body for this callback
```

### Error Handling
- Callbacks do not have the ability to modify the `build.config` object.
- Mutate `build.config` directly in the `setup()` function.
```

--------------------------------

### Initialize TanStack Start Server Handler (TypeScript)

Source: https://bun.sh/docs/guides/ecosystem/tanstack-start

This function initializes the TanStack Start application handler by dynamically importing the server entry point. It includes error handling for the import process and exits the process if the handler fails to load.

```typescript
/**
* Initialize the server
*/
async function initializeServer() {
  log.header('Starting Production Server')

  // Load TanStack Start server handler
  let handler: { fetch: (request: Request) => Response | Promise<Response> }
  try {
    const serverModule = (await import(SERVER_ENTRY_POINT)) as { 
      default: { fetch: (request: Request) => Response | Promise<Response> }
    }
    handler = serverModule.default
    log.success('TanStack Start application handler initialized')
  } catch (error) {
    log.error(`Failed to load server handler: ${String(error)}`)
    process.exit(1)
  }
  // ... rest of the function
```

--------------------------------

### Run Vite Development Server with Bun

Source: https://bun.sh/docs/guides/ecosystem/vite

Start the Vite development server using `bunx --bun vite`. The `--bun` flag ensures Vite is executed with Bun. This command is typically used for local development.

```bash
bunx --bun vite
```

--------------------------------

### Run Standalone Executable as Bun CLI

Source: https://bun.sh/docs/bundler/executables

Explains how to make a standalone Bun executable act like the `bun` CLI itself by setting the `BUN_BE_BUN=1` environment variable. This allows the executable to expose all Bun CLI features, such as running commands like `install`, instead of executing its bundled entrypoint. Includes examples of compilation and execution.

```bash
echo "console.log(\"you shouldn't see this\");" > such-bun.js
bun build --compile ./such-bun.js

# Executable runs its own entrypoint by default
./such-bun install

# With the env var, the executable acts like the `bun` CLI
BUN_BE_BUN=1 ./such-bun install
```

--------------------------------

### List Installed Packages with Bun

Source: https://bun.sh/docs/guides/install/from-npm-install-to-bun-install

Use `bun pm ls` to list installed packages. By default, it shows top-level packages. Adding the `-a` flag lists all installed packages, including transitive dependencies, using Bun's lockfile as the source of truth.

```sh
# List top-level installed packages:
bun pm ls
```

```sh
# List all installed packages:
bun pm ls -a
```

--------------------------------

### Performance Options

Source: https://bun.sh/docs/pm/cli/publish

Optimize Bun install performance using different backend strategies and concurrency settings.

```APIDOC
## Performance Options

### Description
These options allow you to tune the performance of `bun install` by selecting different backend strategies for file operations and adjusting concurrency limits for network requests and script execution.

### Method
`bun install` (command-line flags)

### Endpoint
N/A

### Parameters
#### Path Parameters
None

#### Query Parameters
None

#### Request Body
None

### Request Example
```bash
bun install --backend symlink --network-concurrency 100 --concurrent-scripts 10
```

### Response
#### Success Response (200)
N/A (command-line flags modify behavior)

#### Response Example
N/A
```

--------------------------------

### Bun Install Dependency Type and Versioning Options

Source: https://bun.sh/docs/pm/cli/install

Flags to specify the type of dependency to add (dev, optional, peer) and to control versioning (exact version or range).

```sh
bun install --dev
bun install --optional
bun install --peer
bun install --exact
```

--------------------------------

### Initialize Project and Add Mongoose Dependency with Bun

Source: https://bun.sh/docs/guides/ecosystem/mongoose

This snippet demonstrates the initial steps to set up a new project using Bun. It includes creating a project directory, initializing it with `bun init`, and adding the Mongoose library as a project dependency.

```sh
mkdir mongoose-app
cd mongoose-app
bun init
bun add mongoose
```

--------------------------------

### install.dryRun

Source: https://bun.sh/docs/runtime/bunfig

Determines whether `bun install` will actually perform the installation of dependencies. When `true`, it is equivalent to using the `--dry-run` flag on all `bun install` commands. Defaults to `false`.

```APIDOC
## `install.dryRun`

### Description
Whether `bun install` will actually install dependencies. Default `false`. When true, it's equivalent to setting `--dry-run` on all `bun install` commands.

### Method
Configuration

### Endpoint
N/A (Configuration setting)

### Parameters
#### Path Parameters
None

#### Query Parameters
None

#### Request Body
None

### Request Example
```toml
[install]
dryRun = false
```

### Response
#### Success Response (200)
N/A (Configuration setting)

#### Response Example
N/A
```

--------------------------------

### Configure Optional Dependencies Installation in Bun

Source: https://bun.sh/docs/runtime/bunfig

Determines whether optional dependencies are installed during `bun install`. Defaults to true. This setting is configurable under the `[install]` section.

```toml
[install]
optional = true
```

--------------------------------

### Configure Install Settings Inheritance for Tests

Source: https://bun.sh/docs/test/configuration

Defines installation settings like registry, `exact` versioning, and `prefer`ence for offline installs that are inherited by `bun test`. This is crucial for tests interacting with private registries or requiring specific installation behaviors.

```toml
[install]
registry = "https://npm.company.com/"
exact = true
prefer = "offline"

[test]
coverage = true
timeout = 10000
```

```toml
[install]
registry = "https://registry.npmjs.org/"
exact = true

[test]
root = "src"
preload = ["./test-setup.ts", "./global-mocks.ts"]
timeout = 10000
smol = true
coverage = true
coverageReporter = ["text", "lcov"]
coverageDir = "./coverage"
coverageThreshold = { lines = 0.85, functions = 0.90, statements = 0.80 }
coverageSkipTestFiles = true
coveragePathIgnorePatterns = [
  "**/*.spec.ts",
  "src/utils/**",
  "*.config.js",
  "generated/**"
]
coverageIgnoreSourcemaps = false

[test.reporter]
junit = "./reports/junit.xml"
```

--------------------------------

### Bun.build - Other Configuration Options

Source: https://bun.sh/docs/bundler/esbuild

Details on other configuration options like `color`, `conditions`, and `footer`. `color` relates to log output, `conditions` are not supported due to target-based priority, and `footer` is not supported.

```APIDOC
## Bun.build - Other Configuration Options

### Description
Details on other configuration options like `color`, `conditions`, and `footer`. `color` relates to log output, `conditions` are not supported due to target-based priority, and `footer` is not supported.

### Method
N/A (Configuration Option)

### Endpoint
N/A (Configuration Option)

### Parameters
#### Path Parameters
N/A

#### Query Parameters
N/A

#### Request Body
- **color** (boolean) - Optional - Controls whether logs are output in color. Defaults to true.
- **conditions** (array) - Not Supported - Export conditions priority is determined by `target`.
- **footer** (string) - Not Supported

### Request Example
```typescript
Bun.build({
  entrypoints: ["./index.ts"],
  color: false, // Disable color output for logs
});
```

### Response
#### Success Response (200)
N/A (Configuration Option)

#### Response Example
N/A
```

--------------------------------

### Install Dependencies in Production Mode with Bun

Source: https://bun.sh/docs/pm/cli/install

Installs project dependencies while excluding `devDependencies` and `optionalDependencies`. This is useful for production builds to minimize the package size.

```bash
bun install --production
```

--------------------------------

### Configure Private Registry Scopes in bunfig.toml

Source: https://bun.sh/docs/guides/install/registry-scope

This snippet demonstrates how to configure private npm registries for specific organization scopes using the `bunfig.toml` file. It shows examples for setting registries as strings, objects with username/password, and objects with tokens, including referencing environment variables for credentials.

```toml
[install.scopes]
# as a string
"@myorg1" = "https://usertitle:password@registry.myorg.com/"

# as an object with username/password
# you can reference environment variables
"@myorg2" = {
  username = "myusername",
  password = "$npm_pass",
  url = "https://registry.myorg.com/"
}

# as an object with token
"@myorg3" = { token = "$npm_token", url = "https://registry.myorg.com/" }
```

```toml
[install.scopes]
"@myorg3" = { token = "$npm_token", url = "https://registry.myorg.com/" }
```

--------------------------------

### Perform Reproducible Installs with Bun

Source: https://bun.sh/docs/pm/cli/install

Ensures reproducible installs by using the exact package versions specified in the lockfile. If the `package.json` and `bun.lock` files are out of sync, Bun will exit with an error, and the lockfile will not be updated.

```bash
bun install --frozen-lockfile
```

--------------------------------

### Create a Basic HTTP Server with Bun.serve

Source: https://bun.sh/docs/quickstart

Defines and starts a simple HTTP server using Bun.serve. The server listens on port 3000 and responds with 'Bun!' for requests to the root path. It logs the server URL to the console.

```typescript
const server = Bun.serve({
  port: 3000,
  routes: {
    "/": () => new Response('Bun!'),
  }
});

console.log(`Listening on ${server.url}`);
```

--------------------------------

### Install Visual Studio with C++ Workload and Git (PowerShell)

Source: https://bun.sh/docs/project/building-windows

Installs Visual Studio Community 2022 with the 'Desktop Development with C++' workload and Git using WinGet. This is a core system dependency for building Bun on Windows.

```powershell
winget install "Visual Studio Community 2022" --override "--add Microsoft.VisualStudio.Workload.NativeDesktop Microsoft.VisualStudio.Component.Git " -s msstore
```

--------------------------------

### Bun Install Network and Registry Settings

Source: https://bun.sh/docs/pm/cli/install

Flags to configure network-related settings, such as providing custom Certificate Authorities or specifying a registry.

```sh
bun install --ca <certificate>
bun install --cafile <file_path>
bun install --registry <registry_url>
```

--------------------------------

### Configure Peer Dependencies Installation in Bun

Source: https://bun.sh/docs/runtime/bunfig

Determines whether peer dependencies are installed during `bun install`. Defaults to true. This setting is configurable under the `[install]` section.

```toml
[install]
peer = true
```

--------------------------------

### Configure Development Dependencies Installation in Bun

Source: https://bun.sh/docs/runtime/bunfig

Determines whether development dependencies are installed during `bun install`. Defaults to true. This setting is configurable under the `[install]` section.

```toml
[install]
dev = true
```

--------------------------------

### bun link CLI Options

Source: https://bun.sh/docs/pm/cli/link

This section provides a comprehensive list of command-line options available for the `bun link` command, covering installation scope, dependency management, project files, installation control, network, and performance.

```APIDOC
## CLI Usage: `bun link <packages>`

### Installation Scope

- **`--global`** (`-g`) (boolean): Install globally.

### Dependency Management

- **`--production`** (`-p`) (boolean): Don't install devDependencies.
- **`--omit`** (string): Exclude `dev`, `optional`, or `peer` dependencies from install.

### Project Files & Lockfiles

- **`--yarn`** (`-y`) (boolean): Write a `yarn.lock` file (yarn v1).
- **`--frozen-lockfile`** (boolean): Disallow changes to lockfile.
- **`--save-text-lockfile`** (boolean): Save a text-based lockfile.
- **`--lockfile-only`** (boolean): Generate a lockfile without installing dependencies.
- **`--no-save`** (boolean): Don't update `package.json` or save a lockfile.
- **`--save`** (boolean): Default: `true` - Save to `package.json`.
- **`--trust`** (boolean): Add to `trustedDependencies` in the project's `package.json` and install the package(s).

### Installation Control

- **`--force`** (`-f`) (boolean): Always request the latest versions from the registry & reinstall all dependencies.
- **`--no-verify`** (boolean): Skip verifying integrity of newly downloaded packages.
- **`--backend`** (string): Default: `clonefile` - Platform-specific optimizations for installing dependencies. Possible values: `clonefile`, `hardlink`, `symlink`, `copyfile`.
- **`--linker`** (string): Linker strategy (one of `isolated` or `hoisted`).
- **`--dry-run`** (boolean): Don't install anything.
- **`--ignore-scripts`** (boolean): Skip lifecycle scripts in the project's `package.json` (dependency scripts are never run).

### Network & Registry

- **`--ca`** (string): Provide a Certificate Authority signing certificate.
- **`--cafile`** (string): Same as `--ca`, but as a file path to the certificate.
- **`--registry`** (string): Use a specific registry by default, overriding `.npmrc`, `bunfig.toml`, and environment variables.
- **`--network-concurrency`** (number): Default: `48` - Maximum number of concurrent network requests.

### Performance & Resource

- **`--concurrent-scripts`** (number): Default: `5` - Maximum number of concurrent jobs for lifecycle scripts.
```

--------------------------------

### Install Dependencies After Trusting a Package

Source: https://bun.sh/docs/guides/install/trusted

This shell command sequence is used to perform a fresh installation of dependencies after modifying the `trustedDependencies` in `package.json`. It involves removing the existing `node_modules` directory and the `bun.lock` file, followed by running `bun install`. This ensures that Bun re-evaluates and installs all dependencies, including the newly trusted ones, correctly.

```sh
rm -rf node_modules
rm bun.lock
bun install
```

--------------------------------

### Configuring HTML Routes in Bun.serve()

Source: https://bun.sh/docs/bundler/fullstack

This TypeScript example illustrates how to configure HTML files as routes in Bun's `serve` function. By mapping URL paths to imported HTML files, Bun automatically handles the bundling of associated JavaScript, TypeScript, and CSS files, simplifying frontend development.

```typescript
Bun.serve({
  routes: {
    "/": homepage,
    "/dashboard": dashboard,
  },

  fetch(req) {
    // ... api requests
  },
});

```

--------------------------------

### Configure Vite for TanStack Start with Nitro (TypeScript)

Source: https://bun.sh/docs/guides/ecosystem/tanstack-start

Updates the vite.config.ts file to integrate TanStack Start with Nitro, specifically configuring Nitro for the Bun runtime. This involves adding Nitro plugins and optionally specifying the 'bun' preset for optimized builds.

```typescript
// other imports...
import { nitro } from "nitro/vite"; // [!code ++]

const config = defineConfig({
  plugins: [
    tanstackStart(),
    nitro({ preset: "bun" }), // [!code ++]
    // other plugins...
  ],
});

export default config;
```

--------------------------------

### Install React and ReactDOM for Bun

Source: https://bun.sh/docs/guides/ecosystem/ssr-react

Installs the necessary React and ReactDOM packages for server-side rendering. This command can be run with any package manager compatible with Bun.

```sh
# Any package manager can be used
bun add react react-dom
```

--------------------------------

### Initialize Bun Server and Handle Errors

Source: https://bun.sh/docs/guides/ecosystem/tanstack-start

This snippet demonstrates how to initialize a Bun server, including a global error handler for uncaught exceptions. It logs success messages and handles potential startup failures.

```typescript
            },

            // Global error handler
            error(error) {
              log.error(
                `Uncaught server error: ${error instanceof Error ? error.message : String(error)}`,
              )
              return new Response('Internal Server Error', { status: 500 })
            },
          })

          log.success(`Server listening on http://localhost:${String(server.port)}`)
        }

        // Initialize the server
        initializeServer().catch((error: unknown) => {
          log.error(`Failed to start server: ${String(error)}`)
          process.exit(1)
        })
        ```
```

--------------------------------

### Scaffold a React project with Tailwind CSS using Bun

Source: https://bun.sh/docs/runtime/templating/init

Initializes a new Bun project with a React application preconfigured with Tailwind CSS. This command streamlines the setup for React projects utilizing Tailwind for styling.

```bash
bun init --react=tailwind
```

--------------------------------

### Ahead-of-Time Bundling with Bun CLI

Source: https://bun.sh/docs/bundler/fullstack

This command demonstrates how to use the Bun CLI to bundle a full-stack application ahead of time for production. It specifies the target environment, production mode, output directory, and the entry point file. This is recommended for optimizing performance.

```bash
bun build --target=bun --production --outdir=dist ./src/index.ts
```

--------------------------------

### Install Prisma Dependencies with Bun

Source: https://bun.sh/docs/guides/ecosystem/prisma

Installs Prisma CLI, Prisma Client, and the LibSQL adapter as development and regular dependencies using Bun's package manager. These are essential for Prisma integration.

```bash
bun add -d prisma
bun add @prisma/client @prisma/adapter-libsql
```

--------------------------------

### Systemd Service Status Output Example

Source: https://bun.sh/docs/guides/ecosystem/systemd

This is an example of the output from `systemctl status my-app`. It indicates that the service is loaded, enabled, and currently active (running), along with details about the main process and resource consumption.

```text
● my-app.service - My App
     Loaded: loaded (/lib/systemd/system/my-app.service; enabled; preset: enabled)
     Active: active (running) since Thu 2023-10-12 11:34:08 UTC; 1h 8min ago
   Main PID: 309641 (bun)
      Tasks: 3 (limit: 503)
     Memory: 40.9M
        CPU: 1.093s
     CGroup: /system.slice/my-app.service
             └─309641 /home/YOUR_USER/.bun/bin/bun run /home/YOUR_USER/application/index.ts
```

--------------------------------

### Example Yarn Lockfile Output

Source: https://bun.sh/docs/guides/install/yarnlock

This is an example of the output generated when a Yarn-compatible lockfile is printed to the console. It includes package versions, resolved tarball locations, and integrity hashes.

```txt
# THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
# yarn lockfile v1
# bun ./bun.lockb --hash: 9BFBF11D86084AAB-9418b03ff880c569-390CE6459EACEC9A...

abab@^2.0.6:
  version "2.0.6"
  resolved "https://registry.npmjs.org/abab/-/abab-2.0.6.tgz"
  integrity sha512-j2afSsaIENvHZN2B8GOpF566vZ5WVk5opAiMTvWgaQT8DkbOqsTfvNAvH...

```

--------------------------------

### Install Optional WebKit Build Tools using Scoop (PowerShell)

Source: https://bun.sh/docs/project/building-windows

Installs additional tools like Make, Cygwin, and Python using Scoop, which are required if you intend to build WebKit locally on x64 systems. Cygwin is not needed for ARM64 builds.

```powershell
scoop install make cygwin python
```

--------------------------------

### Bun REPL Example Usage

Source: https://bun.sh/docs/runtime/repl

Demonstrates basic interactions within the Bun REPL, including arithmetic operations, variable assignments, and accessing the last result using the '_' variable.

```txt
Welcome to Bun v1.3.3
Type .copy [code] to copy to clipboard. .help for more info.

> 1 + 1
2
> const greeting = "Hello, Bun!"
undefined
> greeting
'Hello, Bun!'
```

--------------------------------

### Instantiate Bun Transpiler

Source: https://bun.sh/docs/runtime/transpiler

Demonstrates how to create a new instance of the Bun.Transpiler class with specific options. This example initializes the transpiler with a default loader set to 'jsx'.

```typescript
const transpiler = new Bun.Transpiler({ loader: "jsx" });

```

--------------------------------

### Capture Stack Trace at Specific Point with Error.captureStackTrace in TypeScript

Source: https://bun.sh/docs/runtime/debugger

This example shows how to use Error.captureStackTrace to capture a stack trace starting from a specific function, rather than where the error was thrown. This is particularly helpful for debugging asynchronous code or callbacks where the error origin might be obscured. The second argument, `fn`, specifies the function from which the stack trace should begin.

```typescript
const fn = () => {
  function myInner() {
    throw err;
  }

  try {
    myInner();
  } catch (err) {
    console.log(err.stack);
    console.log("");
    console.log("-- captureStackTrace --");
    console.log("");
    Error.captureStackTrace(err, fn);
    console.log(err.stack);
  }
};

fn();
```

--------------------------------

### Install Global Packages with Bun

Source: https://bun.sh/docs/pm/cli/add

Installs packages globally using the -g or --global flag. This is typically used for command-line tools and does not modify the current project's package.json. Aliases include 'bun install --global' and 'bun install -g'.

```bash
bun add --global cowsay
cowsay "Bun!"
```

--------------------------------

### Running the Bun Fullstack Dev Server

Source: https://bun.sh/docs/bundler/fullstack

This bash command initiates the Bun development server using the 'app.ts' file. It leverages Bun's runtime to execute the TypeScript code, starting the server and making it ready to serve frontend assets and API requests.

```bash
bun run app.ts

```

--------------------------------

### Configure Global Install Directory (TOML)

Source: https://bun.sh/docs/runtime/bunfig

Specifies the directory where Bun installs globally installed packages. This can also be configured via the `BUN_INSTALL_GLOBAL_DIR` environment variable.

```toml
[install]
# where `bun install --global` installs packages
globalDir = "~/.bun/install/global"
```

--------------------------------

### Scaffold a React project with shadcn/ui using Bun

Source: https://bun.sh/docs/runtime/templating/init

Initializes a new Bun project with a React application preconfigured with @shadcn/ui and Tailwind CSS. This command simplifies the setup for React projects using shadcn/ui components.

```bash
bun init --react=shadcn
```

--------------------------------

### Install Without Creating a Lockfile

Source: https://bun.sh/docs/pm/lockfile

This command installs packages without creating or updating the `bun.lock` file. This is useful when you want to avoid modifying the lockfile during an installation.

```bash
bun install --no-save
```

--------------------------------

### Creating a Native Plugin in Rust

Source: https://bun.sh/docs/bundler/plugins

Steps to create a native plugin using Rust and the napi-rs CLI, including installation and adding the bun-native-plugin crate.

```APIDOC
## Creating a Native Plugin in Rust

Native plugins are NAPI modules which expose lifecycle hooks as C ABI functions.

To create a native plugin, you must export a C ABI function which matches the signature of the native lifecycle hook you want to implement.

### Installation

```bash
bun add -g @napi-rs/cli
napi new
```

### Add Crate

```bash
cargo add bun-native-plugin
```

### Example: Implementing `onBeforeParse` Hook

Inside the `lib.rs` file, use the `bun_native_plugin::bun` proc macro to define a function which will implement your native plugin.

```rust
use bun_native_plugin::{define_bun_plugin, OnBeforeParse, bun, Result, anyhow, BunLoader};
use napi_derive::napi;

/// Define the plugin and its name
define_bun_plugin!("replace-foo-with-bar");

/// Here we'll implement `onBeforeParse` with code that replaces all occurrences of
/// `foo` with `bar`.
///
/// We use the #[bun] macro to generate some of the boilerplate code.
///
/// The argument of the function (`handle: &mut OnBeforeParse`) tells
/// the macro that this function implements the `onBeforeParse` hook.
#[bun]
pub fn replace_foo_with_bar(handle: &mut OnBeforeParse) -> Result<()> {
  // Fetch the input source code.
  let input_source_code = handle.input_source_code()?;

  // Get the Loader for the file
  let loader = handle.output_loader();

  let output_source_code = input_source_code.replace("foo", "bar");

  handle.set_output_source_code(output_source_code, BunLoader::BUN_LOADER_JSX);

  Ok(())
}
```

### Usage in `Bun.build()`

```typescript
import myNativeAddon from "./my-native-addon";

Bun.build({
  entrypoints: ["./app.tsx"],
  plugins: [
    {
      name: "my-plugin",

      setup(build) {
        build.onBeforeParse(
          {
            namespace: "file",
            filter: "**/*.tsx",
          },
          {
            napiModule: myNativeAddon,
            symbol: "replace_foo_with_bar",
            // external: myNativeAddon.getSharedState()
          },
        );
      },
    },
  ],
});
```
```

--------------------------------

### Hot Reloading YAML Configuration with Bun

Source: https://bun.sh/docs/runtime/yaml

Illustrates how Bun's `--hot` flag enables automatic reloading of applications when YAML configuration files change. This feature is crucial for development, allowing immediate reflection of configuration adjustments without restarting the server. The example shows a basic server setup that reads configuration from a YAML file.

```yaml
server:
  port: 3000
  host: localhost

features:
  debug: true
  verbose: false
```

```typescript
import { server, features } from "./config.yaml";

console.log(`Starting server on ${server.host}:${server.port}`);

if (features.debug) {
  console.log("Debug mode enabled");
}

// Your server code here
Bun.serve({
  port: server.port,
  hostname: server.host,
  fetch(req) {
    if (features.verbose) {
      console.log(`${req.method} ${req.url}`);
    }
    return new Response("Hello World");
  },
});
```

```bash
bun --hot server.ts
```

--------------------------------

### Custom Production Server with Bun (TypeScript)

Source: https://bun.sh/docs/guides/ecosystem/tanstack-start

Provides a custom server.ts implementation for TanStack Start applications using Bun. This server offers advanced features like intelligent static asset loading with configurable memory management, preloading small files, and serving larger files on-demand. It's designed for production environments requiring fine-grained control over resource usage.

```typescript
/**
* TanStack Start Production Server with Bun
*
* A high-performance production server for TanStack Start applications that
* implements intelligent static asset loading with configurable memory management.
*
* Features:
* - Hybrid loading strategy (preload small files, serve large files on-demand)
* - Configurable file filtering with include/exclude patterns
* - Memory-efficient response generation
* - Production-ready caching headers
*
* Environment Variables:
*
* PORT (number)
*   - Server port number
*   - Default: 3000
*
* ASSET_PRELOAD_MAX_SIZE (number)

```

--------------------------------

### CI/CD Workflow with `bun ci`

Source: https://bun.sh/docs/pm/cli/install

This YAML snippet shows a GitHub Actions workflow configured to use `bun ci` for installing dependencies. This ensures that the build process strictly adheres to the versions specified in the `bun.lock` file, promoting reproducible builds.

```yaml
name: bun-types
jobs:
  build:
    name: build-app
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repo
        uses: actions/checkout@v4
      - name: Install bun
        uses: oven-sh/setup-bun@v2
      - name: Install dependencies
        run: bun ci
      - name: Build app
        run: bun run build
```

--------------------------------

### Clearing All Mock Function State in TypeScript

Source: https://bun.sh/docs/test/mocks

This example shows how to reset the call count and other state information for all mock functions using `mock.clearAllMocks()`. This is useful for ensuring that each test starts with a clean slate regarding mock invocations, without affecting the original implementations of the mocked functions. It verifies that mocks are reset and then demonstrates that their original functionality is preserved.

```typescript
import { expect, mock, test } from "bun:test";

const random1 = mock(() => Math.random());
const random2 = mock(() => Math.random());

test("clearing all mocks", () => {
  random1();
  random2();

  expect(random1).toHaveBeenCalledTimes(1);
  expect(random2).toHaveBeenCalledTimes(1);

  mock.clearAllMocks();

  expect(random1).toHaveBeenCalledTimes(0);
  expect(random2).toHaveBeenCalledTimes(0);

  // Note: implementations are preserved
  expect(typeof random1()).toBe("number");
  expect(typeof random2()).toBe("number");
});
```

--------------------------------

### Initialize StricJS Project and Add Dependencies (Bash)

Source: https://bun.sh/docs/guides/ecosystem/stric

This snippet demonstrates how to create a new project directory, navigate into it, initialize a Bun project, and add the necessary StricJS packages (@stricjs/router and @stricjs/utils).

```bash
mkdir myapp
cd myapp
bun init
bun add @stricjs/router @stricjs/utils
```

--------------------------------

### Bun REPL Top-Level Await Example

Source: https://bun.sh/docs/runtime/repl

Shows how to use top-level `await` directly in the Bun REPL to handle promises asynchronously without needing an `async` function wrapper.

```txt
> await fetch("https://api.github.com/repos/oven-sh/bun").then(r => r.json()).then(r => r.stargazers_count)
81234
> const response = await fetch("https://example.com")
undefined
> response.status
200
```

--------------------------------

### SpawnOptions.OptionsObject

Source: https://bun.sh/docs/runtime/child-process

Configuration options for Bun.spawn and Bun.spawnSync, controlling execution environment, I/O, and callbacks.

```APIDOC
## SpawnOptions.OptionsObject

### Description
An object that can be passed to `Bun.spawn` and `Bun.spawnSync` to configure the child process.

### Method
N/A (Interface Definition)

### Endpoint
N/A

### Parameters
#### Path Parameters
None

#### Query Parameters
None

#### Request Body
- **cwd** (string) - Optional - The current working directory for the child process.
- **env** (Record<string, string | undefined>) - Optional - Environment variables for the child process.
- **stdio** ([Writable, Readable, Readable]) - Optional - Defines the stdio streams for the child process.
- **stdin** (Writable) - Optional - Standard input stream.
- **stdout** (Readable) - Optional - Standard output stream.
- **stderr** (Readable) - Optional - Standard error stream.
- **onExit** ((subprocess: Subprocess, exitCode: number | null, signalCode: number | null, error?: ErrorLike) => void | Promise<void>) - Optional - Callback function executed when the subprocess exits.
- **ipc** ((message: any, subprocess: Subprocess)) => void - Optional - Callback for inter-process communication.
- **serialization** ("json" | "advanced") - Optional - Serialization method for IPC.
- **windowsHide** (boolean) - Optional - Hide the subprocess window on Windows.
- **windowsVerbatimArguments** (boolean) - Optional - Use verbatim arguments on Windows.
- **argv0** (string) - Optional - The first argument of the argv array.
- **signal** (AbortSignal) - Optional - Signal to abort the process.
- **timeout** (number) - Optional - Timeout in milliseconds for the process.
- **killSignal** (string | number) - Optional - Signal to use when killing the process.
- **maxBuffer** (number) - Optional - Maximum buffer size for stdio streams.
- **terminal** (TerminalOptions) - Optional - PTY support options (POSIX only).

### Request Example
```javascript
Bun.spawn(['node', 'script.js'], {
  cwd: '/path/to/dir',
  env: { MY_VAR: 'value' },
  stdio: ['pipe', 'pipe', 'pipe'],
  onExit: (proc, code) => console.log(`Process exited with code ${code}`)
});
```

### Response
#### Success Response (200)
N/A (This is an options object, not an endpoint response)

#### Response Example
N/A
```

--------------------------------

### Filter Dependencies for Specific Packages

Source: https://bun.sh/docs/pm/cli/install

Install dependencies for a subset of packages within a monorepo using the `--filter` flag. This allows for targeted installations, excluding or including specific packages.

```bash
# Install dependencies for all workspaces except `pkg-c`
bun install --filter '!pkg-c'

# Install dependencies for only `pkg-a` in `./packages/pkg-a`
bun install --filter './packages/pkg-a'
```

--------------------------------

### Start Bun app with PM2 using config file

Source: https://bun.sh/docs/guides/ecosystem/pm2

This command starts a Bun application using a PM2 configuration file. This method is useful for managing multiple applications or complex configurations.

```bash
pm2 start pm2.config.js
```

--------------------------------

### Bun Install Lockfile Control Options

Source: https://bun.sh/docs/pm/cli/install

Options related to generating and managing lockfiles, including support for yarn.lock and preventing lockfile modifications.

```sh
bun install --yarn
bun install --frozen-lockfile
bun install --save-text-lockfile
bun install --lockfile-only
```

--------------------------------

### Storing CLI Tool Credentials Example

Source: https://bun.sh/docs/runtime/secrets

Example demonstrating how to store and retrieve credentials for common CLI tools like GitHub and npm.

```APIDOC
## Examples

### Storing CLI Tool Credentials

```javascript
// Store GitHub CLI token (instead of ~/.config/gh/hosts.yml)
await Bun.secrets.set({
  service: "my-app.com",
  name: "github-token",
  value: "ghp_xxxxxxxxxxxxxxxxxxxx",
});

// Or if you prefer without an object
await Bun.secrets.set("my-app.com", "github-token", "ghp_xxxxxxxxxxxxxxxxxxxx");

// Store npm registry token (instead of ~/.npmrc)
await Bun.secrets.set({
  service: "npm-registry",
  name: "https://registry.npmjs.org",
  value: "npm_xxxxxxxxxxxxxxxxxxxx",
});

// Retrieve for API calls
const token = await Bun.secrets.get({
  service: "gh-cli",
  name: "github.com",
});

if (token) {
  const response = await fetch("https://api.github.com/name", {
    headers: {
      Authorization: `token ${token}`,
    },
  });
}
```
```

--------------------------------

### Bun Fullstack Dev Server Setup with HTML Routes and API Endpoints

Source: https://bun.sh/docs/bundler/fullstack

This TypeScript code demonstrates how to set up Bun's integrated dev server. It imports HTML files to serve as routes and defines API endpoints for user data. The server is configured for development mode, enabling detailed error messages and hot reloading.

```typescript
import { serve } from "bun";
import dashboard from "./dashboard.html";
import homepage from "./index.html";

const server = serve({
  routes: {
    // ** HTML imports **
    // Bundle & route index.html to "/". This uses HTMLRewriter to scan
    // the HTML for `<script>` and `<link>` tags, runs Bun's JavaScript
    // & CSS bundler on them, transpiles any TypeScript, JSX, and TSX,
    // downlevels CSS with Bun's CSS parser and serves the result.
    "/": homepage,
    // Bundle & route dashboard.html to "/dashboard"
    "/dashboard": dashboard,

    // ** API endpoints ** (Bun v1.2.3+ required)
    "/api/users": {
      async GET(req) {
        const users = await sql`SELECT * FROM users`;
        return Response.json(users);
      },
      async POST(req) {
        const { name, email } = await req.json();
        const [user] = await sql`INSERT INTO users (name, email) VALUES (${name}, ${email})`;
        return Response.json(user);
      },
    },
    "/api/users/:id": async req => {
      const { id } = req.params;
      const [user] = await sql`SELECT * FROM users WHERE id = ${id}`;
      return Response.json(user);
    },
  },

  // Enable development mode for:
  // - Detailed error messages
  // - Hot reloading (Bun v1.2.3+ required)
  development: true,
});

console.log(`Listening on ${server.url}`);

```

--------------------------------

### Configure Production Mode Installation in Bun

Source: https://bun.sh/docs/runtime/bunfig

Sets `bun install` to run in 'production mode', where devDependencies are not installed. Defaults to false. The --production CLI flag can override this setting.

```toml
[install]
production = false
```

--------------------------------

### Install TailwindCSS and Bun Plugin

Source: https://bun.sh/docs/bundler/fullstack

Installs the `tailwindcss` package and the `bun-plugin-tailwind` for use with Bun. This enables TailwindCSS utility classes in your project.

```bash
bun add tailwindcss bun-plugin-tailwind
```

--------------------------------

### Initialize Remix App with Bun

Source: https://bun.sh/docs/guides/ecosystem/remix

Initializes a new Remix project using the `create-remix` command executed via Bun. This command prompts for project details and sets up the basic project structure and dependencies.

```sh
bun create remix
```

--------------------------------

### Import Installed Package in TypeScript

Source: https://bun.sh/docs/guides/install/add-tarball

Demonstrates how to import a package that has been installed as a dependency, in this case, the 'zod' package.

```ts
import { z } from "zod";
```

--------------------------------

### Configure Exact Version Installation in Bun

Source: https://bun.sh/docs/runtime/bunfig

Determines whether to set exact versions in `package.json` during installation. Defaults to false, meaning caret ranges are used. This setting is configurable under the `[install]` section.

```toml
[install]
exact = false
```

--------------------------------

### Run package.json scripts and executables with Bun

Source: https://bun.sh/docs/guides/install/from-npm-install-to-bun-install

Learn how to run package.json scripts, executables from `node_modules/.bin`, and JavaScript/TypeScript files using the `bun` command. This provides a unified way to execute various project tasks, similar to `npm run`, `npm exec`, `node`, and `npx`.

```sh
# Run a package.json script:
bun my-script
bun run my-script

# Run an executable in node_modules/.bin:
bun my-executable # such as tsc, esbuild, etc.
bun run my-executable

# Run a JavaScript/TypeScript file:
bun ./index.ts
```

--------------------------------

### Bun.build - Define and Drop Configuration

Source: https://bun.sh/docs/bundler/esbuild

Configure build-time replacements with the `define` option. The `drop` option is not supported.

```APIDOC
## Bun.build - Define and Drop Configuration

### Description
Configure build-time replacements with the `define` option. The `drop` option is not supported.

### Method
N/A (Configuration Option)

### Endpoint
N/A (Configuration Option)

### Parameters
#### Path Parameters
N/A

#### Query Parameters
N/A

#### Request Body
- **define** (object) - Optional - An object where keys are identifiers to be replaced and values are their replacements (e.g., `{"process.env.NODE_ENV": "'production'"}`).
- **drop** (array) - Not Supported

### Request Example
```typescript
Bun.build({
  entrypoints: ["./index.ts"],
  define: {
    "process.env.NODE_ENV": "'production'",
  },
});
```

### Response
#### Success Response (200)
N/A (Configuration Option)

#### Response Example
N/A
```

--------------------------------

### Run a Bun Script

Source: https://bun.sh/docs/quickstart

Executes a TypeScript file using the Bun runtime. This command navigates into the project directory and then runs the specified script. It's used here to start the application.

```bash
cd my-app
bun run index.ts
```

--------------------------------

### TypeScript Example for --hot Reloading

Source: https://bun.sh/docs/runtime/watch-mode

A TypeScript example demonstrating hot reloading. It initializes a global counter and logs the reload count. When the file is saved, Bun re-evaluates the code, incrementing the count without restarting the process. This example includes an interval to prevent the 'bun run' process from exiting.

```typescript
// make TypeScript happy
declare global {
  var count: number;
}

globalThis.count ??= 0;
console.log(`Reloaded ${globalThis.count} times`);
globalThis.count++;

// prevent `bun run` from exiting
setInterval(function () {}, 1000000);
```

--------------------------------

### Install Discord.js Dependency with Bun

Source: https://bun.sh/docs/guides/ecosystem/discordjs

This command installs the `discord.js` library, a popular Node.js library for interacting with the Discord API, into your Bun project. Bun handles dependency management efficiently.

```sh
bun add discord.js
```

--------------------------------

### Preserve Catalog Dependencies in package.json

Source: https://bun.sh/docs/pm/cli/install

Dependencies using pnpm's `catalog:` protocol are maintained in the `package.json` file after migration. This allows Bun to correctly resolve and install these catalog-based dependencies.

```json
{
  "dependencies": {
    "react": "catalog:",
    "webpack": "catalog:build"
  }
}
```

--------------------------------

### Install Specific Bun Version (Windows)

Source: https://bun.sh/docs/guides/util/upgrade

Installs a specific version of Bun on Windows using PowerShell and the official install script. This method is suitable for Windows environments.

```powershell
iex "& {$(irm https://bun.sh/install.ps1)} -Version 1.3.3"
```

--------------------------------

### Implement Bun Plugin Hooks (TypeScript)

Source: https://bun.sh/docs/bundler/esbuild

This example shows how to implement core hooks within a Bun plugin: onStart, onResolve, onLoad, and onEnd. Each hook allows you to execute custom logic at different points during the build process, such as initialization, module resolution, loading, and completion.

```typescript
import type { BunPlugin } from "bun";
const myPlugin: BunPlugin = {
  name: "my-plugin",
  setup(builder) {
    builder.onStart(() => {
      /* called when the bundle starts */
    });
    builder.onResolve(
      {
        /* onResolve.options */
      },
      args => {
        return {
          /* onResolve.results */
        };
      },
    );
    builder.onLoad(
      {
        /* onLoad.options */
      },
      args => {
        return {
          /* onLoad.results */
        };
      },
    );
    builder.onEnd(result => {
      /* called when the bundle is complete */
    });
  },
};

```

--------------------------------

### Installing Dependencies with Bun CLI

Source: https://bun.sh/docs/guides/install/workspaces

Command to install all dependencies for all workspaces in a monorepo. Run this command from the project root after defining workspaces and their dependencies.

```sh
bun install
```

--------------------------------

### Install Figlet Package and Types

Source: https://bun.sh/docs/quickstart

Installs the 'figlet' package for ASCII art generation and its type declarations for TypeScript projects. This command is executed in the terminal within the Bun project directory.

```bash
bun add figlet
bun add -d @types/figlet # TypeScript users only
```

--------------------------------

### Bun Route Precedence Example

Source: https://bun.sh/docs/runtime/http/routing

Demonstrates the order of route matching in Bun.serve(), prioritizing exact routes, then parameter routes, wildcard routes, and finally a global catch-all. This ensures more specific routes are matched before broader ones.

```typescript
Bun.serve({
  routes: {
    // Most specific first
    "/api/users/me": () => new Response("Current user"),
    "/api/users/:id": req => new Response(`User ${req.params.id}`),
    "/api/*": () => new Response("API catch-all"),
    "/*": () => new Response("Global catch-all"),
  },
});
```

--------------------------------

### Override Platform for Package Installation (Bash)

Source: https://bun.sh/docs/pm/cli/install

Installs packages for a specified CPU architecture and operating system, overriding the current system's platform. This is useful for cross-platform builds and deployments. Accepted values for --cpu include arm64, x64, ia32, ppc64, s390x. Accepted values for --os include linux, darwin, win32, freebsd, openbsd, sunos, aix.

```bash
bun install --cpu=x64 --os=linux
```

--------------------------------

### Monorepo Structure Example

Source: https://bun.sh/docs/pm/workspaces

Illustrates a typical file tree structure for a monorepo project managed with Bun workspaces. It shows the root directory containing configuration files and a 'packages' directory housing individual sub-packages.

```txt
<root>
├── README.md
├── bun.lock
├── package.json
├── tsconfig.json
└── packages
    ├── pkg-a
    │   ├── index.ts
    │   ├── package.json
    │   └── tsconfig.json
    ├── pkg-b
    │   ├── index.ts
    │   ├── package.json
    │   └── tsconfig.json
    └── pkg-c
        ├── index.ts
        ├── package.json
        └── tsconfig.json
```

--------------------------------

### install.ca and install.cafile

Source: https://bun.sh/docs/runtime/bunfig

Allows configuring a Certificate Authority (CA) certificate for secure connections. Use `install.ca` to provide the certificate as a string, or `install.cafile` to specify a path to a CA certificate file (which can contain multiple certificates).

```APIDOC
## `install.ca` and `install.cafile`

### Description
To configure a CA certificate, use `install.ca` or `install.cafile` to specify a path to a CA certificate file.

### Method
Configuration

### Endpoint
N/A (Configuration setting)

### Parameters
#### Path Parameters
None

#### Query Parameters
None

#### Request Body
None

### Request Example
```toml
[install]
# The CA certificate as a string
ca = "-----BEGIN CERTIFICATE-----\n...\n-----END CERTIFICATE-----"

# A path to a CA certificate file. The file can contain multiple certificates.
cafile = "path/to/cafile"
```

### Response
#### Success Response (200)
N/A (Configuration setting)

#### Response Example
N/A
```

--------------------------------

### Install Testing Libraries with Bun

Source: https://bun.sh/docs/guides/test/svelte-test

Installs the necessary packages for testing Svelte components with Bun. This includes `@testing-library/svelte`, `svelte`, and `@happy-dom/global-registrator`.

```bash
bun add @testing-library/svelte svelte@4 @happy-dom/global-registrator
```

--------------------------------

### bcrypt Modular Crypt Format Example (TypeScript)

Source: https://bun.sh/docs/runtime/hashing

Shows an example of generating a bcrypt hash and its output in Modular Crypt Format. It explains the components of the MCF hash string.

```typescript
await Bun.password.hash("hello", {
  algorithm: "bcrypt",
});
```

--------------------------------

### Install a Security Scanner Package

Source: https://bun.sh/docs/pm/security-scanner-api

This command demonstrates how to install a security scanner package as a development dependency using Bun. The `-d` flag ensures it's added to devDependencies. This is a prerequisite for configuring and using a scanner.

```bash
bun add -d @acme/bun-security-scanner
```

--------------------------------

### Install Railway CLI

Source: https://bun.sh/docs/guides/deployment/railway

Installs the Railway CLI globally using Bun. This command is essential for managing deployments via the command line.

```bash
bun install -g @railway/cli
```

--------------------------------

### Start Bun app with PM2 using CLI

Source: https://bun.sh/docs/guides/ecosystem/pm2

This command starts a Bun application using PM2, specifying the path to the Bun interpreter. Ensure the interpreter path is correct for your system.

```bash
pm2 start --interpreter ~/.bun/bin/bun index.ts
```

--------------------------------

### Input Stream Configuration

Source: https://bun.sh/docs/runtime/child-process

Details on how to configure the standard input (`stdin`) for a spawned process, including various data types and the 'pipe' option for incremental writing.

```APIDOC
## POST /spawn/stdin

### Description
Configures the standard input (`stdin`) for a spawned process. This allows you to provide data to the subprocess.

### Method
POST

### Endpoint
/spawn/stdin

### Parameters
#### Request Body
- **command** (array of strings) - Required - The command to execute.
- **stdin** (string | File | ReadableStream | Blob | ArrayBuffer | DataView | number | null) - Required - The input data or stream for the subprocess.
  - **"pipe"**: Returns a `FileSink` for incremental writing.
  - **`Bun.file(path)`**: Reads from the specified file.
  - **`Response` or `Request`**: Uses the response or request body as input.
  - **`ReadableStream`**: Pipes data from a JavaScript readable stream.
  - **`TypedArray | DataView`**: Uses a binary buffer as input.
  - **`null`**: Default, no input provided.
  - **`"inherit"`**: Inherits `stdin` from the parent process.

### Request Example (using 'pipe')
```json
{
  "command": ["cat"],
  "stdin": "pipe"
}
```

### Response
#### Success Response (200)
- **pid** (number) - The process ID of the spawned subprocess.
- **stdin_sink** (FileSink) - A `FileSink` object if `stdin` was set to `"pipe"`, allowing incremental writes.

#### Response Example
```json
{
  "pid": 12346,
  "stdin_sink": "<FileSink>"
}
```
```

--------------------------------

### Configure Bun Install Registry with bunfig.toml

Source: https://bun.sh/docs/guides/install/jfrog-artifactory

This snippet shows how to configure the `bunfig.toml` file to point Bun install to a JFrog Artifactory npm registry. Replace `MY_SUBDOMAIN` and `MY_TOKEN` with your specific Artifactory details. This method allows for direct configuration within the project.

```toml
[install.registry]
url = "https://MY_SUBDOMAIN.jfrog.io/artifactory/api/npm/npm/_auth=MY_TOKEN"
# You can use an environment variable here
# url = "$NPM_CONFIG_REGISTRY"

```

--------------------------------

### Fetch Local Files using file:// Protocol

Source: https://bun.sh/docs/runtime/networking/fetch

Shows how to fetch local files using the `file://` protocol with Bun's fetch API. The example includes how paths are automatically normalized on Windows.

```typescript
const response = await fetch("file:///path/to/file.txt");
const text = await response.text();

// On Windows, paths are automatically normalized:
// Both work on Windows
const response = await fetch("file:///C:/path/to/file.txt");
const response2 = await fetch("file:///c:/path\to/file.txt");
```

--------------------------------

### Bun.main

Source: https://bun.sh/docs/runtime/utils

Gets the absolute path to the entrypoint of the current program.

```APIDOC
## `Bun.main`

### Description
An absolute path to the entrypoint of the current program (the file that was executed with `bun run`). This is useful for determining if a script is being directly executed or imported.

### Method
GET (Implicit)

### Endpoint
N/A (Runtime property)

### Parameters
None

### Request Example
```ts
console.log(Bun.main);
// => "/path/to/script.ts"

if (import.meta.path === Bun.main) {
  // this script is being directly executed
} else {
  // this file is being imported from another script
}
```

### Response
#### Success Response (200)
- **main** (string) - The absolute path to the entrypoint script.
```

--------------------------------

### Create Vite Project with Bun

Source: https://bun.sh/docs/guides/ecosystem/vite

Use the `bun create` command to scaffold a new Vite project. This command initializes a project based on a selected template (e.g., React with TypeScript).

```bash
bun create vite my-app
```

--------------------------------

### Registering Callbacks on Bundle Start (TypeScript)

Source: https://bun.sh/docs/bundler/plugins

The `onStart` callback allows you to register functions that execute when the bundler begins a new bundle. These callbacks can be asynchronous and Bun waits for all `onStart` callbacks to complete before proceeding. This is useful for tasks like logging or preparing files.

```typescript
import { plugin } from "bun";

plugin({
  name: "onStart example",

  setup(build) {
    build.onStart(() => {
      console.log("Bundle started!");
    });
  },
});
```

```typescript
const result = await Bun.build({
  entrypoints: ["./app.ts"],
  outdir: "./dist",
  sourcemap: "external",
  plugins: [
    {
      name: "Sleep for 10 seconds",
      setup(build) {
        build.onStart(async () => {
          await Bun.sleep(10_000);
        });
      },
    },
    {
      name: "Log bundle time to a file",
      setup(build) {
        build.onStart(async () => {
          const now = Date.now();
          await Bun.$`echo ${now} > bundle-time.txt`;
        });
      },
    },
  ],
});
```

--------------------------------

### Initialize Nuxt App with Bun

Source: https://bun.sh/docs/guides/ecosystem/nuxt

This command initializes a new Nuxt.js application using the `nuxi` CLI and Bun as the package manager. It ensures that all dependencies are installed using Bun.

```sh
bunx nuxi init my-nuxt-app
```

--------------------------------

### Spawn a process with Bun.spawn()

Source: https://bun.sh/docs/runtime/child-process

This section details how to spawn a child process using the `Bun.spawn()` function, providing basic usage and configuration options.

```APIDOC
## POST /spawn

### Description
Spawns a child process using the `Bun.spawn()` function. This function allows you to execute external commands and interact with their input and output streams.

### Method
POST

### Endpoint
/spawn

### Parameters
#### Request Body
- **command** (array of strings) - Required - The command and its arguments to execute.
- **options** (object) - Optional - Configuration options for the subprocess.
  - **cwd** (string) - Optional - The working directory for the subprocess.
  - **env** (object) - Optional - Environment variables for the subprocess.
  - **stdin** (string | FileSink | ReadableStream | Blob | ArrayBuffer | DataView | number | null) - Optional - Configures the standard input stream of the subprocess. Defaults to `null`.
  - **stdout** (string | File | number) - Optional - Configures the standard output stream of the subprocess. Defaults to `"pipe"`.
  - **stderr** (string | File | number) - Optional - Configures the standard error stream of the subprocess. Defaults to `"inherit"`.
  - **onExit** (function) - Optional - A callback function to be executed when the subprocess exits.

### Request Example
```json
{
  "command": ["bun", "--version"],
  "options": {
    "cwd": "./path/to/subdir",
    "env": {
      "FOO": "bar"
    }
  }
}
```

### Response
#### Success Response (200)
- **pid** (number) - The process ID of the spawned subprocess.
- **exited** (Promise<number>) - A promise that resolves with the exit code of the subprocess.
- **stdout** (ReadableStream) - The standard output stream of the subprocess.
- **stderr** (ReadableStream) - The standard error stream of the subprocess.
- **stdin** (FileSink | null) - The standard input stream of the subprocess, if configured as a pipe.

#### Response Example
```json
{
  "pid": 12345,
  "exited": 0,
  "stdout": "<ReadableStream>",
  "stderr": "<ReadableStream>",
  "stdin": null
}
```
```

--------------------------------

### Install Specific Bun Version (macOS/Linux)

Source: https://bun.sh/docs/guides/util/upgrade

Installs a specific version of Bun on macOS and Linux using the official install script via `curl`. This allows for precise version control.

```bash
curl -fsSL https://bun.sh/install | bash -s "bun-v1.3.3"
```

--------------------------------

### Bun SQLite Basic Query Execution

Source: https://bun.sh/docs/runtime/sqlite

Shows a basic example of executing a SQL query using Bun's SQLite driver. It demonstrates creating an in-memory database, defining a query, and fetching the result.

```typescript
import { Database } from "bun:sqlite";

const db = new Database(":memory:");
const query = db.query("select 'Hello world' as message;");
query.get();
```

--------------------------------

### Bun SQLite Query Result Example

Source: https://bun.sh/docs/runtime/sqlite

Provides an example of the expected output format for a simple SQLite query executed with Bun. This shows the structure of the returned data.

```text
{ message: "Hello world" }
```

--------------------------------

### Output Stream Configuration

Source: https://bun.sh/docs/runtime/child-process

Explains how to configure the standard output (`stdout`) and standard error (`stderr`) streams for a spawned process, including options like piping, inheriting, ignoring, or writing to files.

```APIDOC
## POST /spawn/output

### Description
Configures the standard output (`stdout`) and standard error (`stderr`) streams for a spawned process. This allows you to capture or redirect the process's output.

### Method
POST

### Endpoint
/spawn/output

### Parameters
#### Request Body
- **command** (array of strings) - Required - The command to execute.
- **stdout** (string | File | number) - Optional - Configures the standard output stream. Defaults to `"pipe"`.
  - **`"pipe"`**: Pipes output to a `ReadableStream` on the `Subprocess` object.
  - **`"inherit"`**: Inherits `stdout` from the parent process.
  - **`"ignore"`**: Discards the output.
  - **`Bun.file(path)`**: Writes output to the specified file.
  - **`number`**: Writes output to the file with the given file descriptor.
- **stderr** (string | File | number) - Optional - Configures the standard error stream. Defaults to `"inherit"`.
  - **`"pipe"`**: Pipes output to a `ReadableStream` on the `Subprocess` object.
  - **`"inherit"`**: Inherits `stderr` from the parent process.
  - **`"ignore"`**: Discards the output.
  - **`Bun.file(path)`**: Writes output to the specified file.
  - **`number`**: Writes output to the file with the given file descriptor.

### Request Example
```json
{
  "command": ["bun", "--version"],
  "stdout": "pipe",
  "stderr": "ignore"
}
```

### Response
#### Success Response (200)
- **pid** (number) - The process ID of the spawned subprocess.
- **stdout_stream** (ReadableStream) - The standard output stream if `stdout` was set to `"pipe"`.

#### Response Example
```json
{
  "pid": 12347,
  "stdout_stream": "<ReadableStream>"
}
```
```

--------------------------------

### Configure Bun Install Linker Strategy

Source: https://bun.sh/docs/runtime/bunfig

Defines the strategy for linking installed dependencies. Options include 'hoisted' for a shared `node_modules` or 'isolated' for linking within each package.

```toml
[install]
linker = "hoisted"
```

--------------------------------

### Install Bun in GitHub Actions Workflow

Source: https://bun.sh/docs/test

A YAML snippet for a GitHub Actions workflow to install Bun. This step is crucial for running Bun tests within a CI/CD pipeline on GitHub.

```yaml
jobs:
  build:
    name: build-app
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Install bun
        uses: oven-sh/setup-bun@v2
      - name: Install dependencies # (assuming your project has dependencies)
        run: bun install # You can use npm/yarn/pnpm instead if you prefer
      - name: Run tests
        run: bun test
```

--------------------------------

### Bun Test Setup and Teardown with TypeScript

Source: https://bun.sh/docs/test/writing-tests

Demonstrates the use of `beforeEach` and `afterEach` for setting up and cleaning up test environments in Bun. This pattern is useful for initializing resources before tests and releasing them afterward, ensuring test isolation.

```typescript
import { beforeEach, afterEach, test } from "bun:test";

let testUser;

beforeEach(() => {
  testUser = createTestUser();
});

afterEach(() => {
  cleanupTestUser(testUser);
});

test("should update user profile", () => {
  // Use testUser in test
});
```

--------------------------------

### Install Bun TypeScript Types

Source: https://bun.sh/docs/typescript

Installs the `@types/bun` package as a development dependency, enabling TypeScript to recognize Bun's global APIs and preventing editor errors.

```zsh
bun add -d @types/bun # dev dependency
```

--------------------------------

### Bun Server Configuration and Logging Utilities

Source: https://bun.sh/docs/guides/ecosystem/tanstack-start

Sets up essential server configurations like port and directories, and defines a set of logging utilities for clear console output. These utilities include methods for informational, success, warning, and error messages, as well as a header function.

```typescript
import path from 'node:path'

// Configuration
const SERVER_PORT = Number(process.env.PORT ?? 3000)
const CLIENT_DIRECTORY = './dist/client'
const SERVER_ENTRY_POINT = './dist/server/server.js'

// Logging utilities for professional output
const log = {
  info: (message: string) => {
    console.log(`[INFO] ${message}`)
  },
  success: (message: string) => {
    console.log(`[SUCCESS] ${message}`)
  },
  warning: (message: string) => {
    console.log(`[WARNING] ${message}`)
  },
  error: (message: string) => {
    console.log(`[ERROR] ${message}`)
  },
  header: (message: string) => {
    console.log(`\n${message}\n`)
  },
}
```

--------------------------------

### JavaScript to Bytecode Compilation Example

Source: https://bun.sh/docs/bundler/bytecode

Illustrates a simple JavaScript code snippet and explains the numerous bytecode instructions it compiles to, highlighting the verbosity of bytecode.

```javascript
const sum = arr.reduce((a, b) => a + b, 0);
```

--------------------------------

### Runtime Bundling

Source: https://bun.sh/docs/bundler/fullstack

Enable runtime bundling for simpler setups by setting `development: false` in `Bun.serve()`. This enables in-memory caching, `Cache-Control` headers, and minification.

```APIDOC
## Runtime Bundling

When adding a build step is too complicated, you can set `development: false` in `Bun.serve()`.

This will:

* Enable in-memory caching of bundled assets. Bun will bundle assets lazily on the first request to an `.html` file, and cache the result in memory until the server restarts.
* Enable `Cache-Control` headers and `ETag` headers
* Minify JavaScript/TypeScript/TSX/JSX files

### Server Code Example

```typescript
import { serve } from "bun";
import homepage from "./index.html";

serve({
  routes: {
    "/": homepage,
  },

  // Production mode
  development: false,
});
```
```

--------------------------------

### Bun.js Test Example: Quality vs. Quantity

Source: https://bun.sh/docs/test/code-coverage

Demonstrates writing effective tests in Bun.js by focusing on actual functionality rather than just executing lines of code. This TypeScript example shows a good test for a `calculateTax` function and an example of a poor test that lacks assertions.

```typescript
// Good: Test actual functionality
test("calculateTax should handle different tax rates", () => {
  expect(calculateTax(100, 0.08)).toBe(8);
  expect(calculateTax(100, 0.1)).toBe(10);
  expect(calculateTax(0, 0.08)).toBe(0);
});

// Avoid: Just hitting lines for coverage
test("calculateTax exists", () => {
  calculateTax(100, 0.08); // No assertions!
});
```

--------------------------------

### Configure Module Preloading in bunfig.toml

Source: https://bun.sh/docs/test/mocks

Demonstrates how to configure module preloading directly within the `bunfig.toml` configuration file. By adding a `preload` array under the `[test]` section, you can specify modules to be loaded and mocked before tests run, simplifying test setup.

```toml
[test]
# Load these modules before running tests.
preload = ["./my-preload"]
```

--------------------------------

### Install npm package with alias using Bun

Source: https://bun.sh/docs/guides/install/npm-alias

Installs an npm package and assigns it an alias for easier import. This is useful for avoiding naming conflicts or for using specific versions of packages.

```sh
bun add my-custom-name@npm:zod
```

--------------------------------

### Example Global Mocks Script

Source: https://bun.sh/docs/test/configuration

A TypeScript example for `global-mocks.ts` that sets up global mocks for environment variables and external modules using `bun:test`'s `mock` API.

```typescript
// Global mocks
import { mock } from "bun:test";

// Mock environment variables
process.env.NODE_ENV = "test";
process.env.API_URL = "http://localhost:3001";

// Mock external dependencies
mock.module("./external-api", () => ({
  fetchData: mock(() => Promise.resolve({ data: "test" })),
}));
```

--------------------------------

### Install Testing Library Packages for React with Bun

Source: https://bun.sh/docs/guides/test/testing-library

Installs necessary Testing Library packages for React testing, including core DOM utilities and Jest-dom matchers. These are development dependencies.

```sh
bun add -D @testing-library/react @testing-library/dom @testing-library/jest-dom
```

--------------------------------

### Scaffold a React project with Bun

Source: https://bun.sh/docs/runtime/templating/init

Initializes a new Bun project with a baseline React application template. This command sets up the necessary files and configurations for a React project.

```bash
bun init --react
```

--------------------------------

### Start Next.js Dev Server with Bun

Source: https://bun.sh/docs/guides/ecosystem/nextjs

Changes the directory to the Next.js project and starts the development server using `bun run dev`. This command utilizes Bun's runtime for faster execution and hot-reloading.

```shell
cd my-bun-app
bun --bun run dev
```

--------------------------------

### List Installed Dependencies with Bun PM LS

Source: https://bun.sh/docs/pm/cli/pm

The `bun pm ls` command (or `bun list`) displays installed dependencies. Without flags, it lists direct dependencies. With the `--all` flag, it lists all nested dependencies.

```bash
bun pm ls
# or
bun list
```

```bash
bun pm ls --all
# or
bun list --all
```

--------------------------------

### Install Tailwind CSS Plugin for Bun

Source: https://bun.sh/docs/bundler/standalone-html

Installs the bun-plugin-tailwind development dependency using Bun's package manager. This is the first step to integrate Tailwind CSS into your project.

```bash
bun install --dev bun-plugin-tailwind
```

--------------------------------

### Runtime Bundling with Bun.serve in Development

Source: https://bun.sh/docs/bundler/fullstack

This TypeScript example illustrates runtime bundling using `Bun.serve` by setting `development: false`. This enables in-memory caching of bundled assets, lazy bundling on the first request to an HTML file, and automatically adds `Cache-Control` and `ETag` headers. It also minifies JavaScript/TypeScript/TSX/JSX files.

```typescript
import { serve } from "bun";
import homepage from "./index.html";

serve({
  routes: {
    "/": homepage,
  },

  // Production mode
  development: false,
});
```

--------------------------------

### Combined Minification Example

Source: https://bun.sh/docs/bundler/minifier

Demonstrates the output of a TypeScript file after applying the `--minify` flag in Bun.build. The resulting JavaScript code is significantly reduced in size, showing the effect of default minification settings.

```typescript
const myVariable = 42;

const myFunction = () => {
  const isValid = true;
  const result = undefined;
  return isValid ? myVariable : result;
};

const output = myFunction();
```

```js
// Output with --minify (49 bytes, 69% reduction)
const a=42,b=()=>{const c=!0,d=void 0;return c?a:d},e=b();
```

--------------------------------

### Combine Multiple Flags in Bun

Source: https://bun.sh/docs/bundler/executables

Demonstrates how to combine multiple flags when running a Bun executable. This is useful for debugging or profiling production executables without needing to rebuild them. It shows a direct command-line execution example.

```bash
BUN_OPTIONS="--smol --cpu-prof-md" ./myapp
```

--------------------------------

### Define a Simple Express Server with TypeScript

Source: https://bun.sh/docs/guides/deployment/render

Creates a basic Express server that listens on a specified port and responds with 'Hello World!' to root requests. This code snippet uses TypeScript and demonstrates a minimal web application structure.

```typescript
import express from "express";

const app = express();
const port = process.env.PORT || 3001;

app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.listen(port, () => {
	console.log(`Listening on port ${port}...`);
});
```

--------------------------------

### Bun.build() Asset Naming Configuration (JavaScript)

Source: https://bun.sh/docs/bundler/esbuild

Configures how assets are named during the build process using Bun.build(). It supports templating similar to esbuild, but requires explicit inclusion of the file extension. This example shows how to set the asset naming pattern.

```javascript
ts
Bun.build({
  entrypoints: ["./index.tsx"],
  naming: {
    asset: "[name].[ext]",
  },
});

```

--------------------------------

### Configure Concurrent Script Execution

Source: https://bun.sh/docs/pm/cli/install

Adjust the maximum number of concurrent lifecycle scripts that Bun can run during installation using the `--concurrent-scripts` flag. The default is twice the reported CPU count.

```bash
bun install --concurrent-scripts 5
```

--------------------------------

### Build Bun Application with Bytecode in Dockerfile

Source: https://bun.sh/docs/bundler/bytecode

This Dockerfile demonstrates how to build a Bun application including bytecode generation. It uses a multi-stage build, first installing dependencies and building the application with `--bytecode`, then copying the compiled output to a clean runtime image. This ensures efficient production deployment.

```dockerfile
FROM oven/bun:1 AS builder
WORKDIR /app
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

COPY . .
RUN bun build --bytecode --minify --sourcemap \
  --target=bun \
  --outdir=./dist \
  --compile \
  ./src/server.ts --outfile=./dist/server

FROM oven/bun:1 AS runner
WORKDIR /app
COPY --from=builder /dist/server /app/server
CMD ["./server"]
```

--------------------------------

### Configure Bun Install Lockfile

Source: https://bun.sh/docs/runtime/bunfig

Manages lockfile generation for `bun install`. It determines whether to save a lockfile and if a non-Bun lockfile (like Yarn's) should be generated alongside `bun.lock`.

```toml
[install.lockfile]
save = true
```

```toml
[install.lockfile]
print = "yarn"
```

--------------------------------

### Initialize and Run a React App with Bun

Source: https://bun.sh/docs/guides/ecosystem/react

Commands to create, develop, build, and run a React application using Bun. Bun supports JSX and TSX out of the box, simplifying React development. The `bun init --react` command sets up a full-stack template.

```bash
# Create a new React app
bun init --react

# Run the app in development mode
bun dev

# Build as a static site for production
bun run build

# Run the server in production
bun start
```

--------------------------------

### Integrate React with Bun.js Client-Side

Source: https://bun.sh/docs/bundler/fullstack

This snippet demonstrates how to set up a basic Bun.js server to serve a React application. It includes the backend server setup, the frontend React component rendering, and the HTML structure to host the React app. The `react-dom/client` is used for client-side rendering.

```typescript
import dashboard from "../public/dashboard.html";
import { serve } from "bun";

serve({
routes: {
"/": dashboard,
},
async fetch(req) {
// ...api requests
return new Response("hello world");
},
});
```

```typescript
import { createRoot } from 'react-dom/client';
import App from './app';

const container = document.getElementById('root');
const root = createRoot(container!); 
root.render(<App />);
```

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Dashboard</title>
    <link rel="stylesheet" href="../src/styles.css" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="../src/frontend.tsx"></script>
  </body>
</html>
```

```typescript
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
    </div>
  );
}
```

--------------------------------

### View Outdated Dependencies with Bun

Source: https://bun.sh/docs/guides/install/from-npm-install-to-bun-install

Run `bun outdated` to check for outdated dependencies in your project. This command provides a compact output similar to `npm outdated`, highlighting packages that have newer versions available.

```sh
bun outdated
```

--------------------------------

### Add Bun to PATH (Windows)

Source: https://bun.sh/docs/installation

Steps to configure the system's PATH variable on Windows to include the Bun installation directory. This is done via PowerShell and requires restarting the terminal to take effect. It allows running `bun` commands directly.

```powershell
& "$env:USERPROFILE\.bun\bin\bun" --version
```

```powershell
[System.Environment]::SetEnvironmentVariable(
  "Path",
  [System.Environment]::GetEnvironmentVariable("Path", "User") + ";$env:USERPROFILE\.bun\bin",
  [System.EnvironmentVariableTarget]::User
)
```

```powershell
bun --version
```

--------------------------------

### Initialize Bun Project for Discord Bot

Source: https://bun.sh/docs/guides/ecosystem/discordjs

This snippet demonstrates how to create a new directory and initialize a Bun project using the `bun init` command. This sets up the basic structure for a Bun application.

```sh
mkdir my-bot
cd my-bot
bun init
```

--------------------------------

### Serving Embedded Files Statically

Source: https://bun.sh/docs/bundler/executables

Demonstrates how to dynamically serve embedded assets using `static` routes in Bun. This example creates a mapping of file names to their corresponding Blob objects for efficient serving.

```APIDOC
## POST /websites/bun_sh/serveStatic

### Description
Dynamically serves embedded assets using `static` routes.

### Method
POST

### Endpoint
`serve` function with `static` option

### Parameters
#### Path Parameters
None

#### Query Parameters
None

#### Request Body
None (Implicitly uses `embeddedFiles`)

### Request Example
```ts
import { embeddedFiles, serve } from "bun";

const staticRoutes: Record<string, Blob> = {};
for (const blob of embeddedFiles) {
  const name = blob.name.replace(/-[a-f0-9]+\./, "."); // Remove hash
  staticRoutes[`/${name}`] = blob;
}

serve({
  static: staticRoutes,
  fetch(req) {
    return new Response("Not found", { status: 404 });
  },
});
```

### Response
#### Success Response (200)
- **Response**: Serves static files based on the `staticRoutes` mapping.

#### Response Example
(No direct JSON response, serves files)
```

--------------------------------

### Add Tarball Dependency using Bun

Source: https://bun.sh/docs/guides/install/add-tarball

Installs a tarball from a public URL as a project dependency. This command downloads, extracts, and installs the package into `node_modules` and updates `package.json`.

```sh
bun add zod@https://registry.npmjs.org/zod/-/zod-3.21.4.tgz
```

--------------------------------

### Configure Bun Install Cache

Source: https://bun.sh/docs/runtime/bunfig

Sets the directory for Bun's install cache and controls whether to load from or disable the global cache. It also allows disabling manifest caching.

```toml
[install.cache]

# the directory to use for the cache
dir = "~/.bun/install/cache"

# when true, don't load from the global cache.
# Bun may still write to node_modules/.cache
disable = false

# when true, always resolve the latest versions from the registry
disableManifest = false
```

--------------------------------

### Bun.build - Naming Configuration

Source: https://bun.sh/docs/bundler/esbuild

Configure how output files are named using `chunkNames`, `entryNames`, and `naming` options. These options support templating similar to esbuild, requiring explicit inclusion of `[ext]`.

```APIDOC
## Bun.build - Naming Configuration

### Description
Configure how output files are named using `chunkNames`, `entryNames`, and `naming` options. These options support templating similar to esbuild, requiring explicit inclusion of `[ext]`.

### Method
N/A (Configuration Option)

### Endpoint
N/A (Configuration Option)

### Parameters
#### Path Parameters
N/A

#### Query Parameters
N/A

#### Request Body
- **chunkNames** (string) - Optional - Specifies the naming pattern for chunks. Uses templating syntax like `[name].[ext]`.
- **entryNames** (string) - Optional - Specifies the naming pattern for entry points. Uses templating syntax like `[name].[ext]`.
- **naming** (object or string) - Optional - A granular way to specify naming for entries, assets, and chunks. Can be a string or an object with `entry`, `asset`, and `chunk` properties.

### Request Example
```typescript
Bun.build({
  entrypoints: ["./index.tsx"],
  naming: {
    chunk: "[name].[ext]",
    entry: "[name].[ext]",
    asset: "[name].[ext]",
  },
});
```

### Response
#### Success Response (200)
N/A (Configuration Option)

#### Response Example
N/A
```

--------------------------------

### Register Callback on Bundler Start (TypeScript)

Source: https://bun.sh/docs/runtime/plugins

The `onStart` callback allows you to register a function that will be executed when the Bun bundler begins a new bundle process. This callback can be asynchronous and the bundler will wait for all `onStart` callbacks to complete before proceeding. It does not allow modification of the build configuration.

```typescript
onStart(callback: () => void): Promise<void> | void;
```

```typescript
import { plugin } from "bun";

plugin({
  name: "onStart example",

  setup(build) {
    build.onStart(() => {
      console.log("Bundle started!");
    });
  },
});
```

```typescript
const result = await Bun.build({
  entrypoints: ["./app.ts"],
  outdir: "./dist",
  sourcemap: "external",
  plugins: [
    {
      name: "Sleep for 10 seconds",
      setup(build) {
        build.onStart(async () => {
          await Bunlog.sleep(10_000);
        });
      },
    },
    {
      name: "Log bundle time to a file",
      setup(build) {
        build.onStart(async () => {
          const now = Date.now();
          await Bun.$`echo ${now} > bundle-time.txt`;
        });
      },
    },
  ],
});
```

--------------------------------

### Configure .gitignore for Bun Project

Source: https://bun.sh/docs/guides/ecosystem/discordjs

This example `.gitignore` file prevents sensitive information like the bot's private key (stored in `.env.local`) and the `node_modules` directory from being committed to version control. This is crucial for security.

```txt
node_modules
.env.local
```

--------------------------------

### Update package.json for Dev Script

Source: https://bun.sh/docs/guides/ecosystem/vite

Modify the `dev` script in `package.json` to use `bunx --bun vite` for starting the development server. This simplifies the command to `bun run dev`.

```json
  "scripts": {
    "dev": "bunx --bun vite", 
    "build": "vite build",
    "serve": "vite preview"
  },
  // ...
```

--------------------------------

### Install Sentry Bun SDK

Source: https://bun.sh/docs/guides/ecosystem/sentry

Install the official Sentry SDK for Bun using the bun package manager. This command adds the necessary dependency to your project.

```sh
bun add @sentry/bun
```

--------------------------------

### Configure Minification in Bun.build

Source: https://bun.sh/docs/bundler/esbuild

Demonstrates how to use the 'minify' option in Bun.build. It shows both enabling all minification with a boolean and applying granular control by specifying which parts to minify (identifiers, syntax, whitespace).

```typescript
await Bun.build({
  entrypoints: ['./index.tsx'],
  // enable all minification
  minify: true
})

await Bun.build({
  entrypoints: ['./index.tsx'],
  // granular options
  minify: {
    identifiers: true,
    syntax: true,
    whitespace: true
  }
})
```

--------------------------------

### Coverage Threshold Examples

Source: https://bun.sh/docs/test/configuration

Provides examples of setting code coverage thresholds, including a simple overall threshold and detailed thresholds for specific metrics like lines, functions, and statements. These settings help enforce code quality standards.

```toml
[test]
# Require 90% coverage across the board
coverageThreshold = 0.9

# Different requirements for different metrics
coverageThreshold = {
  lines = 0.85,      # 85% line coverage
  functions = 0.90,  # 90% function coverage
  statements = 0.80  # 80% statement coverage
}
```

--------------------------------

### Configure Minimum Release Age in bunfig.toml

Source: https://bun.sh/docs/pm/cli/install

Sets the minimum release age for npm packages globally via the `bunfig.toml` configuration file. Package versions published more recently than this threshold (in seconds) will be filtered out during installation.

```toml
[install]
# Only install package versions published at least 3 days ago
minimumReleaseAge = 259200 # seconds

```

--------------------------------

### Bun Build: Correct Value Formatting for --define

Source: https://bun.sh/docs/guides/runtime/build-time-constants

Illustrates the correct way to format values for the `--define` flag in Bun builds, emphasizing that values must be valid JSON. It shows examples for strings, numbers, booleans, objects, and arrays, highlighting common pitfalls.

```sh
# ✅ Strings must be JSON-quoted
--define VERSION='"1.0.0"'

# ✅ Numbers are JSON literals
--define PORT=3000

# ✅ Booleans are JSON literals
--define DEBUG=true

# ✅ Objects and arrays (use single quotes to wrap the JSON)
--define 'CONFIG={"host":"localhost","port":3000}'

# ✅ Arrays work too
--define 'FEATURES=["auth","billing","analytics"]'

# ❌ This won't work - missing quotes around string
--define VERSION=1.0.0
```

--------------------------------

### Compile and Run C from JavaScript with Bun

Source: https://bun.sh/docs/runtime/c-compiler

Demonstrates compiling a simple C function (`hello`) and calling it from JavaScript using `bun:ffi`. It shows the setup for `cc`, including providing the C source and defining the function signature. The output confirms successful execution.

```ts
import { cc } from "bun:ffi";
import source from "./hello.c" with { type: "file" };

const { 
  symbols: { hello }, 
} = cc({
  source,
  symbols: {
    hello: {
      args: [],
      returns: "int",
    },
  },
});

console.log("What is the answer to the universe?", hello());
```

```c
int hello() {
  return 42;
}
```

--------------------------------

### Using Plugins with Bun Build

Source: https://bun.sh/docs/bundler

Demonstrates how to integrate custom plugins into the Bun build process. Bun offers a universal plugin system compatible with both its runtime and bundler, allowing for extended build functionalities. Refer to the official plugin documentation for more details.

```APIDOC
## POST /build/plugins

### Description
Configures the Bun bundler to use a list of specified plugins for custom build processes.

### Method
POST

### Endpoint
/build

### Parameters
#### Request Body
- **entrypoints** (array<string>) - Required - An array of entry point files.
- **outdir** (string) - Required - The output directory for the bundled files.
- **plugins** (array<object>) - Optional - An array of plugin objects to be used during bundling.

### Request Example
```json
{
  "entrypoints": ["./index.tsx"],
  "outdir": "./out",
  "plugins": [
    // ... plugin configuration objects ...
  ]
}
```

### Response
#### Success Response (200)
- **outputFiles** (array) - An array of generated files after applying the plugins.

#### Response Example
```json
{
  "outputFiles": [
    {
      "path": "./out/index.js",
      "contents": "// Bundled code with plugin transformations"
    }
  ]
}
```
```

--------------------------------

### Global Test Setup with Happy DOM

Source: https://bun.sh/docs/test/dom

Provides a comprehensive preload file for complex DOM testing setups in Bun.js, integrating @happy-dom/global-registrator and @testing-library/jest-dom. It also mocks the ResizeObserver and matchMedia APIs.

```typescript
import { GlobalRegistrator } from "@happy-dom/global-registrator";
import "@testing-library/jest-dom";

// Register happy-dom globals
GlobalRegistrator.register();

// Add any global test configuration here
global.ResizeObserver = class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
};

// Mock other APIs as needed
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});
```

--------------------------------

### Basic HTML Structure for Static Site

Source: https://bun.sh/docs/bundler/html-static

An example of a basic HTML file structure that can be processed by Bun. It includes links to CSS and JavaScript files, and an image asset.

```html
<!doctype html>
<html>
  <head>
    <link rel="stylesheet" href="./styles.css" />
    <script src="./app.ts" type="module"></script>
  </head>
  <body>
    <img src="./logo.png" />
  </body>
</html>
```

--------------------------------

### Enforce Reproducible Builds with `bun ci`

Source: https://bun.sh/docs/pm/cli/install

This command ensures reproducible builds in CI/CD environments by failing if the package.json is out of sync with the lockfile. It installs exact versions specified in `bun.lock` and requires `bun.lock` to be committed to version control.

```bash
bun ci
```

--------------------------------

### package.json dependency example

Source: https://bun.sh/docs/guides/install/add

This JSON snippet demonstrates how a dependency is added to the `package.json` file after running `bun add`. The `^` symbol indicates that minor and patch versions are acceptable.

```json
{
  "dependencies": {
    "zod": "^3.0.0"
  }
}
```

--------------------------------

### Redis Client Output Example

Source: https://bun.sh/docs/guides/ecosystem/upstash

Shows the expected output after running the Redis client increment operation.

```text
1
```

--------------------------------

### React Application Entry Point

Source: https://bun.sh/docs/bundler/standalone-html

The main React component file that sets up the application. It imports React, ReactDOM, and other components, then renders the root component into the DOM. This file handles the core logic and UI rendering of the React app.

```tsx
import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { Counter } from "./components/Counter.tsx";

function App() {
  return (
    <main>
      <h1>Single-file React App</h1>
      <Counter />
    </main>
  );
}

createRoot(document.getElementById("root")!).render(<App />);
```

--------------------------------

### Output Control Options

Source: https://bun.sh/docs/pm/cli/publish

Manage the verbosity and display of output during the Bun install process.

```APIDOC
## Output Control Options

### Description
These options provide fine-grained control over the output generated by `bun install`, allowing you to suppress all output, enable detailed logging, hide the progress bar, or prevent the publish summary.

### Method
`bun install` (command-line flags)

### Endpoint
N/A

### Parameters
#### Path Parameters
None

#### Query Parameters
None

#### Request Body
None

### Request Example
```bash
bun install --silent --no-progress
```

### Response
#### Success Response (200)
N/A (command-line flags modify behavior)

#### Response Example
N/A
```

--------------------------------

### Embedding and Loading JSON Configuration

Source: https://bun.sh/docs/bundler/executables

Provides an example of embedding a JSON configuration file and loading it using `Bun.file().json()`. It also shows how to merge embedded default configurations with optional user configurations.

```typescript
import configPath from "./default-config.json" with { type: "file" };
import { file } from "bun";

// Load the embedded default configuration
const defaultConfig = await file(configPath).json();

// Merge with user config if it exists
const userConfig = await file("./user-config.json")
  .json()
  .catch(() => ({}));
const config = { ...defaultConfig, ...userConfig };
```

--------------------------------

### Bun Environment Variable Plugin Example

Source: https://bun.sh/docs/bundler/plugins

An example of a Bun plugin that transforms imports of 'env' into a JavaScript module exporting process.env. This demonstrates using onLoad to inject environment variables directly into the build.

```typescript
import { plugin } from "bun";

const envPlugin: BunPlugin = {
  name: "env plugin",
  setup(build) {
    build.onLoad({ filter: /env/, namespace: "file" }, args => {
      return {
        contents: `export default ${JSON.stringify(process.env)}`,
        loader: "js",
      };
    });
  },
};

Bun.build({
  entrypoints: ["./app.ts"],
  outdir: "./dist",
  plugins: [envPlugin],
});

// import env from "env"
// env.FOO === "bar"
```

--------------------------------

### Example Package Structure for NODE_PATH

Source: https://bun.sh/docs/runtime/module-resolution

Illustrates a simple package structure where 'foo' is located in the 'packages' directory, and how it can be imported in another file using the NODE_PATH.

```typescript
// packages/foo/index.js
export const hello = "world";

// src/index.js
import { hello } from "foo";
```

--------------------------------

### Add Exact Version Dependencies with Bun

Source: https://bun.sh/docs/pm/cli/add

Installs a package and pins it to the exact resolved version in package.json, instead of using a version range. Aliases include -E.

```bash
bun add react --exact
bun add react -E
```

--------------------------------

### Demonstrate `silent` Option Behavior

Source: https://bun.sh/docs/runtime/bunfig

Illustrates the effect of the `silent` configuration. The first example shows the default behavior where the command being run is printed to the console. The second example shows the output when `silent` is enabled, where the command itself is not printed.

```sh
bun run dev
# Output:
# Running "dev"...
```

```sh
bun run dev
# Output:
# Running "dev"...
```

--------------------------------

### Convert ArrayBuffer to Buffer with Bun

Source: https://bun.sh/docs/guides

This guide explains how to convert an ArrayBuffer to a Node.js-compatible Buffer object within the Bun environment. This is useful when interoperating with libraries that expect Buffer objects.

```typescript
// Assuming 'arrayBuffer' is your ArrayBuffer instance
const buffer = Buffer.from(arrayBuffer);
```

--------------------------------

### Configure Bun Install Minimum Release Age

Source: https://bun.sh/docs/runtime/bunfig

Sets a minimum age in seconds for npm package versions to be eligible for installation. It also allows specifying packages that should bypass this age requirement.

```toml
[install]
# Only install package versions published at least 3 days ago
minimumReleaseAge = 259200
# These packages will bypass the 3-day minimum age requirement
minimumReleaseAgeExcludes = ["@types/bun", "typescript"]
```

--------------------------------

### Initialize Google Cloud CLI

Source: https://bun.sh/docs/guides/deployment/google-cloud-run

Initializes the Google Cloud CLI, prompting the user to select an existing project or create a new one. This is a prerequisite for interacting with Google Cloud services.

```bash
gcloud init
```

--------------------------------

### Example Test Suite with Bun Test Globals

Source: https://bun.sh/docs/guides/test/migrate-from-jest

An example of a test suite written using Bun's test runner, demonstrating the use of `describe`, `test`, `expect`, `beforeAll`, and `afterEach`. This code assumes TypeScript support has been enabled.

```typescript
describe("my test suite", () => {
  test("should work", () => {
    expect(1 + 1).toBe(2);
  });

  beforeAll(() => {
    // setup code
  });

  afterEach(() => {
    // cleanup code
  });
});
```

--------------------------------

### Convert Uint8Array to Buffer with Bun

Source: https://bun.sh/docs/guides

This guide shows how to convert a Uint8Array to a Node.js Buffer object within the Bun environment. This is essential for compatibility with libraries or APIs that expect Buffer instances.

```typescript
// Assuming 'uint8Array' is your Uint8Array instance
const buffer = Buffer.from(uint8Array);
```

--------------------------------

### install.globalDir

Source: https://bun.sh/docs/runtime/bunfig

Configures the directory where Bun places globally installed packages. Can also be set via the `BUN_INSTALL_GLOBAL_DIR` environment variable.

```APIDOC
## `install.globalDir`

### Description
To configure the directory where Bun puts globally installed packages.

Environment variable: `BUN_INSTALL_GLOBAL_DIR`

### Method
Configuration

### Endpoint
N/A (Configuration setting)

### Parameters
#### Path Parameters
None

#### Query Parameters
None

#### Request Body
None

### Request Example
```toml
[install]
# where `bun install --global` installs packages
globalDir = "~/.bun/install/global"
```

### Response
#### Success Response (200)
N/A (Configuration setting)

#### Response Example
N/A
```

--------------------------------

### Start Bun REPL

Source: https://bun.sh/docs/runtime/repl

Launches an interactive Read-Eval-Print Loop (REPL) for JavaScript and TypeScript. This is useful for testing code snippets and exploring APIs.

```sh
bun repl
```

--------------------------------

### Install Happy DOM for Testing Library with Bun

Source: https://bun.sh/docs/guides/test/testing-library

Installs the Happy DOM global registrator package as a development dependency using Bun. This is a prerequisite for using Testing Library with Bun's test runner.

```sh
bun add -D @happy-dom/global-registrator
```

--------------------------------

### Run Bun `cat` Command

Source: https://bun.sh/docs/runtime/file-io

Example of how to execute the Bun `cat` command implementation from the terminal. This command takes a file path as an argument and outputs the file's content.

```bash
bun ./cat.ts ./path-to-file
```

--------------------------------

### Convert Buffer to ArrayBuffer with Bun

Source: https://bun.sh/docs/guides

This guide demonstrates converting a Node.js Buffer object to an ArrayBuffer in the Bun environment. This is useful when you need to use Buffer data with APIs that expect ArrayBuffers.

```typescript
// Assuming 'buffer' is your Buffer instance
const arrayBuffer = buffer.buffer.slice(buffer.byteOffset, buffer.byteOffset + buffer.byteLength);
```

--------------------------------

### Initialize Bun Project

Source: https://bun.sh/docs/guides/ecosystem/upstash

Initializes a new Bun project and navigates into the project directory. This is the first step to setting up your application.

```sh
bun init bun-upstash-redis
cd bun-upstash-redis
```

--------------------------------

### CommonJS Module Export Example

Source: https://bun.sh/docs/runtime/module-resolution

An example of a CommonJS module (`.cjs` file) that uses `module.exports` to export a value. This demonstrates the typical structure of a CommonJS module that can be imported using `require()`.

```javascript
const stuff = require("./stuff");
module.exports = { stuff };
```

--------------------------------

### Convert Buffer to Blob with Bun

Source: https://bun.sh/docs/guides

This guide explains how to convert a Buffer object to a Blob using Bun. This allows you to treat binary data from a Buffer as a file-like object, which can be useful for various web-related operations.

```typescript
// Assuming 'buffer' is your Buffer instance
const blob = new Blob([buffer]);
```

--------------------------------

### Configure Bun S3Client for DigitalOcean Spaces

Source: https://bun.sh/docs/runtime/s3

This example demonstrates configuring Bun's S3Client for DigitalOcean Spaces. You need to provide the correct `endpoint` URL for your Spaces instance. The `region` can also be specified if needed, though it's commented out in this example.

```typescript
import { S3Client } from "bun";

const spaces = new S3Client({
  accessKeyId: "access-key",
  secretAccessKey: "secret-key",
  bucket: "my-bucket",
  // region: "nyc3",
  endpoint: "https://<region>.digitaloceanspaces.com",
});
```

--------------------------------

### Control Logging Verbosity

Source: https://bun.sh/docs/pm/cli/install

Modify the logging output of `bun install` using the `--verbose` or `--silent` flags. Verbose mode provides debug logging, while silent mode suppresses all output.

```bash
bun install --verbose # debug logging
bun install --silent  # no logging
```

--------------------------------

### Bun.build - Entrypoints

Source: https://bun.sh/docs/bundler

Defines the entry points for the application bundle. One bundle is generated for each entrypoint.

```APIDOC
## POST /build

### Description
Configures the entry points for the application bundle. A separate bundle will be generated for each specified entrypoint.

### Method
POST

### Endpoint
/build

### Parameters
#### Request Body
- **entrypoints** (string[]) - Required - An array of paths corresponding to the entrypoints of the application.

### Request Example
```json
{
  "entrypoints": ["./index.ts"]
}
```

### Response
#### Success Response (200)
- **success** (boolean) - Indicates if the build was successful.
- **outputs** (BuildArtifact[]) - An array of build artifacts.
- **logs** (BuildMessage[]) - An array of build logs.

#### Response Example
```json
{
  "success": true,
  "outputs": [...],
  "logs": [...] 
}
```
```

--------------------------------

### Building with Feature Flags using Bun.build (JavaScript)

Source: https://bun.sh/docs/bundler

Shows how to enable feature flags during the build process using `Bun.build`. The `features` array in the build configuration specifies which flags should be enabled. This example enables the 'PREMIUM' feature.

```javascript
await Bun.build({
  entrypoints: ['./app.ts'],
  outdir: './out',
  features: ["PREMIUM"],  // PREMIUM=true, DEBUG=false
})
```

--------------------------------

### GET Request with Unix Domain Socket

Source: https://bun.sh/docs/guides/http/fetch-unix

Demonstrates how to send a GET request to a local server using a Unix domain socket. The `unix` option in the `fetch` configuration specifies the path to the socket file.

```APIDOC
## GET /info with Unix Domain Socket

### Description
Send a GET request to a server via a Unix domain socket.

### Method
GET

### Endpoint
http://localhost/info

### Parameters
#### Query Parameters
None

#### Request Body
None

### Request Example
```typescript
const unix = "/var/run/docker.sock";

const response = await fetch("http://localhost/info", { unix });

const body = await response.json();
console.log(body);
```

### Response
#### Success Response (200)
- **body** (object) - The JSON response from the server.

#### Response Example
```json
{
  "example": "response body"
}
```
```

--------------------------------

### Mock Setup and Cleanup with beforeEach/afterEach

Source: https://bun.sh/docs/test/mocks

Illustrates using `beforeEach` and `afterEach` hooks for setting up common mocks before tests and cleaning them up afterward. This ensures a consistent test environment and prevents mock state leakage between tests.

```typescript
import { afterEach, beforeEach } from "bun:test";

beforeEach(() => {
  // Set up common mocks
  mock.module("./logger", () => ({
    log: mock(() => {}),
    error: mock(() => {}),
    warn: mock(() => {}),
  }));
});

afterEach(() => {
  // Clean up all mocks
  mock.restore();
  mock.clearAllMocks();
});
```

--------------------------------

### install.auto

Source: https://bun.sh/docs/runtime/bunfig

Configures Bun's package auto-install behavior. The default is `"auto"`, which automatically installs dependencies on the fly when no `node_modules` folder is found.

```APIDOC
## `install.auto`

### Description
To configure Bun's package auto-install behavior. Default is `"auto"` — when no `node_modules` folder is found, Bun will automatically install dependencies on the fly during execution.

### Method
Configuration

### Endpoint
N/A (Configuration setting)

### Parameters
#### Path Parameters
None

#### Query Parameters
None

#### Request Body
None

### Request Example
```toml
[install]
auto = "auto"
```

### Response
#### Success Response (200)
N/A (Configuration setting)

#### Response Example
N/A

### Valid Values
- `"auto"`: Resolve modules from local `node_modules` if it exists. Otherwise, auto-install dependencies on the fly.
- `"force"`: Always auto-install dependencies, even if `node_modules` exists.
- `"disable"`: Never auto-install dependencies.
- `"fallback"`: Check local `node_modules` first, then auto-install any packages that aren't found. Can be enabled from the CLI with `bun -i`.
```

--------------------------------

### Generate Bun Lockfile Without Installing

Source: https://bun.sh/docs/pm/lockfile

This command generates the `bun.lock` file without installing packages to `node_modules`. The lockfile is always saved to disk, even if it's up-to-date with `package.json`.

```bash
bun install --lockfile-only
```

--------------------------------

### Configure workspaces in package.json

Source: https://bun.sh/docs/guides/install/from-npm-install-to-bun-install

Define workspaces in your `package.json` file using an array of relative paths. This allows Bun to manage monorepos efficiently, similar to npm's workspace feature.

```json
{
  "name": "my-app",
  "workspaces": ["packages/*", "apps/*"]
}
```

--------------------------------

### Convert Buffer to ReadableStream with Bun

Source: https://bun.sh/docs/guides

This guide shows how to convert a Buffer to a ReadableStream using Bun. This is beneficial for processing large binary data efficiently, enabling streaming operations without loading the entire buffer into memory.

```typescript
// Assuming 'buffer' is your Buffer instance
const stream = new ReadableStream({ start(controller) {
  controller.enqueue(buffer);
  controller.close();
}});
```

--------------------------------

### Bun Configuration: Type Mismatch Example (TOML)

Source: https://bun.sh/docs/test/configuration

Illustrates a common configuration issue in bunfig.toml related to type mismatches. Numeric values should not be quoted unless intended as strings. This example shows the correct and incorrect way to set the `timeout` option.

```toml
# Correct
timeout = 10000

# Incorrect - will be treated as string
timeout = "10000"
```

--------------------------------

### Start Nuxt Development Server with Bun

Source: https://bun.sh/docs/guides/ecosystem/nuxt

Starts the Nuxt.js development server using the Bun runtime. The `--bun` flag explicitly tells the `nuxt dev` command to use Bun, overriding its default Node.js behavior. This command is executed from the project root directory.

```sh
cd my-nuxt-app
bun --bun run dev
```

--------------------------------

### Dockerfile for Bun Application

Source: https://bun.sh/docs/guides/deployment/google-cloud-run

This Dockerfile copies the application code, installs production dependencies using Bun, and sets the command to run the application. Ensure the CMD instruction points to your application's entry point.

```dockerfile
# Copy the rest of the application into the container
COPY . .

# Run the application
CMD ["bun", "index.ts"]
```

--------------------------------

### Initialize FileSink Writer

Source: https://bun.sh/docs/runtime/file-io

Shows how to get a FileSink instance from a BunFile object. The FileSink provides an API for incremental writing to a file.

```typescript
const file = Bun.file("output.txt");
const writer = file.writer();
```

--------------------------------

### Install Happy DOM for Browser Testing with Bun

Source: https://bun.sh/docs/guides/test/happy-dom

Installs the happy-dom package as a development dependency. This package is essential for mocking browser APIs when running tests with Bun.

```sh
bun add -d @happy-dom/global-registrator
```

--------------------------------

### Bun.Transpiler Initialization

Source: https://bun.sh/docs/runtime/transpiler

Instantiate Bun's transpiler with a specified loader.

```APIDOC
## Bun.Transpiler Initialization

### Description
Creates an instance of Bun's transpiler, which can be used to transform JavaScript and TypeScript code.

### Method
`new Bun.Transpiler(options)`

### Parameters
#### Request Body
- **loader** (string) - Required - The loader to use for transpiling. Options: `js`, `jsx`, `ts`, `tsx`.

### Request Example
```ts
const transpiler = new Bun.Transpiler({
  loader: "tsx", // "js | "jsx" | "ts" | "tsx"
});
```
```

--------------------------------

### Code Splitting Example: Entrypoint and Lazy Module

Source: https://bun.sh/docs/bundler/executables

These TypeScript files demonstrate code splitting. `entry.ts` is the main entrypoint that loads `lazy.ts` dynamically. `lazy.ts` contains a function that is only executed when imported, showcasing lazy loading.

```typescript
console.log("Entrypoint loaded");
const lazy = await import("./lazy.ts");
lazy.hello();
```

```typescript
export function hello() {
  console.log("Lazy module loaded");
}
```

--------------------------------

### Define a Basic Bun Plugin (TypeScript)

Source: https://bun.sh/docs/bundler/esbuild

This snippet demonstrates how to define a basic Bun plugin using TypeScript. It initializes a plugin with a name and a setup function that receives a builder object. The builder object is used to hook into various stages of the bundling process.

```typescript
import type { BunPlugin } from "bun";

const myPlugin: BunPlugin = {
  name: "my-plugin",
  setup(builder) {
    // define plugin
  },
};

```

--------------------------------

### Convert Blob to String with Bun

Source: https://bun.sh/docs/guides

This guide explains how to convert a Blob object to a string using Bun. This is useful for text-based files or data represented as Blobs. It uses the FileReader API with text decoding.

```typescript
// Assuming 'blob' is your Blob instance
const reader = new FileReader();
reader.onload = () => {
  const string = reader.result;
};
reader.readAsText(blob);
```

--------------------------------

### Start a single HTTP server with reusePort in Bun

Source: https://bun.sh/docs/guides/http/cluster

This snippet demonstrates how to start a single HTTP server using `Bun.serve()` with the `reusePort: true` option. This allows the server to share the same port across multiple processes, enabling concurrent execution and automatic load balancing. Note that this feature is only supported on Linux.

```typescript
import { serve } from "bun";

const id = Math.random().toString(36).slice(2);

serve({
  port: process.env.PORT || 8080,
  development: false,

  // Share the same port across multiple processes
  // This is the important part!
  reusePort: true,

  async fetch(request) {
    return new Response("Hello from Bun #" + id + "!\n");
  },
});
```

--------------------------------

### Convert DataView to String with Bun

Source: https://bun.sh/docs/guides

This guide shows how to convert a DataView to a string using Bun. This involves first obtaining the underlying ArrayBuffer and then decoding it using TextDecoder. Ensure correct encoding is used.

```typescript
// Assuming 'dataView' is your DataView instance
const arrayBuffer = dataView.buffer;
const textDecoder = new TextDecoder();
const string = textDecoder.decode(arrayBuffer);
```

--------------------------------

### Example of Bun test output with todo tests

Source: https://bun.sh/docs/guides/test/todo-tests

This is an example of the text output from running `bun test`. It lists individual test results, including a 'todo' test, and summarizes the overall test run status.

```text
test.test.ts:
✓ add [0.03ms]
✓ multiply [0.02ms]
✎ unimplemented feature

 2 pass
 1 todo
 0 fail
 2 expect() calls
Ran 3 tests across 1 files. [74.00ms]
```

--------------------------------

### Bun: Per-Test Setup and Teardown with beforeEach and afterEach

Source: https://bun.sh/docs/test/lifecycle

Demonstrates using `beforeEach` and `afterEach` hooks in Bun tests for per-test setup and teardown. These functions execute before and after each individual test case, respectively. They are useful for tasks like logging or resetting test states.

```typescript
import { beforeEach, afterEach, test } from "bun:test";

beforeEach(() => {
  console.log("running test.");
});

afterEach(() => {
  console.log("done with test.");
});

// tests...
test("example test", () => {
  // This test will have beforeEach run before it
  // and afterEach run after it
});
```

--------------------------------

### Run a File with --watch Mode (CLI)

Source: https://bun.sh/docs/runtime/watch-mode

A command-line example demonstrating how to initiate a file in Bun's --watch mode. This command will execute the specified file and automatically restart the process when any of its imported files are modified.

```sh
bun run --watch watchy.tsx
```

--------------------------------

### Bun Build: General Configuration Options

Source: https://bun.sh/docs/bundler

Configure the build environment and target. Options include setting production mode, enabling bytecode caching, specifying the target environment (browser, Bun, Node.js), passing custom resolution conditions, and inlining environment variables.

```bash
# Set NODE_ENV=production and enable minification
bun build --production

# Use a bytecode cache when compiling
bun build --bytecode

# Specify the intended execution environment
bun build --target browser
bun build --target bun
bun build --target node

# Pass custom resolution conditions
bun build --conditions=\"my-condition\"

# Inline environment variables matching a prefix
bun build --env FOO_PUBLIC_*

```

--------------------------------

### Convert Buffer to String with Bun

Source: https://bun.sh/docs/guides

This guide demonstrates converting a Buffer object to a string in Bun. It uses the Buffer's built-in `toString()` method, allowing you to specify the encoding. UTF-8 is the default encoding.

```typescript
// Assuming 'buffer' is your Buffer instance
const string = buffer.toString('utf-8');
```

--------------------------------

### Glob Pattern '*' Example (TypeScript)

Source: https://bun.sh/docs/runtime/glob

Illustrates the '*' wildcard in Bun's Glob, which matches zero or more characters but excludes path separators.

```typescript
const glob = new Glob("*.ts");
glob.match("index.ts"); // => true
glob.match("src/index.ts"); // => false
```

--------------------------------

### Configure Overrides and Resolutions

Source: https://bun.sh/docs/pm/cli/install

Specify versions for metadependencies (dependencies of your dependencies) using the `overrides` (npm-style) or `resolutions` (Yarn-style) fields in `package.json`. This helps manage version conflicts.

```json
{
  "name": "my-app",
  "dependencies": {
    "foo": "^2.0.0"
  },
  "overrides": { // [!code ++]
    "bar": "~4.4.0" // [!code ++]
  } // [!code ++]
}
```

--------------------------------

### Bun Redis: Basic Operations

Source: https://bun.sh/docs/runtime/redis

Demonstrates fundamental Redis operations using Bun's native client, including setting, getting, deleting, and checking for the existence of keys. It also shows how to set and retrieve the time-to-live for keys.

```typescript
import { redis } from "bun";

// Set a key
await redis.set("greeting", "Hello from Bun!");

// Get a key
const greeting = await redis.get("greeting");
console.log(greeting); // "Hello from Bun!"

// Increment a counter
await redis.set("counter", 0);
await redis.incr("counter");

// Check if a key exists
const exists = await redis.exists("greeting");

// Delete a key
await redis.del("greeting");

// Set a key with expiration (in seconds)
await redis.set("session:123", "active");
await redis.expire("session:123", 3600); // expires in 1 hour

// Get time to live (in seconds)
const ttl = await redis.ttl("session:123");

// Set initial value for numeric operations
await redis.set("counter", "0");

// Increment by 1
await redis.incr("counter");

// Decrement by 1
await redis.decr("counter");

// Get a key as Uint8Array
const buffer = await redis.getBuffer("user:1:name");

```

--------------------------------

### Configure Bun.spawn() parameters

Source: https://bun.sh/docs/runtime/child-process

Shows how to configure a subprocess using the parameters object in Bun.spawn(). This includes setting the working directory, environment variables, and an exit handler.

```typescript
const proc = Bun.spawn(["bun", "--version"], {
  cwd: "./path/to/subdir", // specify a working directory
  env: { ...process.env, FOO: "bar" }, // specify environment variables
  onExit(proc, exitCode, signalCode, error) {
    // exit handler
  },
});

proc.pid; // process ID of subprocess
```

--------------------------------

### Glob Pattern '?' Example (TypeScript)

Source: https://bun.sh/docs/runtime/glob

Demonstrates the usage of the '?' wildcard in Bun's Glob, which matches any single character except path separators.

```typescript
const glob = new Glob("???.ts");
glob.match("foo.ts"); // => true
glob.match("foobar.ts"); // => false
```

--------------------------------

### Convert Uint8Array to String with Bun

Source: https://bun.sh/docs/guides

This guide shows how to convert a Uint8Array to a string using Bun. It utilizes the TextDecoder API for accurate character encoding. Ensure the correct encoding is specified if it's not UTF-8.

```typescript
// Assuming 'uint8Array' is your Uint8Array instance
const textDecoder = new TextDecoder();
const string = textDecoder.decode(uint8Array);
```

--------------------------------

### Configure Redis Client Connection Options

Source: https://bun.sh/docs/runtime/redis

Demonstrates how to instantiate a Redis client with various connection options. This includes setting timeouts, reconnection behavior, and enabling features like offline queues and pipelining. Dependencies include the Redis client library.

```typescript
const client = new RedisClient("redis://localhost:6379", {
  // Connection timeout in milliseconds (default: 10000)
  connectionTimeout: 5000,

  // Idle timeout in milliseconds (default: 0 = no timeout)
  idleTimeout: 30000,

  // Whether to automatically reconnect on disconnection (default: true)
  autoReconnect: true,

  // Maximum number of reconnection attempts (default: 10)
  maxRetries: 10,

  // Whether to queue commands when disconnected (default: true)
  enableOfflineQueue: true,

  // Whether to automatically pipeline commands (default: true)
  enableAutoPipelining: true,

  // TLS options (default: false)
  tls: true,
  // Alternatively, provide custom TLS config:
  // tls: {
  //   rejectUnauthorized: true,
  //   ca: "path/to/ca.pem",
  //   cert: "path/to/cert.pem",
  //   key: "path/to/key.pem",
  // }
});
```

--------------------------------

### Bun SQLite: Nested Transaction Example

Source: https://bun.sh/docs/runtime/sqlite

Provides an example of nested transactions in Bun SQLite. Inner transactions are treated as savepoints. This snippet sets up tables and demonstrates how an `adopt` transaction calls an `insertCats` transaction.

```typescript
// setup
import { Database } from "bun:sqlite";
const db = Database.open(":memory:");
db.run("CREATE TABLE expenses (id INTEGER PRIMARY KEY AUTOINCREMENT, note TEXT, dollars INTEGER);");
db.run("CREATE TABLE cats (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT UNIQUE, age INTEGER)");
const insertExpense = db.prepare("INSERT INTO expenses (note, dollars) VALUES (?, ?)");
const insert = db.prepare("INSERT INTO cats (name, age) VALUES ($name, $age)");
const insertCats = db.transaction(cats => {
  for (const cat of cats) insert.run(cat);
});

const adopt = db.transaction(cats => {
  insertExpense.run("adoption fees", 20);
  insertCats(cats); // nested transaction
});

adopt([
  { $name: "Joey", $age: 2 },
  { $name: "Sally", $age: 4 },
  { $name: "Junior", $age: 1 },
]);
```

--------------------------------

### Add Express Dependency with Bun

Source: https://bun.sh/docs/guides/deployment/render

Installs the Express library into the project using the Bun package manager. This command ensures the necessary framework for building the web server is available.

```shell
bun add express
```

--------------------------------

### Convert ArrayBuffer to Blob with Bun

Source: https://bun.sh/docs/guides

This guide demonstrates converting an ArrayBuffer to a Blob object using Bun. Blobs are useful for representing raw data, such as files. This conversion is straightforward using the Blob constructor.

```typescript
// Assuming 'arrayBuffer' is your ArrayBuffer instance
const blob = new Blob([arrayBuffer]);
```

--------------------------------

### install.frozenLockfile

Source: https://bun.sh/docs/runtime/bunfig

When set to `true`, `bun install` will not update the `bun.lock` file. If the `package.json` and the existing `bun.lock` are out of sync, this will result in an error. Defaults to `false`.

```APIDOC
## `install.frozenLockfile`

### Description
When true, `bun install` will not update `bun.lock`. Default `false`. If `package.json` and the existing `bun.lock` are not in agreement, this will error.

### Method
Configuration

### Endpoint
N/A (Configuration setting)

### Parameters
#### Path Parameters
None

#### Query Parameters
None

#### Request Body
None

### Request Example
```toml
[install]
frozenLockfile = false
```

### Response
#### Success Response (200)
N/A (Configuration setting)

#### Response Example
N/A
```

--------------------------------

### Bun Configuration: Invalid Option Example (TOML)

Source: https://bun.sh/docs/test/configuration

Demonstrates an invalid configuration option in bunfig.toml. Bun will issue a warning when an unrecognized option is encountered. This example shows an `invalidOption` within the `[test]` section.

```toml
[test]
invalidOption = true  # This will generate a warning
```

--------------------------------

### Install React Testing Library Dependencies with Bun

Source: https://bun.sh/docs/test/dom

Installs React Testing Library and `@testing-library/jest-dom` as development dependencies using Bun. These packages are necessary for testing React components within a DOM environment simulated by happy-dom.

```bash
bun add -d @testing-library/react @testing-library/jest-dom
```

--------------------------------

### Get Absolute Path with Bun.main (TypeScript)

Source: https://bun.sh/docs/guides/util/main

The `Bun.main` property provides the absolute path to the script being executed by `bun run`. This is useful for referencing files or modules relative to the entrypoint.

```typescript
console.log(Bun.main);
```

--------------------------------

### Set Minimum Release Age for Packages with Bun

Source: https://bun.sh/docs/pm/cli/install

Configures Bun to only install package versions that were published at least a specified number of seconds ago. This helps mitigate risks from newly published, potentially malicious packages.

```bash
# Only install package versions published at least 3 days ago
bun add @types/bun --minimum-release-age 259200 # seconds
```

--------------------------------

### Install and Use Figlet Package in Bun Server

Source: https://bun.sh/docs/quickstart

Installs the 'figlet' package for generating ASCII art and its corresponding TypeScript types. It then updates the Bun server to include a new route '/figlet' that uses figlet to convert text into ASCII art, returning it as a response.

```typescript
import figlet from 'figlet';

const server = Bun.serve({
  port: 3000,
  routes: {
    "/": () => new Response('Bun!'),
    "/figlet": () => {
      const body = figlet.textSync('Bun!');
      return new Response(body);
    }
  }
});

console.log(`Listening on ${server.url}`);
```

--------------------------------

### Convert Blob to ArrayBuffer with Bun

Source: https://bun.sh/docs/guides

This guide explains how to convert a Blob object to an ArrayBuffer using Bun. This is often necessary when you need to process the raw binary data of a Blob. It uses the FileReader API.

```typescript
// Assuming 'blob' is your Blob instance
const reader = new FileReader();
reader.onload = () => {
  const arrayBuffer = reader.result;
};
reader.readAsArrayBuffer(blob);
```

--------------------------------

### Convert ArrayBuffer to String with Bun

Source: https://bun.sh/docs/guides

This guide shows how to convert an ArrayBuffer to a string using Bun. It utilizes the TextDecoder API for accurate character encoding. Ensure the correct encoding is specified if it's not UTF-8.

```typescript
// Assuming 'arrayBuffer' is your ArrayBuffer instance
const textDecoder = new TextDecoder();
const string = textDecoder.decode(arrayBuffer);
```

--------------------------------

### Sequential Unit Test Example

Source: https://bun.sh/docs/guides/test/concurrent-test-glob

A TypeScript example demonstrating a sequential unit test file (`math.test.ts`). These tests run one after another, which is suitable for tests that share state or have strict ordering requirements. The `sharedState` variable illustrates this dependency.

```typescript
import { test, expect } from "bun:test";

// These tests run sequentially by default
let sharedState = 0;

test("addition", () => {
  sharedState = 5 + 3;
  expect(sharedState).toBe(8);
});

test("uses previous state", () => {
  // This test depends on the previous test's state
  expect(sharedState).toBe(8);
});
```

--------------------------------

### Convert Buffer to Uint8Array with Bun

Source: https://bun.sh/docs/guides

This guide explains how to convert a Buffer to a Uint8Array view in Bun. This provides direct byte-level access to the buffer's data, which is often required for low-level data manipulation or interoperability.

```typescript
// Assuming 'buffer' is your Buffer instance
const uint8Array = new Uint8Array(buffer.buffer, buffer.byteOffset, buffer.byteLength);
```

--------------------------------

### Hono Project Template Confirmation

Source: https://bun.sh/docs/guides/ecosystem/hono

This output indicates the successful cloning of the Hono starter template using the 'bun' option. It confirms that the project files have been copied to the specified directory.

```text
✔ Which template do you want to use? › bun
cloned honojs/starter#main to /path/to/myapp
✔ Copied project files
```

--------------------------------

### Environment-Based Configuration with YAML Anchors and Aliases

Source: https://bun.sh/docs/runtime/yaml

Shows how to manage different configurations for various environments (development, staging, production) using YAML's anchor (`&`) and alias (`*`) features. This promotes DRY principles by defining common settings once and reusing them. The example also demonstrates environment variable interpolation within YAML values.

```yaml
defaults:
  timeout: 5000
  retries: 3
  cache:
    enabled: true
    ttl: 3600

development:
  <<: *defaults
  api:
    url: http://localhost:4000
    key: dev_key_12345
  logging:
    level: debug
    pretty: true

staging:
  <<: *defaults
  api:
    url: https://staging-api.example.com
    key: ${STAGING_API_KEY}
  logging:
    level: info
    pretty: false

production:
  <<: *defaults
  api:
    url: https://api.example.com
    key: ${PROD_API_KEY}
  cache:
    enabled: true
    ttl: 86400
  logging:
    level: error
    pretty: false
```

```typescript
import configs from "./config.yaml";

const env = process.env.NODE_ENV || "development";
const config = configs[env];

// Environment variables in YAML values can be interpolated
function interpolateEnvVars(obj: any): any {
  if (typeof obj === "string") {
    return obj.replace(/\${(\w+)}/g, (_, key) => process.env[key] || "");
  }
  if (typeof obj === "object") {
    for (const key in obj) {
      obj[key] = interpolateEnvVars(obj[key]);
    }
  }
  return obj;
}

export default interpolateEnvVars(config);
```

--------------------------------

### Run Bun with the Inspect Flag

Source: https://bun.sh/docs/guides/runtime/web-debugger

This shell command demonstrates how to start a Bun application with the `--inspect` flag enabled. This flag initiates a WebSocket server for debugging purposes.

```bash
bun --inspect server.ts
```

--------------------------------

### Convert ArrayBuffer to Array of Numbers with Bun

Source: https://bun.sh/docs/guides

This guide shows how to convert an ArrayBuffer to an array of numbers using Bun. It utilizes typed arrays for efficient data manipulation. This is common when working with binary data.

```typescript
// Assuming 'arrayBuffer' is your ArrayBuffer instance
const uint8Array = new Uint8Array(arrayBuffer);
const numberArray = Array.from(uint8Array);
```

--------------------------------

### Control Workspace Package Installation in .npmrc and bunfig.toml

Source: https://bun.sh/docs/pm/npmrc

Determines how local workspace packages are handled during installation. The .npmrc option 'link-workspace-packages' and the bunfig.toml option 'install.linkWorkspacePackages' control whether these packages are linked or copied.

```ini
link-workspace-packages=true
```

```toml
[install]
linkWorkspacePackages = true
```

--------------------------------

### React App Entry Point

Source: https://bun.sh/docs/bundler/fullstack

This TypeScript file serves as the entry point for the React application. It uses `createRoot` from `react-dom/client` to render the main `App` component into the `root` div in the HTML.

```typescript
import { createRoot } from "react-dom/client";
import { App } from "./App";

const container = document.getElementById("root")!;
const root = createRoot(container);
root.render(<App />);

```

--------------------------------

### Bun CLI: Add Command Structure

Source: https://bun.sh/docs/pm/cli/add

The basic syntax for the 'bun add' command, which is used for installing packages. It accepts a package name and an optional version specifier.

```bash
bun add <package> <@version>
```

--------------------------------

### Glob Pattern '**' Example (TypeScript)

Source: https://bun.sh/docs/runtime/glob

Shows the '**' wildcard in Bun's Glob, which matches any number of characters, including path separators, allowing for recursive directory matching.

```typescript
const glob = new Glob("**/*.ts");
glob.match("index.ts"); // => true
glob.match("src/index.ts"); // => true
glob.match("src/index.js"); // => false
```

--------------------------------

### Ahead of Time Bundling

Source: https://bun.sh/docs/bundler/fullstack

Bundle your full-stack application ahead of time using `Bun.build` or `bun build`. This method is recommended for production deployments.

```APIDOC
## Ahead of Time Bundling (Recommended)

As of Bun v1.2.17, you can use `Bun.build` or `bun build` to bundle your full-stack application ahead of time.

### Command Example

```bash
bun build --target=bun --production --outdir=dist ./src/index.ts
```

When Bun's bundler sees an HTML import from server-side code, it will bundle the referenced JavaScript/TypeScript/TSX/JSX and CSS files into a manifest object that `Bun.serve()` can use to serve the assets.

### Server Code Example

```typescript
import { serve } from "bun";
import index from "./index.html";

serve({
  routes: { "/": index },
});
```
```

--------------------------------

### Run Hono Development Server with Bun

Source: https://bun.sh/docs/guides/ecosystem/hono

Start the development server for your Hono application using the 'bun run dev' command. This command compiles and serves your application, typically accessible at http://localhost:3000.

```sh
bun run dev
```

--------------------------------

### Basic fetch handler

Source: https://bun.sh/docs/runtime/http/routing

A basic example of a fetch handler that routes requests based on the URL pathname.

```APIDOC
## POST /websites/bun_sh

### Description
Handles incoming requests that weren't matched by any route. It receives a `Request` object and returns a `Response` or `Promise<Response>`.

### Method
POST

### Endpoint
/websites/bun_sh

### Parameters
#### Path Parameters
None

#### Query Parameters
None

#### Request Body
None

### Request Example
```json
{
  "example": "request body"
}
```

### Response
#### Success Response (200)
- **Response** (Response) - The response to be sent back to the client.

#### Response Example
```json
{
  "example": "Response object or Promise<Response>"
}
```
```

--------------------------------

### Add Git Dependencies with Bun

Source: https://bun.sh/docs/pm/cli/add

Installs packages directly from Git repositories using various protocols like SSH and HTTPS. Requires appropriate credentials for private repositories.

```bash
bun add git@github.com:moment/moment.git
```

--------------------------------

### Implement onEnd Hook in Bun Build

Source: https://bun.sh/docs/bundler/plugins

Demonstrates how to use the `onEnd` lifecycle hook in Bun's build process. This example logs the number of output files and any build messages upon completion of the build.

```typescript
const result = await Bun.build({
  entrypoints: ["./app.ts"],
  outdir: "./dist",
  plugins: [
    {
      name: "onEnd example",
      setup(build) {
        build.onEnd(result => {
          console.log(`Build completed with ${result.outputs.length} files`);
          for (const log of result.logs) {
            console.log(log);
          }
        });
      },
    },
  ],
});
```

--------------------------------

### Run Discord Bot with Bun

Source: https://bun.sh/docs/guides/ecosystem/discordjs

This command executes the `bot.ts` file using Bun's runtime. Bun will compile and run the TypeScript code, starting your Discord bot. The output shows the bot's login confirmation.

```sh
bun run bot.ts
```

--------------------------------

### Simple vs. Complex Mock Example

Source: https://bun.sh/docs/test/mocks

Contrasts a simple, focused mock with an overly complex one. It emphasizes the best practice of keeping mocks straightforward and focused on the specific behavior being tested.

```typescript
// Good: Simple, focused mock
const mockUserApi = {
  getUser: mock(async id => ({ id, name: "Test User" }))
};

// Avoid: Overly complex mock behavior
const complexMock = mock(input => {
  if (input.type === "A") {
    return processTypeA(input);
  } else if (input.type === "B") {
    return processTypeB(input);
  }
  // ... lots of complex logic
});
```

--------------------------------

### Update package.json Scripts for Bun Execution

Source: https://bun.sh/docs/guides/ecosystem/tanstack-start

Modifies the 'scripts' section in the 'package.json' file to prefix Vite CLI commands with 'bun --bun'. This ensures that Bun is used to execute the development, build, and preview tasks.

```json
{
  "scripts": {
    "dev": "bun --bun vite dev",
    "build": "bun --bun vite build",
    "serve": "bun --bun vite preview"
  }
}
```

--------------------------------

### Bun CLI basic usage

Source: https://bun.sh/docs/runtime

This is the basic syntax for using the Bun CLI to run a file or a script defined in `package.json`.

```bash
bun run <file or script>
```

--------------------------------

### Configure Production Environment Variables

Source: https://bun.sh/docs/bundler/fullstack

An example `.env.production` file showing essential environment variables for a production Bun application. It includes settings for Node environment, port, database connection, and CORS origin.

```ini
NODE_ENV=production
PORT=3000
DATABASE_URL=postgresql://user:pass@localhost:5432/myapp
CORS_ORIGIN=https://myapp.com
```

--------------------------------

### Configure Workspaces in Package.json

Source: https://bun.sh/docs/pm/cli/install

Enable and configure workspaces in your `package.json` to manage monorepos. This allows for managing dependencies across multiple packages within a single project.

```json
{
  "name": "my-app",
  "version": "1.0.0",
  "workspaces": ["packages/*"], // [!code ++]
  "dependencies": {
    "preact": "^10.5.13"
  }
}
```

--------------------------------

### Convert Uint8Array to DataView with Bun

Source: https://bun.sh/docs/guides

This guide demonstrates converting a Uint8Array to a DataView using Bun. A DataView allows for reading and writing numerical data with specific byte orders, which is crucial for parsing structured binary data.

```typescript
// Assuming 'uint8Array' is your Uint8Array instance
const dataView = new DataView(uint8Array.buffer, uint8Array.byteOffset, uint8Array.byteLength);
```

--------------------------------

### Reading Files (Bun.file())

Source: https://bun.sh/docs/runtime/file-io

This section details how to create a BunFile instance using Bun.file(path) to represent a file. It covers accessing file properties like size and type, and reading file contents in various formats (text, JSON, stream, ArrayBuffer, bytes). It also explains how to create file references using file descriptors or URLs and how Bun handles non-existent files.

```APIDOC
## Reading Files (`Bun.file()`)

### Description
Create a `BunFile` instance with the `Bun.file(path)` function. A `BunFile` represents a lazily-loaded file; initializing it does not actually read the file from disk.

### Method
`Bun.file(path: string | number | URL, options?: { type?: string }): BunFile`

### Endpoint
N/A (Client-side API)

### Parameters
#### Path Parameters
- **path** (string | number | URL) - Required - The path to the file, a file descriptor (number), or a file URL.
- **options.type** (string) - Optional - Overrides the default MIME type.

#### Query Parameters
None

#### Request Body
None

### Request Example
```ts
const foo = Bun.file("foo.txt"); // relative to cwd
console.log(foo.size); // number of bytes
console.log(foo.type); // MIME type

// Reading contents
const textContent = await foo.text();
const jsonContent = await foo.json();
const streamContent = await foo.stream();
const arrayBufferContent = await foo.arrayBuffer();
const bytesContent = await foo.bytes();

// Using file descriptors or URLs
Bun.file(1234);
Bun.file(new URL(import.meta.url)); // reference to the current file

// Handling non-existent files
const notreal = Bun.file("notreal.txt");
console.log(notreal.size); // 0
console.log(notreal.type); // "text/plain;charset=utf-8"
const exists = await notreal.exists(); // false

// Overriding MIME type
const customJsonFile = Bun.file("data.json", { type: "application/json" });
console.log(customJsonFile.type); // "application/json;charset=utf-8"

// Accessing stdin, stdout, stderr
Bun.stdin;
Bun.stdout;
Bun.stderr;
```

### Response
#### Success Response (200)
- **BunFile** (object) - An object representing the file with properties like `size`, `type`, and methods like `text()`, `json()`, `stream()`, `arrayBuffer()`, `bytes()`, `exists()`, `delete()`.

#### Response Example
```json
{
  "size": 1024,
  "type": "text/plain;charset=utf-8",
  "exists": true
}
```
```

--------------------------------

### Glob Pattern '[ab]' Example (TypeScript)

Source: https://bun.sh/docs/runtime/glob

Demonstrates the character set pattern `[ab]` in Bun's Glob, matching one of the characters within the brackets or a character range.

```typescript
const glob = new Glob("ba[rz].ts");
glob.match("bar.ts"); // => true
glob.match("baz.ts"); // => true
glob.match("bat.ts"); // => false
```

--------------------------------

### Plugins

Source: https://bun.sh/docs/bundler/fullstack

Bun's bundler plugins are supported when bundling static routes. Configure plugins in the `[serve.static]` section of your `bunfig.toml`.

```APIDOC
## Plugins

Bun's bundler plugins are also supported when bundling static routes.

To configure plugins for `Bun.serve`, add a `plugins` array in the `[serve.static]` section of your `bunfig.toml`.
```

--------------------------------

### Bun Fullstack Server with SQLite API

Source: https://bun.sh/docs/bundler/fullstack

This TypeScript server uses Bun to serve static HTML files and handle API requests for user management. It initializes a SQLite database, defines routes for the frontend and API endpoints (GET, POST for users, GET, DELETE for specific users, and a health check). It also includes development mode features like HMR and console logging.

```typescript
import { serve } from "bun";
import { Database } from "bun:sqlite";
import homepage from "./public/index.html";
import dashboard from "./public/dashboard.html";

// Initialize database
const db = new Database("app.db");
db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);

const server = serve({
  routes: {
    // Frontend routes
    "/": homepage,
    "/dashboard": dashboard,

    // API routes
    "/api/users": {
      async GET() {
        const users = db.query("SELECT * FROM users").all();
        return Response.json(users);
      },

      async POST(req) {
        const { name, email } = await req.json();

        try {
          const result = db.query("INSERT INTO users (name, email) VALUES (?, ?) RETURNING *").get(name, email);

          return Response.json(result, { status: 201 });
        } catch (error) {
          return Response.json({ error: "Email already exists" }, { status: 400 });
        }
      },
    },

    "/api/users/:id": {
      async GET(req) {
        const { id } = req.params;
        const user = db.query("SELECT * FROM users WHERE id = ?").get(id);

        if (!user) {
          return Response.json({ error: "User not found" }, { status: 404 });
        }

        return Response.json(user);
      },

      async DELETE(req) {
        const { id } = req.params;
        const result = db.query("DELETE FROM users WHERE id = ?").run(id);

        if (result.changes === 0) {
          return Response.json({ error: "User not found" }, { status: 404 });
        }

        return new Response(null, { status: 204 });
      },
    },

    // Health check endpoint
    "/api/health": {
      GET() {
        return Response.json({
          status: "ok",
          timestamp: new Date().toISOString(),
        });
      },
    },
  },

  // Enable development mode
  development: {
    hmr: true,
    console: true,
  },

  // Fallback for unmatched routes
  fetch(req) {
    return new Response("Not Found", { status: 404 });
  },
});

console.log(`🚀 Server running on ${server.url}`);

```

--------------------------------

### Execute Tests with CI Configuration

Source: https://bun.sh/docs/test/configuration

Shows how to run Bun tests using a specific configuration profile, such as the `ci` profile defined in `bunfig.toml`, via the command line.

```bash
bun test --config=ci
```

--------------------------------

### Hash Operations

Source: https://bun.sh/docs/runtime/redis

This section covers common hash operations using the Bun Redis client, such as setting and getting multiple fields, getting single fields, and incrementing numeric or float fields.

```APIDOC
## Hash Operations

### Description
Provides methods for interacting with Redis hash data structures.

### Methods

- **HMSET**: Sets multiple fields in a hash.
- **HMGET**: Gets multiple fields from a hash.
- **HGET**: Gets a single field from a hash.
- **HINCRBY**: Increments a numeric field in a hash.
- **HINCRBYFLOAT**: Increments a float field in a hash.

### Usage Examples

```typescript
// Set multiple fields in a hash
await redis.hmset("user:123", ["name", "Alice", "email", "alice@example.com", "active", "true"]);

// Get multiple fields from a hash
const userFields = await redis.hmget("user:123", ["name", "email"]);
console.log(userFields); // ["Alice", "alice@example.com"]

// Get single field from hash
const userName = await redis.hget("user:123", "name");
console.log(userName); // "Alice"

// Increment a numeric field in a hash
await redis.hincrby("user:123", "visits", 1);

// Increment a float field in a hash
await redis.hincrbyfloat("user:123", "score", 1.5);
```
```

--------------------------------

### Configure Bun Installation Strategy

Source: https://bun.sh/docs/pm/npmrc

Control how packages are installed in the `node_modules` directory. Bun supports configurations compatible with npm's `install-strategy` (`hoisted`, `linked`) and pnpm/yarn's `node-linker` (`isolated`, `hoisted`, `pnpm`, `node-modules`).

```INI
# npm's install-strategy:
# flat node_modules structure (default)
install-strategy=hoisted

# symlinked structure
install-strategy=linked
```

```INI
# pnpm/yarn's node-linker:
# symlinked/isolated mode
node-linker=isolated
node-linker=pnpm

# flat/hoisted mode
node-linker=hoisted
node-linker=node-modules
```

--------------------------------

### Building with Feature Flags via Bun CLI (Bash)

Source: https://bun.sh/docs/bundler

Illustrates how to enable feature flags when building with the Bun CLI. The `--feature` flag followed by the feature name is used to activate specific flags. This example enables the 'PREMIUM' feature.

```bash
bun build ./app.ts --outdir ./out --feature PREMIUM
```

--------------------------------

### Update dependencies with Bun

Source: https://bun.sh/docs/guides/install/from-npm-install-to-bun-install

Manage dependency updates using `bun update`. This command allows updating single or all dependencies to the latest semver-compatible versions, or to the absolute latest version with the `--latest` flag. You can also update to a specific version.

```sh
# Update a single dependency
bun update @types/bun

# Update all dependencies
bun update

# Ignore semver, update to the latest version
bun update @types/bun --latest

# Update a dependency to a specific version
bun update @types/bun@1.3.3

# Update all dependencies to the latest versions
bun update --latest
```

--------------------------------

### Get Build Output as BuildArtifact

Source: https://bun.sh/docs/bundler/standalone-html

Shows how to obtain the build output as a `BuildArtifact` when the `outdir` option is omitted from `Bun.build()`. The artifact's content can then be written to a file.

```typescript
const result = await Bun.build({
  entrypoints: ["./index.html"],
  compile: true,
  target: "browser",
});

const html = await result.outputs[0].text();
await Bun.write("output.html", html);
```

--------------------------------

### Dockerize Bun Application for Production

Source: https://bun.sh/docs/bundler/fullstack

A Dockerfile for deploying a Bun application. It uses a multi-stage build to first install dependencies and build the application, then creates a lean production image. It exposes port 3000 and sets the default command to run the server.

```dockerfile
FROM oven/bun:1 as base
WORKDIR /usr/src/app

# Install dependencies
COPY package.json bun.lockb ./
RUN bun install --frozen-lockfile

# Copy source code
COPY . .

# Build application
RUN bun build --target=bun --production --outdir=dist ./server/index.ts

# Production stage
FROM oven/bun:1-slim
WORKDIR /usr/src/app
COPY --from=base /usr/src/app/dist ./
COPY --from=base /usr/src/app/public ./

EXPOSE 3000
CMD ["bun", "index.js"]
```

--------------------------------

### Run Downloaded PR Release Build

Source: https://bun.sh/docs/project/contributing

Executes a release build downloaded from a pull request, aliased as `bun-<pr-number>`. This allows for direct testing of the specific PR's release build.

```sh
bun-1234566 --version
```

--------------------------------

### install.saveTextLockfile

Source: https://bun.sh/docs/runtime/bunfig

Controls whether `bun install` generates a text-based `bun.lock` file or a binary `bun.lockb` file when no lockfile is present. Defaults to `true` (text-based) since Bun v1.2.

```APIDOC
## `install.saveTextLockfile`

### Description
If false, generate a binary `bun.lockb` instead of a text-based `bun.lock` file when running `bun install` and no lockfile is present.

### Method
Configuration

### Endpoint
N/A (Configuration setting)

### Parameters
#### Path Parameters
None

#### Query Parameters
None

#### Request Body
None

### Request Example
```toml
[install]
saveTextLockfile = false
```

### Response
#### Success Response (200)
N/A (Configuration setting)

#### Response Example
N/A
```

--------------------------------

### Concurrent Integration Test Example

Source: https://bun.sh/docs/guides/test/concurrent-test-glob

An example of an integration test file (`concurrent-api.test.ts`) designed to run concurrently. Tests within files matching the `concurrentTestGlob` pattern automatically run in parallel. It shows the use of `test()`, `test.concurrent()`, and `test.serial()` within a concurrent context.

```typescript
import { test, expect } from "bun:test";

// These tests automatically run concurrently due to filename matching the glob pattern.
// Using test() is equivalent to test.concurrent() when the file matches concurrentTestGlob.
// Each test is independent and can run in parallel.

test("fetch user data", async () => {
  const response = await fetch("/api/user/1");
  expect(response.ok).toBe(true);
});

// can also use test.concurrent() for explicitly marking it as concurrent
test.concurrent("fetch posts", async () => {
  const response = await fetch("/api/posts");
  expect(response.ok).toBe(true);
});

// can also use test.serial() for explicitly marking it as sequential
test.serial("fetch comments", async () => {
  const response = await fetch("/api/comments");
  expect(response.ok).toBe(true);
});
```

--------------------------------

### Bun Build: Using Property Access Patterns with --define

Source: https://bun.sh/docs/guides/runtime/build-time-constants

Explains how to use property access patterns (e.g., `process.env.NODE_ENV`, `window.myApp.version`) as keys for the `--define` flag in Bun builds. This allows for more sophisticated replacements, including environment variables and nested properties.

```sh
# ✅ Replace process.env.NODE_ENV with "production"
--define 'process.env.NODE_ENV="production"'

# ✅ Replace process.env.API_KEY with the actual key
--define 'process.env.API_KEY="abc123"'

# ✅ Replace nested properties
--define 'window.myApp.version="1.0.0"'

# ✅ Replace array access
--define 'process.argv[2]="--production"'
```

--------------------------------

### Convert Blob to ReadableStream with Bun

Source: https://bun.sh/docs/guides

This guide demonstrates converting a Blob to a ReadableStream using Bun. Streams are efficient for handling large amounts of data, allowing processing without loading the entire data into memory. This uses the stream API.

```typescript
// Assuming 'blob' is your Blob instance
const stream = blob.stream();
```

--------------------------------

### Download Release Build from Pull Requests

Source: https://bun.sh/docs/project/contributing

Allows downloading and testing release builds directly from GitHub pull requests using the `bun-pr` npm package. This facilitates manual testing of changes before merging.

```sh
bunx bun-pr <pr-number>
bunx bun-pr <branch-name>
bunx bun-pr "https://github.com/oven-sh/bun/pull/1234566"
bunx bun-pr --asan <pr-number> # Linux x64 only
```

--------------------------------

### Keep Bun Test Hooks Simple

Source: https://bun.sh/docs/test/lifecycle

Illustrates the best practice of keeping Bun test hooks simple and focused. Provides examples of a good, concise `beforeEach` hook and an example of what to avoid: complex logic within hooks that can make debugging difficult.

```typescript
// Good: Simple, focused setup
beforeEach(() => {
  clearLocalStorage();
  resetMocks();
});

// Avoid: Complex logic in hooks
beforeEach(async () => {
  // Too much complex logic makes tests hard to debug
  const data = await fetchComplexData();
  await processData(data);
  await setupMultipleServices(data);
});
```

--------------------------------

### Preconnect to Host in TypeScript

Source: https://bun.sh/docs/runtime/networking/fetch

Shows how to use Bun's `fetch.preconnect` API to initiate a connection to a host early. This includes DNS lookup, TCP connection, and TLS handshake, optimizing for future requests to the same host. Requires importing `fetch` from `bun`.

```typescript
import { fetch } from "bun";

fetch.preconnect("https://bun.com");
```

--------------------------------

### Convert Blob to DataView with Bun

Source: https://bun.sh/docs/guides

This guide shows how to convert a Blob to a DataView using Bun. A DataView provides a way to read and write multiple numeric types in different byte orders. This is useful for parsing complex binary structures.

```typescript
// Assuming 'blob' is your Blob instance
const reader = new FileReader();
reader.onload = () => {
  const arrayBuffer = reader.result;
  const dataView = new DataView(arrayBuffer as ArrayBuffer);
};
reader.readAsArrayBuffer(blob);
```

--------------------------------

### Bun Build CLI Usage

Source: https://bun.sh/docs/bundler

The basic command to initiate a build process with Bun. It takes entry points as arguments and accepts various flags for configuration.

```bash
bun build <entry points>
```

--------------------------------

### Preview Changes Without Installing in .npmrc and bunfig.toml

Source: https://bun.sh/docs/pm/npmrc

Enables a dry-run mode that shows which packages would be installed or modified without actually making any changes to the project. The .npmrc option is 'dry-run=true', and the bunfig.toml option is 'install.dryRun = true'.

```ini
dry-run=true
```

```toml
[install]
dryRun = true
```

--------------------------------

### Build SvelteKit Production Bundle with Bun

Source: https://bun.sh/docs/guides/ecosystem/sveltekit

Execute the build command using Bun to create a production-ready bundle for your SvelteKit application. This process optimizes assets and prepares the application for deployment.

```sh
bun --bun run build
```

--------------------------------

### Send GET HTTP Request using Bun Fetch API

Source: https://bun.sh/docs/guides/http/fetch

Demonstrates how to send a simple GET request to a URL using Bun's `fetch` API. It retrieves the response as text. This function requires no external dependencies beyond Bun.

```typescript
const response = await fetch("https://bun.com");
const html = await response.text(); // HTML string
```

--------------------------------

### Specify Non-NPM Dependencies in package.json

Source: https://bun.sh/docs/pm/cli/install

Demonstrates how to declare dependencies from sources other than npm, such as Git repositories (public or private), GitHub shorthand, and tarball URLs. Bun supports various formats for these external dependencies.

```json
{
  "dependencies": {
    "dayjs": "git+https://github.com/iamkun/dayjs.git",
    "lodash": "git+ssh://github.com/lodash/lodash.git#4.17.21",
    "moment": "git@github.com:moment/moment.git",
    "zod": "github:colinhacks/zod",
    "react": "https://registry.npmjs.org/react/-/react-18.2.0.tgz",
    "bun-types": "npm:@types/bun"
  }
}
```

--------------------------------

### Convert ArrayBuffer to Uint8Array with Bun

Source: https://bun.sh/docs/guides

This guide demonstrates converting an ArrayBuffer to a Uint8Array view using Bun. This allows for byte-level access and manipulation of the ArrayBuffer's contents. It's a common operation in binary data processing.

```typescript
// Assuming 'arrayBuffer' is your ArrayBuffer instance
const uint8Array = new Uint8Array(arrayBuffer);
```

--------------------------------

### Convert Uint8Array to Blob with Bun

Source: https://bun.sh/docs/guides

This guide explains how to convert a Uint8Array to a Blob object using Bun. This is useful for treating raw byte data as a file-like object, enabling operations like uploading or displaying binary content.

```typescript
// Assuming 'uint8Array' is your Uint8Array instance
const blob = new Blob([uint8Array]);
```

--------------------------------

### Bun: Scoped Setup/Teardown within Describe Blocks

Source: https://bun.sh/docs/test/lifecycle

Illustrates how to use `beforeAll` and `afterAll` hooks to perform setup and teardown operations scoped to a specific `describe` block in Bun tests. `beforeAll` runs once before all tests within the block, and `afterAll` runs once after all tests in the block.

```typescript
import { describe, beforeAll, afterAll, test } from "bun:test";

describe("test group", () => {
  beforeAll(() => {
    // setup for this describe block
    console.log("Setting up test group");
  });

  afterAll(() => {
    // teardown for this describe block
    console.log("Tearing down test group");
  });

  test("test 1", () => {
    // test implementation
  });

  test("test 2", () => {
    // test implementation
  });
});
```

--------------------------------

### Build a Static File Server with Bun.serve()

Source: https://bun.sh/docs/guides/http/stream-file

This example integrates file streaming into a complete HTTP server using Bun.serve(). The fetch handler dynamically serves files based on the request URL, acting as a basic static file server.

```typescript
// static file server
Bun.serve({
  async fetch(req) {
    const path = new URL(req.url).pathname;
    const file = Bun.file(path);
    return new Response(file);
  },
});
```

--------------------------------

### Example package.json with node-sass dependency

Source: https://bun.sh/docs/pm/lifecycle

This JSON snippet shows a typical package.json file that includes 'node-sass' as a dependency. The 'postinstall' script in 'node-sass' is often used to build native Node.js add-ons.

```json
{
  "name": "my-app",
  "version": "1.0.0",
  "dependencies": {
    "node-sass": "^6.0.1"
  }
}
```

--------------------------------

### Convert Uint8Array to ReadableStream with Bun

Source: https://bun.sh/docs/guides

This guide explains how to convert a Uint8Array to a ReadableStream using Bun. This is beneficial for processing large amounts of binary data efficiently, enabling streaming operations without loading the entire array into memory.

```typescript
// Assuming 'uint8Array' is your Uint8Array instance
const stream = new ReadableStream({ start(controller) {
  controller.enqueue(uint8Array);
  controller.close();
}});
```

--------------------------------

### Add Optional Dependencies with Bun

Source: https://bun.sh/docs/pm/cli/add

Installs packages as optional dependencies, which are listed under 'optionalDependencies' in package.json. These are not critical for the application to run.

```bash
bun add --optional lodash
```

--------------------------------

### Configure Global Binary Directory (TOML)

Source: https://bun.sh/docs/runtime/bunfig

Sets the directory for globally installed binaries and CLIs. This setting can also be controlled using the `BUN_INSTALL_BIN` environment variable.

```toml
[install]
# where globally-installed package bins are linked
globalBinDir = "~/.bun/bin"
```

--------------------------------

### Create Package Tarball with Bun

Source: https://bun.sh/docs/guides/install/from-npm-install-to-bun-install

Generate a package tarball using `bun pm pack`. This command creates a tarball of the current package in the directory, providing details like total files, shasum, integrity, and sizes.

```sh
# Create a tarball
bun pm pack
```

--------------------------------

### Configure Enterprise Security Scanner with Environment Variables

Source: https://bun.sh/docs/pm/security-scanner-api

This example shows how to configure an enterprise security scanner using environment variables. The `SECURITY_API_KEY` is set, which the scanner can then use for authentication. This is typically done in shell configuration files like ~/.bashrc.

```bash
# This might go in ~/.bashrc, for example
export SECURITY_API_KEY="your-api-key"

# The scanner will now use these credentials automatically
bun install
```

--------------------------------

### Manage Connection Pool Lifecycle in Bun SQL

Source: https://bun.sh/docs/runtime/sql

Provides examples of how Bun's SQL client manages its connection pool, including when connections are established, reused, and how to explicitly close the pool.

```typescript
const sql = Bun.SQL(); // no connection are created

await sql`...`; // pool is started until max is reached (if possible), first available connection is used
await sql`...`; // previous connection is reused

// two connections are used now at the same time
await Promise.all([
  sql`INSERT INTO users ${sql({ name: "Alice" })}`,
  sql`UPDATE users SET name = ${user.name} WHERE id = ${user.id}`,
]);

await sql.close(); // await all queries to finish and close all connections from the pool
await sql.close({ timeout: 5 }); // wait 5 seconds and close all connections from the pool
await sql.close({ timeout: 0 }); // close all connections from the pool immediately
```

--------------------------------

### Get BunFile and ReadableStream from Path (TypeScript)

Source: https://bun.sh/docs/guides/read-file/stream

This snippet shows how to use Bun.file() with a file path to obtain a BunFile instance, and then call .stream() on it to get a ReadableStream for incremental file reading. No external dependencies are required.

```typescript
const path = "/path/to/package.json";
const file = Bun.file(path);

const stream = file.stream();
```

--------------------------------

### Skip Lifecycle Scripts in .npmrc

Source: https://bun.sh/docs/pm/npmrc

Prevents the execution of package lifecycle scripts (e.g., postinstall) during the installation process. This is configured using 'ignore-scripts=true' in .npmrc and is equivalent to using the '--ignore-scripts' flag with the 'bun install' command.

--------------------------------

### Connect and Query MySQL with Bun.SQL

Source: https://bun.sh/docs/runtime/sql

Demonstrates how to establish a MySQL connection using Bun.SQL, execute parameterized queries, handle transactions, and perform bulk inserts. It supports standard mysql:// and mysql2:// protocols, as well as an options object for configuration. Prepared statements are automatically used for parameterized queries.

```typescript
import { SQL } from "bun";

// MySQL connection
const mysql = new SQL("mysql://user:password@localhost:3306/database");
const mysql2 = new SQL("mysql2://user:password@localhost:3306/database"); // mysql2 protocol also works

// Using options object
const mysql3 = new SQL({
  adapter: "mysql",
  hostname: "localhost",
  port: 3306,
  database: "myapp",
  username: "dbuser",
  password: "secretpass",
});

// Works with parameters - automatically uses prepared statements
const users = await mysql`SELECT * FROM users WHERE id = ${userId}`;

// Transactions work the same as PostgreSQL
await mysql.begin(async tx => {
  await tx`INSERT INTO users (name) VALUES (${"Alice"})`;
  await tx`UPDATE accounts SET balance = balance - 100 WHERE user_id = ${userId}`;
});

// Bulk inserts
const newUsers = [
  { name: "Alice", email: "alice@example.com" },
  { name: "Bob", email: "bob@example.com" },
];
await mysql`INSERT INTO users ${mysql(newUsers)}`;
```

--------------------------------

### Get Tar Archive Bytes with Bun.Archive (TypeScript)

Source: https://bun.sh/docs/runtime/archive

Demonstrates how to obtain the raw bytes or a Blob representation of a tar archive created with Bun.Archive. It also shows how to get gzipped bytes if the archive was created with gzip compression.

```typescript
const archive = new Bun.Archive({ "hello.txt": "Hello, World!" });

// As Uint8Array
const bytes = await archive.bytes();

// As Blob
const blob = await archive.blob();

// With gzip compression (set at construction)
const gzipped = new Bun.Archive({ "hello.txt": "Hello, World!" }, { compress: "gzip" });
const gzippedBytes = await gzipped.bytes();
const gzippedBlob = await gzipped.blob();
```

--------------------------------

### Build Bun with Local JSC

Source: https://bun.sh/docs/project/contributing

This command initiates the build process for Bun using a local JavaScriptCore (JSC) build. It automatically configures and builds JSC, then proceeds to build Bun. Subsequent runs will incrementally rebuild JSC if WebKit sources have changed. The output is directed to `./build/debug-local`.

```bash
bun run build:local
```

--------------------------------

### Build Publish-Subscribe WebSocket Server

Source: https://bun.sh/docs/guides

Implements a WebSocket server that supports a publish-subscribe pattern. Clients can subscribe to topics and receive messages published to those topics.

```javascript
const channels = {};

Bun.serve({
  fetch(req) {
    if (req.url.endsWith("/ws")) {
      const websocket = new WebSocket(req);

      websocket.subscribe("news", (message) => {
        websocket.send(message);
      });

      websocket.onmessage = (message) => {
        // Publish message to all subscribers of 'news' channel
        websocket.publish("news", message);
      };

      return websocket;
    }
    return new Response("Hello World!");
  },
});

console.log("Pub/Sub WebSocket server running on port 3000");
```

--------------------------------

### Run JavaScript/TypeScript Files with Bun

Source: https://bun.sh/docs/runtime

Execute JavaScript or TypeScript files directly using the 'bun run' command. This is a fundamental way to start applications or scripts with Bun.

```bash
bun run ./index.js
bun run ./index.tsx
```

--------------------------------

### HTML Routes

Source: https://bun.sh/docs/bundler/fullstack

This section explains how to use HTML files as routes in Bun's dev server. It covers importing HTML files and configuring them in `Bun.serve()`.

```APIDOC
## HTML Imports as Routes

### Description
Import HTML files directly into your JavaScript/TypeScript files to define frontend routes. Bun's dev server will automatically bundle and serve these HTML files along with their associated assets.

### Method
N/A (Configuration within `Bun.serve()`)

### Endpoint
Configured via the `routes` option in `Bun.serve()`.

### Parameters
#### Request Body
- **routes** (object) - An object where keys are paths and values are imported HTML files.
  - **"/"** (imported HTML file) - Maps the root path to an HTML file.
  - **"/dashboard"** (imported HTML file) - Maps the `/dashboard` path to an HTML file.

### Request Example
```typescript
import { serve } from "bun";
import dashboard from "./dashboard.html";
import homepage from "./index.html";

serve({
  routes: {
    "/": homepage,
    "/dashboard": dashboard,
  },
  // ... other server options
});
```

### Response
#### Success Response (200)
Serves the corresponding HTML file for the requested route, with frontend assets (JS, CSS) bundled and optimized.

#### Response Example
When requesting `/dashboard`, Bun serves the `dashboard.html` file after processing its linked assets.
```

--------------------------------

### Execute Command with Bun.spawnSync

Source: https://bun.sh/docs/runtime/child-process

Demonstrates the synchronous execution of a command using Bun.spawnSync(). It captures the standard output as a Buffer and converts it to a string. Bun.spawnSync() is suitable for command-line tools due to its blocking nature.

```typescript
const proc = Bun.spawnSync(["echo", "hello"]);

console.log(proc.stdout.toString());
// => "hello\n"
```

--------------------------------

### Example Output from Running Bun Application

Source: https://bun.sh/docs/guides/ecosystem/mongoose

This is the expected output when the provided TypeScript code is executed using the `bun run index.ts` command. It demonstrates the result of calling the `speak()` method on the created 'Animal' object.

```txt
Moo!
```

--------------------------------

### Uninstall Bun using Package Managers

Source: https://bun.sh/docs/installation

Commands to uninstall Bun when installed via npm, Homebrew, or Scoop.

```bash
npm uninstall -g bun
```

```bash
brew uninstall bun
```

```bash
scoop uninstall bun
```

--------------------------------

### PostgreSQL Connection

Source: https://bun.sh/docs/runtime/sql

Shows how to establish a connection to a PostgreSQL database using the `SQL` class or by relying on environment variables.

```APIDOC
## PostgreSQL Connection

### Description
This documentation covers connecting to PostgreSQL databases using Bun. It can be the default adapter or explicitly configured via a connection string.

### Method
N/A (This is a code example demonstrating library usage, not a specific HTTP endpoint)

### Endpoint
N/A

### Parameters
N/A

### Request Example
```typescript
import { sql, SQL } from "bun";

// Uses PostgreSQL if DATABASE_URL is not set or is a PostgreSQL URL
await sql`SELECT ...`;

const pg = new SQL("postgres://user:pass@localhost:5432/mydb");
await pg`SELECT ...`;
```

### Response
#### Success Response (200)
Successful query execution returns results based on the database schema.

#### Response Example
```json
// Example response structure for a SELECT query
[
  { "column1": "value1", "column2": "value2" }
]
```
```

--------------------------------

### Convert Blob to Uint8Array with Bun

Source: https://bun.sh/docs/guides

This guide shows how to convert a Blob to a Uint8Array using Bun. This provides byte-level access to the Blob's data, which is essential for many binary data processing tasks. It involves reading the Blob as an ArrayBuffer first.

```typescript
// Assuming 'blob' is your Blob instance
const reader = new FileReader();
reader.onload = () => {
  const arrayBuffer = reader.result;
  const uint8Array = new Uint8Array(arrayBuffer as ArrayBuffer);
};
reader.readAsArrayBuffer(blob);
```

--------------------------------

### Run Interactive Addition Calculator in Bun

Source: https://bun.sh/docs/runtime/console

Example of running an interactive addition calculator using Bun's console to read from stdin. The program prompts the user for numbers and continuously updates the sum.

```bash
bun adder.ts
Let's add some numbers!
Count: 0
> 5
Count: 5
> 5
Count: 10
> 5
Count: 15
```

--------------------------------

### Bun.build API

Source: https://bun.sh/docs/bundler

The `Bun.build` function allows you to compile your project's entrypoints into bundles. You can specify the entrypoints, the output directory, and the root directory for the build process.

```APIDOC
## POST /build

### Description
Compiles project entrypoints into bundles.

### Method
POST

### Endpoint
/build

### Parameters
#### Request Body
- **entrypoints** (array[string]) - Required - An array of file paths to use as entrypoints.
- **outdir** (string) - Required - The directory to write the output bundles to.
- **root** (string) - Optional - The root directory of the project. If unspecified, it is computed to be the first common ancestor of all entrypoint files.

### Request Example
```json
{
  "entrypoints": ["./pages/a.tsx", "./pages/b.tsx"],
  "outdir": "./out",
  "root": "."
}
```

### Response
#### Success Response (200)
- **success** (boolean) - Indicates if the build was successful.
- **outputs** (array[string]) - A list of the generated output file paths.

#### Response Example
```json
{
  "success": true,
  "outputs": ["./out/a.js", "./out/b.js"]
}
```
```

--------------------------------

### Lockfile & Package.json Options

Source: https://bun.sh/docs/pm/cli/outdated

Options related to managing lockfiles and updating the package.json file during installation.

```APIDOC
## Lockfile & Package.json Options

### Description
These options control how `bun install` interacts with lockfiles (like `yarn.lock`) and updates your `package.json`.

### Method
`bun install` (command-line options)

### Parameters
#### Query Parameters
- **-y, --yarn** (boolean) - Write a `yarn.lock` file (yarn v1)
- **--no-save** (boolean) - Don't update `package.json` or save a lockfile
- **--save** (boolean) - Save to `package.json` (true by default)
- **--frozen-lockfile** (boolean) - Disallow changes to lockfile
- **--save-text-lockfile** (boolean) - Save a text-based lockfile
- **--lockfile-only** (boolean) - Generate a lockfile without installing dependencies
- **--trust** (boolean) - Add to `trustedDependencies` in the project's `package.json` and install the package(s)

### Request Example
```bash
bun install --yarn --no-save
```

### Response
#### Success Response (200)
* **Installation Status** (string) - Indicates whether the installation and lockfile operations were successful.

#### Response Example
```json
{
  "status": "success",
  "message": "Dependencies installed and lockfile updated."
}
```
```

--------------------------------

### Install Drizzle ORM and Drizzle Kit with Bun

Source: https://bun.sh/docs/guides/ecosystem/drizzle

Installs Drizzle ORM and Drizzle Kit as project dependencies using the Bun package manager. Drizzle ORM is for database interactions, and Drizzle Kit is a CLI tool for migrations and schema management.

```sh
bun init -y
bun add drizzle-orm
bun add -D drizzle-kit
```

--------------------------------

### Execution Behavior Options

Source: https://bun.sh/docs/pm/cli/outdated

Options that modify the installation process, such as dry runs, forcing updates, and script execution.

```APIDOC
## Execution Behavior Options

### Description
These options control various aspects of the installation process, including whether to actually install dependencies, how to handle updates, and the execution of package scripts.

### Method
`bun install` (command-line options)

### Parameters
#### Query Parameters
- **--dry-run** (boolean) - Don't install anything
- **-f, --force** (boolean) - Always request the latest versions from the registry & reinstall all dependencies
- **--no-verify** (boolean) - Skip verifying integrity of newly downloaded packages
- **--ignore-scripts** (boolean) - Skip lifecycle scripts in the project's `package.json` (dependency scripts are never run)
- **--backend** (string) - Platform-specific optimizations for installing dependencies. Possible values: `clonefile` (default), `hardlink`, `symlink`, `copyfile`
- **--concurrent-scripts** (number) - Maximum number of concurrent jobs for lifecycle scripts (default 5)

### Request Example
```bash
bun install --force --ignore-scripts --backend hardlink
```

### Response
#### Success Response (200)
* **Execution Details** (object) - Information about how the installation was performed.

#### Response Example
```json
{
  "dryRun": false,
  "force": true,
  "ignoreScripts": true,
  "backend": "hardlink"
}
```
```

--------------------------------

### Package.json Optional Peer Dependency Configuration

Source: https://bun.sh/docs/guides/install/add-peer

This JSON configuration shows how to mark a peer dependency as optional within `package.json`. By setting `"optional": true` under `peerDependenciesMeta` for a specific package, `bun install` will not require it to be installed by the consuming project.

```json
{
  "peerDependencies": {
    "@types/bun": "^1.3.3"
  },
  "peerDependenciesMeta": {
    "@types/bun": {
      "optional": true 
    }
  }
}
```

--------------------------------

### Production Build with Minification (CLI)

Source: https://bun.sh/docs/bundler/html-static

Create optimized production bundles using `bun build` with the `--minify` and `--outdir` options. This command minifies the output and places it in the specified directory.

```bash
bun build ./index.html --minify --outdir=dist
```

--------------------------------

### Filter workspace scripts with glob patterns

Source: https://bun.sh/docs/guides/install/from-npm-install-to-bun-install

Execute commands concurrently across multiple workspace packages using the `--filter` flag with glob patterns. This streamlines running scripts in monorepos by matching package names, respecting dependency order.

```sh
bun --filter 'lib-*' my-script
# instead of:
# npm run --workspace lib-foo --workspace lib-bar my-script
```

--------------------------------

### Multiple Named Catalogs Definition Example

Source: https://bun.sh/docs/pm/catalogs

This JSON snippet shows the definition of multiple, distinct catalogs ('testing' and 'ui') in a `package.json` file. Each catalog is a named object containing its own set of dependencies and versions.

```json
{
  "catalogs": {
    "testing": {
      "jest": "30.0.0"
    },
    "ui": {
      "tailwind": "4.0.0"
    }
  }
}
```

--------------------------------

### Add Packages with Bun

Source: https://bun.sh/docs/pm/cli/add

Installs packages into your project using Bun's package manager. You can specify a package name, version, version range, or tag.

```bash
bun add preact
bun add zod@3.20.0
bun add zod@^3.0.0
bun add zod@latest
```

--------------------------------

### Format and Log Static File Sizes (JavaScript)

Source: https://bun.sh/docs/guides/ecosystem/tanstack-start

This snippet formats file sizes (both original and gzipped) into human-readable strings and logs them to the console. It pads the path and size strings for consistent alignment. It's used for displaying served files.

```javascript
const { size, gzip } = formatFileSize(file.size)
const paddedPath = file.route.padEnd(maxPathLength)
const sizeStr = `${size.padStart(7)} kB`
const gzipStr = `${gzip.padStart(7)} kB`
console.log(`${paddedPath} │ ${sizeStr} │  ${gzipStr}`)
```

--------------------------------

### Load and Serve Static Assets with Bun.js

Source: https://bun.sh/docs/guides/ecosystem/tanstack-start

This snippet loads static assets from a client directory. It preloads files smaller than MAX_PRELOAD_BYTES into memory, compressing them with gzip if appropriate and generating ETags if enabled. Larger files or those not matching include patterns are served on-demand. Error handling is included for file access issues.

```typescript
log.info(`Loading static assets from ${clientDirectory}...`)
          if (VERBOSE) {
            console.log(
              `Max preload size: ${(MAX_PRELOAD_BYTES / 1024 / 1024).toFixed(2)} MB`,
            )
            if (INCLUDE_PATTERNS.length > 0) {
              console.log(
                `Include patterns: ${process.env.ASSET_PRELOAD_INCLUDE_PATTERNS ?? ''}`,
              )
            }
            if (EXCLUDE_PATTERNS.length > 0) {
              console.log(
                `Exclude patterns: ${process.env.ASSET_PRELOAD_EXCLUDE_PATTERNS ?? ''}`,
              )
            }
          }

          let totalPreloadedBytes = 0

          try {
            const glob = createCompositeGlobPattern()
            for await (const relativePath of glob.scan({ cwd: clientDirectory })) {
              const filepath = path.join(clientDirectory, relativePath)
              const route = `/${relativePath.split(path.sep).join(path.posix.sep)}`

              try {
                // Get file metadata
                const file = Bun.file(filepath)

                // Skip if file doesn't exist or is empty
                if (!(await file.exists()) || file.size === 0) {
                  continue
                }

                const metadata: AssetMetadata = {
                  route,
                  size: file.size,
                  type: file.type || 'application/octet-stream',
                }

                // Determine if file should be preloaded
                const matchesPattern = isFileEligibleForPreloading(relativePath)
                const withinSizeLimit = file.size <= MAX_PRELOAD_BYTES

                if (matchesPattern && withinSizeLimit) {
                  // Preload small files into memory with ETag and Gzip support
                  const bytes = new Uint8Array(await file.arrayBuffer())
                  const gz = compressDataIfAppropriate(bytes, metadata.type)
                  const etag = ENABLE_ETAG ? computeEtag(bytes) : undefined
                  const asset: InMemoryAsset = {
                    raw: bytes,
                    gz,
                    etag,
                    type: metadata.type,
                    immutable: true,
                    size: bytes.byteLength,
                  }
                  routes[route] = createResponseHandler(asset)

                  loaded.push({ ...metadata, size: bytes.byteLength })
                  totalPreloadedBytes += bytes.byteLength
                } else {
                  // Serve large or filtered files on-demand
                  routes[route] = () => {
                    const fileOnDemand = Bun.file(filepath)
                    return new Response(fileOnDemand, {
                      headers: {
                        'Content-Type': metadata.type,
                        'Cache-Control': 'public, max-age=3600',
                      },
                    })
                  }

                  skipped.push(metadata)
                }
              } catch (error: unknown) {
                if (error instanceof Error && error.name !== 'EISDIR') {
                  log.error(`Failed to load ${filepath}: ${error.message}`)
                }
              }
            }

            // Show detailed file overview only when verbose mode is enabled
            if (VERBOSE && (loaded.length > 0 || skipped.length > 0)) {
              const allFiles = [...loaded, ...skipped].sort((a, b) =>
                a.route.localeCompare(b.route),
              )

              // Calculate max path length for alignment
              const maxPathLength = Math.min(
                Math.max(...allFiles.map((f) => f.route.length)),
                60,
              )

              // Format file size with KB and actual gzip size
              const formatFileSize = (bytes: number, gzBytes?: number) => {
                const kb = bytes / 1024
                const sizeStr = kb < 100 ? kb.toFixed(2) : kb.toFixed(1)

                if (gzBytes !== undefined) {
                  const gzKb = gzBytes / 1024
                  const gzStr = gzKb < 100 ? gzKb.toFixed(2) : gzKb.toFixed(1)
                  return {
                    size: sizeStr,
                    gzip: gzStr,
                  }
                }

                // Rough gzip estimation (typically 30-70% compression) if no actual gzip data
                const gzipKb = kb * 0.35
                return {
                  size: sizeStr,
                  gzip: gzipKb < 100 ? gzipKb.toFixed(2) : gzipKb.toFixed(1),
                }
              }

              if (loaded.length > 0) {
                console.log('\n📁 Preloaded into memory:')
                console.log(
                  'Path                                          │    Size │ Gzip Size',
                )
                loaded
                  .sort((a, b) => a.route.localeCompare(b.route))
                  .forEach((file) => {

```

--------------------------------

### Define a Custom Bun Plugin (TypeScript)

Source: https://bun.sh/docs/bundler/plugins

Demonstrates how to define a custom Bun plugin using the `BunPlugin` type. This involves providing a name and a setup function that receives the build object.

```typescript
import type { BunPlugin } from "bun";

const myPlugin: BunPlugin = {
  name: "Custom loader",
  setup(build) {
    // implementation
  },
};
```

--------------------------------

### Build and Run Production Server with Bun

Source: https://bun.sh/docs/bundler/fullstack

Provides bash commands to build a production-ready application using Bun and then run the compiled server. It utilizes the `--production` flag for optimization and sets the `NODE_ENV` environment variable.

```bash
# Build for production
bun build --target=bun --production --outdir=dist ./server/index.ts

# Run production server
NODE_ENV=production bun dist/index.js
```

--------------------------------

### Handle Promise-based Fetch Responses in Bun

Source: https://bun.sh/docs/runtime/http/routing

Shows how to handle promise-based responses within a Bun fetch handler. This example forwards the incoming request to an external URL ('https://example.com') and returns the response from that server. It leverages the global `fetch` API.

```typescript
Bun.serve({
  fetch(req) {
    // Forward the request to another server.
    return fetch("https://example.com");
  },
});
```

--------------------------------

### Deploy application using Vercel CLI with Bun

Source: https://bun.sh/docs/guides/deployment/vercel

Deploy your application using the Vercel CLI. You can use `bunx` for a global install-free experience or install the Vercel CLI globally. This enables deployment of your Bun application.

```bash
# Using bunx (no global install)
bunx vercel login
bunx vercel deploy
```

```bash
# Install Vercel CLI globally
bun i -g vercel
vercel login
vercel deploy
```

--------------------------------

### Experimental App Building Options

Source: https://bun.sh/docs/bundler

Utilize experimental features for building web applications with Bun, including React Server Components and build debugging options.

```APIDOC
## Experimental App Building

### Description
These experimental options enable advanced features for building web applications using Bun Bake, including support for server components and debugging tools.

### Method
N/A (These are command-line flags for the `bun build` command)

### Endpoint
N/A

### Parameters
#### Query Parameters
- **--app** (boolean) - Optional - (EXPERIMENTAL) Build a web app for production using Bun Bake.
- **--server-components** (boolean) - Optional - (EXPERIMENTAL) Enable React Server Components.
- **--debug-dump-server-files** (boolean) - Optional - When `--app` is set, dump all server files to disk even for static builds.
- **--debug-no-minify** (boolean) - Optional - When `--app` is set, disable all minification.

### Request Example
```bash
bun build --app --server-components --debug-dump-server-files --outfile=app.js src/index.ts
```

### Response
#### Success Response (N/A)
N/A

#### Response Example
N/A
```

--------------------------------

### Configure Advanced Bun.js Development Features

Source: https://bun.sh/docs/bundler/fullstack

This example demonstrates advanced development configuration in Bun.js by passing an object to the `development` option in `Bun.serve()`. It specifically enables Hot Module Reloading (`hmr: true`) and console log streaming from the browser to the terminal (`console: true`).

```typescript
import homepage from "./index.html";

Bun.serve({
// development can also be an object.
development: {
// Enable Hot Module Reloading
hmr: true,

// Echo console logs from the browser to the terminal
console: true,
},

routes: {
"/": homepage,
},
});
```

--------------------------------

### Control Dependency Types with Omit and Include

Source: https://bun.sh/docs/pm/npmrc

Manage which dependency types are installed during the Bun installation process. Use `omit` to exclude specific types (e.g., `dev`, `optional`) or `include` to specify only the desired types. `include` overrides `omit`.

```INI
# omit dev dependencies
omit=dev

# omit multiple types
omit[]=dev
omit[]=optional

# include specific types (overrides omit)
include=dev
```

--------------------------------

### Create Dockerfile for Bun.js Application

Source: https://bun.sh/docs/guides/deployment/digital-ocean

This Dockerfile defines the steps to build a container image for a Bun.js application. It uses the official Bun image, copies project files, installs dependencies, and sets the command to run the application.

```docker
# Use the official Bun image to run the application
FROM oven/bun:debian

# Set the work directory to `/app`
WORKDIR /app

# Copy the package.json and bun.lock into the container
COPY package.json bun.lock ./

# Install the dependencies
RUN bun install --production --frozen-lockfile

# Copy the rest of the application into the container
COPY . .

# Expose the port (DigitalOcean will set PORT env var)
EXPOSE 8080

# Run the application
CMD ["bun", "index.ts"]
```

--------------------------------

### Delete a file using Bun.file().delete()

Source: https://bun.sh/docs/runtime/file-io

Provides an example of how to delete a file using the `.delete()` method on a BunFile instance. This is a straightforward way to remove files from the file system.

```typescript
await Bun.file("logs.json").delete();
```

--------------------------------

### Create Directories Recursively in Bun

Source: https://bun.sh/docs/runtime/file-io

Shows how to create directories, including any necessary parent directories, using the `mkdir` function from `node:fs/promises`. The `recursive: true` option ensures that the entire path is created if it doesn't exist.

```typescript
import { mkdir } from "node:fs/promises";

await mkdir("path/to/dir", { recursive: true });
```

--------------------------------

### Send HTTP GET Request with HTTPS URL using Bun Fetch

Source: https://bun.sh/docs/runtime/networking/fetch

Shows how to perform an HTTP GET request to an HTTPS URL using Bun's fetch API. This is functionally similar to fetching HTTP URLs but ensures secure communication.

```typescript
const response = await fetch("https://example.com");
```

--------------------------------

### Integrate shadcn/ui with Bun Create

Source: https://bun.sh/docs/runtime/templating/create

Sets up shadcn/ui components for projects created with 'bun create'. It automatically adds TailwindCSS dependencies, configures bunfig.toml, sets up tsconfig.json for path aliases, initializes components.json, and creates necessary style and build files.

```bash
# Assuming bun detected imports to @/components/ui/accordion and @/components/ui/button
bunx shadcn@canary add accordion button # and any other components
```

--------------------------------

### Enable Runtime Config Loading with Bun Build

Source: https://bun.sh/docs/bundler/executables

Shows how to enable runtime loading of `tsconfig.json` and `package.json` when compiling with `bun build`. These flags allow standalone executables to read these configuration files from their runtime directory. The examples cover enabling one or both options.

```bash
# Enable runtime loading of tsconfig.json
bun build --compile --compile-autoload-tsconfig ./app.ts --outfile myapp

# Enable runtime loading of package.json
bun build --compile --compile-autoload-package-json ./app.ts --outfile myapp

# Enable both
bun build --compile --compile-autoload-tsconfig --compile-autoload-package-json ./app.ts --outfile myapp
```

--------------------------------

### Bun.build metafile option

Source: https://bun.sh/docs/bundler

Demonstrates the different ways to configure the `metafile` option in `Bun.build` to include build metadata in the output.

```APIDOC
## POST /build

### Description
Configures the `Bun.build` function to include detailed build metadata in the output. This metadata, known as a metafile, can be a boolean to include it in the result object, a string to specify a JSON file path, or an object to define separate paths for JSON and markdown outputs.

### Method
POST

### Endpoint
`Bun.build()`

### Parameters
#### Request Body
- **entrypoints** (string[]) - Required - An array of entry points for the build.
- **outdir** (string) - Required - The directory to output the build artifacts.
- **metafile** (boolean | string | { json: string, markdown: string }) - Optional - Specifies how to include build metadata:
  - `true`: Include metafile in the result object.
  - `./path/to/meta.json`: Write JSON metafile to the specified path.
  - `{ json: "./path/to/meta.json", markdown: "./path/to/meta.md" }`: Specify separate paths for JSON and markdown output.

### Request Example
```json
// Example 1: Boolean metafile
await Bun.build({
  entrypoints: ["./src/index.ts"],
  outdir: "./dist",
  metafile: true,
});

// Example 2: String metafile path
await Bun.build({
  entrypoints: ["./src/index.ts"],
  outdir: "./dist",
  metafile: "./dist/meta.json",
});

// Example 3: Object metafile paths
await Bun.build({
  entrypoints: ["./src/index.ts"],
  outdir: "./dist",
  metafile: {
    json: "./dist/meta.json",
    markdown: "./dist/meta.md",
  },
});
```

### Response
#### Success Response (200)
- **result** (object) - The build result object, which may contain the metafile if `metafile: true` was used.
- **metafile** (object) - The generated metafile content (if saved to a file or returned directly).

#### Response Example
```json
{
  "metafile": {
    "inputs": {
      "./src/index.ts": {
        "bytes": 123,
        "imports": [
          { "path": "./utils.ts", "kind": "import" }
        ],
        "format": "esm"
      }
    },
    "outputs": {
      "./dist/index.js": {
        "bytes": 456,
        "inputs": {
          "./src/index.ts": { "bytesInOutput": 100 },
          "./utils.ts": { "bytesInOutput": 23 }
        },
        "imports": [],
        "exports": ["default"],
        "entryPoint": "./src/index.ts"
      }
    }
  }
}
```

### Error Handling
- **400 Bad Request**: Invalid configuration for `metafile` option or other build parameters.
- **500 Internal Server Error**: An error occurred during the build process.
```

--------------------------------

### Add Development Dependencies with Bun

Source: https://bun.sh/docs/pm/cli/add

Installs packages as development dependencies, which are listed under 'devDependencies' in package.json. Aliases include --development, -d, and -D.

```bash
bun add --dev @types/react
bun add -d @types/react
```

--------------------------------

### Package.json Dependency Entry for Tarball

Source: https://bun.sh/docs/pm/cli/add

Illustrates how a package installed from a tarball URL is represented in the package.json file. The 'dependencies' section will directly list the tarball URL as the version specifier for the package.

```json
{
  "dependencies": {
    "zod": "https://registry.npmjs.org/zod/-/zod-3.21.4.tgz"
  }
}
```

--------------------------------

### Disabling lifecycle scripts with --ignore-scripts flag

Source: https://bun.sh/docs/pm/lifecycle

This bash command shows how to use the '--ignore-scripts' flag with 'bun install'. This flag globally disables the execution of all package lifecycle scripts during the installation process, providing an additional layer of security.

```bash
bun install --ignore-scripts
```

--------------------------------

### Build Docker Image for Bun App

Source: https://bun.sh/docs/guides/ecosystem/docker

This command builds a Docker image from the Dockerfile in the current directory. The '-t' flag tags the image with the name 'bun-hello-world', and '--pull' ensures that the latest version of the base image ('oven/bun') is downloaded.

```bash
docker build --pull -t bun-hello-world .
```

--------------------------------

### Clone WebKit Repository

Source: https://bun.sh/docs/project/contributing

Clones the WebKit repository into the `./vendor/WebKit` directory. This is a prerequisite for building WebKit locally and debugging JavaScriptCore.

```bash
git clone https://github.com/oven-sh/WebKit vendor/WebKit
```

--------------------------------

### Get File MIME Type with Bun.file() (TypeScript)

Source: https://bun.sh/docs/guides/read-file/mime

Demonstrates how to use the Bun.file() function to obtain a BunFile instance and access its .type property to determine the file's MIME type. This function is useful for identifying file content programmatically.

```typescript
const file = Bun.file("./package.json");
file.type; // application/json

const file = Bun.file("./index.html");
file.type; // text/html

const file = Bun.file("./image.png");
file.type; // image/png
```

--------------------------------

### Dockerfile for Bun Application Deployment

Source: https://bun.sh/docs/guides/deployment/google-cloud-run

Defines a Dockerfile to containerize a Bun application. It uses the official Bun image, copies project files, installs production dependencies, and prepares the application for deployment.

```docker
# Use the official Bun image to run the application
FROM oven/bun:latest

# Copy the package.json and bun.lock into the container
COPY package.json bun.lock ./

# Install the dependencies
# Install the dependencies
RUN bun install --production --frozen-lockfile

```

--------------------------------

### Serving Static Assets with Bun.serve()

Source: https://bun.sh/docs/bundler/executables

Illustrates how to serve embedded static assets efficiently using `Bun.serve()` with the `static` option. Bun automatically handles Content-Type headers and caching for these routes.

```typescript
import favicon from "./favicon.ico" with { type: "file" };
import logo from "./logo.png" with { type: "file" };
import styles from "./styles.css" with { type: "file" };
import { file, serve } from "bun";

serve({
  static: {
    "/favicon.ico": file(favicon),
    "/logo.png": file(logo),
    "/styles.css": file(styles),
  },
  fetch(req) {
    return new Response("Not found", { status: 404 });
  },
});
```

--------------------------------

### Original Code Using console.write

Source: https://bun.sh/docs/guides/runtime/define-constant

An example TypeScript snippet using 'console.write' which will be transformed by the --define flag.

```ts
console.write("Hello, world!");
```

--------------------------------

### Configure Bun S3Client for Supabase

Source: https://bun.sh/docs/runtime/s3

This example shows the configuration for using Bun's S3Client with Supabase Storage. The `endpoint` needs to include your account ID and the `/storage/v1/s3/storage` path. Ensure S3 protocol is enabled in your Supabase project settings.

```typescript
import { S3Client } from "bun";

const supabase = new S3Client({
  accessKeyId: "access-key",
  secretAccessKey: "secret-key",
  bucket: "my-bucket",
  region: "us-west-1",
  endpoint: "https://<account-id>.supabase.co/storage/v1/s3/storage",
});
```

--------------------------------

### Build Release Version of Bun

Source: https://bun.sh/docs/project/contributing

Compiles a release-optimized build of the Bun runtime. This command produces the production-ready binary located at `./build/release/bun`.

```bash
bun run build:release
```

--------------------------------

### Convert Uint8Array to ArrayBuffer with Bun

Source: https://bun.sh/docs/guides

This guide demonstrates converting a Uint8Array to an ArrayBuffer using Bun. This is a common operation when you need to pass byte data to APIs that specifically require an ArrayBuffer. It often involves creating a new ArrayBuffer from the typed array's data.

```typescript
// Assuming 'uint8Array' is your Uint8Array instance
const arrayBuffer = uint8Array.buffer.slice(uint8Array.byteOffset, uint8Array.byteOffset + uint8Array.byteLength);
```

--------------------------------

### Create User with Prisma in Bun

Source: https://bun.sh/docs/guides/ecosystem/prisma-postgres

This code snippet demonstrates how to create a new user record in a database using Prisma within a Bun environment. It utilizes the Prisma client to interact with the database and includes an example of logging the total user count after creation. Ensure Prisma is properly configured and connected to your Postgres database.

```typescript
await prisma.user.create({
      data: {
        name: "John Dough",
        email: `john-${Math.random()}@example.com`,
      },
    });

    // count the number of users
    const count = await prisma.user.count();
    console.log(`There are ${count} users in the database.`);
```

--------------------------------

### Caching Options

Source: https://bun.sh/docs/pm/cli/outdated

Options for controlling how Bun utilizes its cache during installation.

```APIDOC
## Caching Options

### Description
These options determine how Bun manages and uses its cache for downloaded packages and manifests.

### Method
`bun install` (command-line options)

### Parameters
#### Query Parameters
- **--cache-dir** (string) - Store & load cached data from a specific directory path
- **--no-cache** (boolean) - Ignore manifest cache entirely

### Request Example
```bash
bun install --cache-dir /path/to/custom/cache --no-cache
```

### Response
#### Success Response (200)
* **Cache Status** (string) - Indicates the cache behavior during the installation.

#### Response Example
```json
{
  "cacheDir": "/path/to/custom/cache",
  "cacheIgnored": true
}
```
```

--------------------------------

### Build with specified root directory (CLI)

Source: https://bun.sh/docs/bundler

This CLI command demonstrates how to use Bun build with the '--root' option to control the output directory structure. It specifies entrypoints, the output directory, and the root directory.

```bash
bun build ./pages/a.tsx ./pages/b.tsx --outdir ./out --root .
```

```bash
bun build ./pages/index.tsx ./pages/settings.tsx --outdir ./out --root .
```

--------------------------------

### Bun.js Test Example: Edge Cases and Validation

Source: https://bun.sh/docs/test/code-coverage

Illustrates testing edge cases and input validation in Bun.js using TypeScript. This example focuses on a `validateEmail` function, showing how to test normal inputs as well as various invalid or edge-case inputs to improve test coverage meaningfully.

```typescript
test("user input validation", () => {
  // Test normal case
  expect(validateEmail("user@example.com")).toBe(true);

  // Test edge cases that improve coverage meaningfully
  expect(validateEmail("")).toBe(false);
  expect(validateEmail("invalid")).toBe(false);
  expect(validateEmail(null)).toBe(false);
});
```

--------------------------------

### Example Bun Test Code Coverage Report

Source: https://bun.sh/docs/guides/test/coverage

This is an example of a code coverage report generated by the Bun test runner. It displays test results and a summary of code coverage for different files, indicating the percentage of functions and lines covered and listing specific uncovered line numbers.

```txt
test.test.ts:
✓ math > add [0.71ms]
✓ math > multiply [0.03ms]
✓ random [0.13ms]
-------------|---------|---------|-------------------
File         | % Funcs | % Lines | Uncovered Line #s
-------------|---------|---------|-------------------
All files    |   66.67 |   77.78 |
 math.ts     |   50.00 |   66.67 |
 random.ts   |   50.00 |   66.67 |
-------------|---------|---------|-------------------

 3 pass
 0 fail
 3 expect() calls
```

--------------------------------

### Fetch GET Request over Unix Domain Socket in Bun

Source: https://bun.sh/docs/guides/http/fetch-unix

Demonstrates how to perform a GET request to a local server using a Unix domain socket in Bun. It specifies the socket path and retrieves JSON data from the response. This method bypasses standard TCP networking.

```typescript
const unix = "/var/run/docker.sock";

const response = await fetch("http://localhost/info", { unix });

const body = await response.json();
console.log(body); // { ... }
```

--------------------------------

### Migrate pnpm Workspace Configuration to package.json

Source: https://bun.sh/docs/pm/cli/install

Bun migrates workspace packages and catalogs from `pnpm-workspace.yaml` to the `workspaces` field in the root `package.json`. This ensures seamless integration with Bun's dependency management.

```yaml
packages:
  - "apps/*"
  - "packages/*"

catalog:
  react: ^18.0.0
  typescript: ^5.0.0

catalogs:
  build:
    webpack: ^5.0.0
    babel: ^7.0.0
```

```json
{
  "workspaces": {
    "packages": ["apps/*", "packages/*"],
    "catalog": {
      "react": "^18.0.0",
      "typescript": "^5.0.0"
    },
    "catalogs": {
      "build": {
        "webpack": "^5.0.0",
        "babel": "^7.0.0"
      }
    }
  }
}
```

--------------------------------

### Define Gel Schema

Source: https://bun.sh/docs/guides/ecosystem/gel

Defines the schema for the Gel database in `dbschema/default.esdl`. This example creates a `Movie` type with `title` and `releaseYear` properties.

```ts
module default {
  type Movie {
    required title: str;
    releaseYear: int64;
  }
};
```

--------------------------------

### install.scopes

Source: https://bun.sh/docs/runtime/bunfig

Allows configuring a specific registry for a given scope (e.g., `@myorg/<package>`). Environment variables can be referenced using `$variable` notation.

```APIDOC
## `install.scopes`

### Description
To configure a registry for a particular scope (e.g. `@myorg/<package>`) use `install.scopes`. You can reference environment variables with `$variable` notation.

### Method
Configuration

### Endpoint
N/A (Configuration setting)

### Parameters
#### Path Parameters
None

#### Query Parameters
None

#### Request Body
None

### Request Example
```toml
[install.scopes]
# registry as string
myorg = "https://username:password@registry.myorg.com/"

# registry with username/password
# you can reference environment variables
myorg = { username = "myusername", password = "$npm_password", url = "https://registry.myorg.com/" }

# registry with token
myorg = { token = "$npm_token", url = "https://registry.myorg.com/" }
```

### Response
#### Success Response (200)
N/A (Configuration setting)

#### Response Example
N/A
```

--------------------------------

### Specify Bun Version in GitHub Actions (YAML)

Source: https://bun.sh/docs/guides/runtime/cicd

Specifies a particular version of Bun to install within a GitHub Actions workflow. This is achieved by setting the `bun-version` input in the `setup-bun` action.

```yaml
name: my-workflow
jobs:
  my-job:
    name: my-job
    runs-on: ubuntu-latest
    steps:
      # ...
      - uses: oven-sh/setup-bun@v2
        with:
          bun-version: 1.3.3 # or "latest", "canary", <sha>
```

--------------------------------

### Create and Execute Statements

Source: https://bun.sh/docs/runtime/sqlite

Demonstrates how to create prepared SQL statements using `db.query()` and execute them with parameter binding using methods like `.all()`, `.get()`, `.run()`, or `.values()`.

```APIDOC
## Statements

### Description
A `Statement` is a prepared query, parsed and compiled into an efficient binary form for multiple executions. Create statements with `db.query()` and execute them with bound values.

### Method
`db.query()` to create, `.all()`, `.get()`, `.run()`, `.values()` to execute.

### Endpoint
N/A (These are methods on a `Database` instance)

### Parameters
#### Path Parameters
None

#### Query Parameters
None

#### Request Body
None

### Request Example
#### Creating a statement
```ts
const query = db.query(`select "Hello world" as message`);
```

#### Creating a statement with parameters
```ts
const query = db.query(`SELECT ?1, ?2;`);
const query = db.query(`SELECT $param1, $param2;`);
```

#### Binding values (named parameters)
```ts
const query = db.query(`select $message;`);
query.all({ $message: "Hello world" });
```

#### Binding values (positional parameters)
```ts
const query = db.query(`select ?1;`);
query.all("Hello world");
```

#### `strict: true` for binding without prefixes
```ts
import { Database } from "bun:sqlite";

const db = new Database(":memory:", {
  strict: true,
});

const query = db.query(`select $message;`);
query.all({ message: "Hello world" }); // No prefix needed
```

### Response
#### Success Response (200)
Depends on the execution method:
- `.all()`: Returns an array of objects representing the rows.
- `.get()`: Returns a single object representing the first row, or `undefined`.
- `.run()`: Returns an object with `changes` and `lastInsertRowid`.
- `.values()`: Returns an array of arrays representing the rows.

#### Response Example (for `.all()`)
```json
[
  { "message": "Hello world" }
]
```
```

--------------------------------

### Append Content to a File

Source: https://bun.sh/docs/guides

Adds new content to the end of an existing file. If the file does not exist, it will be created.

```javascript
import { appendFile } from "bun";

async function appendToFile(filePath, content) {
  try {
    await appendFile(filePath, content);
    console.log(`Content appended to '${filePath}' successfully.`);
  } catch (error) {
    console.error(`Error appending to file '${filePath}':`, error);
  }
}

appendToFile("log.txt", "New log entry.\n");
```

--------------------------------

### Initialize Bun FileSystemRouter for Next.js Style

Source: https://bun.sh/docs/runtime/file-system-router

Demonstrates how to initialize the Bun FileSystemRouter for Next.js-style routing. It requires specifying the directory containing the pages, the routing style, and optionally an origin and asset prefix. The router is used to match specific paths.

```typescript
const router = new Bun.FileSystemRouter({
  style: "nextjs",
  dir: "./pages",
  origin: "https://mydomain.com",
  assetPrefix: "_next/static/"
});

router.match("/");

// =>
{
  filePath: "/path/to/pages/index.tsx",
  kind: "exact",
  name: "/",
  pathname: "/",
  src: "https://mydomain.com/_next/static/pages/index.tsx"
}
```

--------------------------------

### Accessing Server object in fetch handler

Source: https://bun.sh/docs/runtime/http/routing

Illustrates how to access the `Server` object from within the fetch handler to get request IP information.

```APIDOC
## POST /websites/bun_sh (with server access)

### Description
Handles incoming requests and has access to the `Server` object as the second argument to the `fetch` function. This allows retrieving information like the client's IP address.

### Method
POST

### Endpoint
/websites/bun_sh

### Parameters
#### Path Parameters
None

#### Query Parameters
None

#### Request Body
None

### Request Example
```json
{
  "example": "request body"
}
```

### Response
#### Success Response (200)
- **Response** (Response) - A response containing the client's IP address.

#### Response Example
```json
{
  "example": "Your IP is X.X.X.X"
}
```
```

--------------------------------

### CookieMap Methods

Source: https://bun.sh/docs/runtime/cookies

Reference for the methods available on the Bun.CookieMap class, including get, has, set, and delete.

```APIDOC
## CookieMap Methods

### `get(name: string): string | null`

Retrieves a cookie by name. Returns `null` if the cookie doesn't exist.

```typescript
// Get by name
const cookie = cookies.get("session");
if (cookie != null) {
  console.log(cookie);
}
```

### `has(name: string): boolean`

Checks if a cookie with the given name exists.

```typescript
// Check if cookie exists
if (cookies.has("session")) {
  // Cookie exists
}
```

### `set(name: string, value: string): void`

### `set(options: CookieInit): void`

### `set(cookie: Cookie): void`

Adds or updates a cookie in the map. Cookies default to `{ path: "/", sameSite: "lax" }`.

```typescript
// Set by name and value
cookies.set("session", "abc123");

// Set using options object
cookies.set({
  name: "theme",
  value: "dark",
  maxAge: 3600,
  secure: true,
});

// Set using Cookie instance
const cookie = new Bun.Cookie("visited", "true");
cookies.set(cookie);
```

### `delete(name: string): void`

### `delete(options: CookieStoreDeleteOptions): void`

Removes a cookie from the map. When applied to a Response, this adds a cookie with an empty string value and an expiry date in the past. A cookie will only delete successfully on the browser if the domain and path is the same as it was when the cookie was created.

```typescript
// Delete by name using default domain and path.
cookies.delete("session");

// Delete with domain/path options.
cookies.delete({
  name: "session",
  domain: "example.com",
  path: "/admin",
});
```
```

--------------------------------

### Redis Pub/Sub with Bun

Source: https://bun.sh/docs/runtime/redis

Shows how to set up a Redis publisher and subscriber using Bun's native bindings. This feature is experimental and requires Bun v1.2.23 or later. A separate connection is needed for publishing when subscribed.

```typescript
import { RedisClient } from "bun";

const writer = new RedisClient("redis://localhost:6739");
await writer.connect();

writer.publish("general", "Hello everyone!");

writer.close();
```

```typescript
import { RedisClient } from "bun";

const listener = new RedisClient("redis://localhost:6739");
await listener.connect();

await listener.subscribe("general", (message, channel) => {
  console.log(`Received: ${message}`);
});
```

```typescript
import { RedisClient } from "bun";

const redis = new RedisClient("redis://localhost:6379");
await redis.connect();
const subscriber = await redis.duplicate(); 

await subscriber.subscribe("foo", () => {});
await redis.set("bar", "baz");
```

```typescript
await client.publish(channelName, message);
```

--------------------------------

### Extract and Process npm Package with Bun Archive

Source: https://bun.sh/docs/runtime/archive

This example shows how to fetch a tarball from the npm registry, extract its contents using Bun.Archive, and then parse the package.json file to display the package name and version. It utilizes fetch API and Bun.Archive's file extraction capabilities.

```typescript
const response = await fetch("https://registry.npmjs.org/lodash/-/lodash-4.17.21.tgz");
const archive = new Bun.Archive(await response.blob());

// Get package.json
const files = await archive.files("package/package.json");
const packageJson = files.get("package/package.json");

if (packageJson) {
  const pkg = JSON.parse(await packageJson.text());
  console.log(`Package: ${pkg.name}@${pkg.version}`);
}
```

--------------------------------

### Glob Pattern '{a,b,c}' Example (TypeScript)

Source: https://bun.sh/docs/runtime/glob

Shows the alternation pattern `{a,b,c}` in Bun's Glob, which matches any of the specified patterns separated by commas.

```typescript
const glob = new Glob("{a,b,c}.ts");
glob.match("a.ts"); // => true
glob.match("b.ts"); // => true
glob.match("c.ts"); // => true
glob.match("d.ts"); // => false
```

--------------------------------

### Force Bun Runtime for Shebang Scripts

Source: https://bun.sh/docs/guides/install/from-npm-install-to-bun-install

When a script uses a `#!/usr/bin/env node` shebang, `bun run` typically uses the system's Node.js. Use the `--bun` flag with `bun run` or `bun --bun` to force Bun's runtime, by creating a temporary symlink to the Bun executable.

```sh
# Force using Bun's runtime instead of node
bun --bun my-script

# This also works:
bun run --bun my-script
```

--------------------------------

### Accessing and Using Bun.build Artifacts

Source: https://bun.sh/docs/bundler

Demonstrates how to perform a build using Bun.build and then access the generated artifacts. It shows how to read the content of an artifact as an ArrayBuffer, Uint8Array, or string.

```typescript
const build = await Bun.build({
  /* */
});

for (const output of build.outputs) {
  await output.arrayBuffer(); // => ArrayBuffer
  await output.bytes(); // => Uint8Array
  await output.text(); // string
}
```

--------------------------------

### Specify PostgreSQL SSL Modes in Connection Strings

Source: https://bun.sh/docs/runtime/sql

Shows how to specify SSL modes directly within the PostgreSQL connection string when initializing Bun's SQL client. Examples include 'prefer' and 'verify-full'.

```typescript
// Using prefer mode
const sql = new SQL("postgres://user:password@localhost/mydb?sslmode=prefer");

// Using verify-full mode
const sql = new SQL("postgres://user:password@localhost/mydb?sslmode=verify-full");
```

--------------------------------

### Create Next.js App with Bun

Source: https://bun.sh/docs/guides/ecosystem/nextjs

Scaffolds a new Next.js project using the `bun create` command. This command automatically installs necessary dependencies for the Next.js application.

```shell
bun create next-app@latest my-bun-app
```

--------------------------------

### Create Hono App with Bun Template

Source: https://bun.sh/docs/guides/ecosystem/hono

Use the 'create-hono' command to scaffold a new Hono project, selecting the 'bun' template for Bun integration. This command initializes the project structure and necessary configuration files.

```sh
bun create hono myapp
```

--------------------------------

### Fetch API - Sending an HTTP request

Source: https://bun.sh/docs/runtime/networking/fetch

Demonstrates how to send a basic HTTP GET request to a URL using the fetch API and access the response status and body.

```APIDOC
## GET / 

### Description
Sends an HTTP GET request to the specified URL and retrieves the response.

### Method
GET

### Endpoint
/

### Parameters
#### Query Parameters
- **url** (string) - Required - The URL to send the request to.

### Request Example
```javascript
const response = await fetch("http://example.com");

console.log(response.status); // => 200

const text = await response.text(); // or response.json(), response.formData(), etc.
```

### Response
#### Success Response (200)
- **status** (number) - The HTTP status code of the response.
- **body** (any) - The response body, which can be accessed as text, JSON, FormData, etc.

#### Response Example
```json
{
  "status": 200,
  "body": "Response body content"
}
```
```

--------------------------------

### Call sqlite3_libversion using dlopen in Bun

Source: https://bun.sh/docs/runtime/ffi

Demonstrates how to use Bun's `dlopen` function from the `bun:ffi` module to call the `sqlite3_libversion` function from the `sqlite3` library. This example shows how to import a function and retrieve its string return value.

```typescript
import { dlopen, FFIType, suffix } from "bun:ffi";

// `suffix` is either "dylib", "so", or "dll" depending on the platform
// you don't have to use "suffix", it's just there for convenience
const path = `libsqlite3.${suffix}`;

const { 
  symbols: { 
    sqlite3_libversion, // the function to call
  },
} = dlopen(
  path, // a library name or file path
  {
    sqlite3_libversion: {
      // no arguments, returns a string
      args: [],
      returns: FFIType.cstring,
    },
  },
);

console.log(`SQLite 3 version: ${sqlite3_libversion()}`);
```

--------------------------------

### Write a String to a File

Source: https://bun.sh/docs/guides

Saves a given string to a file at the specified path. If the file already exists, its content will be overwritten.

```javascript
import { writeFile } from "bun";

async function writeStringToFile(text, filePath) {
  try {
    await writeFile(filePath, text);
    console.log(`String written to '${filePath}' successfully.`);
  } catch (error) {
    console.error(`Error writing string to file '${filePath}':`, error);
  }
}

writeStringToFile("This is the content of the file.", "my-file.txt");
```

--------------------------------

### Bun.nanoseconds()

Source: https://bun.sh/docs/runtime/utils

Returns the number of nanoseconds since the current Bun process started. Useful for high-precision timing.

```APIDOC
## Bun.nanoseconds()

### Description
Returns the number of nanoseconds since the current `bun` process started.

### Method
`Bun.nanoseconds(): number`

### Parameters
None

### Request Example
```ts
Bun.nanoseconds();
// => 7288958
```

### Response
#### Success Response (200)
- **nanoseconds** (number) - The number of nanoseconds elapsed.

#### Response Example
```json
{
  "nanoseconds": 7288958
}
```
```

--------------------------------

### Uninstall Bun on macOS & Linux

Source: https://bun.sh/docs/installation

Removes the Bun installation directory from the user's home directory on macOS and Linux systems.

```bash
rm -rf ~/.bun
```

--------------------------------

### Configure subprocess stdin with Bun.spawn()

Source: https://bun.sh/docs/runtime/child-process

Illustrates configuring the standard input (stdin) for a subprocess in Bun.spawn(). It shows how to pipe data incrementally to the subprocess's input stream.

```typescript
const proc = Bun.spawn(["cat"], {
  stdin: "pipe", // return a FileSink for writing
});

// enqueue string data
proc.stdin.write("hello");

// enqueue binary data
const enc = new TextEncoder();
proc.stdin.write(enc.encode(" world!"));

// send buffered data
proc.stdin.flush();

// close the input stream
proc.stdin.end();
```

--------------------------------

### Write a File to Standard Output (stdout)

Source: https://bun.sh/docs/guides

Reads the content of a file and writes it to the standard output stream. This is equivalent to the `cat` command in Unix-like systems.

```javascript
import { readFile } from "bun";

async function catFileToStdout(filePath) {
  try {
    const fileContent = await readFile(filePath);
    process.stdout.write(fileContent);
  } catch (error) {
    console.error(`Error reading file '${filePath}':`, error);
  }
}

catFileToStdout("input.txt");
```

--------------------------------

### Display On-Demand Served Files (JavaScript)

Source: https://bun.sh/docs/guides/ecosystem/tanstack-start

This section logs files that are served on-demand, displaying their path, size, and gzipped size. It sorts the files by route before logging and uses a helper function `formatFileSize` to format the size information.

```javascript
if (skipped.length > 0) {
  console.log('\n💾 Served on-demand:')
  console.log(
    'Path                                          │    Size │ Gzip Size',
  )
  skipped
    .sort((a, b) => a.route.localeCompare(b.route))
    .forEach((file) => {
      const { size, gzip } = formatFileSize(file.size)
      const paddedPath = file.route.padEnd(maxPathLength)
      const sizeStr = `${size.padStart(7)} kB`
      const gzipStr = `${gzip.padStart(7)} kB`
      console.log(`${paddedPath} │ ${sizeStr} │  ${gzipStr}`)
    })
}
```

--------------------------------

### Pack and Publish Separately

Source: https://bun.sh/docs/pm/cli/publish

This demonstrates publishing a package by first creating a tarball using `bun pm pack` and then publishing that specific tarball with `bun publish`. Note that lifecycle scripts are not executed when publishing a pre-packed tarball.

```sh
bun pm pack
...
bun publish ./package.tgz
```

--------------------------------

### Control Bun Debug Logging

Source: https://bun.sh/docs/project/contributing

Demonstrates how to manage debug logging for `bun-debug`. It shows how to disable all debug logs or enable logs for specific Zig scopes.

```bash
BUN_DEBUG_QUIET_LOGS=1 bun-debug ...
BUN_DEBUG_EventLoop=1 bun-debug ...
```

--------------------------------

### Bun Build API: Mixing Disk and Virtual Files

Source: https://bun.sh/docs/bundler

Illustrates how real files on disk can import virtual files, and vice-versa, using the 'files' option in Bun.build. This is useful for code generation, injecting build-time constants, or testing with mock modules.

```typescript
// ./src/index.ts exists on disk and imports "./generated.ts"
await Bun.build({
  entrypoints: ["./src/index.ts"],
  files: {
    // Provide a virtual file that index.ts imports
    "./src/generated.ts": "
      export const BUILD_ID = \"${crypto.randomUUID()}\";
      export const BUILD_TIME = ${Date.now()};
    ",
  },
  outdir: "./dist",
});
```

--------------------------------

### Build with specified root directory (JavaScript)

Source: https://bun.sh/docs/bundler

This JavaScript code snippet demonstrates how to use Bun.build with the 'root' option explicitly set to '.' to control the output directory structure. It specifies entrypoints and the output directory.

```typescript
await Bun.build({
  entrypoints: ['./pages/a.tsx', './pages/b.tsx'],
  outdir: './out',
  root: '.',
})
```

```javascript
await Bun.build({
  entrypoints: ['./pages/index.tsx', './pages/settings.tsx'],
  outdir: './out',
  root: '.',
})
```

--------------------------------

### Bun.js CLI: Running Coverage Reports

Source: https://bun.sh/docs/test/code-coverage

Provides command-line examples for using Bun.js to run test coverage reports. It shows how to initiate a full coverage run and how to focus coverage analysis on specific files or modules.

```bash
# Run coverage to identify untested code
bun test --coverage

# Look at specific files that need attention
bun test --coverage src/critical-module.ts
```

--------------------------------

### Example HTML Structure for Standalone App

Source: https://bun.sh/docs/bundler/standalone-html

A basic HTML file structure that links to local CSS and TypeScript files. When bundled with Bun's `--compile` flag, these linked assets will be inlined into the final HTML document.

```html
<!doctype html>
<html>
  <head>
    <link rel="stylesheet" href="./styles.css" />
  </head>
  <body>
    <div id="root"></div>
    <script src="./app.tsx"></script>
  </body>
</html>
```

--------------------------------

### Create a ReadableStream in Bun

Source: https://bun.sh/docs/runtime/binary-data

Illustrates the creation of a simple ReadableStream in Bun. The `start` method enqueues data chunks and then closes the stream. This is useful for handling data that doesn't need to be loaded entirely into memory.

```typescript
const stream = new ReadableStream({
  start(controller) {
    controller.enqueue("hello");
    controller.enqueue("world");
    controller.close();
  },
});
```

--------------------------------

### Bun.js Configuration for Preload

Source: https://bun.sh/docs/test/dom

Shows how to configure Bun.js to use a preload file for testing by specifying the path in the bunfig.toml file.

```toml
[test]
preload = ["./test-setup.ts"]
```

--------------------------------

### Get RGB channels ({rgb})

Source: https://bun.sh/docs/runtime/color

Outputs an object with the red, green, and blue channels of the color.

```APIDOC
## Bun.color() with "{rgb}"

### Description
Outputs an object with the red, green, and blue channels. This is similar to `{rgba}` but excludes the alpha channel.

### Method
```
Bun.color(color: string | number | object | Array<number>, format: "{rgb}")
```

### Parameters
#### Path Parameters
None

#### Query Parameters
None

#### Request Body
- **color** (string | number | object | Array<number>) - The input color value.
- **format** (string) - Must be set to "{rgb}".

### Request Example
```javascript
Bun.color("hsl(0, 0%, 50%)", "{rgb}"); // { r: 128, g: 128, b: 128 }
Bun.color("red", "{rgb}"); // { r: 255, g: 0, b: 0 }
Bun.color(0xff0000, "{rgb}"); // { r: 255, g: 0, b: 0 }
Bun.color({ r: 255, g: 0, b: 0 }, "{rgb}"); // { r: 255, g: 0, b: 0 }
Bun.color([255, 0, 0], "{rgb}"); // { r: 255, g: 0, b: 0 }
```

### Response
#### Success Response (200)
- **object** (object) - An object containing the r, g, and b channels of the color.

#### Response Example
```json
{
  "example": {
    "r": 128,
    "g": 128,
    "b": 128
  }
}
```
```

--------------------------------

### Bun Asset Preloading Configuration from Environment Variables

Source: https://bun.sh/docs/guides/ecosystem/tanstack-start

Configures asset preloading settings by reading environment variables. This includes maximum file size for preloading, include and exclude patterns, verbose logging, ETag generation, and Gzip compression settings like minimum size and supported MIME types.

```typescript
// Preloading configuration from environment variables
const MAX_PRELOAD_BYTES = Number(
  process.env.ASSET_PRELOAD_MAX_SIZE ?? 5 * 1024 * 1024, // 5MB default
)

// Parse comma-separated include patterns (no defaults)
const INCLUDE_PATTERNS = (process.env.ASSET_PRELOAD_INCLUDE_PATTERNS ?? '')
  .split(',')
  .map((s) => s.trim())
  .filter(Boolean)
  .map((pattern: string) => convertGlobToRegExp(pattern))

// Parse comma-separated exclude patterns (no defaults)
const EXCLUDE_PATTERNS = (process.env.ASSET_PRELOAD_EXCLUDE_PATTERNS ?? '')
  .split(',')
  .map((s) => s.trim())
  .filter(Boolean)
  .map((pattern: string) => convertGlobToRegExp(pattern))

// Verbose logging flag
const VERBOSE = process.env.ASSET_PRELOAD_VERBOSE_LOGGING === 'true'

// Optional ETag feature
const ENABLE_ETAG = (process.env.ASSET_PRELOAD_ENABLE_ETAG ?? 'true') === 'true'

// Optional Gzip feature
const ENABLE_GZIP = (process.env.ASSET_PRELOAD_ENABLE_GZIP ?? 'true') === 'true'
const GZIP_MIN_BYTES = Number(process.env.ASSET_PRELOAD_GZIP_MIN_SIZE ?? 1024) // 1KB
const GZIP_TYPES = (
  process.env.ASSET_PRELOAD_GZIP_MIME_TYPES ??
  'text/,application/javascript,application/json,application/xml,image/svg+xml'
)
  .split(',')
  .map((v) => v.trim())
  .filter(Boolean)
```

--------------------------------

### Bun Tracking Unused Exports Plugin with Defer

Source: https://bun.sh/docs/bundler/plugins

This example showcases using the defer() function within an onLoad callback to track module imports. It waits for all modules to load before returning statistics, demonstrating delayed execution for dependent content generation.

```typescript
import { plugin } from "bun";

plugin({
  name: "track imports",
  setup(build) {
    const transpiler = new Bun.Transpiler();

    let trackedImports: Record<string, number> = {};

    // Each module that goes through this onLoad callback
    // will record its imports in `trackedImports`
    build.onLoad({ filter: /\.ts/ }, async ({ path }) => {
      const contents = await Bun.file(path).arrayBuffer();

      const imports = transpiler.scanImports(contents);

      for (const i of imports) {
        trackedImports[i.path] = (trackedImports[i.path] || 0) + 1;
      }

      return undefined;
    });

    build.onLoad({ filter: /stats\.json/ }, async ({ defer }) => {
      // Wait for all files to be loaded, ensuring
      // that every file goes through the above `onLoad()` function
      // and their imports tracked
      await defer();

      // Emit JSON containing the stats of each import
      return {
        contents: `export default ${JSON.stringify(trackedImports)}`,
        loader: "json",
      };
    });
  },
});
```

--------------------------------

### Initialize Bun SQLite Database

Source: https://bun.sh/docs/runtime/sqlite

Demonstrates how to import the Database class from 'bun:sqlite' and initialize a new SQLite database. This can be a file-based database, an in-memory database, or opened in read-only mode.

```typescript
import { Database } from "bun:sqlite";

const db = new Database("mydb.sqlite");
```

```typescript
import { Database } from "bun:sqlite";

// all of these do the same thing
const db = new Database(":memory:");
const db = new Database();
const db = new Database("");
```

```typescript
import { Database } from "bun:sqlite";
const db = new Database("mydb.sqlite", { readonly: true });
```

```typescript
import { Database } from "bun:sqlite";
const db = new Database("mydb.sqlite", { create: true });
```

--------------------------------

### Add GitHub Dependency using Bun

Source: https://bun.sh/docs/guides/install/add-git

This command adds a GitHub repository as a dependency to your Bun project. It utilizes the Bun package manager to fetch and install the specified repository.

```sh
bun add github:lodash/lodash
```

--------------------------------

### Add Peer Dependencies with Bun

Source: https://bun.sh/docs/pm/cli/add

Installs packages as peer dependencies, which are listed under 'peerDependencies' in package.json. These are dependencies that a package expects the consuming project to provide.

```bash
bun add --peer @types/bun
```

--------------------------------

### Write a ReadableStream to a File

Source: https://bun.sh/docs/guides

Takes a ReadableStream and writes its content to a specified file. This is efficient for handling large amounts of data that can be streamed.

```javascript
import { writeFile } from "bun";

async function writeStreamToFile(readableStream, filePath) {
  try {
    await writeFile(filePath, readableStream);
    console.log(`ReadableStream written to '${filePath}' successfully.`);
  } catch (error) {
    console.error(`Error writing stream to file '${filePath}':`, error);
  }
}

// Example usage:
// const stream = getSomeReadableStream(); // Replace with your stream source
// writeStreamToFile(stream, "streamed_output.txt");
```

--------------------------------

### Bun.revision

Source: https://bun.sh/docs/runtime/utils

Gets the git commit hash used to compile the current 'bun' CLI.

```APIDOC
## `Bun.revision`

### Description
The git commit of [Bun](https://github.com/oven-sh/bun) that was compiled to create the current `bun` CLI.

### Method
GET (Implicit)

### Endpoint
N/A (Runtime property)

### Parameters
None

### Request Example
```ts
console.log(Bun.revision);
// => "f02561530fda1ee9396f51c8bc99b38716e38296"
```

### Response
#### Success Response (200)
- **revision** (string) - The git commit hash of the bun build.
```

--------------------------------

### Constructing Compound Environment Variable Values

Source: https://bun.sh/docs/runtime/environment-variables

Provides an example of using environment variable expansion to build a complex database connection string by combining multiple individual variables.

```ini
DB_USER=postgres
DB_PASSWORD=secret
DB_HOST=localhost
DB_PORT=5432
DB_URL=postgres://$DB_USER:$DB_PASSWORD@$DB_HOST:$DB_PORT/$DB_NAME
```

--------------------------------

### Set Environment Variables via Command Line (Windows)

Source: https://bun.sh/docs/guides/runtime/set-env

Provides examples for setting environment variables on the command line for Windows using both CMD and PowerShell. This enables dynamic configuration for Bun applications on Windows.

```sh
# Using CMD
set FOO=helloworld && bun run dev

# Using PowerShell
$env:FOO="helloworld"; bun run dev
```

--------------------------------

### Build Release Version with AddressSanitizer

Source: https://bun.sh/docs/project/contributing

Compiles a release build of Bun with AddressSanitizer enabled. This is useful for detecting memory-related issues during development and testing.

```bash
bun run build:release:asan
```

--------------------------------

### Get RGBA channels ({rgba})

Source: https://bun.sh/docs/runtime/color

Outputs an object with the red, green, blue, and alpha channels of the color.

```APIDOC
## Bun.color() with "{rgba}"

### Description
Outputs an object with the red, green, blue, and alpha channels.

### Method
```
Bun.color(color: string | number | object | Array<number>, format: "{rgba}")
```

### Parameters
#### Path Parameters
None

#### Query Parameters
None

#### Request Body
- **color** (string | number | object | Array<number>) - The input color value.
- **format** (string) - Must be set to "{rgba}".

### Request Example
```javascript
type RGBAObject = {
  // 0 - 255
  r: number;
  // 0 - 255
  g: number;
  // 0 - 255
  b: number;
  // 0 - 1
  a: number;
};

Bun.color("hsl(0, 0%, 50%)", "{rgba}"); // { r: 128, g: 128, b: 128, a: 1 }
Bun.color("red", "{rgba}"); // { r: 255, g: 0, b: 0, a: 1 }
Bun.color(0xff0000, "{rgba}"); // { r: 255, g: 0, b: 0, a: 1 }
Bun.color({ r: 255, g: 0, b: 0 }, "{rgba}"); // { r: 255, g: 0, b: 0, a: 1 }
Bun.color([255, 0, 0], "{rgba}"); // { r: 255, g: 0, b: 0, a: 1 }
```

### Response
#### Success Response (200)
- **RGBAObject** (object) - An object containing the r, g, b, and a channels of the color.

#### Response Example
```json
{
  "example": {
    "r": 128,
    "g": 128,
    "b": 128,
    "a": 1
  }
}
```
```

--------------------------------

### Execute Script and View Entrypoint Path (Shell)

Source: https://bun.sh/docs/guides/util/main

This demonstrates how to run a TypeScript file using `bun run` and shows the expected output, which is the absolute path to the executed file. This confirms the behavior of `Bun.main`.

```shell
bun run index.ts
```

```text
/path/to/index.ts
```

```shell
bun run foo.ts
```

```text
/path/to/foo.ts
```

--------------------------------

### Create BunFile instance and access properties

Source: https://bun.sh/docs/runtime/file-io

Demonstrates how to create a BunFile instance using Bun.file(path) and access its properties like size and type. The BunFile object represents a lazily-loaded file, meaning it doesn't read the file from disk upon initialization.

```typescript
const foo = Bun.file("foo.txt"); // relative to cwd
foo.size; // number of bytes
foo.type; // MIME type
```

--------------------------------

### Basic Test Case in TypeScript

Source: https://bun.sh/docs/test

A simple example of a test case written in TypeScript using Bun's test runner API. It demonstrates a basic assertion using `expect`.

```typescript
import { expect, test } from "bun:test";

test("2 + 2", () => {
  expect(2 + 2).toBe(4);
});
```

--------------------------------

### Create BunFile references using file descriptors or URLs

Source: https://bun.sh/docs/runtime/file-io

Illustrates creating BunFile references using numerical file descriptors or file:// URLs. This provides flexibility in how file paths are specified.

```typescript
Bun.file(1234);
Bun.file(new URL(import.meta.url)); // reference to the current file
```

--------------------------------

### Optimized postMessage Usage in JavaScript

Source: https://bun.sh/docs/runtime/workers

Shows examples of using `postMessage` in Bun with its performance optimizations. It demonstrates the string fast path, the simple object fast path for plain objects with primitive values, and how complex objects are still handled by the standard structured clone algorithm.

```javascript
// String fast path - optimized
postMessage("Hello, worker!");

// Simple object fast path - optimized
postMessage({
  message: "Hello",
  count: 42,
  enabled: true,
  data: null,
});

// Complex objects still work but use standard structured clone
postMessage({
  nested: { deep: { object: true } },
  date: new Date(),
  buffer: new ArrayBuffer(8),
});
```

--------------------------------

### Bundler Configuration Options

Source: https://bun.sh/docs/bundler/esbuild

This section outlines various configuration options for the Bun bundler, including `jsxSideEffects`, `loader`, and others, detailing their support status and usage.

```APIDOC
## Bundler Configuration Options

### Description
This section details various configuration options for the Bun bundler, including their support status and specific notes.

### Options

- **`jsxSideEffects`**
  - **JS API Support**: Not supported.
  - **Configuration**: Configure in `tsconfig.json`.

- **`keepNames`**
  - **Support**: Not supported.

- **`legalComments`**
  - **Support**: Not supported.

- **`loader`**
  - **Description**: Bun supports a different set of built-in loaders than esbuild. Refer to the Bundler > Loaders documentation for a complete reference.
  - **Unsupported esbuild loaders**: `dataurl`, `binary`, `base64`, `copy`, and `empty` are not yet implemented.

- **`logLevel`**
  - **Support**: Not supported.

- **`logLimit`**
  - **Support**: Not supported.

- **`logOverride`**
  - **Support**: Not supported.

- **`mainFields`**
  - **Support**: Not supported.

- **`mangleCache`**
  - **Support**: Not supported.

### Request Example
```json
{
  "jsxSideEffects": false,
  "loader": {
    ".svg": "file"
  }
}
```

### Response
#### Success Response (200)
This documentation does not describe a specific success response for configuration. Configuration is applied during the bundling process.

#### Response Example
N/A
```

--------------------------------

### Code Block Syntax Highlighting with Bun.markdown.render

Source: https://bun.sh/docs/runtime/markdown

Demonstrates how to implement syntax highlighting for code blocks within markdown rendering. This example uses `Bun.markdown.render` with a custom `code` renderer that wraps the code in `<pre>` and `<code>` tags, adding a CSS class based on the detected language. This prepares the output for client-side or server-side styling.

```typescript
const result = Bun.markdown.render("```js\nconsole.log('hi')\n```", {
  code: (children, meta) => {
    const lang = meta?.language ?? "";
    return `<pre><code class="language-${lang}">${children}</code></pre>`;
  },
});
```

--------------------------------

### Run Bun Debug Build

Source: https://bun.sh/docs/project/contributing

Executes a debug build of Bun. This command is useful for development and testing. It can accept arguments to run specific tests or scripts.

```sh
bun-debug
```

--------------------------------

### Database Setup for Bun.js Tests

Source: https://bun.sh/docs/test/lifecycle

Configures database connections and cleanup for testing environments using Bun.js. It imports necessary functions for creating, closing, and clearing database connections, ensuring a clean state before each test.

```typescript
import { beforeAll, afterAll, beforeEach, clearDatabase } from "bun:test";
import { createConnection, closeConnection } from "./db";

let connection;

beforeAll(async () => {
  // Connect to test database
  connection = await createConnection({
    host: "localhost",
    database: "test_db",
  });
});

afterAll(async () => {
  // Close database connection
  await closeConnection(connection);
});

beforeEach(async () => {
  // Start with clean database for each test
  await clearDatabase(connection);
});
```

--------------------------------

### Run Seed Script with Bun

Source: https://bun.sh/docs/guides/ecosystem/gel

This command demonstrates how to execute the TypeScript seeding script using the Bun runtime. It's a straightforward command to initiate the database seeding process.

```shell
bun run seed.ts

```

--------------------------------

### Switch Bun Back to Stable Release

Source: https://bun.sh/docs/guides/util/upgrade

Reverts a Bun installation from a canary build back to the latest stable release. This ensures stability for production environments.

```bash
bun upgrade --stable
```

--------------------------------

### Enable WebSocket Compression

Source: https://bun.sh/docs/guides

Configures a WebSocket server to use permessage-deflate compression for messages. This reduces bandwidth usage by compressing data before transmission.

```javascript
Bun.serve({
  fetch(req) {
    if (req.url.endsWith("/ws")) {
      return new WebSocket(req, {
        // Enable permessage-deflate compression
        compression: true,
      });
    }
    return new Response("Hello World!");
  },
});

console.log("WebSocket server with compression is running on port 3000");
```

--------------------------------

### Load SQLite Extension

Source: https://bun.sh/docs/runtime/sqlite

Demonstrates how to load a SQLite extension using the `.loadExtension()` method on a Database instance. Includes notes for macOS users regarding custom SQLite builds.

```APIDOC
## POST /websites/bun_sh/loadExtension

### Description
Loads a SQLite extension by its name. This allows you to extend SQLite's functionality with custom code.

### Method
POST

### Endpoint
`/websites/bun_sh/loadExtension`

### Parameters
#### Path Parameters
None

#### Query Parameters
None

#### Request Body
- **name** (string) - Required - The name of the extension to load.

### Request Example
```json
{
  "name": "myext"
}
```

### Response
#### Success Response (200)
Indicates that the extension was loaded successfully.

#### Response Example
```json
{
  "message": "Extension loaded successfully"
}
```

### Notes
On macOS, you may need to install a vanilla build of SQLite using `brew install sqlite` and set the custom path using `Database.setCustomSQLite(path)` before creating a `Database` instance if the default build does not support extensions.
```

--------------------------------

### Configure libatomic Linking for Bun Build

Source: https://bun.sh/docs/project/contributing

Allows dynamic linking of `libatomic` for Bun builds when a static version is not available on the system. This is done by passing a build flag to the `bun run build` command.

```bash
bun run build -DUSE_STATIC_LIBATOMIC=OFF
```

--------------------------------

### Bun Full-Stack Executable: Server and Frontend Code

Source: https://bun.sh/docs/bundler/executables

This snippet demonstrates a basic full-stack server using Bun. It imports an HTML file, which triggers Bun to bundle frontend assets. The server defines routes for the root and an API endpoint. Dependencies include Bun itself.

```typescript
import { serve } from "bun";
import index from "./index.html";

const server = serve({
  routes: {
    "/": index,
    "/api/hello": { GET: () => Response.json({ message: "Hello from API" }) },
  },
});

console.log(`Server running at http://localhost:${server.port}`);
```

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My App</title>
    <link rel="stylesheet" href="./styles.css" />
  </head>
  <body>
    <h1>Hello World</h1>
    <script src="./app.ts"></script>
  </body>
</html>
```

```typescript
console.log("Hello from the client!");
```

```css
body {
  background-color: #f0f0f0;
}
```

--------------------------------

### Write a Response to a File

Source: https://bun.sh/docs/guides

Saves the body of an HTTP Response object to a file. This is useful for caching API responses or saving downloaded content.

```javascript
import { writeFile } from "bun";

async function writeResponseToFile(response, filePath) {
  try {
    await writeFile(filePath, response.body);
    console.log(`Response body written to '${filePath}' successfully.`);
  } catch (error) {
    console.error(`Error writing response to file '${filePath}':`, error);
  }
}

// Example usage:
// fetch('https://example.com/data.json')
//   .then(res => writeResponseToFile(res, 'data.json'));
```

--------------------------------

### Single Default Catalog Definition Example

Source: https://bun.sh/docs/pm/catalogs

This JSON snippet illustrates the concise definition of a single, default catalog in a `package.json` file. It directly lists common dependencies like 'react' and 'react-dom' with their versions.

```json
{
  "catalog": {
    "react": "^19.0.0",
    "react-dom": "^19.0.0"
  }
}
```

--------------------------------

### Compile App for macOS x64 with Bun

Source: https://bun.sh/docs/bundler/executables

This snippet demonstrates compiling a TypeScript application for macOS x64 using Bun. It provides examples for both the CLI and the JavaScript API. The CLI uses the `--target` flag, while the JavaScript API configures the `compile` option within `Bun.build`.

```bash
bun build --compile --target=bun-darwin-x64 ./path/to/my/app.ts --outfile myapp
```

```typescript
await Bun.build({
  entrypoints: ["./path/to/my/app.ts"],
  compile: {
    target: "bun-darwin-x64",
    outfile: "./myapp",
  },
});
```

--------------------------------

### Verify Bun Version and Revision

Source: https://bun.sh/docs/guides/util/upgrade

Commands to check the currently installed Bun version and its specific commit revision after an upgrade. Useful for confirming the upgrade was successful and identifying the exact build.

```bash
bun --version
# Output: 1.x.y

bun --revision
# Output: 1.x.y+abc123def
```

--------------------------------

### Verbose Fetch Request/Response Headers

Source: https://bun.sh/docs/runtime/networking/fetch

Example output of verbose fetch logging in Bun, displaying the detailed headers exchanged during an HTTP request and response. This is generated when `verbose: true` is used with the fetch function.

```shell
[fetch] > HTTP/1.1 GET http://example.com/
[fetch] > Connection: keep-alive
[fetch] > User-Agent: Bun/1.3.3
[fetch] > Accept: */*
[fetch] > Host: example.com
[fetch] > Accept-Encoding: gzip, deflate, br, zstd

[fetch] < 200 OK
[fetch] < Content-Encoding: gzip
[fetch] < Age: 201555
[fetch] < Cache-Control: max-age=604800
[fetch] < Content-Type: text/html; charset=UTF-8
[fetch] < Date: Sun, 21 Jul 2024 02:41:14 GMT
[fetch] < Etag: "3147526947+gzip"
[fetch] < Expires: Sun, 28 Jul 2024 02:41:14 GMT
[fetch] < Last-Modified: Thu, 17 Oct 2019 07:18:26 GMT
[fetch] < Server: ECAcc (sac/254F)
[fetch] < Vary: Accept-Encoding
[fetch] < X-Cache: HIT
[fetch] < Content-Length: 648
```

--------------------------------

### S3 Client Instantiation

Source: https://bun.sh/docs/runtime/s3

Demonstrates how to create an S3Client object with explicit credentials, overriding environment variable defaults. This is useful when managing multiple buckets or specific access configurations.

```APIDOC
## S3Client Instantiation

### Description
Instantiate a `S3Client` object to explicitly set credentials when not using environment variables or when managing multiple buckets.

### Method
`new Bun.S3Client(credentials)`

### Parameters
#### Request Body
- **accessKeyId** (string) - Required - The access key ID for authentication.
- **secretAccessKey** (string) - Required - The secret access key for authentication.
- **bucket** (string) - Required - The name of the S3 bucket to interact with.
- **sessionToken** (string) - Optional - The session token for temporary credentials.
- **endpoint** (string) - Optional - The S3 endpoint URL (e.g., for custom S3-compatible services like Cloudflare R2 or MinIO).

### Request Example
```typescript
const client = new Bun.S3Client({
  accessKeyId: "your-access-key",
  secretAccessKey: "your-secret-key",
  bucket: "my-bucket",
  // sessionToken: "...",
  endpoint: "https://s3.us-east-1.amazonaws.com",
  // endpoint: "https://<account-id>.r2.cloudflarestorage.com", // Cloudflare R2
  // endpoint: "http://localhost:9000", // MinIO
});
```

### Response
#### Success Response (200)
An instance of `S3Client` is returned, ready for use.

#### Response Example
```typescript
// client object is now ready for operations
```
```

--------------------------------

### Write a File Incrementally

Source: https://bun.sh/docs/guides

Allows writing data to a file in chunks or incrementally. This is useful for large files or streaming data where the entire content is not available at once.

```javascript
import { FileSink } from "bun";

async function writeIncrementally(filePath, chunks) {
  const file = new FileSink(filePath);
  try {
    for (const chunk of chunks) {
      await file.write(chunk);
    }
    await file.end();
    console.log(`File '${filePath}' written incrementally.`);
  } catch (error) {
    console.error(`Error writing file incrementally to '${filePath}':`, error);
  }
}

const dataChunks = ["Part 1\n", "Part 2\n", "Part 3\n"];
writeIncrementally("incremental.txt", dataChunks);
```

--------------------------------

### Implement onBeforeParse Hook in Rust

Source: https://bun.sh/docs/bundler/plugins

Demonstrates how to implement the `onBeforeParse` lifecycle hook in a Rust native plugin. This example replaces all occurrences of 'foo' with 'bar' in the input source code using the `bun_native_plugin::bun` macro.

```rust
use bun_native_plugin::{define_bun_plugin, OnBeforeParse, bun, Result, anyhow, BunLoader};
use napi_derive::napi;

/// Define the plugin and its name
define_bun_plugin!("replace-foo-with-bar");

/// Here we'll implement `onBeforeParse` with code that replaces all occurrences of
/// `foo` with `bar`.
///
/// We use the #[bun] macro to generate some of the boilerplate code.
///
/// The argument of the function (`handle: &mut OnBeforeParse`) tells
/// the macro that this function implements the `onBeforeParse` hook.
#[bun] 
pub fn replace_foo_with_bar(handle: &mut OnBeforeParse) -> Result<()> {
  // Fetch the input source code.
  let input_source_code = handle.input_source_code()?;

  // Get the Loader for the file
  let loader = handle.output_loader();

  let output_source_code = input_source_code.replace("foo", "bar");

  handle.set_output_source_code(output_source_code, BunLoader::BUN_LOADER_JSX);

  Ok(())
}
```

--------------------------------

### Configure Bun S3Client for Google Cloud Storage

Source: https://bun.sh/docs/runtime/s3

Provides an example of configuring Bun's `S3Client` to work with Google Cloud Storage. This is achieved by setting the `endpoint` option to 'https://storage.googleapis.com' during client initialization.

```typescript
import { S3Client } from "bun";

// Google Cloud Storage
const gcs = new S3Client({
  accessKeyId: "access-key",
  secretAccessKey: "secret-key",
  bucket: "my-bucket",
  endpoint: "https://storage.googleapis.com",
});
```

--------------------------------

### Build Vite App for Production with Bun

Source: https://bun.sh/docs/guides/ecosystem/vite

Generate a production build of your Vite application using `bunx --bun vite build`. This command optimizes assets and prepares the application for deployment.

```sh
bunx --bun vite build
```

--------------------------------

### Glob Pattern '[a-z]' and Negation Example (TypeScript)

Source: https://bun.sh/docs/runtime/glob

Illustrates character ranges and negation operators (`^` or `!`) within character sets for Bun's Glob patterns, allowing for more complex matching.

```typescript
const glob = new Glob("ba[a-z][0-9][^4-9].ts");
glob.match("bar01.ts"); // => true
glob.match("baz83.ts"); // => true
glob.match("bat22.ts"); // => true
glob.match("bat24.ts"); // => false
glob.match("ba0a8.ts"); // => false
```

--------------------------------

### Glob Pattern '\' Escape Example (TypeScript)

Source: https://bun.sh/docs/runtime/glob

Illustrates the use of the backslash `\` to escape special glob characters in Bun, allowing them to be matched literally.

```typescript
const glob = new Glob("\\!index.ts");
glob.match("!index.ts"); // => true
glob.match("index.ts"); // => false
```

--------------------------------

### Bun Build with Bytecode, Minification, and Sourcemaps

Source: https://bun.sh/docs/bundler/bytecode

This command combines bytecode caching with minification and sourcemap generation for optimized standalone executables. Minification reduces code size before bytecode generation, while sourcemaps preserve error reporting by linking errors to the original source code. This setup offers reduced file size, faster startup, and accurate debugging.

```bash
bun build --compile --bytecode --minify --sourcemap ./cli.ts --outfile=mycli
```

--------------------------------

### Spawn a child process with Bun.spawn()

Source: https://bun.sh/docs/guides/process/spawn

Demonstrates the basic usage of Bun.spawn() to execute a command and wait for its completion. This is the simplest way to spawn a child process.

```typescript
const proc = Bun.spawn(["echo", "hello"]);

// await completion
await proc.exited;
```

--------------------------------

### Get Bun CLI Version

Source: https://bun.sh/docs/runtime/utils

Retrieves the version of the currently running `bun` CLI as a string. This is useful for checking compatibility or logging.

```typescript
Bun.version;
// => "1.3.3"
```

--------------------------------

### Delete a File

Source: https://bun.sh/docs/guides

Removes a specified file from the file system. This operation is asynchronous and returns a Promise that resolves when the file is deleted.

```javascript
import { unlink } from "bun";

async function deleteFile(filePath) {
  try {
    await unlink(filePath);
    console.log(`File '${filePath}' deleted successfully.`);
  } catch (error) {
    console.error(`Error deleting file '${filePath}':`, error);
  }
}

deleteFile("path/to/your/file.txt");
```

--------------------------------

### Verify Bun Build

Source: https://bun.sh/docs/project/contributing

Prints the version number of the compiled debug build of Bun. This command is used to confirm that the build process was successful. The output should be 'x.y.z_debug'.

```bash
build/debug/bun-debug --version
```

--------------------------------

### Dockerfile for Containerizing a Bun Application

Source: https://bun.sh/docs/guides/ecosystem/docker

This Dockerfile defines the steps to build a container image for a Bun application. It uses multi-stage builds to optimize the final image size by separating build dependencies from runtime dependencies. It installs dependencies, copies project files, runs tests, builds the application, and prepares a production-ready artifact.

```docker
# use the official Bun image
# see all versions at https://hub.docker.com/r/oven/bun/tags
FROM oven/bun:1 AS base
WORKDIR /usr/src/app

# install dependencies into temp directory
# this will cache them and speed up future builds
FROM base AS install
RUN mkdir -p /temp/dev
COPY package.json bun.lock /temp/dev/
RUN cd /temp/dev && bun install --frozen-lockfile

# install with --production (exclude devDependencies)
RUN mkdir -p /temp/prod
COPY package.json bun.lock /temp/prod/
RUN cd /temp/prod && bun install --frozen-lockfile --production

# copy node_modules from temp directory
# then copy all (non-ignored) project files into the image
FROM base AS prerelease
COPY --from=install /temp/dev/node_modules node_modules
COPY . .

# [optional] tests & build
ENV NODE_ENV=production
RUN bun test
RUN bun run build

# copy production dependencies and source code into final image
FROM base AS release
COPY --from=install /temp/prod/node_modules node_modules
COPY --from=prerelease /usr/src/app/index.ts .
COPY --from=prerelease /usr/src/app/package.json .

```

--------------------------------

### HTML Structure for Single Page Application (SPA)

Source: https://bun.sh/docs/bundler/html-static

An example HTML file structure suitable for a Single Page Application (SPA). Bun will use this as a fallback route for all paths, allowing client-side routing.

```html
<!doctype html>
<html>
  <head>
    <title>My SPA</title>
    <script src="./app.tsx" type="module"></script>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
```

--------------------------------

### Copy a File to Another Location

Source: https://bun.sh/docs/guides

Duplicates an existing file and saves it to a new location. This operation preserves the original file and creates an identical copy.

```javascript
import { cp } from "bun";

async function copyFile(sourcePath, destinationPath) {
  try {
    await cp(sourcePath, destinationPath);
    console.log(`File copied from '${sourcePath}' to '${destinationPath}' successfully.`);
  } catch (error) {
    console.error(`Error copying file from '${sourcePath}' to '${destinationPath}':`, error);
  }
}

copyFile("source.txt", "destination.txt");
```

--------------------------------

### Run Prisma Script with Bun

Source: https://bun.sh/docs/guides/ecosystem/prisma

This section shows how to execute a TypeScript script that utilizes Prisma for database operations using the Bun runtime. It includes the command to run the script and the expected output after multiple executions, illustrating the creation of new users and the incrementing user count.

```bash
bun run index.ts
```

```txt
Created john-0.12802932895402364@example.com
There are 1 users in the database.
```

```bash
bun run index.ts
```

```txt
Created john-0.8671308799782803@example.com
There are 2 users in the database.
```

```bash
bun run index.ts
```

```txt
Created john-0.4465968383115295@example.com
There are 3 users in the database.
```

--------------------------------

### Build Remix App with Bun

Source: https://bun.sh/docs/guides/ecosystem/remix

Builds the Remix application for production using Bun. This command bundles the application assets and prepares it for deployment.

```sh
bun run build
```

--------------------------------

### Using fetch() with Custom Proxy Headers

Source: https://bun.sh/docs/guides/http/proxy

Shows how to configure custom headers for the proxy server using the object format for the `proxy` option in fetch().

```APIDOC
## POST /fetch-with-custom-proxy-headers

### Description
Sends an HTTP GET request to a target URL through a specified proxy server, including custom headers for the proxy.

### Method
GET

### Endpoint
/fetch-with-custom-proxy-headers

### Parameters
#### Query Parameters
- **targetUrl** (string) - Required - The URL of the resource to fetch.
- **proxyUrl** (string) - Required - The URL of the proxy server (e.g., `https://proxy.example.com:8080`).

#### Request Body
- **proxyHeaders** (object) - Optional - A key-value object containing custom headers to send to the proxy server (e.g., `{"Proxy-Authorization": "Bearer my-token"}`).

### Request Example
```bash
curl -X POST "https://example.com/fetch-with-custom-proxy-headers?targetUrl=https://example.com&proxyUrl=https://proxy.example.com:8080" \
     -H "Content-Type: application/json" \
     -d '{
       "proxyHeaders": {
         "Proxy-Authorization": "Bearer my-token",
         "X-Proxy-Region": "us-east-1"
       }
     }'
```

### Response
#### Success Response (200)
- **body** (string) - The response body from the target URL.

#### Response Example
```json
{
  "body": "<html><body>Hello, World!</body></html>"
}
```
```

--------------------------------

### CommonJS Module Import and Export (Bun)

Source: https://bun.sh/docs/runtime/module-resolution

Provides an example of using CommonJS module syntax (`require` and `exports`) in JavaScript files, demonstrating compatibility with the Bun runtime.

```javascript
const { hello } = require("./hello");

hello();
```

```javascript
function hello() {
  console.log("Hello world!");
}

exports.hello = hello;
```

--------------------------------

### Create a Test Script with Prisma and Bun

Source: https://bun.sh/docs/guides/ecosystem/prisma

A TypeScript script that demonstrates creating a new user using the initialized Prisma Client and then counting the total number of users in the database.

```ts
import { prisma } from "./prisma/db";

// create a new user
await prisma.user.create({
  data: {

```

--------------------------------

### Initialize New Railway Project via CLI

Source: https://bun.sh/docs/guides/deployment/railway

Initializes a new project within the Railway platform using the CLI. This command sets up the necessary configuration for a new deployment.

```bash
railway init
```

--------------------------------

### DB Query - Get Single Result

Source: https://bun.sh/docs/runtime/sqlite

Use `.get()` to execute a query and retrieve the first result as an object. Returns `undefined` if no rows are found.

```APIDOC
## GET /query

### Description
Executes a SQL query and returns the first result row as an object. If no rows are returned, `undefined` is returned.

### Method
GET (or equivalent for query execution)

### Endpoint
`/query` (conceptual endpoint for query execution)

### Parameters
#### Query Parameters
- **sql** (string) - Required - The SQL query to execute.
- **params** (object) - Optional - An object containing parameters to bind to the query.

### Request Example
```ts
const query = db.query(`select $message;`);
query.get({ $message: "Hello world" });
```

### Response
#### Success Response (200)
- **object** (object) - The first row of the query result, or `undefined` if no rows are found.

#### Response Example
```json
{ "$message": "Hello world" }
```
```

--------------------------------

### Environment-Based Configuration (TypeScript)

Source: https://bun.sh/docs/bundler/fullstack

This TypeScript code defines application configuration based on environment variables. It handles development mode, server port, database URL, and CORS origins, providing a flexible setup for different deployment environments.

```typescript
export const config = {
  development: process.env.NODE_ENV !== "production",
  port: process.env.PORT || 3000,
  database: {
    url: process.env.DATABASE_URL || "./dev.db",
  },
  cors: {
    origin: process.env.CORS_ORIGIN || "*",
  },
};

```

--------------------------------

### Bun CLI Commands Overview

Source: https://bun.sh/docs/index

A collection of common commands for the Bun command-line interface, demonstrating its capabilities as a script runner, package manager, bundler, test runner, and package executor.

```bash
bun run start
bun install <pkg>
bun build ./index.tsx
bun test
bunx cowsay 'Hello, world!'
```

--------------------------------

### Bun.JSONL.parseChunk with Byte Offsets

Source: https://bun.sh/docs/runtime/jsonl

Demonstrates how to use `parseChunk` with `Uint8Array` inputs, specifying start and end byte offsets for parsing. It also shows how the `read` property can be used for streaming.

```APIDOC
## POST /parseChunk

### Description
Parses a chunk of JSON Lines data from a `Uint8Array`, supporting optional start and end byte offsets. Returns parsed values and the number of bytes read.

### Method
POST

### Endpoint
`/parseChunk`

### Parameters
#### Query Parameters
- **start** (number) - Optional - The starting byte offset to begin parsing.
- **end** (number) - Optional - The ending byte offset to stop parsing.

#### Request Body
- **buffer** (Uint8Array) - Required - The buffer containing JSON Lines data.

### Request Example
```json
{
  "buffer": "<Uint8Array>",
  "start": 8,
  "end": 24
}
```

### Response
#### Success Response (200)
- **values** (Array<any>) - An array of successfully parsed JSON values.
- **read** (number) - The total number of bytes read from the buffer.
- **error** (Error) - An error object if parsing failed, otherwise null.

#### Response Example
```json
{
  "values": [
    { "b": 2 },
    { "c": 3 }
  ],
  "read": 24,
  "error": null
}
```
```

--------------------------------

### Global Configuration & Context

Source: https://bun.sh/docs/runtime

These parameters define global configuration settings and context for Bun, including environment variable loading, working directory, and configuration file paths.

```APIDOC
## Global Configuration & Context

### Description
Configure global settings and context for Bun.

### Method
N/A (Configuration Flags)

### Endpoint
N/A (Command-line flags)

### Parameters
#### Path Parameters
None

#### Query Parameters
None

#### Request Body
None

### Parameters

- **--env-file** (string) - Load environment variables from the specified file(s)
- **--cwd** (string) - Absolute path to resolve files & entry points from. This just changes the process' cwd
- **--config** (string, alias: -c) - Specify path to Bun config file. Default `$cwd/bunfig.toml`

### Request Example
```bash
bun --env-file .env --config bunfig.local.toml
```

### Response
#### Success Response (N/A)
N/A

#### Response Example
N/A
```

--------------------------------

### Get Bun Version (TypeScript)

Source: https://bun.sh/docs/guides/util/version

Retrieves the current version of the Bun runtime in semantic versioning (semver) format. This is a read-only property.

```typescript
Bun.version;
```

--------------------------------

### Serve Partial File Content using slice() with Bun.serve()

Source: https://bun.sh/docs/runtime/http/routing

Demonstrates how to serve a portion of a file using the `slice()` method on a Bun.file() object. This is useful for handling range requests (e.g., for video or audio files). Bun automatically sets the `Content-Range` and `Content-Length` headers when using `slice()`.

```typescript
Bun.serve({
  fetch(req) {
    // parse `Range` header
    const [start = 0, end = Infinity] = req.headers
      .get("Range") // Range: bytes=0-100
      .split("=") // ["Range: bytes", "0-100"]
      .at(-1) // "0-100"
      .split("-") // ["0", "100"]
      .map(Number); // [0, 100]

    // return a slice of the file
    const bigFile = Bun.file("./big-video.mp4");
    return new Response(bigFile.slice(start, end));
  },
});
```

--------------------------------

### Configure Markdown Parsing with React

Source: https://bun.sh/docs/runtime/markdown

This example shows how to render Markdown to React elements while applying custom parser options. The `Bun.markdown.react` function accepts a third argument for configuration. Here, `headings: { ids: true }` enables ID generation for headings, and `autolinks: true` automatically converts URLs into clickable links.

```tsx
const el = Bun.markdown.react("## Hello World", undefined, {
  headings: { ids: true },
  autolinks: true,
});
```

--------------------------------

### Get RGB Channels as Object ({rgb})

Source: https://bun.sh/docs/runtime/color

Outputs an object containing the red, green, and blue channels of a color. This format does not include the alpha channel.

```typescript
Bun.color("hsl(0, 0%, 50%)", "{rgb}"); // { r: 128, g: 128, b: 128 }
Bun.color("red", "{rgb}"); // { r: 255, g: 0, b: 0 }
Bun.color(0xff0000, "{rgb}"); // { r: 255, g: 0, b: 0 }
Bun.color({ r: 255, g: 0, b: 0 }, "{rgb}"); // { r: 255, g: 0, b: 0 }
Bun.color([255, 0, 0], "{rgb}"); // { r: 255, g: 0, b: 0 }
```

--------------------------------

### DB Query - Get All Values

Source: https://bun.sh/docs/runtime/sqlite

Use `.values()` to execute a query and retrieve all results as an array of arrays, where each inner array represents a row's values.

```APIDOC
## GET /query/values

### Description
Executes a SQL query and returns all results as an array of arrays. Each inner array contains the values of a single row.

### Method
GET (or equivalent for query execution)

### Endpoint
`/query/values` (conceptual endpoint for query execution)

### Parameters
#### Query Parameters
- **sql** (string) - Required - The SQL query to execute.
- **params** (object) - Optional - An object containing parameters to bind to the query.

### Request Example
```ts
const query = db.query(`select $message;`);
query.values({ $message: "Hello world" });
```

### Response
#### Success Response (200)
- **array** (array) - An array where each element is an array representing a row of values from the query result.

#### Response Example
```json
[
  [ "Iron Man", 2008 ],
  [ "The Avengers", 2012 ],
  [ "Ant-Man: Quantumania", 2023 ]
]
```
```

--------------------------------

### MySQL: Use Specific Syntax

Source: https://bun.sh/docs/runtime/sql

Illustrates the use of MySQL-specific SQL syntax, such as `SET`, `SHOW TABLES`, `DESCRIBE`, and `EXPLAIN`, within the Bun SQL API. This demonstrates the compatibility of the API with MySQL's unique features.

```ts
// MySQL-specific syntax works fine
await mysql`SET @user_id = ${userId}`;
await mysql`SHOW TABLES`;
await mysql`DESCRIBE users`;
await mysql`EXPLAIN SELECT * FROM users WHERE id = ${id}`;
```

--------------------------------

### Write to Standard Output (stdout)

Source: https://bun.sh/docs/guides

Writes data directly to the standard output stream. This is commonly used for displaying program output to the console or piping it to other commands.

```javascript
console.log("This message goes to stdout.");
process.stdout.write("Another message to stdout.\n");
```

--------------------------------

### Bun Build API: Entrypoints

Source: https://bun.sh/docs/bundler

Shows how to specify entrypoints for the Bun build process using the JavaScript API. Each entrypoint generates a separate bundle. The result object contains success status, output artifacts, and build logs.

```typescript
const result = await Bun.build({
  entrypoints: ["./index.ts"],
});
// => { success: boolean, outputs: BuildArtifact[], logs: BuildMessage[] }
```

--------------------------------

### Bun Remove CLI Usage and Options

Source: https://bun.sh/docs/pm/cli/remove

Provides an overview of the command-line interface for 'bun remove', including its core syntax and various flags for controlling its behavior. These options allow for fine-grained management of dependency removal, lockfile updates, and installation processes.

```bash
bun remove <package>
```

--------------------------------

### Example Svelte Component

Source: https://bun.sh/docs/guides/test/svelte-test

A simple Svelte component that displays a counter and an increment button. This component can be imported and tested using the configured Bun loader.

```html
<script>
  export let initialCount = 0;
  let count = initialCount;
</script>

<button on:click="{() => (count += 1)}">+1</button>
```

--------------------------------

### Configure Lockfile Generation (TOML)

Source: https://bun.sh/docs/runtime/bunfig

Controls whether `bun install` generates a binary `bun.lockb` or a text-based `bun.lock` file when no lockfile is present. Defaults to `true` (text-based) since Bun v1.2.

```toml
[install]
saveTextLockfile = false
```

--------------------------------

### List available package.json scripts with Bun

Source: https://bun.sh/docs/runtime

To view all the scripts defined in your `package.json` file, simply run `bun run` without any arguments. This will display a list of script names and their corresponding commands.

```bash
bun run
```

--------------------------------

### Import aliased npm package in TypeScript using Bun

Source: https://bun.sh/docs/guides/install/npm-alias

Demonstrates how to import a previously aliased npm package in a TypeScript file. This allows you to use the custom name defined during installation.

```typescript
import { z } from "my-custom-name";

z.string();
```

--------------------------------

### Check if Current File is Entrypoint

Source: https://bun.sh/docs/guides

Determines whether the currently executing script is the main entry point of the Bun application. This is useful for conditional logic based on how the script is run.

```javascript
import { isMainThread } from "bun";

if (isMainThread) {
  console.log("This is the main entrypoint.");
} else {
  console.log("This is a worker thread or imported module.");
}
```

--------------------------------

### Create and Count Users with Prisma and Bun

Source: https://bun.sh/docs/guides/ecosystem/prisma

This snippet demonstrates how to create a new user with a dynamically generated email address and then count the total number of users in the database using Prisma Client with Bun. It assumes Prisma is already set up and connected to a database.

```typescript
await prisma.user.create({
        data: {
          name: "John Dough",
          email: `john-${Math.random()}@example.com`,
        },
      });

      // count the number of users
      const count = await prisma.user.count();
      console.log(`There are ${count} users in the database.`);
```

--------------------------------

### Upgrade Bun to Latest Stable Version

Source: https://bun.sh/docs/guides/util/upgrade

Executes the built-in command to upgrade Bun to the most recent stable release. This replaces the current installation with the latest features and bug fixes.

```bash
bun upgrade
```

--------------------------------

### Immediate Worker Error Handling (JavaScript)

Source: https://bun.sh/docs/runtime/workers

Shows an example of how Bun handles non-existent worker files. If the specified worker script cannot be found, an error is thrown immediately when the Worker is instantiated.

```javascript
const worker = new Worker("/not-found.js");
// throws an error immediately
```

--------------------------------

### Initialize Prisma Client with LibSQL Adapter in TypeScript

Source: https://bun.sh/docs/guides/ecosystem/prisma

Initializes the Prisma Client with the LibSQL adapter in a TypeScript file. This sets up the connection to the database using environment variables for the URL.

```ts
import { PrismaClient } from "./generated/client";
import { PrismaLibSQL } from "@prisma/adapter-libsql";

const adapter = new PrismaLibSQL({ url: process.env.DATABASE_URL || "" });
export const prisma = new PrismaClient({ adapter });
```

--------------------------------

### Get Resource Usage of Exited Process

Source: https://bun.sh/docs/runtime/child-process

After a spawned process has exited, retrieve its resource usage information using the `resourceUsage()` method. This includes maximum resident set size (memory) and CPU time.

```typescript
const proc = Bun.spawn(["bun", "--version"]);
await proc.exited;

const usage = proc.resourceUsage();
console.log(`Max memory used: ${usage.maxRSS} bytes`);
console.log(`CPU time (user): ${usage.cpuTime.user} µs`);
console.log(`CPU time (system): ${usage.cpuTime.system} µs`);
```

--------------------------------

### Set Contextual Data on WebSocket

Source: https://bun.sh/docs/guides

Allows associating custom data with individual WebSocket connections. This context can be accessed and modified throughout the connection's lifecycle.

```javascript
Bun.serve({
  fetch(req) {
    if (req.url.endsWith("/ws")) {
      const websocket = new WebSocket(req);
      // Set contextual data
      websocket.data.userId = Math.random().toString(36).substring(7);
      console.log(`Client connected with ID: ${websocket.data.userId}`);
      return websocket;
    }
    return new Response("Hello World!");
  },
});

console.log("WebSocket server with context running on port 3000");
```

--------------------------------

### Configure SQLite Behavior with PRAGMA Statements

Source: https://bun.sh/docs/runtime/sql

Shows how to use PRAGMA statements to configure SQLite behavior within Bun.js. Examples include enabling foreign keys, setting the journal mode to WAL for improved concurrency, and checking database integrity.

```typescript
const sqlite = new SQL("sqlite://app.db");

// Enable foreign keys
await sqlite`PRAGMA foreign_keys = ON`;

// Set journal mode to WAL for better concurrency
await sqlite`PRAGMA journal_mode = WAL`;

// Check integrity
const integrity = await sqlite`PRAGMA integrity_check`;
```

--------------------------------

### SQLite Connection

Source: https://bun.sh/docs/runtime/sql

Demonstrates various ways to establish a connection to a SQLite database using the `SQL` constructor in Bun.SQL.

```APIDOC
## POST /websites/bun_sh

### Description
Connect to SQLite databases using different connection string formats and options.

### Method
POST

### Endpoint
/websites/bun_sh

### Parameters
#### Path Parameters
None

#### Query Parameters
None

#### Request Body
- **connectionString** (string) - Required - The connection string for the SQLite database. Can be a filename, a path, or a URL.
- **options** (object) - Optional - Additional options for the connection, such as `adapter`, `filename`, `readonly`, `create`, `readwrite`, `strict`, `safeIntegers`.

### Request Example
```json
{
  "connectionString": "sqlite://myapp.db",
  "options": {
    "adapter": "sqlite",
    "filename": "./data/app.db",
    "readonly": false,
    "create": true
  }
}
```

### Response
#### Success Response (200)
- **message** (string) - A success message indicating the connection was established.

#### Response Example
```json
{
  "message": "Successfully connected to SQLite database."
}
```
```

--------------------------------

### Compress and Decompress Data with DEFLATE

Source: https://bun.sh/docs/guides

Provides functionality to compress and decompress data using the DEFLATE algorithm. This is essential for reducing data size for storage or transmission.

```javascript
import { deflate, inflate } from "bun";

const originalData = new TextEncoder().encode("Hello, Bun!");
const compressedData = deflate(originalData);
const decompressedData = inflate(compressedData);

console.log("Original: ", new TextDecoder().decode(originalData));
console.log("Compressed length: ", compressedData.byteLength);
console.log("Decompressed: ", new TextDecoder().decode(decompressedData));
```

--------------------------------

### Create Bun S3 Client with Explicit Credentials

Source: https://bun.sh/docs/runtime/s3

Demonstrates how to create an S3Client instance by explicitly providing credentials and configuration options. This is useful when not relying on environment variables or when managing multiple S3 buckets. It shows how to set access keys, bucket name, and endpoint for different S3-compatible storage services.

```typescript
import { S3Client } from "bun";

const client = new S3Client({
  accessKeyId: "your-access-key",
  secretAccessKey: "your-secret-key",
  bucket: "my-bucket",
  // sessionToken: "..."
  endpoint: "https://s3.us-east-1.amazonaws.com",
  // endpoint: "https://<account-id>.r2.cloudflarestorage.com", // Cloudflare R2
  // endpoint: "http://localhost:9000", // MinIO
});

// Write using a Response
await file.write(new Response("Hello World!"));

// Presign a URL
const url = file.presign({
  expiresIn: 60 * 60 * 24, // 1 day
  acl: "public-read",
});

// Delete the file
await file.delete();
```

--------------------------------

### Bun REST API with SQLite

Source: https://bun.sh/docs/runtime/http/server

A practical example of a REST API built with Bun.js, utilizing its built-in router and `bun:sqlite` for database operations. It supports listing posts, creating new posts, and retrieving posts by ID.

```typescript
import type { Post } from "./types.ts";
import { Database } from "bun:sqlite";

const db = new Database("posts.db");
db.exec(`
    CREATE TABLE IF NOT EXISTS posts (
      id TEXT PRIMARY KEY,
      title TEXT NOT NULL,
      content TEXT NOT NULL,
      created_at TEXT NOT NULL
    )
  `);

Bun.serve({
  routes: {
    // List posts
    "/api/posts": {
      GET: () => {
        const posts = db.query("SELECT * FROM posts").all();
        return Response.json(posts);
      },

      // Create post
      POST: async req => {
        const post: Omit<Post, "id" | "created_at"> = await req.json();
        const id = crypto.randomUUID();

        db.query(
          `INSERT INTO posts (id, title, content, created_at)` +
          ` VALUES (?, ?, ?, ?)`,
        ).run(id, post.title, post.content, new Date().toISOString());

        return Response.json({ id, ...post }, { status: 201 });
      },
    },

    // Get post by ID
    "/api/posts/:id": req => {
      const post = db.query("SELECT * FROM posts WHERE id = ?").get(req.params.id);

      if (!post) {
        return new Response("Not Found", { status: 404 });
      }

      return Response.json(post);
    },
  },

  error(error) {
    console.error(error);
    return new Response("Internal Server Error", { status: 500 });
  },
});
```

--------------------------------

### Write a Blob to a File

Source: https://bun.sh/docs/guides

Saves the content of a Blob object to a specified file path. Blobs are often used for representing file data or binary data.

```javascript
import { writeFile } from "bun";

async function writeBlobToFile(blob, filePath) {
  try {
    await writeFile(filePath, blob);
    console.log(`Blob written to '${filePath}' successfully.`);
  } catch (error) {
    console.error(`Error writing blob to file '${filePath}':`, error);
  }
}

const myBlob = new Blob(["Hello from Blob!\n"], { type: "text/plain" });
writeBlobToFile(myBlob, "output.txt");
```

--------------------------------

### File Control Operations

Source: https://bun.sh/docs/runtime/sqlite

Explains how to use the `.fileControl()` method to interact with SQLite's advanced file control API, providing an example for managing WAL mode persistence.

```APIDOC
## POST /websites/bun_sh/fileControl

### Description
Provides access to the advanced `sqlite3_file_control` API. This method allows for fine-grained control over database file operations.

### Method
POST

### Endpoint
`/websites/bun_sh/fileControl`

### Parameters
#### Path Parameters
None

#### Query Parameters
None

#### Request Body
- **cmd** (number) - Required - The command code for the file control operation (e.g., `constants.SQLITE_FCNTL_PERSIST_WAL`).
- **value** (any) - Optional - The value associated with the command. Can be a number, TypedArray, undefined, or null.

### Request Example
```json
{
  "cmd": 1001, 
  "value": 0 
}
```

### Response
#### Success Response (200)
Indicates that the file control operation was executed successfully.

#### Response Example
```json
{
  "message": "File control operation successful"
}
```

### Notes
Refer to the SQLite documentation for a comprehensive list of `sqlite3_file_control` commands and their corresponding values.
```

--------------------------------

### WebSocket Server Implementation

Source: https://bun.sh/docs/runtime/http/websockets

Details on how to implement a WebSocket server using Bun's `serve` function, including configuration options for WebSocket behavior.

```APIDOC
## WebSocket Server Implementation

### Description
Implement a WebSocket server using `Bun.serve`. This function accepts a configuration object that includes a `websocket` property for defining server-side WebSocket logic.

### Method
`Bun.serve(params)`

### Endpoint
Server listens on a specified port.

### Parameters
#### Path Parameters
None

#### Query Parameters
None

#### Request Body
`params` object:
- **fetch** (function) - Handles incoming HTTP requests. Must return a `Response` or `Promise<Response>`.
- **websocket** (object, optional) - Configuration for WebSocket handling:
  - **message** (function) - Callback for received messages. `(ws: ServerWebSocket, message: string | ArrayBuffer | Uint8Array) => void`
  - **open** (function, optional) - Callback when a client connects. `(ws: ServerWebSocket) => void`
  - **close** (function, optional) - Callback when a client disconnects. `(ws: ServerWebSocket, code: number, reason: string) => void`
  - **error** (function, optional) - Callback for errors. `(ws: ServerWebSocket, error: Error) => void`
  - **drain** (function, optional) - Callback when the send buffer is drained. `(ws: ServerWebSocket) => void`
  - **maxPayloadLength** (number, optional) - Maximum message size in bytes. Default: `16 * 1024 * 1024` (16MB).
  - **idleTimeout** (number, optional) - Connection idle timeout in seconds. Default: `120`.
  - **backpressureLimit** (number, optional) - Backpressure limit in bytes. Default: `1024 * 1024` (1MB).
  - **closeOnBackpressureLimit** (boolean, optional) - Whether to close the connection when `backpressureLimit` is reached. Default: `false`.
  - **sendPings** (boolean, optional) - Whether to send pings automatically. Default: `true`.
  - **publishToSelf** (boolean, optional) - Whether the server should receive its own published messages. Default: `false`.
  - **perMessageDeflate** (boolean | object, optional) - Configuration for per-message deflate compression.

### Request Example
```ts
const server = Bun.serve({
  fetch(req) {
    return new Response("Hello world!");
  },
  websocket: {
    open(ws) {
      console.log("Client connected");
    },
    message(ws, message) {
      console.log(`Received: ${message}`);
      ws.send(`Echo: ${message}`);
    },
    close(ws, code, reason) {
      console.log("Client disconnected", code, reason);
    },
    maxPayloadLength: 1024 * 1024, // 1MB
  },
});

console.log(`Listening on ws://${server.hostname}:${server.port}`);
```

### Response
#### Success Response (200)
Server is running and listening for connections.

#### Response Example
None
```

--------------------------------

### Bun CLI Build Command

Source: https://bun.sh/docs/bundler

The `bun build` command provides a command-line interface for compiling project assets. It accepts entrypoints, an output directory, and an optional root directory.

```APIDOC
## CLI Build Command

### Description
Builds project entrypoints using the Bun CLI.

### Method
CLI Command

### Endpoint
bun build [entrypoints...] --outdir [outdir] [--root [root]]

### Parameters
#### Path Parameters
- **entrypoints** (string) - Required - One or more file paths to use as entrypoints.

#### Query Parameters
- **--outdir** (string) - Required - The directory to write the output bundles to.
- **--root** (string) - Optional - The root directory of the project. If unspecified, it is computed to be the first common ancestor of all entrypoint files.

### Request Example
```bash
bun build ./pages/a.tsx ./pages/b.tsx --outdir ./out --root .
```

### Response
#### Success Response (0)
- **Output**: The command will print the paths of the generated output files to the console upon successful completion.

#### Response Example
```
./out/a.js
./out/b.js
```
```

--------------------------------

### Configure Nitro for Vercel Runtime (TypeScript)

Source: https://bun.sh/docs/guides/ecosystem/tanstack-start

Adjusts the vite.config.ts file to configure Nitro for Vercel deployments. It specifies the Bun runtime version for Vercel functions and omits the 'bun' preset to avoid conflicts.

```typescript
export default defineConfig({
  plugins: [
    tanstackStart(),
    nitro({
      preset: "bun", // [!code --]
      vercel: { // [!code ++]
        functions: { // [!code ++]
          runtime: "bun1.x", // [!code ++]
        },
      },
    }),
  ],
});
```

--------------------------------

### Retrieve Data as Uint8Array from ArrayBufferSink

Source: https://bun.sh/docs/runtime/streams

Shows how to configure Bun.ArrayBufferSink to return a Uint8Array instead of an ArrayBuffer. This is achieved by passing `asUint8Array: true` to the `start` method.

```typescript
const sink = new Bun.ArrayBufferSink();
sink.start({
  asUint8Array: true, // [!code ++]
});

sink.write("h");
sink.write("e");
sink.write("l");
sink.write("l");
sink.write("o");

sink.end();
// Uint8Array(5) [ 104, 101, 108, 108, 111 ]
```

--------------------------------

### Execute Multiple SQL Statements with .simple()

Source: https://bun.sh/docs/runtime/sql

The `sql.simple()` method allows executing multiple SQL statements within a single query, which is useful for database migrations or setup scripts. Note that simple queries do not support parameters.

```typescript
// Multiple statements in one query
await sql`
  SELECT 1;
  SELECT 2;
`.simple();
```

--------------------------------

### Configure Package Auto-Install Behavior (TOML)

Source: https://bun.sh/docs/runtime/bunfig

Manages Bun's package auto-installation. The default is `"auto"`, which installs dependencies on the fly if `node_modules` is not found. Other options include `"force"`, `"disable"`, and `"fallback"`.

```toml
[install]
auto = "auto"
```

--------------------------------

### Execute Prepared Statement and Get All Results with Bun

Source: https://bun.sh/docs/runtime/sqlite

Demonstrates using the `.all()` method on a prepared SQLite statement in Bun to execute the query and retrieve all results as an array of objects. This method internally calls `sqlite3_reset` and `sqlite3_step`.

```typescript
const query = db.query(`select $message;`);
query.all({ $message: "Hello world" });
```

--------------------------------

### Send HTTP Request with Request Object using Bun Fetch

Source: https://bun.sh/docs/runtime/networking/fetch

Illustrates sending an HTTP request by constructing a `Request` object first, which allows for more detailed configuration before sending. This example shows a POST request with a body.

```typescript
const request = new Request("http://example.com", {
  method: "POST",
  body: "Hello, world!",
});

const response = await fetch(request);
```

--------------------------------

### Create Composite Glob Pattern (Bun)

Source: https://bun.sh/docs/guides/ecosystem/tanstack-start

Constructs a Bun.Glob object from environment variables specifying include patterns. If no patterns are found, it defaults to matching all files. This function simplifies the configuration of file matching for asset preloading.

```typescript
function createCompositeGlobPattern(): Bun.Glob {
  const raw = (process.env.ASSET_PRELOAD_INCLUDE_PATTERNS ?? '')
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean)
  if (raw.length === 0) return new Bun.Glob('**/*')
  if (raw.length === 1) return new Bun.Glob(raw[0])
  return new Bun.Glob(`{${raw.join(',')}}`)
}
```

--------------------------------

### Configure Bun File Loaders by Extension

Source: https://bun.sh/docs/runtime/bunfig

Map file extensions to specific loaders to enable Bun to handle unsupported file types. For example, map '.bagel' files to the 'tsx' loader.

```toml
[loader]
# when a .bagel file is imported, treat it like a tsx file
".bagel" = "tsx"
```

--------------------------------

### Bun REPL Non-interactive Evaluation with -p

Source: https://bun.sh/docs/runtime/repl

Evaluate a script using REPL semantics, print the result, and exit. This is useful for quickly getting the output of expressions.

```shell
bun repl -p "await fetch('https://example.com').then(r => r.status)"
```

```shell
bun repl -p "{ a: 1, b: 2 }"
```

--------------------------------

### Workspace Package Dependency Configuration

Source: https://bun.sh/docs/pm/workspaces

Illustrates how a package within a monorepo can declare dependencies on other local packages using the `workspace:` protocol. This ensures that local versions are used and correctly linked during installation.

```json
{
  "name": "pkg-a",
  "version": "1.0.0",
  "dependencies": {
    "pkg-b": "workspace:*"
  }
}
```

--------------------------------

### Code Splitting with Bun Build

Source: https://bun.sh/docs/bundler

This section details how to enable code splitting in Bun's build process. Code splitting allows for the creation of separate bundles (chunks) for shared code among multiple entry points, improving load times. Examples are provided for both JavaScript API and CLI usage.

```APIDOC
## POST /build/splitting

### Description
Enables code splitting for the Bun bundler, creating separate chunks for shared code across multiple entry points.

### Method
POST

### Endpoint
/build

### Parameters
#### Query Parameters
- **splitting** (boolean) - Optional - Whether to enable code splitting. Defaults to `false`.

### Request Body
```json
{
  "entrypoints": ["./index.tsx"],
  "outdir": "./out",
  "splitting": true
}
```

### Request Example
```json
{
  "entrypoints": ["./entry-a.ts", "./entry-b.ts"],
  "outdir": "./out",
  "splitting": true
}
```

### Response
#### Success Response (200)
- **outputFiles** (array) - An array of generated files, including entry points and shared chunks.

#### Response Example
```json
{
  "outputFiles": [
    {
      "path": "./out/entry-a.js",
      "contents": "..."
    },
    {
      "path": "./out/entry-b.js",
      "contents": "..."
    },
    {
      "path": "./out/chunk-2fce6291bf86559d.js",
      "contents": "// Shared code chunk"
    }
  ]
}
```
```

--------------------------------

### Inserting Data into SQLite

Source: https://bun.sh/docs/runtime/sql

Shows how to insert data into SQLite tables using Bun.SQL, including basic inserts, using object helpers, bulk inserts, and selecting specific columns.

```APIDOC
## POST /websites/bun_sh/insert

### Description
Insert data into SQLite tables using tagged template literals. Supports direct values, object helpers, bulk inserts, and column selection.

### Method
POST

### Endpoint
/websites/bun_sh/insert

### Parameters
#### Path Parameters
None

#### Query Parameters
None

#### Request Body
- **tableName** (string) - Required - The name of the table to insert data into.
- **data** (object|array) - Required - The data to insert. Can be a single object, an array of objects, or an object with specific columns to insert.
- **columns** (array) - Optional - An array of strings specifying which columns to insert when using an object for `data`.

### Request Example
```json
{
  "tableName": "users",
  "data": {
    "name": "Alice",
    "email": "alice@example.com"
  }
}
```

### Request Example (Bulk Insert)
```json
{
  "tableName": "users",
  "data": [
    { "name": "Alice", "email": "alice@example.com" },
    { "name": "Bob", "email": "bob@example.com" }
  ]
}
```

### Request Example (Column Selection)
```json
{
  "tableName": "users",
  "data": {
    "name": "Alice",
    "email": "alice@example.com",
    "age": 25
  },
  "columns": ["name", "email"]
}
```

### Response
#### Success Response (200)
- **message** (string) - A success message indicating the data was inserted.

#### Response Example
```json
{
  "message": "Data inserted successfully."
}
```
```

--------------------------------

### Bun Build: Output and File Handling Options

Source: https://bun.sh/docs/bundler

Control where the output is saved and how source maps are generated. Options include specifying the output directory, a single output file, source map types (linked, inline, external, none), and adding banners or footers to the output.

```bash
# Output directory (default: dist)
bun build --outdir ./build

# Write output to a specific file
bun build --outfile ./bundle.js

# Generate source maps
bun build --sourcemap linked
bun build --sourcemap inline
bun build --sourcemap external
bun build --sourcemap none

# Add a banner to the output
bun build --banner "use client"

# Add a footer to the output
bun build --footer "// built with bun!"

# Specify module format (esm, cjs, iife)
bun build --format cjs

```

--------------------------------

### Distinguish File Responses vs Static Responses in Bun.serve()

Source: https://bun.sh/docs/runtime/http/routing

Illustrates the difference between serving a file as a static response (buffered in memory) and a file response (read from filesystem on each request). Static routes buffer content at startup, offering zero filesystem I/O and ETag support, while file routes handle filesystem reads per request with built-in 404 handling and Last-Modified support.

```typescript
Bun.serve({
  routes: {
    // Static route - content is buffered in memory at startup
    "/logo.png": new Response(await Bun.file("./logo.png").bytes()),

    // File route - content is read from filesystem on each request
    "/download.zip": new Response(Bun.file("./download.zip")),
  },
});
```

--------------------------------

### Execute Compiled Bun Application

Source: https://bun.sh/docs/bundler/executables

This command executes a previously compiled standalone executable created with Bun. The executable contains the application code, all its dependencies, and the Bun runtime, allowing it to be run directly without needing Bun installed on the target system.

```bash
./mycli
```

--------------------------------

### Log Summary of Preloaded and On-Demand Files (JavaScript)

Source: https://bun.sh/docs/guides/ecosystem/tanstack-start

This snippet logs a summary of the server's file handling after processing. It reports the number of files preloaded into memory and the number of files served on-demand, categorizing the on-demand files by why they were not preloaded (too large or filtered).

```javascript
// Log summary after the file list
console.log() // Empty line for separation
if (loaded.length > 0) {
  log.success(
    `Preloaded ${String(loaded.length)} files (${(totalPreloadedBytes / 1024 / 1024).toFixed(2)} MB) into memory`,
  )
} else {
  log.info('No files preloaded into memory')
}

if (skipped.length > 0) {
  const tooLarge = skipped.filter((f) => f.size > MAX_PRELOAD_BYTES).length
  const filtered = skipped.length - tooLarge
  log.info(
    `${String(skipped.length)} files will be served on-demand (${String(tooLarge)} too large, ${String(filtered)} filtered)`,
  )
}
```

--------------------------------

### Compile Bun App with Bytecode (CLI)

Source: https://bun.sh/docs/bundler/executables

Compiles a TypeScript application into an executable with bytecode enabled using the Bun CLI. Bytecode compilation improves startup time by moving parsing overhead from runtime to bundle time, making `tsc` start up to 2x faster.

```bash
bun build --compile --minify --sourcemap --bytecode ./path/to/my/app.ts --outfile myapp
```

--------------------------------

### Add Git Dependencies using Bun with Various Protocols

Source: https://bun.sh/docs/guides/install/add-git

Demonstrates adding Git dependencies to a Bun project using different protocols, including HTTPS, SSH, and direct GitHub shorthand. This allows flexibility in how external code is included.

```sh
bun add git+https://github.com/lodash/lodash.git
bun add git+ssh://github.com/lodash/lodash.git#4.17.21
bun add git@github.com:lodash/lodash.git
bun add github:colinhacks/zod
```

--------------------------------

### Create Dockerfile for Bun on AWS Lambda

Source: https://bun.sh/docs/guides/deployment/aws-lambda

This Dockerfile sets up an AWS Lambda environment for a Bun application. It uses the official AWS Lambda adapter image and the Bun image, copies project files, installs production dependencies, and configures the application to run on the required port. Ensure the CMD instruction matches your application's entry point.

```docker
# Use the official AWS Lambda adapter image to handle the Lambda runtime
FROM public.ecr.aws/awsguru/aws-lambda-adapter:0.9.0 AS aws-lambda-adapter

# Use the official Bun image to run the application
FROM oven/bun:debian AS bun_latest

# Copy the Lambda adapter into the container
COPY --from=aws-lambda-adapter /lambda-adapter /opt/extensions/lambda-adapter

# Set the port to 8080. This is required for the AWS Lambda adapter.
ENV PORT=8080

# Set the work directory to `/var/task`. This is the default work directory for Lambda.
WORKDIR "/var/task"

# Copy the package.json and bun.lock into the container
COPY package.json bun.lock ./

# Install the dependencies
RUN bun install --production --frozen-lockfile

# Copy the rest of the application into the container
COPY . /var/task

# Run the application.
CMD ["bun", "index.ts"]
```

--------------------------------

### Update package.json Scripts for Bun

Source: https://bun.sh/docs/guides/ecosystem/nextjs

Modifies the `scripts` section in `package.json` to prefix Next.js CLI commands with `bun --bun`. This ensures that Bun is used to execute `dev`, `build`, and `start` commands.

```json
{
  "scripts": {
    "dev": "bun --bun next dev", 
    "build": "bun --bun next build", 
    "start": "bun --bun next start"
  }
}
```

--------------------------------

### Implement Caching with Redis

Source: https://bun.sh/docs/runtime/redis

Provides an example of using Redis as a cache to improve data retrieval performance. It first checks if data exists in the cache, and if not, fetches it from a database, stores it in Redis with an expiration time, and then returns it. Depends on a Redis client instance and a database access object.

```typescript
async function getUserWithCache(userId) {
  const cacheKey = `user:${userId}`;

  // Try to get from cache first
  const cachedUser = await redis.get(cacheKey);
  if (cachedUser) {
    return JSON.parse(cachedUser);
  }

  // Not in cache, fetch from database
  const user = await database.getUser(userId);

  // Store in cache for 1 hour
  await redis.set(cacheKey, JSON.stringify(user));
  await redis.expire(cacheKey, 3600);

  return user;
}
```

--------------------------------

### Load SQLite Extension with bun:sqlite

Source: https://bun.sh/docs/runtime/sqlite

Demonstrates how to load a SQLite extension using the `.loadExtension()` method on a Database instance. This requires the extension name as a string argument. Note that macOS users may need to install a vanilla build of SQLite and set its path using `Database.setCustomSQLite()` if the default build does not support extensions.

```typescript
import { Database } from "bun:sqlite";

const db = new Database();
db.loadExtension("myext");
```

```typescript
import { Database } from "bun:sqlite";

Database.setCustomSQLite("/path/to/libsqlite.dylib");

const db = new Database();
db.loadExtension("myext");
```

--------------------------------

### Bun Build: TypeScript Declarations for Defined Constants

Source: https://bun.sh/docs/guides/runtime/build-time-constants

Provides an example of TypeScript declaration files (`.d.ts`) for constants defined during the Bun build process. This ensures type safety and avoids TypeScript errors when using these constants in a TypeScript project.

```ts
// types/build-constants.d.ts
declare const BUILD_VERSION: string;
declare const BUILD_TIME: string;
declare const NODE_ENV: "development" | "staging" | "production";
declare const DEBUG: boolean;
```

--------------------------------

### Executing SQL Queries

Source: https://bun.sh/docs/runtime/sql

This section covers how to execute SQL queries, including reading queries from files with parameters and executing raw SQL strings.

```APIDOC
## SQL Query Execution

### Execute SQL from File

Use the `sql.file` method to read and execute a query from a file. Parameters can be passed to the query if the file contains placeholders like `$1`, `$2`, etc. If no parameters are used, multiple commands within the file can be executed.

**Method:** `sql.file(filePath: string, params?: any[])`

**Parameters:**
- `filePath` (string) - Required - The path to the SQL file.
- `params` (any[]) - Optional - An array of parameters to pass to the query.

**Request Example:**
```ts
const result = await sql.file("query.sql", [1, 2, 3]);
```

### Execute Unsafe SQL Queries

Use the `sql.unsafe` function to execute raw SQL strings. Exercise caution as this method does not escape user input. If no parameters are used, multiple commands can be executed per query.

**Method:** `sql.unsafe(sqlString: string, params?: any[])`

**Parameters:**
- `sqlString` (string) - Required - The raw SQL string to execute.
- `params` (any[]) - Optional - An array of parameters to pass to the query. Only one command is allowed if parameters are used.

**Request Example (Multiple Commands):**
```ts
const result = await sql.unsafe(`
  SELECT ${userColumns} FROM users;
  SELECT ${accountColumns} FROM accounts;
`);
```

**Request Example (With Parameters):**
```ts
const result = await sql.unsafe("SELECT " + dangerous + " FROM users WHERE id = $1", [id]);
```
```

--------------------------------

### Using Environment Variables for Proxy

Source: https://bun.sh/docs/guides/http/proxy

Explains how to set the `$HTTP_PROXY` or `$HTTPS_PROXY` environment variables to configure the proxy for all fetch requests made by Bun.

```APIDOC
## Environment Variable Proxy Configuration

### Description
Configure Bun's `fetch` to use a proxy server by setting the `$HTTP_PROXY` or `$HTTPS_PROXY` environment variables. This applies the proxy settings to all outgoing requests.

### Method
N/A (Environment Variable Configuration)

### Endpoint
N/A

### Parameters
#### Environment Variables
- **$HTTP_PROXY** (string) - Optional - The URL of the HTTP proxy server to use for HTTP requests (e.g., `http://username:password@proxy.example.com:8080`).
- **$HTTPS_PROXY** (string) - Optional - The URL of the HTTPS proxy server to use for HTTPS requests (e.g., `https://username:password@proxy.example.com:8080`).

### Request Example
```bash
# For HTTPS proxy
HTTPS_PROXY=https://username:password@proxy.example.com:8080 bun run index.ts

# For HTTP proxy
HTTP_PROXY=http://proxy.example.com:8080 bun run index.ts
```

### Response
N/A (This is a configuration method, not an endpoint.)
```

--------------------------------

### Redis Hash Operations with Bun

Source: https://bun.sh/docs/runtime/redis

Demonstrates setting, getting, and incrementing fields within Redis Hashes using Bun's Redis client. Supports multiple fields, single fields, and numeric/float increments.

```typescript
await redis.hmset("user:123", ["name", "Alice", "email", "alice@example.com", "active", "true"]);

const userFields = await redis.hmget("user:123", ["name", "email"]);
console.log(userFields); // ["Alice", "alice@example.com"]

const userName = await redis.hget("user:123", "name");
console.log(userName); // "Alice"

await redis.hincrby("user:123", "visits", 1);

await redis.hincrbyfloat("user:123", "score", 1.5);
```

--------------------------------

### Accessing Embedded Files

Source: https://bun.sh/docs/bundler/executables

This endpoint provides access to all files embedded during the build process as Blob objects. You can iterate through `Bun.embeddedFiles` to get information about each file, such as its name and size.

```APIDOC
## GET /websites/bun_sh/embeddedFiles

### Description
Provides access to all embedded files as `Blob` objects.

### Method
GET

### Endpoint
`Bun.embeddedFiles`

### Parameters
#### Query Parameters
None

#### Request Body
None

### Request Example
```ts
import { embeddedFiles } from "bun";

for (const blob of embeddedFiles) {
  console.log(`${blob.name} - ${blob.size} bytes`);
}
```

### Response
#### Success Response (200)
- **embeddedFiles** (ReadonlyArray<Blob>) - An array of Blob objects representing the embedded files.

#### Response Example
```json
[
  {
    "name": "icon-a1b2c3d4.png",
    "size": 4096
  },
  {
    "name": "data-e5f6g7h8.json",
    "size": 256
  },
  {
    "name": "template-i9j0k1l2.html",
    "size": 1024
  }
]
```
```

--------------------------------

### Updating Credentials with Bun.secrets (JavaScript)

Source: https://bun.sh/docs/runtime/secrets

Demonstrates the process of updating existing credentials using Bun.secrets. The example shows how to set a new value for a credential, effectively replacing the old one.

```javascript
// Initial password
await Bun.secrets.set({
  service: "email-server",
  name: "admin@example.com",
  value: "old-password",
});

// Update to new password
await Bun.secrets.set({
  service: "email-server",
  name: "admin@example.com",
  value: "new-password",
});

// The old password is replaced

```

--------------------------------

### Create Bun Project from React Component

Source: https://bun.sh/docs/runtime/templating/create

Initiates a new Bun project by analyzing a provided React component. It sets up a complete development environment with hot reloading and production build capabilities. This command is a successor to Create React App, offering modern tooling and faster builds.

```bash
bun create ./MyComponent.jsx
# .tsx also supported
```

--------------------------------

### Enable TLS for Bun TCP Server in TypeScript

Source: https://bun.sh/docs/runtime/networking/tcp

Provides an example of how to secure a TCP server using TLS. By including a `tls` object in the `Bun.listen` configuration with `key` and `cert` fields, the server can establish encrypted connections. The key and certificate contents can be provided as strings, `BunFile` objects, `TypedArray`, or `Buffer`.

```typescript
Bun.listen({
  hostname: "localhost",
  port: 8080,
  socket: {
    data(socket, data) {},
  },
  tls: {
    // can be string, BunFile, TypedArray, Buffer, or array thereof
    key: Bun.file("./key.pem"), // [!code ++]
    cert: Bun.file("./cert.pem"), // [!code ++]
  },
});
```

--------------------------------

### Running Bun Coverage on Specific Test Files

Source: https://bun.sh/docs/test/code-coverage

This example shows how to run Bun's test coverage on specific files or tests using command-line arguments. You can target individual files, files matching a pattern (e.g., `src/components/*.test.ts`), or tests matching a specific name pattern using the `--test-name-pattern` flag.

```bash
# Run coverage only on specific test files
bun test --coverage src/components/*.test.ts

# Run coverage with name pattern
bun test --coverage --test-name-pattern="API"
```

--------------------------------

### Bundle React App with Bun.build (TypeScript)

Source: https://bun.sh/docs/bundler

This snippet shows how to use `Bun.build` to create a bundle for a React application. It takes an array of entry points and an output directory. This method is suitable for integrating bundling into your build scripts.

```typescript
await Bun.build({
  entrypoints: ["./index.tsx"],
  outdir: "./out",
});
```

--------------------------------

### Add TypeScript Types for Bun

Source: https://bun.sh/docs/quickstart

Installs the necessary type declarations for Bun in a TypeScript project. This is crucial for enabling type checking and autocompletion for Bun-specific globals and APIs when using TypeScript with Bun. It's added as a development dependency.

```bash
bun add -d @types/bun
```

--------------------------------

### Initialize Prisma Client with Accelerate Extension

Source: https://bun.sh/docs/guides/ecosystem/prisma-postgres

Initializes the Prisma Client in a new file, `prisma/db.ts`, and extends it with the Accelerate functionality for optimized database interactions.

```typescript
import { PrismaClient } from "./generated/client";
import { withAccelerate } from '@prisma/extension-accelerate'

export const prisma = new PrismaClient().$extends(withAccelerate())
```

--------------------------------

### Example React Component Test with Testing Library and Bun

Source: https://bun.sh/docs/guides/test/testing-library

A basic test case demonstrating the usage of Testing Library with Bun's test runner. It renders a `MyComponent`, finds an element by its test ID, and asserts its presence in the document.

```tsx
import { test, expect } from "bun:test";
import { screen, render } from "@testing-library/react";
import { MyComponent } from "./myComponent";

test("Can use Testing Library", () => {
  render(MyComponent);
  const myComponent = screen.getByTestId("my-component");
  expect(myComponent).toBeInTheDocument();
});
```

--------------------------------

### Run DOM Tests with Bun

Source: https://bun.sh/docs/guides/test/happy-dom

Executes all tests within the project using the Bun test runner. If configured correctly, this command will automatically include the Happy DOM setup.

```sh
bun test
```

--------------------------------

### Synchronous Password Hashing and Verification (TypeScript)

Source: https://bun.sh/docs/runtime/hashing

Provides examples of using the synchronous versions, Bun.password.hashSync and Bun.password.verifySync, for hashing and verifying passwords. It warns about potential performance degradation due to blocking operations.

```typescript
const password = "super-secure-pa$$word";

const hash = Bun.password.hashSync(password, {
  /* config */
});

const isMatch = Bun.password.verifySync(password, hash);
// => true
```

--------------------------------

### Migrate Next.js API Routes to Bun

Source: https://bun.sh/docs/bundler/fullstack

Illustrates the conversion of a Next.js API route handler to Bun's equivalent syntax. It simplifies the process of handling GET requests for API endpoints within the Bun framework.

```typescript
// Before (Next.js)
export default function handler(req, res) {
  if (req.method === 'GET') {
    res.json(users);
  }
}

// After (Bun)
"/api/users": {
  GET() { return Response.json(users); }
}
```

--------------------------------

### Bun Redis: Connection Management

Source: https://bun.sh/docs/runtime/redis

Illustrates how to establish and manage connections with Redis using Bun's client. It covers using the default client (reading from environment variables) and creating a custom client with a specific connection string, as well as explicit connection lifecycle control.

```typescript
import { redis, RedisClient } from "bun";

// Using the default client (reads connection info from environment)
// process.env.REDIS_URL is used by default
await redis.set("hello", "world");
const result = await redis.get("hello");

// Creating a custom client
const client = new RedisClient("redis://username:password@localhost:6379");
await client.set("counter", "0");
await client.incr("counter");

// Connection Lifecycle - Automatic
// No connection is made until a command is executed
const autoClient = new RedisClient();

// First command initiates the connection
await autoClient.set("key", "value");

// Connection remains open for subsequent commands
await autoClient.get("key");

// Explicitly close the connection when done
autoClient.close();

// Connection Lifecycle - Manual Control
const manualClient = new RedisClient();

// Explicitly connect
await manualClient.connect();

// Run commands
await manualClient.set("key", "value");

// Disconnect when done
manualClient.close();

```

--------------------------------

### Running Bun Tests from the Command Line

Source: https://bun.sh/docs/guides/test/concurrent-test-glob

Demonstrates various ways to run Bun tests using the `bun test` command. It covers default execution (respecting `bunfig.toml`), forcing all tests to run concurrently with `--concurrent`, running specific directories, and how glob patterns influence execution.

```bash
# Run all tests - concurrent-*.test.ts files will run concurrently
bun test

# Override: Force ALL tests to run concurrently
# Note: This overrides bunfig.toml and runs all tests concurrently, regardless of glob
bun test --concurrent

# Run only unit tests (sequential)
bun test tests/unit

# Run only integration tests (concurrent due to glob pattern)
bun test tests/integration
```

--------------------------------

### Type-Safe Route Parameters with TypeScript

Source: https://bun.sh/docs/runtime/http/routing

Illustrates how TypeScript can infer and provide type safety for route parameters defined in Bun.serve(). By using string literals for route paths, the `req.params` object gets autocompletion and type checking in the editor.

```typescript
import type { BunRequest } from "bun";

Bun.serve({
  routes: {
    // TypeScript knows the shape of params when passed as a string literal
    "/orgs/:orgId/repos/:repoId": req => {
      const { orgId, repoId } = req.params;
      return Response.json({ orgId, repoId });
    },

    "/orgs/:orgId/repos/:repoId/settings": (
      // optional: you can explicitly pass a type to BunRequest:
      req: BunRequest<"/orgs/:orgId/repos/:repoId/settings">,
    ) => {
      const { orgId, repoId } = req.params;
      return Response.json({ orgId, repoId });
    },
  },
});
```

--------------------------------

### Get Bun Git Revision (TypeScript)

Source: https://bun.sh/docs/guides/util/version

Retrieves the exact git commit hash of the oven-sh/bun repository that was used to compile the current Bun binary. This is a read-only property.

```typescript
Bun.revision;
```

--------------------------------

### Running Redis Pub/Sub with Bun CLI

Source: https://bun.sh/docs/runtime/redis

Instructions for running the Redis publisher and subscriber scripts using the Bun command-line interface. This requires separate terminal sessions for the publisher and subscriber.

```bash
bun run subscriber.ts
```

```bash
bun run publisher.ts
```

--------------------------------

### Stream Data with ArrayBufferSink

Source: https://bun.sh/docs/runtime/streams

Demonstrates using Bun.ArrayBufferSink in a streaming context by passing `stream: true` to the `start` method. This allows periodic flushing of buffered data without ending the sink.

```typescript
const sink = new Bun.ArrayBufferSink();
sink.start({
  stream: true, // [!code ++]
});

sink.write("h");
sink.write("e");
sink.write("l");
sink.flush();
// ArrayBuffer(5) [ 104, 101, 108 ]

sink.write("l");
sink.write("o");
sink.flush();
// ArrayBuffer(5) [ 108, 111 ]
```

--------------------------------

### Bundle-time Client-Side Color Formatting using Bun.color() Macro

Source: https://bun.sh/docs/runtime/color

Demonstrates using the `Bun.color` API as a bundle-time macro for client-side JavaScript builds. The macro is invoked using `import { color } from "bun" with { type: "macro" };`. The example shows formatting a color to CSS format.

```typescript
import { color } from "bun" with { type: "macro" };

console.log(color("#f00", "css"));
```

```shell
bun build ./client-side.ts
```

```javascript
// client-side.ts
console.log("red");
```

--------------------------------

### Start a Bun Web Server for Debugging

Source: https://bun.sh/docs/guides/runtime/web-debugger

This TypeScript code defines a simple Bun web server that listens for requests and logs the URL. It's designed to be run with the `--inspect` flag to enable debugging capabilities.

```typescript
Bun.serve({
  fetch(req) {
    console.log(req.url);
    return new Response("Hello, world!");
  },
});
```

--------------------------------

### Add linked package to package.json

Source: https://bun.sh/docs/pm/cli/link

This JSON snippet demonstrates how a linked package is represented in a project's 'package.json' file. The 'link:cool-pkg' value indicates that the package should be loaded from the local registered directory instead of being installed from a registry.

```json
{
  "name": "my-app",
  "version": "1.0.0",
  "dependencies": {
    "cool-pkg": "link:cool-pkg" // [!code ++]
  }
}
```

--------------------------------

### Prevent Lockfile Updates (TOML)

Source: https://bun.sh/docs/runtime/bunfig

When set to `true`, `bun install` will not update the `bun.lock` file. If `package.json` and the existing `bun.lock` are out of sync, this setting will cause an error. Defaults to `false`.

```toml
[install]
frozenLockfile = false
```

--------------------------------

### Test Svelte Component with Bun Test

Source: https://bun.sh/docs/guides/test/svelte-test

An example test file for a Svelte component using Bun's testing utilities. It demonstrates how to render the component, interact with it (e.g., click a button), and assert its state changes.

```typescript
import { test, expect } from "bun:test";
import { render, fireEvent } from "@testing-library/svelte";
import Counter from "./Counter.svelte";

test("Counter increments when clicked", async () => {
  const { getByText, component } = render(Counter);
  const button = getByText("+1");

  // Initial state
  expect(component.$$.ctx[0]).toBe(0); // initialCount is the first prop

  // Click the increment button
  await fireEvent.click(button);

  // Check the new state
  expect(component.$$.ctx[0]).toBe(1);
});
```

--------------------------------

### Test Script for User Creation and Counting

Source: https://bun.sh/docs/guides/ecosystem/prisma-postgres

A sample TypeScript script to demonstrate creating a new user and then counting the total number of users in the database using the initialized Prisma Client.

```typescript
import { prisma } from "./prisma/db";

// create a new user
await prisma.user.create({

```

--------------------------------

### Get RGBA Channels as Object ({rgba})

Source: https://bun.sh/docs/runtime/color

Outputs an object containing the red, green, blue, and alpha channels of a color. The alpha channel is a decimal between 0 and 1, similar to CSS.

```typescript
type RGBAObject = {
  // 0 - 255
  r: number;
  // 0 - 255
  g: number;
  // 0 - 255
  b: number;
  // 0 - 1
  a: number;
};

Bun.color("hsl(0, 0%, 50%)", "{rgba}"); // { r: 128, g: 128, b: 128, a: 1 }
Bun.color("red", "{rgba}"); // { r: 255, g: 0, b: 0, a: 1 }
Bun.color(0xff0000, "{rgba}"); // { r: 255, g: 0, b: 0, a: 1 }
Bun.color({ r: 255, g: 0, b: 0 }, "{rgba}"); // { r: 255, g: 0, b: 0, a: 1 }
Bun.color([255, 0, 0], "{rgba}"); // { r: 255, g: 0, b: 0, a: 1 }
```

--------------------------------

### MySQL: Error Handling

Source: https://bun.sh/docs/runtime/sql

Provides an example of error handling for common MySQL errors, specifically focusing on duplicate entry and access denied errors. It uses the `error.code` property to identify and handle specific error types.

```ts
try {
  await mysql`INSERT INTO users (email) VALUES (${"duplicate@email.com"})`;
} catch (error) {
  if (error.code === "ER_DUP_ENTRY") {
    console.log("Duplicate entry detected");
  } else if (error.code === "ER_ACCESS_DENIED_ERROR") {
    console.log("Access denied");
  } else if (error.code === "ER_BAD_DB_ERROR") {
    console.log("Database does not exist");
  }
  // MySQL error codes are compatible with mysql/mysql2 packages
}
```

--------------------------------

### Verbose Fetch Request Logging (TypeScript)

Source: https://bun.sh/docs/runtime/debugger

This example shows how to enable verbose logging for `fetch` requests in Bun by setting `BUN_CONFIG_VERBOSE_FETCH` to 'true'. This will output detailed information about both the outgoing request and the incoming response, aiding in debugging network interactions. It's a built-in feature of Bun and requires no additional libraries.

```typescript
process.env.BUN_CONFIG_VERBOSE_FETCH = "true";

await fetch("https://example.com", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ foo: "bar" }),
});
```

--------------------------------

### Get Bun CLI Revision

Source: https://bun.sh/docs/runtime/utils

Retrieves the git commit hash used to compile the current `bun` CLI. This helps in identifying the exact build of Bun being used.

```typescript
Bun.revision;
// => "f02561530fda1ee9396f51c8bc99b38716e38296"
```

--------------------------------

### Spawn a child process with configuration options

Source: https://bun.sh/docs/guides/process/spawn

Shows how to spawn a child process using Bun.spawn() with a configuration object. This allows setting the current working directory (cwd), environment variables (env), and defining an exit handler (onExit).

```typescript
const proc = Bun.spawn(["echo", "Hello, world!"], {
  cwd: "/tmp",
  env: { FOO: "bar" },
  onExit(proc, exitCode, signalCode, error) {
    // exit handler
  },
});
```

--------------------------------

### Set High Water Mark for ArrayBufferSink Buffer

Source: https://bun.sh/docs/runtime/streams

Explains how to manually control the size of the internal buffer in bytes for Bun.ArrayBufferSink by providing a `highWaterMark` value to the `start` method.

```typescript
const sink = new Bun.ArrayBufferSink();
sink.start({
  highWaterMark: 1024 * 1024, // 1 MB  // [!code ++]
});
```

--------------------------------

### TypeScript Interfaces for REST API

Source: https://bun.sh/docs/runtime/http/server

Defines the TypeScript interface for a 'Post' object used in the REST API example. This ensures type safety and clarity for the data structure being handled.

```typescript
export interface Post {
  id: string;
  title: string;
  content: string;
  created_at: string;
}
```

--------------------------------

### Declaring Workspace Dependencies in package.json

Source: https://bun.sh/docs/guides/install/workspaces

How to declare dependencies between packages within the same monorepo using Bun workspaces. The 'workspace:*' syntax is used to link packages, ensuring they are correctly resolved and installed.

```json
{
  "name": "stuff-b",
  "dependencies": {
    "stuff-a": "workspace:*" 
  }
}
```

--------------------------------

### Mock API Client Functions in TypeScript for Testing

Source: https://bun.sh/docs/test/mocks

Provides a practical example of mocking an API client module using `mock.module()` and `mock()` for individual functions. This allows testing services that depend on the API client without making actual network requests. It demonstrates mocking asynchronous functions and verifying they were called correctly.

```typescript
import { test, expect, mock, beforeEach } from "bun:test";

// Mock the API client module
mock.module("./api-client", () => ({
  fetchUser: mock(async (id: string) => ({ id, name: `User ${id}` })),
  createUser: mock(async (user: any) => ({ ...user, id: "new-id" })),
  updateUser: mock(async (id: string, user: any) => ({ ...user, id }))
}));

test("user service with mocked API", async () => {
  const { fetchUser } = await import("./api-client");
  const { UserService } = await import("./user-service");

  const userService = new UserService();
  const user = await userService.getUser("123");

  expect(fetchUser).toHaveBeenCalledWith("123");
  expect(user.name).toBe("User 123");
});
```

--------------------------------

### Database Connection and Import

Source: https://bun.sh/docs/runtime/sqlite

Demonstrates how to import a SQLite database using ES module syntax with an import attribute, and the equivalent manual instantiation.

```APIDOC
## Importing SQLite Database

### Description
Load a SQLite database using ES module import with a `type: "sqlite"` attribute.

### Method
Import Statement

### Endpoint
N/A (Module Import)

### Parameters
#### Path Parameters
- **db_path** (string) - Required - The path to the SQLite database file.

#### Query Parameters
None

#### Request Body
None

### Request Example
```typescript
import db from "./mydb.sqlite" with { type: "sqlite" };

console.log(db.query("select * from users LIMIT 1").get());
```

### Response
#### Success Response (200)
- **db** (Database) - A connected Database instance.

#### Response Example
```json
{
  "message": "User data"
}
```

## Manual Database Instantiation

### Description
Manually create a `Database` instance using the `Database` constructor from `bun:sqlite`.

### Method
`new Database(filename: string)`

### Endpoint
N/A (Class Instantiation)

### Parameters
#### Path Parameters
None

#### Query Parameters
None

#### Request Body
None

### Request Example
```typescript
import { Database } from "bun:sqlite";
const db = new Database("./mydb.sqlite");
```

### Response
#### Success Response (200)
- **db** (Database) - A connected Database instance.

#### Response Example
```json
{
  "message": "User data"
}
```
```

--------------------------------

### Sleep for Milliseconds

Source: https://bun.sh/docs/guides

Pauses the execution of the program for a specified number of milliseconds. This is commonly used for rate limiting, waiting for resources, or simple delays.

```javascript
import { sleep } from "bun";

console.log("Starting...");
await sleep(1000); // Sleep for 1 second
console.log("Finished!");
```

--------------------------------

### Configure Azure Artifacts Registry with Environment Variables

Source: https://bun.sh/docs/guides/install/azure-artifacts

This command configures the npm registry URL directly using environment variables, including username and password as query parameters. This method provides an alternative to using `bunfig.toml` for setting up the Azure Artifacts registry.

```bash
export NPM_CONFIG_REGISTRY=https://pkgs.dev.azure.com/my-azure-artifacts-user/_packaging/my-azure-artifacts-user/npm/registry/:username=<USERNAME>:_password=<PASSWORD>
```

--------------------------------

### Define WebSocket Event Handlers in Bun

Source: https://bun.sh/docs/runtime/http/websockets

This example shows how to define the available WebSocket event handlers within the `Bun.serve()` configuration. These handlers include `message`, `open`, `close`, and `drain`, allowing you to manage different stages of a WebSocket connection.

```typescript
Bun.serve({
  fetch(req, server) {},
  websocket: {
    message(ws, message) {},
    open(ws) {},
    close(ws, code, message) {},
    drain(ws) {},
  },
});
```

--------------------------------

### Find Executable Path with Bun.which (TypeScript)

Source: https://bun.sh/docs/guides/util/which-path-to-executable-bin

Demonstrates how to use Bun.which to find the absolute path of an executable. Returns the path if found, otherwise null. Useful for locating system binaries or installed tools.

```typescript
Bun.which("sh"); // => "/bin/sh"
Bun.which("notfound"); // => null
Bun.which("bun"); // => "/home/user/.bun/bin/bun"
```

--------------------------------

### Conditional Client-Side/Server-Side Code

Source: https://bun.sh/docs/guides/runtime/define-constant

An example JavaScript snippet that checks for the existence of the 'window' object to differentiate between client-side and server-side execution. This code would be optimized by the --define flag.

```js
if (typeof window !== "undefined") {
  console.log("Client-side code");
} else {
  console.log("Server-side code");
}
```

--------------------------------

### Filter Outdated Dependencies with Glob Patterns

Source: https://bun.sh/docs/pm/cli/outdated

The `bun outdated` command supports glob patterns for flexible filtering of dependencies. This is useful for checking groups of related packages, such as all packages starting with 'eslint'.

```sh
bun outdated 'eslint*'
```

```sh
bun outdated '@types/*'
```

```sh
bun outdated '!@types/*'
```

--------------------------------

### Initialize New Bun Project

Source: https://bun.sh/docs/runtime/typescript

Command to initialize a new Bun project. Running this command in an empty directory will generate a default `tsconfig.json` file with recommended compiler options for Bun.

```sh
bun init
```

--------------------------------

### Bun Outdated Dependency Scope and Target Options

Source: https://bun.sh/docs/pm/cli/outdated

These options allow you to specify which types of dependencies to consider or omit during the outdated check. This includes production dependencies, development dependencies, and global installations.

```bash
bun outdated -p, --production
bun outdated --omit <dependency_type>
bun outdated -g, --global
```

--------------------------------

### Build Project with Tailwind Plugin via CLI

Source: https://bun.sh/docs/bundler/standalone-html

Builds the project using the Bun CLI, specifying the HTML entrypoint and enabling compilation for the browser. This command leverages the Tailwind plugin.

```bash
bun run build.ts
```

--------------------------------

### Store Project Info in Environment Variables

Source: https://bun.sh/docs/guides/deployment/google-cloud-run

Sets environment variables for PROJECT_ID and PROJECT_NUMBER by querying the Google Cloud project list. This simplifies reusing project identifiers in subsequent commands.

```bash
PROJECT_ID=$(gcloud projects list --format='value(projectId)' --filter='name="my bun app"')
PROJECT_NUMBER=$(gcloud projects list --format='value(projectNumber)' --filter='name="my bun app"')

echo $PROJECT_ID $PROJECT_NUMBER
```

--------------------------------

### Embed Directories using Glob Patterns with Bun

Source: https://bun.sh/docs/bundler/executables

Explains how to embed entire directories or specific file patterns (using glob) into a compiled Bun executable. This can be done via the CLI by listing file patterns or programmatically using `Bun.build` with `entrypoints` that include expanded glob results. The example shows embedding PNG files and then accessing an embedded image file.

```bash
bun build --compile ./index.ts ./public/**/*.png
```

```typescript
import { Glob } from "bun";

// Expand glob pattern to file list
const glob = new Glob("./public/**/*.png");
const pngFiles = Array.from(glob.scanSync("."));

await Bun.build({
  entrypoints: ["./index.ts", ...pngFiles],
  compile: {
    outfile: "./myapp",
  },
});
```

```typescript
import icon from "./public/assets/icon.png" with { type: "file" };
import { file } from "bun";

export default {
  fetch(req) {
    // Embedded files can be streamed from Response objects
    return new Response(file(icon));
  },
};
```

--------------------------------

### Compute ETag for Data (Bun)

Source: https://bun.sh/docs/guides/ecosystem/tanstack-start

Generates an ETag for a given Uint8Array. It uses Bun.hash for efficient hashing and includes the data's byte length in the ETag. This is useful for cache validation.

```typescript
function computeEtag(data: Uint8Array): string {
  const hash = Bun.hash(data)
  return `W/"${hash.toString(16)}-${data.byteLength.toString()}"`
}
```

--------------------------------

### Generate Zig Bindings for C++ Functions

Source: https://bun.sh/docs/project/contributing

This script creates automatic Zig bindings for C++ functions that are marked with the `[[ZIG_EXPORT]]` attribute. It simplifies the process of calling C++ functions from Zig.

```typescript
import path from "path";
import fs from "fs";

function generateCppBindZigBindings() {
  console.log("Generating Zig bindings for C++ functions...");
  // ... (logic to find and process [[ZIG_EXPORT]] functions) ...
  const zigBindingsContent = "// Generated Zig bindings for C++ functions\n";
  fs.writeFileSync(path.join(__dirname, "../../build/debug/codegen/cppbind.zig"), zigBindingsContent);
  console.log("C++ to Zig bindings generation complete.");
}

// Example usage (would be called by build system)
// generateCppBindZigBindings();
```

--------------------------------

### Disable Runtime Config Loading with Bun Build

Source: https://bun.sh/docs/bundler/executables

Demonstrates how to disable the default runtime loading of `.env` and `bunfig.toml` using `bun build` flags. This ensures deterministic execution by preventing these configuration files from being read. Examples include disabling one or both options, and disabling all config loading.

```bash
# Disable .env loading
bun build --compile --no-compile-autoload-dotenv ./app.ts --outfile myapp

# Disable bunfig.toml loading
bun build --compile --no-compile-autoload-bunfig ./app.ts --outfile myapp

# Disable all config loading
bun build --compile --no-compile-autoload-dotenv --no-compile-autoload-bunfig ./app.ts --outfile myapp
```

--------------------------------

### Optional Extension Imports in TypeScript (Bun)

Source: https://bun.sh/docs/runtime/module-resolution

Illustrates that import extensions are optional in Bun. It shows examples where importing with or without the '.ts' extension works, and how Bun handles '.js' imports when '.ts' files exist.

```typescript
import { hello } from "./hello";
import { hello } from "./hello.ts"; // this works
import { hello } from "./hello.js"; // this also works
```

--------------------------------

### HTTP Server with Bun --hot Reloading

Source: https://bun.sh/docs/runtime/watch-mode

This TypeScript example showcases hot reloading for an HTTP server. When the server file is saved, the HTTP server is reloaded with the updated code without restarting the entire process, allowing for rapid updates to request handlers.

```typescript
globalThis.count ??= 0;
globalThis.count++;

Bun.serve({
  fetch(req: Request) {
    return new Response(`Reloaded ${globalThis.count} times`);
  },
  port: 3000,
});
```

--------------------------------

### Send Various Data Types with Bun WebSocket .send()

Source: https://bun.sh/docs/runtime/http/websockets

This example demonstrates the flexibility of the `ws.send()` method in Bun WebSockets, showing how to send different data types including strings, ArrayBuffers, and TypedArrays/DataViews to a connected client.

```typescript
Bun.serve({
  fetch(req, server) {},
  websocket: {
    message(ws, message) {
      ws.send("Hello world"); // string
      ws.send(response.arrayBuffer()); // ArrayBuffer
      ws.send(new Uint8Array([1, 2, 3])); // TypedArray | DataView
    },
  },
});
```

--------------------------------

### Generate Yarn-Compatible Lockfile with Bun Install

Source: https://bun.sh/docs/guides/install/yarnlock

This command generates a Yarn-compatible `yarn.lock` file in addition to the default `bun.lockb` file. This is useful for projects that need to maintain compatibility with Yarn's package management system.

```sh
bun install --yarn
```

--------------------------------

### Get Process Uptime in Nanoseconds with Bun.nanoseconds()

Source: https://bun.sh/docs/guides/process/nanoseconds

Retrieve the total number of nanoseconds the current Bun process has been alive. This function requires no arguments and returns a BigInt representing the uptime in nanoseconds.

```typescript
Bun.nanoseconds();
```

--------------------------------

### WebSocket Client Connection

Source: https://bun.sh/docs/runtime/http/websockets

Demonstrates how to create a WebSocket client instance to connect to a server, with options for subprotocol negotiation and custom headers.

```APIDOC
## WebSocket Client Connection

### Description
Connect to a WebSocket server using the `WebSocket` class. Supports standard URL connections and custom headers for Bun-specific extensions.

### Method
`new WebSocket(url, [options])`

### Endpoint
`ws://` or `wss://` URLs

### Parameters
#### Path Parameters
None

#### Query Parameters
None

#### Request Body
None

### Request Example
```ts
// Basic connection
const socket = new WebSocket("ws://localhost:3000");

// With subprotocol negotiation
const socket2 = new WebSocket("ws://localhost:3000", ["soap", "wamp"]);

// With custom headers (Bun-specific)
const socket3 = new WebSocket("ws://localhost:3000", {
  headers: {
    "X-Custom-Header": "value"
  }
});
```

### Response
#### Success Response (200)
Connection established.

#### Response Example
None (connection is established asynchronously)
```

--------------------------------

### Upgrade Bun via Package Managers

Source: https://bun.sh/docs/guides/util/upgrade

Instructions for upgrading Bun when installed via package managers like Homebrew or Scoop. It's crucial to use the respective package manager's upgrade command to avoid conflicts.

```bash
# Homebrew users
brew upgrade bun

# Scoop users
scoop update bun
```

--------------------------------

### Checkout Specific WebKit Commit

Source: https://bun.sh/docs/project/contributing

Checks out a specific commit hash within the cloned WebKit repository. This ensures that the local WebKit build matches the version expected by Bun's build system.

```bash
git -C vendor/WebKit checkout <commit_hash>
```

--------------------------------

### Create and Use Uint8Array with ArrayBuffer in TypeScript

Source: https://bun.sh/docs/runtime/binary-data

Demonstrates how to create an ArrayBuffer and then use a Uint8Array to interpret its bytes as an array of unsigned 8-bit integers. This example shows initialization, assignment, and how out-of-bounds assignments are handled.

```typescript
const buffer = new ArrayBuffer(3);
const arr = new Uint8Array(buffer);

// contents are initialized to zero
console.log(arr); // Uint8Array(3) [0, 0, 0]

// assign values like an array
arr[0] = 0;
arr[1] = 10;
arr[2] = 255;
arr[3] = 255; // no-op, out of bounds
```

--------------------------------

### Create Standalone Executable with Bun CLI

Source: https://bun.sh/docs/bundler

Provides the command to compile a JavaScript/TypeScript entrypoint into a standalone executable using the Bun CLI. It also shows how to run the generated executable.

```bash
bun build ./cli.tsx --outfile mycli --compile
./mycli
```

--------------------------------

### Bun JSX Logging Example

Source: https://bun.sh/docs/runtime/jsx

Demonstrates how Bun.js logs JSX component trees in a human-readable format. This feature aids in debugging by providing a structured output of the component hierarchy. No external dependencies are required beyond standard JSX and console logging.

```tsx
import { Stack, UserCard } from "./components";

console.log(
  <Stack>
    <UserCard name="Dom" bio="Street racer and Corona lover" />
    <UserCard name="Jakob" bio="Super spy and Dom's secret brother" />
  </Stack>,
);
```

--------------------------------

### Generate Bytecode with Bun CLI

Source: https://bun.sh/docs/bundler

Shows the command-line interface commands for generating bytecode using `bun build`. It illustrates the syntax for both CommonJS and ESM bytecode generation, including necessary flags like `--compile`.

```bash
# CommonJS bytecode
bun build ./index.tsx --outdir ./out --bytecode

# ESM bytecode (requires --compile)
bun build ./index.tsx --outfile ./mycli --bytecode --format=esm --compile
```

--------------------------------

### Reading Archive Contents

Source: https://bun.sh/docs/runtime/archive

Use the `.files()` method to get archive contents as a `Map` of `File` objects without extracting them to disk. This method returns only regular files and loads their contents into memory.

```APIDOC
## GET /websites/bun_sh/files

### Description
Retrieves all regular files from an archive as a `Map` of `File` objects without extracting them to disk. Each `File` object contains the file's path, size, modification timestamp, and standard `Blob` methods.

**Note**: This method loads file contents into memory. For large archives, consider using `extract()` to write directly to disk.

### Method
GET

### Endpoint
`/websites/bun_sh/files`

### Parameters
#### Request Body
- **archiveData** (bytes) - Required - The raw bytes of the archive file (e.g., tar.gz).

### Request Example
```ts
const tarball = await Bun.file("package.tar.gz").bytes();
const archive = new Bun.Archive(tarball);
const files = await archive.files();

for (const [path, file] of files) {
  console.log(`${path}: ${file.size} bytes`);
  console.log(await file.text());
}
```

### Response
#### Success Response (200)
- **files** (Map<string, File>) - A map where keys are file paths and values are `File` objects. Each `File` object has:
  - `name` (string): The file path within the archive.
  - `size` (integer): File size in bytes.
  - `lastModified` (number): Modification timestamp.
  - Blob methods (`text()`, `arrayBuffer()`, `stream()`, etc.).
```

--------------------------------

### Bun.js DataView: Set and Get Uint8

Source: https://bun.sh/docs/runtime/binary-data

Demonstrates creating an ArrayBuffer and a DataView, then setting and retrieving a Uint8 value at a specific byte offset. This is a fundamental operation for byte manipulation.

```typescript
const buf = new ArrayBuffer(4);
// [0b00000000, 0b00000000, 0b00000000, 0b00000000]

const dv = new DataView(buf);
dv.setUint8(0, 3); // write value 3 at byte offset 0
dv.getUint8(0); // => 3
// [0b00000011, 0b00000000, 0b00000000, 0b00000000]
```

--------------------------------

### Add npm package dependency with Bun

Source: https://bun.sh/docs/guides/install/add

Use the `bun add` command to install npm packages as dependencies. This command adds the package to the `dependencies` section of your `package.json` file. By default, it uses the `^` range specifier for versioning.

```sh
bun add zod
```

```sh
bun add zod --exact
```

```sh
bun add zod@3.0.0
```

```sh
bun add zod@next
```

--------------------------------

### Bundle Built-in Node.js and Bun Modules

Source: https://bun.sh/docs/project/contributing

Bundles essential built-in modules like `node:fs` and `bun:ffi` into files that can be included in the final Bun binary. This allows for efficient loading and, in development, hot-reloading of these modules.

```typescript
import path from "path";
import fs from "fs";

function bundleBuiltinModules() {
  console.log("Bundling built-in modules...");
  // ... (logic to bundle modules like node:fs, bun:ffi) ...
  const bundledContent = "// Bundled module content\n";
  fs.writeFileSync(path.join(__dirname, "../../build/debug/codegen/builtin_modules.js"), bundledContent);
  console.log("Built-in module bundling complete.");
}

// Example usage (would be called by build system)
// bundleBuiltinModules();
```

--------------------------------

### Serve Static Responses with Bun.serve()

Source: https://bun.sh/docs/runtime/http/routing

Demonstrates how to use Bun.serve() to serve static Response objects directly. This is optimized for zero-allocation dispatch and is ideal for health checks, redirects, and fixed API responses. Static responses are cached for the lifetime of the server object.

```typescript
Bun.serve({
  routes: {
    // Health checks
    "/health": new Response("OK"),
    "/ready": new Response("Ready", {
      headers: {
        // Pass custom headers
        "X-Ready": "1",
      },
    }),

    // Redirects
    "/blog": Response.redirect("https://bun.com/blog"),

    // API responses
    "/api/config": Response.json({
      version: "1.0.0",
      env: "production",
    }),
  },
});
```

--------------------------------

### Check File Existence with Bun.file() (TypeScript)

Source: https://bun.sh/docs/guides/read-file/exists

Demonstrates how to use Bun.file() to get a BunFile instance and then check if the file exists at the specified path using the .exists() method. This function returns a boolean value indicating existence.

```typescript
const path = "/path/to/package.json";
const file = Bun.file(path);

await file.exists(); // boolean;
```

--------------------------------

### Bun Outdated with --filter

Source: https://bun.sh/docs/pm/filter

Illustrates the usage of the --filter flag with `bun outdated` to inspect dependency versions for selected packages. Examples include filtering by a package name pattern and targeting only the root package.

```bash
# Display outdated dependencies for workspaces starting with `pkg-`
bun outdated --filter 'pkg-*'

# Display outdated dependencies for only the root package.json
bun outdated --filter './'
```

--------------------------------

### Convert Glob Pattern to RegExp in Bun

Source: https://bun.sh/docs/guides/ecosystem/tanstack-start

A utility function to convert simple glob patterns (supporting the '*' wildcard) into regular expressions. This is useful for matching filenames against predefined patterns in asset preloading configurations.

```typescript
/**
* Convert a simple glob pattern to a regular expression
* Supports * wildcard for matching any characters
*/
function convertGlobToRegExp(globPattern: string): RegExp {
  // Escape regex special chars except *, then replace * with .*
  const escapedPattern = globPattern
    .replace(/[-/\\^$+?.()|[]{}]/g, '\\$&')
    .replace(/\*/g, '.*')
  return new RegExp(`^${escapedPattern}$`, 'i')
}
```

--------------------------------

### Verify Bun Bytecode Generation (ls command)

Source: https://bun.sh/docs/bundler/bytecode

This command demonstrates how to verify if bytecode (`.jsc` files) has been generated by listing the contents of the output directory. It also shows an example output comparing the sizes of JavaScript and bytecode files, indicating that `.jsc` files are typically larger.

```bash
ls -lh dist/
```

--------------------------------

### Copy File using Bun.write()

Source: https://bun.sh/docs/runtime/file-io

Illustrates copying the content of 'input.txt' to 'output.txt'. Bun.write() can handle copying between BunFile objects, efficiently transferring data.

```typescript
const input = Bun.file("input.txt");
const output = Bun.file("output.txt"); // doesn't exist yet!
await Bun.write(output, input);
```

--------------------------------

### Basic Hono HTTP Server in TypeScript

Source: https://bun.sh/docs/guides/ecosystem/hono

A simple Hono HTTP server implementation in TypeScript using Bun. It defines a basic GET route that responds with 'Hono!' to requests on the root path. This code snippet demonstrates the core structure of a Hono application.

```typescript
import { Hono } from "hono";
const app = new Hono();

app.get("/", c => c.text("Hono!"));

export default app;
```

--------------------------------

### Node.js Subpath Imports in package.json

Source: https://bun.sh/docs/runtime/module-resolution

Implement Node.js-style subpath imports in `package.json` using the `imports` field. Mapped paths must start with '#', offering an alternative to tsconfig/jsconfig paths, though with less editor support.

```json
{
  "imports": {
    "#config": "./config.ts", 
    "#components/*": "./components/*"
  }
}
```

--------------------------------

### Run Query and Get First Result with .get() in TypeScript

Source: https://bun.sh/docs/runtime/sqlite

The `.get()` method executes a query and returns the first result as an object. If no rows are returned, it returns `undefined`. This method is suitable for queries where only a single record is expected or needed.

```typescript
const query = db.query(`select $message;`);
query.get({ $message: "Hello world" });
```

--------------------------------

### Bun.build Minify Option

Source: https://bun.sh/docs/bundler/esbuild

Details on how to use the `minify` option in `Bun.build` for code minification.

```APIDOC
## Bun.build Minify Option

### Description

The `minify` option in `Bun.build` controls code minification. It can be set to a boolean for enabling all minification features or an object for granular control over specific minification aspects.

### Method

`Bun.build(options)`

### Endpoint

N/A (This is a JavaScript API)

### Parameters

#### Request Body (Options Object)

- **minify** (boolean | object) - Optional - If `true`, enables all minification. If an object, it can contain the following properties:
  - **identifiers** (boolean) - Optional - Minifies JavaScript identifiers.
  - **syntax** (boolean) - Optional - Minifies JavaScript syntax.
  - **whitespace** (boolean) - Optional - Minifies whitespace.

### Request Example

```javascript
await Bun.build({
  entrypoints: ['./index.tsx'],
  // enable all minification
  minify: true
});

await Bun.build({
  entrypoints: ['./index.tsx'],
  // granular options
  minify: {
    identifiers: true,
    syntax: true,
    whitespace: true
  }
});
```

### Response

#### Success Response (200)

N/A (Bun.build returns a Promise that resolves to a BuildResult object, not a direct response body.)

#### Response Example

```javascript
// Example of a successful build result (not a direct response)
{
  "logs": [],
  "outputs": [
    // ... file paths ...
  ]
}
```

### Notes

- `mangleProps`, `mangleQuoted`, `metafile`, `nodePaths`, and `outExtension` are not supported in the current version of Bun.
- `minifyIdentifiers`, `minifySyntax`, and `minifyWhitespace` are sub-properties of the `minify` object.
```

--------------------------------

### Override Configuration with CLI Flags

Source: https://bun.sh/docs/test/configuration

Demonstrates how command-line flags for `bun test` can override settings defined in the `bunfig.toml` file. For example, `--timeout` and `--coverage` flags directly impact test execution parameters.

```bash
bun test --timeout 10000 --coverage
```

--------------------------------

### ArrayBuffer Byte Length and Slicing in TypeScript

Source: https://bun.sh/docs/runtime/binary-data

Shows how to get the byte length of an ArrayBuffer and how to create a new ArrayBuffer by slicing an existing one. Slicing allows you to extract portions of the binary data.

```typescript
const buf = new ArrayBuffer(8);
buf.byteLength; // => 8

const slice = buf.slice(0, 4); // returns new ArrayBuffer
slice.byteLength; // => 4

```

--------------------------------

### install.registry

Source: https://bun.sh/docs/runtime/bunfig

Sets the default npm registry. The default is `https://registry.npmjs.org/`. This can be configured globally in `bunfig.toml` with various options including URL, token, or username/password.

```APIDOC
## `install.registry`

### Description
The default registry is `https://registry.npmjs.org/`. This can be globally configured in `bunfig.toml`.

### Method
Configuration

### Endpoint
N/A (Configuration setting)

### Parameters
#### Path Parameters
None

#### Query Parameters
None

#### Request Body
None

### Request Example
```toml
[install]
# set default registry as a string
registry = "https://registry.npmjs.org"

# set a token
registry = { url = "https://registry.npmjs.org", token = "123456" }

# set a username/password
registry = "https://username:password@registry.npmjs.org"
```

### Response
#### Success Response (200)
N/A (Configuration setting)

#### Response Example
N/A
```

--------------------------------

### Configure FileSink buffer size in TypeScript

Source: https://bun.sh/docs/guides/write-file/filesink

Shows how to configure the internal buffer size of a FileSink using the highWaterMark option. This allows for more efficient writing of large amounts of data by adjusting the buffer to 1MB in this example.

```typescript
const file = Bun.file("/path/to/file.txt");
const writer = file.writer({ highWaterMark: 1024 * 1024 }); // 1MB
```

--------------------------------

### Windows Executable Options

Source: https://bun.sh/docs/bundler

Configure the details of a compiled Windows executable, such as its icon, title, publisher, version, and more.

```APIDOC
## Windows Executable Configuration

### Description
These options allow you to customize the metadata and behavior of Windows executables compiled with Bun.

### Method
N/A (These are command-line flags for the `bun build` command)

### Endpoint
N/A

### Parameters
#### Query Parameters
- **--windows-hide-console** (boolean) - Optional - Prevent a console window from opening when running a compiled Windows executable.
- **--windows-icon** (string) - Optional - Set an icon for the Windows executable.
- **--windows-title** (string) - Optional - Set the Windows executable product name.
- **--windows-publisher** (string) - Optional - Set the Windows executable company name.
- **--windows-version** (string) - Optional - Set the Windows executable version (e.g. `1.2.3.4`).
- **--windows-description** (string) - Optional - Set the Windows executable description.
- **--windows-copyright** (string) - Optional - Set the Windows executable copyright notice.

### Request Example
```bash
bun build --target win32 --windows-icon=./my-icon.ico --windows-title="My App" --outfile=my-app.exe src/index.ts
```

### Response
#### Success Response (N/A)
N/A

#### Response Example
N/A
```

--------------------------------

### Check File Eligibility for Preloading (Bun)

Source: https://bun.sh/docs/guides/ecosystem/tanstack-start

Determines if a file is suitable for preloading based on configured include and exclude patterns. It checks the filename against these patterns to decide eligibility. This helps optimize asset loading by only preloading relevant files.

```typescript
function isFileEligibleForPreloading(relativePath: string): boolean {
  const fileName = relativePath.split(/[/\]/).pop() ?? relativePath

  // If include patterns are specified, file must match at least one
  if (INCLUDE_PATTERNS.length > 0) {
    if (!INCLUDE_PATTERNS.some((pattern) => pattern.test(fileName))) {
      return false
    }
  }

  // If exclude patterns are specified, file must not match any
  if (EXCLUDE_PATTERNS.some((pattern) => pattern.test(fileName))) {
    return false
  }

  return true
}
```

--------------------------------

### Configure External Imports in Bun Build (CLI)

Source: https://bun.sh/docs/bundler

This command-line interface (CLI) example shows how to use the `bun build` command with the `--external` flag to prevent specific modules or all modules from being bundled. It illustrates excluding 'lodash' and 'react', excluding 'zod', and excluding all modules using the wildcard '*'.

```bash
bun build ./index.tsx --outdir ./out --external lodash --external react
```

```bash
bun build ./index.tsx --outdir ./out --external zod
```

```bash
bun build ./index.tsx --outdir ./out --external '*'
```

--------------------------------

### Best Practices for Service Names with Bun.secrets (JavaScript)

Source: https://bun.sh/docs/runtime/secrets

Provides examples of best practices for naming services when using Bun.secrets. It contrasts good, descriptive names (often using UTIs) with overly generic ones to ensure clarity and maintainability.

```javascript
// Good - matches the actual tool
{ service: "com.docker.hub", name: "username" }
{ service: "com.vercel.cli", name: "team-name" }

// Avoid - too generic
{ service: "api", name: "key" }

```

--------------------------------

### Configure Security Scanner in bunfig.toml

Source: https://bun.sh/docs/pm/security-scanner-api

This snippet shows how to configure a security scanner in the bunfig.toml file. It specifies the scanner package to be used during package installations. This configuration enables Bun to automatically scan packages for security issues.

```toml
[install.security]
scanner = "@acme/bun-security-scanner"
```

--------------------------------

### Get All Query Results as Array of Arrays with .values() in TypeScript

Source: https://bun.sh/docs/runtime/sqlite

The `.values()` method executes a query and returns all results as an array of arrays. This is suitable when all query results need to be fetched and processed as a collection.

```typescript
const query = db.query(`select $message;`);

query.values({ $message: "Hello world" });
query.values(2);
```

--------------------------------

### Configure tsconfig.json for Path Remapping

Source: https://bun.sh/docs/guides/runtime/tsconfig-paths

This JSON snippet demonstrates how to configure the 'paths' option within tsconfig.json. It shows examples of aliasing a package name ('my-custom-name' to 'zod') and remapping a directory alias ('@components/*' to './src/components/*').

```json
{
  "compilerOptions": {
    "paths": {
      "my-custom-name": ["zod"],
      "@components/*": ["./src/components/*"]
    }
  }
}
```

--------------------------------

### Bun.Cookie Properties

Source: https://bun.sh/docs/runtime/cookies

Access properties of a Bun.Cookie object to get its name, value, domain, path, expiration, security settings, and more. These properties provide detailed information about the cookie's configuration.

```typescript
cookie.name; // string - Cookie name
cookie.value; // string - Cookie value
cookie.domain; // string | null - Domain scope (null if not specified)
cookie.path; // string - URL path scope (defaults to "/")
cookie.expires; // number | undefined - Expiration timestamp (ms since epoch)
cookie.secure; // boolean - Require HTTPS
cookie.sameSite; // "strict" | "lax" | "none" - SameSite setting
cookie.partitioned; // boolean - Whether the cookie is partitioned (CHIPS)
cookie.maxAge; // number | undefined - Max age in seconds
cookie.httpOnly; // boolean - Accessible only via HTTP (not JavaScript)
```

--------------------------------

### Log in to AWS ECR with Docker

Source: https://bun.sh/docs/guides/deployment/aws-lambda

Authenticates Docker with your AWS Elastic Container Registry (ECR) using your account credentials. This command retrieves a temporary password and pipes it to the docker login command. Ensure you have the AWS CLI installed and configured.

```bash
aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin $ECR_URI
```

```bash
aws ecr get-login-password --region us-east-1 --profile my-sso-app | docker login --username AWS --password-stdin $ECR_URI
```

--------------------------------

### DNS Prefetching in TypeScript

Source: https://bun.sh/docs/runtime/networking/fetch

Demonstrates how to use Bun's `dns.prefetch` API to perform a DNS lookup in advance. This can improve performance by reducing latency for subsequent connections to the specified host. Requires importing `dns` from `bun`.

```typescript
import { dns } from "bun";

dns.prefetch("bun.com");
```

--------------------------------

### Return C String to JavaScript using N-API

Source: https://bun.sh/docs/runtime/c-compiler

Illustrates how to return a C string from a C function to JavaScript. This example utilizes N-API types (`napi_env`, `napi_value`) to handle the string conversion, showing the C function signature and the JavaScript call.

```ts
import { cc } from "bun:ffi";
import source from "./hello.c" with { type: "file" };

const { 
  symbols: { hello }, 
} = cc({
  source,
  symbols: {
    hello: {
      args: ["napi_env"],
      returns: "napi_value",
    },
  },
});

const result = hello();
```

```c
#include <node/node_api.h>

napi_value hello(napi_env env) {
  napi_value result;
  napi_create_string_utf8(env, "Hello, Napi!", NAPI_AUTO_LENGTH, &result);
  return result;
}
```

--------------------------------

### Read and Parse JSON File with Bun.file()

Source: https://bun.sh/docs/guides/read-file/json

Demonstrates how to use Bun.file() to get a BunFile instance and then use the .json() method to read and parse the file's contents as a JavaScript object. The MIME type of the file is also shown.

```typescript
const path = "/path/to/package.json";
const file = Bun.file(path);

const contents = await file.json();
// { name: "my-package" }

file.type; // => "application/json;charset=utf-8";
```

--------------------------------

### Bun Build: Minification and Optimization Options

Source: https://bun.sh/docs/bundler

Enable various minification techniques to reduce bundle size. Options include enabling all minification, minifying syntax, whitespace, and identifiers, as well as preserving original names.

```bash
# Enable all minification options
bun build --minify

# Minify syntax and inline constants
bun build --minify-syntax

# Minify whitespace
bun build --minify-whitespace

# Minify variable and function identifiers
bun build --minify-identifiers

# Preserve original function and class names
bun build --keep-names

```

--------------------------------

### Log Detailed Verbose File Information (JavaScript)

Source: https://bun.sh/docs/guides/ecosystem/tanstack-start

When verbose logging is enabled, this snippet displays detailed information for all loaded and skipped files. It includes the file's status (MEMORY or ON-DEMAND), path, MIME type, and the reason for its status (e.g., 'too large', 'filtered', 'preloaded').

```javascript
if (VERBOSE) {
  if (loaded.length > 0 || skipped.length > 0) {
    const allFiles = [...loaded, ...skipped].sort((a, b) =>
      a.route.localeCompare(b.route),
    )
    console.log('
📊 Detailed file information:')
    console.log(
      'Status       │ Path                            │ MIME Type                    │ Reason',
    )
    allFiles.forEach((file) => {
      const isPreloaded = loaded.includes(file)
      const status = isPreloaded ? 'MEMORY' : 'ON-DEMAND'
      const reason =
        !isPreloaded && file.size > MAX_PRELOAD_BYTES
          ? 'too large'
          : !isPreloaded
            ? 'filtered'
            : 'preloaded'
      const route =
        file.route.length > 30
          ? file.route.substring(0, 27) + '...'
          : file.route
      console.log(
        `${status.padEnd(12)} │ ${route.padEnd(30)} │ ${file.type.padEnd(28)} │ ${reason.padEnd(10)}`,
      )
    })
  } else {
    console.log('
📊 No files found to display')
  }
}
```

--------------------------------

### Bun Test: Filtering by Test Name Pattern Example

Source: https://bun.sh/docs/test/discovery

This TypeScript code demonstrates a test structure. The `describe` blocks and `test` name are concatenated to form the string against which the `--test-name-pattern` is matched.

```typescript
describe("Math", () => {
  describe("operations", () => {
    test("should add correctly", () => {
      // ...
    });
  });
});
```

--------------------------------

### Package.json Dependency Versioning Comparison

Source: https://bun.sh/docs/pm/cli/add

Illustrates how '--exact' flag affects the versioning of a dependency in package.json. '^' denotes a version range, while a plain version number denotes an exact match.

```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react": "18.2.0"
  }
}
```

--------------------------------

### Bundle Globally Accessible JavaScript/TypeScript Functions

Source: https://bun.sh/docs/project/contributing

Bundles globally accessible functions implemented in JavaScript/TypeScript, such as `ReadableStream` and `WritableStream`. The output format is designed to align with WebKit/Safari's implementation for easier code adoption.

```typescript
import path from "path";
import fs from "fs";

function bundleGlobalFunctions() {
  console.log("Bundling globally accessible functions...");
  // ... (logic to bundle functions like ReadableStream, WritableStream) ...
  const bundledFunctionsContent = "// Bundled global functions\n";
  fs.writeFileSync(path.join(__dirname, "../../build/debug/codegen/global_functions.js"), bundledFunctionsContent);
  console.log("Global functions bundling complete.");
}

// Example usage (would be called by build system)
// bundleGlobalFunctions();
```

--------------------------------

### React Application Entry Point (TypeScript)

Source: https://bun.sh/docs/bundler

This is the main entry point for a client-side rendered React application. It uses `react-dom/client` to render a root component into a DOM element. This code requires a build process to transpile JSX and TypeScript.

```typescript
import * as ReactDOM from "react-dom/client";
import { Component } from "./Component";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(<Component message="Sup!" />);
```

--------------------------------

### Serve Static HTML with Bun HTTP Server

Source: https://bun.sh/docs/quickstart

This TypeScript code snippet sets up a Bun HTTP server that serves a static HTML file from the root route. It imports the HTML file and configures the server to respond with its content. The server listens on port 3000 and also provides a '/figlet' route for generating text art.

```typescript
import figlet from 'figlet';
import index from './index.html'; // [!code ++]

const server = Bun.serve({
  port: 3000,
  routes: {
    "/": index, // [!code ++]
    "/figlet": () => {
      const body = figlet.textSync('Bun!');
      return new Response(body);
    }
  }
});

console.log(`Listening on ${server.url}`);
```

--------------------------------

### Compute ETag for Data Buffer in Bun

Source: https://bun.sh/docs/guides/ecosystem/tanstack-start

A placeholder function intended to compute an ETag (Entity Tag) for a given data buffer. ETags are typically used for caching and conditional requests in HTTP.

```typescript
/**
* Compute ETag for a given data buffer
*/

```

--------------------------------

### Bundle React App with Bun CLI (Bash)

Source: https://bun.sh/docs/bundler

This command-line interface approach uses Bun to bundle a React application. It's a quick way to generate a bundle from the terminal. Specify the entry point and the output directory.

```bash
bun build ./index.tsx --outdir ./out
```

--------------------------------

### Vitest Compatibility with vi Alias in TypeScript

Source: https://bun.sh/docs/test/mocks

This example demonstrates Bun's compatibility with Vitest by providing a `vi` object as an alias for common Jest mocking functions. It shows how to create a mock function using `vi.fn()` and assert that it has been called. This feature simplifies migrating tests from Vitest to Bun, as existing mocking patterns can often be reused.

```typescript
import { test, expect, vi } from "bun:test";

// Using the 'vi' alias similar to Vitest
test("vitest compatibility", () => {
  const mockFn = vi.fn(() => 42);

  mockFn();
  expect(mockFn).toHaveBeenCalled();

  // The following functions are available on the vi object:
  // vi.fn
  // vi.spyOn
  // vi.mock
  // vi.restoreAllMocks
  // vi.clearAllMocks
});
```

--------------------------------

### Generate Bun Bytecode in CI/CD Pipeline (GitHub Actions)

Source: https://bun.sh/docs/bundler/bytecode

This YAML snippet shows how to integrate Bun bytecode generation into a GitHub Actions workflow. It includes steps for installing dependencies and running the `bun build` command with the `--bytecode` flag. This automates the build process for production.

```yaml
# GitHub Actions
- name: Build with bytecode
  run: |
    bun install
    bun build --bytecode --minify \
      --outdir=./dist \
      --target=bun \
      ./src/index.ts
```

--------------------------------

### Get Client IP and Port with server.requestIP()

Source: https://bun.sh/docs/runtime/http/server

Retrieve client IP and port information for a given request using `server.requestIP(req)`. This method returns `null` for closed requests or when dealing with Unix domain sockets.

```typescript
const server = Bun.serve({
  fetch(req, server) {
    const address = server.requestIP(req);
    if (address) {
      return new Response(`Client IP: ${address.address}, Port: ${address.port}`);
    }
    return new Response("Unknown client");
  },
});
```

--------------------------------

### Disable Bun's Native Dependency Optimizations

Source: https://bun.sh/docs/pm/cli/install

Temporarily disable Bun's automatic optimizations for native dependency linking and script ignoring using environment variables. This can be useful for debugging or specific build scenarios.

```bash
BUN_FEATURE_FLAG_DISABLE_NATIVE_DEPENDENCY_LINKER=1 bun install
BUN_FEATURE_FLAG_DISABLE_IGNORE_SCRIPTS=1 bun install
```

--------------------------------

### Configure Plugins for Bun Bundling (JavaScript API)

Source: https://bun.sh/docs/bundler

Illustrates how to specify an array of plugins to be used during the Bun bundling process via the JavaScript API. Bun offers a universal plugin system compatible with its runtime and bundler.

```typescript
await Bun.build({
  entrypoints: ["./index.tsx"],
  outdir: "./out",
  plugins: [
    /* ... */
  ],
});
```

--------------------------------

### Disable AddressSanitizer in Build Configuration

Source: https://bun.sh/docs/project/contributing

Modifies the CMake build configuration to disable AddressSanitizer. This can speed up build times if ASan is causing productivity issues, though it's generally recommended to keep it enabled.

```cmake
set(ENABLE_ASAN false)
# Or directly in the build command if using a script that passes variables:
# cmake .. -Denable_asan=false
```

--------------------------------

### Get Absolute Path of Current File in Bun (TypeScript)

Source: https://bun.sh/docs/guides/util/import-meta-path

Retrieves the absolute path of the current file using `import.meta.path` in Bun. This is a built-in feature of Bun's module system and requires no external dependencies.

```typescript
import.meta.path; // => "/a/b/c.ts"
```

--------------------------------

### Presigning S3 URLs with Bun

Source: https://bun.sh/docs/runtime/s3

Explains how to generate presigned URLs for S3 operations using Bun. Covers creating presigned URLs for downloads (GET) and uploads (PUT) with custom expiration times, methods, content types, and content dispositions.

```typescript
import { s3 } from "bun";

// Generate a presigned URL that expires in 24 hours (default)
const download = s3.presign("my-file.txt"); // GET, text/plain, expires in 24 hours

const upload = s3.presign("my-file", {
  expiresIn: 3600, // 1 hour
  method: "PUT",
  type: "application/json", // Sets response-content-type in the presigned URL
});

// Presign with content disposition (e.g. force download with a specific filename)
const downloadUrl = s3.presign("report.pdf", {
  expiresIn: 3600,
  contentDisposition: 'attachment; filename="quarterly-report.pdf"',
});

// You can call .presign() if on a file reference, but avoid doing so
// unless you already have a reference (to avoid memory usage).
const myFile = s3.file("my-file.txt");
const presignedFile = myFile.presign({
  expiresIn: 3600, // 1 hour
});
```

--------------------------------

### Create DigitalOcean Container Registry via CLI

Source: https://bun.sh/docs/guides/deployment/digital-ocean

This command creates a new DigitalOcean Container Registry named 'bun-digitalocean-demo'. The output confirms the registry creation, showing its name, endpoint, and region.

```bash
doctl registry create bun-digitalocean-demo
```

--------------------------------

### Run StricJS Server in Watch Mode (Bash)

Source: https://bun.sh/docs/guides/ecosystem/stric

This bash command starts the StricJS development server using Bun. The `--watch` flag enables hot-reloading, automatically restarting the server whenever changes are detected in the specified TypeScript file (index.ts).

```bash
bun --watch run index.ts
```

--------------------------------

### Import TOML File in Bun (TypeScript)

Source: https://bun.sh/docs/guides/runtime/import-toml

This snippet shows how to import a TOML file directly into a TypeScript file within a Bun project. Bun's native support allows treating TOML files as modules, making configuration data easily accessible. No external packages are required for this basic functionality.

```toml
name = "bun"
version = "1.0.0"

[author]
name = "John Dough"
email = "john@dough.com"
```

```typescript
import data from "./data.toml";

data.name; // => "bun"
data.version; // => "1.0.0"
data.author.name; // => "John Dough"
```

--------------------------------

### Configure Metafile Output in Bun Build (TypeScript)

Source: https://bun.sh/docs/bundler

Demonstrates how to configure the `metafile` option in Bun.build using TypeScript. It shows how to enable the metafile as a boolean, specify a JSON output path as a string, or define separate JSON and Markdown output paths using an object.

```typescript
// Boolean — include metafile in the result object
await Bun.build({
  entrypoints: ["./src/index.ts"],
  outdir: "./dist",
  metafile: true,
});

// String — write JSON metafile to a specific path
await Bun.build({
  entrypoints: ["./src/index.ts"],
  outdir: "./dist",
  metafile: "./dist/meta.json",
});

// Object — specify separate paths for JSON and markdown output
await Bun.build({
  entrypoints: ["./src/index.ts"],
  outdir: "./dist",
  metafile: {
    json: "./dist/meta.json",
    markdown: "./dist/meta.md",
  },
});
```

--------------------------------

### Load and Use Database Configuration in TypeScript

Source: https://bun.sh/docs/runtime/yaml

Imports database configuration from a YAML file, parses environment variables, and establishes database connections using TypeScript. It also includes logic for auto-running migrations.

```typescript
import { connections, migrations } from "./database.yaml";
import { createConnection } from "./database-driver";

// Parse environment variables with defaults
function parseConfig(config: any) {
  return JSON.parse(
    JSON.stringify(config).replace(
      /\${([^:-]+)(?::([^}]+))?}/g,
      (_, key, defaultValue) => process.env[key] || defaultValue || "",
    ),
  );
}

const dbConfig = parseConfig(connections);

export const db = await createConnection(dbConfig.primary);
export const cache = await createConnection(dbConfig.cache);
export const analytics = await createConnection(dbConfig.analytics);

// Auto-run migrations if configured
if (parseConfig(migrations).autoRun === "true") {
  await runMigrations(db, migrations.directory);
}
```

--------------------------------

### Generate JSSink.cpp and JSSink.h for ReadableStream

Source: https://bun.sh/docs/project/contributing

This script generates C++ header and source files for interfacing with ReadableStream, handling various stream types like FileSink and ArrayBufferSink. It's a core part of Bun's stream implementation.

```typescript
import path from "path";
import fs from "fs";

const JSSINK_H_PATH = path.join(__dirname, "../../build/debug/codegen/JSSink.h");
const JSSINK_CPP_PATH = path.join(__dirname, "../../build/debug/codegen/JSSink.cpp");

function generateJSSink() {
  // Implementation to generate JSSink.h and JSSink.cpp
  console.log("Generating JSSink.h and JSSink.cpp...");
  // ... (code generation logic) ...
  fs.writeFileSync(JSSINK_H_PATH, "// JSSink.h content\n");
  fs.writeFileSync(JSSINK_CPP_PATH, "// JSSink.cpp content\n");
  console.log("JSSink generation complete.");
}

// Example usage (would be called by build system)
// generateJSSink();
```

--------------------------------

### Bun.js DataView: Out-of-Bounds Write Error

Source: https://bun.sh/docs/runtime/binary-data

Demonstrates an example of attempting to write a value that exceeds the available space in the underlying ArrayBuffer, resulting in a RangeError. This illustrates the bounds checking of DataView operations.

```typescript
dv.setFloat64(0, 3.1415);
// ^ RangeError: Out of bounds access
```

--------------------------------

### Get Current File Name with import.meta.file (TypeScript)

Source: https://bun.sh/docs/guides/util/import-meta-file

Retrieves the name of the current file using the `import.meta.file` property provided by Bun. This utility is part of Bun's module-specific utilities available on the `import.meta` object.

```typescript
import.meta.file; // => "c.ts"
```

--------------------------------

### Transform HTML with CSS Selectors using Bun's HTMLRewriter

Source: https://bun.sh/docs/runtime/html-rewriter

Demonstrates how to use HTMLRewriter to select HTML elements based on CSS selectors and modify their attributes, content, or structure. This example replaces image sources and wraps them in links.

```typescript
const rewriter = new HTMLRewriter().on("img", {
  element(img) {
    img.setAttribute("src", "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg");
    img.before('<a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">', {
      html: true,
    });
    img.after("</a>", { html: true });
    img.setAttribute("alt", "Definitely not a rickroll");
  },
});
const html = `
<html>
<body>
  <img src="/cat.jpg">
  <img src="dog.png">
  <img src="https://example.com/bird.webp">
</body>
</html>
`;
const result = rewriter.transform(html);
console.log(result);
```

--------------------------------

### Using fetch() with a Proxy URL

Source: https://bun.sh/docs/guides/http/proxy

Demonstrates how to send a fetch request through an HTTP or HTTPS proxy by specifying the proxy URL directly in the fetch options.

```APIDOC
## POST /fetch-with-proxy

### Description
Sends an HTTP GET request to a target URL through a specified proxy server.

### Method
GET

### Endpoint
/fetch-with-proxy

### Parameters
#### Query Parameters
- **targetUrl** (string) - Required - The URL of the resource to fetch.
- **proxyUrl** (string) - Required - The URL of the proxy server, including protocol, host, port, and optional credentials (e.g., `https://username:password@proxy.example.com:8080`).

### Request Example
```bash
curl -X GET "https://example.com/fetch-with-proxy?targetUrl=https://example.com&proxyUrl=https://username:password@proxy.example.com:8080"
```

### Response
#### Success Response (200)
- **body** (string) - The response body from the target URL.

#### Response Example
```json
{
  "body": "<html><body>Hello, World!</body></html>"
}
```
```

--------------------------------

### Create Mock Functions with `mock` in Bun Test (TypeScript)

Source: https://bun.sh/docs/test

The `mock` function from `bun:test` allows you to create mock functions for testing. You can assert on their calls and call counts. This example demonstrates mocking `Math.random`.

```ts
import { test, expect, mock } from "bun:test";
const random = mock(() => Math.random());

test("random", () => {
  const val = random();
  expect(val).toBeGreaterThan(0);
  expect(random).toHaveBeenCalled();
  expect(random).toHaveBeenCalledTimes(1);
});
```

--------------------------------

### JSX Transpilation Output Examples

Source: https://bun.sh/docs/runtime/jsx

Shows the transpiled JavaScript output for a basic JSX component ('<Box width={5}>Hello</Box>') based on different 'jsx' compiler configurations in Bun. This highlights how Bun converts JSX to standard JavaScript function calls.

```typescript
import { createElement } from "react";
createElement("Box", { width: 5 }, "Hello");
```

```typescript
import { jsx } from "react/jsx-runtime";
jsx("Box", { width: 5 }, "Hello");
```

```typescript
import { jsxDEV } from "react/jsx-dev-runtime";
jsxDEV(
  "Box",
  { width: 5, children: "Hello" },
  undefined,
  false,
  undefined,
  this,
);

```

```typescript
// JSX is not transpiled
// "preserve" is not supported by Bun currently
<Box width={5}>Hello</Box>
```

--------------------------------

### Build Project with Tailwind Plugin using Bun API

Source: https://bun.sh/docs/bundler/standalone-html

Uses Bun.build() to compile an HTML entrypoint with the Tailwind plugin enabled. This command bundles the HTML, CSS, and JavaScript into a single output file.

```typescript
await Bun.build({
  entrypoints: ["./index.html"],
  compile: true,
  target: "browser",
  outdir: "./dist",
  plugins: [require("bun-plugin-tailwind")],
});
```

--------------------------------

### Async Lifecycle Hooks in Bun.js Tests

Source: https://bun.sh/docs/test/lifecycle

Demonstrates the use of asynchronous functions within Bun.js lifecycle hooks (`beforeAll`, `afterAll`). This allows for setup and teardown operations that involve asynchronous tasks, such as waiting for timers or other promises.

```typescript
import { beforeAll, afterAll, test } from "bun:test";

beforeAll(async () => {
  // Async setup
  await new Promise(resolve => setTimeout(resolve, 100));
  console.log("Async setup complete");
});

afterAll(async () => {
  // Async teardown
  await new Promise(resolve => setTimeout(resolve, 100));
  console.log("Async teardown complete");
});

test("async test", async () => {
  // Test will wait for beforeAll to complete
  await expect(Promise.resolve("test")).resolves.toBe("test");
});
```

--------------------------------

### Bun: Per-File Setup/Teardown with beforeAll and afterAll

Source: https://bun.sh/docs/test/lifecycle

Shows how to scope `beforeAll` and `afterAll` hooks to an entire test file in Bun. These hooks execute once before any tests in the file run (`beforeAll`) and once after all tests in the file have completed (`afterAll`).

```typescript
import { describe, beforeAll, afterAll, test } from "bun:test";

beforeAll(() => {
  // setup for entire file
  console.log("Setting up test file");
});

afterAll(() => {
  // teardown for entire file
  console.log("Tearing down test file");
});

describe("test group", () => {
  test("test 1", () => {
    // test implementation
  });
});
```

--------------------------------

### Dynamic Imports of JSON5

Source: https://bun.sh/docs/runtime/json5

Demonstrates how to dynamically import JSON5 files using the `await import()` syntax. This allows for loading configuration files on demand.

```typescript
const config = await import("./config.json5");
```

--------------------------------

### Serve HTML Files with Normalized Paths using Bun

Source: https://bun.sh/docs/bundler/html-static

Command demonstrating how Bun normalizes paths when serving multiple HTML files, determining the longest common prefix for routing.

```bash
bun ./index.html ./about/index.html ./about/foo/index.html
```

--------------------------------

### Fetch from S3 Buckets using Bun

Source: https://bun.sh/docs/runtime/networking/fetch

Demonstrates how to fetch objects from S3 buckets using the `s3://` protocol with Bun's fetch API. Credentials can be provided via environment variables or explicitly in the `s3` option. PUT/POST requests support request bodies and automatically use multipart upload for streaming.

```typescript
// Using environment variables for credentials
const response = await fetch("s3://my-bucket/path/to/object");

// Or passing credentials explicitly
const response = await fetch("s3://my-bucket/path/to/object", {
  s3: {
    accessKeyId: "YOUR_ACCESS_KEY",
    secretAccessKey: "YOUR_SECRET_KEY",
    region: "us-east-1",
  },
});
```

--------------------------------

### MySQL Auto-Detection with SQL Constructor (TypeScript)

Source: https://bun.sh/docs/runtime/sql

Shows how to automatically detect and connect to a MySQL database using the `SQL` constructor with a connection string. Supports both `mysql://` and `mysql2://` protocols. This configuration can also be set via the `DATABASE_URL` environment variable.

```typescript
// These all use MySQL automatically (no adapter needed)
const sql1 = new SQL("mysql://user:pass@localhost/mydb");
const sql2 = new SQL("mysql2://user:pass@localhost:3306/mydb");

// Works with DATABASE_URL environment variable
DATABASE_URL="mysql://user:pass@localhost/mydb" bun run app.js
DATABASE_URL="mysql2://user:pass@localhost:3306/mydb" bun run app.js
```

--------------------------------

### Create Response Handler with ETag and Gzip (Bun)

Source: https://bun.sh/docs/guides/ecosystem/tanstack-start

Generates a request handler function for serving assets with ETag and gzip support. It sets appropriate headers like Content-Type, Cache-Control, ETag, and Content-Encoding. It also handles conditional requests (304 Not Modified) and serves either the gzipped or raw asset based on client capabilities.

```typescript
function createResponseHandler(
  asset: InMemoryAsset,
): (req: Request) => Response {
  return (req: Request) => {
    const headers: Record<string, string> = {
      'Content-Type': asset.type,
      'Cache-Control': asset.immutable
        ? 'public, max-age=31536000, immutable'
        : 'public, max-age=3600',
    }

    if (ENABLE_ETAG && asset.etag) {
      const ifNone = req.headers.get('if-none-match')
      if (ifNone && ifNone === asset.etag) {
        return new Response(null, {
          status: 304,
          headers: { ETag: asset.etag },
        })
      }
      headers.ETag = asset.etag
    }

    if (
      ENABLE_GZIP &&
      asset.gz &&
      req.headers.get('accept-encoding')?.includes('gzip')
    ) {
      headers['Content-Encoding'] = 'gzip'
      headers['Content-Length'] = String(asset.gz.byteLength)
      const gzCopy = new Uint8Array(asset.gz)
      return new Response(gzCopy, { status: 200, headers })
    }

    headers['Content-Length'] = String(asset.raw.byteLength)
    const rawCopy = new Uint8Array(asset.raw)
    return new Response(rawCopy, { status: 200, headers })
  }
}
```

--------------------------------

### Embed SQLite Databases with Bun Build

Source: https://bun.sh/docs/bundler/executables

Shows how to embed an existing SQLite database file into a compiled Bun executable. By setting `type: "sqlite"` and `embed: "true"` during import, the database is included in the binary. The embedded database is read-write in memory but changes are lost on exit. The example also includes the command to compile the application.

```typescript
import myEmbeddedDb from "./my.db" with { type: "sqlite", embed: "true" };

console.log(myEmbeddedDb.query("select * from users LIMIT 1").get());
```

```bash
bun build --compile ./index.ts --outfile mycli
```

--------------------------------

### Programmatic Standalone HTML Build with Bun API

Source: https://bun.sh/docs/bundler/standalone-html

Demonstrates how to use Bun.build() to create a standalone HTML file programmatically. It includes error handling for build failures and logs the output path upon success.

```typescript
const result = await Bun.build({
  entrypoints: ["./index.html"],
  compile: true,
  target: "browser",
  outdir: "./dist", // optional — omit to get output as BuildArtifact
  minify: true,
});

if (!result.success) {
  console.error("Build failed:");
  for (const log of result.logs) {
    console.error(log);
  }
} else {
  console.log("Built:", result.outputs[0].path);
}
```

--------------------------------

### Configure Bun S3Client for S3 Virtual Hosted-Style Endpoints

Source: https://bun.sh/docs/runtime/s3

This snippet demonstrates how to configure Bun's S3Client for virtual hosted-style endpoints. Setting `virtualHostedStyle: true` is crucial for this configuration. Examples are provided for AWS S3 and Cloudflare R2.

```typescript
import { S3Client } from "bun";

// AWS S3 endpoint inferred from region and bucket
const s3 = new S3Client({
  accessKeyId: "access-key",
  secretAccessKey: "secret-key",
  bucket: "my-bucket",
  virtualHostedStyle: true, // [!code ++]
  // endpoint: "https://my-bucket.s3.us-east-1.amazonaws.com",
  // region: "us-east-1",
});

// AWS S3
const s3WithEndpoint = new S3Client({
  accessKeyId: "access-key",
  secretAccessKey: "secret-key",
  endpoint: "https://<bucket-name>.s3.<region>.amazonaws.com",
  virtualHostedStyle: true, // [!code ++]
});

// Cloudflare R2
const r2WithEndpoint = new S3Client({
  accessKeyId: "access-key",
  secretAccessKey: "secret-key",
  endpoint: "https://<bucket-name>.<account-id>.r2.cloudflarestorage.com",
  virtualHostedStyle: true, // [!code ++]
});
```

--------------------------------

### Get JavaScript Heap Statistics in Bun

Source: https://bun.sh/docs/project/benchmarking

This snippet demonstrates how to import and use the `heapStats` function from the `bun:jsc` module to retrieve current JavaScript heap memory usage statistics. The output includes heap size, capacity, object counts, and detailed counts by object type.

```typescript
import { heapStats } from "bun:jsc";
console.log(heapStats());
```

--------------------------------

### Bun Test Best Practice: Use Appropriate Matchers (TypeScript)

Source: https://bun.sh/docs/test/writing-tests

Employing specific matchers leads to more readable and maintainable tests compared to using generic equality checks. This example contrasts the use of specific matchers with generic `.toBe(true)`.

```typescript
// Good: Use specific matchers
expect(users).toHaveLength(3);
expect(user.email).toContain("@");
expect(response.status).toBeGreaterThanOrEqual(200);

// Avoid: Using toBe for everything
expect(users.length === 3).toBe(true);
expect(user.email.includes("@")).toBe(true);
expect(response.status >= 200).toBe(true);
```

--------------------------------

### Serve HTML File with Bun

Source: https://bun.sh/docs/bundler/html-static

Command to serve a single HTML file using Bun. This is useful for static sites and single-page applications where the HTML file acts as the entry point.

```bash
bun ./index.html
```

--------------------------------

### Updating Monorepo Dependency Versions (JSON)

Source: https://bun.sh/docs/pm/catalogs

Illustrates how to update dependency versions across the monorepo by modifying the 'catalog' section in the root package.json. Running 'bun install' after this change will propagate the updates to all dependent packages.

```json
"catalog": {
  "react": "^19.1.0",  // Updated from ^19.0.0
  "react-dom": "^19.1.0"  // Updated from ^19.0.0
}
```

--------------------------------

### Error Handling

Source: https://bun.sh/docs/runtime/html-rewriter

Outlines potential errors that can occur during HTMLRewriter operations, including invalid selector syntax, invalid HTML content, stream errors, and memory allocation failures. Provides an example of how to catch and handle these errors.

```APIDOC
## Error Handling

### Description
Outlines potential errors that can occur during HTMLRewriter operations, including invalid selector syntax, invalid HTML content, stream errors, and memory allocation failures. Provides an example of how to catch and handle these errors.

### Method
`transform(input)` (and other HTMLRewriter methods)

### Endpoint
N/A (Applies to operations performed by the HTMLRewriter instance)

### Parameters
None directly for error handling, but operations within `transform` can throw errors.

### Request Example
```javascript
try {
  const result = rewriter.transform(input);
  // Process result
} catch (error) {
  console.error("HTMLRewriter error:", error);
}
```

### Response
#### Success Response (N/A)
Successful execution does not produce a specific error response.

#### Response Example
N/A

### Common Errors
- **Invalid selector syntax**: Errors in selectors passed to `on()`.
- **Invalid HTML content**: Malformed HTML encountered during transformation.
- **Stream errors**: Issues during the processing of Response bodies.
- **Memory allocation failures**: System-level memory issues.
- **Invalid input types**: Providing incorrect data types (e.g., Symbol).
- **Body already used errors**: Attempting to use a Response body more than once.
```

--------------------------------

### Getting Raw Pointer from TypedArray using ptr()

Source: https://bun.sh/docs/runtime/ffi

Illustrates how to obtain a raw pointer to a Bun TypedArray using the `ptr()` function from `bun:ffi`. This is useful when direct pointer manipulation or specific byte offsets are required.

```typescript
import { dlopen, FFIType, ptr } from "bun:ffi";

const { 
  symbols: { encode_png }, 
} = dlopen(myLibraryPath, {
  encode_png: {
    // FFIType's can be specified as strings too
    args: ["ptr", "u32", "u32"],
    returns: FFIType.ptr,
  },
});

const pixels = new Uint8ClampedArray(128 * 128 * 4);
pixels.fill(254);

// this returns a number! not a BigInt!
const myPtr = ptr(pixels);

const out = encode_png(
  myPtr,

  // dimensions:
  128,
  128,
);
```

--------------------------------

### MySQL Prepared Statements and Query Pipelining with Bun.SQL

Source: https://bun.sh/docs/runtime/sql

Demonstrates how Bun.SQL automatically utilizes server-side prepared statements for parameterized MySQL queries, including caching and reuse for identical queries. It also shows how to send multiple statements concurrently using Promise.all for improved performance through query pipelining.

```typescript
// This automatically creates a prepared statement on the server
const user = await mysql`SELECT * FROM users WHERE id = ${userId}`;

// Prepared statements are cached and reused for identical queries
for (const id of userIds) {
  // Same prepared statement is reused
  await mysql`SELECT * FROM users WHERE id = ${id}`;
}

// Query pipelining - multiple statements sent without waiting
const [users, orders, products] = await Promise.all([
  mysql`SELECT * FROM users WHERE active = ${true}`,
  mysql`SELECT * FROM orders WHERE status = ${"pending"}`,
  mysql`SELECT * FROM products WHERE in_stock = ${true}`,
]);
```

--------------------------------

### Configure GitLab CI for Bun.js Test Coverage

Source: https://bun.sh/docs/test/code-coverage

This snippet shows how to set up a GitLab CI pipeline to run Bun.js tests and generate coverage reports. It installs dependencies, runs tests with coverage, and defines artifacts for the coverage report.

```yaml
test:coverage:
  stage: test
  script:
    - bun install
    - bun test --coverage --coverage-reporter=lcov
  coverage: '/Lines\s*:\s*(\d+.\d+)%/'
  artifacts:
    reports:
      coverage_report:
        coverage_format: cobertura
        path: coverage/lcov.info
```

--------------------------------

### Parse Command-Line Arguments with util.parseArgs in Bun

Source: https://bun.sh/docs/guides/process/argv

This example demonstrates using the `util.parseArgs` function to parse command-line arguments into structured objects. It defines expected options and allows for positional arguments, providing a more organized way to handle CLI inputs.

```typescript
import { parseArgs } from "util";

const { values, positionals } = parseArgs({
  args: Bun.argv,
  options: {
    flag1: {
      type: "boolean",
    },
    flag2: {
      type: "string",
    },
  },
  strict: true,
  allowPositionals: true,
});

console.log(values);
console.log(positionals);
```

--------------------------------

### Bun.js DataView: Set and Get Uint16

Source: https://bun.sh/docs/runtime/binary-data

Illustrates how to write and read a Uint16 value, which occupies two bytes, at a specified offset within an ArrayBuffer using DataView. This shows handling multi-byte data.

```typescript
dv.setUint16(1, 513);
// [0b00000011, 0b00000010, 0b00000001, 0b00000000]

console.log(dv.getUint16(1)); // => 513
```