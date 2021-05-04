import React, { useState } from "react"
import Supabase from "adapters/supabase/Supabase"

const SupabaseSignInComponent: React.FC = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [email, setEmail] = useState("")
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [password, setPassword] = useState("")

    return (
        <>
            <input
                type="text"
                onChange={(event) => setEmail(event.target.value)}
            />
            <input
                type="password"
                onChange={(event) => setPassword(event.target.value)}
            />
            <button
                onClick={() =>
                    Supabase.auth.signIn({
                        email: email,
                        password: password,
                    })
                }
            >
                Sign In
            </button>
        </>
    )
}

export default SupabaseSignInComponent
