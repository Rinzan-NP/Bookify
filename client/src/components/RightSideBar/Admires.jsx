import React from "react";
import Admire from "./Admire";

const Admires = () => {
    return (
        <div className="border-4 rounded-xl border-black p-7 bg-[#FEFFF0] show">
            <div className="heading flex gap-4 ">
                <div className="admire-img">
                    <svg
                        width="50"
                        height="50"
                        viewBox="0 0 50 50"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M25.6249 25.4583C26.7365 24.4961 27.6282 23.306 28.2392 21.9688C28.8503 20.6315 29.1666 19.1785 29.1666 17.7083C29.1666 14.9456 28.0691 12.2961 26.1156 10.3426C24.1621 8.38909 21.5126 7.29163 18.7499 7.29163C15.9872 7.29163 13.3377 8.38909 11.3842 10.3426C9.43072 12.2961 8.33325 14.9456 8.33325 17.7083C8.33324 19.1785 8.64951 20.6315 9.2606 21.9688C9.87169 23.306 10.7633 24.4961 11.8749 25.4583C8.95854 26.7789 6.48422 28.9115 4.74779 31.6011C3.01137 34.2907 2.08632 37.4235 2.08325 40.625C2.08325 41.1775 2.30275 41.7074 2.69345 42.0981C3.08415 42.4888 3.61405 42.7083 4.16659 42.7083C4.71912 42.7083 5.24902 42.4888 5.63972 42.0981C6.03043 41.7074 6.24992 41.1775 6.24992 40.625C6.24992 37.3098 7.56688 34.1303 9.91108 31.7861C12.2553 29.4419 15.4347 28.125 18.7499 28.125C22.0651 28.125 25.2446 29.4419 27.5888 31.7861C29.933 34.1303 31.2499 37.3098 31.2499 40.625C31.2499 41.1775 31.4694 41.7074 31.8601 42.0981C32.2508 42.4888 32.7807 42.7083 33.3333 42.7083C33.8858 42.7083 34.4157 42.4888 34.8064 42.0981C35.1971 41.7074 35.4166 41.1775 35.4166 40.625C35.4135 37.4235 34.4885 34.2907 32.752 31.6011C31.0156 28.9115 28.5413 26.7789 25.6249 25.4583ZM18.7499 23.9583C17.5138 23.9583 16.3054 23.5917 15.2776 22.905C14.2498 22.2182 13.4487 21.2421 12.9757 20.1001C12.5026 18.958 12.3789 17.7014 12.62 16.489C12.8612 15.2766 13.4564 14.163 14.3305 13.2889C15.2046 12.4148 16.3182 11.8195 17.5306 11.5784C18.743 11.3372 19.9997 11.461 21.1417 11.934C22.2837 12.4071 23.2598 13.2082 23.9466 14.236C24.6334 15.2638 24.9999 16.4722 24.9999 17.7083C24.9999 19.3659 24.3414 20.9556 23.1693 22.1277C21.9972 23.2998 20.4075 23.9583 18.7499 23.9583ZM39.0416 24.625C40.3749 23.1236 41.2458 21.2688 41.5495 19.284C41.8532 17.2992 41.5769 15.2689 40.7536 13.4375C39.9303 11.6061 38.5953 10.0516 36.9092 8.96126C35.2231 7.8709 33.2579 7.29109 31.2499 7.29163C30.6974 7.29163 30.1675 7.51112 29.7768 7.90182C29.3861 8.29252 29.1666 8.82243 29.1666 9.37496C29.1666 9.92749 29.3861 10.4574 29.7768 10.8481C30.1675 11.2388 30.6974 11.4583 31.2499 11.4583C32.9075 11.4583 34.4972 12.1168 35.6693 13.2889C36.8414 14.461 37.4999 16.0507 37.4999 17.7083C37.497 18.8025 37.2068 19.8768 36.6584 20.8238C36.11 21.7707 35.3226 22.557 34.3749 23.1041C34.066 23.2823 33.8081 23.5368 33.6257 23.8432C33.4433 24.1496 33.3426 24.4977 33.3333 24.8541C33.3245 25.2078 33.406 25.5579 33.5701 25.8713C33.7341 26.1848 33.9752 26.4513 34.2708 26.6458L35.0833 27.1875L35.3541 27.3333C37.8653 28.5244 39.9839 30.4083 41.4603 32.7631C42.9367 35.118 43.7094 37.8457 43.6874 40.625C43.6874 41.1775 43.9069 41.7074 44.2976 42.0981C44.6883 42.4888 45.2182 42.7083 45.7708 42.7083C46.3233 42.7083 46.8532 42.4888 47.2439 42.0981C47.6346 41.7074 47.8541 41.1775 47.8541 40.625C47.8711 37.4279 47.0704 34.2797 45.528 31.4793C43.9856 28.6789 41.7527 26.3194 39.0416 24.625Z"
                            fill="#1B1B1B"
                        />
                    </svg>
                </div>
                <div className="flex justify-center items-center">
                    <p className="text-2xl">Admires</p>
                </div>
            </div>
            <br />
            <hr
                style={{
                    border: "1px solid gray",
                }}
            />
            <br />
            <Admire />
            <Admire />
            <Admire />
            <Admire />
            <Admire />
        </div>
    );
};

export default Admires;
