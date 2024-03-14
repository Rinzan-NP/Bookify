import React from "react";
import { Routes, Route } from "react-router-dom";
import {
    SignUp,
    Login,
    Home,
    Verify,
    Notification,
    Message,
    Profile,
} from "../pages/index";
import ProtectedRoute from "../utils/UserProtectedRoute";
import UserLoginRoutes from "../utils/UserLoginRoutes";

const UserWrapper = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <ProtectedRoute>
                        <Home />
                    </ProtectedRoute>
                }
            />
            <Route
                path="/login"
                element={
                    <UserLoginRoutes>
                        <Login />
                    </UserLoginRoutes>
                }
            />
            <Route path="/user/verify/:userId" element={<Verify />} />
            <Route
                path="/register/"
                element={
                    <UserLoginRoutes>
                        <SignUp />
                    </UserLoginRoutes>
                }
            />
            <Route
                path="/notification/"
                element={
                    <ProtectedRoute>
                        <Notification />
                    </ProtectedRoute>
                }
            />
            <Route
                path="/message/"
                element={
                    <ProtectedRoute>
                        <Message />
                    </ProtectedRoute>
                }
            />
            <Route
                path="/profile/"
                element={
                    <ProtectedRoute>
                        <Profile />
                    </ProtectedRoute>
                }
            />
        </Routes>
    );
};

export default UserWrapper;
