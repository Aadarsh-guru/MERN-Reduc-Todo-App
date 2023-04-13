import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {

    const [auth, setAuth] = useState('')
    const [account, setAccount] = useState({})

    axios.defaults.headers.common["Authorization"] = auth;

    useEffect(() => {
        if (!auth || !account) {
            setAuth(JSON.parse(localStorage.getItem('token')))
            setAccount(JSON.parse(localStorage.getItem('account')))
        }
        // eslint-disable-next-line
    }, [auth])

    return (
        <AuthContext.Provider value={{ auth, setAuth, account, setAccount }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider