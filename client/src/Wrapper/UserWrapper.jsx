import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import PubRoute from "../utils/UserLoginRoutes";
import UserLoginRoutes from "../utils/UserLoginRoutes";

const UserWrapper = () => {
    return (
        <Routes>
            <Route
                exact
                path="/"
                element={
                    <ProtectedRoute>
                        <Home />
                    </ProtectedRoute>
                }
            ></Route>
            <Route
                path="/login"
                element={
                    <UserLoginRoutes>
                        <Login />
                    </UserLoginRoutes>
                }
            />
            <Route exact path="/user/verify/:userId" element={<Verify />} />
            <Route
                exact
                path="/register/"
                element={
                    <UserLoginRoutes>
                        <SignUp />
                    </UserLoginRoutes>
                }
            />

            <Route
                exact
                path="/notification/"
                element={
                    <ProtectedRoute>
                        <Notification />
                    </ProtectedRoute>
                }
            />
            <Route
                exact
                path="/message/"
                element={
                    <ProtectedRoute>
                        <Message />
                    </ProtectedRoute>
                }
            />
            <Route
                exact
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
