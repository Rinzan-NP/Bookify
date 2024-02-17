import React from "react";
import TopBar from "../../components/User/TopBar/TopBar";
import SideNavBar from "../../components/Sidebar/SideNavBar";
import "../User/User.css"
import MobileNav from "../../components/Sidebar/MobileNav";

const Home = () => {
    return (
        <>
            <TopBar />
            <div className="flex px-14 py-12 side">
                <SideNavBar/>
            </div>
            <MobileNav/>

        </>
    );
};

export default Home;
