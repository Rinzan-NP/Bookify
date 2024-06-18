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
    const [data, setData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `http://127.0.0.1:8000/api/get/user/${
                        username + "@gmail.com"
                    }`
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
                    <UserProfile
                        username={username}
                        admires={data.followers_count}
                        admiring={data.following_count}
                    />
                </div>
            </div>

            <MobileNav />
        </>
    );
};

export default Profile;
