import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoute = () => {

    const [session, setSession] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(async () => {
        try {
            const res = await axios.post("/users/auth")
            if (res.status != 200) {
                setSession(false)
                setLoading(false)
            } else {
                setSession(true)
                setLoading(false)
            }
        } catch (error) {
            setSession(false)
            setLoading(false)
        }


    }, [])

    if(loading){
        if (session) {
            return <Outlet />
        }
        return <Navigate to="/dashboard" />
    }
    
}

export default PrivateRoute