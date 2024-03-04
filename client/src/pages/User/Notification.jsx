import React from "react";
import TopBar from "../../components/User/TopBar/TopBar";
import SideNavBar from "../../components/Sidebar/SideNavBar";
import "../User/User.css";
import MobileNav from "../../components/Sidebar/MobileNav";
import Noti from "../../components/Notification/Notifications";
import Admires from "../../components/RightSideBar/Admires";

const Notification = () => {
    return (
        <>
            <TopBar />
            <div className="flex px-14 py-12 side gap-7 paddings gappings">
                <div>
                    <SideNavBar />
                </div>

                <div className="w-8/12" id="middle_box">
                    {" "}
                    {/* Set flex-1 for the original space */}
                    <Noti />
                </div>
                <div className="w-3/12 mobile-hide">
                   <Admires/>
                </div>
            </div>

            <MobileNav />
        </>
    );
};

export default Notification;
