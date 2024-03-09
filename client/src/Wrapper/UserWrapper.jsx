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

const UserWrapper = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="/login" element={<Login />} />
            <Route exact path="/user/verify/:userId" element={<Verify />} />
            <Route exact path="/register/" element={<SignUp />} />

            <Route exact path="/notification/" element={<Notification />} />
            <Route exact path="/message/" element={<Message />} />
            <Route exact path="/profile/" element={<Profile />} />
        </Routes>
    );
};

export default UserWrapper;
