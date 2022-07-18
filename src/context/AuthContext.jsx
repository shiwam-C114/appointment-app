import React, { createContext, useState } from 'react'

const AuthContext = createContext()

export function AuthProvider({children}) {
    const [isAuth, toggleAuth] = useState(false)
    return(
        <AuthContext.Provider value={[isAuth,toggleAuth]}>
            {children}
        </AuthContext.Provider>
    )
    
}

export default AuthContext