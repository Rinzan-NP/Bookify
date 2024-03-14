import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const UserLoginRoutes = ({ children }) => {
    const user = useSelector((state) => state.auth);
    
    
    if (user.authenticated === false) {
        
        return children;
    } else {
        return <Navigate to="/" />;
    }
};

export default UserLoginRoutes;
