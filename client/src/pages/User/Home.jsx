import React from "react";
import TopBar from "../../components/User/TopBar/TopBar";
import SideNavBar from "../../components/Sidebar/SideNavBar";
import "../User/User.css";
import MobileNav from "../../components/Sidebar/MobileNav";
import Post from "../../components/Posts/Post";
import AddPost from "../../components/Posts/AddPost";
import Admires from "../../components/RightSideBar/Admires";

const Home = () => {
    return (
        <>
            <TopBar />
            <div className="flex px-14 py-12 side ">
                <div>
                    <SideNavBar />
                </div>
                <div className="middle-box border-black border-4 p-5 rounded-xl w-8/12" id="middle_boxs">
                    <div className="mobile-hide">
                        <AddPost />
                    </div>
                    <div>
                        <Post />
                    </div>
                </div>
                <div className="w-3/12 right-side-hide">
                   <Admires/>
                </div>
            </div>
            <MobileNav />
        </>
    );
};

export default Home;
