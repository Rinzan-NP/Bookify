import React from "react";
import TopBar from "../../components/User/TopBar/TopBar";
import SideNavBar from "../../components/Sidebar/SideNavBar";
import "../User/User.css"

const Home = () => {
    return (
        <>
            <TopBar />
            <div className="flex p-16 side">
                <SideNavBar/>
            </div>

        </>
    );
};

export default Home;
