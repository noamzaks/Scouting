import React, { useEffect, useState } from "react"
import { User } from "models/Authentication"
import Configuration from "Configuration"

const App = () => {
    const [user, setUser] = useState<User>()

    useEffect(() => {
        Configuration.authentication.onAuthStateChanged((user) => setUser(user))
    })

    return (
        <div>
            <h1>Scouting</h1>
            <p>{user?.name ?? "Not Signed In"}</p>
            <Configuration.authentication.SignInComponent />
        </div>
    )
}

export default App
