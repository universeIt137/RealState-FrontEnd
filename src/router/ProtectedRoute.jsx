// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Navigate, useLocation } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ children, role }) => {
    const user = localStorage.getItem("role")
    const location = useLocation()
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />
    }
    if (role && user?.role !== role) {
        return <Navigate to="/login" state={{ from: location }} replace />
    }
    return children;
}

export default ProtectedRoute