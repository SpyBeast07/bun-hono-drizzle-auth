export interface User {
    id: string;
    name: string;
    email: string;
    emailVerified: boolean;
    image: string | null;
    createdAt: string;
    updatedAt: string;
}

export interface Business {
    id: string;
    ownerId: string;
    name: string;
    description: string | null;
    location: string | null;
    isOpen: boolean;
    statusMessage: string | null;
    statusMessageExpiresAt: string | null;
    createdAt: string;
}

export interface MenuItem {
    id: string;
    businessId: string;
    name: string;
    price: string | null;
    available: boolean;
    createdAt: string;
}

export interface AuthResponse {
    token: string;
    user: User;
}
