import { writable } from "svelte/store"
import type { User } from "./types"

function createAuthStore() {
    const { subscribe, set, update } = writable<{
        user: User | null;
        token: string | null;
    }>({
        user: null,
        token: typeof window !== "undefined" ? localStorage.getItem("auth_token") : null
    })

    return {
        subscribe,
        login: (user: User, token: string) => {
            localStorage.setItem("auth_token", token)
            set({ user, token })
        },
        logout: () => {
            localStorage.removeItem("auth_token")
            set({ user: null, token: null })
        },
        setUser: (user: User) => {
            update((state) => ({ ...state, user }))
        }
    }
}

export const authStore = createAuthStore()
