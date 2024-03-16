import React, { useState, useEffect } from "react";
import axios from "axios"; // Import axios for making HTTP requests
import TopBar from "../../components/User/TopBar/TopBar";
import SideNavBar from "../../components/Sidebar/SideNavBar";
import MobileNav from "../../components/Sidebar/MobileNav";
import UserProfile from "../../components/Profile/UserProfile";

const Profile = () => {
    const [data, setData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const accessToken = localStorage.getItem("access");
            try {
                const response = await axios.get(
                    "http://127.0.0.1:8001/api/get/user/",
                    {
                        headers: {
                            Authorization: `Bearer ${accessToken}`, // Fixed variable name
                            Accept: "application/json",
                            "Content-Type": "application/json",
                        },
                    }
                );
                if (response.status === 200) {
                    setData(response.data);
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <TopBar />
            <div className="flex px-14 py-12 side gap-7 paddings gappings">
                <div>
                    <SideNavBar />
                </div>

                <div className="w-full" id="middle_boxes">
                    <UserProfile />
                </div>
            </div>

            <MobileNav />
        </>
    );
};

export default Profile;
