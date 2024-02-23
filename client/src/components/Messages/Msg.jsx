import React from "react";
import Message from "./Message";

const Msg = () => {
    return (
        <>
            <div className="border-solid border-4 border-black rounded-2xl p-5 py-6 bg-[#FEFFF0] ">
                <div className="heading font-extrabold text-2xl flex  items-center px-5 py-4 mb-3 ">
                    Messages
                </div>
                <hr className="line-break" />
                <br />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
            </div>
        </>
    );
};

export default Msg;
