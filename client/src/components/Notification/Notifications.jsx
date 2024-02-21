import React from "react";
import "../Notification/Notification.css";
import Noti from "./Notification";

const Notification = () => {
    return (
        <>
            <div className="border-solid border-4 border-black rounded-2xl p-5 py-6 bg-[#FEFFF0]">
                <div className="heading font-extrabold text-2xl flex  items-center">
                    All activity
                </div>
                <br />
                <hr className="line-break" />
                <br />
                <div className="py-4 px-5">
                    <div className="sections mb-5 flex gap-3">
                        <div className="bg-gray-200 px-5 py-1 rounded-xl">
                            <span className="feature-text">All</span>
                        </div>
                        <div className="bg-gray-200 px-5 py-1 rounded-xl">
                            <span className="feature-text">Mentions</span>
                        </div>
                        <div className="bg-gray-200 px-5 py-1 rounded-xl">
                            <span className="feature-text">Messages</span>
                        </div>
                        <div className="bg-gray-200 px-5 py-1 rounded-xl">
                            <span className="feature-text">Follow</span>
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
