import React from "react";
import TopBar from "../../components/User/TopBar/TopBar";
import SideNavBar from "../../components/Sidebar/SideNavBar";

const Home = () => {
    return (
        <>
            <TopBar />
            <div className="flex p-16">
                <SideNavBar/>
            </div>

        </>
    );
};

export default Home;
