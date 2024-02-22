import React from "react";
import "../Notification/Notification.css";
import Noti from "./Notification";

const Notification = () => {
    return (
        <>
            <div className="border-solid border-4 border-black rounded-2xl p-5 py-6 bg-[#FEFFF0]">
                <div className="heading font-extrabold text-2xl flex  items-center px-5 py-4 mb-3">
                    All activity
                </div>
               
                <hr className="line-break" />
                <br />
                <div className="py-4 px-5">
                    <div className="sections mb-5 flex gap-3">
                        <div className="bg-gray-200 px-5 py-1 rounded-xl feature-paddings">
                            <span className="feature-text xs-text">All</span>
                        </div>
                        <div className="bg-gray-200 px-5 py-1 rounded-xl feature-paddings">
                            <span className="feature-text xs-text">Mentions</span>
                        </div>
                        <div className="bg-gray-200 px-5 py-1 rounded-xl feature-paddings">
                            <span className="feature-text xs-text">Messages</span>
                        </div>
                        <div className="bg-gray-200 px-5 py-1 rounded-xl feature-paddings">
                            <span className="feature-text xs-text text-xs">Follow</span>
                        </div>
                    </div>
                    <div className="notifications">
                        <Noti />
                        <Noti />
                        <Noti />
                        <Noti />
                        <Noti />
                        <Noti />
                        <Noti />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Notification;
