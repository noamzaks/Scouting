import Authentication, { User } from "models/Authentication"
import Supabase from "adapters/supabase/Supabase"
import React from "react"
import SupabaseSignInComponent from "adapters/supabase/components/SupabaseSignInComponent"

class SupabaseAuthentication extends Authentication {
    onAuthStateChanged(callback: (user?: User) => void): void {
        Supabase.auth.onAuthStateChange((event, session) => {
            const id = session?.user.id
            if (!id) {
                callback(undefined)
                return
            }
            const name = session?.user.user_metadata.displayName
            callback({ name: name ?? "Unknown Name", id: id })
        })
    }

    SignInComponent: React.FC = SupabaseSignInComponent
}

export default SupabaseAuthentication
