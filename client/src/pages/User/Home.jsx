import React from "react";
import TopBar from "../../components/User/TopBar/TopBar";
import SideNavBar from "../../components/Sidebar/SideNavBar";
import "../User/User.css";
import MobileNav from "../../components/Sidebar/MobileNav";
import Post from "../../components/Posts/Post";

const Home = () => {
    return (
        <>
            <TopBar />
            <div className="flex px-14 py-12 side gap-7">
                <SideNavBar />
                <div className="middle-box ">
                    <div></div>
                    <div>
                        <Post />
                    </div>
                </div>
            </div>
            <MobileNav />
        </>
    );
};

export default Home;
