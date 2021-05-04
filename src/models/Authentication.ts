import React from "react"

export interface User {
    name: string
    id: string
}

abstract class Authentication {
    abstract onAuthStateChanged(callback: (user?: User) => void): void
    abstract SignInComponent: React.FC
}

export default Authentication
