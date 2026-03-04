# JKLU Is It Open? – Frontend App 📱

The frontend application for "Is It Open? – JKLU" is a reactive, lightning-fast web experience built with **SvelteKit** and **Svelte 5**. It provides students with a live view of campus shops and owners with a powerful management dashboard.

---

## 🛠️ Tech Stack

- **Framework**: [SvelteKit](https://kit.svelte.dev/) (Svelte 5 Runes)
- **Data Fetching**: [TanStack Query v6](https://tanstack.com/query/latest)
- **Styling**: [TailwindCSS v4](https://tailwindcss.com/)
- **UI Components**: [Shadcn/ui](https://shadcn-svelte.com/) (using `shadcn-svelte`)
- **Icons**: Lucide Svelte

---

## 🏗️ Architecture

The frontend is organized to keep business logic separate from UI components:

```text
src/
 ├ routes/      # SvelteKit filesystem routing (Home, Login, Dashboard)
 ├ lib/
 │  ├ api/      # Fetch client with Bearer token injection
 │  ├ components/ # Reusable UI components & Shadcn blocks
 │  ├ types.ts   # Shared TypeScript interfaces
 │  └ authStore.ts # Global session & token state
```

---

## 🔄 State Management

### Server State (TanStack Query)
We use TanStack Query to manage all API-side state. This handles:
- **Caching**: Minimizes redundant network requests.
- **Auto-Refetching**: Ensures the "Open/Closed" status is always fresh.
- **Mutations**: Optimistically updates the UI when an owner toggles a status.

### Client State (Svelte Store)
Authentication state, including the Bearer token and user profile, is managed in `src/lib/authStore.ts`.
- **Persistence**: Tokens are automatically saved to `localStorage`.
- **Reactivity**: The Navbar and Dashboard respond instantly to login/logout events.

---

## ✨ UI Features

- **Business Listing**: A beautiful, filterable grid of campus venues with real-time badges.
- **Status Badges**: Intelligent status indicators (Open / Closed / Expiring).
- **Owner Dashboard**: A clean workspace for owners to:
  - Update live status messages.
  - Manage menu items (prices, names).
  - Toggle individual item availability.
- **Mobile First**: Fully responsive layout designed for students on the go.

---

## 🚦 Running Locally

### 1. Requirements
Ensure you have **npm** or **bun** installed.

### 2. Startup
```bash
# Navigate to the directory
cd frontend

# Install dependencies
npm install

# Start the dev server
npm run dev
```

The application will launch at `http://localhost:5173`.

---

## 📝 Development Notes

- **Svelte 5 Runes**: The project uses `$state`, `$derived`, and `$effect` for robust and predictable reactivity.
- **Shadcn UI**: All components are tailored for a premium look and feel.
- **Clean API layer**: The `apiFetch` utility handles auth headers centrally, preventing token-management boilerplate in components.
