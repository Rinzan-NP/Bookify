import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import isAuthUser from "./IsAuthUser";
import { logout } from "../Redux/Authentication/UserSlice";

function PrivateRoute({ children }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false); // Set initial state to false
    const [isLoading, setLoading] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const authInfo = await isAuthUser();
                console.log("auth info :" + authInfo.isAuthenticated);
                setIsAuthenticated(authInfo.isAuthenticated);
            } catch (error) {
                console.error("Failed to fetch authentication info:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (isLoading) {
        // Handle loading state, you might show a loading spinner
        return <div>Loading...</div>;
    }

    if (!isAuthenticated) {
        // If not authenticated, redirect to login page with the return URL
        dispatch(logout());
        return <Navigate to="/login" />;
    }

    // If authenticated, render the child components
    return <>{children}</>;
}

export default PrivateRoute;
