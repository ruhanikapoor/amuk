export interface User{
    name: string
    email: string
    id: string
}

export interface UserStore{
    user: User | null
    login: (user: User) => void
    logout: () => void
}