import React from "react";

const MobileNav = () => {
    return (
        <div className="mobile">
            <div className="fixed z-50 w-full h-16 max-w-lg -translate-x-1/2 bg-white border border-gray-200 rounded-full bottom-4 left-1/2 dark:bg-[#FEFFF0] dark:border-gray-500">
                <div className="grid h-full max-w-lg grid-cols-5 mx-auto">
                    <button
                        data-tooltip-target="tooltip-home"
                        type="button"
                        className="inline-flex flex-col items-center justify-center px-5 rounded-s-full hover:bg-gray-50 dark:hover:bg-gray-800 group"
                    >
                        <i className="fi fi-rs-house-blank custom-icon"></i>
                        <span className="sr-only">Home</span>
                    </button>
                    <div
                        id="tooltip-home"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                    >
                        Home
                        <div className="tooltip-arrow" data-popper-arrow></div>
                    </div>
                    <button
                        data-tooltip-target="tooltip-wallet"
                        type="button"
                        className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
                    >
                        <i className="fi fi-rr-messages custom-icon"></i>
                        <span className="sr-only">Messages</span>
                    </button>
                    <div
                        id="tooltip-wallet"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                    >
                        Messages
                        <div className="tooltip-arrow" data-popper-arrow></div>
                    </div>
                    <div className="flex items-center justify-center">
                        <button
                            data-tooltip-target="tooltip-new"
                            type="button"
                            className="inline-flex items-center justify-center w-10 h-10 font-medium bg-[#000] rounded-full hover:bg-blue-700 group focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800"
                        >
                            <svg
                                className="w-4 h-4 text-yellow-300"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 18 18"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M9 1v16M1 9h16"
                                />
                            </svg>
                            <span className="sr-only">New item</span>
                        </button>
                    </div>
                    <div
                        id="tooltip-new"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                    >
                        Create new item
                        <div className="tooltip-arrow" data-popper-arrow></div>
                    </div>
                    <button
                        data-tooltip-target="tooltip-settings"
                        type="button"
                        className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
                    >
                        <i className="fi fi-rr-bookmark custom-icon"></i>
                        <span className="sr-only">Bookmark</span>
                    </button>
                    <div
                        id="tooltip-settings"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                    >
                        Bookmark
                        <div className="tooltip-arrow" data-popper-arrow></div>
                    </div>
                    <button
                        data-tooltip-target="tooltip-profile"
                        type="button"
                        className="inline-flex flex-col items-center justify-center px-5 rounded-e-full hover:bg-gray-50 dark:hover:bg-gray-800 group"
                    >
                        <i className="fi fi-rs-user custom-icon"></i>
                        <span className="sr-only">Profile</span>
                    </button>
                    <div
                        id="tooltip-profile"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                    >
                        Profile
                        <div className="tooltip-arrow" data-popper-arrow></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileNav;
