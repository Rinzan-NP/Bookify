import React, { useState, useEffect } from "react";
import axios from "axios"; // Import axios for making HTTP requests
import TopBar from "../../components/User/TopBar/TopBar";
import SideNavBar from "../../components/Sidebar/SideNavBar";
import MobileNav from "../../components/Sidebar/MobileNav";
import UserProfile from "../../components/Profile/UserProfile";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Profile = () => {
    const { username } = useParams();
   
    

    

    return (
        <>
            <TopBar />
            <div className="flex px-14 py-12 side gap-7 paddings gappings">
                <div>
                    <SideNavBar />
                </div>

                <div className="w-full" id="middle_boxes">
                    <UserProfile
                        email={username}
                        // username={data.username}
                        // admires={data.followers_count}
                        // admires = {0}
                        // admiring={data.following_count}
                        // following={data.following}
                       
                    />
                </div>
            </div>

            <MobileNav />
        </>
    );
};

export default Profile;
