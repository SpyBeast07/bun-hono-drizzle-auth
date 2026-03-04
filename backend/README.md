# JKLU Is It Open? – Backend API 🛠️

This is the backend API for the "Is It Open? – JKLU" project. It provides high-performance endpoints for managing campus businesses, menu items, and owner authentication.

---

## 🛠️ Tech Stack

- **Runtime**: [Bun](https://bun.sh/) (Fast all-in-one JavaScript runtime)
- **Framework**: [Hono](https://hono.dev/) (Lightweight, ultra-fast web framework)
- **ORM**: [Drizzle ORM](https://orm.drizzle.team/)
- **Database**: PostgreSQL
- **Auth**: [Better Auth](https://better-auth.com/) (Bearer Token integration)

---

## 🏗️ Architecture

The backend follows a modular feature-based structure for scalability and maintainability:

```text
src/
 ├ auth/        # Authentication routes & logic
 ├ business/    # Business profiles & status management
 ├ menu/        # Menu item CRUD & availability
 ├ db/          # Drizzle schema & connection setup
 └ middleware/  # Auth & security middlewares
```

---

## 🔐 Authentication

The system uses **Bearer Token Authentication**. 

- **Login**: When an owner logs in, the server returns a session token.
- **Usage**: This token must be included in the `Authorization` header for all protected requests.

**Example Header:**
```text
Authorization: Bearer <YOUR_SESSION_TOKEN>
```

---

## 🛣️ API Endpoints

### Public Endpoints (Students)
- `GET /business`: List all campus businesses.
- `GET /business/:id`: Get detailed profile of a specific business.
- `GET /menu/business/:id`: Fetch the menu and real-time availability for a business.

### Protected Endpoints (Owners)
- `POST /business`: Create a new business profile.
- `PATCH /business/:id/status`: Update "Open/Closed" status and set a 12-hour status message.
- `POST /menu`: Add a new item to the business menu.
- `PATCH /menu/:id`: Toggle item availability or update details.

---

## 🗄️ Database Schema

The database consists of the following core tables:
- **Users**: Admin/Owner accounts.
- **Sessions**: Active authentication sessions.
- **Businesses**: Profiles including name, location, and "Open" state.
- **Menu Items**: Products linked to businesses with price and stock status.

---

## 🚦 Running Locally

### 1. Requirements
Ensure you have **Bun** and **Docker** installed.

### 2. Startup
```bash
# Install dependencies
bun install

# Start PostgreSQL via Docker
docker-compose up -d

# Run migrations to setup tables
bun run migrate

# Start the dev server (Hot reload enabled)
bun run dev
```

The API will be available at `http://localhost:3000`.

---

## 📜 Implementation Details
- **Automated Expiry**: Status messages utilize a timestamp-based expiry logic. Information older than 12 hours is treated as expired in the service layer.
- **Type Safety**: Full end-to-end type safety using Drizzle schema and Hono context variables.
