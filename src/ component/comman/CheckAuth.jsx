import React from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'

const CheckAuth = (isAuthenticate,isAdmin,children) => {

    const location = useLocation()
    

    //logic
    // Check for unauthenticated users trying to visit the /shop page
    // Check for authenticated users trying to visit the /login page
    // Check for non-admins trying to visit admin pages

    if (!isAuthenticate && location.pathname.includes("/shop")) {
        return <Navigate to="/login" replace />
    }
    if (isAuthenticate && location.pathname.includes("/login")) {
        if (isAdmin) {
            return <Navigate to="/admin/home" replace />
        }
        return <Navigate to="/" replace />
    }
    if (isAuthenticate && isAdmin && location.pathname.includes("/shop")) {
        return <Navigate to="/admin/home" replace />;
    }

    if (isAuthenticate && !isAdmin && location.pathname.includes("/admin")) {
        return <Navigate to="/" replace />;
    }

    return <>
      {children}
    </>
  
}

export default CheckAuth