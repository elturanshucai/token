import React from "react";
import { Navigate } from "react-router-dom"

function Protected({ login, children }) {
    if (!localStorage.getItem('token')) {
        return <Navigate to='/login2' replace />
    }
    return children
}
export default Protected