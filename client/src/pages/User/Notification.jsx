import React from "react";
import TopBar from "../../components/User/TopBar/TopBar";
import SideNavBar from "../../components/Sidebar/SideNavBar";
import "../User/User.css";
import MobileNav from "../../components/Sidebar/MobileNav";
import Noti from "../../components/Notification/Notifications";

const Notification = () => {
    return (
        <>
            <TopBar />
            <div className="flex px-14 py-12 side gap-7">
                <SideNavBar />
                <div className="w-2/3" id="notificatio">
                    {" "}
                    {/* Set flex-1 for the original space */}
                    <Noti />
                </div>
                <div className="w-1/3 border-2 border-black" id="trending">
                    {" "}
                    {/* Set flex-2 for double the space */}
                    hello
                </div>
            </div>

            <MobileNav />
            dsadsa
        </>
    );
};

export default Notification;
