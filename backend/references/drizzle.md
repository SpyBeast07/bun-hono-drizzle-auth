### Deploy Project to Vercel with CLI

Source: https://orm.drizzle.team/docs/tutorials/drizzle-with-vercel-edge-functions

Command-line instructions to deploy a project to Vercel and configure Turso environment variables. Requires Vercel CLI installed and active project setup. Sets up TURSO_CONNECTION_URL and TURSO_AUTH_TOKEN for database connectivity.

```bash
vercel
```

```bash
vercel env add TURSO_CONNECTION_URL
```

```bash
vercel env add TURSO_AUTH_TOKEN
```

```bash
vercel
```

--------------------------------

### Get Started Link Styling - CSS

Source: https://orm.drizzle.team/docs/tutorials

Styled link component for get-started navigation with flexbox layout, subtle borders, and smooth transitions. Includes dark mode color scheme and hover state with background and border color changes.

```css
.get-started-link {
  align-items: center;
  background-color: #fafafa;
  border: 1px solid #21272e1f;
  border-radius: 2px;
  color: #334155;
  display: flex;
  font-size: 14px;
  font-weight: 600;
  overflow: hidden;
  padding: 8px;
  position: relative;
  text-decoration: none;
  transition: border-color 0.2s, background-color 0.2s;
  z-index: 1;
}

html.dark .get-started-link {
  background-color: #1a1a1a;
  border-color: #292929;
  color: #c4c5c6;
}

.get-started-link:hover {
  background-color: #f5f5f5;
  border-color: #c9cbcf;
}
```

--------------------------------

### Get Started Link Component Styling CSS

Source: https://orm.drizzle.team/docs/kit-overview

CSS styling for get-started navigation links with hover states, dark mode support, and smooth transitions. Includes border and background color animations for interactive feedback.

```css
.get-started-link[data-astro-cid-76cy367t] {
  align-items: center;
  background-color: #fafafa;
  border: 1px solid #21272e1f;
  border-radius: 2px;
  color: #334155;
  display: flex;
  font-size: 14px;
  font-weight: 600;
  overflow: hidden;
  padding: 8px;
  position: relative;
  text-decoration: none;
  transition: border-color 0.2s, background-color 0.2s;
  z-index: 1;
}

html.dark .get-started-link[data-astro-cid-76cy367t] {
  background-color: #1a1a1a;
  border-color: #292929;
  color: #c4c5c6;
}

.get-started-link[data-astro-cid-76cy367t]:hover {
  background-color: #f5f5f5;
  border-color: #c9cbcf;
}
```

--------------------------------

### Define database integration navigation items in JavaScript

Source: https://orm.drizzle.team/docs/get-started

This JavaScript array, `getStartedItems`, structures metadata for various database integration guides. Each item includes the database name, paths for 'existing' and 'new' setup documentation, and icon details for both light and dark themes. It serves as the data source for dynamically generating or updating navigation links.

```javascript
const getStartedItems = [{"title":"Serverless","items":[{"name":"Turso","path":{"existing":"/docs/get-started/turso-database-existing","new":"/docs/get-started/turso-database-new"},"icon":{"light":{"path":"/public/svg/new-turso.svg","style":{"width":26}},"dark":{"path":"/public/svg/new-turso-light.svg","style":{"width":26}}}},{"name":"Cloudflare D1","path":{"existing":"/docs/get-started/d1-existing","new":"/docs/get-started/d1-new"},"icon":{"light":{"path":"/public/svg/cloudflare.svg","style":{"width":26}},"dark":{"path":"/public/svg/cloudflare.svg","style":{"width":26}}}},{"name":"Bun SQLite","path":{"existing":"/docs/get-started/bun-sqlite-existing","new":"/docs/get-started/bun-sqlite-new"},"icon":{"light":{"path":"/public/svg/bun.svg","style":{"width":20}},"dark":{"path":"/public/svg/bun.svg","style":{"width":20}}}},{"name":"Cloudflare Durable Objects","path":{"existing":"/docs/get-started/do-existing","new":"/docs/get-started/do-new"},"icon":{"light":{"path":"/public/svg/cloudflare.svg","style":{"width":26}},"dark":{"path":"/public/svg/cloudflare.svg","style":{"width":26}}}}]},{"title":"MSSQL","items":[{"name":"MSSQL","path":{"existing":"/docs/get-started/mssql-existing","new":"/docs/get-started/mssql-new"},"icon":{"light":{"path":"/public/svg/mssql-light.png","style":{"style":"border-radius: 5px","width":34,"height":34}},"dark":{"path":"/public/svg/mssql-dark.png","style":{"style":"border-radius: 5px","width":34,"height":34}}}}]},{"title":"CockroachDB","items":[{"name":"CockroachDB","path":{"existing":"/docs/get-started/cockroach-existing","new":"/docs/get-started/cockroach-new"},"icon":{"light":{"path":"/public/svg/cockroachdb-light.png","style":{"style":"border-radius: 5px","width":"24px"}},"dark":{"path":"/public/svg/cockroachdb-dark.png","style":{"style":"border-radius: 5px","width":"24px"}}}}]},{"title":"Native SQLite","items":[{"name":"Expo SQLite","path":{"existing":"/docs/get-started/expo-existing","new":"/docs/get-started/expo-new"},"icon":{"light":{"path":"/public/svg/expo.svg","style":{"width":20}},"dark":{"path":"/public/svg/expo.svg","style":{"width":20}}}},{"name":"OP SQLite","path":{"existing":"/docs/get-started/op-sqlite-existing","new":"/docs/get-started/op-sqlite-new"},"icon":{"light":{"path":"/public/svg/opsqlite.png","style":{"width":"20px","borderRadius":"4px"}},"dark":{"path":"/public/svg/opsqlite.png","style":{"width":"20px","borderRadius":"4px"}}}}]}]
```

--------------------------------

### Installing Drizzle ORM and MSSQL Driver Packages

Source: https://orm.drizzle.team/docs/get-started-mssql

These commands demonstrate how to install the necessary packages for using Drizzle ORM with an MSSQL database. It includes `drizzle-orm` for the ORM core and `mssql` as the database driver, along with `drizzle-kit` for development utilities. Examples are provided for npm, yarn, pnpm, and bun package managers.

```npm
npm i drizzle-orm@beta mssql
npm i -D drizzle-kit@beta
```

```yarn
yarn add drizzle-orm@beta mssql
yarn add -D drizzle-kit@beta
```

```pnpm
pnpm add drizzle-orm@beta mssql
pnpm add -D drizzle-kit@beta
```

```bun
bun add drizzle-orm@beta mssql
bun add -D drizzle-kit@beta
```

--------------------------------

### Start Netlify Development Server

Source: https://orm.drizzle.team/docs/tutorials/drizzle-with-netlify-edge-functions-neon

Command to start the local Netlify development server for testing Edge Functions. Enables local testing of the database connection and API endpoints before deployment.

```bash
netlify dev
```

--------------------------------

### Start Encore Application with CLI

Source: https://orm.drizzle.team/docs/tutorials/drizzle-with-encore

Command to start an Encore application. Encore automatically applies database migrations when the application starts. The local dashboard becomes accessible at localhost:9400 with API documentation, database explorer, and tracing features.

```bash
encore run
```

--------------------------------

### Get Started Link Component Styling - CSS

Source: https://orm.drizzle.team/docs/connect-sqlite-cloud

CSS styling for get-started link buttons with hover states and dark mode support. Features smooth transitions for border and background color changes with responsive padding and overflow handling.

```css
.get-started-link[data-astro-cid-76cy367t] {
  align-items: center;
  background-color: #fafafa;
  border: 1px solid #21272e1f;
  border-radius: 2px;
  color: #334155;
  display: flex;
  font-size: 14px;
  font-weight: 600;
  overflow: hidden;
  padding: 8px;
  position: relative;
  text-decoration: none;
  transition: border-color .2s, background-color .2s;
  z-index: 1;
}

html.dark .get-started-link[data-astro-cid-76cy367t] {
  background-color: #1a1a1a;
  border-color: #292929;
  color: #c4c5c6;
}

.get-started-link[data-astro-cid-76cy367t]:hover {
  background-color: #f5f5f5;
  border-color: #c9cbcf;
}
```

--------------------------------

### Install Drizzle ORM and Turso Client Packages

Source: https://orm.drizzle.team/docs/connect-turso

Package installation commands for setting up Drizzle ORM with the libSQL/Turso client driver and development tools. Provides installation instructions for multiple package managers: npm, yarn, pnpm, and bun.

```Shell
npm i drizzle-orm @libsql/client
npm i -D drizzle-kit
```

```Shell
yarn add drizzle-orm @libsql/client
yarn add -D drizzle-kit
```

```Shell
pnpm add drizzle-orm @libsql/client
pnpm add -D drizzle-kit
```

```Shell
bun add drizzle-orm @libsql/client
bun add -D drizzle-kit
```

--------------------------------

### Handle Database Selection and Navigation in JavaScript

Source: https://orm.drizzle.team/docs/get-started/vercel-new

This JavaScript code defines a `flatItems` array containing configuration for various database types, including their names, documentation paths for new and existing setups, and icon details. It then initializes select elements and attaches `change` event listeners to them. When a user selects a database type or a setup type (new/existing), the script dynamically adjusts the select box width and redirects the user to the corresponding documentation page. This provides a dynamic and interactive way for users to navigate to relevant database setup guides.

```javascript
const flatItems = [{"name":"PlanetScale","path":{"existing":"/docs/get-started/planetscale-existing","new":"/docs/get-started/planetscale-new"},"icon":{"light":{"path":"/public/svg/planetscale.svg","style":{"width":20}},"dark":{"path":"/public/svg/planetscale.svg","style":{"width":20,"color":"#f0f0f0"}}}},{"name":"TiDB","path":{"existing":"/docs/get-started/tidb-existing","new":"/docs/get-started/tidb-new"},"icon":{"light":{"path":"/public/svg/tidb.svg","style":{"width":20}},"dark":{"path":"/public/svg/tidb.svg","style":{"width":20}}}},{"name":"SingleStore","path":{"existing":"/docs/get-started/singlestore-existing","new":"/docs/get-started/singlestore-new"},"icon":{"light":{"path":"/public/svg/singlestore_light.svg","style":{"width":20,"fill":"#00546B"}},"dark":{"path":"/public/svg/singlestore_dark.svg","style":{"width":20,"fill":"#F0F0F0"}}}},{"name":"SQLite","path":{"existing":"/docs/get-started/sqlite-existing","new":"/docs/get-started/sqlite-new"},"icon":{"light":{"path":"/public/svg/sqlite.svg","style":{"width":20}},"dark":{"path":"/public/svg/sqlite.svg","style":{"width":20}}}},{"name":"Turso Cloud","path":{"existing":"/docs/get-started/turso-existing","new":"/docs/get-started/turso-new"},"icon":{"light":{"path":"/public/svg/new-turso.svg","style":{"width":26}},"dark":{"path":"/public/svg/new-turso-light.svg","style":{"width":26}}}},{"name":"SQLite Cloud","path":{"existing":"/docs/get-started/sqlite-cloud-existing","new":"/docs/get-started/sqlite-cloud-new"},"icon":{"light":{"path":"/public/svg/sqlite-cloud.svg","style":{"width":26}},"dark":{"path":"/public/svg/sqlite-cloud.svg","style":{"width":26}}}},{"name":"Turso Database","path":{"existing":"/docs/get-started/turso-database-existing","new":"/docs/get-started/turso-database-new"},"icon":{"light":{"path":"/public/svg/new-turso.svg","style":{"width":26}},"dark":{"path":"/public/svg/new-turso-light.svg","style":{"width":26}}}},{"name":"Cloudflare D1","path":{"existing":"/docs/get-started/d1-existing","new":"/docs/get-started/d1-new"},"icon":{"light":{"path":"/public/svg/cloudflare.svg","style":{"width":26}},"dark":{"path":"/public/svg/cloudflare.svg","style":{"width":26}}}},{"name":"Bun SQLite","path":{"existing":"/docs/get-started/bun-sqlite-existing","new":"/docs/get-started/bun-sqlite-new"},"icon":{"light":{"path":"/public/svg/bun.svg","style":{"width":20}},"dark":{"path":"/public/svg/bun.svg","style":{"width":20}}}},{"name":"Cloudflare Durable Objects","path":{"existing":"/docs/get-started/do-existing","new":"/docs/get-started/do-new"},"icon":{"light":{"path":"/public/svg/cloudflare.svg","style":{"width":26}},"dark":{"path":"/public/svg/cloudflare.svg","style":{"width":26}}}},{"name":"MSSQL","path":{"existing":"/docs/get-started/mssql-existing","new":"/docs/get-started/mssql-new"},"icon":{"light":{"path":"/public/svg/mssql-light.png","style":{"style":"border-radius: 5px","width":34,"height":34}},"dark":{"path":"/public/svg/mssql-dark.png","style":{"style":"border-radius: 5px","width":34,"height":34}}}},{"name":"CockroachDB","path":{"existing":"/docs/get-started/cockroach-existing","new":"/docs/get-started/cockroach-new"},"icon":{"light":{"path":"/public/svg/cockroachdb-light.png","style":{"style":"border-radius: 5px","width":"24px"}},"dark":{"path":"/public/svg/cockroachdb-dark.png","style":{"style":"border-radius: 5px","width":"24px"}}}},{"name":"Expo SQLite","path":{"existing":"/docs/get-started/expo-existing","new":"/docs/get-started/expo-new"},"icon":{"light":{"path":"/public/svg/expo.svg","style":{"width":20}},"dark":{"path":"/public/svg/expo.svg","style":{"width":20}}}},{"name":"OP SQLite","path":{"existing":"/docs/get-started/op-sqlite-existing","new":"/docs/get-started/op-sqlite-new"},"icon":{"light":{"path":"/public/svg/opsqlite.png","style":{"width":"20px","borderRadius":"4px"}},"dark":{"path":"/public/svg/opsqlite.png","style":{"width":"20px","borderRadius":"4px"}}}}];
const databaseType = "new";
const dbSelect = document.getElementById('db-select');
const dbTypeSelect = document.getElementById('db-type-select');
const dbSelectResizer = document.getElementById('db-resizer');
const dbTypeSelectResizer = document.getElementById('db-type-resizer');
dbSelect.addEventListener('change', (e) => {
  dbSelectResizer.innerText = e.target.value;
  dbSelect.style.width = `${dbSelectResizer.offsetWidth}px`;
  window.location.href = flatItems.find(({name}) => name === e.target.value).path[databaseType];
});
dbTypeSelect.addEventListener('change', (e) => {
  dbTypeSelectResizer.innerText = e.target.value === 'new' ? 'New database' : 'Existing database';
  dbTypeSelect.style.width = `${dbTypeSelectResizer.offsetWidth}px`;
  window.location.href = currentItem.path[e.target.value];
});
dbSelect.style.width = `${dbSelectResizer.offsetWidth}px`;
dbTypeSelect.style.width = `${dbTypeSelectResizer.offsetWidth}px`;
```

--------------------------------

### Start PostgreSQL Docker Container (Docker)

Source: https://orm.drizzle.team/docs/guides/postgresql-local-setup

This Docker command initiates a new PostgreSQL container named `drizzle-postgres`. It configures the `POSTGRES_PASSWORD` environment variable, runs the container in detached mode (`-d`), and maps port `5432` from the container to the host machine. This setup makes the PostgreSQL database accessible from the host system for local development.

```bash
docker run --name drizzle-postgres -e POSTGRES_PASSWORD=mypassword -d -p 5432:5432 postgres
```

--------------------------------

### Install PlanetScale Database Driver

Source: https://orm.drizzle.team/docs/tutorials/drizzle-with-vercel-edge-functions

Install the @planetscale/database driver package using multiple package managers (npm, yarn, pnpm, bun). This driver enables connection to PlanetScale MySQL databases.

```bash
npm i @planetscale/database
```

```bash
yarn add @planetscale/database
```

```bash
pnpm add @planetscale/database
```

```bash
bun add @planetscale/database
```

--------------------------------

### Start Next.js Local Development Server

Source: https://orm.drizzle.team/docs/tutorials/drizzle-with-vercel-edge-functions

This command starts the Next.js local development server, allowing you to test your application and API routes locally. Once running, you can navigate to your defined API endpoints (e.g., `/api/hello`) in your browser to see the results.

```shell
npx next dev
```

--------------------------------

### Example SQL for creating a 'users' table

Source: https://orm.drizzle.team/docs/get-started/bun-sql-existing

An example SQL Data Definition Language (DDL) statement demonstrating the creation of a 'users' table. It includes columns for `id`, `name`, `age`, and `email`, with `id` as a primary key and `email` having a unique constraint.

```sql
CREATE TABLE IF NOT EXISTS "users" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "users_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"name" varchar(255) NOT NULL,
	"age" integer NOT NULL,
	"email" varchar(255) NOT NULL,
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
```

--------------------------------

### Install Encore CLI

Source: https://orm.drizzle.team/docs/tutorials/drizzle-with-encore

Installation commands for Encore CLI across multiple operating systems (macOS, Linux, Windows). Required prerequisite for creating and managing Encore backend projects.

```Bash
# macOS
brew install encoredev/tap/encore

# Linux
curl -L https://encore.dev/install.sh | bash

# Windows
iwr https://encore.dev/install.ps1 | iex
```

--------------------------------

### Example of custom SQL migration for Drizzle Kit (SQL)

Source: https://orm.drizzle.team/docs/drizzle-kit-generate

This is an example of a custom SQL migration file, typically created after generating an empty custom migration. It demonstrates how to perform data seeding by inserting multiple records into a 'users' table.

```sql
-- ./drizzle/20242409125510_seed/migration.sql

INSERT INTO "users" ("name") VALUES('Dan');
INSERT INTO "users" ("name") VALUES('Andrew');
INSERT INTO "users" ("name") VALUES('Dandrew');
```

--------------------------------

### Install Drizzle ORM and Neon Serverless Driver Packages

Source: https://orm.drizzle.team/docs/connect-neon

These commands install the necessary `drizzle-orm` and `@neondatabase/serverless` packages for integrating Drizzle ORM with Neon databases. They also install `drizzle-kit` as a development dependency for schema migrations and other Drizzle CLI tools, using various package managers.

```npm
npm i drizzle-orm @neondatabase/serverless
npm i -D drizzle-kit
```

```yarn
yarn add drizzle-orm @neondatabase/serverless
yarn add -D drizzle-kit
```

```pnpm
pnpm add drizzle-orm @neondatabase/serverless
pnpm add -D drizzle-kit
```

```bun
bun add drizzle-orm @neondatabase/serverless
bun add -D drizzle-kit
```

--------------------------------

### Install Drizzle ORM with Gel Database

Source: https://orm.drizzle.team/docs/get-started-gel

Package installation commands for Drizzle ORM and Gel database driver across multiple package managers (npm, yarn, pnpm, bun). Includes both runtime and development dependencies required for Drizzle setup.

```bash
npm i drizzle-orm gel
npm i -D drizzle-kit
```

```bash
yarn add drizzle-orm gel
yarn add -D drizzle-kit
```

```bash
pnpm add drizzle-orm gel
pnpm add -D drizzle-kit
```

```bash
bun add drizzle-orm gel
bun add -D drizzle-kit
```

--------------------------------

### Initialize Documentation UI Functions in JavaScript

Source: https://orm.drizzle.team/docs/guides/postgresql-local-setup

Executes initialization functions for sidebar scrolling, collapsed sections management, and package manager tab switching. Also applies styling to heading elements matching specific criteria.

```javascript
scrollSidebar();
updateCollapsedSections();
changeNpmTab();

document.querySelectorAll("h2").forEach((el) => {
  if (el.innerText === "---") {
    el.classList.add("hi");
  }
});
```

--------------------------------

### Install Drizzle ORM with PlanetScale Dependencies

Source: https://orm.drizzle.team/docs/connect-planetscale

Package installation commands for setting up Drizzle ORM with PlanetScale MySQL driver and Drizzle Kit. Provides npm, yarn, pnpm, and bun package manager options.

```bash
npm i drizzle-orm @planetscale/database -D drizzle-kit
```

```bash
yarn add drizzle-orm @planetscale/database -D drizzle-kit
```

```bash
pnpm add drizzle-orm @planetscale/database -D drizzle-kit
```

```bash
bun add drizzle-orm @planetscale/database -D drizzle-kit
```

--------------------------------

### Running Drizzle-kit Migrations with CLI and Package Managers

Source: https://orm.drizzle.team/docs/drizzle-kit-up

This snippet demonstrates how to execute Drizzle-kit migrations using the `drizzle-kit up` command. It shows examples for specifying the database dialect (`--dialect`) and the output directory for migrations (`--out`) across npm, yarn, pnpm, and bun package managers.

```bash
npx drizzle-kit up --dialect=postgresql
npx drizzle-kit up --dialect=postgresql --out=./migrations-folder
```

```bash
yarn drizzle-kit up --dialect=postgresql
yarn drizzle-kit up --dialect=postgresql --out=./migrations-folder
```

```bash
pnpm drizzle-kit up --dialect=postgresql
pnpm drizzle-kit up --dialect=postgresql --out=./migrations-folder
```

```bash
bunx drizzle-kit up --dialect=postgresql
bunx drizzle-kit up --dialect=postgresql --out=./migrations-folder
```

--------------------------------

### Setup PlanetScale connection environment variables

Source: https://orm.drizzle.team/docs/get-started/planetscale-new

Create a .env file in the project root with PlanetScale database connection credentials. Requires DATABASE_HOST, DATABASE_USERNAME, and DATABASE_PASSWORD variables obtained from PlanetScale dashboard.

```env
DATABASE_HOST=
DATABASE_USERNAME=
DATABASE_PASSWORD=
```

--------------------------------

### Install Drizzle ORM and Gel packages

Source: https://orm.drizzle.team/docs/get-started/gel-existing

This snippet provides commands to install `drizzle-orm`, `gel`, `drizzle-kit`, and `tsx` using various package managers (npm, yarn, pnpm, bun) for a Drizzle and Gel project setup. `drizzle-orm` and `gel` are core dependencies, while `drizzle-kit` and `tsx` are development dependencies.

```npm
npm i drizzle-orm gel
npm i -D drizzle-kit tsx
```

```yarn
yarn add drizzle-orm gel
yarn add -D drizzle-kit tsx
```

```pnpm
pnpm add drizzle-orm gel
pnpm add -D drizzle-kit tsx
```

```bun
bun add drizzle-orm gel
bun add -D drizzle-kit tsx
```

--------------------------------

### Toggle database setup links between new and existing in JavaScript

Source: https://orm.drizzle.team/docs/get-started

The `toggleLinks` JavaScript function dynamically updates the `href` attributes of database integration links based on the provided `type` ('new' or 'existing'). It also manages the 'selected' CSS class for the corresponding toggle buttons. This function ensures users are directed to the correct documentation version (new setup vs. existing project integration).

```javascript
const toggleLinks = (type) => {
  switch (type) {
    case "new":
      document.getElementById("new").classList.add("selected");
      document.getElementById("existing").classList.remove("selected");
      getStartedItems.forEach((group) => {
        group.items.forEach((link) => {
          document.getElementById(link.name).href = link.path.new;
        });
      });
      break;
    case "existing":
      document.getElementById("new").classList.remove("selected");
      document.getElementById("existing").classList.add("selected");
      getStartedItems.forEach((group) => {
        group.items.forEach((link) => {
          document.getElementById(link.name).href = link.path.existing;
        });
      });
      break;
  }
};
```

--------------------------------

### Install Drizzle GraphQL Yoga Dependencies

Source: https://orm.drizzle.team/docs/graphql

These commands install the necessary packages for integrating Drizzle ORM with GraphQL Yoga, including `drizzle-graphql`, `graphql-yoga`, and `graphql`. Choose the command appropriate for your package manager.

```npm
npm i drizzle-graphql graphql-yoga graphql
```

```yarn
yarn add drizzle-graphql graphql-yoga graphql
```

```pnpm
pnpm add drizzle-graphql graphql-yoga graphql
```

```bun
bun add drizzle-graphql graphql-yoga graphql
```

--------------------------------

### Install Drizzle ORM and SQLite packages with various managers

Source: https://orm.drizzle.team/docs/get-started/sqlite-existing

These commands demonstrate how to install the necessary packages for a Drizzle ORM and SQLite project, including `drizzle-orm`, `@libsql/client`, `dotenv`, `drizzle-kit`, and `tsx`, using npm, yarn, pnpm, or bun.

```npm
npm i drizzle-orm @libsql/client dotenv
npm i -D drizzle-kit tsx
```

```yarn
yarn add drizzle-orm @libsql/client dotenv
yarn add -D drizzle-kit tsx
```

```pnpm
pnpm add drizzle-orm @libsql/client dotenv
pnpm add -D drizzle-kit tsx
```

```bun
bun add drizzle-orm @libsql/client dotenv
bun add -D drizzle-kit tsx
```

--------------------------------

### Define Database Integration Options in JavaScript

Source: https://orm.drizzle.team/docs/get-started/planetscale-postgres-existing

This self-executing JavaScript function defines data structures for various database integration options, likely used within a documentation or "get started" section. It includes `currentItem` for the currently selected database and `flatItems` as an array of available databases, each with properties like `name`, `path` (for existing/new setups), and `icon` (with light/dark theme paths and styles). This data would typically be used to render dynamic navigation or selection components.

```javascript
(function(){const currentItem = {"name":"PlanetScale Postgres","path":{"existing":"/docs/get-started/planetscale-postgres-existing","new":"/docs/get-started/planetscale-postgres-new"},"icon":{"light":{"path":"/public/svg/planetscale.svg","style":{"width":20}},"dark":{"path":"/public/svg/planetscale.svg","style":{"width":20,"color":"#f0f0f0"}}}}; const flatItems = [{"name":"PostgreSQL","path":{"existing":"/docs/get-started/postgresql-existing","new":"/docs/get-started/postgresql-new"},"icon":{"light":{"path":"/public/svg/postgresql.svg","style":{"width":20}},"dark":{"path":"/public/svg/postgresql.svg","style":{"width":20,"fill":"#f0f0f0"}}}},{"name":"Neon","path":{"existing":"/docs/get-started/neon-existing","new":"/docs/get-started/neon-new"},"icon":{"light":{"path":"/public/svg/neon-light.svg","style":{"width":20}},"dark":{"path":"/public/svg/neon-dark.svg","style":{"width":20}}}},{"name":"Vercel Postgres","path":{"existing":"/docs/get-started/vercel-existing","new":"/docs/get-started/vercel-new"},"icon":{"light":{"path":"/public/svg/vercel.svg","style":{"width":20}},"dark":{"path":"/public/svg/vercel.svg","style":{"width":20,"fill":"#000000"}}}},{"name":"Supabase","path":{"existing":"/docs/get-started/supabase-existing","new":"/docs/get-started/supabase-new"},"icon":{"light":{"path":"/public/svg/supabase.svg","style":{"width":20}},"dark":{"path":"/public/svg/supabase.svg","style":{"width":20}}}},{"name":"Xata","path":{"existing":"/docs/get-started/xata-existing","new":"/docs/get-started/xata-new"},"icon":{"light":{"path":"/public/svg/xata.svg","style":{"width":26}},"dark":{"path":"/public/svg/xata.svg","style":{"width":26}}}},{"name":"PGLite","path":{"existing":"/docs/get-started/pglite-existing","new":"/docs/get-started/pglite-new"},"icon":{"light":{"path":"/public/svg/pglite.svg","style":{"width":26}},"dark":{"path":"/public/svg/pglite.svg","style":{"width":26}}}},{"name":"Nile","path":{"existing":"/docs/get-started/nile-existing","new":"/docs/get-started/nile-new"},"icon":{"light":{"path":"/public/svg/nile.svg"},"dark":{"path":"/public/svg/nile.svg"}}}},{"name":"Bun SQL","path":{"existing":"/docs/get-started/bun-sql-existing","new":"/docs/get-started/bun-sql-new"},"icon":{"light":{"path":"/public/svg/bun.svg","style":{"width":20}},"dark":{"path":"/public/svg/bun.svg","style":{"width":20}}}},{"name":"Effect","path":{"existing":"/docs/get-started/effect-postgresql-existing","new":"/docs/get-started/effect-postgresql-new"},"icon":{"light":{"path":"/public/svg/effect_light.svg","style":{"width":20,"fill":"#f0f0f0"}},"dark":{"path":"/public/svg/effect.svg","style":{"width":20,"fill":"#f0f0f0"}}}},{"name":"PlanetScale Postgres","path":{"existing":"/docs/get-started/planetscale-postgres-existing","new":"/docs/get-started/planetscale-postgres-new"},"icon":{"light":{"path":"/public/svg/planetscale.svg","style":{"width":20}},"dark":{"path":"/public/svg/planetscale.svg","style":{"width":20,"color":"#f0f0f0"}}}},{"name":"Gel","path":{"existing":"/docs/get-started/gel-existing","new":"/docs/get-started/gel-new"},"icon":{"light":{"path":"/public/svg/gel_light.svg","style":{"style":"border-radius: 5px","width":34,"height":34}},"dark":{"path":"/public/svg/gel_dark.svg","style":{"style":"border-radius: 5px","width":34,"height":34}}}},{"name":"MySQL",
```

--------------------------------

### Install Vercel CLI using various package managers

Source: https://orm.drizzle.team/docs/tutorials/drizzle-with-vercel-edge-functions

These commands demonstrate how to globally install the Vercel Command Line Interface (CLI) using npm, yarn, pnpm, or bun. The Vercel CLI is essential for deploying and managing projects on the Vercel platform.

```shell
npm i -g vercel
```

```shell
yarn add -g vercel
```

```shell
pnpm add -g vercel
```

```shell
bun add -g vercel
```

--------------------------------

### Install Drizzle ORM with TypeBox

Source: https://orm.drizzle.team/docs/typebox

Package installation commands for integrating Drizzle ORM with TypeBox schema generation support. Provides installation instructions across multiple package managers: npm, yarn, pnpm, and bun.

```Shell
npm i drizzle-orm typebox
```

```Shell
yarn add drizzle-orm typebox
```

```Shell
pnpm add drizzle-orm typebox
```

```Shell
bun add drizzle-orm typebox
```

--------------------------------

### Example Generated SQL Migration

Source: https://orm.drizzle.team/docs/tutorials/drizzle-with-supabase

Sample migration file showing table creation with constraints, foreign keys, and statement breakpoints. Includes conditional CREATE TABLE statements and foreign key constraints with cascade delete rules.

```sql
CREATE TABLE IF NOT EXISTS "posts_table" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"content" text NOT NULL,
	"user_id" integer NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users_table" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"age" integer NOT NULL,
	"email" text NOT NULL,
	CONSTRAINT "users_table_email_unique" UNIQUE("email")
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "posts_table" ADD CONSTRAINT "posts_table_user_id_users_table_id_fk" FOREIGN KEY ("user_id") REFERENCES "users_table"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
```

--------------------------------

### Install Drizzle ORM and Dependencies with bun

Source: https://orm.drizzle.team/docs/get-started/supabase-existing

Install required packages for Drizzle ORM, PostgreSQL driver, environment variable management, and development tools using bun package manager.

```bash
bun add drizzle-orm postgres dotenv
bun add -D drizzle-kit tsx
```

--------------------------------

### Attach click event listeners to database setup toggle buttons in JavaScript

Source: https://orm.drizzle.team/docs/get-started

These JavaScript lines attach click event listeners to the 'new' and 'existing' toggle buttons. When clicked, they invoke the `toggleLinks` function with the appropriate `type` ('new' or 'existing'), triggering the dynamic update of database integration links. The `?.` operator is used for optional chaining, preventing errors if the elements are not found.

```javascript
document
  .getElementById("new")
  ?.addEventListener("click", () => toggleLinks("new"));
document
  .getElementById("existing")
  ?.addEventListener("click", () => toggleLinks("existing"));
```

--------------------------------

### Defining Database Configuration Objects in JavaScript

Source: https://orm.drizzle.team/docs/get-started/op-sqlite-existing

This JavaScript Immediately Invoked Function Expression (IIFE) defines 'currentItem' and 'flatItems' objects, which store configuration details for various database providers. Each item includes properties like 'name', 'path' (for existing and new database setups), and 'icon' (with light/dark paths and styling). This data structure is likely used to populate UI elements for a 'Get Started' section, allowing users to select a database.

```javascript
(function(){const currentItem = {"name":"OP SQLite","path":{"existing":"/docs/get-started/op-sqlite-existing","new":"/docs/get-started/op-sqlite-new"},"icon":{"light":{"path":"/public/svg/opsqlite.png","style":{"width":"20px","borderRadius":"4px"}},"dark":{"path":"/public/svg/opsqlite.png","style":{"width":"20px","borderRadius":"4px"}}}}; const flatItems = [{"name":"PostgreSQL","path":{"existing":"/docs/get-started/postgresql-existing","new":"/docs/get-started/postgresql-new"},"icon":{"light":{"path":"/public/svg/postgresql.svg","style":{"width":20}},"dark":{"path":"/public/svg/postgresql.svg","style":{"width":20,"fill":"#f0f0f0"}}}},{"name":"Neon","path":{"existing":"/docs/get-started/neon-existing","new":"/docs/get-started/neon-new"},"icon":{"light":{"path":"/public/svg/neon-light.svg","style":{"width":20}},"dark":{"path":"/public/svg/neon-dark.svg","style":{"width":20}}}},{"name":"Vercel Postgres","path":{"existing":"/docs/get-started/vercel-existing","new":"/docs/get-started/vercel-new"},"icon":{"light":{"path":"/public/svg/vercel.svg","style":{"width":20}},"dark":{"path":"/public/svg/vercel.svg","style":{"width":20,"fill":"#000000"}}}},{"name":"Supabase","path":{"existing":"/docs/get-started/supabase-existing","new":"/docs/get-started/supabase-new"},"icon":{"light":{"path":"/public/svg/supabase.svg","style":{"width":20}},"dark":{"path":"/public/svg/supabase.svg","style":{"width":20}}}},{"name":"Xata","path":{"existing":"/docs/get-started/xata-existing","new":"/docs/get-started/xata-new"},"icon":{"light":{"path":"/public/svg/xata.svg","style":{"width":26}},"dark":{"path":"/public/svg/xata.svg","style":{"width":26}}}},{"name":"PGLite","path":{"existing":"/docs/get-started/pglite-existing","new":"/docs/get-started/pglite-new"},"icon":{"light":{"path":"/public/svg/pglite.svg","style":{"width":26}},"dark":{"path":"/public/svg/pglite.svg","style":{"width":26}}}},{"name":"Nile","path":{"existing":"/docs/get-started/nile-existing","new":"/docs/get-started/nile-new"},"icon":{"light":{"path":"/public/svg/nile.svg"},"dark":{"path":"/public/svg/nile.svg"}}},{"name":"Bun SQL","path":{"existing":"/docs/get-started/bun-sql-existing","new":"/docs/get-started/bun-sql-new"},"icon":{"light":{"path":"/public/svg/bun.svg","style":{"width":20}},"dark":{"path":"/public/svg/bun.svg","style":{"width":20}}}},{"name":"Effect","path":{"existing":"/docs/get-started/effect-postgresql-existing","new":"/docs/get-started/effect-postgresql-new"},"icon":{"light":{"path":"/public/svg/effect_light.svg","style":{"width":20,"fill":"#f0f0f0"}},"dark":{"path":"/public/svg/effect.svg","style":{"width":20,"fill":"#f0f0f0"}}}},{"name":"PlanetScale Postgres","path":{"existing":"/docs/get-started/planetscale-postgres-existing","new":"/docs/get-started/planetscale-postgres-new"},"icon":{"light":{"path":"/public/svg/planetscale.svg","style":{"width":20}},"dark":{"path":"/public/svg/planetscale.svg","style":{"width":20,"color":"#f0f0f0"}}}},{"name":"Gel","path":{"existing":"/docs/get-started/gel-existing","new":"/docs/get-started/gel-new"},"icon":{"light":{"path":"/public/svg/gel_light.svg","style":{"style":"border-radius: 5px","width":34,"height":34}},"dark":{"path":"/public/svg/gel_dark.svg","style":{"style":"border-radius: 5px","width":34,"height":34}}}},{"name":"MySQL","path":{"existing":"
```

--------------------------------

### Install Drizzle ORM and OP-SQLite Dependencies

Source: https://orm.drizzle.team/docs/get-started/op-sqlite-new

Commands to install the necessary packages for Drizzle ORM and OP-SQLite, including `drizzle-orm` for database interaction and `drizzle-kit` for development-time schema management and migrations.

```npm
npm i drizzle-orm @op-engineering/op-sqlite
npm i -D drizzle-kit
```

```yarn
yarn add drizzle-orm @op-engineering/op-sqlite
yarn add -D drizzle-kit
```

```pnpm
pnpm add drizzle-orm @op-engineering/op-sqlite
pnpm add -D drizzle-kit
```

```bun
bun add drizzle-orm @op-engineering/op-sqlite
bun add -D drizzle-kit
```

--------------------------------

### Example Neon Postgres Database Connection String

Source: https://orm.drizzle.team/docs/tutorials/drizzle-with-neon

This example illustrates the typical format of a connection string required to connect to a Neon Postgres database. It includes placeholders for username, password, host, and the database name.

```plaintext
postgres://username:[email protected]/neondb
```

--------------------------------

### Initialize Gel Project using npm, yarn, pnpm, or bun

Source: https://orm.drizzle.team/docs/get-started/gel-new

This step initializes a new Gel project, setting up the necessary project structure and configuration files. Users can choose their preferred package manager to execute the command for project setup.

```npm
npx gel project init
```

```yarn
yarn gel project init
```

```pnpm
pnpm gel project init
```

```bun
bunx gel project init
```

--------------------------------

### Define CSS Styles for Astro Components

Source: https://orm.drizzle.team/docs/guides/limit-offset-pagination

This snippet defines various CSS rules for different UI components within an Astro.js project. It includes styles for cards, 'get started' links, toggle buttons, breadcrumbs, and guide sections, utilizing `data-astro-cid` attributes for component-scoped styling. It also includes dark mode specific styles to ensure visual consistency across themes.

```css
-card\_\_title[data-astro-cid-h35cxjte]{font-size:14px;margin-bottom:0}.youtube-card\_\_description[data-astro-cid-h35cxjte]{font-size:14px}.youtube-card\_\_content[data-astro-cid-h35cxjte]{padding:8px 16px}} .get-started-link[data-astro-cid-76cy367t]{align-items:center;background-color:#fafafa;border:1px solid #21272e1f;border-radius:2px;color:#334155;display:flex;font-size:14px;font-weight:600;overflow:hidden;padding:8px;position:relative;text-decoration:none;transition:border-color .2s,background-color .2s;z-index:1}html.dark .get-started-link[data-astro-cid-76cy367t]{background-color:#1a1a1a;border-color:#292929;color:#c4c5c6}.get-started-link[data-astro-cid-76cy367t]:hover{background-color:#f5f5f5;border-color:#c9cbcf}html.dark .get-started-link[data-astro-cid-76cy367t]:hover{background-color:#1f1f1f;border-color:#2c2c2c}.img\_light[data-astro-cid-76cy367t]{background:#fff;border:1px solid #e0e0e0;height:36px;margin-right:8px;visibility:visible;width:36px}.img\_dark[data-astro-cid-76cy367t],.img\_light[data-astro-cid-76cy367t]{align-items:center;border-radius:6px;display:flex;flex-shrink:0;justify-content:center}.img\_dark[data-astro-cid-76cy367t]{background:#141414;border:1px solid #292929;height:0;margin:0;visibility:hidden;width:0}.image[data-astro-cid-76cy367t]{aspect-ratio:1/1;width:100%}html.dark .img\_light[data-astro-cid-76cy367t]{border:none;height:0;margin:0;visibility:hidden;width:0}html.dark .img\_dark[data-astro-cid-76cy367t]{border:1px solid #404040;height:36px;margin-right:8px;visibility:visible;width:36px} .toggle-button[data-astro-cid-z4sf6xjb]{align-items:center;background-color:#f1f2f345;border:1px solid rgba(33,39,46,.12);border-radius:2px;color:#909090;display:flex;font-size:14px;font-weight:600;gap:6px;height:36px;padding:8px;transition:all .2s}html.dark .toggle-button[data-astro-cid-z4sf6xjb]{background-color:#111;border-color:#404040;color:#909090}.toggle-button[data-astro-cid-z4sf6xjb] svg[data-astro-cid-z4sf6xjb]{height:18px;width:18px}.toggle-button[data-astro-cid-z4sf6xjb] svg[data-astro-cid-z4sf6xjb] path[data-astro-cid-z4sf6xjb]{opacity:0;transition:opacity .2s}.selected[data-astro-cid-z4sf6xjb]{border-color:#b8bfc8;color:#000}html.dark .selected[data-astro-cid-z4sf6xjb]{background-color:#ffffff0d;border-color:#686868;color:#c4c5c6}.selected[data-astro-cid-z4sf6xjb] svg[data-astro-cid-z4sf6xjb] path[data-astro-cid-z4sf6xjb]{opacity:1}.toggle-button[data-astro-cid-z4sf6xjb]:hover{border-color:#b8bfc8;color:#000}html.dark .toggle-button[data-astro-cid-z4sf6xjb]:hover{background-color:#ffffff0d;border-color:#686868;color:#c4c5c6}.buttons[data-astro-cid-z4sf6xjb]{align-items:center;display:flex;gap:12px;margin-bottom:12px}.title[data-astro-cid-z4sf6xjb]{margin-bottom:.25rem}.blocks-container[data-astro-cid-z4sf6xjb]{display:flex;flex-direction:column;gap:10px}.links[data-astro-cid-z4sf6xjb]{display:grid;gap:8px;grid-template-columns:repeat(auto-fill,minmax(240px,max-content))} .breadcrumbs-container[data-astro-cid-ed5fp7yv]{align-items:center;color:#0f172a;display:flex;flex-wrap:wrap;font-size:14px;font-weight:500;gap:0 8px}.breadcrumbs-container[data-astro-cid-ed5fp7yv] .link[data-astro-cid-ed5fp7yv]{color:#0f172a;display:block;text-decoration:none}html.dark .breadcrumbs-container[data-astro-cid-ed5fp7yv],html.dark .breadcrumbs-container[data-astro-cid-ed5fp7yv] .link[data-astro-cid-ed5fp7yv]{color:#c4c5c6}.breadcrumbs-container[data-astro-cid-ed5fp7yv] .link[data-astro-cid-ed5fp7yv]:hover{text-decoration:underline}.breadcrumbs-container[data-astro-cid-ed5fp7yv] svg[data-astro-cid-ed5fp7yv]{height:14px;width:14px}.select[data-astro-cid-ed5fp7yv]{align-items:center;-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent;border-radius:4px;cursor:pointer;display:flex;font-size:14px;font-weight:500;height:28px;justify-content:center;outline:none}.select[data-astro-cid-ed5fp7yv]:hover{text-decoration:underline}.dot[data-astro-cid-ed5fp7yv]{background:#0f172a;border-radius:100%;flex-shrink:0;height:4px;width:4px}html.dark .dot[data-astro-cid-ed5fp7yv]{background:#f1f5f9} html.dark .guides\_title[data-astro-cid-ecwho2n2]{color:#e2e6f0}.guides\_title[data-astro-cid-ecwho2n2]{color:#0f172a;font-size:32px;font-weight:700;letter-spacing:-.48px;line-height:48px;margin-top:8px}html.dark .guides\_description[data-astro-cid-ecwho2n2]{color:#f3f4f6}.guides\_description[data-astro-cid-ecwho2n2]{color:#1e1e1e;font-size:16px;font-weight:400;letter-spacing:-.176px;line-height:150%;margin-bottom:16px;margin-top:8px;opacity:.7}.guides\_\_selected-guides[data-astro-cid-ecwho2n2]{display:flex;gap:12px;margin-bottom:40px;margin-top:32px}.guides\_\_items[data-astro-cid-ecwho2n2]{display:flex;flex-direction:column}html.dark .guides\_\_item[data-astro-cid-ecwho2n2]:not(:last-child){border-bottom:1px solid #262626}.guides\_\_item[data-astro-cid-ecwho2n2]:not(:last-
```

--------------------------------

### Define Database Integration Data Structures in JavaScript

Source: https://orm.drizzle.team/docs/get-started/singlestore-existing

This JavaScript snippet defines data structures for various database integrations, likely used in a 'Get Started' section of a Drizzle ORM application. It includes details such as database name, paths for existing and new setups, and SVG icon paths with styling for both light and dark themes. This data drives the dynamic rendering of database options in the UI.

```javascript
(function(){const currentItem = {"name":"SingleStore","path":{"existing":"/docs/get-started/singlestore-existing","new":"/docs/get-started/singlestore-new"},"icon":{"light":{"path":"/public/svg/singlestore_light.svg","style":{"width":20,"fill":"#00546B"}},"dark":{"path":"/public/svg/singlestore_dark.svg","style":{"width":20,"fill":"#F0F0F0"}}}}; const flatItems = [{"name":"PostgreSQL","path":{"existing":"/docs/get-started/postgresql-existing","new":"/docs/get-started/postgresql-new"},"icon":{"light":{"path":"/public/svg/postgresql.svg","style":{"width":20}},"dark":{"path":"/public/svg/postgresql.svg","style":{"width":20,"fill":"#f0f0f0"}}}},{"name":"Neon","path":{"existing":"/docs/get-started/neon-existing","new":"/docs/get-started/neon-new"},"icon":{"light":{"path":"/public/svg/neon-light.svg","style":{"width":20}},"dark":{"path":"/public/svg/neon-dark.svg","style":{"width":20}}}},{"name":"Vercel Postgres","path":{"existing":"/docs/get-started/vercel-existing","new":"/docs/get-started/vercel-new"},"icon":{"light":{"path":"/public/svg/vercel.svg","style":{"width":20}},"dark":{"path":"/public/svg/vercel.svg","style":{"width":20,"fill":"#000000"}}}},{"name":"Supabase","path":{"existing":"/docs/get-started/supabase-existing","new":"/docs/get-started/supabase-new"},"icon":{"light":{"path":"/public/svg/supabase.svg","style":{"width":20}},"dark":{"path":"/public/svg/supabase.svg","style":{"width":20}}}},{"name":"Xata","path":{"existing":"/docs/get-started/xata-existing","new":"/docs/get-started/xata-new"},"icon":{"light":{"path":"/public/svg/xata.svg","style":{"width":26}},"dark":{"path":"/public/svg/xata.svg","style":{"width":26}}}},{"name":"PGLite","path":{"existing":"/docs/get-started/pglite-existing","new":"/docs/get-started/pglite-new"},"icon":{"light":{"path":"/public/svg/pglite.svg","style":{"width":26}},"dark":{"path":"/public/svg/pglite.svg","style":{"width":26}}}},{"name":"Nile","path":{"existing":"/docs/get-started/nile-existing","new":"/docs/get-started/nile-new"},"icon":{"light":{"path":"/public/svg/nile.svg"},"dark":{"path":"/public/svg/nile.svg"}}},{"name":"Bun SQL","path":{"existing":"/docs/get-started/bun-sql-existing","new":"/docs/get-started/bun-sql-new"},"icon":{"light":{"path":"/public/svg/bun.svg","style":{"width":20}},"dark":{"path":"/public/svg/bun.svg","style":{"width":20}}}},{"name":"Effect","path":{"existing":"/docs/get-started/effect-postgresql-existing","new":"/docs/get-started/effect-postgresql-new"},"icon":{"light":{"path":"/public/svg/effect_light.svg","style":{"width":20,"fill":"#f0f0f0"}},"dark":{"path":"/public/svg/effect.svg","style":{"width":20,"fill":"#f0f0f0"}}}},{"name":"PlanetScale Postgres","path":{"existing":"/docs/get-started/planetscale-postgres-existing","new":"/docs/get-started/planetscale-postgres-new"},"icon":{"light":{"path":"/public/svg/planetscale.svg","style":{"width":20}},"dark":{"path":"/public/svg/planetscale.svg","style":{"width":20,"color":"#f0f0f0"}}}},{"name":"Gel","path":{"existing":"/docs/get-started/gel-existing","new":"/docs/get-started/gel-new"},"icon":{"light":{"path":"/public/svg/gel_light.svg","style":{"style":"border-radius: 5px","width":34,"height":34}},"dark":{"path":"/public/svg/gel_dark.svg","style":{"style":"border-radius: 5px","width":34,"height":34}}}},{"name":"MySQL","path":
```

--------------------------------

### Install Drizzle ORM and Vercel Postgres packages

Source: https://orm.drizzle.team/docs/get-started/vercel-existing

Install the necessary Drizzle ORM, Vercel Postgres driver, `dotenv`, and `drizzle-kit` development packages using various package managers. These packages are essential for database interaction and Drizzle migrations.

```npm
npm i drizzle-orm @vercel/postgres dotenv
npm i -D drizzle-kit tsx
```

```yarn
yarn add drizzle-orm @vercel/postgres dotenv
yarn add -D drizzle-kit tsx
```

```pnpm
pnpm add drizzle-orm @vercel/postgres dotenv
pnpm add -D drizzle-kit tsx
```

```bun
bun add drizzle-orm @vercel/postgres dotenv
bun add -D drizzle-kit tsx
```

--------------------------------

### JavaScript Configuration for Drizzle ORM Database Integrations

Source: https://orm.drizzle.team/docs/get-started/turso-database-existing

This JavaScript snippet defines a configuration object for various database integrations, likely used within a 'Get Started' section of a Drizzle ORM project. It includes details such as database names, paths for existing and new setups, and SVG icon paths with styling. This structured data facilitates dynamic rendering of database options in a UI. The provided snippet is incomplete, showing only a partial list of databases.

```javascript
(function(){const currentItem = {"name":"Turso Database","path":{"existing":"/docs/get-started/turso-database-existing","new":"/docs/get-started/turso-database-new"},"icon":{"light":{"path":"/public/svg/new-turso.svg","style":{"width":26}},"dark":{"path":"/public/svg/new-turso-light.svg","style":{"width":26}}}};
const flatItems = [{"name":"PostgreSQL","path":{"existing":"/docs/get-started/postgresql-existing","new":"/docs/get-started/postgresql-new"},"icon":{"light":{"path":"/public/svg/postgresql.svg","style":{"width":20}},"dark":{"path":"/public/svg/postgresql.svg","style":{"width":20,"fill":"#f0f0f0"}}}},{"name":"Neon","path":{"existing":"/docs/get-started/neon-existing","new":"/docs/get-started/neon-new"},"icon":{"light":{"path":"/public/svg/neon-light.svg","style":{"width":20}},"dark":{"path":"/public/svg/neon-dark.svg","style":{"width":20}}}},{"name":"Vercel Postgres","path":{"existing":"/docs/get-started/vercel-existing","new":"/docs/get-started/vercel-new"},"icon":{"light":{"path":"/public/svg/vercel.svg","style":{"width":20}},"dark":{"path":"/public/svg/vercel.svg","style":{"width":20,"fill":"#000000"}}}},{"name":"Supabase","path":{"existing":"/docs/get-started/supabase-existing","new":"/docs/get-started/supabase-new"},"icon":{"light":{"path":"/public/svg/supabase.svg","style":{"width":20}},"dark":{"path":"/public/svg/supabase.svg","style":{"width":20}}}},{"name":"Xata","path":{"existing":"/docs/get-started/xata-existing","new":"/docs/get-started/xata-new"},"icon":{"light":{"path":"/public/svg/xata.svg","style":{"width":26}},"dark":{"path":"/public/svg/xata.svg","style":{"width":26}}}},{"name":"PGLite","path":{"existing":"/docs/get-started/pglite-existing","new":"/docs/get-started/pglite-new"},"icon":{"light":{"path":"/public/svg/pglite.svg","style":{"width":26}},"dark":{"path":"/public/svg/pglite.svg","style":{"width":26}}}},{"name":"Nile","path":{"existing":"/docs/get-started/nile-existing","new":"/docs/get-started/nile-new"},"icon":{"light":{"path":"/public/svg/nile.svg"},"dark":{"path":"/public/svg/nile.svg"}}},{"name":"Bun SQL","path":{"existing":"/docs/get-started/bun-sql-existing","new":"/docs/get-started/bun-sql-new"},"icon":{"light":{"path":"/public/svg/bun.svg","style":{"width":20}},"dark":{"path":"/public/svg/bun.svg","style":{"width":20}}}},{"name":"Effect","path":{"existing":"/docs/get-started/effect-postgresql-existing","new":"/docs/get-started/effect-postgresql-new"},"icon":{"light":{"path":"/public/svg/effect_light.svg","style":{"width":20,"fill":"#f0f0f0"}},"dark":{"path":"/public/svg/effect.svg","style":{"width":20,"fill":"#f0f0f0"}}}},{"name":"PlanetScale Postgres","path":{"existing":"/docs/get-started/planetscale-postgres-existing","new":"/docs/get-started/planetscale-postgres-new"},"icon":{"light":{"path":"/public/svg/planetscale.svg","style":{"width":20}},"dark":{"path":"/public/svg/planetscale.svg","style":{"width":20,"color":"#f0f0f0"}}}},{"name":"Gel","path":{"existing":"/docs/get-started/gel-existing","new":"/docs/get-started/gel-new"},"icon":{"light":{"path":"/public/svg/gel_light.svg","style":{"style":"border-radius: 5px","width":34,"height":34}},"dark":{"path":"/public/svg/gel_dark.svg","style":{"style":"border-radius: 5px","width":34,"height":34}}}},{"name":"MySQL","path":{"existing":"/docs/get-started/my
```

--------------------------------

### Initialize a new Supabase project using CLI

Source: https://orm.drizzle.team/docs/tutorials/drizzle-with-supabase-edge-functions

This command initializes a new Supabase project in the current directory. It creates a `supabase` folder containing a `config.toml` file, setting up the local environment for Supabase development.

```bash
supabase init
```

--------------------------------

### Install Drizzle ORM and TiDB Serverless packages

Source: https://orm.drizzle.team/docs/get-started/tidb-new

Install required dependencies for Drizzle ORM, TiDB serverless driver, and development tools. Supports multiple package managers including npm, yarn, pnpm, and bun.

```bash
npm i drizzle-orm @tidbcloud/serverless dotenv
npm i -D drizzle-kit tsx
```

```bash
yarn add drizzle-orm @tidbcloud/serverless dotenv
yarn add -D drizzle-kit tsx
```

```bash
pnpm add drizzle-orm @tidbcloud/serverless dotenv
pnpm add -D drizzle-kit tsx
```

```bash
bun add drizzle-orm @tidbcloud/serverless dotenv
bun add -D drizzle-kit tsx
```

--------------------------------

### Deploying a Project with Netlify CLI

Source: https://orm.drizzle.team/docs/tutorials/drizzle-with-netlify-edge-functions-neon

These commands demonstrate how to deploy a web project using the Netlify Command Line Interface. The first command performs a draft deployment, while the second command initiates a production deployment. The publish directory is assumed to be the current directory ('.').

```bash
netlify deploy
```

```bash
netlify deploy --prod
```

--------------------------------

### Define Database Configuration Data in JavaScript

Source: https://orm.drizzle.team/docs/get-started/turso-existing

This JavaScript code defines an object (currentItem) representing the currently selected database (Turso Cloud) and an array (flatItems) containing configuration details for various other database providers. Each entry includes the database name, paths for existing and new setup guides, and icon specifications for both light and dark themes.

```javascript
(function(){const currentItem = {"name":"Turso Cloud","path":{"existing":"/docs/get-started/turso-existing","new":"/docs/get-started/turso-new"},"icon":{"light":{"path":"/public/svg/new-turso.svg","style":{"width":26}},"dark":{"path":"/public/svg/new-turso-light.svg","style":{"width":26}}}};
const flatItems = [{"name":"PostgreSQL","path":{"existing":"/docs/get-started/postgresql-existing","new":"/docs/get-started/postgresql-new"},"icon":{"light":{"path":"/public/svg/postgresql.svg","style":{"width":20}},"dark":{"path":"/public/svg/postgresql.svg","style":{"width":20,"fill":"#f0f0f0"}}}},{"name":"Neon","path":{"existing":"/docs/get-started/neon-existing","new":"/docs/get-started/neon-new"},"icon":{"light":{"path":"/public/svg/neon-light.svg","style":{"width":20}},"dark":{"path":"/public/svg/neon-dark.svg","style":{"width":20}}}},{"name":"Vercel Postgres","path":{"existing":"/docs/get-started/vercel-existing","new":"/docs/get-started/vercel-new"},"icon":{"light":{"path":"/public/svg/vercel.svg","style":{"width":20}},"dark":{"path":"/public/svg/vercel.svg","style":{"width":20,"fill":"#000000"}}}},{"name":"Supabase","path":{"existing":"/docs/get-started/supabase-existing","new":"/docs/get-started/supabase-new"},"icon":{"light":{"path":"/public/svg/supabase.svg","style":{"width":20}},"dark":{"path":"/public/svg/supabase.svg","style":{"width":20}}}},{"name":"Xata","path":{"existing":"/docs/get-started/xata-existing","new":"/docs/get-started/xata-new"},"icon":{"light":{"path":"/public/svg/xata.svg","style":{"width":26}},"dark":{"path":"/public/svg/xata.svg","style":{"width":26}}}},{"name":"PGLite","path":{"existing":"/docs/get-started/pglite-existing","new":"/docs/get-started/pglite-new"},"icon":{"light":{"path":"/public/svg/pglite.svg","style":{"width":26}},"dark":{"path":"/public/svg/pglite.svg","style":{"width":26}}}},{"name":"Nile","path":{"existing":"/docs/get-started/nile-existing","new":"/docs/get-started/nile-new"},"icon":{"light":{"path":"/public/svg/nile.svg"},"dark":{"path":"/public/svg/nile.svg"}}},{"name":"Bun SQL","path":{"existing":"/docs/get-started/bun-sql-existing","new":"/docs/get-started/bun-sql-new"},"icon":{"light":{"path":"/public/svg/bun.svg","style":{"width":20}},"dark":{"path":"/public/svg/bun.svg","style":{"width":20}}}},{"name":"Effect","path":{"existing":"/docs/get-started/effect-postgresql-existing","new":"/docs/get-started/effect-postgresql-new"},"icon":{"light":{"path":"/public/svg/effect_light.svg","style":{"width":20,"fill":"#f0f0f0"}},"dark":{"path":"/public/svg/effect.svg","style":{"width":20,"fill":"#f0f0f0"}}}},{"name":"PlanetScale Postgres","path":{"existing":"/docs/get-started/planetscale-postgres-existing","new":"/docs/get-started/planetscale-postgres-new"},"icon":{"light":{"path":"/public/svg/planetscale.svg","style":{"width":20}},"dark":{"path":"/public/svg/planetscale.svg","style":{"width":20,"color":"#f0f0f0"}}}},{"name":"Gel","path":{"existing":"/docs/get-started/gel-existing","new":"/docs/get-started/gel-new"},"icon":{"light":{"path":"/public/svg/gel_light.svg","style":{"style":"border-radius: 5px","width":34,"height":34}},"dark":{"path":"/public/svg/gel_dark.svg","style":{"style":"border-radius: 5px","width":34,"height":34}}}},{"name":"MySQL","path":{"existing":"/docs/get-started/mysql-existing","new":"/do
```

--------------------------------

### Define Database Options Data Structure in JavaScript

Source: https://orm.drizzle.team/docs/get-started/planetscale-new

This JavaScript snippet defines a structured data representation for various database options, likely used within a Drizzle ORM setup guide. It includes a `currentItem` object for the currently selected database and a `flatItems` array listing multiple database providers. Each entry specifies the database name, distinct paths for 'existing' and 'new' setup flows, and detailed icon configurations for both light and dark UI themes, including SVG paths and styling properties.

```javascript
(function(){const currentItem = {"name":"PlanetScale","path":{"existing":"/docs/get-started/planetscale-existing","new":"/docs/get-started/planetscale-new"},"icon":{"light":{"path":"/public/svg/planetscale.svg","style":{"width":20}},"dark":{"path":"/public/svg/planetscale.svg","style":{"width":20,"color":"#f0f0f0"}}}}; const flatItems = [{"name":"PostgreSQL","path":{"existing":"/docs/get-started/postgresql-existing","new":"/docs/get-started/postgresql-new"},"icon":{"light":{"path":"/public/svg/postgresql.svg","style":{"width":20}},"dark":{"path":"/public/svg/postgresql.svg","style":{"width":20,"fill":"#f0f0f0"}}}},{"name":"Neon","path":{"existing":"/docs/get-started/neon-existing","new":"/docs/get-started/neon-new"},"icon":{"light":{"path":"/public/svg/neon-light.svg","style":{"width":20}},"dark":{"path":"/public/svg/neon-dark.svg","style":{"width":20}}}},{"name":"Vercel Postgres","path":{"existing":"/docs/get-started/vercel-existing","new":"/docs/get-started/vercel-new"},"icon":{"light":{"path":"/public/svg/vercel.svg","style":{"width":20}},"dark":{"path":"/public/svg/vercel.svg","style":{"width":20,"fill":"#000000"}}}},{"name":"Supabase","path":{"existing":"/docs/get-started/supabase-existing","new":"/docs/get-started/supabase-new"},"icon":{"light":{"path":"/public/svg/supabase.svg","style":{"width":20}},"dark":{"path":"/public/svg/supabase.svg","style":{"width":20}}}},{"name":"Xata","path":{"existing":"/docs/get-started/xata-existing","new":"/docs/get-started/xata-new"},"icon":{"light":{"path":"/public/svg/xata.svg","style":{"width":26}},"dark":{"path":"/public/svg/xata.svg","style":{"width":26}}}},{"name":"PGLite","path":{"existing":"/docs/get-started/pglite-existing","new":"/docs/get-started/pglite-new"},"icon":{"light":{"path":"/public/svg/pglite.svg","style":{"width":26}},"dark":{"path":"/public/svg/pglite.svg","style":{"width":26}}}},{"name":"Nile","path":{"existing":"/docs/get-started/nile-existing","new":"/docs/get-started/nile-new"},"icon":{"light":{"path":"/public/svg/nile.svg"},"dark":{"path":"/public/svg/nile.svg"}}},{"name":"Bun SQL","path":{"existing":"/docs/get-started/bun-sql-existing","new":"/docs/get-started/bun-sql-new"},"icon":{"light":{"path":"/public/svg/bun.svg","style":{"width":20}},"dark":{"path":"/public/svg/bun.svg","style":{"width":20}}}},{"name":"Effect","path":{"existing":"/docs/get-started/effect-postgresql-existing","new":"/docs/get-started/effect-postgresql-new"},"icon":{"light":{"path":"/public/svg/effect_light.svg","style":{"width":20,"fill":"#f0f0f0"}},"dark":{"path":"/public/svg/effect.svg","style":{"width":20,"fill":"#f0f0f0"}}}},{"name":"PlanetScale Postgres","path":{"existing":"/docs/get-started/planetscale-postgres-existing","new":"/docs/get-started/planetscale-postgres-new"},"icon":{"light":{"path":"/public/svg/planetscale.svg","style":{"width":20}},"dark":{"path":"/public/svg/planetscale.svg","style":{"width":20,"color":"#f0f0f0"}}}},{"name":"Gel","path":{"existing":"/docs/get-started/gel-existing","new":"/docs/get-started/gel-new"},"icon":{"light":{"path":"/public/svg/gel_light.svg","style":{"style":"border-radius: 5px","width":34,"height":34}},"dark":{"path":"/public/svg/gel_dark.svg","style":{"style":"border-radius: 5px","width":34,"height":34}}}},{"name":"MySQL","path":{"existing":"/docs/get-started/mys
```

--------------------------------

### Example JSON Response from API Route

Source: https://orm.drizzle.team/docs/tutorials/drizzle-with-vercel-edge-functions

This snippet shows an example of the JSON response returned by the `/api/hello` endpoint created in the Next.js application. It includes an array of users (initially empty) and a success message, confirming the API route is functioning correctly.

```json
{
  "users": [],
  "message": "success"
}
```

--------------------------------

### Install Drizzle ORM with Vercel Postgres

Source: https://orm.drizzle.team/docs/connect-vercel-postgres

Package installation commands for Drizzle ORM and Vercel Postgres integration. Includes drizzle-orm, @vercel/postgres runtime dependencies and drizzle-kit development dependency across multiple package managers.

```Shell
npm i drizzle-orm @vercel/postgres
npm i -D drizzle-kit
```

```Shell
yarn add drizzle-orm @vercel/postgres
yarn add -D drizzle-kit
```

```Shell
pnpm add drizzle-orm @vercel/postgres
pnpm add -D drizzle-kit
```

```Shell
bun add drizzle-orm @vercel/postgres
bun add -D drizzle-kit
```

--------------------------------

### Initialize Netlify Project via CLI

Source: https://orm.drizzle.team/docs/tutorials/drizzle-with-netlify-edge-functions-neon

Command to initialize a new Netlify project interactively. Prompts the user to answer configuration questions and select deployment options such as team and site name.

```bash
netlify init
```

--------------------------------

### Install @libsql/client for Turso Database Connectivity

Source: https://orm.drizzle.team/docs/tutorials/drizzle-with-turso

These commands install the `@libsql/client` package, which is the official client library for connecting to Turso (libSQL) databases. This package is a prerequisite for Drizzle ORM to interact with Turso.

```npm
npm i @libsql/client
```

```yarn
yarn add @libsql/client
```

```pnpm
pnpm add @libsql/client
```

```bun
bun add @libsql/client
```

--------------------------------

### Install Drizzle Kit via Package Managers

Source: https://orm.drizzle.team/docs/kit-overview

Installation commands for Drizzle Kit CLI tool across multiple package managers (npm, yarn, pnpm, bun). Installs as development dependency for managing SQL database migrations.

```bash
npm i -D drizzle-kit
```

```bash
yarn add -D drizzle-kit
```

```bash
pnpm add -D drizzle-kit
```

```bash
bun add -D drizzle-kit
```

--------------------------------

### Define Database Selection Data Structures in JavaScript

Source: https://orm.drizzle.team/docs/get-started/mssql-new

This JavaScript code defines data structures for representing current and available database options, typically used in a UI for database selection. Each database entry includes its name, paths for existing/new setup guides, and icon details for both light and dark themes, specifying path, style, width, and height.

```javascript
(function(){const currentItem = {"name":"MSSQL","path":{"existing":"/docs/get-started/mssql-existing","new":"/docs/get-started/mssql-new"},"icon":{"light":{"path":"/public/svg/mssql-light.png","style":{"style":"border-radius: 5px","width":34,"height":34}},"dark":{"path":"/public/svg/mssql-dark.png","style":{"style":"border-radius: 5px","width":34,"height":34}}}};
const flatItems = [{"name":"PostgreSQL","path":{"existing":"/docs/get-started/postgresql-existing","new":"/docs/get-started/postgresql-new"},"icon":{"light":{"path":"/public/svg/postgresql.svg","style":{"width":20}},"dark":{"path":"/public/svg/postgresql.svg","style":{"width":20,"fill":"#f0f0f0"}}}},{"name":"Neon","path":{"existing":"/docs/get-started/neon-existing","new":"/docs/get-started/neon-new"},"icon":{"light":{"path":"/public/svg/neon-light.svg","style":{"width":20}},"dark":{"path":"/public/svg/neon-dark.svg","style":{"width":20}}}},{"name":"Vercel Postgres","path":{"existing":"/docs/get-started/vercel-existing","new":"/docs/get-started/vercel-new"},"icon":{"light":{"path":"/public/svg/vercel.svg","style":{"width":20}},"dark":{"path":"/public/svg/vercel.svg","style":{"width":20,"fill":"#000000"}}}},{"name":"Supabase","path":{"existing":"/docs/get-started/supabase-existing","new":"/docs/get-started/supabase-new"},"icon":{"light":{"path":"/public/svg/supabase.svg","style":{"width":20}},"dark":{"path":"/public/svg/supabase.svg","style":{"width":20}}}},{"name":"Xata","path":{"existing":"/docs/get-started/xata-existing","new":"/docs/get-started/xata-new"},"icon":{"light":{"path":"/public/svg/xata.svg","style":{"width":26}},"dark":{"path":"/public/svg/xata.svg","style":{"width":26}}}},{"name":"PGLite","path":{"existing":"/docs/get-started/pglite-existing","new":"/docs/get-started/pglite-new"},"icon":{"light":{"path":"/public/svg/pglite.svg","style":{"width":26}},"dark":{"path":"/public/svg/pglite.svg","style":{"width":26}}}},{"name":"Nile","path":{"existing":"/docs/get-started/nile-existing","new":"/docs/get-started/nile-new"},"icon":{"light":{"path":"/public/svg/nile.svg"},"dark":{"path":"/public/svg/nile.svg"}}},{"name":"Bun SQL","path":{"existing":"/docs/get-started/bun-sql-existing","new":"/docs/get-started/bun-sql-new"},"icon":{"light":{"path":"/public/svg/bun.svg","style":{"width":20}},"dark":{"path":"/public/svg/bun.svg","style":{"width":20}}}},{"name":"Effect","path":{"existing":"/docs/get-started/effect-postgresql-existing","new":"/docs/get-started/effect-postgresql-new"},"icon":{"light":{"path":"/public/svg/effect_light.svg","style":{"width":20,"fill":"#f0f0f0"}},"dark":{"path":"/public/svg/effect.svg","style":{"width":20,"fill":"#f0f0f0"}}}},{"name":"PlanetScale Postgres","path":{"existing":"/docs/get-started/planetscale-postgres-existing","new":"/docs/get-started/planetscale-postgres-new"},"icon":{"light":{"path":"/public/svg/planetscale.svg","style":{"width":20}},"dark":{"path":"/public/svg/planetscale.svg","style":{"width":20,"color":"#f0f0f0"}}}},{"name":"Gel","path":{"existing":"/docs/get-started/gel-existing","new":"/docs/get-started/gel-new"},"icon":{"light":{"path":"/public/svg/gel_light.svg","style":{"style":"border-radius: 5px","width":34,"height":34}},"dark":{"path":"/public/svg/gel_dark.svg","style":{"style":"border-radius: 5px","width":34,"height":34}}}}]
```

--------------------------------

### Install Drizzle ORM and Drizzle Kit Beta

Source: https://orm.drizzle.team/docs/column-types/cockroach

These commands demonstrate how to install the beta versions of Drizzle ORM and Drizzle Kit using various package managers. Drizzle ORM is the core library for database interaction, while Drizzle Kit provides development tools. Users can choose their preferred package manager for installation.

```npm
npm i drizzle-orm@beta
npm i drizzle-kit@beta -D
```

```yarn
yarn add drizzle-orm@beta
yarn add drizzle-kit@beta -D
```

```pnpm
pnpm add drizzle-orm@beta
pnpm add drizzle-kit@beta -D
```

```bun
bun add drizzle-orm@beta
bun add drizzle-kit@beta -D
```

--------------------------------

### Install Drizzle ORM with better-sqlite3

Source: https://orm.drizzle.team/docs/get-started-sqlite

Package installation commands for Drizzle ORM and better-sqlite3 driver across multiple package managers. Installs runtime dependencies and development dependencies including TypeScript types.

```Shell
npm i drizzle-orm better-sqlite3
npm i -D drizzle-kit @types/better-sqlite3
```

```Shell
yarn add drizzle-orm better-sqlite3
yarn add -D drizzle-kit @types/better-sqlite3
```

```Shell
pnpm add drizzle-orm better-sqlite3
pnpm add -D drizzle-kit @types/better-sqlite3
```

```Shell
bun add drizzle-orm better-sqlite3
bun add -D drizzle-kit @types/better-sqlite3
```

--------------------------------

### Handle Database Selection and Navigation in JavaScript

Source: https://orm.drizzle.team/docs/get-started/planetscale-postgres-existing

This JavaScript code manages user interaction with database selection dropdowns. It listens for changes on `dbSelect` and `dbTypeSelect` elements, dynamically adjusts their width based on selected text, and redirects the user to the appropriate 'Get Started' documentation path. It depends on the `flatItems` array and specific DOM elements (`db-select`, `db-type-select`, `db-resizer`, `db-type-resizer`).

```javascript
const databaseType = "existing";
const dbSelect = document.getElementById('db-select');
const dbTypeSelect = document.getElementById('db-type-select');
const dbSelectResizer = document.getElementById('db-resizer');
const dbTypeSelectResizer = document.getElementById('db-type-resizer');
dbSelect.addEventListener('change', (e) => {
  dbSelectResizer.innerText = e.target.value;
  dbSelect.style.width = `${dbSelectResizer.offsetWidth}px`;
  window.location.href = flatItems.find(({name}) => name === e.target.value).path[databaseType];
});
dbTypeSelect.addEventListener('change', (e) => {
  dbTypeSelectResizer.innerText = e.target.value === 'new' ? 'New database' : 'Existing database';
  dbTypeSelect.style.width = `${dbTypeSelectResizer.offsetWidth}px`;
  window.location.href = currentItem.path[e.target.value];
});
dbSelect.style.width = `${dbS`
```

--------------------------------

### Install Drizzle ORM and Dependencies with pnpm

Source: https://orm.drizzle.team/docs/get-started/supabase-existing

Install required packages for Drizzle ORM, PostgreSQL driver, environment variable management, and development tools using pnpm package manager.

```bash
pnpm add drizzle-orm postgres dotenv
pnpm add -D drizzle-kit tsx
```

--------------------------------

### Running Drizzle Kit Studio with Custom Host and Port via CLI

Source: https://orm.drizzle.team/docs/drizzle-kit-studio

These commands illustrate how to start the Drizzle Kit Studio server using various package managers (npm, yarn, pnpm, bun) while specifying a custom host and port. This allows developers to configure where the Drizzle Studio interface is accessible locally.

```npm
npx drizzle-kit studio --port=3000
npx drizzle-kit studio --host=0.0.0.0
npx drizzle-kit studio --host=0.0.0.0 --port=3000
```

```yarn
yarn drizzle-kit studio --port=3000
yarn drizzle-kit studio --host=0.0.0.0
yarn drizzle-kit studio --host=0.0.0.0 --port=3000
```

```pnpm
pnpm drizzle-kit studio --port=3000
pnpm drizzle-kit studio --host=0.0.0.0
pnpm drizzle-kit studio --host=0.0.0.0 --port=3000
```

```bun
bunx drizzle-kit studio --port=3000
bunx drizzle-kit studio --host=0.0.0.0
bunx drizzle-kit studio --host=0.0.0.0 --port=3000
```

--------------------------------

### Install dotenv Package

Source: https://orm.drizzle.team/docs/tutorials/drizzle-with-neon

These commands install the `dotenv` package, which is used to load environment variables from a `.env` file into `process.env`. This is crucial for securely managing sensitive information like database connection strings.

```bash
npm i dotenv
```

```bash
yarn add dotenv
```

```bash
pnpm add dotenv
```

```bash
bun add dotenv
```

--------------------------------

### Theme Transition Manager - JavaScript

Source: https://orm.drizzle.team/docs/get-started

Creates a transition manager that temporarily disables CSS transitions to prevent visual glitches during theme changes. Returns enable/disable functions to control transition state and provides access to the style element for computed style queries.

```javascript
const transitionManager = () => {
  const style = document.createElement("style");
  const css = document.createTextNode(`* {
    -webkit-transition: none !important;
    -moz-transition: none !important;
    -o-transition: none !important;
    -ms-transition: none !important;
    transition: none !important;
  }`);
  style.appendChild(css);
  const enable = () => document.head.removeChild(style);
  const disable = () => document.head.appendChild(style);
  return { enable, disable, style };
};
```

--------------------------------

### Example Drizzle Kit Generated SQL Migration

Source: https://orm.drizzle.team/docs/tutorials/drizzle-with-vercel-edge-functions

This is an example of the SQL code generated by Drizzle Kit for creating the `users_table`. This SQL script defines the table structure, including a serial primary key, text columns for name, age, and a unique constraint for the email, reflecting your defined schema.

```sql
CREATE TABLE IF NOT EXISTS "users_table" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"age" text NOT NULL,
	"email" text NOT NULL,
	CONSTRAINT "users_table_email_unique" UNIQUE("email")
);
```

--------------------------------

### Install Drizzle ORM and Dependencies with yarn

Source: https://orm.drizzle.team/docs/get-started/supabase-existing

Install required packages for Drizzle ORM, PostgreSQL driver, environment variable management, and development tools using yarn package manager.

```bash
yarn add drizzle-orm postgres dotenv
yarn add -D drizzle-kit tsx
```

--------------------------------

### Perform relational queries with Drizzle ORM in TypeScript

Source: https://orm.drizzle.team/docs/rqb-v2

This example demonstrates how to define a relational schema and perform nested queries using Drizzle ORM. It shows the setup of `users` and `posts` tables with their relations, and then queries users along with their associated posts. The `drizzle` import path depends on the specific database driver used.

```typescript
import { relations } from './schema';
import { drizzle } from 'drizzle-orm/...';

const db = drizzle({ relations });

const result = await db.query.users.findMany({
	with: {
		posts: true			
	},
});
```

```json
[{
	id: 10,
	name: "Dan",
	posts: [
		{
			id: 1,
			content: "SQL is awesome",
			authorId: 10,
		},
		{
			id: 2,
			content: "But check relational queries",
			authorId: 10,
		}
	]
}]
```

```typescript
import { defineRelations } from "drizzle-orm";
import * as p from "drizzle-orm/pg-core";

export const posts = p.pgTable("posts", {
  id: p.integer().primaryKey(),
  content: p.text().notNull(),
  authorId: p.integer("author_id").notNull(),
});

export const users = p.pgTable("users", {
  id: p.integer().primaryKey(),
  name: p.text().notNull(),
});

export const relations = defineRelations({ users, posts }, (r) => ({
  posts: {
    author: r.one.users({
      from: r.posts.authorId,
      to: r.users.id,
    }),
  },
  users: {
    posts: r.many.users(),
  },
}));
```

--------------------------------

### Implementing a Custom Drizzle ORM Cache Provider (TypeScript)

Source: https://orm.drizzle.team/docs/cache

Provides a complete example of a custom cache implementation, `TestGlobalCache`, extending Drizzle's `Cache` abstract class. It demonstrates overriding `strategy()`, `get()`, `put()`, and `onMutate()` methods to define custom caching behavior, including storing query results, associating them with tables for invalidation, and handling mutation events.

```typescript
import Keyv from "keyv";

export class TestGlobalCache extends Cache {
  private globalTtl: number = 1000;
  // This object will be used to store which query keys were used
  // for a specific table, so we can later use it for invalidation.
  private usedTablesPerKey: Record<string, string[]> = {};

  constructor(private kv: Keyv = new Keyv()) {
    super();
  }

  // For the strategy, we have two options:
  // - 'explicit': The cache is used only when .$withCache() is added to a query.
  // - 'all': All queries are cached globally.
  // The default behavior is 'explicit'.
  override strategy(): "explicit" | "all" {
    return "all";
  }

  // This function accepts query and parameters that cached into key param,
  // allowing you to retrieve response values for this query from the cache.
  override async get(key: string): Promise<any[] | undefined> {
    const res = (await this.kv.get(key)) ?? undefined;
    return res;
  }

  // This function accepts several options to define how cached data will be stored:
  // - 'key': A hashed query and parameters.
  // - 'response': An array of values returned by Drizzle from the database.
  // - 'tables': An array of tables involved in the select queries. This information is needed for cache invalidation.
  //
  // For example, if a query uses the "users" and "posts" tables, you can store this information. Later, when the app executes
  // any mutation statements on these tables, you can remove the corresponding key from the cache.
  // If you're okay with eventual consistency for your queries, you can skip this option.
  override async put(
    key: string,
    response: any,
    tables: string[],
    config?: CacheConfig,
  ): Promise<void> {
    const ttl = config?.px ?? (config?.ex ? config.ex * 1000 : this.globalTtl);

    await this.kv.set(key, response, ttl);

    for (const table of tables) {
      const keys = this.usedTablesPerKey[table];
      if (keys === undefined) {
        this.usedTablesPerKey[table] = [key];
      } else {
        keys.push(key);
      }
    }
  }

  // This function is called when insert, update, or delete statements are executed.
  // You can either skip this step or invalidate queries that used the affected tables.
  //
  // The function receives an object with two keys:
  // - 'tags': Used for queries labeled with a specific tag, allowing you to invalidate by that tag.
  // - 'tables': The actual tables affected by the insert, update, or delete statements,
  //   helping you track which tables have changed since the last cache update.
  override async onMutate(params: {
    tags: string | string[];
    tables: string | string[] | Table<any> | Table<any>[];
  }): Promise<void> {
    const tagsArray = params.tags
      ? Array.isArray(params.tags)
        ? params.tags
        : [params.tags]
      : [];
    const tablesArray = params.tables
      ? Array.isArray(params.tables)
        ? params.tables
        : [params.tables]
      : [];

```

--------------------------------

### Set Theme Preference - JavaScript

Source: https://orm.drizzle.team/docs/get-started

Manages theme preference by storing selection in localStorage and applying theme classes to the document root. Handles system preference detection via matchMedia and applies appropriate color-scheme CSS property. Disables transitions during theme application to prevent visual artifacts.

```javascript
const setPreference = (themeName) => {
  const transitions = transitionManager();
  transitions.disable();
  localStorage.setItem("theme", themeName);
  if (!document.firstElementChild) return;
  if (themeName === "system") {
    themeName = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  document.firstElementChild.classList.toggle("dark", themeName === "dark");
  document.firstElementChild.classList.toggle("light", themeName !== "dark");
  document.firstElementChild.setAttribute(
    "style",
    themeName === "dark" ? "color-scheme: dark" : "color-scheme: light"
  );
  window.getComputedStyle(transitions.style).opacity;
  transitions.enable();
};
```

--------------------------------

### Initializing Drizzle ORM with an Existing MSSQL Connection Pool

Source: https://orm.drizzle.team/docs/get-started-mssql

This JavaScript/TypeScript example shows how to integrate Drizzle ORM with an already established `mssql` connection pool. Instead of Drizzle creating its own connection, you can pass an existing `ConnectionPool` instance directly to the `drizzle` function. This is useful for managing connection lifecycle outside of Drizzle. A sample query verifies the setup.

```typescript
// Make sure to install the 'mssql' package 
import { drizzle } from "drizzle-orm/node-mssql";
import type { ConnectionPool } from 'mssql';

const pool = await mssql.connect(connectionString);
const db = drizzle({ client: pool });
 
const result = await db.execute('select 1');
```

--------------------------------

### Install Drizzle ORM with TiDB Serverless Packages

Source: https://orm.drizzle.team/docs/connect-tidb

Installs required dependencies for Drizzle ORM integration with TiDB Serverless HTTP driver. Provides package installation commands for multiple package managers (npm, yarn, pnpm, bun) to set up both runtime and development dependencies.

```Shell
npm i drizzle-orm @tidbcloud/serverless
npm i -D drizzle-kit
```

```Shell
yarn add drizzle-orm @tidbcloud/serverless
yarn add -D drizzle-kit
```

```Shell
pnpm add drizzle-orm @tidbcloud/serverless
pnpm add -D drizzle-kit
```

```Shell
bun add drizzle-orm @tidbcloud/serverless
bun add -D drizzle-kit
```

--------------------------------

### Install Drizzle ORM and Drizzle Kit Packages

Source: https://orm.drizzle.team/docs/get-started/bun-sql-new

This section provides commands to install the necessary Drizzle ORM and Drizzle Kit packages, along with TypeScript types for Bun, using various JavaScript package managers.

```bash
npm i drizzle-orm
npm i -D drizzle-kit @types/bun
```

```bash
yarn add drizzle-orm
yarn add -D drizzle-kit @types/bun
```

```bash
pnpm add drizzle-orm
pnpm add -D drizzle-kit @types/bun
```

```bash
bun add drizzle-orm
bun add -D drizzle-kit @types/bun
```

--------------------------------

### Apply explicit NOT condition filter in Drizzle ORM and SQL

Source: https://orm.drizzle.team/docs/rqb-v2

Illustrates how to filter users where the 'id' is NOT greater than 10 AND the 'name' starts with 'John'. This example uses Drizzle ORM's `NOT` operator combined with an implicit `AND` for other conditions.

```typescript
const response = db.query.users.findMany({
  where: {
    NOT: {
      id: {
        gt: 10,
      },
    },
    name: {
      like: "John%",
    },
  },
});
```

```sql
select "users"."id" as "id", "users"."name" as "name" 
from "users" 
where (not "users"."id" > 10 and "users"."name" like 'John%')
```

--------------------------------

### Run Drizzle Kit Check Command with Various Package Managers

Source: https://orm.drizzle.team/docs/drizzle-kit-check

Demonstrates how to execute the `drizzle-kit check` command using different Node.js package managers (npm, yarn, pnpm, bun). These examples illustrate configuring the database dialect and specifying an output directory for migrations directly via CLI arguments, which is particularly useful for automation in CI/CD pipelines.

```npm
npx drizzle-kit check --dialect=postgresql
npx drizzle-kit check --dialect=postgresql --out=./migrations-folder
```

```yarn
yarn drizzle-kit check --dialect=postgresql
yarn drizzle-kit check --dialect=postgresql --out=./migrations-folder
```

```pnpm
pnpm drizzle-kit check --dialect=postgresql
pnpm drizzle-kit check --dialect=postgresql --out=./migrations-folder
```

```bun
bunx drizzle-kit check --dialect=postgresql
bunx drizzle-kit check --dialect=postgresql --out=./migrations-folder
```

--------------------------------

### Install ESLint Drizzle Plugin with bun

Source: https://orm.drizzle.team/docs/eslint-plugin

Installation commands for the ESLint Drizzle Plugin and required TypeScript ESLint dependencies using bun package manager.

```bash
bun add eslint-plugin-drizzle
bun add @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

--------------------------------

### Perform synchronous queries with Drizzle ORM and Bun SQLite

Source: https://orm.drizzle.team/docs/connect-bun-sqlite

This JavaScript code demonstrates how to leverage Drizzle ORM's synchronous APIs when working with `bun:sqlite`. It initializes Drizzle with an existing `bun:sqlite` client and then shows examples of using `all()`, `get()`, `values()`, and `run()` methods for immediate query execution, mirroring common SQLite driver patterns.

```javascript
import { drizzle } from 'drizzle-orm/bun-sqlite';
import { Database } from 'bun:sqlite';

const sqlite = new Database('sqlite.db');
const db = drizzle({ client: sqlite });

const result = db.select().from(users).all();
const result = db.select().from(users).get();
const result = db.select().from(users).values();
const result = db.select().from(users).run();
```

--------------------------------

### Install Drizzle ORM and Drizzle Kit beta versions

Source: https://orm.drizzle.team/docs/upgrade-v1

This snippet provides commands to install the beta versions of Drizzle ORM and Drizzle Kit using various package managers. It's essential for upgrading to the Drizzle v1 Release Candidate. The `drizzle-orm` package is installed as a dependency, and `drizzle-kit` as a development dependency.

```npm
npm i drizzle-orm@beta
npm i -D drizzle-kit@beta
```

```yarn
yarn add drizzle-orm@beta
yarn add -D drizzle-kit@beta
```

```pnpm
pnpm add drizzle-orm@beta
pnpm add -D drizzle-kit@beta
```

```bun
bun add drizzle-orm@beta
bun add -D drizzle-kit@beta
```

--------------------------------

### Paginate Drizzle ORM posts with comments using limit and offset

Source: https://orm.drizzle.team/docs/rqb-v2

This example demonstrates how to paginate posts that include their comments using Drizzle ORM's `limit` and `offset`. It retrieves 5 posts, starting from the 6th post (offset 5), ensuring all associated comments are fetched for these specific posts.

```javascript
await db.query.posts.findMany({
	with: {
		comments: true,
	},
  limit: 5,
  offset: 5,
});
```

--------------------------------

### Limit/Offset Pagination Data Inconsistency Example

Source: https://orm.drizzle.team/docs/guides/limit-offset-pagination

Demonstrates the data inconsistency problem in limit/offset pagination when rows are deleted between page requests. Shows how row id 3 gets skipped on page 2 after row id 2 is deleted, illustrating why cursor-based pagination may be preferable for real-time data.

```TypeScript
const getUsers = async (page = 1, pageSize = 3) => {
  return await db
    .select()
    .from(users)
    .orderBy(asc(users.id))
    .limit(pageSize)
    .offset((page - 1) * pageSize);
};

// First page request
await getUsers();
// Results: [{ id: 1, firstName: 'Alice', ... }, { id: 2, firstName: 'Alex', ... }, { id: 3, firstName: 'Aaron', ... }]

// Row deleted between requests
await db.delete(users).where(eq(users.id, 2));

// Second page request
await getUsers(2);
// Results: [{ id: 5, firstName: 'Beth', ... }, { id: 6, firstName: 'Charlie', ... }, { id: 7, firstName: 'Clara', ... }]
// Note: id 3 was skipped due to deletion
```

--------------------------------

### Database Integration Configuration Data Structure (JavaScript)

Source: https://orm.drizzle.team/docs/get-started/op-sqlite-new

This JavaScript code defines a structured data object and array containing configuration details for various database integrations. Each entry includes the database name, specific paths for "new" and "existing" setup guides, and icon paths with styling for both light and dark themes. This data is intended for dynamic rendering of database selection interfaces or for internal application logic.

```javascript
(function(){const currentItem = {"name":"OP SQLite","path":{"existing":"/docs/get-started/op-sqlite-existing","new":"/docs/get-started/op-sqlite-new"},"icon":{"light":{"path":"/public/svg/opsqlite.png","style":{"width":"20px","borderRadius":"4px"}},"dark":{"path":"/public/svg/opsqlite.png","style":{"width":"20px","borderRadius":"4px"}}}}; const flatItems = [{"name":"PostgreSQL","path":{"existing":"/docs/get-started/postgresql-existing","new":"/docs/get-started/postgresql-new"},"icon":{"light":{"path":"/public/svg/postgresql.svg","style":{"width":20}},"dark":{"path":"/public/svg/postgresql.svg","style":{"width":20,"fill":"#f0f0f0"}}}},{"name":"Neon","path":{"existing":"/docs/get-started/neon-existing","new":"/docs/get-started/neon-new"},"icon":{"light":{"path":"/public/svg/neon-light.svg","style":{"width":20}},"dark":{"path":"/public/svg/neon-dark.svg","style":{"width":20}}}},{"name":"Vercel Postgres","path":{"existing":"/docs/get-started/vercel-existing","new":"/docs/get-started/vercel-new"},"icon":{"light":{"path":"/public/svg/vercel.svg","style":{"width":20}},"dark":{"path":"/public/svg/vercel.svg","style":{"width":20,"fill":"#000000"}}}},{"name":"Supabase","path":{"existing":"/docs/get-started/supabase-existing","new":"/docs/get-started/supabase-new"},"icon":{"light":{"path":"/public/svg/supabase.svg","style":{"width":20}},"dark":{"path":"/public/svg/supabase.svg","style":{"width":20}}}},{"name":"Xata","path":{"existing":"/docs/get-started/xata-existing","new":"/docs/get-started/xata-new"},"icon":{"light":{"path":"/public/svg/xata.svg","style":{"width":26}},"dark":{"path":"/public/svg/xata.svg","style":{"width":26}}}},{"name":"PGLite","path":{"existing":"/docs/get-started/pglite-existing","new":"/docs/get-started/pglite-new"},"icon":{"light":{"path":"/public/svg/pglite.svg","style":{"width":26}},"dark":{"path":"/public/svg/pglite.svg","style":{"width":26}}}},{"name":"Nile","path":{"existing":"/docs/get-started/nile-existing","new":"/docs/get-started/nile-new"},"icon":{"light":{"path":"/public/svg/nile.svg"},"dark":{"path":"/public/svg/nile.svg"}}},{"name":"Bun SQL","path":{"existing":"/docs/get-started/bun-sql-existing","new":"/docs/get-started/bun-sql-new"},"icon":{"light":{"path":"/public/svg/bun.svg","style":{"width":20}},"dark":{"path":"/public/svg/bun.svg","style":{"width":20}}}},{"name":"Effect","path":{"existing":"/docs/get-started/effect-postgresql-existing","new":"/docs/get-started/effect-postgresql-new"},"icon":{"light":{"path":"/public/svg/effect_light.svg","style":{"width":20,"fill":"#f0f0f0"}},"dark":{"path":"/public/svg/effect.svg","style":{"width":20,"fill":"#f0f0f0"}}}},{"name":"PlanetScale Postgres","path":{"existing":"/docs/get-started/planetscale-postgres-existing","new":"/docs/get-started/planetscale-postgres-new"},"icon":{"light":{"path":"/public/svg/planetscale.svg","style":{"width":20}},"dark":{"path":"/public/svg/planetscale.svg","style":{"width":20,"color":"#f0f0f0"}}}},{"name":"Gel","path":{"existing":"/docs/get-started/gel-existing","new":"/docs/get-started/gel-new"},"icon":{"light":{"path":"/public/svg/gel_light.svg","style":{"style":"border-radius: 5px","width":34,"height":34}},"dark":{"path":"/public/svg/gel_dark.svg","style":{"style":"border-radius: 5px","width":34,"height":34}}}},{"name":"MySQL","path":{"existing":"/do
```

--------------------------------

### Declare Existing Views and Materialized Views in Drizzle ORM

Source: https://orm.drizzle.team/docs/views

This snippet demonstrates how to define existing views and materialized views in Drizzle ORM using the `.existing()` configuration. This setup informs `drizzle-kit` to ignore these definitions during migration generation, as the views are assumed to pre-exist in the database. It includes examples for both regular and materialized views.

```TypeScript
export const user = pgTable("user", {
  id: serial(),
  name: text(),
  email: text(),
  password: text(),
  role: text().$type<"admin" | "customer">(),
  createdAt: timestamp("created_at"),
  updatedAt: timestamp("updated_at"),
});

// regular view
export const trimmedUser = pgView("trimmed_user", {
  id: serial("id"),
  name: text("name"),
  email: text("email"),
}).existing();

// materialized view won't make any difference, yet you can use it for consistency
export const trimmedUser = pgMaterializedView("trimmed_user", {
  id: serial("id"),
  name: text("name"),
  email: text("email"),
}).existing();
```

--------------------------------

### Deploying Project and Managing Environment Variables with Vercel CLI

Source: https://orm.drizzle.team/docs/tutorials/drizzle-with-vercel-edge-functions

These commands demonstrate how to deploy a project to Vercel using the Vercel CLI and how to add or update environment variables, specifically `POSTGRES_URL`, which is crucial for database connections. Redeploying ensures the new environment variables are active.

```bash
vercel
```

```bash
vercel env add POSTGRES_URL
```

```bash
vercel
```

--------------------------------

### Query Similar Guides Using Cosine Distance

Source: https://orm.drizzle.team/docs/guides/vector-similarity-search

Searches for guides similar to a given description by generating embeddings and calculating cosine distance. Uses Drizzle ORM with sql operators to query the database and return similar guides ordered by relevance.

```TypeScript
import { cosineDistance, desc, gt, sql } from 'drizzle-orm';
import { generateEmbedding } from './embedding';
import { guides } from './schema';

const db = drizzle(...);

const findSimilarGuides = async (description: string) => {
  const embedding = await generateEmbedding(description);
```

--------------------------------

### Example 2: Seed `users` with associated `posts`

Source: https://orm.drizzle.team/docs/seed-overview

This example seeds the `users` table with 20 entities and, for each user, creates 10 associated `posts` records. The `with` property handles the creation and referencing of related entities.

```APIDOC
## METHOD CALL `seed(db, schema).refine` - Example 2\n\n### Description\nThis example seeds the `users` table with 20 entities and, for each user, creates 10 associated `posts` records. The `with` property handles the creation and referencing of related entities.\n\n### Method\nMETHOD CALL\n\n### Endpoint\n`seed(db, schema).refine((f) => ({ ... }))`\n\n### Parameters\n#### Return Object Properties\n- **users** (object) - Refines the `users` table.\n    - **count** (number) - Sets the number of `users` records to 20.\n    - **with** (object) - Specifies associated entities.\n        - **posts** (number) - Creates 10 `posts` records for each `user`.\n\n### Request Example\n```json\n{\n  "users": {\n    "count": 20,\n    "with": {\n      "posts": 10\n    }\n  }\n}\n```\n\n### Response\n#### Success Response (Promise)\n- Returns a Promise that resolves upon successful completion of the seeding process.\n\n#### Response Example\n```json\n// No direct JSON response body. The promise resolves upon completion.\n```
```

--------------------------------

### Define Vector Column Type in Drizzle ORM

Source: https://orm.drizzle.team/docs/extensions/pg

Creates a PostgreSQL table with a vector column using Drizzle ORM. The vector type stores embeddings with specified dimensions (3 in this example). Requires pg_vector extension installed in PostgreSQL database.

```TypeScript
const table = pgTable('table', {
    embedding: vector({ dimensions: 3 })
})
```

```SQL
CREATE TABLE IF NOT EXISTS "table" (
	"embedding" vector(3)
);
```

--------------------------------

### Execute Drizzle Kit Push via CLI

Source: https://orm.drizzle.team/docs/drizzle-kit-push

Demonstrates two methods to run drizzle-kit push: using configuration file or passing options directly via CLI arguments. Both approaches require dialect, schema path, and database connection parameters.

```bash
npx drizzle-kit push
```

```bash
npx drizzle-kit push --dialect=postgresql --schema=./src/schema.ts --url=postgresql://user:password@host:port/dbname
```

--------------------------------

### Install Babel plugin for inlining SQL migration files

Source: https://orm.drizzle.team/docs/connect-expo-sqlite

This command installs `babel-plugin-inline-import`, which is essential for bundling SQL migration files directly into your application's JavaScript bundle when working with Expo/React Native.

```bash
npm install babel-plugin-inline-import
```

--------------------------------

### Database Type Selection Dropdown Event Handler - JavaScript

Source: https://orm.drizzle.team/docs/get-started/bun-sql-new

Manages switching between 'new' and 'existing' database setup documentation. Updates the dropdown display text and width dynamically, then navigates to the appropriate documentation path based on the selected database type.

```javascript
const dbTypeSelect = document.getElementById('db-type-select');
const dbTypeSelectResizer = document.getElementById('db-type-resizer');

dbTypeSelect.addEventListener('change', (e) => {
  dbTypeSelectResizer.innerText = e.target.value === 'new' ? 'New database' : 'Existing database';
  dbTypeSelect.style.width = `${dbTypeSelectResizer.offsetWidth}px`;
  window.location.href = currentItem.path[e.target.value];
});

dbTypeSelect.style.width = `${dbTypeSelectResizer.offsetWidth}px`;
```

--------------------------------

### Install Netlify Edge Functions Type Definitions

Source: https://orm.drizzle.team/docs/tutorials/drizzle-with-netlify-edge-functions-neon

This section provides commands to optionally install the `@netlify/edge-functions` package. This package provides TypeScript type definitions for the `Context` object used in Netlify Edge Functions, which can enhance developer experience with type-checking and autocompletion.

```npm
npm i @netlify/edge-functions
```

```yarn
yarn add @netlify/edge-functions
```

```pnpm
pnpm add @netlify/edge-functions
```

```bun
bun add @netlify/edge-functions
```

--------------------------------

### Defining Database Integration Configuration Data in JavaScript

Source: https://orm.drizzle.team/docs/get-started/effect-postgresql-existing

This JavaScript snippet defines structured configuration data for various database integrations. It includes an immediately invoked function expression (IIFE) that initializes `currentItem` and `flatItems` arrays, detailing database names, paths for 'existing' and 'new' setup guides, and SVG icon configurations for both light and dark themes.

```javascript
(function(){const currentItem = {"name":"Effect","path":{"existing":"/docs/get-started/effect-postgresql-existing","new":"/docs/get-started/effect-postgresql-new"},"icon":{"light":{"path":"/public/svg/effect_light.svg","style":{"width":20,"fill":"#f0f0f0"}},"dark":{"path":"/public/svg/effect.svg","style":{"width":20,"fill":"#f0f0f0"}}}}; const flatItems = [{"name":"PostgreSQL","path":{"existing":"/docs/get-started/postgresql-existing","new":"/docs/get-started/postgresql-new"},"icon":{"light":{"path":"/public/svg/postgresql.svg","style":{"width":20}},"dark":{"path":"/public/svg/postgresql.svg","style":{"width":20,"fill":"#f0f0f0"}}}},{"name":"Neon","path":{"existing":"/docs/get-started/neon-existing","new":"/docs/get-started/neon-new"},"icon":{"light":{"path":"/public/svg/neon-light.svg","style":{"width":20}},"dark":{"path":"/public/svg/neon-dark.svg","style":{"width":20}}}},{"name":"Vercel Postgres","path":{"existing":"/docs/get-started/vercel-existing","new":"/docs/get-started/vercel-new"},"icon":{"light":{"path":"/public/svg/vercel.svg","style":{"width":20}},"dark":{"path":"/public/svg/vercel.svg","style":{"width":20,"fill":"#000000"}}}},{"name":"Supabase","path":{"existing":"/docs/get-started/supabase-existing","new":"/docs/get-started/supabase-new"},"icon":{"light":{"path":"/public/svg/supabase.svg","style":{"width":20}},"dark":{"path":"/public/svg/supabase.svg","style":{"width":20}}}},{"name":"Xata","path":{"existing":"/docs/get-started/xata-existing","new":"/docs/get-started/xata-new"},"icon":{"light":{"path":"/public/svg/xata.svg","style":{"width":26}},"dark":{"path":"/public/svg/xata.svg","style":{"width":26}}}},{"name":"PGLite","path":{"existing":"/docs/get-started/pglite-existing","new":"/docs/get-started/pglite-new"},"icon":{"light":{"path":"/public/svg/pglite.svg","style":{"width":26}},"dark":{"path":"/public/svg/pglite.svg","style":{"width":26}}}},{"name":"Nile","path":{"existing":"/docs/get-started/nile-existing","new":"/docs/get-started/nile-new"},"icon":{"light":{"path":"/public/svg/nile.svg"},"dark":{"path":"/public/svg/nile.svg"}}},{"name":"Bun SQL","path":{"existing":"/docs/get-started/bun-sql-existing","new":"/docs/get-started/bun-sql-new"},"icon":{"light":{"path":"/public/svg/bun.svg","style":{"width":20}},"dark":{"path":"/public/svg/bun.svg","style":{"width":20}}}},{"name":"Effect","path":{"existing":"/docs/get-started/effect-postgresql-existing","new":"/docs/get-started/effect-postgresql-new"},"icon":{"light":{"path":"/public/svg/effect_light.svg","style":{"width":20,"fill":"#f0f0f0"}},"dark":{"path":"/public/svg/effect.svg","style":{"width":20,"fill":"#f0f0f0"}}}},{"name":"PlanetScale Postgres","path":{"existing":"/docs/get-started/planetscale-postgres-existing","new":"/docs/get-started/planetscale-postgres-new"},"icon":{"light":{"path":"/public/svg/planetscale.svg","style":{"width":20}},"dark":{"path":"/public/svg/planetscale.svg","style":{"width":20,"color":"#f0f0f0"}}}},{"name":"Gel","path":{"existing":"/docs/get-started/gel-existing","new":"/docs/get-started/gel-new"},"icon":{"light":{"path":"/public/svg/gel_light.svg","style":{"style":"border-radius: 5px","width":34,"height":34}},"dark":{"path":"/public/svg/gel_dark.svg","style":{"style":"border-radius: 5px","width":34,"height":34}}}},{"name":"MySQL","path":{"existing":"
```

--------------------------------

### Defining Database Integration Configuration Data in JavaScript

Source: https://orm.drizzle.team/docs/get-started/planetscale-existing

This JavaScript snippet defines a structured array of objects, each representing a different database integration option. Each object contains properties such as the database name, paths for 'existing' and 'new' setup guides, and icon configurations (path, style) for both light and dark themes. This data is likely used to dynamically render UI elements for database selection.

```javascript
(function(){const currentItem = {"name":"PlanetScale","path":{"existing":"/docs/get-started/planetscale-existing","new":"/docs/get-started/planetscale-new"},"icon":{"light":{"path":"/public/svg/planetscale.svg","style":{"width":20}},"dark":{"path":"/public/svg/planetscale.svg","style":{"width":20,"color":"#f0f0f0"}}}};
const flatItems = [{"name":"PostgreSQL","path":{"existing":"/docs/get-started/postgresql-existing","new":"/docs/get-started/postgresql-new"},"icon":{"light":{"path":"/public/svg/postgresql.svg","style":{"width":20}},"dark":{"path":"/public/svg/postgresql.svg","style":{"width":20,"fill":"#f0f0f0"}}}},{"name":"Neon","path":{"existing":"/docs/get-started/neon-existing","new":"/docs/get-started/neon-new"},"icon":{"light":{"path":"/public/svg/neon-light.svg","style":{"width":20}},"dark":{"path":"/public/svg/neon-dark.svg","style":{"width":20}}}},{"name":"Vercel Postgres","path":{"existing":"/docs/get-started/vercel-existing","new":"/docs/get-started/vercel-new"},"icon":{"light":{"path":"/public/svg/vercel.svg","style":{"width":20}},"dark":{"path":"/public/svg/vercel.svg","style":{"width":20,"fill":"#000000"}}}},{"name":"Supabase","path":{"existing":"/docs/get-started/supabase-existing","new":"/docs/get-started/supabase-new"},"icon":{"light":{"path":"/public/svg/supabase.svg","style":{"width":20}},"dark":{"path":"/public/svg/supabase.svg","style":{"width":20}}}},{"name":"Xata","path":{"existing":"/docs/get-started/xata-existing","new":"/docs/get-started/xata-new"},"icon":{"light":{"path":"/public/svg/xata.svg","style":{"width":26}},"dark":{"path":"/public/svg/xata.svg","style":{"width":26}}}},{"name":"PGLite","path":{"existing":"/docs/get-started/pglite-existing","new":"/docs/get-started/pglite-new"},"icon":{"light":{"path":"/public/svg/pglite.svg","style":{"width":26}},"dark":{"path":"/public/svg/pglite.svg","style":{"width":26}}}},{"name":"Nile","path":{"existing":"/docs/get-started/nile-existing","new":"/docs/get-started/nile-new"},"icon":{"light":{"path":"/public/svg/nile.svg"},"dark":{"path":"/public/svg/nile.svg"}}},{"name":"Bun SQL","path":{"existing":"/docs/get-started/bun-sql-existing","new":"/docs/get-started/bun-sql-new"},"icon":{"light":{"path":"/public/svg/bun.svg","style":{"width":20}},"dark":{"path":"/public/svg/bun.svg","style":{"width":20}}}},{"name":"Effect","path":{"existing":"/docs/get-started/effect-postgresql-existing","new":"/docs/get-started/effect-postgresql-new"},"icon":{"light":{"path":"/public/svg/effect_light.svg","style":{"width":20,"fill":"#f0f0f0"}},"dark":{"path":"/public/svg/effect.svg","style":{"width":20,"fill":"#f0f0f0"}}}},{"name":"PlanetScale Postgres","path":{"existing":"/docs/get-started/planetscale-postgres-existing","new":"/docs/get-started/planetscale-postgres-new"},"icon":{"light":{"path":"/public/svg/planetscale.svg","style":{"width":20}},"dark":{"path":"/public/svg/planetscale.svg","style":{"width":20,"color":"#f0f0f0"}}}},{"name":"Gel","path":{"existing":"/docs/get-started/gel-existing","new":"/docs/get-started/gel-new"},"icon":{"light":{"path":"/public/svg/gel_light.svg","style":{"style":"border-radius: 5px","width":34,"height":34}},"dark":{"path":"/public/svg/gel_dark.svg","style":{"style":"border-radius: 5px","width":34,"height":34}}}},{"name":"MySQL","path":{"existing":"/docs/get-starte
```

--------------------------------

### Install Neon Serverless Driver

Source: https://orm.drizzle.team/docs/tutorials/drizzle-with-neon

These commands install the official Neon serverless driver, which is essential for connecting Drizzle ORM to a Neon Postgres database. Options are provided for different package managers.

```bash
npm i @neondatabase/serverless
```

```bash
yarn add @neondatabase/serverless
```

```bash
pnpm add @neondatabase/serverless
```

```bash
bun add @neondatabase/serverless
```

--------------------------------

### Example Project Structure for Drizzle Kit with Multiple Configs

Source: https://orm.drizzle.team/docs/drizzle-kit-up

This snippet illustrates a typical project directory structure when using Drizzle Kit with multiple configuration files. It shows the placement of `drizzle` and `src` folders, environment files, and distinct `drizzle-dev.config.ts` and `drizzle-prod.config.ts` files. This organization supports managing different database environments effectively.

```text
📦 <project root>
 ├ 📂 drizzle
 ├ 📂 src
 ├ 📜 .env
 ├ 📜 drizzle-dev.config.ts
 ├ 📜 drizzle-prod.config.ts
 ├ 📜 package.json
 └ 📜 tsconfig.json
```

--------------------------------

### Installing mkcert for Localhost SSL Certificates

Source: https://orm.drizzle.team/docs/drizzle-kit-studio

This command installs a local Certificate Authority (CA) using `mkcert`. This is a crucial step for generating self-signed SSL certificates, which are often required to enable secure access to `localhost` in browsers like Safari and Brave when developing with tools like Drizzle Kit Studio.

```shell
mkcert -install
```

--------------------------------

### Install Drizzle ORM and Dependencies with npm

Source: https://orm.drizzle.team/docs/get-started/supabase-existing

Install required packages for Drizzle ORM, PostgreSQL driver, environment variable management, and development tools. This command installs both runtime dependencies (drizzle-orm, postgres, dotenv) and development dependencies (drizzle-kit, tsx).

```bash
npm i drizzle-orm postgres dotenv
npm i -D drizzle-kit tsx
```

--------------------------------

### Initialize Drizzle with Neon Serverless Driver

Source: https://orm.drizzle.team/docs/connect-neon

Initialize Drizzle ORM using the Neon serverless driver for standard HTTP connections. This is the basic setup for Neon serverless PostgreSQL without WebSocket support.

```TypeScript
import { drizzle } from 'drizzle-orm/neon-serverless';

const db = drizzle(process.env.DATABASE_URL);

const result = await db.execute('select 1');
```

--------------------------------

### Apply Supabase Migrations using CLI

Source: https://orm.drizzle.team/docs/tutorials/drizzle-with-supabase-edge-functions

This snippet demonstrates how to initialize the Supabase local development environment and apply pending database migrations using the Supabase Command Line Interface. It's a crucial step for keeping your local database schema in sync with your project's migrations.

```bash
supabase start
```

```bash
supabase migration up
```

--------------------------------

### Initializing Drizzle ORM with MSSQL Driver via Configuration Object

Source: https://orm.drizzle.team/docs/get-started-mssql

This JavaScript/TypeScript example demonstrates initializing Drizzle ORM for MSSQL using a detailed configuration object. This method allows specifying additional `mssql` connection options, such as SSL settings, directly within the Drizzle `drizzle` function. A basic query is included to verify the connection.

```typescript
// Make sure to install the 'pg' package 
import { drizzle } from 'drizzle-orm/node-mssql';

// You can specify any property from the mssql connection options
const db = drizzle({ 
  connection: { 
    connectionString: process.env.DATABASE_URL,
    ssl: true
  }
});
 
const result = await db.execute('select 1');
```

--------------------------------

### Install ESLint Drizzle Plugin with pnpm

Source: https://orm.drizzle.team/docs/eslint-plugin

Installation commands for the ESLint Drizzle Plugin and required TypeScript ESLint dependencies using pnpm package manager.

```bash
pnpm add eslint-plugin-drizzle
pnpm add @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

--------------------------------

### Initialize Drizzle ORM Driver for SingleStore Database Connections

Source: https://orm.drizzle.team/docs/get-started-singlestore

This set of JavaScript examples demonstrates various ways to initialize the Drizzle ORM driver for connecting to a SingleStore database using the `drizzle-orm/singlestore` package. It covers direct URI connection, connection with a configuration object, and using existing `mysql2/promise` client or pool connections. Note that SingleStore has limitations such as no foreign key support and specific transaction behaviors.

```javascript
import { drizzle } from "drizzle-orm/singlestore";

const db = drizzle(process.env.DATABASE_URL);

const response = await db.select().from(...)
```

```javascript
import { drizzle } from "drizzle-orm/singlestore";

// You can specify any property from the mysql2 connection options
const db = drizzle({ connection:{ uri: process.env.DATABASE_URL }});

const response = await db.select().from(...)
```

```javascript
import { drizzle } from "drizzle-orm/singlestore";
import mysql from "mysql2/promise";

const connection = await mysql.createConnection({
  host: "host",
  user: "user",
  database: "database",
  ...
});

const db = drizzle({ client: connection });
```

```javascript
import { drizzle } from "drizzle-orm/singlestore";
import mysql from "mysql2/promise";

const poolConnection = mysql.createPool({
  host: "host",
  user: "user",
  database: "database",
  ...
});

const db = drizzle({ client: poolConnection });
```

--------------------------------

### Configure MySQL Database Connection String

Source: https://orm.drizzle.team/docs/tutorials/drizzle-with-vercel-edge-functions

Set the MYSQL_URL environment variable in .env file with PlanetScale connection string format. Includes user credentials, host, region, database name, and SSL configuration parameters.

```bash
MYSQL_URL="mysql://[user]:[password]@[host].[region].psdb.cloud/[db-name]?ssl={'rejectUnauthorized':[ssl-rejectUnauthorized]}"
```

--------------------------------

### Install ESLint Drizzle Plugin with yarn

Source: https://orm.drizzle.team/docs/eslint-plugin

Installation commands for the ESLint Drizzle Plugin and required TypeScript ESLint dependencies using yarn package manager.

```bash
yarn add eslint-plugin-drizzle
yarn add @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

--------------------------------

### Install Drizzle ORM with Neon serverless driver packages

Source: https://orm.drizzle.team/docs/connect-planetscale-postgres

This snippet provides commands to install packages required for using Drizzle ORM with the `@neondatabase/serverless` driver. It includes `drizzle-orm`, `@neondatabase/serverless`, and `drizzle-kit` for development.

```bash
npm i drizzle-orm @neondatabase/serverless -D drizzle-kit
```

```bash
yarn add drizzle-orm @neondatabase/serverless -D drizzle-kit
```

```bash
pnpm add drizzle-orm @neondatabase/serverless -D drizzle-kit
```

```bash
bun add drizzle-orm @neondatabase/serverless -D drizzle-kit
```

--------------------------------

### Initialize Drizzle with Existing LibSQL Web Client Instance

Source: https://orm.drizzle.team/docs/connect-turso

Initialize Drizzle ORM using an existing @libsql/client/web instance for web environments. Allows custom client configuration for web-based applications. Includes example query execution.

```javascript
import { drizzle } from 'drizzle-orm/libsql/web';
import { createClient } from '@libsql/client/web';

const client = createClient({ 
  url: process.env.DATABASE_URL,
  authToken: process.env.DATABASE_AUTH_TOKEN
});

const db = drizzle({ client });

const result = await db.select().from(users).all()
```

--------------------------------

### Define One-to-Many Relations in Drizzle ORM

Source: https://orm.drizzle.team/docs/relations

Creates a one-to-many relationship between users and posts tables using Drizzle ORM's relations operator. The users table has many posts, and each post belongs to one user through the authorId foreign key. This example demonstrates basic one-to-many setup with the one() and many() helpers.

```TypeScript
import { pgTable, serial, text, integer } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';

export const users = pgTable('users', {
	id: serial('id').primaryKey(),
	name: text('name'),
});

export const usersRelations = relations(users, ({ many }) => ({
	posts: many(posts),
}));

export const posts = pgTable('posts', {
	id: serial('id').primaryKey(),
	content: text('content'),
	authorId: integer('author_id'),
});

export const postsRelations = relations(posts, ({ one }) => ({
	author: one(users, {
		fields: [posts.authorId],
		references: [users.id],
	}),
}));
```

--------------------------------

### Install Drizzle ORM and MSSQL packages with npm

Source: https://orm.drizzle.team/docs/get-started/mssql-existing

Install required packages for Drizzle ORM, MSSQL driver, environment variable management, and development tools. This command installs both runtime and development dependencies needed for MSSQL integration.

```bash
npm i drizzle-orm@beta mssql dotenv
npm i -D drizzle-kit@beta tsx
```

--------------------------------

### Styling for UI Components (CSS)

Source: https://orm.drizzle.team/docs/column-types/mssql

This CSS snippet defines the visual styles for several UI components, including 'supported' chips, a grid of 'YouTube' video cards, and a 'get started' call-to-action link. It includes styles for layout, typography, colors, borders, shadows, and interactive states (like hover). Responsive adjustments are made using media queries for smaller screens, and distinct styles are provided for dark mode themes.

```css
.is-supported-yes svg{flex-shrink:0;height:16px;width:14px}.is-supported-text{font-size:14px;font-weight:500}.is-supported-chip-group{display:flex;flex-wrap:wrap;gap:6px;padding:6px 0}.is-supported-chip-group-joined{gap:0}.is-supported-chip-group-joined .is-supported-chip{border-left:none;border-radius:0;padding-right:10px}.is-supported-chip-group-joined .is-supported-chip:first-child{border-bottom-left-radius:5px;border-left:1px solid #3f3d3f;border-top-left-radius:5px}.is-supported-chip-group-joined .is-supported-chip:last-child{border-bottom-right-radius:5px;border-top-right-radius:5px}html[class~=dark] .is-supported-chip{background:#1a1a1a;border-color:#292929} .youtube-cards__scroll[data-astro-cid-h35cxjte]{margin-top:6px}html.dark .youtube-card[data-astro-cid-h35cxjte]{background-color:#111}.youtube-cards__wrap[data-astro-cid-h35cxjte]{align-items:flex-start;display:grid;gap:16px;grid-template-columns:repeat(auto-fill,minmax(240px,max-content));max-width:896px}.youtube-card[data-astro-cid-h35cxjte]{flex:1 1 240px;flex-direction:column;max-width:280px;min-height:200px;min-width:240px}.youtube-card[data-astro-cid-h35cxjte],.youtube-card__link[data-astro-cid-h35cxjte]{border-radius:4px;display:flex;height:100%}.youtube-card__link[data-astro-cid-h35cxjte]{cursor:pointer;flex-direction:column;text-decoration:none;transition:all .1s}.youtube-card__link[data-astro-cid-h35cxjte]:hover{box-shadow:0 3px 6px #00000014,0 2px 4px #00000012}html.dark .youtube-card__content[data-astro-cid-h35cxjte]{border-bottom:1px solid #404040;border-left:1px solid #404040;border-right:1px solid #404040}.youtube-card__content[data-astro-cid-h35cxjte]{align-items:flex-start;border-bottom:1px solid #e4e4e5;border-bottom-left-radius:4px;border-bottom-right-radius:4px;border-left:1px solid #e4e4e5;border-right:1px solid #e4e4e5;display:flex;flex-direction:column;height:100%;justify-content:space-between;padding:12px 16px}html.dark .youtube-card__inner-border[data-astro-cid-h35cxjte]{box-shadow:inset 0 0 0 1px #ffffff26}.youtube-card__inner-border[data-astro-cid-h35cxjte]{border-top-left-radius:4px;border-top-right-radius:4px;box-shadow:inset 0 0 0 1px #00000080;inset:0;position:absolute;z-index:2}.youtube-card__time[data-astro-cid-h35cxjte]{background-color:#000c;border-radius:4px;bottom:4px;color:#fff;font-size:12px;font-weight:500;line-height:12px;padding:3px 4px;position:absolute;right:4px;z-index:2}.youtube-card__image[data-astro-cid-h35cxjte]{position:relative;transition:all .1s}.youtube-card__image[data-astro-cid-h35cxjte] img[data-astro-cid-h35cxjte]{aspect-ratio:16/9;border-top-left-radius:4px;border-top-right-radius:4px;-o-object-fit:cover;object-fit:cover;position:relative}html.dark .youtube-card__title[data-astro-cid-h35cxjte]{color:#ecedee}.youtube-card__title[data-astro-cid-h35cxjte]{color:#11181c;display:-moz-box;display:-webkit-box;font-size:15px;font-weight:500;margin-bottom:4px;margin-top:0;overflow:hidden;text-overflow:ellipsis;-webkit-line-clamp:2;-webkit-box-orient:vertical;line-clamp:2;box-orient:vertical}html.dark .youtube-card__description[data-astro-cid-h35cxjte]{color:#9ba1a6}.youtube-card__description[data-astro-cid-h35cxjte]{color:#687076;display:-moz-box;display:-webkit-box;font-size:14px;font-weight:400;margin-top:0;overflow:hidden;text-overflow:ellipsis;-webkit-line-clamp:3;-webkit-box-orient:vertical;line-clamp:3;box-orient:vertical}@media screen and (min-width:769px){.youtube-card__link[data-astro-cid-h35cxjte]:hover .youtube-card__image[data-astro-cid-h35cxjte]{filter:grayscale(0)}.youtube-card__image[data-astro-cid-h35cxjte]{filter:grayscale(.7)}}@media screen and (max-width:768px){.youtube-cards__scroll[data-astro-cid-h35cxjte]{display:flex;margin-left:-16px;margin-right:-16px;overflow-x:auto}.youtube-cards__wrap[data-astro-cid-h35cxjte]{display:grid;gap:12px;grid-auto-flow:column;grid-template-rows:repeat(2,auto);margin:0 16px}.youtube-cards__scroll[data-astro-cid-h35cxjte]::-webkit-scrollbar{display:none}.youtube-cards__scroll[data-astro-cid-h35cxjte]{-ms-overflow-style:none;scrollbar-width:none}.youtube-card[data-astro-cid-h35cxjte]{max-width:240px}.youtube-card__title[data-astro-cid-h35cxjte]{font-size:14px;margin-bottom:0}.youtube-card__description[data-astro-cid-h35cxjte]{font-size:14px}.youtube-card__content[data-astro-cid-h35cxjte]{padding:8px 16px}} .get-started-link[data-astro-cid-76cy367t]{align-items:center;background-color:#fafafa;border:1px solid #21272e1f;border-radius:2px;color:#334155;display:flex;font-size:14px;font-weight:600;overflow:hidden;padding:8px;position:relative;text-decoration:none;transition:border-color .2s,background-color .2s;z-index:1}html.dark .get-started-link[data-astro-cid-76cy367t]{background-color:#1a1a1a;border-color:#292929;color:#c4c5c6}.get-started-link[data-astro-cid-76cy367t]:hover{background-color:#f5f5f5;border-color:#c9cbcf}html.dark .get-s
```

--------------------------------

### Define Drizzle ORM Database Integration Data in JavaScript

Source: https://orm.drizzle.team/docs/get-started/xata-new

This JavaScript code defines data structures for various database integrations supported by Drizzle ORM. It includes details such as the database name, paths for 'new' and 'existing' setup guides, and icon configurations for both light and dark themes, facilitating dynamic display of integration options. Note: The provided code snippet is truncated.

```javascript
(function(){const currentItem = {"name":"Xata","path":{"existing":"/docs/get-started/xata-existing","new":"/docs/get-started/xata-new"},"icon":{"light":{"path":"/public/svg/xata.svg","style":{"width":26}},"dark":{"path":"/public/svg/xata.svg","style":{"width":26}}}}}; const flatItems = [{"name":"PostgreSQL","path":{"existing":"/docs/get-started/postgresql-existing","new":"/docs/get-started/postgresql-new"},"icon":{"light":{"path":"/public/svg/postgresql.svg","style":{"width":20}},"dark":{"path":"/public/svg/postgresql.svg","style":{"width":20,"fill":"#f0f0f0"}}}},{"name":"Neon","path":{"existing":"/docs/get-started/neon-existing","new":"/docs/get-started/neon-new"},"icon":{"light":{"path":"/public/svg/neon-light.svg","style":{"width":20}},"dark":{"path":"/public/svg/neon-dark.svg","style":{"width":20}}}},{"name":"Vercel Postgres","path":{"existing":"/docs/get-started/vercel-existing","new":"/docs/get-started/vercel-new"},"icon":{"light":{"path":"/public/svg/vercel.svg","style":{"width":20}},"dark":{"path":"/public/svg/vercel.svg","style":{"width":20,"fill":"#00000
```

--------------------------------

### Initialize Drizzle ORM with Node.js PostgreSQL driver

Source: https://orm.drizzle.team/docs/get-started-postgresql

These JavaScript examples demonstrate how to initialize Drizzle ORM to connect to a PostgreSQL database using the `node-postgres` driver. It covers connecting via a simple connection string, using a configuration object for more control (e.g., SSL), and integrating an existing `pg.Pool` instance. Each example shows a basic query execution.

```javascript
// Make sure to install the 'pg' package 
import { drizzle } from 'drizzle-orm/node-postgres';

const db = drizzle(process.env.DATABASE_URL);
 
const result = await db.execute('select 1');
```

```javascript
// Make sure to install the 'pg' package 
import { drizzle } from 'drizzle-orm/node-postgres';

// You can specify any property from the node-postgres connection options
const db = drizzle({
  connection: {
    connectionString: process.env.DATABASE_URL,
    ssl: true
  }
});
 
const result = await db.execute('select 1');
```

```javascript
// Make sure to install the 'pg' package 
import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});
const db = drizzle({ client: pool });
 
const result = await db.execute('select 1');
```

--------------------------------

### Install Drizzle ORM and Dependencies

Source: https://orm.drizzle.team/docs/tutorials/drizzle-with-supabase

Package installation commands for Drizzle ORM, Drizzle Kit, dotenv, and postgres packages across multiple package managers (npm, yarn, pnpm, bun). These are prerequisites for setting up Drizzle with Supabase PostgreSQL database.

```Shell
npm i drizzle-orm
npm i -D drizzle-kit
npm i dotenv
npm i postgres
```

```Shell
yarn add drizzle-orm
yarn add -D drizzle-kit
yarn add dotenv
yarn add postgres
```

```Shell
pnpm add drizzle-orm
pnpm add -D drizzle-kit
pnpm add dotenv
pnpm add postgres
```

```Shell
bun add drizzle-orm
bun add -D drizzle-kit
bun add dotenv
bun add postgres
```

--------------------------------

### Apply Migrations Using Supabase CLI

Source: https://orm.drizzle.team/docs/tutorials/drizzle-with-supabase

Complete workflow for applying migrations through Supabase CLI including generating migrations, initializing local Supabase project, linking to remote project, and pushing changes to the database.

```bash
npx drizzle-kit generate
supabase init
supabase link
supabase db push
```

--------------------------------

### Create New Encore Project with Drizzle

Source: https://orm.drizzle.team/docs/tutorials/drizzle-with-encore

Command to initialize a new Encore project with Drizzle ORM pre-configured. Alternatively, install Drizzle into an existing Encore project.

```Bash
encore app create my-app --example=ts/drizzle
cd my-app
```

--------------------------------

### Install ESLint Drizzle Plugin with npm

Source: https://orm.drizzle.team/docs/eslint-plugin

Installation commands for the ESLint Drizzle Plugin and required TypeScript ESLint dependencies using npm package manager.

```bash
npm i eslint-plugin-drizzle
npm i @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

--------------------------------

### Database Configuration Array with Icon Mappings

Source: https://orm.drizzle.team/docs/get-started/bun-sql-existing

Defines an array of supported database platforms with their documentation paths and visual icons for light/dark themes. Each database entry includes existing and new database setup paths, enabling dynamic navigation based on user selection.

```javascript
const databases = [
  {
    "name": "PostgreSQL",
    "path": {
      "existing": "/docs/get-started/postgresql-existing",
      "new": "/docs/get-started/postgresql-new"
    },
    "icon": {
      "light": {"path": "/public/svg/postgresql.svg", "style": {"width": 20}},
      "dark": {"path": "/public/svg/postgresql.svg", "style": {"width": 20}}
    }
  },
  {
    "name": "MySQL",
    "path": {
      "existing": "/docs/get-started/mysql-existing",
      "new": "/docs/get-started/mysql-new"
    },
    "icon": {
      "light": {"path": "/public/svg/mysql.svg", "style": {"width": 20, "fill": "#00546B"}},
      "dark": {"path": "/public/svg/mysql.svg", "style": {"width": 20, "fill": "#F0F0F0"}}
    }
  }
];
```

--------------------------------

### Install Drizzle ORM and MSSQL packages with bun

Source: https://orm.drizzle.team/docs/get-started/mssql-existing

Install required packages for Drizzle ORM, MSSQL driver, environment variable management, and development tools using Bun package manager.

```bash
bun add drizzle-orm@beta mssql dotenv
bun add -D drizzle-kit@beta tsx
```

--------------------------------

### Example 1: Seed `users` with custom `name` and `count`

Source: https://orm.drizzle.team/docs/seed-overview

This example demonstrates how to seed only the `users` table with a specific count (20 entities) and refine the `name` column using the `f.fullName()` generator.

```APIDOC
## METHOD CALL `seed(db, { users: schema.users }).refine` - Example 1\n\n### Description\nThis example demonstrates how to seed only the `users` table with a specific count (20 entities) and refine the `name` column using the `f.fullName()` generator.\n\n### Method\nMETHOD CALL\n\n### Endpoint\n`seed(db, { users: schema.users }).refine((f) => ({ ... }))`\n\n### Parameters\n#### Return Object Properties\n- **users** (object) - Refines the `users` table.\n    - **columns** (object) - Refines columns within the `users` table.\n        - **name** (function) - Uses `f.fullName()` to generate full names for the `name` column.\n    - **count** (number) - Sets the number of `users` records to 20.\n\n### Request Example\n```json\n{\n  "users": {\n    "columns": {\n      "name": "f.fullName()"\n    },\n    "count": 20\n  }\n}\n```\n\n### Response\n#### Success Response (Promise)\n- Returns a Promise that resolves upon successful completion of the seeding process.\n\n#### Response Example\n```json\n// No direct JSON response body. The promise resolves upon completion.\n```
```

--------------------------------

### CSS Styling for Tutorials Section Layout

Source: https://orm.drizzle.team/docs/guides/mysql-local-setup

Provides responsive flexbox-based styling for tutorials section with dark mode support. Includes styles for section titles, item lists, borders, and links with dotted underlines.

```css
html.dark .tutorials__section_title[data-astro-cid-tj2r2qim] {
  color: #e2e6f0;
}
.tutorials__section_title[data-astro-cid-tj2r2qim] {
  color: #303030;
  font-size: 24px;
  font-weight: 600;
  letter-spacing: -.48px;
  line-height: 130%;
}
.tutorials__items[data-astro-cid-tj2r2qim] {
  display: flex;
  flex-direction: column;
}
html.dark .tutorials__item[data-astro-cid-tj2r2qim]:not(:last-child) {
  border-bottom: 1px solid #262626;
}
.tutorials__item[data-astro-cid-tj2r2qim]:not(:last-child) {
  border-bottom: 1px solid #efefef;
}
.tutorials__item[data-astro-cid-tj2r2qim] {
  padding: 8px 0;
}
html.dark .tutorials__item_link[data-astro-cid-tj2r2qim] {
  color: #e2e6f0;
}
.tutorials__item_link[data-astro-cid-tj2r2qim] {
  text-decoration: underline;
  text-decoration-style: dotted;
  text-underline-offset: 1px;
}
```

--------------------------------

### Install Drizzle ORM and Neon dependencies

Source: https://orm.drizzle.team/docs/get-started/neon-new

Install required packages for Drizzle ORM, Neon serverless driver, and development tools. Supports multiple package managers including npm, yarn, pnpm, and bun.

```bash
npm i drizzle-orm @neondatabase/serverless dotenv
npm i -D drizzle-kit tsx
```

```bash
yarn add drizzle-orm @neondatabase/serverless dotenv
yarn add -D drizzle-kit tsx
```

```bash
pnpm add drizzle-orm @neondatabase/serverless dotenv
pnpm add -D drizzle-kit tsx
```

```bash
bun add drizzle-orm @neondatabase/serverless dotenv
bun add -D drizzle-kit tsx
```

--------------------------------

### Implementing Dynamic Values with Drizzle ORM SQL Placeholders

Source: https://orm.drizzle.team/docs/perf-queries

These Drizzle ORM examples illustrate the use of `sql.placeholder` to embed dynamic runtime values within prepared statements. This allows for flexible query execution with varying parameters without recompiling the SQL query, enhancing both security and performance. The examples cover PostgreSQL, MySQL, SQLite, and SingleStore.

```postgresql
import { sql } from "drizzle-orm";

const p1 = db
  .select()
  .from(customers)
  .where(eq(customers.id, sql.placeholder('id')))
  .prepare("p1")

await p1.execute({ id: 10 }) // SELECT * FROM customers WHERE id = 10
await p1.execute({ id: 12 }) // SELECT * FROM customers WHERE id = 12

const p2 = db
  .select()
  .from(customers)
  .where(sql`lower(${customers.name}) like ${sql.placeholder('name')}`)
  .prepare("p2");

await p2.execute({ name: '%an%' }) // SELECT * FROM customers WHERE name ilike '%an%'
```

```mysql
import { sql } from "drizzle-orm";

const p1 = db
  .select()
  .from(customers)
  .where(eq(customers.id, sql.placeholder('id')))
  .prepare()

await p1.execute({ id: 10 }) // SELECT * FROM customers WHERE id = 10
await p1.execute({ id: 12 }) // SELECT * FROM customers WHERE id = 12

const p2 = db
  .select()
  .from(customers)
  .where(sql`lower(${customers.name}) like ${sql.placeholder('name')}`)
  .prepare();

await p2.execute({ name: '%an%' }) // SELECT * FROM customers WHERE name ilike '%an%'
```

```sqlite
import { sql } from "drizzle-orm";

const p1 = db
  .select()
  .from(customers)
  .where(eq(customers.id, sql.placeholder('id')))
  .prepare()

p1.get({ id: 10 }) // SELECT * FROM customers WHERE id = 10
p1.get({ id: 12 }) // SELECT * FROM customers WHERE id = 12

const p2 = db
```

--------------------------------

### Run drizzle-kit with Multiple Config Files

Source: https://orm.drizzle.team/docs/drizzle-kit-check

Executes drizzle-kit migrate command with specific config files for different database environments (dev and prod). Useful for projects with multiple database stages or separate databases.

```bash
npx drizzle-kit migrate --config=drizzle-dev.config.ts
npx drizzle-kit migrate --config=drizzle-prod.config.ts
```

```bash
yarn drizzle-kit migrate --config=drizzle-dev.config.ts
yarn drizzle-kit migrate --config=drizzle-prod.config.ts
```

```bash
pnpm drizzle-kit migrate --config=drizzle-dev.config.ts
pnpm drizzle-kit migrate --config=drizzle-prod.config.ts
```

```bash
bunx drizzle-kit migrate --config=drizzle-dev.config.ts
bunx drizzle-kit migrate --config=drizzle-prod.config.ts
```

--------------------------------

### Define Database Integration Configuration Data in JavaScript

Source: https://orm.drizzle.team/docs/get-started/neon-new

This JavaScript snippet defines a data structure containing configuration details for various database integrations. It includes a 'currentItem' representing the currently selected database (Neon) and a 'flatItems' array listing multiple database providers. Each provider object contains its name, paths for 'existing' and 'new' setup guides, and SVG icon details for both light and dark themes, facilitating dynamic rendering of database selection UIs.

```javascript
(function(){const currentItem = {"name":"Neon","path":{"existing":"/docs/get-started/neon-existing","new":"/docs/get-started/neon-new"},"icon":{"light":{"path":"/public/svg/neon-light.svg","style":{"width":20}},"dark":{"path":"/public/svg/neon-dark.svg","style":{"width":20}}}};
const flatItems = [{"name":"PostgreSQL","path":{"existing":"/docs/get-started/postgresql-existing","new":"/docs/get-started/postgresql-new"},"icon":{"light":{"path":"/public/svg/postgresql.svg","style":{"width":20}},"dark":{"path":"/public/svg/postgresql.svg","style":{"width":20,"fill":"#f0f0f0"}}}},{"name":"Neon","path":{"existing":"/docs/get-started/neon-existing","new":"/docs/get-started/neon-new"},"icon":{"light":{"path":"/public/svg/neon-light.svg","style":{"width":20}},"dark":{"path":"/public/svg/neon-dark.svg","style":{"width":20}}}},{"name":"Vercel Postgres","path":{"existing":"/docs/get-started/vercel-existing","new":"/docs/get-started/vercel-new"},"icon":{"light":{"path":"/public/svg/vercel.svg","style":{"width":20}},"dark":{"path":"/public/svg/vercel.svg","style":{"width":20,"fill":"#000000"}}}},{"name":"Supabase","path":{"existing":"/docs/get-started/supabase-existing","new":"/docs/get-started/supabase-new"},"icon":{"light":{"path":"/public/svg/supabase.svg","style":{"width":20}},"dark":{"path":"/public/svg/supabase.svg","style":{"width":20}}}},{"name":"Xata","path":{"existing":"/docs/get-started/xata-existing","new":"/docs/get-started/xata-new"},"icon":{"light":{"path":"/public/svg/xata.svg","style":{"width":26}},"dark":{"path":"/public/svg/xata.svg","style":{"width":26}}}},{"name":"PGLite","path":{"existing":"/docs/get-started/pglite-existing","new":"/docs/get-started/pglite-new"},"icon":{"light":{"path":"/public/svg/pglite.svg","style":{"width":26}},"dark":{"path":"/public/svg/pglite.svg","style":{"width":26}}}},{"name":"Nile","path":{"existing":"/docs/get-started/nile-existing","new":"/docs/get-started/nile-new"},"icon":{"light":{"path":"/public/svg/nile.svg"},"dark":{"path":"/public/svg/nile.svg"}}},{"name":"Bun SQL","path":{"existing":"/docs/get-started/bun-sql-existing","new":"/docs/get-started/bun-sql-new"},"icon":{"light":{"path":"/public/svg/bun.svg","style":{"width":20}},"dark":{"path":"/public/svg/bun.svg","style":{"width":20}}}},{"name":"Effect","path":{"existing":"/docs/get-started/effect-postgresql-existing","new":"/docs/get-started/effect-postgresql-new"},"icon":{"light":{"path":"/public/svg/effect_light.svg","style":{"width":20,"fill":"#f0f0f0"}},"dark":{"path":"/public/svg/effect.svg","style":{"width":20,"fill":"#f0f0f0"}}}},{"name":"PlanetScale Postgres","path":{"existing":"/docs/get-started/planetscale-postgres-existing","new":"/docs/get-started/planetscale-postgres-new"},"icon":{"light":{"path":"/public/svg/planetscale.svg","style":{"width":20}},"dark":{"path":"/public/svg/planetscale.svg","style":{"width":20,"color":"#f0f0f0"}}}},{"name":"Gel","path":{"existing":"/docs/get-started/gel-existing","new":"/docs/get-started/gel-new"},"icon":{"light":{"path":"/public/svg/gel_light.svg","style":{"style":"border-radius: 5px","width":34,"height":34}},"dark":{"path":"/public/svg/gel_dark.svg","style":{"style":"border-radius: 5px","width":34,"height":34}}}},{"name":"MySQL","path":{"existing":"/docs/get-started/mysql-existing","new":"/docs/get-started/mysql-new"}]})();
```

--------------------------------

### Optimizing Drizzle ORM Database Connections in Serverless Functions (TypeScript)

Source: https://orm.drizzle.team/docs/perf-serverless

This TypeScript example demonstrates how to reuse database connections and prepared statements with Drizzle ORM in serverless environments like AWS Lambda. By declaring the database connection, Drizzle instance, and prepared statement outside the handler function's scope, subsequent invocations can reuse these resources. This significantly improves performance by reducing connection overhead and cold start times.

```typescript
const databaseConnection = ...;
const db = drizzle({ client: databaseConnection });
const prepared = db.select().from(...).prepare();

// AWS handler
export const handler = async (event: APIGatewayProxyEvent) => {
  return prepared.execute();
}
```

--------------------------------

### List Downloaded Docker Images (Docker)

Source: https://orm.drizzle.team/docs/guides/postgresql-local-setup

This Docker command, `docker images`, displays a comprehensive list of all Docker images currently stored on the local system. It provides essential details including the repository name, tag, unique image ID, creation date, and size, allowing users to verify successful image downloads and manage their local image cache.

```bash
docker images
```

--------------------------------

### Define Responsive CSS Layout for Documentation Tutorials

Source: https://orm.drizzle.team/docs/connect-aws-data-api-mysql

Provides responsive flexbox-based styling for tutorial section layout with mobile breakpoint at 767px. Includes styles for title blocks, section titles, and custom table display. Supports both light and dark themes with appropriate color adjustments.

```css
.learn__title-block[data-astro-cid-tj2r2qim] {
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  width: 100%;
}

@media (max-width: 767px) {
  html.dark .learn__title-block[data-astro-cid-tj2r2qim] {
    border-left: none;
  }
  .learn__title-block[data-astro-cid-tj2r2qim] {
    border: none;
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    margin: 0;
    max-width: 920px;
    width: 100%;
  }
  .tutorials_title[data-astro-cid-tj2r2qim] {
    font-size: 24px;
    font-weight: 700;
    letter-spacing: -0.48px;
    line-height: 31.2px;
    margin-bottom: 16px;
  }
  .tutorials__section_title[data-astro-cid-tj2r2qim] {
    color: #303030;
    font-size: 20px;
    font-weight: 600;
    letter-spacing: -0.48px;
    line-height: 31.2px;
  }
  .tutotials__section[data-astro-cid-tj2r2qim] {
    display: flex;
    flex-direction: column;
    margin-bottom: 32px;
    margin-top: 0;
  }
}
```

--------------------------------

### Install drizzle-seed package

Source: https://orm.drizzle.team/docs/seed-overview

This section provides commands to install the `drizzle-seed` library using various popular JavaScript package managers. It is the first step to integrate `drizzle-seed` into your project for data generation and database resetting.

```npm
npm i drizzle-seed
```

```yarn
yarn add drizzle-seed
```

```pnpm
pnpm add drizzle-seed
```

```bun
bun add drizzle-seed
```

--------------------------------

### Install Drizzle ORM and AWS SDK packages for Data API

Source: https://orm.drizzle.team/docs/connect-aws-data-api-pg

These commands install the necessary Drizzle ORM and AWS SDK client for RDS Data API packages. `drizzle-orm` is the core ORM, `@aws-sdk/client-rds-data` provides AWS Data API interaction, and `drizzle-kit` is installed as a dev dependency for schema migrations and other development tools.

```npm
npm i drizzle-orm @aws-sdk/client-rds-data
npm i -D drizzle-kit
```

```yarn
yarn add drizzle-orm @aws-sdk/client-rds-data
yarn add -D drizzle-kit
```

```pnpm
pnpm add drizzle-orm @aws-sdk/client-rds-data
pnpm add -D drizzle-kit
```

```bun
bun add drizzle-orm @aws-sdk/client-rds-data
bun add -D drizzle-kit
```

--------------------------------

### Install Drizzle ORM with node-postgres Driver

Source: https://orm.drizzle.team/docs/connect-prisma-postgres

Installs Drizzle ORM and the node-postgres (pg) driver package along with Drizzle Kit for schema management. Supports multiple package managers including npm, yarn, pnpm, and bun.

```Bash
npm i drizzle-orm pg
npm i -D drizzle-kit
```

--------------------------------

### Install Drizzle ORM and Dependencies with bun

Source: https://orm.drizzle.team/docs/get-started/d1-existing

Install Drizzle ORM core package along with dotenv for environment variable management, and dev dependencies including drizzle-kit and tsx for TypeScript execution using bun package manager.

```bash
bun add drizzle-orm  dotenv
bun add -D drizzle-kit tsx
```

--------------------------------

### Install Drizzle ORM with postgres.js Driver

Source: https://orm.drizzle.team/docs/connect-prisma-postgres

Installs Drizzle ORM and the postgres.js driver package along with Drizzle Kit for schema management. Supports multiple package managers including npm, yarn, pnpm, and bun.

```Bash
npm i drizzle-orm postres
npm i -D drizzle-kit
```

--------------------------------

### Start MySQL Docker Container

Source: https://orm.drizzle.team/docs/guides/mysql-local-setup

Docker command to create and run a MySQL container with specified configuration including root password, port mapping, and optional database/user creation. The container runs in detached mode and exposes MySQL on port 3306.

```bash
docker run --name drizzle-mysql -e MYSQL_ROOT_PASSWORD=mypassword -d -p 3306:3306 mysql
```

--------------------------------

### Define Drizzle ORM Database Connector Metadata in JavaScript

Source: https://orm.drizzle.team/docs/get-started/gel-new

This JavaScript array, likely named `flatItems`, defines metadata for various Drizzle ORM database connectors. Each entry includes the database name, paths to documentation for new and existing database setups, and SVG icon details for both light and dark themes. This data is crucial for populating UI elements and driving navigation to specific database integration guides.

```javascript
const flatItems = [{"name":"MySQL","path":{"existing":"/docs/get-started/mysql-existing","new":"/docs/get-started/mysql-new"},"icon":{"light":{"path":"/public/svg/mysql.svg","style":{"width":20,"fill":"#0054
```

--------------------------------

### Generate Drizzle Kit migrations with multiple configuration files (CLI)

Source: https://orm.drizzle.team/docs/drizzle-kit-generate

These commands demonstrate how to use different Drizzle Kit configuration files (e.g., `drizzle-dev.config.ts`, `drizzle-prod.config.ts`) when generating migrations via the CLI. This is highly useful for managing multiple database stages (development, production) or different database setups within a single project.

```bash
npx drizzle-kit generate --config=drizzle-dev.config.ts
npx drizzle-kit generate --config=drizzle-prod.config.ts
```

```bash
yarn drizzle-kit generate --config=drizzle-dev.config.ts
yarn drizzle-kit generate --config=drizzle-prod.config.ts
```

```bash
pnpm drizzle-kit generate --config=drizzle-dev.config.ts
pnpm drizzle-kit generate --config=drizzle-prod.config.ts
```

```bash
bunx drizzle-kit generate --config=drizzle-dev.config.ts
bunx drizzle-kit generate --config=drizzle-prod.config.ts
```

--------------------------------

### Install Drizzle ORM and Expo SQLite dependencies

Source: https://orm.drizzle.team/docs/connect-expo-sqlite

These commands install the necessary packages for using Drizzle ORM with Expo SQLite. It includes `drizzle-orm` and `expo-sqlite@next` for runtime, and `drizzle-kit` as a development dependency for migration generation.

```bash
npm i drizzle-orm expo-sqlite@next
npm i -D drizzle-kit
```

```bash
yarn add drizzle-orm expo-sqlite@next
yarn add -D drizzle-kit
```

```bash
pnpm add drizzle-orm expo-sqlite@next
pnpm add -D drizzle-kit
```

```bash
bun add drizzle-orm expo-sqlite@next
bun add -D drizzle-kit
```

--------------------------------

### Install Drizzle ORM and MSSQL packages with pnpm

Source: https://orm.drizzle.team/docs/get-started/mssql-existing

Install required packages for Drizzle ORM, MSSQL driver, environment variable management, and development tools using pnpm package manager.

```bash
pnpm add drizzle-orm@beta mssql dotenv
pnpm add -D drizzle-kit@beta tsx
```

--------------------------------

### Install Drizzle ORM and PostgreSQL Dependencies

Source: https://orm.drizzle.team/docs/connect-nile

Package installation commands for setting up Drizzle ORM with node-postgres driver and drizzle-kit CLI tool. Provides equivalent commands across npm, yarn, pnpm, and bun package managers for multi-environment compatibility.

```Shell
npm i drizzle-orm postgres
npm i -D drizzle-kit
```

```Shell
yarn add drizzle-orm postgres
yarn add -D drizzle-kit
```

```Shell
pnpm add drizzle-orm postgres
pnpm add -D drizzle-kit
```

```Shell
bun add drizzle-orm postgres
bun add -D drizzle-kit
```

--------------------------------

### Example 3: Seed `users` with custom `id` and `posts` with array values

Source: https://orm.drizzle.team/docs/seed-overview

This example demonstrates advanced column refinement. It seeds `users` with 5 entities, generating unique IDs between 10000 and 20000. It also seeds 100 `posts` records, populating their `description` from a predefined array of values.

```APIDOC
## METHOD CALL `seed(db, schema).refine` - Example 3\n\n### Description\nThis example demonstrates advanced column refinement. It seeds `users` with 5 entities, generating unique IDs between 10000 and 20000. It also seeds 100 `posts` records, populating their `description` from a predefined array of values.\n\n### Method\nMETHOD CALL\n\n### Endpoint\n`seed(db, schema).refine((f) => ({ ... }))`\n\n### Parameters\n#### Return Object Properties\n- **users** (object) - Refines the `users` table.\n    - **count** (number) - Sets the number of `users` records to 5.\n    - **columns** (object) - Refines columns within the `users` table.\n        - **id** (function) - Uses `f.int()` to generate unique IDs between 10000 and 20000.\n            - **minValue** (number) - Minimum value for the integer (10000).\n            - **maxValue** (number) - Maximum value for the integer (20000).\n            - **isUnique** (boolean) - Ensures the generated ID is unique (true).\n- **posts** (object) - Refines the `posts` table.\n    - **count** (number) - Sets the number of `posts` records to 100.\n    - **columns** (object) - Refines columns within the `posts` table.\n        - **description** (function) - Uses `f.valuesFromArray()` to select descriptions from a predefined array.\n            - **values** (array) - An array of strings from which to pick descriptions.\n\n### Request Example\n```json\n{\n  "users": {\n    "count": 5,\n    "columns": {\n      "id": "f.int({\n        minValue: 10000,\n        maxValue: 20000,\n        isUnique: true,\n      })"\n    }\n  },\n  "posts": {\n    "count": 100,\n    "columns": {\n      "description": "f.valuesFromArray({\n        values: [\n          \"The sun set behind the mountains, painting the sky in hues of orange and purple\",\n          \"I can't believe how good this homemade pizza turned out!\",\n          \"Sometimes
```

--------------------------------

### Install Drizzle ORM with Effect PostgreSQL Dependencies

Source: https://orm.drizzle.team/docs/get-started/effect-postgresql-new

Package installation commands for setting up Drizzle ORM, Effect, PostgreSQL driver, and development tools across multiple package managers (npm, yarn, pnpm, bun).

```shell
npm i drizzle-orm effect @effect/sql-pg pg dotenv
npm i -D drizzle-kit tsx @types/pg
```

```shell
yarn add drizzle-orm effect @effect/sql-pg pg dotenv
yarn add -D drizzle-kit tsx @types/pg
```

```shell
pnpm add drizzle-orm effect @effect/sql-pg pg dotenv
pnpm add -D drizzle-kit tsx @types/pg
```

```shell
bun add drizzle-orm effect @effect/sql-pg pg dotenv
bun add -D drizzle-kit tsx @types/pg
```

--------------------------------

### Install Drizzle ORM and Turso Database Packages

Source: https://orm.drizzle.team/docs/connect-turso-database

These commands install the necessary Drizzle ORM and Turso Database driver packages for a JavaScript/TypeScript project using various package managers. They include both runtime dependencies (`drizzle-orm`, `@tursodatabase/database`) and development dependencies (`drizzle-kit`) for schema migrations and other development tasks.

```bash
npm i drizzle-orm@beta @tursodatabase/database
npm i -D drizzle-kit@beta
```

```bash
yarn add drizzle-orm@beta @tursodatabase/database
yarn add -D drizzle-kit@beta
```

```bash
pnpm add drizzle-orm@beta @tursodatabase/database
pnpm add -D drizzle-kit@beta
```

```bash
bun add drizzle-orm@beta @tursodatabase/database
bun add -D drizzle-kit@beta
```

--------------------------------

### Install Drizzle ORM and MySQL2 Packages (Shell)

Source: https://orm.drizzle.team/docs/get-started-mysql

These commands demonstrate how to install the necessary packages for Drizzle ORM with MySQL2 integration. It includes `drizzle-orm` and `mysql2` as runtime dependencies, and `drizzle-kit` as a development dependency, using various package managers.

```npm
npm i drizzle-orm mysql2
npm i -D drizzle-kit
```

```yarn
yarn add drizzle-orm mysql2
yarn add -D drizzle-kit
```

```pnpm
pnpm add drizzle-orm mysql2
pnpm add -D drizzle-kit
```

```bun
bun add drizzle-orm mysql2
bun add -D drizzle-kit
```

--------------------------------

### Create a new Next.js project with TypeScript

Source: https://orm.drizzle.team/docs/tutorials/drizzle-with-vercel-edge-functions

This command initializes a new Next.js project using the `create-next-app` utility. It sets up a basic project structure with TypeScript support, providing a foundation for building modern web applications.

```shell
npx create-next-app@latest --typescript
```

--------------------------------

### Manage Sidebar Scroll Position and Navigation in JavaScript

Source: https://orm.drizzle.team/docs/get-started

This JavaScript function handles the scrolling behavior of a sidebar navigation. It restores the scroll position from `localStorage` on page load and adjusts the scroll based on the currently active navigation item. It also attaches event listeners to navigation items to save the current scroll position when an item is clicked, and includes a helper function to find previous navigation separators for more precise scrolling.

```javascript
const scrollSidebar = () => {
  const expandedSections = localStorage.getItem("expandedSections")
    ? JSON.parse(localStorage.getItem("expandedSections"))
    : [];
  document
    .querySelectorAll(".nav-items-collapsable")
    .forEach((section) => {
      if (expandedSections.find((v) => v === section.id)) {
        section.classList.add("expanded");
      } else {
        section.classList.remove("expanded");
      }
    });

  const leftSidebar = document.querySelector(".aside-scroll");
  const navItems = document.querySelectorAll("[data-nav-index]");
  const headingsContainer = document.querySelector("[data-headings]");
  const headingsContainerHeight = headingsContainer?.clientHeight || 0;
  let itemIndex = 0;
  const activeNavItem = Array.from(navItems).find((item) => {
    return item.classList.contains("nav-item--active");
  });

  if (activeNavItem) {
    itemIndex = +(activeNavItem.getAttribute("data-nav-index") || 0);
  }

  if (navItems && leftSidebar) {
    navItems.forEach((item) => {
      item.addEventListener("click", () => {
        const nextIndex = +item.getAttribute("data-nav-index");
        const scrollTop = leftSidebar.scrollTop - (nextIndex > itemIndex ? headingsContainerHeight : 0);
        localStorage.setItem("sidebar-scroll", scrollTop.toString());
      });
    });

    const findPreviousNavSeparator = (element) => {
      if (!element) return null;
      let previousElement = element.previousElementSibling;
      while (previousElement) {
        if (previousElement.classList.contains("nav-separator")) {
          return previousElement;
        }
        previousElement = previousElement.previousElementSibling;
      }
      return null;
    };

    const leftSidebarScroll = localStorage.getItem("sidebar-scroll");
    if (leftSidebarScroll !== null) {
      leftSidebar.scrollTop = parseInt(leftSidebarScroll, 10);
    } else if (activeNavItem) {
      if (
        findPreviousNavSeparator(activeNavItem)?.classList.contains(
          "nav-separator-collapsable",
        )
      ) {
        leftSidebar.scrollTop = findPreviousNavSeparator(activeNavItem).parentElement.offsetTop;
      } else {
        leftSidebar.scrollTop = findPreviousNavSeparator(activeNavItem).offsetTop;
      }
    }
  }
};
```

--------------------------------

### Install Drizzle ORM and MSSQL dependencies

Source: https://orm.drizzle.team/docs/get-started/mssql-new

Installs the necessary packages for Drizzle ORM with MSSQL, including `drizzle-orm`, `mssql` driver, `dotenv` for environment variables, `drizzle-kit` for migrations, and `tsx` for running TypeScript files. These commands should be run in the project's root directory.

```bash
npm i drizzle-orm@beta mssql dotenv
npm i -D drizzle-kit@beta tsx
```

```bash
yarn add drizzle-orm@beta mssql dotenv
yarn add -D drizzle-kit@beta tsx
```

```bash
pnpm add drizzle-orm@beta mssql dotenv
pnpm add -D drizzle-kit@beta tsx
```

```bash
bun add drizzle-orm@beta mssql dotenv
bun add -D drizzle-kit@beta tsx
```

--------------------------------

### Install Drizzle ORM and PostgreSQL packages for Drizzle Kit

Source: https://orm.drizzle.team/docs/get-started-cockroach

This snippet provides commands for installing the necessary Drizzle ORM, `pg` driver, Drizzle Kit, and `@types/pg` packages using various package managers. It specifies beta versions for Drizzle packages, compatible with `1.0.0-beta.2` and higher.

```npm
npm i drizzle-orm@beta pg
npm i -D drizzle-kit@beta @types/pg
```

```yarn
yarn add drizzle-orm@beta pg
yarn add -D drizzle-kit@beta @types/pg
```

```pnpm
pnpm add drizzle-orm@beta pg
pnpm add -D drizzle-kit@beta @types/pg
```

```bun
bun add drizzle-orm@beta pg
bun add -D drizzle-kit@beta @types/pg
```

--------------------------------

### Defining Drizzle ORM Database Integration Data in JavaScript

Source: https://orm.drizzle.team/docs/get-started/expo-existing

This JavaScript IIFE defines data structures for various Drizzle ORM database integrations, including `currentItem` for the currently selected integration (Expo SQLite) and `flatItems` for a comprehensive list of supported databases. Each entry includes the database name, paths for 'existing' and 'new' database setup guides, and icon details (path, style) for both light and dark themes. This data is likely used to dynamically render navigation or selection components.

```javascript
(function(){const currentItem = {"name":"Expo SQLite","path":{"existing":"/docs/get-started/expo-existing","new":"/docs/get-started/expo-new"},"icon":{"light":{"path":"/public/svg/expo.svg","style":{"width":20}},"dark":{"path":"/public/svg/expo.svg","style":{"width":20}}}};
const flatItems = [{"name":"PostgreSQL","path":{"existing":"/docs/get-started/postgresql-existing","new":"/docs/get-started/postgresql-new"},"icon":{"light":{"path":"/public/svg/postgresql.svg","style":{"width":20}},"dark":{"path":"/public/svg/postgresql.svg","style":{"width":20,"fill":"#f0f0f0"}}}},{"name":"Neon","path":{"existing":"/docs/get-started/neon-existing","new":"/docs/get-started/neon-new"},"icon":{"light":{"path":"/public/svg/neon-light.svg","style":{"width":20}},"dark":{"path":"/public/svg/neon-dark.svg","style":{"width":20}}}},{"name":"Vercel Postgres","path":{"existing":"/docs/get-started/vercel-existing","new":"/docs/get-started/vercel-new"},"icon":{"light":{"path":"/public/svg/vercel.svg","style":{"width":20}},"dark":{"path":"/public/svg/vercel.svg","style":{"width":20,"fill":"#000000"}}}},{"name":"Supabase","path":{"existing":"/docs/get-started/supabase-existing","new":"/docs/get-started/supabase-new"},"icon":{"light":{"path":"/public/svg/supabase.svg","style":{"width":20}},"dark":{"path":"/public/svg/supabase.svg","style":{"width":20}}}},{"name":"Xata","path":{"existing":"/docs/get-started/xata-existing","new":"/docs/get-started/xata-new"},"icon":{"light":{"path":"/public/svg/xata.svg","style":{"width":26}},"dark":{"path":"/public/svg/xata.svg","style":{"width":26}}}},{"name":"PGLite","path":{"existing":"/docs/get-started/pglite-existing","new":"/docs/get-started/pglite-new"},"icon":{"light":{"path":"/public/svg/pglite.svg","style":{"width":26}},"dark":{"path":"/public/svg/pglite.svg","style":{"width":26}}}},{"name":"Nile","path":{"existing":"/docs/get-started/nile-existing","new":"/docs/get-started/nile-new"},"icon":{"light":{"path":"/public/svg/nile.svg"},"dark":{"path":"/public/svg/nile.svg"}}},{"name":"Bun SQL","path":{"existing":"/docs/get-started/bun-sql-existing","new":"/docs/get-started/bun-sql-new"},"icon":{"light":{"path":"/public/svg/bun.svg","style":{"width":20}},"dark":{"path":"/public/svg/bun.svg","style":{"width":20}}}},{"name":"Effect","path":{"existing":"/docs/get-started/effect-postgresql-existing","new":"/docs/get-started/effect-postgresql-new"},"icon":{"light":{"path":"/public/svg/effect_light.svg","style":{"width":20,"fill":"#f0f0f0"}},"dark":{"path":"/public/svg/effect.svg","style":{"width":20,"fill":"#f0f0f0"}}}},{"name":"PlanetScale Postgres","path":{"existing":"/docs/get-started/planetscale-postgres-existing","new":"/docs/get-started/planetscale-postgres-new"},"icon":{"light":{"path":"/public/svg/planetscale.svg","style":{"width":20}},"dark":{"path":"/public/svg/planetscale.svg","style":{"width":20,"color":"#f0f0f0"}}}},{"name":"Gel","path":{"existing":"/docs/get-started/gel-existing","new":"/docs/get-started/gel-new"},"icon":{"light":{"path":"/public/svg/gel_light.svg","style":{"style":"border-radius: 5px","width":34,"height":34}},"dark":{"path":"/public/svg/gel_dark.svg","style":{"style":"border-radius: 5px","width":34,"height":34}}}},{"name":"MySQL","path":{"existing":"/docs/get-started/mysql-existing","new":"/docs/get-started/mys
```

--------------------------------

### Install Drizzle ORM with Node-Postgres driver packages

Source: https://orm.drizzle.team/docs/connect-planetscale-postgres

This snippet provides commands to install necessary packages for using Drizzle ORM with the `node-postgres` driver. It includes `drizzle-orm`, `pg`, `drizzle-kit`, and `@types/pg` for development.

```bash
npm i drizzle-orm pg -D drizzle-kit @types/pg
```

```bash
yarn add drizzle-orm pg -D drizzle-kit @types/pg
```

```bash
pnpm add drizzle-orm pg -D drizzle-kit @types/pg
```

```bash
bun add drizzle-orm pg -D drizzle-kit @types/pg
```

--------------------------------

### Generated MySQL Migration SQL

Source: https://orm.drizzle.team/docs/tutorials/drizzle-with-vercel-edge-functions

Example SQL migration file created by Drizzle Kit for the users_table schema. Contains CREATE TABLE statement with column definitions, primary key constraint, and unique constraint on email field.

```sql
CREATE TABLE `users_table` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`name` text NOT NULL,
	`age` text NOT NULL,
	`email` text NOT NULL,
	CONSTRAINT `users_table_id` PRIMARY KEY(`id`),
	CONSTRAINT `users_table_email_unique` UNIQUE(`email`)
);
```

--------------------------------

### Install Postgres Database Client Package

Source: https://orm.drizzle.team/docs/tutorials/drizzle-with-xata

Commands to install the `postgres` client library, which is required for Node.js applications to connect and interact with PostgreSQL databases. This package enables Drizzle ORM to communicate with your Xata database.

```bash
npm i postgres
```

```bash
yarn add postgres
```

```bash
pnpm add postgres
```

```bash
bun add postgres
```

--------------------------------

### Initialize Database Selector with Event Listeners - JavaScript

Source: https://orm.drizzle.team/docs/get-started/d1-new

Sets up event listeners for database and database type selectors that dynamically update the page URL based on user selection. The code resizes select elements to fit their content and navigates to appropriate documentation paths for new or existing database setups.

```javascript
const databaseType = "new";
const dbSelect = document.getElementById('db-select');
const dbTypeSelect = document.getElementById('db-type-select');
const dbSelectResizer = document.getElementById('db-resizer');
const dbTypeSelectResizer = document.getElementById('db-type-resizer');

dbSelect.addEventListener('change', (e) => {
  dbSelectResizer.innerText = e.target.value;
  dbSelect.style.width = `${dbSelectResizer.offsetWidth}px`;
  window.location.href = flatItems.find(({name}) => name === e.target.value).path[databaseType];
});

dbTypeSelect.addEventListener('change', (e) => {
  dbTypeSelectResizer.innerText = e.target.value === 'new' ? 'New database' : 'Existing database';
  dbTypeSelect.style.width = `${dbTypeSelectResizer.offsetWidth}px`;
  window.location.href = currentItem.path[e.target.value];
});

dbSelect.style.width = `${dbSelectResizer.offsetWidth}px`;
dbTypeSelect.style.width = `${dbTypeSelectResizer.offsetWidth}px`;
```

--------------------------------

### Install Drizzle ORM and MSSQL packages with yarn

Source: https://orm.drizzle.team/docs/get-started/mssql-existing

Install required packages for Drizzle ORM, MSSQL driver, environment variable management, and development tools using Yarn package manager.

```bash
yarn add drizzle-orm@beta mssql dotenv
yarn add -D drizzle-kit@beta tsx
```

--------------------------------

### Create Vector Extension Migration SQL

Source: https://orm.drizzle.team/docs/guides/vector-similarity-search

SQL migration script that creates the pgvector extension and defines the guides table with vector column and HNSW index. Must be executed manually as Drizzle does not automatically create extensions.

```SQL
CREATE EXTENSION vector;

CREATE TABLE IF NOT EXISTS "guides" (
  "id" serial PRIMARY KEY NOT NULL,
  "title" text NOT NULL,
  "description" text NOT NULL,
  "url" text NOT NULL,
  "embedding" vector(1536)
);
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "embeddingIndex" ON "guides" USING hnsw (embedding vector_cosine_ops);
```

--------------------------------

### Initialize Drizzle ORM with Vercel Postgres Driver

Source: https://orm.drizzle.team/docs/connect-vercel-postgres

Initializes Drizzle ORM instance with Vercel Postgres serverless driver and executes a test query. Demonstrates both default initialization and custom client configuration using @vercel/postgres sql client.

```JavaScript
import { drizzle } from 'drizzle-orm/vercel-postgres';

const db = drizzle();

const result = await db.execute('select 1');
```

```JavaScript
import { sql } from '@vercel/postgres';
import { drizzle } from 'drizzle-orm/vercel-postgres';

const db = drizzle({ client: sql })

const result = await db.execute('select 1');
```

--------------------------------

### Install Drizzle ORM and PlanetScale Dependencies

Source: https://orm.drizzle.team/docs/get-started/planetscale-existing

These commands install the necessary packages for Drizzle ORM, PlanetScale database driver, and environment variable management (`dotenv`). Development dependencies like `drizzle-kit` and `tsx` are also included.

```npm
npm i drizzle-orm @planetscale/database dotenv
npm i -D drizzle-kit tsx
```

```yarn
yarn add drizzle-orm @planetscale/database dotenv
yarn add -D drizzle-kit tsx
```

```pnpm
pnpm add drizzle-orm @planetscale/database dotenv
pnpm add -D drizzle-kit tsx
```

```bun
bun add drizzle-orm @planetscale/database dotenv
bun add -D drizzle-kit tsx
```

--------------------------------

### Install Drizzle ORM and Dependencies with pnpm

Source: https://orm.drizzle.team/docs/get-started/d1-existing

Install Drizzle ORM core package along with dotenv for environment variable management, and dev dependencies including drizzle-kit and tsx for TypeScript execution using pnpm package manager.

```bash
pnpm add drizzle-orm  dotenv
pnpm add -D drizzle-kit tsx
```

--------------------------------

### Install Drizzle ORM and Typebox Legacy Dependencies

Source: https://orm.drizzle.team/docs/typebox-legacy

These commands install the required packages for integrating Drizzle ORM with the legacy `@sinclair/typebox` library. They include `drizzle-orm` for database schema definition and querying, and `@sinclair/typebox` for runtime data validation. Note that `drizzle-typebox` is now deprecated in favor of Drizzle ORM's built-in schema generation.

```npm
npm i drizzle-orm @sinclair/typebox
```

```yarn
yarn add drizzle-orm @sinclair/typebox
```

```pnpm
pnpm add drizzle-orm @sinclair/typebox
```

```bun
bun add drizzle-orm @sinclair/typebox
```

--------------------------------

### Running Drizzle Kit Export with CLI Options

Source: https://orm.drizzle.team/docs/drizzle-kit-export

This command demonstrates how to execute `drizzle-kit export` directly from the command line, providing the database dialect and schema path as arguments. This method offers an alternative to using a configuration file for specifying export parameters, useful for quick operations or CI/CD environments.

```bash
npx drizzle-kit export --dialect=postgresql --schema=./src/schema.ts
```

--------------------------------

### Install Drizzle ORM and Effect-related Packages

Source: https://orm.drizzle.team/docs/connect-effect-postgres

This section provides commands to install the necessary packages for integrating Drizzle ORM with Effect and PostgreSQL. It includes `drizzle-orm`, `effect`, `@effect/sql-pg`, `pg` for runtime, and `drizzle-kit`, `@types/pg` for development.

```npm
npm i drizzle-orm effect @effect/sql-pg pg
npm i -D drizzle-kit @types/pg
```

```yarn
yarn add drizzle-orm effect @effect/sql-pg pg
yarn add -D drizzle-kit @types/pg
```

```pnpm
pnpm add drizzle-orm effect @effect/sql-pg pg
pnpm add -D drizzle-kit @types/pg
```

```bun
bun add drizzle-orm effect @effect/sql-pg pg
bun add -D drizzle-kit @types/pg
```

--------------------------------

### Install Expo SQLite package

Source: https://orm.drizzle.team/docs/get-started/expo-new

These commands install the `expo-sqlite` package, which provides the necessary API to interact with SQLite databases within an Expo application. Select the command for your package manager.

```bash
npx expo install expo-sqlite
```

```bash
yarn expo install expo-sqlite
```

```bash
pnpm expo install expo-sqlite
```

```bash
bunx expo install expo-sqlite
```

--------------------------------

### Install Drizzle ORM and development packages

Source: https://orm.drizzle.team/docs/get-started/bun-sql-existing

Instructions for installing core Drizzle ORM packages (`drizzle-orm`, `dotenv`) and development dependencies (`drizzle-kit`, `@types/bun`) using various JavaScript package managers. These packages are crucial for database interaction and schema management with Drizzle.

```npm
npm i drizzle-orm dotenv
npm i -D drizzle-kit @types/bun
```

```yarn
yarn add drizzle-orm dotenv
yarn add -D drizzle-kit @types/bun
```

```pnpm
pnpm add drizzle-orm dotenv
pnpm add -D drizzle-kit @types/bun
```

```bun
bun add drizzle-orm dotenv
bun add -D drizzle-kit @types/bun
```

--------------------------------

### Configure Database Connection String in Environment

Source: https://orm.drizzle.team/docs/tutorials/drizzle-with-netlify-edge-functions-supabase

Sets up DATABASE_URL environment variable in .env file for Supabase database connection. Uses transaction pooler connection string with placeholder for actual database password.

```Plaintext
DATABASE_URL=<YOUR_DATABASE_URL>
```

--------------------------------

### Database Provider Configuration Array - JavaScript

Source: https://orm.drizzle.team/docs/get-started/tidb-new

Defines an array of supported database providers with their documentation paths and icon assets for both light and dark themes. Each provider includes existing and new database setup documentation routes. This configuration supports 16+ database platforms including MySQL, PostgreSQL, SQLite variants, and cloud providers.

```javascript
const databases = [{"name":"MySQL","path":{"existing":"/docs/get-started/mysql-existing","new":"/docs/get-started/mysql-new"},"icon":{"light":{"path":"/public/svg/mysql.svg","style":{"width":20,"fill":"#00546B"}},"dark":{"path":"/public/svg/mysql.svg","style":{"width":20,"fill":"#F0F0F0"}}}},{"name":"PlanetScale","path":{"existing":"/docs/get-started/planetscale-existing","new":"/docs/get-started/planetscale-new"},"icon":{"light":{"path":"/public/svg/planetscale.svg","style":{"width":20}},"dark":{"path":"/public/svg/planetscale.svg","style":{"width":20,"color":"#f0f0f0"}}}},{"name":"SQLite","path":{"existing":"/docs/get-started/sqlite-existing","new":"/docs/get-started/sqlite-new"},"icon":{"light":{"path":"/public/svg/sqlite.svg","style":{"width":20}},"dark":{"path":"/public/svg/sqlite.svg","style":{"width":20}}}},{"name":"MSSQL","path":{"existing":"/docs/get-started/mssql-existing","new":"/docs/get-started/mssql-new"},"icon":{"light":{"path":"/public/svg/mssql-light.png","style":{"style":"border-radius: 5px","width":34,"height":34}},"dark":{"path":"/public/svg/mssql-dark.png","style":{"style":"border-radius: 5px","width":34,"height":34}}}}];
```

--------------------------------

### Configure Database Provider Items for Drizzle ORM

Source: https://orm.drizzle.team/docs/get-started/singlestore-new

Defines database provider configuration objects for Drizzle ORM's get-started documentation. Includes provider names, documentation paths for new and existing database setups, and icon assets with styling for light and dark themes. Used to populate database selection UI.

```JavaScript
(function(){
  const currentItem = {
    "name":"SingleStore",
    "path":{
      "existing":"/docs/get-started/singlestore-existing",
      "new":"/docs/get-started/singlestore-new"
    },
    "icon":{
      "light":{
        "path":"/public/svg/singlestore_light.svg",
        "style":{"width":20,"fill":"#00546B"}
      },
      "dark":{
        "path":"/public/svg/singlestore_dark.svg",
        "style":{"width":20,"fill":"#F0F0F0"}
      }
    }
  };
  
  const flatItems = [
    {
      "name":"PostgreSQL",
      "path":{"existing":"/docs/get-started/postgresql-existing","new":"/docs/get-started/postgresql-new"},
      "icon":{"light":{"path":"/public/svg/postgresql.svg","style":{"width":20}},"dark":{"path":"/public/svg/postgresql.svg","style":{"width":20,"fill":"#f0f0f0"}}}
    },
    {
      "name":"Neon",
      "path":{"existing":"/docs/get-started/neon-existing","new":"/docs/get-started/neon-new"},
      "icon":{"light":{"path":"/public/svg/neon-light.svg","style":{"width":20}},"dark":{"path":"/public/svg/neon-dark.svg","style":{"width":20}}}
    }
  ];
})();
```

--------------------------------

### Install Drizzle ORM and Turso dependencies with bun

Source: https://orm.drizzle.team/docs/get-started/turso-new

Install required packages for Drizzle ORM integration with Turso Cloud using bun. Includes drizzle-orm, @libsql/client for database connection, dotenv for environment variables, and development dependencies drizzle-kit and tsx.

```bash
bun add drizzle-orm @libsql/client dotenv
bun add -D drizzle-kit tsx
```

--------------------------------

### Pull Drizzle ORM Schema using CLI with various package managers

Source: https://orm.drizzle.team/docs/drizzle-kit-pull

These commands demonstrate how to use `drizzle-kit pull` to introspect an existing database schema and generate Drizzle ORM schema files. Examples cover PostgreSQL dialect, different drivers (standard URL, pglite), and filtering tables or extensions. The commands are shown for npm, yarn, pnpm, and bun, illustrating common CLI usage patterns.

```bash
npx drizzle-kit pull --dialect=postgresql --url=postgresql://user:password@host:port/dbname
npx drizzle-kit pull --dialect=postgresql --driver=pglite url=database/
npx drizzle-kit pull --dialect=postgresql --tablesFilter='user*' --extensionsFilters=postgis url=postgresql://user:password@host:port/dbname
```

```bash
yarn drizzle-kit pull --dialect=postgresql --url=postgresql://user:password@host:port/dbname
yarn drizzle-kit pull --dialect=postgresql --driver=pglite url=database/
yarn drizzle-kit pull --dialect=postgresql --tablesFilter='user*' --extensionsFilters=postgis url=postgresql://user:password@host:port/dbname
```

```bash
pnpm drizzle-kit pull --dialect=postgresql --url=postgresql://user:password@host:port/dbname
pnpm drizzle-kit pull --dialect=postgresql --driver=pglite url=database/
pnpm drizzle-kit pull --dialect=postgresql --tablesFilter='user*' --extensionsFilters=postgis url=postgresql://user:password@host:port/dbname
```

```bash
bunx drizzle-kit pull --dialect=postgresql --url=postgresql://user:password@host:port/dbname
bunx drizzle-kit pull --dialect=postgresql --driver=pglite url=database/
bunx drizzle-kit pull --dialect=postgresql --tablesFilter='user*' --extensionsFilters=postgis url=postgresql://user:password@host:port/dbname
```

--------------------------------

### Configure Database Connection URL in .env

Source: https://orm.drizzle.team/docs/get-started/planetscale-postgres-existing

Set up environment variables for PlanetScale Postgres database connection. The DATABASE_URL should contain PostgreSQL connection string with username, password, host, port, and SSL verification settings.

```env
DATABASE_URL=postgresql://{username}:{password}@{host}:{port}/postgres?sslmode=verify-full
```

--------------------------------

### Example Drizzle Kit Generated SQL Migration for Users Table

Source: https://orm.drizzle.team/docs/drizzle-kit-generate

This SQL code represents an example migration file generated by Drizzle Kit based on a Drizzle ORM schema definition. It creates a `users` table with an auto-incrementing primary key `id`, a `name` column, and a unique `email` column, reflecting the defined TypeScript schema.

```sql
-- drizzle/20242409125510_premium_mister_fear/migration.sql

CREATE TABLE "users" (
 "id" SERIAL PRIMARY KEY,
 "name" TEXT,
 "email" TEXT UNIQUE
);
```

--------------------------------

### Initialize Drizzle with postgres.js Driver

Source: https://orm.drizzle.team/docs/connect-neon

Initialize Drizzle ORM using the postgres.js driver with a database URL. Requires the 'postgres' package to be installed for lightweight PostgreSQL client connections.

```TypeScript
import { drizzle } from 'drizzle-orm/postgres-js';

const db = drizzle(process.env.DATABASE_URL);

const result = await db.execute('select 1');
```

--------------------------------

### Configure Drizzle Kit with PostgreSQL, Schema Glob, and Output Directory

Source: https://orm.drizzle.team/docs/drizzle-config-file

This comprehensive configuration defines the Drizzle Kit setup for a PostgreSQL database. It specifies a glob pattern to locate schema files within the `src/schema/*` directory and sets the output folder for migrations and snapshots to `./drizzle`.

```typescript
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql", // "mysql" | "sqlite" | "postgresql" | "turso" | "singlestore" | "mssql"
  schema: "./src/schema/*",
  out: "./drizzle"
});
```

--------------------------------

### Initialize Drizzle with libsql and execute query

Source: https://orm.drizzle.team/docs/get-started-sqlite

Creates a Drizzle database instance using libsql driver with environment variable configuration. Executes a simple SELECT query to verify the connection. Requires DATABASE_URL environment variable to be set.

```TypeScript
import { drizzle } from 'drizzle-orm/libsql';

const db = drizzle(process.env.DATABASE_URL);
 
const result = await db.execute('select 1');
```

--------------------------------

### Link Local Supabase Project to Hosted Project

Source: https://orm.drizzle.team/docs/tutorials/drizzle-with-supabase-edge-functions

Command-line instruction to link a local Supabase development project to a hosted Supabase project using the project reference ID obtained from the dashboard settings.

```bash
supabase link --project-ref=<REFERENCE_ID>
```

--------------------------------

### Install Drizzle ORM and Node.js PostgreSQL driver packages

Source: https://orm.drizzle.team/docs/get-started-postgresql

This section provides commands to install the necessary packages for using Drizzle ORM with the `node-postgres` driver. It includes `drizzle-orm`, `pg` (the `node-postgres` client), `drizzle-kit` for schema migrations, and `@types/pg` for TypeScript support, covering various package managers.

```npm
npm i drizzle-orm pg
npm i -D drizzle-kit @types/pg
```

```yarn
yarn add drizzle-orm pg
yarn add -D drizzle-kit @types/pg
```

```pnpm
pnpm add drizzle-orm pg
pnpm add -D drizzle-kit @types/pg
```

```bun
bun add drizzle-orm pg
bun add -D drizzle-kit @types/pg
```

--------------------------------

### Install Drizzle ORM and Dependencies with yarn

Source: https://orm.drizzle.team/docs/get-started/d1-existing

Install Drizzle ORM core package along with dotenv for environment variable management, and dev dependencies including drizzle-kit and tsx for TypeScript execution using yarn package manager.

```bash
yarn add drizzle-orm  dotenv
yarn add -D drizzle-kit tsx
```

--------------------------------

### Set Up Express MySQL Proxy Server

Source: https://orm.drizzle.team/docs/connect-drizzle-proxy

Creates an Express server that receives SQL queries and executes them against a MySQL database using mysql2/promise. Handles query method routing (all/execute), prevents SQL injection via semicolon removal, and includes timestamp field casting.

```TypeScript
import * as mysql from 'mysql2/promise';
import express from 'express';

const app = express();

app.use(express.json());
const port = 3000;

const main = async () => {
    const connection = await mysql.createConnection('mysql://root:[email protected]:5432/drizzle');

    app.post('/query', async (req, res) => {
      const { sql, params, method } = req.body;

      // prevent multiple queries
      const sqlBody = sql.replace(/;/g, '');

      try {
            const result = await connection.query({
                sql: sqlBody,
                values: params,
                rowsAsArray: method === 'all',
                typeCast: function(field: any, next: any) {
                    if (field.type === 'TIMESTAMP' || field.type === 'DATETIME' || field.type === 'DATE') {
                        return field.string();
                    }
                    return next();
                },
            });
      } catch (e: any) {
        res.status(500).json({ error: e });
      }

      if (method === 'all') {
        res.send(result[0]);
      } else if (method === 'execute') {
        res.send(result);
      }
      res.status(500).json({ error: 'Unknown method value' });
    });

    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
}

main();
```

--------------------------------

### Install Vercel Postgres Client Package

Source: https://orm.drizzle.team/docs/tutorials/drizzle-with-vercel

This snippet provides commands to install the `@vercel/postgres` package using various Node.js package managers. This package is necessary for connecting and interacting with Vercel Postgres databases from a Node.js application.

```npm
npm i @vercel/postgres
```

```yarn
yarn add @vercel/postgres
```

```pnpm
pnpm add @vercel/postgres
```

```bun
bun add @vercel/postgres
```

--------------------------------

### Push Schema Changes to Hosted Supabase Project

Source: https://orm.drizzle.team/docs/tutorials/drizzle-with-supabase-edge-functions

Command-line instruction to synchronize local database schema changes to the hosted Supabase project after linking.

```bash
supabase db push
```

--------------------------------

### Initialize Drizzle with node-postgres Driver

Source: https://orm.drizzle.team/docs/connect-neon

Initialize Drizzle ORM using the node-postgres (pg) driver with a database URL. Requires the 'pg' package to be installed as a dependency for Node.js PostgreSQL connections.

```TypeScript
import { drizzle } from 'drizzle-orm/node-postgres';

const db = drizzle(process.env.DATABASE_URL);
 
const result = await db.execute('select 1');
```

--------------------------------

### Perform CRUD Operations with Drizzle ORM and Bun SQL

Source: https://orm.drizzle.team/docs/get-started/bun-sql-existing

Illustrates how to perform Create, Read, Update, and Delete (CRUD) operations on a 'usersTable' using Drizzle ORM with the Bun SQL driver. This example includes inserting a new user, fetching all users, updating a user's age based on email, and finally deleting a user.

```typescript
import 'dotenv/config';
import { drizzle } from 'drizzle-orm/bun-sql';
import { eq } from 'drizzle-orm';
import { usersTable } from './db/schema';
  
const db = drizzle(process.env.DATABASE_URL!); 

async function main() {
  const user: typeof usersTable.$inferInsert = {
    name: 'John',
    age: 30,
    email: '[email protected]',
  };

  await db.insert(usersTable).values(user);
  console.log('New user created!')

  const users = await db.select().from(usersTable);
  console.log('Getting all users from the database: ', users)
  /*
  const users: {
    id: number;
    name: string;
    age: number;
    email: string;
  }[]
  */

  await db
    .update(usersTable)
    .set({
      age: 31,
    })
    .where(eq(usersTable.email, user.email));
  console.log('User info updated!')

  await db.delete(usersTable).where(eq(usersTable.email, user.email));
  console.log('User deleted!')
}

main();
```

--------------------------------

### Initialize Drizzle with Existing LibSQL Client Instance

Source: https://orm.drizzle.team/docs/connect-turso

Initialize Drizzle ORM by providing an existing @libsql/client instance. Allows for custom client configuration before passing to Drizzle. Demonstrates querying users table after initialization.

```javascript
import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';

const client = createClient({ 
  url: process.env.DATABASE_URL,
  authToken: process.env.DATABASE_AUTH_TOKEN
});

const db = drizzle({ client });

const result = await db.select().from(users).all()
```

--------------------------------

### Database Type Selection Event Listener - JavaScript

Source: https://orm.drizzle.team/docs/get-started/nile-new

Manages switching between new and existing database setup documentation. Updates the dropdown label text and width, then navigates to the corresponding documentation path based on the selected database type option.

```javascript
dbTypeSelect.addEventListener('change', (e) => {
  dbTypeSelectResizer.innerText = e.target.value === 'new' ? 'New database' : 'Existing database'
  dbTypeSelect.style.width = `${dbTypeSelectResizer.offsetWidth}px`;
  window.location.href = currentItem.path[e.target.value]
});
```

--------------------------------

### Install Drizzle ORM and PGLite Dependencies

Source: https://orm.drizzle.team/docs/get-started/pglite-existing

This section provides commands for installing essential packages required for Drizzle ORM and PGLite integration. It includes `drizzle-orm`, `@electric-sql/pglite`, `dotenv`, `drizzle-kit` (dev dependency), and `tsx` (dev dependency) across various package managers.

```npm
npm i drizzle-orm @electric-sql/pglite dotenv
npm i -D drizzle-kit tsx
```

```yarn
yarn add drizzle-orm @electric-sql/pglite dotenv
yarn add -D drizzle-kit tsx
```

```pnpm
pnpm add drizzle-orm @electric-sql/pglite dotenv
pnpm add -D drizzle-kit tsx
```

```bun
bun add drizzle-orm @electric-sql/pglite dotenv
bun add -D drizzle-kit tsx
```

--------------------------------

### Install Drizzle ORM and Prisma Generator Dependencies

Source: https://orm.drizzle.team/docs/prisma

These commands install the `drizzle-orm` package and the `drizzle-prisma-generator` as a development dependency using various JavaScript package managers. These packages are essential for integrating Drizzle ORM with an existing Prisma project and generating Drizzle schemas from Prisma models.

```npm
npm i drizzle-orm@latest
npm i -D drizzle-prisma-generator
```

```yarn
yarn add drizzle-orm@latest
yarn add -D drizzle-prisma-generator
```

```pnpm
pnpm add drizzle-orm@latest
pnpm add -D drizzle-prisma-generator
```

```bun
bun add drizzle-orm@latest
bun add -D drizzle-prisma-generator
```

--------------------------------

### Get Tenants using curl

Source: https://orm.drizzle.team/docs/tutorials/drizzle-with-nile

This `curl` command retrieves a list of all tenants by sending a GET request to the `/api/tenants` endpoint. It's a simple request that expects a JSON array of tenant objects in response.

```bash
curl  -X GET 'http://localhost:3001/api/tenants'
```

--------------------------------

### Example of a Generated SQL Migration for Drizzle ORM

Source: https://orm.drizzle.team/docs/tutorials/drizzle-with-vercel-edge-functions

This SQL snippet illustrates a typical migration generated by Drizzle Kit, creating a 'users_table' with an 'id', 'name', 'age', and 'email' column, along with a unique index on the 'email' column. It demonstrates how Drizzle translates your schema into executable SQL statements for database updates.

```sql
CREATE TABLE `users_table` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`age` text NOT NULL,
	`email` text NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `users_table_email_unique` ON `users_table` (`email`);
```

--------------------------------

### Query All Columns Using Relational API

Source: https://orm.drizzle.team/docs/guides/include-or-exclude-columns

Demonstrates the relational queries API to fetch all columns from a table without specifying individual columns. Requires schema configuration in drizzle() initialization.

```TypeScript
import * as schema from './schema';

const db = drizzle(..., { schema });

await db.query.posts.findMany();

// result type
type Result = {
  id: number;
  title: string;
  content: string;
  views: number;
}[]
```

--------------------------------

### Initialize Neon WebSocket with Native ws Package for Node.js

Source: https://orm.drizzle.team/docs/connect-planetscale-postgres

Sets up Neon WebSocket connection for Node.js environments using the native 'ws' package. Configures WebSocket constructor, disables pipeline connections, and sets proxy settings for PlanetScale Postgres. Requires 'ws' package installation.

```TypeScript
// For Node.js environments - install 'ws' package
import ws from "ws";
import { Pool, neonConfig } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-serverless";

neonConfig.webSocketConstructor = ws;
// Required for PlanetScale Postgres connections
neonConfig.pipelineConnect = false;
neonConfig.wsProxy = (host, port) => `${host}/v2?address=${host}:${port}`;

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const db = drizzle({ client: pool });

const result = await db.execute("select 1");
```

--------------------------------

### Initialize Page Functions - JavaScript

Source: https://orm.drizzle.team/docs/get-started-mssql

Initializes all page functionality by calling sidebar scroll setup, updating collapsed sections, changing npm tabs, and hiding h2 elements with '---' text. Executes on page load to set up interactive components.

```javascript
scrollSidebar();
updateCollapsedSections();
changeNpmTab();
document.querySelectorAll("h2").forEach((el) => {
  if (el.innerText === "---") {
    el.classList.add("hidden");
  }
});
```

--------------------------------

### Deploy Next.js Project to Vercel

Source: https://orm.drizzle.team/docs/tutorials/drizzle-with-vercel-edge-functions

These commands facilitate the deployment of a Next.js project to Vercel. It includes deploying the project, adding a `MYSQL_URL` environment variable (which might be a placeholder for Turso connection URL), and re-deploying to apply the new environment variable.

```bash
vercel
```

```bash
vercel env add MYSQL_URL
```

```bash
vercel
```

--------------------------------

### Demonstrate First Normal Form (1NF) in SQL

Source: https://orm.drizzle.team/docs/relations-schema-declaration

This SQL example illustrates the concept of First Normal Form (1NF) by comparing an unnormalized table with a 1NF-compliant table. The unnormalized table violates 1NF by storing multiple pieces of information (street, city, state, zip) in a single 'address' column, while the normalized table separates these into atomic, individual columns.

```sql
-- Unnormalized (violates 1NF)
CREATE TABLE Customers_Unnormalized (
    customer_id INT PRIMARY KEY,
    name VARCHAR(255),
    address VARCHAR(255) -- Problem: Multiple pieces of info in one column
);

-- Normalized to 1NF
CREATE TABLE Customers_1NF (
    customer_id INT PRIMARY KEY,
    name VARCHAR(255),
    street_address VARCHAR(255),
    city VARCHAR(255),
    state VARCHAR(255),
    zip_code VARCHAR(10)
);
```

--------------------------------

### Install Drizzle ORM and Turso dependencies with pnpm

Source: https://orm.drizzle.team/docs/get-started/turso-new

Install required packages for Drizzle ORM integration with Turso Cloud using pnpm. Includes drizzle-orm, @libsql/client for database connection, dotenv for environment variables, and development dependencies drizzle-kit and tsx.

```bash
pnpm add drizzle-orm @libsql/client dotenv
pnpm add -D drizzle-kit tsx
```

--------------------------------

### Drizzle ORM: Select All Columns from a Table

Source: https://orm.drizzle.team/docs/guides/include-or-exclude-columns

This Drizzle ORM example demonstrates how to select all columns from a table using the `.select()` method without any arguments. It includes the schema definition for the `posts` table, showcasing how to define columns with types and constraints. The query returns all fields defined in the `posts` schema.

```typescript
import { posts } from './schema';

const db = drizzle(...);

await db.select().from(posts);
```

```typescript
import { integer, pgTable, serial, text } from 'drizzle-orm/pg-core';

export const posts = pgTable('posts', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  content: text('content').notNull(),
  views: integer('views').notNull().default(0),
});
```

--------------------------------

### Run Drizzle Kit with Specific Configuration File

Source: https://orm.drizzle.team/docs/drizzle-kit-push

CLI commands to execute Drizzle Kit push command with different configuration files. Supports multiple package managers (npm, yarn, pnpm, bun) for managing different database stages or environments.

```bash
npx drizzle-kit push --config=drizzle-dev.config.ts
npx drizzle-kit push --config=drizzle-prod.config.ts
```

```bash
yarn drizzle-kit push --config=drizzle-dev.config.ts
yarn drizzle-kit push --config=drizzle-prod.config.ts
```

```bash
pnpm drizzle-kit push --config=drizzle-dev.config.ts
pnpm drizzle-kit push --config=drizzle-prod.config.ts
```

```bash
bunx drizzle-kit push --config=drizzle-dev.config.ts
bunx drizzle-kit push --config=drizzle-prod.config.ts
```

--------------------------------

### Execute TypeScript File with Bun

Source: https://orm.drizzle.team/docs/get-started/bun-sql-new

This command demonstrates how to run a TypeScript file (`index.ts`) using the Bun JavaScript runtime. It's typically used in development or build scripts to execute application entry points.

```bash
bun src/index.ts
```

--------------------------------

### Install Drizzle ORM and Drizzle Kit Packages

Source: https://orm.drizzle.team/docs/connect-bun-sql

Package installation commands for Drizzle ORM and Drizzle Kit across multiple package managers (npm, yarn, pnpm, bun). Drizzle ORM is the runtime dependency while Drizzle Kit is a development tool for schema management.

```Shell
npm i drizzle-orm
npm i -D drizzle-kit
```

```Shell
yarn add drizzle-orm
yarn add -D drizzle-kit
```

```Shell
pnpm add drizzle-orm
pnpm add -D drizzle-kit
```

```Shell
bun add drizzle-orm
bun add -D drizzle-kit
```

--------------------------------

### MySQL String Generator with Refinement Configuration

Source: https://orm.drizzle.team/docs/seed-versioning

Demonstrates advanced seeding configuration for MySQL using Drizzle ORM's refine method to explicitly configure string and binary generators with unique constraints. The example shows how to specify isUnique flags for individual columns.

```typescript
import { binary, char, mysqlTable, text, varbinary, varchar } from 'drizzle-orm/mysql-core';
import { drizzle } from 'drizzle-orm/mysql2';
import { seed } from "drizzle-seed";

const strings = mysqlTable('strings', {
	string1: char({ length: 255 }).unique(),
	string2: char({ length: 255 }),
	string3: char({ length: 255 }),
	string4: varchar({ length: 255 }).unique(),
	string5: varchar({ length: 255 }),
	string6: varchar({ length: 255 }),
	string7: binary({ length: 255 }).unique(),
	string8: binary({ length: 255 }),
	string9: binary({ length: 255 }),
	string10: varbinary({ length: 255 }).unique(),
```

--------------------------------

### Database Configuration Object for Drizzle ORM Setup

Source: https://orm.drizzle.team/docs/get-started/gel-new

Defines configuration data structure for multiple database providers supported by Drizzle ORM, including PostgreSQL, MySQL, SQLite variants, and cloud-hosted solutions. Contains paths for new and existing database setup documentation and icon assets for light/dark themes.

```JavaScript
(function(){
  const currentItem = {
    "name":"Gel",
    "path":{
      "existing":"/docs/get-started/gel-existing",
      "new":"/docs/get-started/gel-new"
    },
    "icon":{
      "light":{
        "path":"/public/svg/gel_light.svg",
        "style":{"style":"border-radius: 5px","width":34,"height":34}
      },
      "dark":{
        "path":"/public/svg/gel_dark.svg",
        "style":{"style":"border-radius: 5px","width":34,"height":34}
      }
    }
  };
  const flatItems = [
    {"name":"PostgreSQL","path":{"existing":"/docs/get-started/postgresql-existing","new":"/docs/get-started/postgresql-new"},"icon":{"light":{"path":"/public/svg/postgresql.svg","style":{"width":20}},"dark":{"path":"/public/svg/postgresql.svg","style":{"width":20,"fill":"#f0f0f0"}}}},
    {"name":"Neon","path":{"existing":"/docs/get-started/neon-existing","new":"/docs/get-started/neon-new"},"icon":{"light":{"path":"/public/svg/neon-light.svg","style":{"width":20}},"dark":{"path":"/public/svg/neon-dark.svg","style":{"width":20}}}},
    {"name":"Vercel Postgres","path":{"existing":"/docs/get-started/vercel-existing","new":"/docs/get-started/vercel-new"},"icon":{"light":{"path":"/public/svg/vercel.svg","style":{"width":20}},"dark":{"path":"/public/svg/vercel.svg","style":{"width":20,"fill":"#000000"}}}}
  ];
});
```

--------------------------------

### Initialize Drizzle with Neon WebSockets in Node.js

Source: https://orm.drizzle.team/docs/connect-neon

Configure Drizzle ORM with Neon serverless driver using WebSocket connections for Node.js environments. Requires installation of 'ws' and 'bufferutil' packages to provide WebSocket support where the global WebSocket object is unavailable.

```TypeScript
import { drizzle } from 'drizzle-orm/neon-serverless';
import ws from 'ws';

const db = drizzle({
  connection: process.env.DATABASE_URL,
  ws: ws,
});

const result = await db.execute('select 1');
```

--------------------------------

### Create and Inspect a Turso Database using Turso CLI

Source: https://orm.drizzle.team/docs/tutorials/drizzle-with-turso

These Turso CLI commands facilitate the creation of a new Turso database with a specified name and allow users to retrieve detailed information about the newly created database, including its connection URL and other properties.

```bash
turso db create drizzle-turso-db
```

```bash
turso db show drizzle-turso-db
```

--------------------------------

### Connect Drizzle ORM with an Existing PGlite Driver

Source: https://orm.drizzle.team/docs/get-started/pglite-existing

This example shows how to connect Drizzle ORM when you have an existing PGlite driver instance. It allows for more control over the PGlite client by passing the client object directly to the `drizzle` function.

```typescript
import { PGlite } from '@electric-sql/pglite';
import { drizzle } from 'drizzle-orm/pglite';

const client = new PGlite(process.env.DATABASE_URL!);
const db = drizzle({ client });
```

--------------------------------

### Initialize Drizzle with postgres.js Driver

Source: https://orm.drizzle.team/docs/connect-prisma-postgres

Sets up Drizzle ORM connection using the postgres.js driver with Prisma Postgres. Initializes a query client from DATABASE_URL environment variable and executes a test query to verify connectivity.

```JavaScript
// Make sure to install the 'postgres' package
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

const queryClient = postgres(process.env.DATABASE_URL);
const db = drizzle({ client: queryClient });

const result = await db.execute('select 1');
```

--------------------------------

### SQLite String Column Seeding with Drizzle ORM

Source: https://orm.drizzle.team/docs/seed-versioning

Demonstrates seeding a SQLite table with text and blob column types using Drizzle ORM. The example shows table definition with unique and non-unique columns, optional length constraints, database initialization, and seeding execution.

```typescript
import { drizzle } from 'drizzle-orm/better-sqlite3';
import { blob, sqliteTable, text } from 'drizzle-orm/sqlite-core';
import { seed } from "drizzle-seed";

const strings = sqliteTable('strings', {
	string1: text().unique(),
	string2: text({ length: 256 }),
	string3: text({ length: 256 }).unique(),
	string4: blob().unique(),
});

async function main() {
  const db = drizzle(process.env.DATABASE_URL!);

  await seed(db, { strings });
}

main();
```

--------------------------------

### Initialize Drizzle ORM with PlanetScale Serverless

Source: https://orm.drizzle.team/docs/connect-planetscale

Initializes Drizzle ORM instance with PlanetScale MySQL connection credentials from environment variables. Enables HTTP-based database access from serverless and traditional environments using the planetscale-serverless driver.

```javascript
import { drizzle } from "drizzle-orm/planetscale-serverless";

const db = drizzle({ connection: {
  host: process.env["DATABASE_HOST"],
  username: process.env["DATABASE_USERNAME"],
  password: process.env["DATABASE_PASSWORD"],
}});

const response = await db.select().from(...)
```

--------------------------------

### Install Drizzle ORM with PGlite

Source: https://orm.drizzle.team/docs/connect-pglite

Package installation commands for Drizzle ORM and PGlite driver across multiple package managers (npm, yarn, pnpm, bun). Includes both runtime and development dependencies required for database operations.

```Shell
npm i drizzle-orm @electric-sql/pglite
npm i -D drizzle-kit
```

```Shell
yarn add drizzle-orm @electric-sql/pglite
yarn add -D drizzle-kit
```

```Shell
pnpm add drizzle-orm @electric-sql/pglite
pnpm add -D drizzle-kit
```

```Shell
bun add drizzle-orm @electric-sql/pglite
bun add -D drizzle-kit
```

--------------------------------

### List Running Docker Containers (Docker)

Source: https://orm.drizzle.team/docs/guides/postgresql-local-setup

The `docker ps` command is used to display a list of all currently active Docker containers on the system. It provides critical information such as the container ID, the image it's running, the command executed, creation time, current status, exposed ports, and the assigned name, which is useful for monitoring and managing running services.

```bash
CONTAINER ID   IMAGE      COMMAND                  CREATED         STATUS         PORTS                    NAMES
df957f58a6a3   postgres   "docker-entrypoint.s…"   4 seconds ago   Up 3 seconds   0.0.0.0:5432->5432/tcp   drizzle-postgres
```

--------------------------------

### PostgreSQL Database URL Configuration Format

Source: https://orm.drizzle.team/docs/guides/postgresql-local-setup

Defines the standard PostgreSQL connection URL format with placeholders for user credentials, host, port, and database name. Replace placeholders with actual values for your database instance.

```text
postgres://<user>:<password>@<host>:<port>/<database>
```

```text
postgres://postgres:mypassword@localhost:5432/postgres
```

--------------------------------

### Install Drizzle ORM with SQLite Cloud Packages

Source: https://orm.drizzle.team/docs/connect-sqlite-cloud

Package installation commands for Drizzle ORM beta and SQLite Cloud driver across multiple package managers (npm, yarn, pnpm, bun). Includes both runtime and development dependencies required for SQLite Cloud integration.

```bash
npm i drizzle-orm@beta @sqlitecloud/drivers
npm i -D drizzle-kit@beta
```

```bash
yarn add drizzle-orm@beta @sqlitecloud/drivers
yarn add -D drizzle-kit@beta
```

```bash
pnpm add drizzle-orm@beta @sqlitecloud/drivers
pnpm add -D drizzle-kit@beta
```

```bash
bun add drizzle-orm@beta @sqlitecloud/drivers
bun add -D drizzle-kit@beta
```

--------------------------------

### Initialize Drizzle with Neon WebSocket Pool in Node.js

Source: https://orm.drizzle.team/docs/connect-neon

Configure Drizzle ORM with an existing Neon serverless pool using WebSocket connections in Node.js. Requires setting the WebSocket constructor on neonConfig and installing 'ws' and 'bufferutil' packages.

```TypeScript
import { Pool, neonConfig } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-serverless';

neonConfig.webSocketConstructor = ws;

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const db = drizzle({ client: pool })

const result = await db.execute('select 1');
```

--------------------------------

### Install Drizzle ORM and Dependencies for CockroachDB

Source: https://orm.drizzle.team/docs/get-started/cockroach-new

Instructions for installing the necessary packages to use Drizzle ORM with CockroachDB. This includes `drizzle-orm`, `pg` (node-postgres driver), `dotenv` for environment variables, `drizzle-kit` for migrations, `tsx` for running TypeScript, and `@types/pg` for TypeScript definitions. Commands are provided for npm, yarn, pnpm, and bun.

```npm
npm i drizzle-orm@beta pg dotenv
npm i -D drizzle-kit@beta tsx @types/pg
```

```yarn
yarn add drizzle-orm@beta pg dotenv
yarn add -D drizzle-kit@beta tsx @types/pg
```

```pnpm
pnpm add drizzle-orm@beta pg dotenv
pnpm add -D drizzle-kit@beta tsx @types/pg
```

```bun
bun add drizzle-orm@beta pg dotenv
bun add -D drizzle-kit@beta tsx @types/pg
```

--------------------------------

### Initializing Drizzle ORM with MSSQL Driver via Connection String

Source: https://orm.drizzle.team/docs/get-started-mssql

This JavaScript/TypeScript example shows how to initialize Drizzle ORM to connect to an MSSQL database using the `node-mssql` driver. It takes a connection string, typically from environment variables, to create a database instance. A simple `SELECT 1` query demonstrates basic execution.

```typescript
// Make sure to install the 'mssql' package 
import { drizzle } from 'drizzle-orm/node-mssql';

const db = drizzle(process.env.DATABASE_URL);
 
const result = await db.execute('select 1');
```

--------------------------------

### Install Drizzle ORM and Turso Database packages

Source: https://orm.drizzle.team/docs/get-started/turso-database-existing

Install required packages for Drizzle ORM, Turso Database driver, and development tools using various package managers. Includes drizzle-orm, drizzle-kit, @tursodatabase/database, dotenv, and tsx as dependencies.

```npm
npm i drizzle-orm@beta @tursodatabase/database dotenv
npm i -D drizzle-kit@beta tsx
```

```yarn
yarn add drizzle-orm@beta @tursodatabase/database dotenv
yarn add -D drizzle-kit@beta tsx
```

```pnpm
pnpm add drizzle-orm@beta @tursodatabase/database dotenv
pnpm add -D drizzle-kit@beta tsx
```

```bun
bun add drizzle-orm@beta @tursodatabase/database dotenv
bun add -D drizzle-kit@beta tsx
```

--------------------------------

### Drizzle ORM Data Access and Schema Definition Examples in TypeScript

Source: https://orm.drizzle.team/docs/overview

These TypeScript examples demonstrate how to interact with a database using Drizzle ORM. The first snippet shows how to perform a SQL-like `SELECT` query with `LEFT JOIN` and `WHERE` clauses. The second snippet illustrates defining a database schema using Drizzle's `pgTable` function, including primary keys, column types, and foreign key references.

```typescript
// Access your data
await db
	.select()
	.from(countries)
	.leftJoin(cities, eq(cities.countryId, countries.id))
	.where(eq(countries.id, 10))
```

```typescript
// manage your schema
export const countries = pgTable('countries', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 256 }),
});

export const cities = pgTable('cities', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 256 }),
  countryId: integer('country_id').references(() => countries.id),
});
```

--------------------------------

### Configure Babel to inline SQL migration files

Source: https://orm.drizzle.team/docs/connect-expo-sqlite

This `babel.config.js` configuration updates your Babel setup to include the `inline-import` plugin. This plugin allows Babel to process and inline `.sql` files, making them available within your JavaScript bundle.

```javascript
module.exports = function(api) {
  api.cache(true);

  return {
    presets: ['babel-preset-expo'],
    plugins: [["inline-import", { "extensions": [".sql"] }]] // <-- add this
  };
};
```

--------------------------------

### Create a new Expo project with TypeScript template

Source: https://orm.drizzle.team/docs/get-started/expo-new

These commands initialize a new Expo project using a blank TypeScript template, suitable for starting a new application. Choose the command corresponding to your preferred package manager (npm, yarn, pnpm, or bun).

```bash
npx create expo-app --template blank-typescript
```

```bash
yarn create expo-app --template blank-typescript
```

```bash
pnpm create expo-app --template blank-typescript
```

```bash
bunx create expo-app --template blank-typescript
```

--------------------------------

### Define Responsive CSS Styles for Learn and Tutorial Sections

Source: https://orm.drizzle.team/docs/get-started/planetscale-postgres-existing

This CSS code block specifies styling for various components within "learn" and "tutorial" sections of the website. It includes general layout properties for title blocks and specific font and spacing rules for titles and section headings. Media queries are used to apply responsive adjustments for screens smaller than 768px, including dark mode considerations.

```css
.learn__title-block[data-astro-cid-tj2r2qim]{display:flex;flex-direction:column;flex-shrink:0;width:100%}@media (max-width:767px){html.dark .learn__title-block[data-astro-cid-tj2r2qim]{border-left:none}.learn__title-block[data-astro-cid-tj2r2qim]{border:none;display:flex;flex-direction:column;flex-shrink:0;margin:0;max-width:920px;width:100%}.tutorials_title[data-astro-cid-tj2r2qim]{font-size:24px;font-weight:700;letter-spacing:-.48px;line-height:31.2px;margin-bottom:16px}.tutorials__section_title[data-astro-cid-tj2r2qim]{color:#303030;font-size:20px;font-weight:600;letter-spacing:-.48px;line-height:31.2px}.tutotials__section[data-astro-cid-tj2r2qim]{display:flex;flex-direction:column;margin-bottom:32px;margin-top:0}}
```

--------------------------------

### Install Drizzle ORM and Dependencies

Source: https://orm.drizzle.team/docs/tutorials/drizzle-with-nile

Installation commands for Drizzle ORM, Drizzle Kit, dotenv, node-postgres, and express packages using multiple package managers (npm, yarn, pnpm, bun). These are core dependencies required for setting up a Drizzle ORM project with Nile Database.

```Shell
npm i drizzle-orm
npm i -D drizzle-kit
npm i dotenv
npm i node-postgres
npm i express
```

```Shell
yarn add drizzle-orm
yarn add -D drizzle-kit
yarn add dotenv
yarn add node-postgres
yarn add express
```

```Shell
pnpm add drizzle-orm
pnpm add -D drizzle-kit
pnpm add dotenv
pnpm add node-postgres
pnpm add express
```

```Shell
bun add drizzle-orm
bun add -D drizzle-kit
bun add dotenv
bun add node-postgres
bun add express
```

--------------------------------

### Connect Drizzle ORM to PostgreSQL using Node-Postgres Driver

Source: https://orm.drizzle.team/docs/get-started/planetscale-postgres-existing

These TypeScript code examples demonstrate different ways to initialize a Drizzle ORM connection to a PostgreSQL database using the 'node-postgres' driver. They show connecting via a direct connection string, using a configuration object for connection options, and utilizing an existing 'pg' Pool instance. All examples rely on 'dotenv' for environment variable loading, specifically 'DATABASE_URL'.

```typescript
import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';

const db = drizzle(process.env.DATABASE_URL!);
```

```typescript
import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';

// You can specify any property from the node-postgres connection options
const db = drizzle({
  connection: {
    connectionString: process.env.DATABASE_URL!,
    ssl: true
  }
});
```

```typescript
import 'dotenv/config';
import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL!,
});
const db = drizzle({ client: pool });
```

--------------------------------

### Initialize Drizzle ORM with Node-Postgres driver

Source: https://orm.drizzle.team/docs/connect-planetscale-postgres

These TypeScript examples demonstrate various ways to initialize Drizzle ORM for connecting to a PostgreSQL database using the `node-postgres` driver, including direct connection string, config object, and an existing client pool.

```typescript
import { drizzle } from 'drizzle-orm/node-postgres';

const db = drizzle(process.env.DATABASE_URL);

const result = await db.execute('select 1');
```

```typescript
import { drizzle } from 'drizzle-orm/node-postgres';

const db = drizzle({
  connection: {
    connectionString: process.env.DATABASE_URL,
    ssl: true
  }
});

const result = await db.execute('select 1');
```

```typescript
import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});
const db = drizzle({ client: pool });

const result = await db.execute("select 1");
```

--------------------------------

### Theme Switcher

Source: https://orm.drizzle.team/docs/get-started/supabase-existing

No description

--------------------------------

### Install Drizzle ORM and SQLite Cloud Driver Packages

Source: https://orm.drizzle.team/docs/get-started/sqlite-cloud-existing

Instructions for installing the required Drizzle ORM, SQLite Cloud driver, dotenv, and Drizzle Kit packages using various JavaScript package managers. These packages are essential for database interaction and schema management.

```npm
npm i drizzle-orm@beta @sqlitecloud/drivers dotenv
npm i -D drizzle-kit@beta tsx
```

```yarn
yarn add drizzle-orm@beta @sqlitecloud/drivers dotenv
yarn add -D drizzle-kit@beta tsx
```

```pnpm
pnpm add drizzle-orm@beta @sqlitecloud/drivers dotenv
pnpm add -D drizzle-kit@beta tsx
```

```bun
bun add drizzle-orm@beta @sqlitecloud/drivers dotenv
bun add -D drizzle-kit@beta tsx
```

--------------------------------

### Install Drizzle ORM and Dependencies with npm

Source: https://orm.drizzle.team/docs/get-started/d1-existing

Install Drizzle ORM core package along with dotenv for environment variable management, and dev dependencies including drizzle-kit and tsx for TypeScript execution. These packages are essential for setting up Drizzle with D1 database.

```bash
npm i drizzle-orm  dotenv
npm i -D drizzle-kit tsx
```

--------------------------------

### Test Drizzle ORM Edge Function Locally

Source: https://orm.drizzle.team/docs/tutorials/drizzle-with-supabase-edge-functions

Command-line instruction to start a local Supabase edge function server for testing without JWT verification, allowing developers to validate database operations before deployment.

```bash
supabase functions serve --no-verify-jwt
```

--------------------------------

### Install Drizzle ORM and MySQL packages with npm, yarn, pnpm, and bun

Source: https://orm.drizzle.team/docs/get-started/mysql-existing

Install required packages for Drizzle ORM integration with MySQL. Includes drizzle-orm, mysql2, dotenv for runtime dependencies and drizzle-kit, tsx for development dependencies. Supports multiple package managers.

```npm
npm i drizzle-orm mysql2 dotenv
npm i -D drizzle-kit tsx
```

```yarn
yarn add drizzle-orm mysql2 dotenv
yarn add -D drizzle-kit tsx
```

```pnpm
pnpm add drizzle-orm mysql2 dotenv
pnpm add -D drizzle-kit tsx
```

```bun
bun add drizzle-orm mysql2 dotenv
bun add -D drizzle-kit tsx
```

--------------------------------

### Execute Drizzle Kit Migrate Command

Source: https://orm.drizzle.team/docs/drizzle-kit-migrate

Demonstrates two approaches to run drizzle-kit migrate: using a config file (drizzle.config.ts) or providing database credentials directly via CLI options. Both methods require specifying the dialect and database connection information.

```bash
npx drizzle-kit migrate
```

```bash
npx drizzle-kit migrate --dialect=postgresql --url=postgresql://user:password@host:port/dbname
```

--------------------------------

### Install Drizzle ORM and Dependencies for Node.js

Source: https://orm.drizzle.team/docs/get-started/nile-new

This snippet provides commands to install necessary packages for Drizzle ORM, PostgreSQL driver, dotenv for environment variables, and development dependencies like drizzle-kit and tsx. It supports npm, yarn, pnpm, and bun package managers.

```shell
npm i drizzle-orm pg dotenv
npm i -D drizzle-kit tsx @types/pg
```

```shell
yarn add drizzle-orm pg dotenv
yarn add -D drizzle-kit tsx @types/pg
```

```shell
pnpm add drizzle-orm pg dotenv
pnpm add -D drizzle-kit tsx @types/pg
```

```shell
bun add drizzle-orm pg dotenv
bun add -D drizzle-kit tsx @types/pg
```

--------------------------------

### CRUD Operations with Drizzle ORM TypeScript

Source: https://orm.drizzle.team/docs/get-started/bun-sql-new

Complete example demonstrating Create, Read, Update, and Delete operations on a users table using Drizzle ORM. Includes database initialization, type inference, and query execution with async/await patterns.

```typescript
import 'dotenv/config';
import { drizzle } from 'drizzle-orm/bun-sql';
import { eq } from 'drizzle-orm';
import { usersTable } from './db/schema';

const db = drizzle(process.env.DATABASE_URL!);

async function main() {
  const user: typeof usersTable.$inferInsert = {
    name: 'John',
    age: 30,
    email: '[email protected]',
  };

  await db.insert(usersTable).values(user);
  console.log('New user created!')

  const users = await db.select().from(usersTable);
  console.log('Getting all users from the database: ', users)
  /*
  const users: {
    id: number;
    name: string;
    age: number;
    email: string;
  }[]
  */

  await db
    .update(usersTable)
    .set({
      age: 31,
    })
    .where(eq(usersTable.email, user.email));
  console.log('User info updated!')

  await db.delete(usersTable).where(eq(usersTable.email, user.email));
  console.log('User deleted!')
}

main();
```

--------------------------------

### Example of generated Drizzle schema for Gel

Source: https://orm.drizzle.team/docs/get-started/gel-existing

This snippet displays an example of a `schema.ts` file generated by Drizzle Kit after pulling the Gel database schema. It defines a 'users' table with columns like `id`, `age`, `email`, and `name` using types from `drizzle-orm/gel-core`, including a unique index.

```typescript
import { gelTable, uniqueIndex, uuid, smallint, text } from "drizzle-orm/gel-core"
import { sql } from "drizzle-orm"

export const users = gelTable("users", {
	id: uuid().default(sql`uuid_generate_v4()`).primaryKey().notNull(),
	age: smallint(),
	email: text().notNull(),
	name: text(),
}, (table) => [
	uniqueIndex("a8c6061c-f37f-11ef-9249-0d78f6c1807b;schemaconstr").using("btree", table.id.asc().nullsLast().op("uuid_ops")),
]);
```

--------------------------------

### Apply CSS Styles for Tutorials and Tables

Source: https://orm.drizzle.team/docs/guides/postgis-geometry-point

This CSS snippet defines the visual styling for tutorial sections, individual tutorial items, links, and custom tables within the documentation. It includes responsive adjustments for smaller screens and specific color schemes for dark mode, affecting layout, typography, and borders.

```css
html.dark .tutorials__section_title[data-astro-cid-tj2r2qim]{color:#e2e6f0}.tutorials__section_title[data-astro-cid-tj2r2qim]{color:#303030;font-size:24px;font-weight:600;letter-spacing:-.48px;line-height:130%}.tutorials__items[data-astro-cid-tj2r2qim]{display:flex;flex-direction:column}html.dark .tutorials__item[data-astro-cid-tj2r2qim]:not(:last-child){border-bottom:1px solid #262626}.tutorials__item[data-astro-cid-tj2r2qim]:not(:last-child){border-bottom:1px solid #efefef}.tutorials__item[data-astro-cid-tj2r2qim]{padding:8px 0}html.dark .tutorials__item_link[data-astro-cid-tj2r2qim]{color:#e2e6f0}.tutorials__item_link[data-astro-cid-tj2r2qim]{text-decoration:underline;text-decoration-style:dotted;text-underline-offset:1px}.learn__title-block[data-astro-cid-tj2r2qim]{display:flex;flex-direction:column;flex-shrink:0;width:100%}@media (max-width:767px){html.dark .learn__title-block[data-astro-cid-tj2r2qim]{border-left:none}.learn__title-block[data-astro-cid-tj2r2qim]{border:none;display:flex;flex-direction:column;flex-shrink:0;margin:0;max-width:920px;width:100%}.tutorials_title[data-astro-cid-tj2r2qim]{font-size:24px;font-weight:700;letter-spacing:-.48px;line-height:31.2px}.tutorials__section_title[data-astro-cid-tj2r2qim]{color:#303030;font-size:20px;font-weight:600;letter-spacing:-.48px;line-height:31.2px}.tutotials__section[data-astro-cid-tj2r2qim]{display:flex;flex-direction:column;margin-bottom:32px;margin-top:0}} .custom-table tbody,.custom-table thead{display:flex;flex-direction:column}.custom-table tr{display:flex;flex:1}.custom-table td,.custom-table th{flex:1}
```

--------------------------------

### Define Drizzle ORM schema for `except` example (PostgreSQL)

Source: https://orm.drizzle.team/docs/set-operations

This snippet defines the Drizzle ORM schema for the `department_a_projects` and `department_b_projects` tables used in the `except` examples for PostgreSQL. It uses `pgTable`, `integer`, and `varchar` from `drizzle-orm/pg-core` to define the table structure.

```typescript
import { integer, pgTable, varchar } from "drizzle-orm/pg-core";

const depA = pgTable('department_a_projects', {
    employeeId: integer('employee_id'),
    projectsName: varchar('projects_name').notNull(),
});

const depB = pgTable('department_b_projects', {
    employeeId: integer('employee_id'),
    projectsName: varchar('projects_name').notNull(),
});
```

--------------------------------

### Define Drizzle ORM schema for `except` example (MySQL)

Source: https://orm.drizzle.team/docs/set-operations

This snippet defines the Drizzle ORM schema for the `department_a_projects` and `department_b_projects` tables used in the `except` examples for MySQL. It uses `int`, `mysqlTable`, and `varchar` from `drizzle-orm/mysql-core` to define the table structure.

```typescript
import { int, mysqlTable, varchar } from "drizzle-orm/mysql-core";

const depA = mysqlTable('department_a_projects', {
    employeeId: int('employee_id'),
    projectsName: varchar('projects_name', { length: 256 }).notNull(),
});

const depB = mysqlTable('department_b_projects', {
    employeeId: int('employee_id'),
    projectsName: varchar('projects_name', { length: 256 }).notNull(),
});
```

--------------------------------

### Page Title and Guide Section Styling - CSS

Source: https://orm.drizzle.team/docs/guides/d1-http-with-drizzle-kit

Responsive CSS for page titles and guide section headers with dark mode variants. Includes typography settings, spacing, and media queries for mobile optimization with maximum width constraints and padding adjustments.

```css
html.dark .latest-release_title[data-astro-cid-u7rbh7qc] {
  color: #e2e6f0;
}

.latest-release_title[data-astro-cid-u7rbh7qc] {
  color: #0f172a;
  font-size: 32px;
  font-weight: 700;
  letter-spacing: -.48px;
  line-height: 48px;
  margin-bottom: 16px;
  margin-top: 8px;
}

.learn__title-block[data-astro-cid-u7rbh7qc] {
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  width: 100%;
}

html.dark .guides__title[data-astro-cid-u7rbh7qc] {
  color: #e2e6f0;
}

.guides__title[data-astro-cid-u7rbh7qc] {
  color: #0f172a;
  font-size: 32px;
  font-weight: 700;
  letter-spacing: -.48px;
  line-height: 48px;
  margin-bottom: 16px;
  margin-top: 8px;
}

@media (max-width: 767px) {
  html.dark .learn__title-block[data-astro-cid-u7rbh7qc] {
    border-left: none;
  }
  .latest-release_title[data-astro-cid-u7rbh7qc] {
    color: #0f172a;
    font-size: 24px;
    font-weight: 700;
    letter-spacing: -.48px;
    line-height: 31.2px;
    margin-bottom: 16px;
    margin-top: 8px;
  }
  .learn__title-block[data-astro-cid-u7rbh7qc] {
    border: none;
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    margin: 0;
    max-width: 920px;
    padding: 0 16px;
    width: 100%;
  }
  .guides__title[data-astro-cid-u7rbh7qc] {
    font-size: 24px;
    font-weight: 700;
    letter-spacing: -.48px;
    line-height: 31.2px;
    margin-bottom: 16px;
    margin-top: 8px;
  }
}
```

--------------------------------

### Generate Update Schema with Drizzle ORM and TypeBox

Source: https://orm.drizzle.team/docs/typebox-legacy

This example illustrates the creation of an update schema using `createUpdateSchema` for Drizzle ORM tables. It defines the expected shape of data for update operations, allowing for partial updates and automatically handling generated columns. The `Value.Parse` examples demonstrate how the schema validates input, preventing updates to immutable fields like `id`.

```typescript
import { pgTable, text, integer } from 'drizzle-orm/pg-core';
import { createUpdateSchema } from 'drizzle-orm/typebox-legacy';
import { Value } from '@sinclair/typebox/value';

const users = pgTable('users', {
  id: integer().generatedAlwaysAsIdentity().primaryKey(),
  name: text().notNull(),
  age: integer().notNull()
});

const userUpdateSchema = createUpdateSchema(users);

const user = { id: 5, name: 'John' };
const parsed: { name?: string | undefined, age?: number | undefined } = Value.Parse(userUpdateSchema, user); // Error: `id` is a generated column, it can't be updated

const user = { age: 35 };
const parsed: { name?: string | undefined, age?: number | undefined } = Value.Parse(userUpdateSchema, user); // Will parse successfully
await db.update(users).set(parsed).where(eq(users.name, 'Jane'));
```

--------------------------------

### Drizzle Kit Generate Command Workflow Diagram

Source: https://orm.drizzle.team/docs/drizzle-kit-generate

This ASCII diagram illustrates the internal workflow of the `drizzle-kit generate` command. It outlines the steps involved: reading previous migration folders, finding differences between current and previous schemas, prompting for renames, and finally generating SQL migration files and schema snapshots.

```text
┌────────────────────────┐                  
│ $ drizzle-kit generate │                  
└─┬──────────────────────┘                  
  │                                           
  └ 1. read previous migration folders
    2. find diff between current and previous schema
    3. prompt developer for renames if necessary
  ┌ 4. generate SQL migration and persist to file
  │    ┌─┴───────────────────────────────────────┐  
  │      📂 drizzle       
  │      └ 📂 20242409125510_premium_mister_fear
  │        ├ 📜 migration.sql
  │        └ 📜 snapshot.json
  v
```

--------------------------------

### Drizzle ORM Seeding with 'with' Option (Initial Schema)

Source: https://orm.drizzle.team/docs/guides/seeding-using-with-option

This Drizzle ORM example demonstrates an initial attempt to seed 'users' with associated 'posts' using the `with` option. The provided schema defines `users` and `posts` tables, but the `posts` table lacks a foreign key reference to `users`, which will lead to a seeding error when executed.

```typescript
import { users, posts } from './schema.ts';

async function main() {
    const db = drizzle(...);
    await seed(db, { users, posts }).refine(() => ({
        users: {
            count: 2,
            with: {
                posts: 3,
            },
        },
    }));
}
main();
```

```typescript
import { serial, pgTable, integer, text } from "drizzle-orm/pg-core";

export const users = pgTable('users', {
	id: serial('id').primaryKey(),
	name: text('name'),
});

export const posts = pgTable('posts', {
	id: serial('id').primaryKey(),
	content: text('content'),
	authorId: integer('author_id').notNull(),
});
```

--------------------------------

### Database Provider Configuration Array - JavaScript

Source: https://orm.drizzle.team/docs/get-started/bun-sql-new

Defines an array of supported database providers with their documentation paths and icon assets for light/dark themes. Each provider includes existing and new database setup documentation routes and styled SVG/PNG icons with width and fill properties.

```javascript
const databases = [{"name":"MySQL","path":{"existing":"/docs/get-started/mysql-existing","new":"/docs/get-started/mysql-new"},"icon":{"light":{"path":"/public/svg/mysql.svg","style":{"width":20,"fill":"#00546B"}},"dark":{"path":"/public/svg/mysql.svg","style":{"width":20,"fill":"#F0F0F0"}}}},{"name":"PlanetScale","path":{"existing":"/docs/get-started/planetscale-existing","new":"/docs/get-started/planetscale-new"},"icon":{"light":{"path":"/public/svg/planetscale.svg","style":{"width":20}},"dark":{"path":"/public/svg/planetscale.svg","style":{"width":20,"color":"#f0f0f0"}}}},{"name":"SQLite","path":{"existing":"/docs/get-started/sqlite-existing","new":"/docs/get-started/sqlite-new"},"icon":{"light":{"path":"/public/svg/sqlite.svg","style":{"width":20}},"dark":{"path":"/public/svg/sqlite.svg","style":{"width":20}}}},{"name":"MSSQL","path":{"existing":"/docs/get-started/mssql-existing","new":"/docs/get-started/mssql-new"},"icon":{"light":{"path":"/public/svg/mssql-light.png","style":{"style":"border-radius: 5px","width":34,"height":34}},"dark":{"path":"/public/svg/mssql-dark.png","style":{"style":"border-radius: 5px","width":34,"height":34}}}}]
```

--------------------------------

### Define Drizzle ORM schema for `except` example (SQLite)

Source: https://orm.drizzle.team/docs/set-operations

This snippet defines the Drizzle ORM schema for the `department_a_projects` and `department_b_projects` tables used in the `except` examples for SQLite. It uses `int`, `sqliteTable`, and `text` from `drizzle-orm/sqlite-core` to define the table structure.

```typescript
import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

const depA = sqliteTable('department_a_projects', {
    employeeId: int('employee_id'),
    projectsName: text('projects_name').notNull(),
});

const depB = sqliteTable('department_b_projects', {
    employeeId: int('employee_id'),
    projectsName: text('projects_name').notNull(),
});
```

--------------------------------

### Database Configuration Array with Metadata - JavaScript

Source: https://orm.drizzle.team/docs/get-started/d1-new

Defines a comprehensive array of supported database systems with their documentation paths for both new and existing database setups, along with light and dark mode SVG icons. This configuration enables dynamic UI rendering for database selection.

```javascript
const databases = [
  {
    "name": "MySQL",
    "path": {"existing": "/docs/get-started/mysql-existing", "new": "/docs/get-started/mysql-new"},
    "icon": {"light": {"path": "/public/svg/mysql.svg", "style": {"width": 20, "fill": "#00546B"}}, "dark": {"path": "/public/svg/mysql.svg", "style": {"width": 20, "fill": "#F0F0F0"}}}
  },
  {
    "name": "PostgreSQL",
    "path": {"existing": "/docs/get-started/postgres-existing", "new": "/docs/get-started/postgres-new"},
    "icon": {"light": {"path": "/public/svg/postgres.svg", "style": {"width": 20}}, "dark": {"path": "/public/svg/postgres.svg", "style": {"width": 20}}}
  },
  {
    "name": "SQLite",
    "path": {"existing": "/docs/get-started/sqlite-existing", "new": "/docs/get-started/sqlite-new"},
    "icon": {"light": {"path": "/public/svg/sqlite.svg", "style": {"width": 20}}, "dark": {"path": "/public/svg/sqlite.svg", "style": {"width": 20}}}
  },
  {
    "name": "Cloudflare D1",
    "path": {"existing": "/docs/get-started/d1-existing", "new": "/docs/get-started/d1-new"},
    "icon": {"light": {"path": "/public/svg/cloudflare.svg", "style": {"width": 26}}, "dark": {"path": "/public/svg/cloudflare.svg", "style": {"width": 26}}}
  },
  {
    "name": "MSSQL",
    "path": {"existing": "/docs/get-started/mssql-existing", "new": "/docs/get-started/mssql-new"},
    "icon": {"light": {"path": "/public/svg/mssql-light.png", "style": {"borderRadius": "5px", "width": 34, "height": 34}}, "dark": {"path": "/public/svg/mssql-dark.png", "style": {"borderRadius": "5px", "width": 34, "height": 34}}}
  }
];
```

--------------------------------

### Install Drizzle ORM and dependencies with npm, yarn, pnpm, and bun

Source: https://orm.drizzle.team/docs/get-started/bun-sqlite-existing

Install required packages for Drizzle ORM integration with Bun and SQLite. Includes drizzle-orm, dotenv for environment variables, and development dependencies like drizzle-kit, tsx, and @types/bun. Choose the appropriate package manager command for your project.

```bash
npm i drizzle-orm dotenv
npm i -D drizzle-kit tsx @types/bun
```

```bash
yarn add drizzle-orm dotenv
yarn add -D drizzle-kit tsx @types/bun
```

```bash
pnpm add drizzle-orm dotenv
pnpm add -D drizzle-kit tsx @types/bun
```

```bash
bun add drizzle-orm dotenv
bun add -D drizzle-kit tsx @types/bun
```

--------------------------------

### GET /users

Source: https://orm.drizzle.team/docs/tutorials/drizzle-with-encore

Retrieves a list of all users stored in the database. This endpoint requires no parameters and returns an array of user objects.

```APIDOC
## GET /users

### Description
Retrieves a list of all users stored in the database.

### Method
GET

### Endpoint
/users

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
- **users** (array of objects) - An array containing user objects.
  - **id** (number) - The unique identifier of the user.
  - **name** (string) - The name of the user.
  - **email** (string) - The email address of the user.

#### Response Example
{
  "users": [
    {
      "id": 1,
      "name": "John Doe",
      "email": "john@example.com"
    },
    {
      "id": 2,
      "name": "Jane Smith",
      "email": "jane@example.com"
    }
  ]
}
```

--------------------------------

### Run Web Application with tsx

Source: https://orm.drizzle.team/docs/tutorials/drizzle-with-nile

This command executes the main application file using `tsx`, which is a runtime for TypeScript that doesn't require a separate compilation step. Ensure you have `tsx` installed globally or as a dev dependency.

```bash
npx tsx src/app.ts
```

--------------------------------

### Implement Min Aggregation in Drizzle ORM

Source: https://orm.drizzle.team/docs/select

Shows how to find the minimum value for a column using the `min` aggregation helper in Drizzle ORM. Examples include the Drizzle query, its corresponding SQL, and an equivalent raw `sql` template.

```typescript
import { min } from 'drizzle-orm'

await db.select({ value: min(users.id) }).from(users);
```

```sql
select min("id") from "users";
```

```typescript
// It's equivalent to writing
await db.select({
  value: sql`min(${users.id})`.mapWith(users.id)
}).from(users);
```

--------------------------------

### Initialize Theme and Navigation State - JavaScript

Source: https://orm.drizzle.team/docs/column-types/mssql

Initializes theme preferences, package manager selection, and expanded sections from localStorage. Sets up event listeners for page navigation and theme changes to maintain consistent state across page loads and user interactions.

```javascript
let packageManager = localStorage.getItem("package-manager") || "npm";
let expandedSections = localStorage.getItem("expandedSections") ? JSON.parse(localStorage.getItem("expandedSections")) : [];
setPreference(getColorPreference());
document.addEventListener("astro:page-load", () => setPreference(getColorPreference()));
document.addEventListener("astro:after-swap", () => setPreference(getColorPreference()));
```

--------------------------------

### Initializing Drizzle ORM with Vercel Postgres Driver

Source: https://orm.drizzle.team/docs/tutorials/drizzle-with-vercel-edge-functions

This TypeScript code initializes the Drizzle ORM instance, `db`, by importing the `drizzle` function from `drizzle-orm/vercel-postgres`. This setup is crucial for interacting with the Vercel Postgres database using Drizzle's ORM capabilities.

```typescript
import { drizzle } from 'drizzle-orm/vercel-postgres';

export const db = drizzle()
```

--------------------------------

### SQL Alter Table Generated by Drizzle Kit Push

Source: https://orm.drizzle.team/docs/migrations

An example of the SQL `ALTER TABLE` statement that Drizzle Kit might generate and execute when pushing schema changes from a TypeScript definition to the database. This specific example demonstrates adding a new column to an existing table.

```sql
ALTER TABLE `users` ADD COLUMN `email` TEXT UNIQUE;
```

--------------------------------

### Execute Drizzle Kit CLI with Specific Configuration Files

Source: https://orm.drizzle.team/docs/kit-overview

These commands demonstrate how to invoke the Drizzle Kit CLI `push` command, explicitly pointing to different configuration files using the `--config` flag. This approach is crucial for managing distinct database environments (e.g., development, production) or multiple database instances within a single project, allowing for targeted migration execution.

```npm
npx drizzle-kit push --config=drizzle-dev.drizzle.config
npx drizzle-kit push --config=drizzle-prod.drizzle.config
```

```yarn
yarn drizzle-kit push --config=drizzle-dev.drizzle.config
yarn drizzle-kit push --config=drizzle-prod.drizzle.config
```

```pnpm
pnpm drizzle-kit push --config=drizzle-dev.drizzle.config
pnpm drizzle-kit push --config=drizzle-prod.drizzle.config
```

```bun
bunx drizzle-kit push --config=drizzle-dev.drizzle.config
bunx drizzle-kit push --config=drizzle-prod.drizzle.config
```

--------------------------------

### Update Drizzle ORM Query Builder Import Paths for RQB v2 in TypeScript

Source: https://orm.drizzle.team/docs/relations-v1-v2

These TypeScript snippets illustrate the change in import paths for Drizzle ORM's relational query builders, specifically for `RelationalQueryBuilder` and `PgRelationalQuery`. The 'before' example shows the original path, while the 'now' example reflects the updated path in RQB v2, moving files to a `_query` subdirectory.

```typescript
import { RelationalQueryBuilder, PgRelationalQuery } from './query-builders/query.ts';
```

```typescript
import { _RelationalQueryBuilder, _PgRelationalQuery } from './query-builders/_query.ts';
```

--------------------------------

### Install Drizzle ORM packages with npm, yarn, pnpm, and bun

Source: https://orm.drizzle.team/docs/get-started/do-new

Install required packages for Drizzle ORM integration with Cloudflare Workers. Includes drizzle-orm, wrangler, dotenv as dependencies and drizzle-kit, tsx as dev dependencies. Supports multiple package managers.

```bash
npm i drizzle-orm wrangler dotenv
npm i -D drizzle-kit tsx
```

```bash
yarn add drizzle-orm wrangler dotenv
yarn add -D drizzle-kit tsx
```

```bash
pnpm add drizzle-orm wrangler dotenv
pnpm add -D drizzle-kit tsx
```

```bash
bun add drizzle-orm wrangler dotenv
bun add -D drizzle-kit tsx
```

--------------------------------

### Sample JSON Response from Drizzle ORM Query

Source: https://orm.drizzle.team/docs/tutorials/drizzle-with-supabase-edge-functions

Example output returned from the edge function after inserting and querying the users table, demonstrating the structure of the data returned by Drizzle ORM select operations.

```json
[
  {
    "id": 1,
    "name": "Alice",
    "age": 25
  }
]
```

--------------------------------

### Configure Foreign Key Actions using foreignKey() Operator

Source: https://orm.drizzle.team/docs/relations

Example showing how to define foreign key constraints with both onDelete and onUpdate actions using the foreignKey() operator in Drizzle ORM. This approach allows explicit naming of the constraint and supports chaining multiple action methods. Both actions are set to 'cascade' in this example.

```typescript
import { foreignKey, pgTable, serial, text, integer } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
	id: serial('id').primaryKey(),
	name: text('name'),
});

export const posts = pgTable('posts', {
	id: serial('id').primaryKey(),
	name: text('name'),
	author: integer('author').notNull(),
}, (table) => [
	foreignKey({
		name: "author_fk",
		columns: [table.author],
		foreignColumns: [users.id],
	})
		.onDelete('cascade')
		.onUpdate('cascade')
]);
```

--------------------------------

### Drizzle Kit CLI Commands Overview

Source: https://orm.drizzle.team/docs/migrations

An overview of the primary command-line interface commands for Drizzle Kit, used for managing database migrations and schema synchronization. These commands facilitate various approaches to schema management, including pushing, pulling, generating, and migrating.

```bash
drizzle-kit migrate
drizzle-kit generate
drizzle-kit push
drizzle-kit pull
```

--------------------------------

### Drizzle ORM Eventual Consistency Example with Disabled Auto-Invalidation

Source: https://orm.drizzle.team/docs/cache

Provides an example demonstrating eventual consistency when `autoInvalidate` is set to `false` for a cached query. It shows that new data from an insert operation might not be immediately reflected in cached results until the cache's Time-To-Live (TTL) expires.

```typescript
const recent = await db
      .select().from(usersTable)
      .$withCache({ config: { ex: 3 }, autoInvalidate: false });
```

--------------------------------

### Generate and Apply Migrations with Drizzle Kit

Source: https://orm.drizzle.team/docs/get-started/bun-sql-new

Generate migration files using drizzle-kit generate, then apply them to the database with drizzle-kit migrate. This approach provides version control and reproducibility for schema changes across environments.

```bash
npx drizzle-kit generate
```

```bash
npx drizzle-kit migrate
```

--------------------------------

### Install Drizzle ORM and Development Dependencies

Source: https://orm.drizzle.team/docs/get-started/do-existing

This section provides commands for installing essential packages required for a Drizzle ORM project with Cloudflare Durable Objects. It includes `drizzle-orm` and `dotenv` as runtime dependencies, and `drizzle-kit` and `tsx` as development dependencies, supporting various package managers like npm, yarn, pnpm, and bun.

```npm
npm i drizzle-orm  dotenv
npm i -D drizzle-kit tsx
```

```yarn
yarn add drizzle-orm  dotenv
yarn add -D drizzle-kit tsx
```

```pnpm
pnpm add drizzle-orm  dotenv
pnpm add -D drizzle-kit tsx
```

```bun
bun add drizzle-orm  dotenv
bun add -D drizzle-kit tsx
```

--------------------------------

### Connect Drizzle ORM to Various Serverless/Edge Databases (TypeScript)

Source: https://orm.drizzle.team/docs/connect-overview

This collection of TypeScript examples demonstrates Drizzle ORM's compatibility with various serverless and edge database platforms. It provides specific import statements and initialization patterns for connecting to Neon HTTP, Neon Serverless, Vercel Postgres, PlanetScale HTTP, and Cloudflare D1, showcasing Drizzle's flexible driver architecture.

```typescript
import { drizzle } from "drizzle-orm/neon-http";

const db = drizzle(process.env.DATABASE_URL);
```

```typescript
import { drizzle } from "drizzle-orm/neon-serverless";

const db = drizzle(process.env.DATABASE_URL);
```

```typescript
import { drizzle } from "drizzle-orm/vercel-postgres";

const db = drizzle();
```

```typescript
import { drizzle } from "drizzle-orm/planetscale";

const db = drizzle(process.env.DATABASE_URL);
```

```typescript
import { drizzle } from "drizzle-orm/d1";

const db = drizzle({ connection: env.DB });
```

--------------------------------

### Initialize Drizzle with libsql client driver

Source: https://orm.drizzle.team/docs/get-started-sqlite

Creates a Drizzle instance with an explicit libsql client connection for synchronous operations. Requires @libsql/client package. Useful when you need direct control over the underlying driver instance.

```TypeScript
import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';

const client = createClient({ url: process.env.DATABASE_URL, authToken: process.env.DATABASE_AUTH_TOKEN });
const db = drizzle(client);

const result = await db.execute('select 1');
```

--------------------------------

### Implement Advanced Pagination Strategies with Drizzle ORM and TypeScript

Source: https://orm.drizzle.team/docs/select

This snippet provides various advanced pagination examples using Drizzle ORM and TypeScript. It covers basic limit/offset, pagination with `findMany`, subquery-based pagination, and cursor-based pagination for efficient data retrieval.

```typescript
await db
  .select()
  .from(users)
  .orderBy(asc(users.id)) // order by is mandatory
  .limit(4) // the number of rows to return
  .offset(4); // the number of rows to skip
```

```typescript
const getUsers = async (page = 1, pageSize = 3) => {
  await db.query.users.findMany({
    orderBy: (users, { asc }) => asc(users.id),
    limit: pageSize,
    offset: (page - 1) * pageSize,
  });
};
await getUsers();
```

```typescript
const getUsers = async (page = 1, pageSize = 10) => {
   const sq = db
    .select({ id: users.id })
    .from(users)
    .orderBy(users.id)
    .limit(pageSize)
    .offset((page - 1) * pageSize)
    .as('subquery');
   await db.select().from(users).innerJoin(sq, eq(users.id, sq.id)).orderBy(users.id);
};
```

```typescript
const nextUserPage = async (cursor?: number, pageSize = 3) => {
  await db
    .select()
    .from(users)
    .where(cursor ? gt(users.id, cursor) : undefined) // if cursor is provided, get rows after it
    .limit(pageSize) // the number of rows to return
    .orderBy(asc(users.id)); // ordering
};
// pass the cursor of the last row of the previous page (id)
await nextUserPage(3);
```

--------------------------------

### Initialize Theme and Event Listeners - JavaScript

Source: https://orm.drizzle.team/docs/tutorials

Initializes theme preference on page load, sets up event listeners for Astro framework page transitions (astro:page-load and astro:after-swap), and manages sidebar scroll state. Clears sidebar scroll position on navigation, page reload, and popstate events to ensure consistent UI behavior across page transitions.

```javascript
let packageManager = localStorage.getItem("package-manager") || "npm";
let expandedSections = localStorage.getItem("expandedSections") ? JSON.parse(localStorage.getItem("expandedSections")) : [];
setPreference(getColorPreference());
document.addEventListener("astro:page-load", () => setPreference(getColorPreference()));
document.addEventListener("astro:after-swap", () => setPreference(getColorPreference()));
const [navigationEntry] = performance.getEntriesByType("navigation");
if (navigationEntry && navigationEntry.type !== "reload") {
  localStorage.removeItem("sidebar-scroll");
}
window.addEventListener("popstate", () => {
  localStorage.removeItem("sidebar-scroll");
})
document.addEventListener("click", function (event) {
  const target = event.target.closest("a");
  if (!target || !target.href) return;
  const isSideBarElement = target && target.href && (target.getAttribute("data-nav-index") || target.getAttribute("data-slug"));
  if (!isSideBarElement && target.hostname === window.location.hostname) {
    localStorage.removeItem("sidebar-scroll");
  }
});
```

--------------------------------

### PostgreSQL String Column Seeding with Drizzle ORM

Source: https://orm.drizzle.team/docs/seed-versioning

Demonstrates seeding a PostgreSQL table with various string column types (char, varchar, text) using Drizzle ORM. The example shows table definition with unique and non-unique string columns of different lengths, followed by database initialization and seeding execution.

```typescript
import { drizzle } from "drizzle-orm/node-postgres";
import { pgTable, char, varchar, text } from "drizzle-orm/pg-core";
import { seed } from "drizzle-seed";

const strings = pgTable("strings", {
    string2: char({ length: 256 }).unique(),
    string3: char({ length: 256 }),
    string4: varchar().unique(),
    string5: varchar({ length: 256 }).unique(),
    string6: varchar({ length: 256 }),
    string7: text().unique(),
});

async function main() {
  const db = drizzle(process.env.DATABASE_URL!);

  await seed(db, { strings });
}

main();
```

--------------------------------

### Database Provider Configuration Array - JavaScript

Source: https://orm.drizzle.team/docs/get-started/expo-existing

Defines an array of database provider objects with metadata including names, documentation paths for existing and new database setups, and icon assets for light/dark themes. Each provider includes routing information for different database initialization scenarios.

```javascript
const databases = [
  {
    "name": "PostgreSQL",
    "path": {
      "existing": "/docs/get-started/postgresql-existing",
      "new": "/docs/get-started/postgresql-new"
    },
    "icon": {
      "light": {"path": "/public/svg/postgres.svg", "style": {"width": 20}},
      "dark": {"path": "/public/svg/postgres.svg", "style": {"width": 20}}
    }
  },
  {
    "name": "MySQL",
    "path": {
      "existing": "/docs/get-started/mysql-existing",
      "new": "/docs/get-started/mysql-new"
    },
    "icon": {
      "light": {"path": "/public/svg/mysql.svg", "style": {"width": 20, "fill": "#00546B"}},
      "dark": {"path": "/public/svg/mysql.svg", "style": {"width": 20, "fill": "#F0F0F0"}}
    }
  }
];
```

--------------------------------

### Connect Drizzle ORM to Bun SQL Database

Source: https://orm.drizzle.team/docs/get-started/bun-sql-new

Initialize Drizzle ORM with Bun SQL to connect to your database. Examples include direct connection, using a configuration object, and providing an existing Bun SQL driver instance.

```typescript
import 'dotenv/config';
import { drizzle } from 'drizzle-orm/bun-sql';

const db = drizzle(process.env.DATABASE_URL!);
```

```typescript
import 'dotenv/config';
import { drizzle } from 'drizzle-orm/bun-sql';

// You can specify any property from the bun sql connection options
const db = drizzle({ connection: { url: process.env.DATABASE_URL! }});
```

```typescript
import 'dotenv/config';
import { drizzle } from 'drizzle-orm/bun-sql';
import { SQL } from 'bun';

const client = new SQL(process.env.DATABASE_URL!);
const db = drizzle({ client });
```

--------------------------------

### Custom SQL Data Seeding Migration

Source: https://orm.drizzle.team/docs/kit-custom-migrations

Example custom migration file for seeding user data into a database table. Contains multiple INSERT statements to populate the users table with sample records. File is generated in the drizzle migrations directory with a timestamp prefix.

```sql
-- ./drizzle/0001_seed-users.sql

INSERT INTO "users" ("name") VALUES('Dan');
INSERT INTO "users" ("name") VALUES('Andrew');
INSERT INTO "users" ("name") VALUES('Dandrew');
```

--------------------------------

### Perform Drizzle ORM UNION ALL Queries Across SQL Dialects

Source: https://orm.drizzle.team/docs/set-operations

Demonstrates how to combine results from multiple `SELECT` statements using `UNION ALL` in Drizzle ORM, showcasing both the direct `unionAll` function and the query builder method. Examples are provided for SingleStore, MSSQL, and CockroachDB, along with their corresponding raw SQL outputs.

```typescript
import { unionAll } from 'drizzle-orm/singlestore-core'
    import { onlineSales, inStoreSales } from './schema'
    
    const onlineTransactions = db.select({ transaction: onlineSales.transactionId }).from(onlineSales);
    const inStoreTransactions = db.select({ transaction: inStoreSales.transactionId }).from(inStoreSales);
    
    const result = await unionAll(onlineTransactions, inStoreTransactions);
```

```sql
select `transaction_id` from `online_sales`
    union all
    select `transaction_id` from `in_store_sales`
```

```typescript
import { onlineSales, inStoreSales } from './schema'
    
    const result = await db
      .select({ transaction: onlineSales.transactionId })
      .from(onlineSales)
      .unionAll(
        db.select({ transaction: inStoreSales.transactionId }).from(inStoreSales)
      );
```

```sql
(select `transaction_id` from `online_sales`)
    union all 
    (select `transaction_id` from `in_store_sales`)
```

```typescript
import { unionAll } from 'drizzle-orm/mssql-core'
    import { onlineSales, inStoreSales } from './schema'
    
    const onlineTransactions = db.select({ transaction: onlineSales.transactionId }).from(onlineSales);
    const inStoreTransactions = db.select({ transaction: inStoreSales.transactionId }).from(inStoreSales);
    
    const result = await unionAll(onlineTransactions, inStoreTransactions);
```

```sql
(select [transaction_id] from [online_sales])
    union all
    (select [transaction_id] from [in_store_sales])
```

```typescript
import { onlineSales, inStoreSales } from './schema'
    
    const result = await db
      .select({ transaction: onlineSales.transactionId })
      .from(onlineSales)
      .unionAll(
        db.select({ transaction: inStoreSales.transactionId }).from(inStoreSales)
      );
```

```typescript
import { unionAll } from 'drizzle-orm/cockroach-core'
    import { onlineSales, inStoreSales } from './schema'
    
    const onlineTransactions = db.select({ transaction: onlineSales.transactionId }).from(onlineSales);
    const inStoreTransactions = db.select({ transaction: inStoreSales.transactionId }).from(inStoreSales);
    
    const result = await unionAll(onlineTransactions, inStoreTransactions);
```

```sql
select "transaction_id" from "online_sales"
    union all
    select "transaction_id" from "in_store_sales"
```

```typescript
import { onlineSales, inStoreSales } from './schema'
    
    const result = await db
      .select({ transaction: onlineSales.transactionId })
```

--------------------------------

### Deploy Project to Vercel

Source: https://orm.drizzle.team/docs/tutorials/drizzle-with-vercel-edge-functions

Deploy your Next.js application to Vercel using the vercel CLI command. Can be run from the project directory to create a new deployment or update an existing one.

```bash
vercel
```

--------------------------------

### Using Drizzle ORM Prepared Statements for Query Performance

Source: https://orm.drizzle.team/docs/perf-queries

These examples demonstrate how to create and execute prepared statements using Drizzle ORM across various SQL databases (PostgreSQL, MySQL, SQLite, SingleStore). Prepared statements compile SQL queries once, allowing for efficient reuse and significant performance benefits, especially for frequently executed queries.

```postgresql
const db = drizzle(...);

const prepared = db.select().from(customers).prepare("statement_name");

const res1 = await prepared.execute();
const res2 = await prepared.execute();
const res3 = await prepared.execute();
```

```mysql
const db = drizzle(...);

const prepared = db.select().from(customers).prepare();

const res1 = await prepared.execute();
const res2 = await prepared.execute();
const res3 = await prepared.execute();
```

```sqlite
const db = drizzle(...);

const prepared = db.select().from(customers).prepare();

const res1 = prepared.all();
const res2 = prepared.all();
const res3 = prepared.all();
```

```singlestore
const db = drizzle(...);

const prepared = db.select().from(customers).prepare();

const res1 = await prepared.execute();
const res2 = await prepared.execute();
const res3 = await prepared.execute();
```

--------------------------------

### Unsupported Cache Operations - Batch Feature Example

Source: https://orm.drizzle.team/docs/cache

Shows batch operations in d1 and libsql drivers that are not supported by the cache extension. Batch queries combining multiple insert/update operations will not trigger proper cache invalidation.

```typescript
db.batch([
  db.insert(users).values(...),
  db.update(users).set(...).where()
])
```

--------------------------------

### Push Drizzle Kit schema changes with custom names and options via CLI

Source: https://orm.drizzle.team/docs/drizzle-kit-export

This snippet demonstrates using the `drizzle-kit push` command to apply schema changes, including specifying a migration name with `--name` and adding custom options with `--custom`. Examples are provided for `npm`, `yarn`, `pnpm`, and `bun`.

```bash
npx drizzle-kit push --name=init
npx drizzle-kit push --name=seed_users --custom
```

```bash
yarn drizzle-kit push --name=init
yarn drizzle-kit push --name=seed_users --custom
```

```bash
pnpm drizzle-kit push --name=init
pnpm drizzle-kit push --name=seed_users --custom
```

```bash
bunx drizzle-kit push --name=init
bunx drizzle-kit push --name=seed_users --custom
```

--------------------------------

### Initialize Drizzle ORM with Turso Database Driver (Simple) in JavaScript

Source: https://orm.drizzle.team/docs/connect-turso-database

This JavaScript snippet demonstrates a basic initialization of Drizzle ORM with the Turso Database driver. It directly connects to a SQLite database file and executes a simple `SELECT 1` query. This method is suitable for straightforward connections where no custom driver instance is required.

```javascript
import { drizzle } from 'drizzle-orm/tursodatabase/database';

const db = drizzle('sqlite.db');

const result = await db.execute('select 1');
```

--------------------------------

### Seed User Data in PostgreSQL Migration (SQL)

Source: https://orm.drizzle.team/docs/drizzle-kit-generate

This SQL snippet demonstrates a custom migration file designed to seed initial data into a `users` table. It contains `INSERT` statements to add three specific user records, typically used for initial database setup or testing.

```sql
INSERT INTO "users" ("name") VALUES('Dan');
INSERT INTO "users" ("name") VALUES('Andrew');
INSERT INTO "users" ("name") VALUES('Dandrew');
```

--------------------------------

### PostgreSQL String Generator with Refinement Configuration

Source: https://orm.drizzle.team/docs/seed-versioning

Demonstrates advanced seeding configuration for PostgreSQL using Drizzle ORM's refine method to explicitly configure string generators with unique constraints. The example shows how to specify isUnique flags for individual string columns to control unique string generation.

```typescript
import { drizzle } from "drizzle-orm/node-postgres";
import { pgTable, char, varchar, text } from "drizzle-orm/pg-core";
import { seed } from "drizzle-seed";

const strings = pgTable("strings", {
    string1: char({ length: 256 }).unique(),
    string2: char({ length: 256 }),
    string3: char({ length: 256 }),
    string4: varchar(),
    string5: varchar().unique(),
    string6: varchar({ length: 256 }).unique(),
    string7: varchar({ length: 256 }),
    string8: varchar({ length: 256 }),
    string9: text().unique(),
    string10: text(),
});

async function main() {
  const db = drizzle(process.env.DATABASE_URL!);

  await seed(db, { strings }).refine((f) => ({
    strings: {
        columns: {
            string1: f.string({ isUnique: true }),
            string2: f.string(),
            string3: f.string({ isUnique: true }),
            string4: f.string({ isUnique: true }),
            string5: f.string({ isUnique: true }),
            string6: f.string({ isUnique: true }),
            string7: f.string(),
            string8: f.string({ isUnique: true }),
            string9: f.string({ isUnique: true }),
            string10: f.string({ isUnique: true }),
        }
    }
  }));
}

main();
```

--------------------------------

### Initialize Drizzle ORM Connection with LibSQL

Source: https://orm.drizzle.team/docs/get-started/sqlite-existing

Establishes a connection to LibSQL database using Drizzle ORM. Demonstrates three approaches: basic initialization, configuration object method, and using an existing LibSQL client. The connection string is retrieved from environment variables.

```TypeScript
import 'dotenv/config';
import { drizzle } from 'drizzle-orm/libsql';

const db = drizzle(process.env.DB_FILE_NAME!);
```

```TypeScript
import 'dotenv/config';
import { drizzle } from 'drizzle-orm/libsql';

// You can specify any property from the libsql connection options
const db = drizzle({ connection: { url: process.env.DB_FILE_NAME! }});
```

```TypeScript
import 'dotenv/config';
import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';

const client = createClient({ url: process.env.DB_FILE_NAME! });
const db = drizzle({ client });
```

--------------------------------

### Complete CRUD Operations with Drizzle ORM TypeScript

Source: https://orm.drizzle.team/docs/get-started/pglite-new

Full example demonstrating all CRUD operations (Create, Read, Update, Delete) on a users table. Includes database initialization with environment variables, type-safe user object creation, and sequential operations with console logging.

```typescript
import 'dotenv/config';
import { drizzle } from 'drizzle-orm/pglite';
import { eq } from 'drizzle-orm';
import { usersTable } from './db/schema';

const db = drizzle(process.env.DATABASE_URL!);

async function main() {
  const user: typeof usersTable.$inferInsert = {
    name: 'John',
    age: 30,
    email: '[email protected]',
  };

  await db.insert(usersTable).values(user);
  console.log('New user created!')

  const users = await db.select().from(usersTable);
  console.log('Getting all users from the database: ', users)

  await db
    .update(usersTable)
    .set({
      age: 31,
    })
    .where(eq(usersTable.email, user.email));
  console.log('User info updated!')

  await db.delete(usersTable).where(eq(usersTable.email, user.email));
  console.log('User deleted!')
}

main();
```

--------------------------------

### MySQL String Column Seeding with Drizzle ORM

Source: https://orm.drizzle.team/docs/seed-versioning

Demonstrates seeding a MySQL table with various string and binary column types (char, varchar, binary, varbinary) using Drizzle ORM. The example includes table definition with unique and non-unique columns, database connection, and seeding execution.

```typescript
import { binary, char, mysqlTable, varbinary, varchar } from 'drizzle-orm/mysql-core';
import { drizzle } from 'drizzle-orm/mysql2';
import { seed } from "drizzle-seed";

const strings = mysqlTable('strings', {
	string1: char({ length: 255 }).unique(),
	string2: char({ length: 255 }),
	string3: varchar({ length: 255 }).unique(),
	string4: varchar({ length: 255 }),
	string5: binary({ length: 255 }).unique(),
	string6: binary({ length: 255 }),
	string7: varbinary({ length: 255 }).unique(),
	string8: varbinary({ length: 255 }),
});

async function main() {
	const db = drizzle(process.env.DATABASE_URL!);

	await seed(db, { strings });
}

main();
```

--------------------------------

### Create Tenant using curl

Source: https://orm.drizzle.team/docs/tutorials/drizzle-with-nile

This `curl` command demonstrates how to create a new tenant by sending a POST request to the `/api/tenants` endpoint with a JSON payload containing the tenant's name. The `Content-Type` header must be set to `application/json`.

```bash
curl --location --request POST 'localhost:3001/api/tenants' \
--header 'Content-Type: application/json' \
--data-raw '{"name":"my first customer"}'
```

--------------------------------

### Configure Netlify Build and Edge Functions Settings

Source: https://orm.drizzle.team/docs/tutorials/drizzle-with-netlify-edge-functions-neon

Create a netlify.toml configuration file to specify the import map location and route Edge Functions to specific paths. This tells Netlify to use the import_map.json for Deno imports and routes /user requests to the user.ts function.

```toml
[functions]
  deno_import_map = "./import_map.json"

[[edge_functions]]
  path = "/user"
  function = "user"
```

--------------------------------

### Executing Drizzle Kit `up` Command via CLI

Source: https://orm.drizzle.team/docs/drizzle-kit-up

This command executes the `drizzle-kit up` operation using `npx`. It relies on a `drizzle.config.ts` file in the project root to determine the database dialect and connection details. This is the standard way to run Drizzle Kit commands when a configuration file is present.

```shell
npx drizzle-kit up
```

--------------------------------

### Initialize Drizzle ORM with Bun SQLite and perform a basic select query

Source: https://orm.drizzle.team/docs/connect-bun-sqlite

This JavaScript code demonstrates how to initialize Drizzle ORM for Bun SQLite. It shows a basic setup where `drizzle()` is called without arguments, and then performs a simple `select().from(...)` operation, assuming a default client configuration.

```javascript
import { drizzle } from 'drizzle-orm/bun-sqlite';

const db = drizzle();

const result = await db.select().from(...);
```

--------------------------------

### Initialize Drizzle with better-sqlite3 config object

Source: https://orm.drizzle.team/docs/get-started-sqlite

Creates a Drizzle database instance using better-sqlite3 driver with explicit connection configuration. Allows specifying database source path directly in configuration object. Provides alternative to environment variables for connection setup.

```TypeScript
import { drizzle } from 'drizzle-orm/better-sqlite3';

// You can specify any property from the better-sqlite3 connection options
const db =  drizzle({ connection: { source: process.env.DATABASE_URL }});

const result = await db.execute('select 1');
```

--------------------------------

### Initialize Drizzle ORM with Existing Turso Driver Instance in JavaScript

Source: https://orm.drizzle.team/docs/connect-turso-database

This JavaScript snippet shows how to initialize Drizzle ORM by providing an already instantiated Turso Database driver client. This approach offers more control over the database connection, allowing for custom client configurations before passing it to Drizzle ORM. It then executes a basic SQL query.

```javascript
import { Database } from '@tursodatabase/drivers';
import { drizzle } from 'drizzle-orm/tursodatabase/database';

const client = new Database('sqlite.db');
const db = drizzle({ client });

const result = await db.execute('select 1');
```

--------------------------------

### Define Regular and Materialized Database Views using Drizzle ORM

Source: https://orm.drizzle.team/docs/views

These Drizzle ORM examples illustrate how to construct both regular and materialized views for PostgreSQL and CockroachDB. The views are built upon a common table expression (CTE) that selects user IDs and city IDs, filtering users older than 18. PostgreSQL examples include advanced options like `checkOption`, `securityBarrier`, and `fillfactor`, while CockroachDB demonstrates a simpler view definition.

```typescript
// regular view
const newYorkers = pgView('new_yorkers')
  .with({
    checkOption: 'cascaded',
    securityBarrier: true,
    securityInvoker: true,
  })
  .as((qb) => {
    const sq = qb
      .$with('sq')
      .as(
        qb.select({ userId: users.id, cityId: cities.id })
          .from(users)
          .leftJoin(cities, eq(cities.id, users.homeCity))
          .where(sql`${users.age1} > 18`),
      );
    return qb.with(sq).select().from(sq).where(sql`${users.homeCity} = 1`);
  });

// materialized view
const newYorkers2 = pgMaterializedView('new_yorkers')
  .using('btree')
  .with({
    fillfactor: 90,
    toast_tuple_target: 0.5,
    autovacuum_enabled: true,
    ...
  })
  .tablespace('custom_tablespace')
  .withNoData()
  .as((qb) => {
    const sq = qb
      .$with('sq')
      .as(
        qb.select({ userId: users.id, cityId: cities.id })
          .from(users)
          .leftJoin(cities, eq(cities.id, users.homeCity))
          .where(sql`${users.age1} > 18`),
      );
    return qb.with(sq).select().from(sq).where(sql`${users.homeCity} = 1`);
  });
```

```typescript
// regular view
const newYorkers = cockroachView('new_yorkers')
  .as((qb) => {
    const sq = qb
      .$with('sq')
      .as(
        qb.select({ userId: users.id, cityId: cities.id })
          .from(users)
          .leftJoin(cities, eq(cities.id, users.homeCity))
          .where(sql`${users.age1} > 18`),
      );
    return qb.with(sq).select().from(sq).where(sql`${users.homeCity} = 1`);
  });

// materialized view
const newYorkers2 = cockroachMaterializedView('new_yorkers')
  .withNoData()
  .as((qb) => {
    const sq = qb
      .$with('sq')
      .as(
        qb.select({ userId: users.id, cityId: cities.id })
          .from(users)
          .leftJoin(cities, eq(cities.id, users.homeCity))
          .where(sql`${users.age1} > 18`),
      );
    return qb.with(sq).select().from(sq).where(sql`${users.homeCity} = 1`);
  });
```

--------------------------------

### Unsupported Cache Operations - Transaction Example

Source: https://orm.drizzle.team/docs/cache

Illustrates transaction blocks that are not supported by the cache extension. Multiple operations within a transaction will not be properly cached or invalidated by the extension.

```typescript
await db.transaction(async (tx) => {
  await tx.update(accounts).set(...).where(...);
  await tx.update...
});
```

--------------------------------

### Run Database Migrations with NPM Commands

Source: https://orm.drizzle.team/docs/tutorials/drizzle-with-turso

Execute generated migrations to apply schema changes to the database using drizzle-kit CLI commands. Supports both migration-based approach (generate then migrate) and direct push approach for rapid prototyping in development environments.

```bash
npx drizzle-kit generate
```

```bash
npx drizzle-kit migrate
```

```bash
npx drizzle-kit push
```

--------------------------------

### Create and Apply Gel Migrations

Source: https://orm.drizzle.team/docs/get-started/gel-new

These commands are essential for managing database schema changes with Gel. First, `gel migration create` generates a new migration file based on any changes made to the schema, and then `gel migration apply` applies these pending migrations to update the database.

```shell
gel migration create
```

```shell
gel migration apply
```

--------------------------------

### Apply Drizzle ORM limit and offset to main and nested queries

Source: https://orm.drizzle.team/docs/rqb-v2

This snippet illustrates the use of `limit` and `offset` for both the main query and nested relations in Drizzle ORM. It fetches 5 posts starting from the 3rd post (offset 2) and for each post, retrieves 3 comments starting from the 4th comment (offset 3), demonstrating advanced pagination.

```javascript
await db.query.posts.findMany({
	limit: 5,
	offset: 2, // correct ✅
	with: {
		comments: {
			offset: 3, // correct ✅
			limit: 3,
		},
	},
});
```

--------------------------------

### Implement Max Aggregation in Drizzle ORM

Source: https://orm.drizzle.team/docs/select

Illustrates how to find the maximum value for a column using the `max` aggregation helper in Drizzle ORM. Examples include the Drizzle query, its corresponding SQL, and an equivalent raw `sql` template.

```typescript
import { max } from 'drizzle-orm'

await db.select({ value: max(users.id) }).from(users);
```

```sql
select max("id") from "users";
```

```typescript
// It's equivalent to writing
await db.select({
  value: sql`max(${expression})`.mapWith(users.id)
}).from(users);
```

--------------------------------

### Apply limit and offset for pagination in Drizzle ORM

Source: https://orm.drizzle.team/docs/rqb

Demonstrates correct usage of limit and offset for pagination at the top level. Offset is only available for top-level queries, not for nested relations. This example skips 2 posts and returns the next 5.

```typescript
await db._query.posts.findMany({
	limit: 5,
	offset: 2,
	with: {
		comments: {
			limit: 3,
		},
	},
});
```

--------------------------------

### Configure Drizzle Kit for PostgreSQL migrations in TypeScript

Source: https://orm.drizzle.team/docs/tutorials/drizzle-with-supabase-edge-functions

This TypeScript configuration file for Drizzle Kit specifies the location of the database schema, the output directory for generated migrations, and the dialect of the database (PostgreSQL). It guides Drizzle Kit on how to generate and manage database schema changes.

```typescript
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./src/schema.ts",
  out: "./supabase/migrations",
  dialect: "postgresql",
});
```

--------------------------------

### Initialize Local Storage Preferences and Apply Theme on Load in JavaScript

Source: https://orm.drizzle.team/docs/connect-op-sqlite

This JavaScript code initializes `packageManager` and `expandedSections` from `localStorage`, providing default values if not found. It then immediately applies the user's theme preference using `setPreference` and `getColorPreference`. It also sets up event listeners for Astro page loads (`astro:page-load`, `astro:after-swap`) to re-apply the theme, ensuring consistency across page navigations.

```javascript
let packageManager = localStorage.getItem("package-manager") || "npm";
let expandedSections = localStorage.getItem("expandedSections") ? JSON.parse(localStorage.getItem("expandedSections")) : [];
setPreference(getColorPreference());
document.addEventListener("astro:page-load", () => setPreference(getColorPreference()), );
document.addEventListener("astro:after-swap", () => setPreference(getColorPreference()), );
```

--------------------------------

### Generate seeded data with drizzle-seed

Source: https://orm.drizzle.team/docs/seed-overview

This example demonstrates the basic usage of `drizzle-seed` to populate a PostgreSQL database with fake user data. It defines a Drizzle schema for users and then uses the `seed` function to insert 10 random users into the database.

```typescript
import { pgTable, integer, text } from "drizzle-orm/pg-core";
import { drizzle } from "drizzle-orm/node-postgres";
import { seed } from "drizzle-seed";

const users = pgTable("users", {
  id: integer().primaryKey(),
  name: text().notNull()
});

async function main() {
  const db = drizzle(process.env.DATABASE_URL!);
  await seed(db, { users });
}

main();
```

--------------------------------

### Database Configuration Object Structure

Source: https://orm.drizzle.team/docs/get-started/postgresql-new

Defines the configuration structure for supported databases in Drizzle ORM. Each database entry contains name, documentation paths for new and existing setups, and icon assets for light and dark themes with styling properties.

```JSON
{
  "name": "PostgreSQL",
  "path": {
    "existing": "/docs/get-started/postgres-existing",
    "new": "/docs/get-started/postgres-new"
  },
  "icon": {
    "light": {
      "path": "/public/svg/postgres.svg",
      "style": {
        "width": 20,
        "fill": "#336791"
      }
    },
    "dark": {
      "path": "/public/svg/postgres.svg",
      "style": {
        "width": 20,
        "fill": "#F0F0F0"
      }
    }
  }
}
```

--------------------------------

### Configure drizzle-kit push with database connection parameters

Source: https://orm.drizzle.team/docs/drizzle-kit-push

Execute drizzle-kit push with required dialect and schema parameters along with database connection string. Supports PostgreSQL dialect with standard connection URL format containing user, password, host, port, and database name.

```bash
npx drizzle-kit push dialect=postgresql schema=src/schema.ts url=postgresql://user:password@host:port/dbname
```

```bash
yarn drizzle-kit push dialect=postgresql schema=src/schema.ts url=postgresql://user:password@host:port/dbname
```

```bash
pnpm drizzle-kit push dialect=postgresql schema=src/schema.ts url=postgresql://user:password@host:port/dbname
```

```bash
bunx drizzle-kit push dialect=postgresql schema=src/schema.ts url=postgresql://user:password@host:port/dbname
```

--------------------------------

### List Todos for Tenant using curl

Source: https://orm.drizzle.team/docs/tutorials/drizzle-with-nile

This `curl` command lists all todo items associated with a specific tenant. It sends a GET request to the tenant's todo endpoint, using the tenant ID in the URL. The response will be a JSON array of todo objects.

```bash
curl  -X GET \
  'http://localhost:3001/api/tenants/108124a5-2e34-418a-9735-b93082e9fbf2/todos'
```

--------------------------------

### Configure Drizzle ORM Read Replicas for SingleStore

Source: https://orm.drizzle.team/docs/read-replicas

This partial code demonstrates the setup of Drizzle ORM with read replicas for a SingleStore database. It defines a `usersTable` schema and initializes primary and read replica connections using `mysql2/promise`, which are then intended to be combined with `withReplicas()` for read/write separation.

```typescript
import { drizzle } from "drizzle-orm/singlestore";
import mysql from "mysql2/promise";
import { boolean, singlestoreTable, serial, text, withReplicas } from 'drizzle-orm/singlestore-core';

const usersTable = singlestoreTable('users', {
	id: serial('id' as string).primaryKey(),
	name: text('name').notNull(),
	verified: boolean('verified').notNull().default(false),
});

const primaryClient = await mysql.createConnection({
  host: "host",
  user: "user",
  database: "primary_db",
})
const primaryDb = drizzle({ client: primaryClient });

const read1Client = await mysql.createConnection({
  host: "host",
  user: "user",
  database: "read_"
```

--------------------------------

### GET /api/tenants

Source: https://orm.drizzle.team/docs/tutorials/drizzle-with-nile

Retrieves a list of all tenants currently registered in the system. Each tenant's details, including their ID and name, are returned.

```APIDOC
## GET /api/tenants

### Description
Retrieves a list of all tenants currently registered in the system. Each tenant's details are returned.

### Method
GET

### Endpoint
/api/tenants

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
- **id** (string) - The unique identifier of the tenant.
- **name** (string) - The name of the tenant.

#### Response Example
[
  {
    "id": "tenant_id_1",
    "name": "Tenant A"
  },
  {
    "id": "tenant_id_2",
    "name": "Tenant B"
  }
]

#### Error Response (500)
- **message** (string) - Internal Server Error.

#### Error Example (500)
{
  "message": "Internal Server Error"
}
```

--------------------------------

### Configure wrangler.toml for Durable Objects and SQLite

Source: https://orm.drizzle.team/docs/get-started/do-new

Setup wrangler configuration file with Durable Object bindings, migrations, and rules for SQLite database. Defines compatibility settings, Durable Object class bindings, and migration tags for database versioning.

```toml
#:schema node_modules/wrangler/config-schema.json
name = "sqlite-durable-objects"
main = "src/index.ts"
compatibility_date = "2024-11-12"
compatibility_flags = [ "nodejs_compat" ]

[[durable_objects.bindings]]
name = "MY_DURABLE_OBJECT"
class_name = "MyDurableObject"

[[migrations]]
tag = "v1"
new_sqlite_classes = ["MyDurableObject"]

[[rules]]
type = "Text"
globs = ["**/*.sql"]
fallthrough = true
```

--------------------------------

### Define CockroachDB SmallInt Column with Default Values in Drizzle ORM

Source: https://orm.drizzle.team/docs/column-types/cockroach

This example shows how to assign default values to `smallint` columns in a CockroachDB table schema using Drizzle ORM. It provides examples for both a direct numeric default and a default value defined with the `sql` helper. The resulting SQL `CREATE TABLE` statement is also provided.

```typescript
import { sql } from "drizzle-orm";
import { smallint, cockroachTable } from "drizzle-orm/cockroach-core";

export const table = cockroachTable('table', {
	smallint1: smallint().default(10),
	smallint2: smallint().default(sql`'10'::smallint`)
});
```

```sql
CREATE TABLE "table" (
	"smallint1" smallint DEFAULT 10,
	"smallint2" smallint DEFAULT '10'::smallint
);
```

--------------------------------

### Apply limit to top-level query in Drizzle ORM

Source: https://orm.drizzle.team/docs/rqb

Demonstrates using the limit parameter to restrict the number of results returned from a query. This example retrieves a maximum of 5 posts from the database.

```typescript
await db._query.posts.findMany({
	limit: 5,
});
```

--------------------------------

### CRUD Operations with Drizzle ORM and PostgreSQL

Source: https://orm.drizzle.team/docs/get-started/planetscale-postgres-existing

Complete example demonstrating insert, select, update, and delete operations on a users table using Drizzle ORM. The code initializes a database connection from environment variables, performs CRUD operations with type-safe queries, and logs results to console. Requires dotenv, drizzle-orm, and node-postgres packages.

```TypeScript
import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import { eq } from 'drizzle-orm';
import { usersTable } from './db/schema';

const db = drizzle(process.env.DATABASE_URL!);

async function main() {
  const user: typeof usersTable.$inferInsert = {
    name: 'John',
    age: 30,
    email: '[email protected]',
    phone: '123-456-7890',
  };

  await db.insert(usersTable).values(user);
  console.log('New user created!')

  const users = await db.select().from(usersTable);
  console.log('Getting all users from the database: ', users)
  /*
  const users: {
    id: number;
    name: string;
    age: number;
    email: string;
    phone: string | null;
  }[]
  */

  await db
    .update(usersTable)
    .set({
      age: 31,
    })
    .where(eq(usersTable.email, user.email));
  console.log('User info updated!')

  await db.delete(usersTable).where(eq(usersTable.email, user.email));
  console.log('User deleted!')
}

main();
```

--------------------------------

### Get All Todos for Specific Tenant API Route with Drizzle ORM (Node.js/Express)

Source: https://orm.drizzle.team/docs/tutorials/drizzle-with-nile

This Express.js GET route (`/api/tenants/:tenantId/todos`) retrieves all todo items for a specific tenant. It leverages the `tenantDB` wrapper, which implicitly filters by the current tenant's context, eliminating the need for an explicit `WHERE` clause on `tenantId`. It selects specific fields (id, tenant_id, title, estimate) from `todoSchema` and returns them as JSON.

```javascript
app.get("/api/tenants/:tenantId/todos", async (req, res) => {
  try {
    // No need for a "where" clause here because we are setting the tenant ID in the context
    const todos = await tenantDB(async (tx) => {
      return await tx
        .select({
          id: todoSchema.id,
          tenant_id: todoSchema.tenantId,
          title: todoSchema.title,
          estimate: todoSchema.estimate
        })
        .from(todoSchema);
    });
    res.json(todos);
  } catch (error: any) {
    console.log("error listing tasks: " + error.message);
    res.status(500).json({message: error.message});
  }
});
```

--------------------------------

### Initialize Drizzle ORM with PostgreSQL Driver

Source: https://orm.drizzle.team/docs/connect-supabase

Sets up Drizzle ORM instance using the postgres-js driver with DATABASE_URL environment variable. Demonstrates basic query execution pattern for selecting all users from database.

```TypeScript
import { drizzle } from 'drizzle-orm/postgres-js'

const db = drizzle(process.env.DATABASE_URL);

const allUsers = await db.select().from(...);
```

--------------------------------

### Define Database Configuration Data in JavaScript

Source: https://orm.drizzle.team/docs/get-started/d1-existing

This JavaScript array, `flatItems`, defines a list of supported database types. Each object includes the database name, paths to 'existing' and 'new' setup documentation, and configuration for its light and dark mode SVG icons, including styling properties like width and fill color.

```javascript
[
  {"name":"PlanetScale","path":{"existing":"/docs/get-started/planetscale-existing","new":"/docs/get-started/planetscale-new"},"icon":{"light":{"path":"/public/svg/planetscale.svg","style":{"width":20}},"dark":{"path":"/public/svg/planetscale.svg","style":{"width":20,"color":"#f0f0f0"}}}},
  {"name":"TiDB","path":{"existing":"/docs/get-started/tidb-existing","new":"/docs/get-started/tidb-new"},"icon":{"light":{"path":"/public/svg/tidb.svg","style":{"width":20}},"dark":{"path":"/public/svg/tidb.svg","style":{"width":20}}}},
  {"name":"SingleStore","path":{"existing":"/docs/get-started/singlestore-existing","new":"/docs/get-started/singlestore-new"},"icon":{"light":{"path":"/public/svg/singlestore_light.svg","style":{"width":20,"fill":"#00546B"}},"dark":{"path":"/public/svg/singlestore_dark.svg","style":{"width":20,"fill":"#F0F0F0"}}}},
  {"name":"SQLite","path":{"existing":"/docs/get-started/sqlite-existing","new":"/docs/get-started/sqlite-new"},"icon":{"light":{"path":"/public/svg/sqlite.svg","style":{"width":20}},"dark":{"path":"/public/svg/sqlite.svg","style":{"width":20}}}},
  {"name":"Turso Cloud","path":{"existing":"/docs/get-started/turso-existing","new":"/docs/get-started/turso-new"},"icon":{"light":{"path":"/public/svg/new-turso.svg","style":{"width":26}},"dark":{"path":"/public/svg/new-turso-light.svg","style":{"width":26}}}},
  {"name":"SQLite Cloud","path":{"existing":"/docs/get-started/sqlite-cloud-existing","new":"/docs/get-started/sqlite-cloud-new"},"icon":{"light":{"path":"/public/svg/sqlite-cloud.svg","style":{"width":26}},"dark":{"path":"/public/svg/sqlite-cloud.svg","style":{"width":26}}}},
  {"name":"Turso Database","path":{"existing":"/docs/get-started/turso-database-existing","new":"/docs/get-started/turso-database-new"},"icon":{"light":{"path":"/public/svg/new-turso.svg","style":{"width":26}},"dark":{"path":"/public/svg/new-turso-light.svg","style":{"width":26}}}},
  {"name":"Cloudflare D1","path":{"existing":"/docs/get-started/d1-existing","new":"/docs/get-started/d1-new"},"icon":{"light":{"path":"/public/svg/cloudflare.svg","style":{"width":26}},"dark":{"path":"/public/svg/cloudflare.svg","style":{"width":26}}}},
  {"name":"Bun SQLite","path":{"existing":"/docs/get-started/bun-sqlite-existing","new":"/docs/get-started/bun-sqlite-new"},"icon":{"light":{"path":"/public/svg/bun.svg","style":{"width":20}},"dark":{"path":"/public/svg/bun.svg","style":{"width":20}}}},
  {"name":"Cloudflare Durable Objects","path":{"existing":"/docs/get-started/do-existing","new":"/docs/get-started/do-new"},"icon":{"light":{"path":"/public/svg/cloudflare.svg","style":{"width":26}},"dark":{"path":"/public/svg/cloudflare.svg","style":{"width":26}}}},
  {"name":"MSSQL","path":{"existing":"/docs/get-started/mssql-existing","new":"/docs/get-started/mssql-new"},"icon":{"light":{"path":"/public/svg/mssql-light.png","style":{"style":"border-radius: 5px","width":34,"height":34}},"dark":{"path":"/public/svg/mssql-dark.png","style":{"style":"border-radius: 5px","width":34,"height":34}}}},
  {"name":"CockroachDB","path":{"existing":"/docs/get-started/cockroach-existing","new":"/docs/get-started/cockroach-new"},"icon":{"light":{"path":"/public/svg/cockroachdb-light.png","style":{"style":"border-radius: 5px","width":"24px"}},"dark":{"path":"/public/svg/cockroachdb-dark.png","style":{"style":"border-radius: 5px","width":"24px"}}}},
  {"name":"Expo SQLite","path":{"existing":"/docs/get-started/expo-existing","new":"/docs/get-started/expo-new"},"icon":{"light":{"path":"/public/svg/expo.svg","style":{"width":20}},"dark":{"path":"/public/svg/expo.svg","style":{"width":20}}}},
  {"name":"OP SQLite","path":{"existing":"/docs/get-started/op-sqlite-existing","new":"/docs/get-started/op-sqlite-new"},"icon":{"light":{"path":"/public/svg/opsqlite.png","style":{"width":"20px","borderRadius":"4px"}},"dark":{"path":"/public/svg/opsqlite.png","style":{"width":"20px","borderRadius":"4px"}}}}
];
```

--------------------------------

### Drizzle Kit CLI Commands Reference

Source: https://orm.drizzle.team/docs/kit-overview

Complete set of Drizzle Kit commands for database migration management including generate, migrate, push, pull, check, up, and studio. Commands available across npm, yarn, pnpm, and bun package managers.

```bash
npx drizzle-kit generate
npx drizzle-kit migrate
npx drizzle-kit push
npx drizzle-kit pull
npx drizzle-kit check
npx drizzle-kit up
npx drizzle-kit studio
```

```bash
yarn drizzle-kit generate
yarn drizzle-kit migrate
yarn drizzle-kit push
yarn drizzle-kit pull
yarn drizzle-kit check
yarn drizzle-kit up
yarn drizzle-kit studio
```

```bash
pnpm drizzle-kit generate
pnpm drizzle-kit migrate
pnpm drizzle-kit push
pnpm drizzle-kit pull
pnpm drizzle-kit check
pnpm drizzle-kit up
pnpm drizzle-kit studio
```

```bash
bunx drizzle-kit generate
bunx drizzle-kit migrate
bunx drizzle-kit push
bunx drizzle-kit pull
bunx drizzle-kit check
bunx drizzle-kit up
bunx drizzle-kit studio
```

--------------------------------

### Customize GraphQL Yoga Schema with Drizzle-GraphQL Entities (server.ts)

Source: https://orm.drizzle.team/docs/graphql

This TypeScript example demonstrates how to customize the GraphQL schema generated by `drizzle-graphql`. It extracts `entities` from `buildSchema` to manually construct a `GraphQLSchema`, allowing for custom queries, mutations, and reuse of generated types and inputs.

```typescript
import { buildSchema } from 'drizzle-graphql';
import { drizzle } from 'drizzle-orm/...';
import { GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLSchema } from 'graphql';
import { createYoga } from 'graphql-yoga';
import { createServer } from 'node:http';

import * as dbSchema from './schema';

const db = drizzle({ schema: dbSchema });

const { entities } = buildSchema(db);

// You can customize which parts of queries or mutations you want
const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      // Select only wanted queries out of all generated
      users: entities.queries.users,
      customer: entities.queries.customersSingle,

      // Create a custom one
      customUsers: {
        // You can reuse and customize types from original schema
        type: new GraphQLList(new GraphQLNonNull(entities.types.UsersItem)),
        args: {
          // You can reuse inputs as well
          where: {
            type: entities.inputs.UsersFilters
          }
        },
        resolve: async (source, args, context, info) => {
          // Your custom logic goes here...
          const result = await db.select(schema.users).where()...

          return result;
        }
      }
    }
  }),
  // Same rules apply to mutations
  mutation: new GraphQLObjectType({
    name: 'Mutation',
    fields: entities.mutations
  }),
  // In case you need types inside your schema
  types: [...Object.values(entities.types), ...Object.values(entities.inputs)]
});

const yoga = createYoga({
  schema
});

const server = createServer(yoga);

server.listen(4000, () => {
  console.info('Server is running on http://localhost:4000/graphql');
})
```

--------------------------------

### Perform Basic Data Insertion with Drizzle ORM

Source: https://orm.drizzle.team/docs/insert

This example demonstrates the most straightforward way to insert a single row into a database table using Drizzle ORM. It provides a clean, SQL-like syntax for data manipulation and shows the equivalent raw SQL query.

```TypeScript
await db.insert(users).values({ name: 'Andrew' });
```

```SQL
insert into "users" ("name") values ("Andrew");
```

--------------------------------

### Apply Drizzle ORM SQL Migrations via CLI

Source: https://orm.drizzle.team/docs/migrations

This command-line instruction uses `drizzle-kit migrate` to apply pending SQL migration files to the database. It reads migration scripts, fetches the database's migration history, and executes any unapplied migrations to update the schema.

```bash
$ drizzle-kit migrate
```

--------------------------------

### Dynamic Database Selector Event Handler - JavaScript

Source: https://orm.drizzle.team/docs/get-started/expo-existing

Implements event listeners for database and database-type selectors that dynamically update the UI width based on selected text and navigate to appropriate documentation routes. Handles both existing and new database setup paths.

```javascript
const databaseType = "existing";
const dbSelect = document.getElementById('db-select');
const dbTypeSelect = document.getElementById('db-type-select');
const dbSelectResizer = document.getElementById('db-resizer');
const dbTypeSelectResizer = document.getElementById('db-type-resizer');

dbSelect.addEventListener('change', (e) => {
  dbSelectResizer.innerText = e.target.value;
  dbSelect.style.width = `${dbSelectResizer.offsetWidth}px`;
  window.location.href = flatItems.find(({name}) => name === e.target.value).path[databaseType];
});

dbTypeSelect.addEventListener('change', (e) => {
  dbTypeSelectResizer.innerText = e.target.value === 'new' ? 'New database' : 'Existing database';
  dbTypeSelect.style.width = `${dbTypeSelectResizer.offsetWidth}px`;
  window.location.href = currentItem.path[e.target.value];
});

dbSelect.style.width = `${dbSelectResizer.offsetWidth}px`;
dbTypeSelect.style.width = `${dbTypeSelectResizer.offsetWidth}px`;
```

--------------------------------

### GET /api/tenants/:tenantId/todos

Source: https://orm.drizzle.team/docs/tutorials/drizzle-with-nile

Retrieves all todo items for a specific tenant. The query automatically filters by the `tenantId` provided in the path, ensuring only relevant todos are returned.

```APIDOC
## GET /api/tenants/:tenantId/todos

### Description
Retrieves all todo items for a specific tenant. The query automatically filters by the `tenantId` provided in the path.

### Method
GET

### Endpoint
/api/tenants/:tenantId/todos

### Parameters
#### Path Parameters
- **tenantId** (string) - Required - The unique identifier of the tenant whose todos are being retrieved.

#### Query Parameters
(None)

#### Request Body
(None)

### Request Example
(None)

### Response
#### Success Response (200)
- **id** (string) - The unique identifier of the todo item.
- **tenant_id** (string) - The ID of the associated tenant.
- **title** (string) - The title of the todo item.
- **estimate** (string, number, or null) - An optional estimate for the todo item.

#### Response Example
[
  {
    "id": "todo_id_1",
    "tenant_id": "tenant_id_1",
    "title": "Buy groceries",
    "estimate": null
  },
  {
    "id": "todo_id_2",
    "tenant_id": "tenant_id_1",
    "title": "Walk the dog",
    "estimate": "30m"
  }
]

#### Error Response (500)
- **message** (string) - Internal Server Error.

#### Error Example (500)
{
  "message": "Internal Server Error"
}
```

--------------------------------

### Generated SQL for Subquery Aggregation

Source: https://orm.drizzle.team/docs/rqb-v2

Displays the generated SQL query for the subquery aggregation example. Shows how Drizzle compiles the relational query with extras into a complex SQL statement using lateral joins and subqueries to efficiently count related records.

```sql
select "d0"."id" as "id", "d0"."name" as "name", "posts"."r" as "posts", 
((select count(*) from "posts" where "posts"."author_id" = "d0"."id")) as "totalPostsCount" 
from "users" as "d0" 
left join lateral(
  select coalesce(json_agg(row_to_json("t".*)), '[]') as "r" 
  from (select "d1"."id" as "id", "d1"."content" as "content", "d1"."author_id" as "authorId" from "posts" as "d1" where "d0"."id" = "d1"."author_id") as "t"
) as "posts" on true
```

--------------------------------

### Configure Drizzle ORM with Upstash Cache (Default)

Source: https://orm.drizzle.team/docs/cache

Initializes Drizzle ORM with Upstash Redis caching using default configuration. Upstash credentials are automatically pulled from environment variables if available, simplifying setup for common deployments.

```typescript
import { upstashCache } from "drizzle-orm/cache/upstash";
import { drizzle } from "drizzle-orm/...";

const db = drizzle(process.env.DB_URL!, {
  cache: upstashCache(),
});
```

--------------------------------

### Configure Drizzle Kit for Migrations and Schema

Source: https://orm.drizzle.team/docs/get-started/bun-sql-new

Set up the `drizzle.config.ts` file to configure Drizzle Kit. This configuration specifies the output directory for migrations, the path to the schema file, the database dialect (PostgreSQL), and connection credentials using an environment variable.

```typescript
import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  out: './drizzle',
  schema: './src/db/schema.ts',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
```

--------------------------------

### Perform SQL-like SELECT with JOIN and WHERE in Drizzle ORM

Source: https://orm.drizzle.team/docs/data-querying

This example demonstrates how to construct a SELECT query in Drizzle ORM using its SQL-like syntax. It includes performing a `leftJoin` between 'posts' and 'comments' tables and filtering results with a `where` clause, showing the equivalent raw SQL query for clarity.

```typescript
// Access your data
await db
  .select()
  .from(posts)
  .leftJoin(comments, eq(posts.id, comments.post_id))
  .where(eq(posts.id, 10))
```

```sql
SELECT * 
FROM posts
LEFT JOIN comments ON posts.id = comments.post_id
WHERE posts.id = 10
```

--------------------------------

### Configure MySQL Database URL for Drizzle ORM

Source: https://orm.drizzle.team/docs/guides/mysql-local-setup

This snippet illustrates the standard format for a MySQL database connection URL, specifying the protocol, user credentials, host, port, and database name. It also provides a concrete example for connecting to a local MySQL instance, typically used when configuring Drizzle ORM or other database clients.

```text
mysql://<user>:<password>@<host>:<port>/<database>
```

```text
mysql://root:mypassword@localhost:3306/mysql
```

--------------------------------

### Define SingleStore table schema using Drizzle ORM

Source: https://orm.drizzle.team/docs/get-started/singlestore-new

This example illustrates how to define a database table schema (`usersTable`) in `src/db/schema.ts` using Drizzle ORM's SingleStore-specific functions like `singlestoreTable`, `int`, and `varchar` to specify column types and constraints.

```typescript
import { int, singlestoreTable, varchar } from 'drizzle-orm/singlestore-core';

export const usersTable = singlestoreTable('users_table', {
  id: int().primaryKey(),
  name: varchar({ length: 255 }).notNull(),
  age: int().notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
});
```

--------------------------------

### Configure wrangler.toml for Cloudflare D1

Source: https://orm.drizzle.team/docs/get-started/d1-existing

Setup wrangler.toml configuration file for Cloudflare Workers project with D1 database binding. This file specifies the project name, entry point, compatibility date, and D1 database connection details including binding name, database name, and migrations directory.

```toml
name = "YOUR PROJECT NAME"
main = "src/index.ts"
compatibility_date = "2022-11-07"
node_compat = true

[[ d1_databases ]]
binding = "DB"
database_name = "YOUR DB NAME"
database_id = "YOUR DB ID"
migrations_dir = "drizzle"
```

--------------------------------

### Define Database Schema with Tables and References

Source: https://orm.drizzle.team/docs/seed-overview

Defines a PostgreSQL schema with users and posts tables, where posts references users through a foreign key. This schema is used as the basis for seeding examples.

```typescript
import { pgTable, integer, text } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: integer().primaryKey(),
  name: text().notNull()
});

export const posts = pgTable("posts", {
  id: integer().primaryKey(),
  description: text(),
  userId: integer().references(() => users.id)
});
```

--------------------------------

### Database Provider Configuration Object

Source: https://orm.drizzle.team/docs/get-started/sqlite-cloud-new

Defines a configuration object for SQLite Cloud database provider with metadata including name, documentation paths for new and existing database setups, and icon assets for light and dark themes. Used for dynamic UI rendering of database provider selection interface.

```JavaScript
const currentItem = {
  "name": "SQLite Cloud",
  "path": {
    "existing": "/docs/get-started/sqlite-cloud-existing",
    "new": "/docs/get-started/sqlite-cloud-new"
  },
  "icon": {
    "light": {
      "path": "/public/svg/sqlite-cloud.svg",
      "style": {
        "width": 26
      }
    },
    "dark": {
      "path": "/public/svg/sqlite-cloud.svg",
      "style": {
        "width": 26
      }
    }
  }
};
```

--------------------------------

### Initialize Drizzle ORM connection with PlanetScale

Source: https://orm.drizzle.team/docs/get-started/planetscale-new

Create a database connection instance using Drizzle ORM with PlanetScale serverless driver. Supports two approaches: direct configuration with environment variables or using an existing PlanetScale Client instance for more control.

```typescript
import { drizzle } from "drizzle-orm/planetscale-serverless";

const db = drizzle({ connection: {
  host: process.env.DATABASE_HOST!,
  username: process.env.DATABASE_USERNAME!,
  password: process.env.DATABASE_PASSWORD!,
}});
```

```typescript
import { drizzle } from "drizzle-orm/planetscale-serverless";
import { Client } from "@planetscale/database";

const client = new Client({
  host: process.env.DATABASE_HOST!,
  username: process.env.DATABASE_USERNAME!,
  password: process.env.DATABASE_PASSWORD!,
});

const db = drizzle({ client: client });
```

--------------------------------

### Define MSSQL `int` Column with Drizzle ORM (TypeScript & SQL)

Source: https://orm.drizzle.team/docs/column-types/mssql

This snippet demonstrates defining an `int` column for an MSSQL table using Drizzle ORM's TypeScript API. It includes examples for a basic integer column and one with a default value. The corresponding generated SQL `CREATE TABLE` statements are also provided, illustrating the database schema. Note the `pgTable` in one TypeScript example, which might be a typo in the source.

```typescript
import { int, mssqlTable } from "drizzle-orm/mssql-core";

export const table = mssqlTable('table', {
	int: int()
});
```

```sql
CREATE TABLE [table] (
	[int] int
);
```

```typescript
import { sql } from "drizzle-orm";
import { int, mssqlTable } from "drizzle-orm/mssql-core";

export const table = pgTable('table', {
	int1: int().default(10),
});
```

```sql
CREATE TABLE [table] (
	[int1] int DEFAULT 10
);
```

--------------------------------

### CRUD Operations with Drizzle ORM and SingleStore

Source: https://orm.drizzle.team/docs/get-started/singlestore-existing

Complete example showing how to initialize a Drizzle database connection to SingleStore and perform Create, Read, Update, and Delete operations on a users table. The code uses environment variables for database configuration and demonstrates type-safe queries with TypeScript type inference from the schema.

```typescript
import 'dotenv/config';
import { drizzle } from 'drizzle-orm/singlestore';
import { eq } from 'drizzle-orm';
import { usersTable } from './db/schema';

const db = drizzle(process.env.DATABASE_URL!);

async function main() {
  const user: typeof usersTable.$inferInsert = {
    name: 'John',
    age: 30,
    email: '[email protected]',
    phone: '123-456-7890',
  };

  await db.insert(usersTable).values(user);
  console.log('New user created!')

  const users = await db.select().from(usersTable);
  console.log('Getting all users from the database: ', users)
  /*
  const users: {
    id: number;
    name: string;
    age: number;
    email: string;
    phone: string | null;
  }[]
  */

  await db
    .update(usersTable)
    .set({
      age: 31,
    })
    .where(eq(usersTable.email, user.email));
  console.log('User info updated!')

  await db.delete(usersTable).where(eq(usersTable.email, user.email));
  console.log('User deleted!')
}

main();
```

--------------------------------

### Initialize Drizzle with Neon HTTP Driver

Source: https://orm.drizzle.team/docs/connect-neon

Initialize Drizzle ORM using the Neon HTTP driver with a database URL from environment variables. This approach provides a simple HTTP-based connection to Neon PostgreSQL databases without additional configuration.

```TypeScript
import { drizzle } from 'drizzle-orm/neon-http';

const db = drizzle(process.env.DATABASE_URL);

const result = await db.execute('select 1');
```

--------------------------------

### Transaction with Business Logic and Rollback

Source: https://orm.drizzle.team/docs/transactions

Embed conditional business logic within transactions and trigger rollback when conditions are not met. This example checks account balance before performing transfers and rolls back if insufficient funds are available.

```typescript
const db = drizzle(...)

await db.transaction(async (tx) => {
  const [account] = await tx.select({ balance: accounts.balance }).from(accounts).where(eq(users.name, 'Dan'));
  if (account.balance < 100) {
    // This throws an exception that rollbacks the transaction.
    tx.rollback()
  }

  await tx.update(accounts).set({ balance: sql`${accounts.balance} - 100.00` }).where(eq(users.name, 'Dan'));
  await tx.update(accounts).set({ balance: sql`${accounts.balance} + 100.00` }).where(eq(users.name, 'Andrew'));
});
```

--------------------------------

### Configure Single Schema File Path in Drizzle

Source: https://orm.drizzle.team/docs/drizzle-kit-push

Basic Drizzle Kit configuration with a single schema.ts file located in the src directory. This is the simplest setup for small projects with one schema file.

```typescript
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./src/schema.ts",
});
```

--------------------------------

### Apply limit to nested relations in Drizzle ORM

Source: https://orm.drizzle.team/docs/rqb

Shows how to use limit on nested entities within a relational query. This example retrieves posts with a maximum of 3 comments per post.

```typescript
await db._query.posts.findMany({
	with: {
		comments: {
			limit: 3,
		},
	},
});
```

--------------------------------

### JavaScript Local Storage Initialization and Event Handling

Source: https://orm.drizzle.team/docs/seed-versioning

This code initializes `packageManager` and `expandedSections` from `localStorage`, providing default values if not found. It also sets up event listeners for Astro page lifecycle events (`astro:page-load`, `astro:after-swap`) to re-apply theme preferences, and handles navigation events (`popstate`, `navigationEntry`, `click`) to manage sidebar scroll state in `localStorage`.

```javascript
let packageManager = localStorage.getItem("package-manager") || "npm";
let expandedSections = localStorage.getItem("expandedSections") ? JSON.parse(localStorage.getItem("expandedSections")) : [];

setPreference(getColorPreference());

document.addEventListener("astro:page-load", () => setPreference(getColorPreference()), );
document.addEventListener("astro:after-swap", () => setPreference(getColorPreference()), );

const [navigationEntry] = performance.getEntriesByType("navigation");
if (navigationEntry && navigationEntry.type !== "reload") {
  localStorage.removeItem("sidebar-scroll");
}

window.addEventListener("popstate", () => {
  localStorage.removeItem("sidebar-scroll");
});

document.addEventListener("click", function (event) {
  const target = event.target.closest("a");
  if (!target || !target.href) return;
  const isSideBarElement = target && target.href && (target.getAttribute("data-nav-index") || target.getAttribute("data-slug"));
  if (!isSideBarElement && target.hostname === window.location.hostname) {
    localStorage.removeItem("sidebar-scroll");
  }
});
```

--------------------------------

### Run drizzle-kit check Command

Source: https://orm.drizzle.team/docs/drizzle-kit-check

Executes the drizzle-kit check command to validate SQL migration consistency. Can be run with config file or CLI dialect option. Supports multiple package managers (npm, yarn, pnpm, bun).

```bash
npx drizzle-kit check
```

```bash
npx drizzle-kit check --dialect=postgresql
```

```bash
yarn drizzle-kit check
```

```bash
pnpm drizzle-kit check
```

```bash
bunx drizzle-kit check
```

--------------------------------

### Extended Drizzle Kit Configuration with Advanced Options

Source: https://orm.drizzle.team/docs/drizzle-config-file

Comprehensive Drizzle Kit configuration including database driver, credentials, introspection settings, migration options, entity role management, and debugging flags. Demonstrates all available configuration properties for production-grade database management.

```typescript
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: "./drizzle",
  dialect: "postgresql",
  schema: "./src/schema.ts",
  driver: "pglite",
  dbCredentials: {
    url: "./database/",
  },
  extensionsFilters: ["postgis"],
  schemaFilter: "public",
  tablesFilter: "*",
  introspect: {
    casing: "camel",
  },
  migrations: {
    prefix: "timestamp",
    table: "__drizzle_migrations__",
    schema: "public",
  },
  entities: {
    roles: {
      provider: "",
      exclude: [],
      include: []
    }
  },
  breakpoints: true,
  strict: true,
  verbose: true,
});
```

--------------------------------

### Query Database with Drizzle ORM in Cloudflare Workers

Source: https://orm.drizzle.team/docs/get-started/d1-new

Initialize a Drizzle ORM instance with a Cloudflare D1 database binding and execute queries. This example demonstrates selecting all records from a users table and returning the result as JSON in a Cloudflare Workers fetch handler.

```typescript
import { drizzle } from 'drizzle-orm/d1';

export interface Env {
  <BINDING_NAME>: D1Database;
}
export default {
  async fetch(request: Request, env: Env) {
    const db = drizzle(env.<BINDING_NAME>);
    const result = await db.select().from(users).all()
    return Response.json(result);
  },
};
```

--------------------------------

### Configure Turso Database Environment Variables (.env)

Source: https://orm.drizzle.team/docs/get-started/turso-existing

This snippet shows the required environment variables for connecting to your Turso database. Create a '.env' file in your project root and populate it with your specific database URL and authentication token obtained from Turso Cloud.

```dotenv
TURSO_DATABASE_URL=
TURSO_AUTH_TOKEN=
```

--------------------------------

### Implement Average Aggregation in Drizzle ORM

Source: https://orm.drizzle.team/docs/select

Illustrates how to calculate the average of non-null values for a column using the `avg` aggregation helper in Drizzle ORM. Examples include the Drizzle query, its corresponding SQL, and an equivalent raw `sql` template.

```typescript
import { avg } from 'drizzle-orm'

await db.select({ value: avg(users.id) }).from(users);
```

```sql
select avg("id") from "users";
```

```typescript
// It's equivalent to writing
await db.select({
  value: sql`avg(${users.id})`.mapWith(String)
}).from(users);
```

--------------------------------

### Configure Drizzle Kit Configuration File

Source: https://orm.drizzle.team/docs/tutorials/drizzle-with-netlify-edge-functions-neon

Create a drizzle.config.ts file in the project root to configure Drizzle Kit with database connection details, schema location, and migration settings. This configuration specifies PostgreSQL dialect, schema path, output directory for migrations, and database URL from environment variables.

```typescript
import 'dotenv/config';
import type { Config } from "drizzle-kit";

export default {
  schema: './netlify/edge-functions/common/schema.ts',
  out: './drizzle',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
} satisfies Config;
```

--------------------------------

### Unsupported Cache Operations - Raw Queries Example

Source: https://orm.drizzle.team/docs/cache

Demonstrates a raw SQL query that will not be handled by the Drizzle ORM cache extension. Raw queries executed via db.execute() bypass the cache layer and should be avoided when cache invalidation is required.

```typescript
db.execute(sql`select 1`);
```

--------------------------------

### Define Database Connector Configuration in JavaScript

Source: https://orm.drizzle.team/docs/get-started/mssql-new

This JavaScript array `flatItems` holds configuration objects for various database connectors. Each object specifies the database `name`, `path` for existing and new setups, and `icon` details for light and dark themes. This data is used to populate UI elements and determine navigation targets.

```javascript
[
{"name":"MySQL","path":{"existing":"/docs/get-started/mysql-existing","new":"/docs/get-started/mysql-new"},"icon":{"light":{"path":"/public/svg/mysql.svg","style":{"width":20,"fill":"#00546B"}},"dark":{"path":"/public/svg/mysql.svg","style":{"width":20,"fill":"#F0F0F0"}}}},{"name":"PlanetScale","path":{"existing":"/docs/get-started/planetscale-existing","new":"/docs/get-started/planetscale-new"},"icon":{"light":{"path":"/public/svg/planetscale.svg","style":{"width":20}},"dark":{"path":"/public/svg/planetscale.svg","style":{"width":20,"color":"#f0f0f0"}}}},{"name":"TiDB","path":{"existing":"/docs/get-started/tidb-existing","new":"/docs/get-started/tidb-new"},"icon":{"light":{"path":"/public/svg/tidb.svg","style":{"width":20}},"dark":{"path":"/public/svg/tidb.svg","style":{"width":20}}}},{"name":"SingleStore","path":{"existing":"/docs/get-started/singlestore-existing","new":"/docs/get-started/singlestore-new"},"icon":{"light":{"path":"/public/svg/singlestore_light.svg","style":{"width":20,"fill":"#00546B"}},"dark":{"path":"/public/svg/singlestore_dark.svg","style":{"width":20,"fill":"#F0F0F0"}}}},{"name":"SQLite","path":{"existing":"/docs/get-started/sqlite-existing","new":"/docs/get-started/sqlite-new"},"icon":{"light":{"path":"/public/svg/sqlite.svg","style":{"width":20}},"dark":{"path":"/public/svg/sqlite.svg","style":{"width":20}}}},{"name":"Turso Cloud","path":{"existing":"/docs/get-started/turso-existing","new":"/docs/get-started/turso-new"},"icon":{"light":{"path":"/public/svg/new-turso.svg","style":{"width":26}},"dark":{"path":"/public/svg/new-turso-light.svg","style":{"width":26}}}},{"name":"SQLite Cloud","path":{"existing":"/docs/get-started/sqlite-cloud-existing","new":"/docs/get-started/sqlite-cloud-new"},"icon":{"light":{"path":"/public/svg/sqlite-cloud.svg","style":{"width":26}},"dark":{"path":"/public/svg/sqlite-cloud.svg","style":{"width":26}}}},{"name":"Turso Database","path":{"existing":"/docs/get-started/turso-database-existing","new":"/docs/get-started/turso-database-new"},"icon":{"light":{"path":"/public/svg/new-turso.svg","style":{"width":26}},"dark":{"path":"/public/svg/new-turso-light.svg","style":{"width":26}}}},{"name":"Cloudflare D1","path":{"existing":"/docs/get-started/d1-existing","new":"/docs/get-started/d1-new"},"icon":{"light":{"path":"/public/svg/cloudflare.svg","style":{"width":26}},"dark":{"path":"/public/svg/cloudflare.svg","style":{"width":26}}}},{"name":"Bun SQLite","path":{"existing":"/docs/get-started/bun-sqlite-existing","new":"/docs/get-started/bun-sqlite-new"},"icon":{"light":{"path":"/public/svg/bun.svg","style":{"width":20}},"dark":{"path":"/public/svg/bun.svg","style":{"width":20}}}},{"name":"Cloudflare Durable Objects","path":{"existing":"/docs/get-started/do-existing","new":"/docs/get-started/do-new"},"icon":{"light":{"path":"/public/svg/cloudflare.svg","style":{"width":26}},"dark":{"path":"/public/svg/cloudflare.svg","style":{"width":26}}}},{"name":"MSSQL","path":{"existing":"/docs/get-started/mssql-existing","new":"/docs/get-started/mssql-new"},"icon":{"light":{"path":"/public/svg/mssql-light.png","style":{"style":"border-radius: 5px","width":34,"height":34}},"dark":{"path":"/public/svg/mssql-dark.png","style":{"style":"border-radius: 5px","width":34,"height":34}}}},{"name":"CockroachDB","path":{"existing":"/docs/get-started/cockroach-existing","new":"/docs/get-started/cockroach-new"},"icon":{"light":{"path":"/public/svg/cockroachdb-light.png","style":{"style":"border-radius: 5px","width":"24px"}},"dark":{"path":"/public/svg/cockroachdb-dark.png","style":{"style":"border-radius: 5px","width":"24px"}}}},{"name":"Expo SQLite","path":{"existing":"/docs/get-started/expo-existing","new":"/docs/get-started/expo-new"},"icon":{"light":{"path":"/public/svg/expo.svg","style":{"width":20}},"dark":{"path":"/public/svg/expo.svg","style":{"width":20}}}},{"name":"OP SQLite","path":{"existing":"/docs/get-started/op-sqlite-existing","new":"/docs/get-started/op-sqlite-new"},"icon":{"light":{"path":"/public/svg/opsqlite.png","style":{"width":"20px","borderRadius":"4px"}},"dark":{"path":"/public/svg/opsqlite.png","style":{"width":"20px","borderRadius":"4px"}}}}
]
```

--------------------------------

### Example of Drizzle ORM Generated SQL Migration

Source: https://orm.drizzle.team/docs/tutorials/drizzle-with-neon

This SQL code snippet illustrates a typical migration generated by Drizzle Kit, showcasing `CREATE TABLE` statements for `posts_table` and `users_table`, including primary keys, unique constraints, and foreign key relationships. It demonstrates how Drizzle translates your TypeScript schema definitions into database-specific DDL.

```sql
CREATE TABLE IF NOT EXISTS "posts_table" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"content" text NOT NULL,
	"user_id" integer NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users_table" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"age" integer NOT NULL,
	"email" text NOT NULL,
	CONSTRAINT "users_table_email_unique" UNIQUE("email")
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "posts_table" ADD CONSTRAINT "posts_table_user_id_users_table_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users_table"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
```

--------------------------------

### Set a specific seed for reproducible data generation

Source: https://orm.drizzle.team/docs/seed-overview

This example illustrates how to provide a specific seed value to `drizzle-seed` to ensure that the generated data is identical across multiple runs. This is crucial for consistent testing and debugging environments.

```typescript
await seed(db, schema, { seed: 12345 });
```

--------------------------------

### Initialize Drizzle ORM connection to MSSQL

Source: https://orm.drizzle.team/docs/get-started/mssql-new

Demonstrates different ways to initialize Drizzle ORM with an MSSQL database. It covers direct connection string usage, connection with additional `node-mssql` configuration options, and using an existing `mssql` connection pool. These examples typically reside in `src/db/index.ts`.

```typescript
import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-mssql';

const db = drizzle(process.env.DATABASE_URL!);
```

```typescript
import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-mssql';

// You can specify any property from the node-mssql connection options
const db = drizzle({
  connection: {
    connectionString: process.env.DATABASE_URL!,
    ssl: true
  }
});
```

```typescript
import { drizzle } from "drizzle-orm/node-mssql";
import type { ConnectionPool } from 'mssql';

const pool = await mssql.connect(connectionString);
const db = drizzle({ client: pool });
 
const result = await db.execute('select 1');
```

--------------------------------

### Define Basic Drizzle Tables with Columns for SQL Dialects

Source: https://orm.drizzle.team/docs/sql-schema-declaration

These examples demonstrate how to define a basic table named 'users' with an integer 'id' column using Drizzle ORM for PostgreSQL, MySQL, and SQLite. Each dialect requires its specific table and column type imports from the `drizzle-orm` package.

```typescript
import { pgTable, integer } from "drizzle-orm/pg-core"

export const users = pgTable('users', {
  id: integer()
});
```

```typescript
import { mysqlTable, int } from "drizzle-orm/mysql-core"

export const users = mysqlTable('users', {
  id: int()
});
```

```typescript
import { sqliteTable, integer } from "drizzle-orm/sqlite-core"

export const users = sqliteTable('users', {
  id: integer()
});
```

--------------------------------

### Initialize Drizzle ORM with LibSQL Connection

Source: https://orm.drizzle.team/docs/get-started/turso-existing

Creates a Drizzle database instance with LibSQL connection using environment variables for database URL and authentication token. Supports multiple driver variations for different runtime environments. Returns a configured database client for executing queries.

```typescript
import 'dotenv/config';
import { drizzle } from 'drizzle-orm/libsql';

const db = drizzle({ 
  connection: { 
    url: process.env.TURSO_DATABASE_URL!, 
    authToken: process.env.TURSO_AUTH_TOKEN!
  }
});
```

--------------------------------

### Generate Sequential Integer Primary Keys with Drizzle Seed

Source: https://orm.drizzle.team/docs/seed-functions

Uses intPrimaryKey generator to create sequential integers starting from 1. Ideal for generating unique primary key values without additional parameters.

```JavaScript
import { seed } from "drizzle-seed";

await seed(db, schema, { count: 1000 }).refine((funcs) => ({
  posts: {
    columns: {
      id: funcs.intPrimaryKey(),
    },
  },
}));
```

--------------------------------

### Configure Basic GraphQL Yoga Server with Drizzle-GraphQL (server.ts)

Source: https://orm.drizzle.team/docs/graphql

This TypeScript code sets up a basic GraphQL Yoga server. It uses `drizzle-graphql` to automatically build the schema from a Drizzle ORM instance and then creates an HTTP server to listen for GraphQL requests on port 4000.

```typescript
import { buildSchema } from 'drizzle-graphql';
import { drizzle } from 'drizzle-orm/...';
import { createYoga } from 'graphql-yoga';
import { createServer } from 'node:http';

import * as dbSchema from './schema';

const db = drizzle({ schema: dbSchema });

const { schema } = buildSchema(db);

const yoga = createYoga({ schema });
const server = createServer(yoga);

server.listen(4000, () => {
  console.info('Server is running on http://localhost:4000/graphql');
});
```

--------------------------------

### Setup Drizzle ORM with Neon Database in Netlify Edge Functions

Source: https://orm.drizzle.team/docs/tutorials/drizzle-with-netlify-edge-functions-neon

Configures Drizzle ORM to connect to a Neon database within a Netlify Edge Function. Imports the Neon serverless client and Drizzle ORM, retrieves the database URL from environment variables, and executes a query to fetch users from the users table. Returns the query results as JSON.

```TypeScript
import type { Context } from "@netlify/edge-functions";
import { usersTable } from "./common/schema.ts";
import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';

export default async (request: Request, context: Context) => {
  const sql = neon(Netlify.env.get("DATABASE_URL")!);
  const db = drizzle({ client: sql });

  const users = await db.select().from(usersTable);

  return new Response(JSON.stringify(users));
};
```

--------------------------------

### Output Inserted Rows with Drizzle ORM for MSSQL

Source: https://orm.drizzle.team/docs/insert

This example demonstrates how to retrieve the full or partial inserted row data immediately after an insert operation in MSSQL. The `output()` method provides similar functionality to `returning()` for databases that support it.

```TypeScript
await db.insert(users).values({ name: "Dan" }).output();

// partial return
await db.insert(users).values({ name: "Partial Dan" }).output({ insertedId: users.id });
```

--------------------------------

### Basic Transaction with Drizzle ORM

Source: https://orm.drizzle.team/docs/transactions

Execute multiple SQL statements as a single atomic transaction using db.transaction(). All statements either commit together or rollback together as a logical unit. This example transfers balance between two accounts.

```typescript
const db = drizzle(...)

await db.transaction(async (tx) => {
  await tx.update(accounts).set({ balance: sql`${accounts.balance} - 100.00` }).where(eq(users.name, 'Dan'));
  await tx.update(accounts).set({ balance: sql`${accounts.balance} + 100.00` }).where(eq(users.name, 'Andrew'));
});
```

--------------------------------

### Implement Sum Aggregation in Drizzle ORM

Source: https://orm.drizzle.team/docs/select

Shows how to calculate the sum of non-null values for a column using the `sum` aggregation helper in Drizzle ORM. Examples include the Drizzle query, its corresponding SQL, and an equivalent raw `sql` template.

```typescript
import { sum } from 'drizzle-orm'

await db.select({ value: sum(users.id) }).from(users);
```

```sql
select sum("id") from "users";
```

```typescript
// It's equivalent to writing
await db.select({
  value: sql`sum(${users.id})`.mapWith(String)
}).from(users);
```

--------------------------------

### Implement Next.js API Route with Drizzle ORM

Source: https://orm.drizzle.team/docs/tutorials/drizzle-with-vercel-edge-functions

This snippet demonstrates how to create a `route.ts` file for a Next.js API endpoint that interacts with the database using Drizzle ORM. This example fetches all users from the `usersTable` and returns them as a JSON response, configured for edge runtime for optimal performance.

```typescript
import { db } from "@/db";
import { usersTable } from "@/db/schema";
import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic'; // static by default, unless reading the request
export const runtime = 'edge' // specify the runtime to be edge

export async function GET(request: Request) {
  const users = await db.select().from(usersTable)

  return NextResponse.json({ users, message: 'success' });
}
```

--------------------------------

### Initialize Drizzle ORM with node-postgres driver in JavaScript

Source: https://orm.drizzle.team/docs/get-started-cockroach

This JavaScript code demonstrates how to initialize Drizzle ORM to connect to a PostgreSQL database using the `node-postgres` driver. It covers basic connection string usage, configuring SSL, and providing an existing `pg` Pool instance for more advanced setups.

```javascript
// Make sure to install the 'pg' package 
import { drizzle } from 'drizzle-orm/cockroach';

const db = drizzle(process.env.DATABASE_URL);
 
const result = await db.execute('select 1');
```

```javascript
// Make sure to install the 'pg' package 
import { drizzle } from 'drizzle-orm/cockroach';

// You can specify any property from the node-postgres connection options
const db = drizzle({ 
  connection: { 
    connectionString: process.env.DATABASE_URL,
    ssl: true
  }
});
 
const result = await db.execute('select 1');
```

```javascript
// Make sure to install the 'pg' package 
import { drizzle } from "drizzle-orm/cockroach";
import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});
const db = drizzle({ client: pool });
 
const result = await db.execute('select 1');
```

--------------------------------

### Executing Raw SQL Queries with Drizzle ORM's `sql` Template

Source: https://orm.drizzle.team/docs/sql

This Drizzle ORM example demonstrates how to use the `sql` template literal to execute raw SQL queries. It showcases parameterization for type safety and SQL injection prevention, automatically mapping table/column names and dynamic values to placeholders.

```typescript
import { sql } from 'drizzle-orm';

const id = 69;
await db.execute(sql`select * from ${usersTable} where ${usersTable.id} = ${id}`);
```

--------------------------------

### Define Composite Primary Key - SingleStore

Source: https://orm.drizzle.team/docs/indexes-constraints

Create a composite primary key in SingleStore using Drizzle ORM. The example demonstrates a many-to-many junction table with composite key on bookId and authorId with optional custom naming.

```TypeScript
import { int, text, primaryKey, mysqlTable } from "drizzle-orm/singlestore-core";

export const user = singlestoreTable("user", {
  id: int("id").autoincrement().primaryKey(),
  name: text("name"),
});

export const book = singlestoreTable("book", {
  id: int("id").autoincrement().primaryKey(),
  name: text("name"),
});

export const booksToAuthors = singlestoreTable("books_to_authors", {
  authorId: int("author_id"),
  bookId: int("book_id"),
}, (table) => [
  primaryKey({ columns: [table.bookId, table.authorId] }),
  // Or PK with custom name
  primaryKey({ name: 'custom_name', columns: [table.bookId, table.authorId] }),
]);
```

```SQL
CREATE TABLE `books_to_authors` (
  `author_id` int,
  `book_id` int,
  PRIMARY KEY(`book_id`,`author_id`)
);
```

--------------------------------

### Configure Extensions Filters in Drizzle Kit

Source: https://orm.drizzle.team/docs/drizzle-config-file

Use extensionsFilters option to declare installed database extensions like PostGIS that should be ignored by Drizzle Kit during schema management. This prevents extension-created tables from being managed by push or pull operations.

```typescript
export default defineConfig({
  dialect: "postgresql",
  extensionsFilters: ["postgis"]
});
```

--------------------------------

### Execute a `findMany` query for all users in Drizzle ORM

Source: https://orm.drizzle.team/docs/rqb-v2

Illustrates how to fetch all records from the 'users' table using Drizzle ORM's `findMany` method. The example also provides the inferred TypeScript result type for the query, showing the structure of the returned data.

```typescript
const users = await db.query.users.findMany();

// result type
const result: {
	id: number;
	name: string;
	verified: boolean;
	invitedBy: number | null;
}[];
```

--------------------------------

### Configure Database URL in .env File

Source: https://orm.drizzle.team/docs/get-started/bun-sql-new

Create a `.env` file at the project root to store the database connection string. This environment variable will be used by the application to connect to the database.

```env
DATABASE_URL=
```

--------------------------------

### Configure Database Provider Navigation Data

Source: https://orm.drizzle.team/docs/get-started/bun-sql-existing

Defines configuration object for database provider selection in Drizzle ORM documentation. Contains metadata for current provider (Bun SQL) and flat list of all supported providers with paths for existing and new database setups, along with icon assets for light and dark themes.

```JavaScript
(function(){
  const currentItem = {
    "name": "Bun SQL",
    "path": {
      "existing": "/docs/get-started/bun-sql-existing",
      "new": "/docs/get-started/bun-sql-new"
    },
    "icon": {
      "light": {"path": "/public/svg/bun.svg", "style": {"width": 20}},
      "dark": {"path": "/public/svg/bun.svg", "style": {"width": 20}}
    }
  };
  
  const flatItems = [
    {"name": "PostgreSQL", "path": {"existing": "/docs/get-started/postgresql-existing", "new": "/docs/get-started/postgresql-new"}, "icon": {"light": {"path": "/public/svg/postgresql.svg", "style": {"width": 20}}, "dark": {"path": "/public/svg/postgresql.svg", "style": {"width": 20, "fill": "#f0f0f0"}}}},
    {"name": "Neon", "path": {"existing": "/docs/get-started/neon-existing", "new": "/docs/get-started/neon-new"}, "icon": {"light": {"path": "/public/svg/neon-light.svg", "style": {"width": 20}}, "dark": {"path": "/public/svg/neon-dark.svg", "style": {"width": 20}}}},
    {"name": "MySQL", "path": {"existing": "/docs/get-started/mysql-existing", "new": "/docs/get-started/mysql-new"}, "icon": {"light": {"path": "/public/svg/mysql.svg", "style": {"width": 20}}, "dark": {"path": "/public/svg/mysql.svg", "style": {"width": 20}}}}
  ];
});
```

--------------------------------

### Apply CSS Styles for Learn Page and Custom Tables

Source: https://orm.drizzle.team/docs/get-started/d1-new

This CSS snippet defines styles for the learn page's title block, tutorial sections, and custom tables. It includes responsive adjustments for screens smaller than 767px, applying specific border and layout changes, and dark mode styling for the title block.

```css
text-decoration-style:dotted;text-underline-offset:1px}.learn__title-block[data-astro-cid-tj2r2qim]{display:flex;flex-direction:column;flex-shrink:0;width:100%}@media (max-width:767px){html.dark .learn__title-block[data-astro-cid-tj2r2qim]{border-left:none}.learn__title-block[data-astro-cid-tj2r2qim]{border:none;display:flex;flex-direction:column;flex-shrink:0;margin:0;max-width:920px;width:100%}.tutorials_title[data-astro-cid-tj2r2qim]{font-size:24px;font-weight:700;letter-spacing:-.48px;line-height:31.2px;margin-bottom:16px}.tutorials__section_title[data-astro-cid-tj2r2qim]{color:#303030;font-size:20px;font-weight:600;letter-spacing:-.48px;line-height:31.2px}.tutotials__section[data-astro-cid-tj2r2qim]{display:flex;flex-direction:column;margin-bottom:32px;margin-top:0}} .custom-table tbody,.custom-table thead{display:flex;flex-direction:column}.custom-table tr{display:flex;flex:1}.custom-table td,.custom-table th{flex:1}
```

--------------------------------

### Define Default Column Values (MSSQL)

Source: https://orm.drizzle.team/docs/indexes-constraints

Illustrates how to define default values for columns in MSSQL using Drizzle ORM and raw SQL. It includes examples for integer and text data types, showing both numeric and string literal defaults.

```typescript
import { sql } from "drizzle-orm";
import { int, text, mssqlTable } from "drizzle-orm/mssql-core";

const table = mssqlTable("table", {
  int: int().default(42),
  description: text().default(`This is your dashboard!`),
});
```

```sql
CREATE TABLE [table] (
  [int] int DEFAULT 42,
  [description] text DEFAULT 'This is your dashboard!'
);
```

--------------------------------

### Setup Drizzle Migrations in Expo/React Native App

Source: https://orm.drizzle.team/docs/connect-expo-sqlite

Initialize Drizzle ORM with Expo SQLite database and run migrations on app startup using the useMigrations hook. Handles migration states including loading, success, and error scenarios. Requires drizzle-orm, expo-sqlite packages and a pre-generated migrations.js file.

```typescript
import { drizzle } from "drizzle-orm/expo-sqlite";
import { openDatabaseSync } from "expo-sqlite";
import { useMigrations } from 'drizzle-orm/expo-sqlite/migrator';
import migrations from './drizzle/migrations';

const expoDb = openDatabaseSync("db.db");

const db = drizzle(expoDb);

export default function App() {
  const { success, error } = useMigrations(db, migrations);

  if (error) {
    return (
      <View>
        <Text>Migration error: {error.message}</Text>
      </View>
    );
  }

  if (!success) {
    return (
      <View>
        <Text>Migration is in progress...</Text>
      </View>
    );
  }

  return ...your application component;
}
```

--------------------------------

### Define Composite Primary Key - CockroachDB

Source: https://orm.drizzle.team/docs/indexes-constraints

Create a composite primary key in CockroachDB using Drizzle ORM. The example demonstrates table definitions with single primary keys using CockroachDB-specific integer types.

```TypeScript
import { int4, text, primaryKey, cockroachTable } from "drizzle-orm/cockroach-core";

export const user = cockroachTable("user", {
  id: int4().primaryKey(),
  name: text(),
});

export const book = cockroachTable("book", {
  id: int4("id").primaryKey(),
  name: text("name"),
});
```

--------------------------------

### Configure Drizzle Kit with Turso Database

Source: https://orm.drizzle.team/docs/tutorials/drizzle-with-turso

Set up Drizzle configuration file that specifies schema location, migration output directory, database dialect, and connection credentials. Uses environment variables for secure credential management with Turso database.

```typescript
import { config } from 'dotenv';
import { defineConfig } from 'drizzle-kit';

config({ path: '.env' });

export default defineConfig({
  schema: './src/db/schema.ts',
  out: './migrations',
  dialect: 'turso',
  dbCredentials: {
    url: process.env.TURSO_CONNECTION_URL!,
    authToken: process.env.TURSO_AUTH_TOKEN!,
  },
});
```

--------------------------------

### CRUD Operations with Drizzle ORM TypeScript

Source: https://orm.drizzle.team/docs/get-started/singlestore-new

Complete example demonstrating Create, Read, Update, and Delete operations on a users table using Drizzle ORM with SingleStore database. Includes type-safe insert operations, select queries, conditional updates using eq(), and deletion with where clauses.

```typescript
import 'dotenv/config';
import { drizzle } from 'drizzle-orm/singlestore';
import { eq } from 'drizzle-orm';
import { usersTable } from './db/schema';
  
const db = drizzle(process.env.DATABASE_URL!);

async function main() {
  const user: typeof usersTable.$inferInsert = {
    name: 'John',
    age: 30,
    email: '[email protected]',
  };

  await db.insert(usersTable).values(user);
  console.log('New user created!')

  const users = await db.select().from(usersTable);
  console.log('Getting all users from the database: ', users)
  /*
  const users: {
    id: number;
    name: string;
    age: number;
    email: string;
  }[]
  */

  await db
    .update(usersTable)
    .set({
      age: 31,
    })
    .where(eq(usersTable.email, user.email));
  console.log('User info updated!')

  await db.delete(usersTable).where(eq(usersTable.email, user.email));
  console.log('User deleted!')
}

main();
```

--------------------------------

### Configure Hidden Separator Middleware

Source: https://orm.drizzle.team/docs/guides/postgresql-local-setup

Sets up middleware configuration for handling hidden separators in Drizzle ORM. This snippet demonstrates how to register a middleware handler that processes hidden-separator events. The configuration uses a callback pattern to handle separator logic.

```javascript
{
  // middleware configuration
  "hidden-separator": function() {
    // separator handling logic
  }
}
```

--------------------------------

### Initialize Local Storage and Handle Astro Page Events

Source: https://orm.drizzle.team/docs/connect-drizzle-proxy

This JavaScript code initializes `packageManager` and `expandedSections` from local storage, applying a default theme on load. It sets up event listeners for Astro page lifecycle events (`astro:page-load`, `astro:after-swap`), browser history changes (`popstate`), and link clicks to manage UI state, specifically clearing `sidebar-scroll` in local storage.

```javascript
let packageManager = localStorage.getItem("package-manager") || "npm";
let expandedSections = localStorage.getItem("expandedSections") ? JSON.parse(localStorage.getItem("expandedSections")) : [];

setPreference(getColorPreference());

document.addEventListener("astro:page-load", () => setPreference(getColorPreference()));
document.addEventListener("astro:after-swap", () => setPreference(getColorPreference()));

const [navigationEntry] = performance.getEntriesByType("navigation");
if (navigationEntry && navigationEntry.type !== "reload") {
  localStorage.removeItem("sidebar-scroll");
}

window.addEventListener("popstate", () => {
  localStorage.removeItem("sidebar-scroll");
});

document.addEventListener("click", function (event) {
  const target = event.target.closest("a");
  if (!target || !target.href) return;
  const isSideBarElement = target && target.href && (target.getAttribute("data-nav-index") || target.getAttribute("data-slug"));
  if (!isSideBarElement && target.hostname === window.location.hostname) {
    localStorage.removeItem("sidebar-scroll");
  }
});
```

--------------------------------

### Transaction with Relational Queries in Drizzle ORM

Source: https://orm.drizzle.team/docs/transactions

Use Drizzle's relational query builder within transactions for complex queries with relationships. This example demonstrates querying users with their associated accounts using the relational query API.

```typescript
const db = drizzle({ schema })

await db.transaction(async (tx) => {
  await tx.query.users.findMany({
    with: {
      accounts: true
    }
  });
});
```

--------------------------------

### Apply simple equality filter in Drizzle ORM and SQL

Source: https://orm.drizzle.team/docs/rqb-v2

Demonstrates filtering users where the 'age' column is exactly 15. This example shows a basic equality condition using Drizzle ORM's `findMany` method and its corresponding SQL `WHERE` clause.

```typescript
const response = db.query.users.findMany({
  where: {
    age: 15,
  },
});
```

```sql
select "users"."id" as "id", "users"."name" as "name"
from "users" 
where ("users"."age" = 15)
```

--------------------------------

### Initialize Algolia DocSearch and Inkeep Chat Widget in JavaScript

Source: https://orm.drizzle.team/docs/drizzle-kit-migrate

This JavaScript code initializes two third-party widgets: Algolia DocSearch for documentation search and an Inkeep chat widget. It configures DocSearch with application ID, API key, and index name, and sets up the Inkeep chat button with various display and theme settings, including dynamic theme detection. It also handles theme persistence using `localStorage`.

```javascript
docsearch({ container: '#docsearch', appId: "MXZNUT59HV", apiKey: "7c390e262ac8858df0b6624d01d9dfef", indexName: "orm-drizzle", placeholder: "Search documentation...", }); let themeName = localStorage.getItem('theme'); if(themeName === 'system') { themeName = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'; } const properties = { stylesheetUrls: ['/inkeep-styles.css'], chatButtonType: 'ICON\_TEXT', isPositionFixed: false, baseSettings: { apiKey: '4f4da4a5733032ef8ff23e3b7906954877fd0ee54d58d1e0', integrationId: 'clpbm8p9y002ns601vbbswj5i', organizationId: 'clog94xy50001s601yapu7swn', organizationDisplayName: 'Drizzle ORM', primaryBrandColor: '#FFFFFF', theme: { colorMode: { forcedColorMode: themeName, }, }, }, style: {visibility: 'visible'}, modalSettings: { areOpenHotKeysDisabled: true, }, aiChatSettings: { botAvatarSrcUrl: '/svg/drizzle.svg', } } //@ts-ignore const inkeepWidget = Inkeep().embed({ componentType: "ChatButton", targetElement: document.getElementById("custom-button"), properties, }); window.inkeepWidget = inkeepWidget;
```

--------------------------------

### Execute a `findMany` Query with Drizzle ORM (TypeScript)

Source: https://orm.drizzle.team/docs/rqb

This example demonstrates how to use Drizzle ORM's `_query.users.findMany()` method to retrieve multiple records from the 'users' table. It also illustrates the inferred TypeScript return type for the query result, showing the structure of the fetched user objects.

```typescript
const users = await db._query.users.findMany();
```

```typescript
const result: {
	id: number;
	name: string;
	verified: boolean;
	invitedBy: number | null;
}[];
```

--------------------------------

### Define Default Column Values (SQLite)

Source: https://orm.drizzle.team/docs/indexes-constraints

Shows how to apply default values to columns in SQLite using Drizzle ORM and raw SQL. It includes examples for integer types, demonstrating both simple constant defaults and defaults derived from SQL functions like `abs()`.

```typescript
import { sql } from "drizzle-orm";
import { integer, sqliteTable } from "drizzle-orm/sqlite-core";

const table = sqliteTable('table', {
  int1: integer('int1').default(42),
  int2: integer('int2').default(sql`(abs(42))`)
});
```

```sql
CREATE TABLE `table` (
  `int1` integer DEFAULT 42,
  `int2` integer DEFAULT (abs(42))
);
```

--------------------------------

### Get Color Preference - JavaScript

Source: https://orm.drizzle.team/docs/connect-bun-sql

Retrieves the user's theme preference from localStorage, with fallback to system preference detection. Returns 'light', 'dark', or 'system' string value. Checks localStorage first, then queries matchMedia for system preference if not set.

```javascript
const getColorPreference = () => {
  let preference = localStorage.getItem("theme");
  if (preference === "system") {
    return preference;
  }
  if (!preference) {
    preference = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  return preference;
};
```

--------------------------------

### Initialize Drizzle with better-sqlite3 and execute query

Source: https://orm.drizzle.team/docs/get-started-sqlite

Creates a Drizzle database instance using better-sqlite3 driver with environment variable configuration. Executes a simple SELECT query. Requires DATABASE_URL environment variable pointing to SQLite database file.

```TypeScript
import { drizzle } from 'drizzle-orm/better-sqlite3';

const db = drizzle(process.env.DATABASE_URL);

const result = await db.execute('select 1');
```

--------------------------------

### Join SQL Chunks with Custom Separator in TypeScript

Source: https://orm.drizzle.team/docs/sql

Demonstrates how to build dynamic SQL queries by pushing multiple SQL chunks into an array and joining them with a custom separator using sql.join(). This approach is useful for constructing complex WHERE clauses with conditional logic. The example shows building a query with multiple OR conditions, where parameters are automatically parameterized.

```typescript
const sqlChunks: SQL[] = [];

sqlChunks.push(sql`select * from users`);

// some logic

sqlChunks.push(sql`where`);

// some logic

for (let i = 0; i < 5; i++) {
	sqlChunks.push(sql`id = ${i}`);

	if (i === 4) continue;
	sqlChunks.push(sql`or`);
}

const finalSql: SQL = sql.join(sqlChunks, sql.raw(' '));
```

--------------------------------

### Define Default Column Values (SingleStore)

Source: https://orm.drizzle.team/docs/indexes-constraints

Provides examples for setting default column values in SingleStore using Drizzle ORM and raw SQL. It covers integer and time data types, demonstrating how to specify default values including SQL cast expressions.

```typescript
import { sql } from "drizzle-orm";
import { int, time, singlestoreTable } from "drizzle-orm/singlestore-core";

const table = singlestoreTable("table", {
  int: int("int").default(42),
  time: time("time").default(sql`cast("14:06:10" AS TIME)`),
});
```

```sql
CREATE TABLE `table` (
  `int` int DEFAULT 42,
  `time` time DEFAULT cast("14:06:10" AS TIME)
);
```

--------------------------------

### Configure Drizzle ORM Read Replicas for MySQL

Source: https://orm.drizzle.team/docs/read-replicas

This example illustrates configuring Drizzle ORM with read replicas for a MySQL database. It defines a `usersTable` schema and establishes connections for a primary database and several read replicas using `mysql2/promise`, integrating them via `withReplicas()` for read/write separation.

```typescript
import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
import { boolean, mysqlTable, serial, text, withReplicas } from 'drizzle-orm/mysql-core';

const usersTable = mysqlTable('users', {
	id: serial('id' as string).primaryKey(),
	name: text('name').notNull(),
	verified: boolean('verified').notNull().default(false),
});

const primaryClient = await mysql.createConnection({
  host: "host",
  user: "user",
  database: "primary_db",
})
const primaryDb = drizzle({ client: primaryClient });

const read1Client = await mysql.createConnection({
  host: "host",
  user: "user",
  database: "read_1",
})
const read1 = drizzle({ client: read1Client });

const read2Client = await mysql.createConnection({
  host: "host",
  user: "user",
  database: "read_2",
})
const read2 = drizzle({ client: read2Client });

const db = withReplicas(primaryDb, [read1, read2]);
```

--------------------------------

### Database Providers Configuration Array

Source: https://orm.drizzle.team/docs/get-started/sqlite-cloud-new

Defines an array of database provider configurations for Drizzle ORM including PostgreSQL, Neon, Vercel Postgres, Supabase, and others. Each provider includes name, documentation paths for existing and new database setups, and theme-specific icon styling. Used to populate database selection UI.

```JavaScript
const flatItems = [
  {
    "name": "PostgreSQL",
    "path": {
      "existing": "/docs/get-started/postgresql-existing",
      "new": "/docs/get-started/postgresql-new"
    },
    "icon": {
      "light": {
        "path": "/public/svg/postgresql.svg",
        "style": {"width": 20}
      },
      "dark": {
        "path": "/public/svg/postgresql.svg",
        "style": {"width": 20, "fill": "#f0f0f0"}
      }
    }
  },
  {
    "name": "Neon",
    "path": {
      "existing": "/docs/get-started/neon-existing",
      "new": "/docs/get-started/neon-new"
    },
    "icon": {
      "light": {
        "path": "/public/svg/neon-light.svg",
        "style": {"width": 20}
      },
      "dark": {
        "path": "/public/svg/neon-dark.svg",
        "style": {"width": 20}
      }
    }
  }
];
```

--------------------------------

### Drizzle ORM Prepared Statement with Multiple Placeholders (JavaScript)

Source: https://orm.drizzle.team/docs/rqb

This JavaScript snippet demonstrates how to create Drizzle ORM prepared statements using multiple `placeholder()` calls for dynamic query parameters. It defines a complex `findMany` query on a `users` table, including nested `posts` with their own placeholders. The examples show both named (`prepare('query_name')`) and unnamed (`prepare()`) prepared statements, which are then executed with a map of parameter values. This approach optimizes query execution by pre-compiling the query plan and reusing it with different inputs for PostgreSQL, MySQL, and SQLite.

```javascript
const prepared = db._query.users.findMany({
	limit: placeholder('uLimit'),
	offset: placeholder('uOffset'),
	where: ((users, { eq, or }) => or(eq(users.id, placeholder('id')), eq(users.id, 3))),
	with: {
		posts: {
			where: ((users, { eq }) => eq(users.id, placeholder('pid'))),
			limit: placeholder('pLimit'),
		},
	},
}).prepare('query_name');

const usersWithPosts = await prepared.execute({ pLimit: 1, uLimit: 3, uOffset: 1, id: 2, pid: 6 });
```

```javascript
const prepared = db._query.users.findMany({
	limit: placeholder('uLimit'),
	offset: placeholder('uOffset'),
	where: ((users, { eq, or }) => or(eq(users.id, placeholder('id')), eq(users.id, 3))),
	with: {
		posts: {
			where: ((users, { eq }) => eq(users.id, placeholder('pid'))),
			limit: placeholder('pLimit'),
		},
	},
}).prepare();

const usersWithPosts = await prepared.execute({ pLimit: 1, uLimit: 3, uOffset: 1, id: 2, pid: 6 });
```

```javascript
const prepared = db._query.users.findMany({
	limit: placeholder('uLimit'),
	offset: placeholder('uOffset'),
	where: ((users, { eq, or }) => or(eq(users.id, placeholder('id')), eq(users.id, 3))),
	with: {
		posts: {
			where: ((users, { eq }) => eq(users.id, placeholder('pid'))),
			limit: placeholder('pLimit'),
		},
	},
}).prepare();

const usersWithPosts = await prepared.execute({ pLimit: 1, uLimit: 3, uOffset: 1, id: 2, pid: 6 });
```

--------------------------------

### Perform Drizzle ORM CRUD operations with TypeScript and Neon HTTP

Source: https://orm.drizzle.team/docs/get-started/neon-new

This TypeScript example demonstrates how to connect to a database using Drizzle ORM with the `neon-http` driver. It includes operations to insert a new user, select all users, update an existing user's age, and delete a user from the `usersTable`.

```typescript
import 'dotenv/config';
import { drizzle } from 'drizzle-orm/neon-http';
import { eq } from 'drizzle-orm';
import { usersTable } from './db/schema';
  
const db = drizzle(process.env.DATABASE_URL!);

async function main() {
  const user: typeof usersTable.$inferInsert = {
    name: 'John',
    age: 30,
    email: '[email protected]',
  };

  await db.insert(usersTable).values(user);
  console.log('New user created!')

  const users = await db.select().from(usersTable);
  console.log('Getting all users from the database: ', users)
  /*
  const users: {
    id: number;
    name: string;
    age: number;
    email: string;
  }[]
  */

  await db
    .update(usersTable)
    .set({
      age: 31,
    })
    .where(eq(usersTable.email, user.email));
  console.log('User info updated!')

  await db.delete(usersTable).where(eq(usersTable.email, user.email));
  console.log('User deleted!')
}

main();
```

--------------------------------

### Configure Drizzle Database Connection with Encore

Source: https://orm.drizzle.team/docs/tutorials/drizzle-with-encore

Initializes SQLDatabase with Encore, configures Drizzle ORM with PostgreSQL connection string, and specifies Drizzle as the migration source. Encore automatically provisions PostgreSQL locally via Docker and in cloud deployments.

```TypeScript
import { SQLDatabase } from "encore.dev/storage/sqldb";
import { drizzle } from "drizzle-orm/node-postgres";
import * as schema from "./schema";

const db = new SQLDatabase("mydb", {
  migrations: {
    path: "migrations",
    source: "drizzle",
  },
});

export const orm = drizzle(db.connectionString, { schema });
```

--------------------------------

### Configure Drizzle ORM Connection in index.ts (TypeScript)

Source: https://orm.drizzle.team/docs/get-started/turso-new

This example shows how to initialize a Drizzle ORM connection in an `index.ts` file. It uses `dotenv/config` to load environment variables for the Turso database URL and authentication token, directly configuring the `drizzle` instance.

```typescript
import 'dotenv/config';
import { drizzle } from 'drizzle-orm/libsql';

// You can specify any property from the libsql connection options
const db = drizzle({ 
  connection: { 
    url: process.env.TURSO_DATABASE_URL!,
    authToken: process.env.TURSO_AUTH_TOKEN!
  }
});
```

--------------------------------

### Database Provider Configuration Object

Source: https://orm.drizzle.team/docs/get-started/cockroach-new

Defines configuration structure for CockroachDB database provider including navigation paths for new and existing database setups, plus icon assets for light and dark themes with styling properties for UI rendering.

```JavaScript
const currentItem = {
  "name": "CockroachDB",
  "path": {
    "existing": "/docs/get-started/cockroach-existing",
    "new": "/docs/get-started/cockroach-new"
  },
  "icon": {
    "light": {
      "path": "/public/svg/cockroachdb-light.png",
      "style": {
        "style": "border-radius: 5px",
        "width": "24px"
      }
    },
    "dark": {
      "path": "/public/svg/cockroachdb-dark.png",
      "style": {
        "style": "border-radius: 5px",
        "width": "24px"
      }
    }
  }
};
```

--------------------------------

### Database Configuration Array with Provider Metadata

Source: https://orm.drizzle.team/docs/get-started/planetscale-postgres-new

Defines a comprehensive array of database providers with routing paths, icons, and styling for light/dark themes. Each provider includes separate routes for existing and new database setups, along with SVG icon assets and custom styling properties.

```JavaScript
const databases = [
  {
    "name": "MySQL",
    "path": {
      "existing": "/docs/get-started/mysql-existing",
      "new": "/docs/get-started/mysql-new"
    },
    "icon": {
      "light": {
        "path": "/public/svg/mysql.svg",
        "style": {"width": 20, "fill": "#00546B"}
      },
      "dark": {
        "path": "/public/svg/mysql.svg",
        "style": {"width": 20, "fill": "#F0F0F0"}
      }
    }
  },
  {
    "name": "PostgreSQL",
    "path": {
      "existing": "/docs/get-started/postgres-existing",
      "new": "/docs/get-started/postgres-new"
    }
  }
];
```

--------------------------------

### Database Provider Configuration Array - JavaScript

Source: https://orm.drizzle.team/docs/get-started/bun-sqlite-new

Defines an array of supported database providers with their documentation paths and icon assets for light/dark themes. Each provider includes existing and new database setup documentation routes and styled SVG/PNG icons.

```javascript
const databases = [
  {
    "name": "MySQL",
    "path": {
      "existing": "/docs/get-started/mysql-existing",
      "new": "/docs/get-started/mysql-new"
    },
    "icon": {
      "light": {"path": "/public/svg/mysql.svg", "style": {"width": 20, "fill": "#00546B"}},
      "dark": {"path": "/public/svg/mysql.svg", "style": {"width": 20, "fill": "#F0F0F0"}}
    }
  },
  {
    "name": "PostgreSQL",
    "path": {
      "existing": "/docs/get-started/postgres-existing",
      "new": "/docs/get-started/postgres-new"
    }
  },
  {
    "name": "SQLite",
    "path": {
      "existing": "/docs/get-started/sqlite-existing",
      "new": "/docs/get-started/sqlite-new"
    }
  }
];
```

--------------------------------

### Initialize Drizzle ORM Connection with libSQL Drivers (TypeScript)

Source: https://orm.drizzle.team/docs/get-started/turso-new

This section demonstrates how to establish a database connection using Drizzle ORM with various `@libsql/client` drivers. It covers the default, node, web, http, ws, and wasm driver variants, showing how to pass connection details via environment variables.

```typescript
import { drizzle } from 'drizzle-orm/libsql';

const db = drizzle({ connection: {
  url: process.env.DATABASE_URL, 
  authToken: process.env.DATABASE_AUTH_TOKEN 
}});
```

```typescript
import { drizzle } from 'drizzle-orm/libsql/node';

const db = drizzle({ connection: {
  url: process.env.DATABASE_URL, 
  authToken: process.env.DATABASE_AUTH_TOKEN 
}});
```

```typescript
import { drizzle } from 'drizzle-orm/libsql/web';

const db = drizzle({ connection: {
  url: process.env.DATABASE_URL, 
  authToken: process.env.DATABASE_AUTH_TOKEN 
}});
```

```typescript
import { drizzle } from 'drizzle-orm/libsql/http';

const db = drizzle({ connection: {
  url: process.env.DATABASE_URL, 
  authToken: process.env.DATABASE_AUTH_TOKEN 
}});
```

```typescript
import { drizzle } from 'drizzle-orm/libsql/ws';

const db = drizzle({ connection: {
  url: process.env.DATABASE_URL, 
  authToken: process.env.DATABASE_AUTH_TOKEN 
}});
```

```typescript
import { drizzle } from 'drizzle-orm/libsql/wasm';

const db = drizzle({ connection: {
  url: process.env.DATABASE_URL, 
  authToken: process.env.DATABASE_AUTH_TOKEN 
}});
```

--------------------------------

### Implement Dynamic Client-Side Theme Management with JavaScript

Source: https://orm.drizzle.team/docs/connect-neon

This JavaScript code provides a robust system for managing user interface themes (dark, light, system). It includes a `transitionManager` to temporarily disable CSS transitions during theme changes, `setPreference` to apply the chosen theme to the document and persist it in local storage, and `getColorPreference` to retrieve the current theme. It also integrates with Astro's page load events to ensure theme consistency across navigations.

```javascript
const transitionManager = () => {
    const style = document.createElement("style");
    const css = document.createTextNode("* { -webkit-transition: none !important; -moz-transition: none !important; -o-transition: none !important; -ms-transition: none !important; transition: none !important; }");
    style.appendChild(css);
    const enable = () => document.head.removeChild(style);
    const disable = () => document.head.appendChild(style);
    return { enable, disable, style };
};

const setPreference = (themeName) => {
    const transitions = transitionManager();
    transitions.disable();
    localStorage.setItem("theme", themeName);
    if (!document.firstElementChild) return;
    if (themeName === "system") {
        themeName = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    document.firstElementChild.classList.toggle("dark", themeName === "dark");
    document.firstElementChild.classList.toggle(
        "light", themeName !== "dark",
    );
    document.firstElementChild.setAttribute(
        "style", themeName === "dark" ? "color-scheme: dark" : "color-scheme: light",
    );
    window.getComputedStyle(transitions.style).opacity; // Force reflow
    transitions.enable();
};

const getColorPreference = () => {
    let preference = localStorage.getItem("theme");
    if (preference === "system") {
        return preference;
    }
    if (!preference) {
        preference = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    return preference;
};

setPreference(getColorPreference());

document.addEventListener("astro:page-load", () => setPreference(getColorPreference()));
document.addEventListener("astro:after-swap", () => setPreference(getColorPreference()));
```

--------------------------------

### Insert Row and Output Result - Drizzle ORM MSSQL

Source: https://orm.drizzle.team/docs/delete

Insert a row into the database and retrieve the inserted row data using the output() method. This example inserts a new user and returns the complete inserted row. Supported in MSSQL.

```TypeScript
await db.insert(users).values({ name: "Dan" }).output();
```

--------------------------------

### Initialize Drizzle ORM with Bun SQL Driver

Source: https://orm.drizzle.team/docs/connect-bun-sql

Sets up Drizzle ORM instance using Bun's native SQL module for PostgreSQL connections. Supports both automatic driver initialization from DATABASE_URL environment variable and manual client instantiation for advanced configurations.

```JavaScript
import 'dotenv/config';
import { drizzle } from 'drizzle-orm/bun-sql';

const db = drizzle(process.env.DATABASE_URL);

const result = await db.select().from(...);
```

```JavaScript
import 'dotenv/config';
import { drizzle } from 'drizzle-orm/bun-sql';
import { SQL } from 'bun';

const client = new SQL(process.env.DATABASE_URL!);
const db = drizzle({ client });
```

--------------------------------

### Example Drizzle ORM Generated SQL Migration

Source: https://orm.drizzle.team/docs/drizzle-kit-migrate

This SQL snippet represents a migration file generated by Drizzle Kit. It creates a `users` table with an auto-incrementing `id` as the primary key and a `name` column, reflecting the schema defined in `src/schema.ts`.

```sql
-- ./drizzle/0000_init.sql

CREATE TABLE "users"(
  id serial primary key,
  name text
)
```

--------------------------------

### Initialize Drizzle ORM with OP-SQLite

Source: https://orm.drizzle.team/docs/connect-op-sqlite

Sets up Drizzle ORM database instance with OP-SQLite driver. Opens a SQLite database connection and wraps it with Drizzle for type-safe query building. Demonstrates basic select query execution from a users table.

```typescript
import { drizzle } from "drizzle-orm/op-sqlite";
import { open } from '@op-engineering/op-sqlite';

const opsqlite = open({
  name: 'myDB',
});
const db = drizzle(opsqlite);

await db.select().from(users);
```

--------------------------------

### Handle Database Selection and Navigation in JavaScript

Source: https://orm.drizzle.team/docs/get-started/pglite-new

This JavaScript code defines a list of database configurations and implements event listeners for two HTML select elements. It dynamically adjusts the width of the select elements based on their content and redirects the user to a specific documentation URL ('new' or 'existing' setup) determined by their database and type selections. Note: The 'currentItem' variable used in the 'dbTypeSelect' listener is not defined within this snippet and would need to be provided by the surrounding context.

```javascript
const flatItems = [{"name":"PlanetScale","path":{"existing":"/docs/get-started/planetscale-existing","new":"/docs/get-started/planetscale-new"},"icon":{"light":{"path":"/public/svg/planetscale.svg","style":{"width":20
```

--------------------------------

### Pull PostgreSQL Docker Images (Docker)

Source: https://orm.drizzle.team/docs/guides/postgresql-local-setup

These Docker commands are used to download the PostgreSQL database image from Docker Hub. Users can pull the latest available version using `docker pull postgres` or specify a particular version tag, such as `docker pull postgres:15`, to ensure compatibility or specific feature sets. This is a prerequisite step for running a local PostgreSQL instance.

```bash
docker pull postgres
```

```bash
docker pull postgres:15
```

--------------------------------

### Create SQLite table with SQL

Source: https://orm.drizzle.team/docs/get-started/bun-sqlite-existing

Example SQL statement showing the structure of a users table with auto-incrementing primary key, text and integer columns, and a unique constraint on the email field. This represents the database schema that would be introspected by Drizzle Kit.

```sql
CREATE TABLE `users_table` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`age` integer NOT NULL,
	`email` text NOT NULL UNIQUE
);
```

--------------------------------

### Initialize Algolia DocSearch for Documentation

Source: https://orm.drizzle.team/docs/batch-api

This JavaScript snippet initializes the Algolia DocSearch library, integrating a powerful search bar into the documentation. It configures essential parameters such as the target container, Algolia application ID, API key, and the specific index name for Drizzle ORM documentation, enabling users to efficiently search content.

```javascript
docsearch({
  container: '#docsearch',
  appId: "MXZNUT59HV",
  apiKey: "7c390e262ac8858df0b6624d01d9dfef",
  indexName: "orm-drizzle",
  placeholder: "Search documentation..."
});
```

--------------------------------

### Define Database Integration Configuration in JavaScript

Source: https://orm.drizzle.team/docs/get-started/postgresql-new

This self-executing JavaScript function defines data structures for various database integrations, including PostgreSQL, Neon, and Vercel Postgres. Each object contains details like the database name, paths for "new" and "existing" database setups, and icon configurations for both light and dark themes. This data is likely used to dynamically render UI elements for database selection or configuration.

```javascript
(function(){const currentItem = {"name":"PostgreSQL","path":{"existing":"/docs/get-started/postgresql-existing","new":"/docs/get-started/postgresql-new"},"icon":{"light":{"path":"/public/svg/postgresql.svg","style":{"width":20}},"dark":{"path":"/public/svg/postgresql.svg","style":{"width":20,"fill":"#f0f0f0"}}}}; const flatItems = [{"name":"PostgreSQL","path":{"existing":"/docs/get-started/postgresql-existing","new":"/docs/get-started/postgresql-new"},"icon":{"light":{"path":"/public/svg/postgresql.svg","style":{"width":20}},"dark":{"path":"/public/svg/postgresql.svg","style":{"width":20,"fill":"#f0f0f0"}}}},{"name":"Neon","path":{"existing":"/docs/get-started/neon-existing","new":"/docs/get-started/neon-new"},"icon":{"light":{"path":"/public/svg/neon-light.svg","style":{"width":20}},"dark":{"path":"/public/svg/neon-dark.svg","style":{"width":20}}}},{"name":"Vercel Postgres","path":{"existing":"/docs/get-started/vercel-existing","new":"/docs/get-started/vercel-new"},"icon":{"light":{"path":"/public/svg/vercel.svg","style":{"width":20}},"dark":{"path":"/public/svg/vercel.svg","style":{"width":20,"fill":"#000000"}}}},{"name":"Supabase","path":{"existing":"/docs/get-started/supabase-existing","new":"/docs/get-started/supabase-new"},"icon":{"light":{"path":"/public/svg/supabase.svg","style":{"width":20}},"dark":{"path":"/public/svg/supabase.svg","style":{"width":20}}}},{"name":"Xata","path":{"existing":"/docs/get-started/xata-existing","new":"/docs/get-started/xata-new"},"icon":{"light":{"path":"/public/svg/xata.svg","style":{"width":26}},"dark":{"path":"/public/svg/xata.svg","style":{"width":26}}}},{"name":"PGLite","path":{"existing":"/docs/get-started/pglite-existing","new":"/docs/get-started/pglite-new"},"icon":{"light":{"path":"/public/svg/pglite.svg","style":{"width":26}},"dark":{"path":"/public/svg/pglite.svg","style":{"width":26}}}},{"name":"Nile","path":{"existing":"/docs/get-started/nile-existing","new":"/docs/get-started/nile-new"},"icon":{"light":{"path":"/public/svg/nile.svg"},"dark":{"path":"/public/svg/nile.svg"}}},{"name":"Bun SQL","path":{"existing":"/docs/get-started/bun-sql-existing","new":"/docs/get-started/bun-sql-new"},"icon":{"light":{"path":"/public/svg/bun.svg","style":{"width":20}},"dark":{"path":"/public/svg/bun.svg","style":{"width":20}}}},{"name":"Effect","path":{"existing":"/docs/get-started/effect-postgresql-existing","new":"/docs/get-started/effect-postgresql-new"},"icon":{"light":{"path":"/public/svg/effect_light.svg","style":{"width":20,"fill":"#f0f0f0"}},"dark":{"path":"/public/svg/effect.svg","style":{"width":20,"fill":"#f0f0f0"}}}},{"name":"PlanetScale Postgres","path":{"existing":"/docs/get-started/planetscale-postgres-existing","new":"/docs/get-started/planetscale-postgres-new"},"icon":{"light":{"path":"/public/svg/planetscale.svg","style":{"width":20}},"dark":{"path":"/public/svg/planetscale.svg","style":{"width":20,"color":"#f0f0f0"}}}},{"name":"Gel","path":{"existing":"/docs/get-started/gel-existing","new":"/docs/get-started/gel-new"},"icon":{"light":{"path":"/public/svg/gel_light.svg","style":{"style":"border-radius: 5px","width":34,"height":34}},"dark":{"path":"/public/svg/gel_dark.svg","style":{"style":"border-radius: 5px","width":34,"height":34}}}},{"name":"MySQL","path":{"existing":"/docs/get-started/mysql-exis
```

--------------------------------

### Import Environment Variables to Netlify

Source: https://orm.drizzle.team/docs/tutorials/drizzle-with-netlify-edge-functions-neon

Command to import environment variables from a local .env file into Netlify's environment variable system. Ensures sensitive configuration like database URLs are securely stored in Netlify.

```bash
netlify env:import .env
```

--------------------------------

### Setup Drizzle ORM with PostgreSQL in Netlify Edge Function

Source: https://orm.drizzle.team/docs/tutorials/drizzle-with-netlify-edge-functions-supabase

Configure Drizzle ORM to connect to a PostgreSQL database using the postgres-js driver within a Netlify Edge Function. This snippet initializes the database client, queries the users table, and returns the results as JSON. Requires DATABASE_URL environment variable and the usersTable schema to be defined.

```typescript
import type { Context } from "@netlify/edge-functions";
import { usersTable } from "./common/schema.ts";
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

export default async (request: Request, context: Context) => {
  const queryClient = postgres(Netlify.env.get("DATABASE_URL")!);
  const db = drizzle({ client: queryClient });

  const users = await db.select().from(usersTable);

  return new Response(JSON.stringify(users));
};
```

--------------------------------

### Complete CRUD Operations with Drizzle ORM TypeScript

Source: https://orm.drizzle.team/docs/get-started/gel-new

Full example demonstrating all CRUD operations (Create, Read, Update, Delete) in a single async function. Initializes Drizzle ORM with a gel client, performs sequential database operations, and logs results. Requires drizzle-orm and gel packages.

```typescript
import { eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/gel";
import { createClient } from "gel";
import { users } from "../drizzle/schema";

const gelClient = createClient();
const db = drizzle({ client: gelClient });

async function main() {
  const user: typeof users.$inferInsert = {
    name: "John",
    age: 30,
    email: "[email protected]"
  };

  await db.insert(users).values(user);
  console.log("New user created!");

  const usersResponse = await db.select().from(users);
  console.log("Getting all users from the database: ", usersResponse);

  await db
    .update(users)
    .set({
      age: 31
    })
    .where(eq(users.email, user.email));
  console.log("User info updated!");

  await db.delete(users).where(eq(users.email, user.email));
  console.log("User deleted!");
}

main();
```

--------------------------------

### Database Providers Array Configuration

Source: https://orm.drizzle.team/docs/get-started/cockroach-new

Comprehensive array of database provider configurations for Drizzle ORM including PostgreSQL, Neon, Vercel Postgres, Supabase, and others. Each provider includes navigation paths for new/existing database setups and theme-specific icon styling.

```JavaScript
const flatItems = [
  {
    "name": "PostgreSQL",
    "path": {
      "existing": "/docs/get-started/postgresql-existing",
      "new": "/docs/get-started/postgresql-new"
    },
    "icon": {
      "light": {
        "path": "/public/svg/postgresql.svg",
        "style": { "width": 20 }
      },
      "dark": {
        "path": "/public/svg/postgresql.svg",
        "style": { "width": 20, "fill": "#f0f0f0" }
      }
    }
  },
  {
    "name": "Neon",
    "path": {
      "existing": "/docs/get-started/neon-existing",
      "new": "/docs/get-started/neon-new"
    },
    "icon": {
      "light": {
        "path": "/public/svg/neon-light.svg",
        "style": { "width": 20 }
      },
      "dark": {
        "path": "/public/svg/neon-dark.svg",
        "style": { "width": 20 }
      }
    }
  }
];
```

--------------------------------

### Map TypeScript Keys Directly to Database Column Names in Drizzle

Source: https://orm.drizzle.team/docs/sql-schema-declaration

This example illustrates how Drizzle ORM automatically maps TypeScript property names to database column names when they are identical. It includes the schema definition, a Drizzle query to select from the table, and the corresponding SQL output generated by Drizzle.

```typescript
// schema.ts
import { integer, pgTable, varchar } from "drizzle-orm/pg-core";

export const users = pgTable('users', {
  id: integer(),
  first_name: varchar()
})
```

```typescript
// query.ts
await db.select().from(users);
```

```sql
SELECT "id", "first_name" from users;
```

--------------------------------

### Initialize Drizzle with node-postgres Driver

Source: https://orm.drizzle.team/docs/connect-prisma-postgres

Sets up Drizzle ORM connection using the node-postgres (pg) driver with Prisma Postgres. Creates a connection pool from DATABASE_URL environment variable and executes a test query to verify connectivity.

```JavaScript
// Make sure to install the 'pg' package
import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});
const db = drizzle({ client: pool });

const result = await db.execute('select 1');
```

--------------------------------

### Configure Drizzle ORM with MySQL Read Replicas

Source: https://orm.drizzle.team/docs/read-replicas

This snippet demonstrates how to establish connections to multiple read replicas using the `mysql` driver with Drizzle ORM. It shows how to create individual Drizzle instances for each replica using `mysql.createConnection` and then combine them with a primary instance using `withReplicas` for automatic read/write splitting. This setup is crucial for distributing read loads across multiple database instances.

```typescript
    const read1Client = await mysql.createConnection({
      host: "host",
      user: "user",
      database: "read_1",
    })
    const read1 = drizzle({ client: read1Client });
    
    const read2Client = await mysql.createConnection({
      host: "host",
      user: "user",
      database: "read_2",
    })
    const read2 = drizzle({ client: read2Client });
    
    const db = withReplicas(primaryDb, [read1, read2]);
```

--------------------------------

### Connect Drizzle ORM to OP-SQLite Database in React Native

Source: https://orm.drizzle.team/docs/get-started/op-sqlite-new

Initializes a connection to an OP-SQLite database instance and then wraps it with Drizzle ORM. This setup allows you to use Drizzle's powerful ORM capabilities with the `op-sqlite` driver in your React Native application.

```typescript
import { open } from '@op-engineering/op-sqlite';
import { drizzle } from 'drizzle-orm/op-sqlite';

const opsqliteDb = open({
  name: 'db',
});

const db = drizzle(opsqliteDb);
```

--------------------------------

### Prepare and Execute Drizzle ORM Query with `lower` and `like`

Source: https://orm.drizzle.team/docs/perf-queries

This example illustrates how to construct a Drizzle ORM prepared statement that uses SQL's `lower` function and `like` operator for case-insensitive pattern matching on a customer's name. The `sql.placeholder` function is used for parameterizing the `like` value. The prepared statement is then executed with a specific name pattern.

```typescript
const p2 = db
  .select()
  .from(customers)
  .where(sql`lower(${customers.name}) like ${sql.placeholder('name')}`)
  .prepare();

await p2.execute({ name: '%an%' }) // SELECT * FROM customers WHERE name ilike '%an%'
```

--------------------------------

### Transaction with Return Value in Drizzle ORM

Source: https://orm.drizzle.team/docs/transactions

Return computed values from transactions to access results after all operations complete. This example performs balance transfers and returns the updated balance of the receiving account.

```typescript
const db = drizzle(...)

const newBalance: number = await db.transaction(async (tx) => {
  await tx.update(accounts).set({ balance: sql`${accounts.balance} - 100.00` }).where(eq(users.name, 'Dan'));
  await tx.update(accounts).set({ balance: sql`${accounts.balance} + 100.00` }).where(eq(users.name, 'Andrew'));

  const [account] = await tx.select({ balance: accounts.balance }).from(accounts).where(eq(users.name, 'Dan'));
  return account.balance;
});
```

--------------------------------

### Define Primary Key for Column in Drizzle ORM and SQL

Source: https://orm.drizzle.team/docs/column-types/singlestore

This example demonstrates how to designate a column as a primary key. In Drizzle ORM, the `.primaryKey()` method is used, while in SQL, the `PRIMARY KEY` constraint is applied. Primary keys enforce uniqueness and non-nullability for the specified column.

```typescript
import { int, singlestoreTable } from "drizzle-orm/singlestore-core";

const table = singlestoreTable('table', {
	int: int().primaryKey(),
});
```

```sql
CREATE TABLE `table` (
	`int` int PRIMARY KEY NOT NULL
);
```

--------------------------------

### Initialize Drizzle with LibSQL Default Driver

Source: https://orm.drizzle.team/docs/connect-turso

Initialize Drizzle ORM using the default @libsql/client driver which automatically selects between node and web based on the build target. Requires DATABASE_URL and DATABASE_AUTH_TOKEN environment variables for authentication.

```javascript
import { drizzle } from 'drizzle-orm/libsql';

const db = drizzle({ connection: {
  url: process.env.DATABASE_URL, 
  authToken: process.env.DATABASE_AUTH_TOKEN 
}});
```

--------------------------------

### Define Composite Primary Key - SQLite

Source: https://orm.drizzle.team/docs/indexes-constraints

Create a composite primary key in SQLite using Drizzle ORM. The example shows a many-to-many relationship table with composite key configuration and optional custom naming.

```TypeScript
import { integer, text, primaryKey, sqliteTable} from "drizzle-orm/sqlite-core";

export const user = sqliteTable("user", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name"),
});

export const book = sqliteTable("book", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name"),
});

export const bookToAuthor = sqliteTable("book_to_author", {
  authorId: integer("author_id"),
  bookId: integer("book_id"),
}, (table) => [
  primaryKey({ columns: [table.bookId, table.authorId] }),
  // Or PK with custom name
  primaryKey({ name: 'custom_name', columns: [table.bookId, table.authorId] })
]);
```

```SQL
CREATE TABLE `book_to_author` (
  `author_id` integer,
  `book_id` integer,
  PRIMARY KEY(`book_id`, `author_id`)
);
```

--------------------------------

### Database Provider Configuration Array

Source: https://orm.drizzle.team/docs/get-started/cockroach-new

Defines an array of supported database providers with metadata including names, documentation paths for new and existing database setups, and light/dark theme icon styling. Each provider includes SVG or PNG icon paths with custom styling properties.

```JavaScript
const databases = [
  {
    "name": "MySQL",
    "path": {
      "existing": "/docs/get-started/mysql-existing",
      "new": "/docs/get-started/mysql-new"
    },
    "icon": {
      "light": {"path": "/public/svg/mysql.svg", "style": {"width": 20, "fill": "#00546B"}},
      "dark": {"path": "/public/svg/mysql.svg", "style": {"width": 20, "fill": "#F0F0F0"}}
    }
  },
  {
    "name": "PostgreSQL",
    "path": {"existing": "/docs/get-started/postgres-existing", "new": "/docs/get-started/postgres-new"},
    "icon": {"light": {"path": "/public/svg/postgres.svg"}, "dark": {"path": "/public/svg/postgres.svg"}}
  }
];
```

--------------------------------

### Generate Database Migrations with Drizzle Kit

Source: https://orm.drizzle.team/docs/tutorials/drizzle-with-turso

Generate SQL migration files from schema definitions using drizzle-kit command. Creates migration files in the migrations directory with SQL statements for table creation, constraints, and indexes. Stores schema snapshots in meta folder for tracking changes.

```sql
CREATE TABLE `posts` (
	`id` integer PRIMARY KEY NOT NULL,
	`title` text NOT NULL,
	`content` text NOT NULL,
	`user_id` integer NOT NULL,
	`created_at` text DEFAULT (CURRENT_TIMESTAMP) NOT NULL,
	`updated_at` integer,
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `users` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`age` integer NOT NULL,
	`email` text NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `users_email_unique` ON `users` (`email`);
```

--------------------------------

### Implement Average Distinct Aggregation in Drizzle ORM

Source: https://orm.drizzle.team/docs/select

Demonstrates how to compute the average of unique, non-null values for a column using the `avgDistinct` aggregation helper in Drizzle ORM. It provides the Drizzle query, its direct SQL equivalent, and an example using a raw `sql` template.

```typescript
import { avgDistinct } from 'drizzle-orm'

await db.select({ value: avgDistinct(users.id) }).from(users);
```

```sql
select avg(distinct "id") from "users";
```

```typescript
// It's equivalent to writing
await db.select({
  value: sql`avg(distinct ${users.id})`.mapWith(String)
}).from(users);
```

--------------------------------

### Create GIN Index on tsvector Column in SQL

Source: https://orm.drizzle.team/docs/guides/postgresql-full-text-search

SQL migration creating a GIN index on the posts table title column using to_tsvector for English language full-text search. Improves performance of full-text search queries.

```SQL
CREATE TABLE IF NOT EXISTS "posts" (
  "id" serial PRIMARY KEY NOT NULL,
  "title" text NOT NULL
);

CREATE INDEX IF NOT EXISTS "title_search_index" ON "posts"
  USING gin (to_tsvector('english', "title"));
```

--------------------------------

### Implement Sum Distinct Aggregation in Drizzle ORM

Source: https://orm.drizzle.team/docs/select

Demonstrates how to compute the sum of unique, non-null values for a column using the `sumDistinct` aggregation helper in Drizzle ORM. It provides the Drizzle query, its direct SQL equivalent, and an example using a raw `sql` template.

```typescript
import { sumDistinct } from 'drizzle-orm'

await db.select({ value: sumDistinct(users.id) }).from(users);
```

```sql
select sum(distinct "id") from "users";
```

```typescript
// It's equivalent to writing
await db.select({
  value: sql`sum(distinct ${users.id})`.mapWith(String)
}).from(users);
```

--------------------------------

### Use Subqueries in Extras for Aggregation

Source: https://orm.drizzle.team/docs/rqb-v2

Shows how to use subqueries within the extras property to perform aggregations like counting related records. The example retrieves users with their posts and includes a totalPostsCount field calculated using db.$count() with a condition matching posts to each user.

```typescript
import { posts } from './schema';
import { eq } from 'drizzle-orm';

await db.query.users.findMany({
  with: {
    posts: true
  },
  extras: {
    totalPostsCount: (table) => db.$count(posts, eq(posts.authorId, table.id)),
  }
});
```

--------------------------------

### Drizzle ORM PostgreSQL Table Schema

Source: https://orm.drizzle.team/docs/relations-v1-v2

Defines a PostgreSQL table schema with various column types including integers, text, timestamps, JSON, and arrays. Used as the foundation for the complex query examples.

```typescript
import { integer, jsonb, pgTable, text, timestamp } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: integer("id").primaryKey(),
  name: text("name"),
  email: text("email").notNull(),
  age: integer("age"),
  createdAt: timestamp("created_at").defaultNow(),
  lastLogin: timestamp("last_login"),
  subscriptionEnd: timestamp("subscription_end"),
  lastActivity: timestamp("last_activity"),
  preferences: jsonb("preferences"),
  interests: text("interests").array(),
});
```

--------------------------------

### Configure PostgreSQL Connection via Individual Parameters

Source: https://orm.drizzle.team/docs/drizzle-config-file

Connects to PostgreSQL using separate host, port, user, password, and database parameters. Allows fine-grained control over SSL settings and connection options.

```typescript
import { defineConfig } from 'drizzle-kit'

// via connection params
export default defineConfig({
  dialect: "postgresql",
  dbCredentials: {
    host: "host",
    port: 5432,
    user: "user",
    password: "password",
    database: "dbname",
    ssl: true, // can be boolean | "require" | "allow" | "prefer" | "verify-full" | options from node:tls
  }
});
```

--------------------------------

### Include Specific Roles for Drizzle Kit Management in TypeScript

Source: https://orm.drizzle.team/docs/drizzle-config-file

This example illustrates how to explicitly include specific roles, like an 'admin' role, for Drizzle Kit management. By listing roles in the `include` array within `entities.roles`, you ensure Drizzle Kit tracks these roles, even if they might otherwise be ignored.

```typescript
// drizzle.config.ts
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  ...
  entities: {
    roles: {
      include: ['admin']
    }
  }
});
```

--------------------------------

### Configure Order Details Table Seeding with Discount Logic

Source: https://orm.drizzle.team/docs/seed-overview

Defines mock data generation for order detail line items with pricing and discount information. Uses weighted random selection for discounts (50% from predefined array, 50% default zero value), integer ranges for quantities, and numeric ranges for unit prices. Demonstrates conditional data generation patterns.

```javascript
details: {
    columns: {
        unitPrice: funcs.number({ minValue: 10, maxValue: 130 }),
        quantity: funcs.int({ minValue: 1, maxValue: 130 }),
        discount: funcs.weightedRandom([
            { weight: 0.5, value: funcs.valuesFromArray({ values: discounts }) },
            { weight: 0.5, value: funcs.default({ defaultValue: 0 }) }
        ])
    }
}
```

--------------------------------

### Define Composite Primary Key - MSSQL

Source: https://orm.drizzle.team/docs/indexes-constraints

Create a composite primary key in MSSQL using Drizzle ORM. The example shows a many-to-many relationship table with composite key configuration and optional custom constraint naming.

```TypeScript
import { int, text, primaryKey, mssqlTable } from "drizzle-orm/mssql-core";

export const user = mssqlTable("user", {
  id: int().primaryKey(),
  name: text(),
});

export const book = mssqlTable("book", {
  id: int().primaryKey(),
  name: text(),
});

export const booksToAuthors = mssqlTable("books_to_authors", {
  authorId: int("author_id"),
  bookId: int("book_id"),
}, (table) => [
  primaryKey({ columns: [table.bookId, table.authorId] }),
  // Or PK with custom name
  primaryKey({ name: 'custom_name', columns: [table.bookId, table.authorId] }),
]);
```

```SQL
CREATE TABLE [books_to_authors] (
  [author_id] int,
  [book_id] int,
  CONSTRAINT [custom_name] PRIMARY KEY([book_id], [author_id])
);
```

--------------------------------

### Implement Dynamic Database Selection and Navigation in JavaScript

Source: https://orm.drizzle.team/docs/get-started/mysql-existing

This JavaScript code sets up event listeners for two dropdown elements, `db-select` and `db-type-select`, to handle user selections. When a database is chosen, it updates the dropdown's width dynamically and redirects the user to the corresponding documentation page based on the selected database and whether it's an 'existing' or 'new' setup. It relies on the `flatItems` array for navigation paths and DOM elements for interaction.

```javascript
const databaseType = "existing";
const dbSelect = document.getElementById('db-select');
const dbTypeSelect = document.getElementById('db-type-select');
const dbSelectResizer = document.getElementById('db-resizer');
const dbTypeSelectResizer = document.getElementById('db-type-resizer');

dbSelect.addEventListener('change', (e) => {
  dbSelectResizer.innerText = e.target.value;
  dbSelect.style.width = `${dbSelectResizer.offsetWidth}px`;
  window.location.href = flatItems.find(({name}) => name === e.target.value).path[databaseType];
});

dbTypeSelect.addEventListener('change', (e) => {
  dbTypeSelectResizer.innerText = e.target.value === 'new' ? 'New database' : 'Existing database';
  dbTypeSelect.style.width = `${dbTypeSelectResizer.offsetWidth}px`;
  window.location.href = currentItem.path[e.target.value];
});

dbSelect.style.width = `${dbSelectResizer.offsetWidth}px`;
dbTypeSelect.style.width
```

--------------------------------

### Executing Relational `findMany` Query with Drizzle ORM in TypeScript

Source: https://orm.drizzle.team/docs/rqb

This TypeScript example demonstrates how to perform a relational `findMany` query using Drizzle ORM. It queries `users` and eagerly loads their associated `posts` using the `with` clause, showcasing how to retrieve nested data efficiently from a PostgreSQL database.

```typescript
import * as schema from './schema';
import { drizzle } from 'drizzle-orm/...';

const db = drizzle({ schema });

const result = await db._query.users.findMany({
	with: {
		posts: true			
	},
});
```

--------------------------------

### Implement Limit/Offset Pagination in Drizzle ORM

Source: https://orm.drizzle.team/docs/guides/limit-offset-pagination

Demonstrates basic limit/offset pagination using Drizzle ORM with mandatory orderBy clause. Returns specified number of rows after skipping offset rows. Includes TypeScript example with PostgreSQL schema and resulting SQL query.

```typescript
import { asc } from 'drizzle-orm';
import { users } from './schema';

const db = drizzle(...);

await db
  .select()
  .from(users)
  .orderBy(asc(users.id)) // order by is mandatory
  .limit(4) // the number of rows to return
  .offset(4); // the number of rows to skip
```

```sql
select * from users order by id asc limit 4 offset 4;
```

--------------------------------

### Connect Drizzle ORM to Existing MySQL2 Client or Pool (JavaScript)

Source: https://orm.drizzle.team/docs/get-started-mysql

These examples illustrate how to integrate Drizzle ORM with an already established `mysql2/promise` client or connection pool. It highlights the flexibility of using existing connections and advises using a single client connection for DDL migrations.

```JavaScript
import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";

const connection = await mysql.createConnection({
  host: "host",
  user: "user",
  database: "database",
  ...
});

const db = drizzle({ client: connection });
```

```JavaScript
import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";

const poolConnection = mysql.createPool({
  host: "host",
  user: "user",
  database: "database",
  ...
});

const db = drizzle({ client: poolConnection });
```

--------------------------------

### Initialize Drizzle MySQL Proxy Driver

Source: https://orm.drizzle.team/docs/connect-drizzle-proxy

Sets up a Drizzle ORM instance using the MySQL proxy driver. Communicates with a proxy server via HTTP POST requests to execute SQL queries. Includes error handling and returns an empty rows array on failure.

```TypeScript
import { drizzle } from 'drizzle-orm/mysql-proxy';

const db = drizzle(async (sql, params, method) => {
  try {
    const rows = await axios.post('http://localhost:3000/query', { sql, params, method });

    return { rows: rows.data };
  } catch (e: any) {
    console.error('Error from mysql proxy server: ', e.response.data)
    return { rows: [] };
  }
});
```

--------------------------------

### Export Drizzle Kit schema using multiple configuration files via CLI

Source: https://orm.drizzle.team/docs/drizzle-kit-export

This snippet shows how to use `drizzle-kit export` with different configuration files for various environments (e.g., development, production). It demonstrates specifying the configuration file using the `--config` flag for `npm`, `yarn`, `pnpm`, and `bun` package managers.

```bash
npx drizzle-kit export --config=drizzle-dev.config.ts
npx drizzle-kit export --config=drizzle-prod.config.ts
```

```bash
yarn drizzle-kit export --config=drizzle-dev.config.ts
yarn drizzle-kit export --config=drizzle-prod.config.ts
```

```bash
pnpm drizzle-kit export --config=drizzle-dev.config.ts
pnpm drizzle-kit export --config=drizzle-prod.config.ts
```

```bash
bunx drizzle-kit export --config=drizzle-dev.config.ts
bunx drizzle-kit export --config=drizzle-prod.config.ts
```

--------------------------------

### Filter Drizzle ORM users who have at least one post

Source: https://orm.drizzle.team/docs/rqb-v2

This example illustrates how to find users who have at least one associated post using Drizzle ORM. It utilizes the `with` clause to include posts and a `where` clause on the `posts` relation to ensure only users with existing posts are returned.

```javascript
const response = db.query.users.findMany({
  with: {
    posts: true,
  },
  where: {
    posts: true,
  },
});
```

--------------------------------

### Count with Joins and Aggregations using Drizzle ORM (TypeScript/SQL)

Source: https://orm.drizzle.team/docs/guides/count-rows

This example illustrates how to perform counts across joined tables with Drizzle ORM, specifically counting cities per country. It utilizes `leftJoin()`, `groupBy()`, and `orderBy()` clauses to aggregate data and present it in a structured way. The equivalent SQL query is included for reference.

```typescript
import { count, eq } from 'drizzle-orm';
import { countries, cities } from './schema';

// Count cities in each country
await db
  .select({
    country: countries.name,
    citiesCount: count(cities.id),
  })
  .from(countries)
  .leftJoin(cities, eq(countries.id, cities.countryId))
  .groupBy(countries.id)
  .orderBy(countries.name);
```

```sql
select countries.name, count("cities"."id") from countries
  left join cities on countries.id = cities.country_id
  group by countries.id
  order by countries.name;
```

--------------------------------

### Define Vector Table Schema with Drizzle ORM

Source: https://orm.drizzle.team/docs/guides/vector-similarity-search

Creates a PostgreSQL table schema with vector embeddings support using Drizzle ORM. Defines a guides table with vector column (1536 dimensions) and HNSW index for efficient similarity search using cosine distance operations.

```TypeScript
import { index, pgTable, serial, text, vector } from 'drizzle-orm/pg-core';

export const guides = pgTable(
  'guides',
  {
    id: serial('id').primaryKey(),
    title: text('title').notNull(),
    description: text('description').notNull(),
    url: text('url').notNull(),
    embedding: vector('embedding', { dimensions: 1536 }),
  },
  (table) => [
    index('embeddingIndex').using('hnsw', table.embedding.op('vector_cosine_ops')),
  ]
);
```

--------------------------------

### PostgreSQL Full-Text Search Query Example

Source: https://orm.drizzle.team/docs/guides/full-text-search-with-generated-columns

This SQL query demonstrates how to perform a basic full-text search directly in PostgreSQL. It uses the `@@` operator to match the `body_search` `tsvector` column against a query generated by `to_tsquery('english', 'bring')`, retrieving all posts that contain the specified term.

```sql
select * from posts where body_search @@ to_tsquery('english', 'bring');
```

--------------------------------

### Defining Database Integration Configuration Data in JavaScript

Source: https://orm.drizzle.team/docs/get-started/sqlite-existing

This JavaScript snippet defines data structures for configuring various database integrations within the Drizzle ORM ecosystem. It includes `currentItem` for the currently selected database (SQLite in this case) and `flatItems` which is an array of objects, each representing a different database provider like PostgreSQL, Neon, Supabase, etc. Each database entry specifies its name, paths for "existing" and "new" setup documentation, and paths/styles for light and dark mode icons. This data is likely used to dynamically render navigation or configuration options for users.

```javascript
(function(){const currentItem = {"name":"SQLite","path":{"existing":"/docs/get-started/sqlite-existing","new":"/docs/get-started/sqlite-new"},"icon":{"light":{"path":"/public/svg/sqlite.svg","style":{"width":20}},"dark":{"path":"/public/svg/sqlite.svg","style":{"width":20}}}};
const flatItems = [{"name":"PostgreSQL","path":{"existing":"/docs/get-started/postgresql-existing","new":"/docs/get-started/postgresql-new"},"icon":{"light":{"path":"/public/svg/postgresql.svg","style":{"width":20}},"dark":{"path":"/public/svg/postgresql.svg","style":{"width":20,"fill":"#f0f0f0"}}}},{"name":"Neon","path":{"existing":"/docs/get-started/neon-existing","new":"/docs/get-started/neon-new"},"icon":{"light":{"path":"/public/svg/neon-light.svg","style":{"width":20}},"dark":{"path":"/public/svg/neon-dark.svg","style":{"width":20}}}},{"name":"Vercel Postgres","path":{"existing":"/docs/get-started/vercel-existing","new":"/docs/get-started/vercel-new"},"icon":{"light":{"path":"/public/svg/vercel.svg","style":{"width":20}},"dark":{"path":"/public/svg/vercel.svg","style":{"width":20,"fill":"#000000"}}}},{"name":"Supabase","path":{"existing":"/docs/get-started/supabase-existing","new":"/docs/get-started/supabase-new"},"icon":{"light":{"path":"/public/svg/supabase.svg","style":{"width":20}},"dark":{"path":"/public/svg/supabase.svg","style":{"width":20}}}},{"name":"Xata","path":{"existing":"/docs/get-started/xata-existing","new":"/docs/get-started/xata-new"},"icon":{"light":{"path":"/public/svg/xata.svg","style":{"width":26}},"dark":{"path":"/public/svg/xata.svg","style":{"width":26}}}},{"name":"PGLite","path":{"existing":"/docs/get-started/pglite-existing","new":"/docs/get-started/pglite-new"},"icon":{"light":{"path":"/public/svg/pglite.svg","style":{"width":26}},"dark":{"path":"/public/svg/pglite.svg","style":{"width":26}}}},{"name":"Nile","path":{"existing":"/docs/get-started/nile-existing","new":"/docs/get-started/nile-new"},"icon":{"light":{"path":"/public/svg/nile.svg"},"dark":{"path":"/public/svg/nile.svg"}}}},{"name":"Bun SQL","path":{"existing":"/docs/get-started/bun-sql-existing","new":"/docs/get-started/bun-sql-new"},"icon":{"light":{"path":"/public/svg/bun.svg","style":{"width":20}},"dark":{"path":"/public/svg/bun.svg","style":{"width":20}}}},{"name":"Effect","path":{"existing":"/docs/get-started/effect-postgresql-existing","new":"/docs/get-started/effect-postgresql-new"},"icon":{"light":{"path":"/public/svg/effect_light.svg","style":{"width":20,"fill":"#f0f0f0"}},"dark":{"path":"/public/svg/effect.svg","style":{"width":20,"fill":"#f0f0f0"}}}},{"name":"PlanetScale Postgres","path":{"existing":"/docs/get-started/planetscale-postgres-existing","new":"/docs/get-started/planetscale-postgres-new"},"icon":{"light":{"path":"/public/svg/planetscale.svg","style":{"width":20}},"dark":{"path":"/public/svg/planetscale.svg","style":{"width":20,"color":"#f0f0f0"}}}},{"name":"Gel","path":{"existing":"/docs/get-started/gel-existing","new":"/docs/get-started/gel-new"},"icon":{"light":{"path":"/public/svg/gel_light.svg","style":{"style":"border-radius: 5px","width":34,"height":34}},"dark":{"path":"/public/svg/gel_dark.svg","style":{"style":"border-radius: 5px","width":34,"height":34}}}},{"name":"MySQL","path":{"existing":"/docs/get-started/mysql
```

--------------------------------

### Delete Row and Return Full Result - Drizzle ORM

Source: https://orm.drizzle.team/docs/delete

Delete a row from the database and retrieve the complete deleted row data. This example deletes a user by name and returns all columns of the deleted row. Supported in PostgreSQL and SQLite.

```TypeScript
const deletedUser = await db.delete(users)
  .where(eq(users.name, 'Dan'))
  .returning();
```

--------------------------------

### Configure Turso Connection

Source: https://orm.drizzle.team/docs/drizzle-config-file

Connects to Turso database with support for both remote and local databases. Requires URL and authentication token for remote Turso instances, or local file/in-memory configuration.

```typescript
import { defineConfig } from 'drizzle-kit'

export default defineConfig({
  dialect: "turso",
  dbCredentials: {
    url: "libsql://acme.turso.io" // remote Turso database url
    authToken: "...",

    // or if you need local db

    url: ":memory:", // inmemory database
    // or
    url: "file:sqlite.db", // file: prefix is required by libsql
  }
});
```

--------------------------------

### Configuring Drizzle ORM for PlanetScale with MySQL2 Driver in TypeScript

Source: https://orm.drizzle.team/docs/rqb

This TypeScript example demonstrates how to configure Drizzle ORM to work with PlanetScale using the `mysql2` driver. It sets the `mode` option to `'planetscale'` during `drizzle` initialization, which is necessary due to PlanetScale's specific SQL dialect and lack of lateral join support.

```typescript
import * as schema from './schema';
import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";

const connection = await mysql.createConnection({
  uri: process.env.PLANETSCALE_DATABASE_URL,
});

const db = drizzle({ client: connection, schema, mode: 'planetscale' });
```

--------------------------------

### Query Database CRUD Operations with Drizzle ORM and PlanetScale

Source: https://orm.drizzle.team/docs/get-started/planetscale-existing

Complete example demonstrating Create, Read, Update, and Delete operations on a users table using Drizzle ORM with PlanetScale serverless database. Uses environment variables for database credentials and type-safe operations with TypeScript inference from the schema. Requires dotenv, drizzle-orm, and drizzle-orm/planetscale-serverless packages.

```TypeScript
import 'dotenv/config';
import { eq } from 'drizzle-orm';
import { drizzle } from 'drizzle-orm/planetscale-serverless';
import { usersTable } from './db/schema';

async function main() {
  const db = drizzle({ connection: {
      host: process.env.DATABASE_HOST!,
      username: process.env.DATABASE_USERNAME!,
      password: process.env.DATABASE_PASSWORD!,
    }});

  const user: typeof usersTable.$inferInsert = {
    name: 'John',
    age: 30,
    email: '[email protected]',
    phone: '123-456-7890',
  };

  await db.insert(usersTable).values(user);
  console.log('New user created!')

  const users = await db.select().from(usersTable);
  console.log('Getting all users from the database: ', users)
  /*
  const users: {
    id: number;
    name: string;
    age: number;
    email: string;
    phone: string | null;
  }[]
  */

  await db
    .update(usersTable)
    .set({
      age: 31,
    })
    .where(eq(usersTable.email, user.email));
  console.log('User info updated!')

  await db.delete(usersTable).where(eq(usersTable.email, user.email));
  console.log('User deleted!')
}

main();
```

--------------------------------

### Setup Theme Dropdown and Selection Handlers

Source: https://orm.drizzle.team/docs/connect-tidb

Configures the theme dropdown menu with click event listeners for theme selection. Handles theme button clicks to toggle the dropdown visibility, listens for window clicks to close the dropdown when clicking outside, and updates the theme preference when a theme option is selected. Integrates with the updateIcon function to reflect changes immediately.

```javascript
const dropdownItems = document.getElementById("theme-dropdown-items");
const themeItems = document.querySelectorAll("[data-theme-value]");
const themeCurrentBtn = document.getElementById("theme-btn");

if (themeCurrentBtn) {
  themeCurrentBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    if (dropdownItems) {
      dropdownItems.classList.toggle("d-flex");
    }
  });
}

window.addEventListener("click", (e) => {
  const clickedElement = e.target;
  if (!clickedElement.matches(".dialect-selector__button")) {
    if (dropdownItems && dropdownItems.classList.contains("d-flex")) {
      dropdownItems.classList.remove("d-flex");
    }
  }
});

if (themeItems) {
  themeItems.forEach((element) => {
    element.addEventListener("click", () => {
      const theme = element.dataset.themeValue;
      if (!theme) return;
      setPreference(theme);
      updateIcon();
      dropdownItems.classList.remove("d-flex");
    });
  });
}
```

--------------------------------

### Drizzle ORM Seeding with 'with' Option (Corrected Schema)

Source: https://orm.drizzle.team/docs/guides/seeding-using-with-option

This Drizzle ORM example demonstrates the corrected approach to seed 'users' with associated 'posts' using the `with` option. The `posts` table now includes a foreign key reference (`references(() => users.id)`) to the `users` table, resolving the previous seeding error and enabling proper one-to-many relationship seeding.

```typescript
import { users, posts } from './schema.ts';

async function main() {
    const db = drizzle(...);
    await seed(db, { users, posts }).refine(() => ({
        users: {
            count: 2,
            with: {
                posts: 3,
            },
        },
    }));
}
main();
```

```typescript
import { serial, pgTable, integer, text } from "drizzle-orm/pg-core";

export const users = pgTable('users', {
	id: serial('id').primaryKey(),
	name: text('name'),
});

export const posts = pgTable('posts', {
	id: serial('id').primaryKey(),
	content: text('content'),
	authorId: integer('author_id').notNull().references(() => users.id),
});
```

--------------------------------

### Define Default Column Values (MySQL)

Source: https://orm.drizzle.team/docs/indexes-constraints

Illustrates setting default values for columns in MySQL using Drizzle ORM and raw SQL. Examples include integer and time data types, showcasing how to use `sql` template literals for complex defaults like casting strings to time.

```typescript
import { sql } from "drizzle-orm";
import { int, time, mysqlTable } from "drizzle-orm/mysql-core";

const table = mysqlTable("table", {
  int: int("int").default(42),
  time: time("time").default(sql`cast("14:06:10" AS TIME)`),
});
```

```sql
CREATE TABLE `table` (
  `int` int DEFAULT 42,
  `time` time DEFAULT cast("14:06:10" AS TIME)
);
```

--------------------------------

### Apply Limit Clause to Drizzle ORM Update Statements

Source: https://orm.drizzle.team/docs/update

This Drizzle ORM example demonstrates how to add a `LIMIT` clause to an update statement using the `.limit()` method. It restricts the update operation to a specified number of rows. The corresponding raw SQL output is also provided.

```typescript
await db.update(usersTable).set({ verified: true }).limit(2);
```

```sql
update "users" set "verified" = $1 limit $2;
```

--------------------------------

### Configure Database Provider Navigation

Source: https://orm.drizzle.team/docs/get-started/pglite-existing

Defines configuration object for database provider selection in Drizzle ORM documentation. Contains metadata for current provider (PGLite) and flat array of all supported database providers with paths for existing and new database setups, icons, and styling information.

```JavaScript
(function(){
  const currentItem = {
    "name": "PGLite",
    "path": {
      "existing": "/docs/get-started/pglite-existing",
      "new": "/docs/get-started/pglite-new"
    },
    "icon": {
      "light": {
        "path": "/public/svg/pglite.svg",
        "style": {"width": 26}
      },
      "dark": {
        "path": "/public/svg/pglite.svg",
        "style": {"width": 26}
      }
    }
  };
  
  const flatItems = [
    {"name": "PostgreSQL", "path": {"existing": "/docs/get-started/postgresql-existing", "new": "/docs/get-started/postgresql-new"}, "icon": {"light": {"path": "/public/svg/postgresql.svg", "style": {"width": 20}}, "dark": {"path": "/public/svg/postgresql.svg", "style": {"width": 20, "fill": "#f0f0f0"}}}},
    {"name": "Neon", "path": {"existing": "/docs/get-started/neon-existing", "new": "/docs/get-started/neon-new"}, "icon": {"light": {"path": "/public/svg/neon-light.svg", "style": {"width": 20}}, "dark": {"path": "/public/svg/neon-dark.svg", "style": {"width": 20}}}},
    {"name": "Vercel Postgres", "path": {"existing": "/docs/get-started/vercel-existing", "new": "/docs/get-started/vercel-new"}, "icon": {"light": {"path": "/public/svg/vercel.svg", "style": {"width": 20}}, "dark": {"path": "/public/svg/vercel.svg", "style": {"width": 20, "fill": "#000000"}}}},
    {"name": "Supabase", "path": {"existing": "/docs/get-started/supabase-existing", "new": "/docs/get-started/supabase-new"}, "icon": {"light": {"path": "/public/svg/supabase.svg", "style": {"width": 20}}, "dark": {"path": "/public/svg/supabase.svg", "style": {"width": 20}}}}
  ];
})();
```

--------------------------------

### Configure drizzle-kit push with table and extension filters

Source: https://orm.drizzle.team/docs/drizzle-kit-push

Execute drizzle-kit push with table name filtering using wildcard patterns and database extension filters like postgis. Allows selective schema migration by filtering specific tables and database extensions.

```bash
npx drizzle-kit push dialect=postgresql schema=src/schema.ts --tablesFilter='user*' --extensionsFilters=postgis url=postgresql://user:password@host:port/dbname
```

```bash
yarn drizzle-kit push dialect=postgresql schema=src/schema.ts --tablesFilter='user*' --extensionsFilters=postgis url=postgresql://user:password@host:port/dbname
```

```bash
pnpm drizzle-kit push dialect=postgresql schema=src/schema.ts --tablesFilter='user*' --extensionsFilters=postgis url=postgresql://user:password@host:port/dbname
```

```bash
bunx drizzle-kit push dialect=postgresql schema=src/schema.ts --tablesFilter='user*' --extensionsFilters=postgis url=postgresql://user:password@host:port/dbname
```

--------------------------------

### Database Provider Configuration Array - JavaScript

Source: https://orm.drizzle.team/docs/get-started/effect-postgresql-new

Defines an array of supported database providers with routing paths for new and existing database setups, along with light/dark mode icon assets. Each provider includes navigation paths and styled SVG/PNG icons for UI display.

```javascript
const databases = [
  {
    "name": "PostgreSQL",
    "path": {
      "existing": "/docs/get-started/postgres-existing",
      "new": "/docs/get-started/postgres-new"
    },
    "icon": {
      "light": {"path": "/public/svg/postgres.svg", "style": {"width": 20}},
      "dark": {"path": "/public/svg/postgres.svg", "style": {"width": 20}}
    }
  },
  {
    "name": "MySQL",
    "path": {
      "existing": "/docs/get-started/mysql-existing",
      "new": "/docs/get-started/mysql-new"
    },
    "icon": {
      "light": {"path": "/public/svg/mysql.svg", "style": {"width": 20, "fill": "#00546B"}},
      "dark": {"path": "/public/svg/mysql.svg", "style": {"width": 20, "fill": "#F0F0F0"}}
    }
  },
  {
    "name": "SQLite",
    "path": {
      "existing": "/docs/get-started/sqlite-existing",
      "new": "/docs/get-started/sqlite-new"
    },
    "icon": {
      "light": {"path": "/public/svg/sqlite.svg", "style": {"width": 20}},
      "dark": {"path": "/public/svg/sqlite.svg", "style": {"width": 20}}
    }
  }
];
```

--------------------------------

### Define Composite Primary Key - MySQL

Source: https://orm.drizzle.team/docs/indexes-constraints

Create a composite primary key in MySQL using Drizzle ORM. The example demonstrates a many-to-many junction table with composite key on bookId and authorId. Supports optional custom constraint naming.

```TypeScript
import { int, text, primaryKey, mysqlTable } from "drizzle-orm/mysql-core";

export const user = mysqlTable("user", {
  id: int("id").autoincrement().primaryKey(),
  name: text("name"),
});

export const book = mysqlTable("book", {
  id: int("id").autoincrement().primaryKey(),
  name: text("name"),
});

export const booksToAuthors = mysqlTable("books_to_authors", {
  authorId: int("author_id"),
  bookId: int("book_id"),
}, (table) => [
  primaryKey({ columns: [table.bookId, table.authorId] }),
  // Or PK with custom name
  primaryKey({ name: 'custom_name', columns: [table.bookId, table.authorId] })
]);
```

```SQL
CREATE TABLE `books_to_authors` (
  `author_id` int,
  `book_id` int,
  PRIMARY KEY(`book_id`,`author_id`)
);
```

--------------------------------

### Create Table with Supabase Role Policy

Source: https://orm.drizzle.team/docs/rls

Demonstrates creating a PostgreSQL table with a policy that uses the predefined Supabase service role. The policy prevents inserts by setting withCheck to false. This example shows how to combine custom roles with Supabase predefined roles in table definitions.

```TypeScript
import { sql } from 'drizzle-orm';
import { serviceRole } from 'drizzle-orm/supabase';
import { integer, pgPolicy, pgRole, pgTable } from 'drizzle-orm/pg-core';

export const admin = pgRole('admin');

export const users = pgTable('users', {
	id: integer(),
}, (t) => [
	pgPolicy(`policy-insert`, {
		for: 'insert',
		to: serviceRole,
		withCheck: sql`false`,
	}),
]);
```

--------------------------------

### Dynamically Build and Apply Conditional Filters in Drizzle ORM (TypeScript)

Source: https://orm.drizzle.team/docs/guides/conditional-filters-in-query

This example demonstrates how to dynamically build an array of Drizzle ORM `SQL` expressions (filters) and then apply them to a query using the `and()` operator. This approach provides maximum flexibility for constructing complex conditional queries based on varying conditions.

```typescript
import { SQL, ... } from 'drizzle-orm';

const searchPosts = async (filters: SQL[]) => {
  await db
    .select()
    .from(posts)
    .where(and(...filters));
};

const filters: SQL[] = [];
filters.push(ilike(posts.title, 'AI'));
filters.push(inArray(posts.category, ['Tech', 'Art', 'Science']));
filters.push(gt(posts.views, 200));

await searchPosts(filters);
```

--------------------------------

### Aggregation with GROUP BY and HAVING using SQL template

Source: https://orm.drizzle.team/docs/sql

Demonstrates using sql template in both GROUP BY and HAVING clauses for custom aggregation logic. Counts users per project and filters groups with count greater than 300, showcasing complex grouping scenarios.

```TypeScript
import { sql } from 'drizzle-orm'
import { usersTable } from 'schema'

await db.select({ 
    projectId: usersTable.projectId,
    count: sql<number>`count(${usersTable.id})`.mapWith(Number)
}).from(usersTable)
    .groupBy(sql`${usersTable.projectId}`)
    .having(sql`count(${usersTable.id}) > 300`)
```

```SQL
select "project_id", count("users"."id") from users group by "users"."project_id" having count("users"."id") > 300;
```

--------------------------------

### Define Drizzle ORM SingleStore datetime column with mode option

Source: https://orm.drizzle.team/docs/column-types/singlestore

This snippet demonstrates how to define a `datetime` column in Drizzle ORM for SingleStore, including an example of specifying the `mode` option. It includes the Drizzle schema definition and the corresponding SQL `CREATE TABLE` statement.

```typescript
import { datetime, singlestoreTable } from "drizzle-orm/singlestore-core";

const table = singlestoreTable('table', {
	datetime: datetime(),
});

datetime('...', { mode: 'date' | "string"}),
```

```sql
CREATE TABLE `table` (
	`datetime` datetime
);
```

--------------------------------

### Override Schema Fields in Drizzle ORM

Source: https://orm.drizzle.team/docs/effect-schema

Allows customization of generated schema fields by providing override values. In this example, the role field is overridden to use a generic Schema.String instead of the enum constraint from the table definition.

```typescript
// Overriding the fields
const UserInsert = createInsertSchema(users, {
	role: Schema.String,
});
```

--------------------------------

### Configure Database Provider Navigation Structure

Source: https://orm.drizzle.team/docs/get-started/supabase-new

Defines a hierarchical configuration object for database provider navigation in Drizzle ORM documentation. Includes current provider (Supabase) and flat array of all supported providers with paths for new and existing database setups, icons for light/dark themes, and styling metadata.

```JavaScript
(function(){
  const currentItem = {
    "name":"Supabase",
    "path":{
      "existing":"/docs/get-started/supabase-existing",
      "new":"/docs/get-started/supabase-new"
    },
    "icon":{
      "light":{"path":"/public/svg/supabase.svg","style":{"width":20}},
      "dark":{"path":"/public/svg/supabase.svg","style":{"width":20}}
    }
  };
  
  const flatItems = [
    {"name":"PostgreSQL","path":{"existing":"/docs/get-started/postgresql-existing","new":"/docs/get-started/postgresql-new"},"icon":{"light":{"path":"/public/svg/postgresql.svg","style":{"width":20}},"dark":{"path":"/public/svg/postgresql.svg","style":{"width":20,"fill":"#f0f0f0"}}}},
    {"name":"Neon","path":{"existing":"/docs/get-started/neon-existing","new":"/docs/get-started/neon-new"},"icon":{"light":{"path":"/public/svg/neon-light.svg","style":{"width":20}},"dark":{"path":"/public/svg/neon-dark.svg","style":{"width":20}}}},
    {"name":"Vercel Postgres","path":{"existing":"/docs/get-started/vercel-existing","new":"/docs/get-started/vercel-new"},"icon":{"light":{"path":"/public/svg/vercel.svg","style":{"width":20}},"dark":{"path":"/public/svg/vercel.svg","style":{"width":20,"fill":"#000000"}}}},
    {"name":"Supabase","path":{"existing":"/docs/get-started/supabase-existing","new":"/docs/get-started/supabase-new"},"icon":{"light":{"path":"/public/svg/supabase.svg","style":{"width":20}},"dark":{"path":"/public/svg/supabase.svg","style":{"width":20}}}}
  ];
})();
```

--------------------------------

### Configure Drizzle Entity Provider with Supabase

Source: https://orm.drizzle.team/docs/rls

Configure Drizzle Kit to manage database entities with provider-specific settings. This example shows how to specify a Supabase provider and exclude specific roles from entity management. The configuration uses the defineConfig function to set up entity handling rules.

```typescript
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  ...
  entities: {
    roles: {
      provider: 'supabase',
      exclude: ['new_supabase_role']
    }
  }
});
```

--------------------------------

### Executing Drizzle Kit `up` Command with Dialect CLI Option

Source: https://orm.drizzle.team/docs/drizzle-kit-up

This command executes the `drizzle-kit up` operation, explicitly specifying the `postgresql` dialect as a command-line option. This method allows overriding or supplementing the configuration provided in `drizzle.config.ts` directly from the command line. It's useful for ad-hoc commands or environments where config files are dynamic.

```shell
npx drizzle-kit up --dialect=postgresql
```

--------------------------------

### Define Database Configuration Data in JavaScript

Source: https://orm.drizzle.team/docs/get-started/xata-new

This JavaScript array defines a comprehensive list of database types, each containing properties for its name, paths to 'existing' and 'new' setup documentation, and icon configurations for both light and dark themes. This data structure serves as the primary source for populating dynamic UI elements like dropdowns.

```javascript
const flatItems = [{"name":"PlanetScale","path":{"existing":"/docs/get-started/planetscale-existing","new":"/docs/get-started/planetscale-new"},"icon":{"light":{"path":"/public/svg/planetscale.svg","style":{"width":20}},"dark":{"path":"/public/svg/planetscale.svg","style":{"width":20,"color":"#f0f0f0"}}}},{"name":"TiDB","path":{"existing":"/docs/get-started/tidb-existing","new":"/docs/get-started/tidb-new"},"icon":{"light":{"path":"/public/svg/tidb.svg","style":{"width":20}},"dark":{"path":"/public/svg/tidb.svg","style":{"width":20}}}},{"name":"SingleStore","path":{"existing":"/docs/get-started/singlestore-existing","new":"/docs/get-started/singlestore-new"},"icon":{"light":{"path":"/public/svg/singlestore_light.svg","style":{"width":20,"fill":"#00546B"}},"dark":{"path":"/public/svg/singlestore_dark.svg","style":{"width":20,"fill":"#F0F0F0"}}}},{"name":"SQLite","path":{"existing":"/docs/get-started/sqlite-existing","new":"/docs/get-started/sqlite-new"},"icon":{"light":{"path":"/public/svg/sqlite.svg","style":{"width":20}},"dark":{"path":"/public/svg/sqlite.svg","style":{"width":20}}}},{"name":"Turso Cloud","path":{"existing":"/docs/get-started/turso-existing","new":"/docs/get-started/turso-new"},"icon":{"light":{"path":"/public/svg/new-turso.svg","style":{"width":26}},"dark":{"path":"/public/svg/new-turso-light.svg","style":{"width":26}}}},{"name":"SQLite Cloud","path":{"existing":"/docs/get-started/sqlite-cloud-existing","new":"/docs/get-started/sqlite-cloud-new"},"icon":{"light":{"path":"/public/svg/sqlite-cloud.svg","style":{"width":26}},"dark":{"path":"/public/svg/sqlite-cloud.svg","style":{"width":26}}}},{"name":"Turso Database","path":{"existing":"/docs/get-started/turso-database-existing","new":"/docs/get-started/turso-database-new"},"icon":{"light":{"path":"/public/svg/new-turso.svg","style":{"width":26}},"dark":{"path":"/public/svg/new-turso-light.svg","style":{"width":26}}}},{"name":"Cloudflare D1","path":{"existing":"/docs/get-started/d1-existing","new":"/docs/get-started/d1-new"},"icon":{"light":{"path":"/public/svg/cloudflare.svg","style":{"width":26}},"dark":{"path":"/public/svg/cloudflare.svg","style":{"width":26}}}},{"name
```

--------------------------------

### Configure Drizzle ORM with Upstash Cache (Explicit Credentials & Global Settings)

Source: https://orm.drizzle.team/docs/cache

Initializes Drizzle ORM with Upstash Redis caching, explicitly providing URL and token. This example also demonstrates enabling global caching for all queries by default and setting a default cache expiration time for fine-grained control.

```typescript
import { upstashCache } from "drizzle-orm/cache/upstash";
import { drizzle } from "drizzle-orm/...";

const db = drizzle(process.env.DB_URL!, {
  cache: upstashCache({
    // 👇 Redis credentials (optional — can also be pulled from env vars)
    url: '<UPSTASH_URL>',
    token: '<UPSTASH_TOKEN>',

    // 👇 Enable caching for all queries by default (optional)
    global: true,

    // 👇 Default cache behavior (optional)
    config: { ex: 60 }
  })
});
```

--------------------------------

### Apply Order By Clause to Drizzle ORM Update Statements

Source: https://orm.drizzle.team/docs/update

This Drizzle ORM example illustrates how to use the `.orderBy()` method to sort rows before applying an update. It supports single or multiple columns, and ascending (`asc`) or descending (`desc`) order. The corresponding raw SQL output is also provided.

```typescript
import { asc, desc } from 'drizzle-orm';

await db.update(usersTable).set({ verified: true }).orderBy(usersTable.name);
await db.update(usersTable).set({ verified: true }).orderBy(desc(usersTable.name));

// order by multiple fields
await db.update(usersTable).set({ verified: true }).orderBy(usersTable.name, usersTable.name2);
await db.update(usersTable).set({ verified: true }).orderBy(asc(usersTable.name), desc(usersTable.name2));
```

```sql
update "users" set "verified" = $1 order by "name";
update "users" set "verified" = $1 order by "name" desc;

update "users" set "verified" = $1 order by "name", "name2";
update "users" set "verified" = $1 order by "name" asc, "name2" desc;
```

--------------------------------

### Apply complex filters with AND, OR, and RAW SQL in Drizzle ORM

Source: https://orm.drizzle.team/docs/rqb-v2

Demonstrates a sophisticated filtering scenario combining `AND`, `OR` logical operators, and `RAW` SQL expressions within Drizzle ORM. This example filters users based on name patterns (case-insensitive), preferences (JSONB column), and age range, showcasing advanced query construction.

```typescript
const response = db.query.users.findMany({
  where: {
    AND: [
      {
        OR: [
          { RAW: (table) => sql`LOWER(${table.name}) LIKE 'john%'` },
          { name: { ilike: "jane%" } },
        ],
      },
      {
        OR: [
          { RAW: (table) => sql`${table.preferences}->>'theme' = 'dark'` },
          { RAW: (table) => sql`${table.preferences}->>'theme' IS NULL` },
        ],
      },
      { RAW: (table) => sql`${table.age} BETWEEN 25 AND 35` },
    ],
  },
});
```

```sql
select "d0"."id" as "id", "d0"."name" as "name", 
"d0"."email" as "email", "d0"."age" as "age", 
"d0"."created_at" as "createdAt", "d0"."last_login" as "lastLogin", 
"d0"."subscription_end" as "subscriptionEnd", "d0"."last_activity" as "lastActivity", 
"d0"."preferences" as "preferences", "d0"."interests" as "interests" 
from "users" as "d0" 
where ((LOWER("d0"."name") LIKE 'john%' or "d0"."name" ilike 'jane%') 
and ("d0"."preferences"->>'theme' = 'dark' or "d0"."preferences"->>'theme' IS NULL) 
and "d0"."age" BETWEEN 25 AND 35)
```

--------------------------------

### Implement Dynamic Database Selection Navigation in JavaScript

Source: https://orm.drizzle.team/docs/get-started/postgresql-existing

This JavaScript code sets up event listeners for two dropdowns: `db-select` for choosing a database provider and `db-type-select` for selecting between 'existing' or 'new' database setups. Upon selection, it dynamically updates the dropdown's width and redirects the user to the corresponding Drizzle ORM documentation page based on the `flatItems` array. It also initializes the width of the dropdowns.

```javascript
const databaseType = "existing";
const dbSelect = document.getElementById('db-select');
const dbTypeSelect = document.getElementById('db-type-select');
const dbSelectResizer = document.getElementById('db-resizer');
const dbTypeSelectResizer = document.getElementById('db-type-resizer');
dbSelect.addEventListener('change', (e) => {
  dbSelectResizer.innerText = e.target.value;
  dbSelect.style.width = `${dbSelectResizer.offsetWidth}px`;
  window.location.href = flatItems.find(({name}) => name === e.target.value).path[databaseType];
});
dbTypeSelect.addEventListener('change', (e) => {
  dbTypeSelectResizer.innerText = e.target.value === 'new' ? 'New database' : 'Existing database'
  dbTypeSelect.style.width = `${dbTypeSelectResizer.offsetWidth}px`;
  window.location.href = currentItem.path[e.target.value]
});
dbSelect.style.width = `${dbSelectResizer.offsetWidth}px`;
dbTypeSelect
```

--------------------------------

### Specifying Drizzle Seed Generator Versions in JavaScript

Source: https://orm.drizzle.team/docs/seed-versioning

These JavaScript examples demonstrate how to control the version of generators used by `drizzle-seed` for deterministic data generation. By specifying a `version` option, developers can ensure consistent outputs even when newer generator versions are available, allowing for controlled upgrades or maintaining compatibility with older data sets. Omitting the `version` uses the latest available generators.

```javascript
await seed(db, schema, { version: '2' });
```

```javascript
await seed(db, schema);
```

```javascript
await seed(db, schema, { version: '1' });
```

--------------------------------

### Database Configuration Object for Drizzle ORM

Source: https://orm.drizzle.team/docs/get-started/nile-new

Defines a configuration object containing database provider information including names, documentation paths for new and existing database setups, and SVG icon paths for light and dark themes. Used to populate the get-started documentation navigation.

```JavaScript
(function(){
  const currentItem = {
    "name": "Nile",
    "path": {
      "existing": "/docs/get-started/nile-existing",
      "new": "/docs/get-started/nile-new"
    },
    "icon": {
      "light": {"path": "/public/svg/nile.svg"},
      "dark": {"path": "/public/svg/nile.svg"}
    }
  };
  
  const flatItems = [
    {
      "name": "PostgreSQL",
      "path": {"existing": "/docs/get-started/postgresql-existing", "new": "/docs/get-started/postgresql-new"},
      "icon": {"light": {"path": "/public/svg/postgresql.svg", "style": {"width": 20}}, "dark": {"path": "/public/svg/postgresql.svg", "style": {"width": 20, "fill": "#f0f0f0"}}}
    },
    {
      "name": "MySQL",
      "path": {"existing": "/docs/get-started/mysql-existing", "new": "/docs/get-started/mysql-new"},
      "icon": {"light": {"path": "/public/svg/mysql.svg"}, "dark": {"path": "/public/svg/mysql.svg"}}
    },
    {
      "name": "SQLite",
      "path": {"existing": "/docs/get-started/sqlite-existing", "new": "/docs/get-started/sqlite-new"},
      "icon": {"light": {"path": "/public/svg/sqlite.svg"}, "dark": {"path": "/public/svg/sqlite.svg"}}
    }
  ];
});
```

--------------------------------

### Enable Role Management in Drizzle Kit Configuration

Source: https://orm.drizzle.team/docs/rls

This `drizzle.config.ts` example shows how to enable role management within Drizzle Kit. By setting `entities.roles` to `true`, `drizzle-kit` will begin managing PostgreSQL roles, allowing it to track and apply changes to roles defined or referenced in your Drizzle schema.

```typescript
// drizzle.config.ts
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: 'postgresql',
  schema: "./drizzle/schema.ts",
  dbCredentials: {
    url: process.env.DATABASE_URL!
  },
  verbose: true,
  strict: true,
  entities: {
    roles: true
  }
});
```

--------------------------------

### Implement Database Selection and Navigation with JavaScript

Source: https://orm.drizzle.team/docs/get-started/mssql-new

This JavaScript code handles user interactions with database selection dropdowns. It listens for `change` events on `db-select` and `db-type-select` elements, dynamically adjusts their width, and redirects the user to the relevant documentation page based on their selections. It depends on the `flatItems` array and specific HTML elements (`db-select`, `db-type-select`, `db-resizer`, `db-type-resizer`).

```javascript
const databaseType = "new";
const dbSelect = document.getElementById('db-select');
const dbTypeSelect = document.getElementById('db-type-select');
const dbSelectResizer = document.getElementById('db-resizer');
const dbTypeSelectResizer = document.getElementById('db-type-resizer');
dbSelect.addEventListener('change', (e) => {
  dbSelectResizer.innerText = e.target.value;
  dbSelect.style.width = `${dbSelectResizer.offsetWidth}px`;
  window.location.href = flatItems.find(({name}) => name === e.target.value).path[databaseType];
});
dbTypeSelect.addEventListener('change', (e) => {
  dbTypeSelectResizer.innerText = e.target.value === 'new' ? 'New database' : 'Existing database'
  dbTypeSelect.style.width = `${dbTypeSelectResizer.offsetWidth}px`;
  window.location.href = currentItem.path[e.target.value]
});
dbSelect.style.width = `${dbSelectRe`
```

--------------------------------

### Define Database Integration Data Structures in JavaScript

Source: https://orm.drizzle.team/docs/get-started/d1-existing

This JavaScript snippet defines data structures for various database integrations, including current and a flat list of available options. Each entry specifies the database name, paths for existing and new setups, and icon details (path, style, and dark mode variations) for consistent display across the application.

```javascript
(function(){const currentItem = {"name":"Cloudflare D1","path":{"existing":"/docs/get-started/d1-existing","new":"/docs/get-started/d1-new"},"icon":{"light":{"path":"/public/svg/cloudflare.svg","style":{"width":26}},"dark":{"path":"/public/svg/cloudflare.svg","style":{"width":26}}}};
const flatItems = [{"name":"PostgreSQL","path":{"existing":"/docs/get-started/postgresql-existing","new":"/docs/get-started/postgresql-new"},"icon":{"light":{"path":"/public/svg/postgresql.svg","style":{"width":20}},"dark":{"path":"/public/svg/postgresql.svg","style":{"width":20,"fill":"#f0f0f0"}}}},{"name":"Neon","path":{"existing":"/docs/get-started/neon-existing","new":"/docs/get-started/neon-new"},"icon":{"light":{"path":"/public/svg/neon-light.svg","style":{"width":20}},"dark":{"path":"/public/svg/neon-dark.svg","style":{"width":20}}}},{"name":"Vercel Postgres","path":{"existing":"/docs/get-started/vercel-existing","new":"/docs/get-started/vercel-new"},"icon":{"light":{"path":"/public/svg/vercel.svg","style":{"width":20}},"dark":{"path":"/public/svg/vercel.svg","style":{"width":20,"fill":"#000000"}}}},{"name":"Supabase","path":{"existing":"/docs/get-started/supabase-existing","new":"/docs/get-started/supabase-new"},"icon":{"light":{"path":"/public/svg/supabase.svg","style":{"width":20}},"dark":{"path":"/public/svg/supabase.svg","style":{"width":20}}}},{"name":"Xata","path":{"existing":"/docs/get-started/xata-existing","new":"/docs/get-started/xata-new"},"icon":{"light":{"path":"/public/svg/xata.svg","style":{"width":26}},"dark":{"path":"/public/svg/xata.svg","style":{"width":26}}}},{"name":"PGLite","path":{"existing":"/docs/get-started/pglite-existing","new":"/docs/get-started/pglite-new"},"icon":{"light":{"path":"/public/svg/pglite.svg","style":{"width":26}},"dark":{"path":"/public/svg/pglite.svg","style":{"width":26}}}},{"name":"Nile","path":{"existing":"/docs/get-started/nile-existing","new":"/docs/get-started/nile-new"},"icon":{"light":{"path":"/public/svg/nile.svg"},"dark":{"path":"/public/svg/nile.svg"}}},{"name":"Bun SQL","path":{"existing":"/docs/get-started/bun-sql-existing","new":"/docs/get-started/bun-sql-new"},"icon":{"light":{"path":"/public/svg/bun.svg","style":{"width":20}},"dark":{"path":"/public/svg/bun.svg","style":{"width":20}}}},{"name":"Effect","path":{"existing":"/docs/get-started/effect-postgresql-existing","new":"/docs/get-started/effect-postgresql-new"},"icon":{"light":{"path":"/public/svg/effect_light.svg","style":{"width":20,"fill":"#f0f0f0"}},"dark":{"path":"/public/svg/effect.svg","style":{"width":20,"fill":"#f0f0f0"}}}},{"name":"PlanetScale Postgres","path":{"existing":"/docs/get-started/planetscale-postgres-existing","new":"/docs/get-started/planetscale-postgres-new"},"icon":{"light":{"path":"/public/svg/planetscale.svg","style":{"width":20}},"dark":{"path":"/public/svg/planetscale.svg","style":{"width":20,"color":"#f0f0f0"}}}},{"name":"Gel","path":{"existing":"/docs/get-started/gel-existing","new":"/docs/get-started/gel-new"},"icon":{"light":{"path":"/public/svg/gel_light.svg","style":{"style":"border-radius: 5px","width":34,"height":34}},"dark":{"path":"/public/svg/gel_dark.svg","style":{"style":"border-radius: 5px","width":34,"height":34}}}},{"name":"MySQL","path":{"existing":"/docs/get-started/mysql-existing","new":"/docs/get-started/mysql-
```

--------------------------------

### Configure Drizzle ORM with MSSQL/Postgres Read Replicas

Source: https://orm.drizzle.team/docs/read-replicas

Illustrates how to set up Drizzle ORM with MSSQL/Postgres connections for read replicas. This includes defining a schema using `mssqlTable` and then creating Drizzle instances for primary and replica databases from connection strings, finally combining them with `withReplicas`. This approach simplifies managing multiple database connections for scaling read operations.

```typescript
    import { sql } from 'drizzle-orm';
    import { drizzle } from 'drizzle-orm/mssql-postgres';
    import { boolean, mssqlTable, int, text, timestamp, withReplicas } from 'drizzle-orm/mssql-core';
    
    const usersTable = mssqlTable('users', {
    	id: int().primaryKey(),
    	name: text().notNull(),
    	verified: boolean().notNull().default(false),
    	createdAt: timestamp('created_at').notNull(),
    });
    
    const primaryDb = drizzle("postgres://user:password@host:port/primary_db");
    const read1 = drizzle("postgres://user:password@host:port/read_replica_1");
    const read2 = drizzle("postgres://user:password@host:port/read_replica_2");
    
    const db = withReplicas(primaryDb, [read1, read2]);
```

--------------------------------

### Perform Drizzle ORM CRUD operations with TypeScript and TiDB

Source: https://orm.drizzle.team/docs/get-started/tidb-new

This TypeScript example demonstrates connecting to a TiDB serverless database using Drizzle ORM and executing fundamental database operations. It covers creating a new user, retrieving all users, updating an existing user's information, and finally deleting a user record. The code utilizes `dotenv` for configuration and `drizzle-orm` for database interactions.

```typescript
import 'dotenv/config';
import { drizzle } from 'drizzle-orm/tidb-serverless';
import { eq } from 'drizzle-orm';
import { usersTable } from './db/schema';
  
const db = drizzle(process.env.DATABASE_URL!); 

async function main() {
  const user: typeof usersTable.$inferInsert = {
    name: 'John',
    age: 30,
    email: '[email protected]',
  };

  await db.insert(usersTable).values(user);
  console.log('New user created!')

  const users = await db.select().from(usersTable);
  console.log('Getting all users from the database: ', users)
  /*
  const users: {
    id: number;
    name: string;
    age: number;
    email: string;
  }[]
  */

  await db
    .update(usersTable)
    .set({
      age: 31,
    })
    .where(eq(usersTable.email, user.email));
  console.log('User info updated!')

  await db.delete(usersTable).where(eq(usersTable.email, user.email));
  console.log('User deleted!')
}

main();
```

--------------------------------

### Database Platform Configuration Array - JavaScript

Source: https://orm.drizzle.team/docs/get-started/nile-existing

Defines an array of supported database platforms with their documentation paths, icons, and styling for light/dark themes. Each database entry includes routing information for both new and existing database setups, along with SVG icon paths and custom styling properties for UI rendering.

```javascript
const databases = [{"name":"PostgreSQL","path":{"existing":"/docs/get-started/postgres-existing","new":"/docs/get-started/postgres-new"},"icon":{"light":{"path":"/public/svg/postgres.svg","style":{"width":20}},"dark":{"path":"/public/svg/postgres.svg","style":{"width":20}}}},{"name":"MySQL","path":{"existing":"/docs/get-started/mysql-existing","new":"/docs/get-started/mysql-new"},"icon":{"light":{"path":"/public/svg/mysql.svg","style":{"width":20,"fill":"#00546B"}},"dark":{"path":"/public/svg/mysql.svg","style":{"width":20,"fill":"#F0F0F0"}}}},{"name":"PlanetScale","path":{"existing":"/docs/get-started/planetscale-existing","new":"/docs/get-started/planetscale-new"},"icon":{"light":{"path":"/public/svg/planetscale.svg","style":{"width":20}},"dark":{"path":"/public/svg/planetscale.svg","style":{"width":20,"color":"#f0f0f0"}}}},{"name":"SQLite","path":{"existing":"/docs/get-started/sqlite-existing","new":"/docs/get-started/sqlite-new"},"icon":{"light":{"path":"/public/svg/sqlite.svg","style":{"width":20}},"dark":{"path":"/public/svg/sqlite.svg","style":{"width":20}}}}];
```

--------------------------------

### Drizzle ORM: Select All Columns and Add a Computed Column

Source: https://orm.drizzle.team/docs/guides/include-or-exclude-columns

This Drizzle ORM example shows how to select all existing columns from a table while also adding a new computed column. It uses the `getColumns()` utility to spread all table columns and then defines a new `titleLength` column using a raw SQL expression. This allows for flexible data retrieval and transformation within a single query.

```typescript
import { getColumns, sql } from 'drizzle-orm';

await db
  .select({
    ...getColumns(posts),
    titleLength: sql<number>`length(${posts.title})`,
  })
  .from(posts);
```

--------------------------------

### Calculate Field Length in Nested Relations with Extras

Source: https://orm.drizzle.team/docs/rqb-v2

Demonstrates adding custom computed fields at multiple levels of a relational query. The example retrieves posts with comments and calculates content length for both posts and individual comments using SQL length functions in extras at each level.

```typescript
const res = await db.query.posts.findMany({
	extras: {
		contentLength: (table, { sql }) => sql<number>`length(${table.content})`,
	},
	with: {
		comments: {
			extras: {
				commentSize: (table, { sql }) => sql<number>`length(${table.content})`,
			},
		},
	},
});

// result type
const res: {
	id: number;
	createdAt: Date;
	content: string;
	authorId: number | null;
	contentLength: number;
	comments: {
			id: number;
			createdAt: Date;
			content: string;
			creator: number | null;
			postId: number | null;
			commentSize: number;
	}[];
};
```

--------------------------------

### Create Custom Serial Type with notNull and default

Source: https://orm.drizzle.team/docs/custom-types

Example of defining a custom serial type using the customType function with generic type parameters. The `notNull` and `default` properties indicate that this type should be non-nullable and have a default value by default.

```typescript
const customSerial = customType<{ data: number, notNull: true, default: true }>({
  dataType() {
    return 'serial';
  }
});
```

--------------------------------

### Define Line Geometry Schemas for PostgreSQL with Drizzle and Zod

Source: https://orm.drizzle.team/docs/zod

This snippet provides examples for defining line geometry schemas in PostgreSQL using Drizzle ORM, complemented by Zod validation schemas. It demonstrates both the `abc` mode, representing a line by its coefficients, and the `tuple` mode, representing it as a set of points, offering flexibility for geometric data storage.

```text

```

--------------------------------

### Database Configuration Array with Icon Paths

Source: https://orm.drizzle.team/docs/get-started/pglite-existing

Defines an array of supported databases with metadata including names, documentation paths for existing and new setups, and light/dark mode icon configurations. Each database entry contains routing information and styled SVG/PNG icons for UI display.

```javascript
const databases = [
  {
    "name": "MySQL",
    "path": {
      "existing": "/docs/get-started/mysql-existing",
      "new": "/docs/get-started/mysql-new"
    },
    "icon": {
      "light": {"path": "/public/svg/mysql.svg", "style": {"width": 20, "fill": "#00546B"}},
      "dark": {"path": "/public/svg/mysql.svg", "style": {"width": 20, "fill": "#F0F0F0"}}
    }
  },
  {
    "name": "PostgreSQL",
    "path": {
      "existing": "/docs/get-started/postgres-existing",
      "new": "/docs/get-started/postgres-new"
    }
  }
];
```

--------------------------------

### Delete Row and Return Partial Columns - Drizzle ORM

Source: https://orm.drizzle.team/docs/delete

Delete a row and retrieve only specific columns from the deleted row. This example deletes a user and returns only the deleted user's ID. Useful for reducing data transfer when only certain fields are needed.

```TypeScript
const deletedUserIds: { deletedId: number }[] = await db.delete(users)
  .where(eq(users.name, 'Dan'))
  .returning({ deletedId: users.id });
```

--------------------------------

### Insert Row and Output Partial Columns - Drizzle ORM MSSQL

Source: https://orm.drizzle.team/docs/delete

Insert a row and retrieve only specific columns from the inserted row using the output() method. This example inserts a user and returns only the inserted user's ID. Useful for MSSQL when you need selective column output.

```TypeScript
await db.insert(users).values({ name: "Partial Dan" }).output({ insertedId: users.id });
```

--------------------------------

### Retrieve Updated Rows with Returning Clause in Drizzle ORM

Source: https://orm.drizzle.team/docs/update

This Drizzle ORM example demonstrates how to use the `.returning()` clause to retrieve data from the rows that were updated. This feature is typically supported by PostgreSQL and SQLite. It returns an array of objects containing the specified columns from the updated rows.

```typescript
const updatedUserId: { updatedId: number }[] = await db.update(users)
  .set({ name: 'Mr. Dan' })
  .where(eq(users.name, 'Dan'))
  .returning({ updatedId: users.id });
```

--------------------------------

### Configure Drizzle Kit for Vercel Postgres

Source: https://orm.drizzle.team/docs/get-started/vercel-existing

Create `drizzle.config.ts` to define Drizzle Kit's configuration, including the output directory for migrations, schema file path, database dialect, and connection credentials using the `POSTGRES_URL` environment variable.

```TypeScript
import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  out: './drizzle',
  schema: './src/db/schema.ts',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.POSTGRES_URL!,
  },
});
```

--------------------------------

### Database Configuration Array - JavaScript

Source: https://orm.drizzle.team/docs/get-started/nile-new

Defines supported database platforms with their documentation paths for new and existing database setups, along with light and dark mode SVG icons. Supports 20+ databases including PostgreSQL, MySQL, SQLite variants, and cloud providers like PlanetScale, Turso, and Cloudflare.

```javascript
const databases = [
  {"name":"PostgreSQL","path":{"existing":"/docs/get-started/postgresql-existing","new":"/docs/get-started/postgresql-new"},"icon":{"light":{"path":"/public/svg/postgresql.svg","style":{"width":20}},"dark":{"path":"/public/svg/postgresql.svg","style":{"width":20}}}},
  {"name":"MySQL","path":{"existing":"/docs/get-started/mysql-existing","new":"/docs/get-started/mysql-new"},"icon":{"light":{"path":"/public/svg/mysql.svg","style":{"width":20,"fill":"#00546B"}},"dark":{"path":"/public/svg/mysql.svg","style":{"width":20,"fill":"#F0F0F0"}}}},
  {"name":"SQLite","path":{"existing":"/docs/get-started/sqlite-existing","new":"/docs/get-started/sqlite-new"},"icon":{"light":{"path":"/public/svg/sqlite.svg","style":{"width":20}},"dark":{"path":"/public/svg/sqlite.svg","style":{"width":20}}}}
];
```

--------------------------------

### Configure Products Table Seeding with Weighted Random Pricing

Source: https://orm.drizzle.team/docs/seed-overview

Creates 5,000 product records with inventory and pricing information. Uses weighted random selection for unit prices (50% integers, 50% decimals), array-based selections for quantity per unit and reorder levels, and integer ranges for stock quantities. Demonstrates complex data generation with multiple faker function types.

```javascript
products: {
    count: 5000,
    columns: {
        name: funcs.companyName(),
        quantityPerUnit: funcs.valuesFromArray({ values: quantityPerUnit }),
        unitPrice: funcs.weightedRandom([
            {
                weight: 0.5,
                value: funcs.int({ minValue: 3, maxValue: 300 })
            },
            {
                weight: 0.5,
                value: funcs.number({ minValue: 3, maxValue: 300, precision: 100 })
            }
        ]),
        unitsInStock: funcs.int({ minValue: 0, maxValue: 125 }),
        unitsOnOrder: funcs.valuesFromArray({ values: unitsOnOrders }),
        reorderLevel: funcs.valuesFromArray({ values: reorderLevels }),
        discontinued: funcs.int({ minValue: 0, maxValue: 1 })
    }
}
```

--------------------------------

### Delete with WITH Clause and CTE - Drizzle ORM

Source: https://orm.drizzle.team/docs/delete

Use a WITH clause (Common Table Expression) to simplify complex delete queries by defining a subquery first. This example calculates the average order amount in a CTE, then deletes orders exceeding that average and returns their IDs. Demonstrates advanced query composition.

```TypeScript
const averageAmount = db.$with('average_amount').as(
  db.select({ value: sql`avg(${orders.amount})`.as('value') }).from(orders)
);

const result = await db
	.with(averageAmount)
	.delete(orders)
	.where(gt(orders.amount, sql`(select * from ${averageAmount})`))
	.returning({
		id: orders.id
	});
```

```SQL
with "average_amount" as (select avg("amount") as "value" from "orders") 
delete from "orders" 
where "orders"."amount" > (select * from "average_amount") 
returning "id"
```