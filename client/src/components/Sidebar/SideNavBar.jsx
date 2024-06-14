import React from "react";
import "../Sidebar/SideBar.css";
import MobileNav from "./MobileNav";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const SideNavBar = () => {
    const user = useSelector((state) => state.auth);
    const username = user.email.split("@")[0];
    
    return (
        <>
            {/* Pcs and tab */}
            <div className="bg-[#fefff0]  border-solid border-4 border-black paddings rounded-2xl pades mobile-hide ">
                <div className="pc">
                    <Link to={`/profile/${username}`} className="flex">
                        <div className="">
                            <svg
                                width="75"
                                height="75"
                                viewBox="0 0 100 100"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <rect
                                    width="100"
                                    height="100"
                                    rx="50"
                                    fill="#FFDD5D"
                                />
                                <mask
                                    id="mask0_45_5110"
                                    style={{ maskType: "alpha" }}
                                    maskUnits="userSpaceOnUse"
                                    x="12"
                                    y="15"
                                    width="75"
                                    height="71"
                                >
                                    <rect
                                        x="12"
                                        y="17.7463"
                                        width="72.4821"
                                        height="67.8273"
                                        transform="rotate(-2.17145 12 17.7463)"
                                        fill="#D9D9D9"
                                    />
                                </mask>
                                <g mask="url(#mask0_45_5110)">
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M71.7671 64.9431C71.0278 62.4682 70.3949 61.431 69.217 60.6058C68.1153 59.8338 66.5262 59.2107 64.2263 58.7987C61.8347 58.4735 61.7206 57.2415 61.0497 55.2798C60.8533 54.6899 59.9861 54.5638 59.6307 55.0079C59.5762 54.9533 59.5196 54.9036 59.4612 54.859C59.501 54.5726 59.0558 53.7729 59.0594 53.5002C59.0961 50.6544 58.1128 49.2633 55.7734 48.821C55.2647 48.7248 51.8361 48.7868 51.3495 48.9413C49.222 49.6172 47.1771 51.5844 47.5872 53.8452C46.9457 54.7526 46.3056 55.3158 45.2752 55.6394C43.6616 55.9067 45.3469 78.8428 48.6847 92.4957C50.1168 98.3535 78.6264 87.2097 77.2088 84.3025C77.3733 83.7535 77.0134 83.1706 77.1445 82.6051C77.2393 82.1959 77.5151 82.0177 77.6419 81.6113C77.8204 81.0393 77.5743 80.2904 77.3275 79.723C77.2244 79.4395 77.4746 79.1206 77.5363 78.8249C77.8291 77.4303 77.0432 77.5821 76.4382 76.6801C76.4466 76.677 76.5698 76.012 76.5693 76.0154C76.6387 75.5413 76.3972 74.9466 76.1916 74.5609C76.0526 74.3002 75.7703 74.1445 75.4971 74.1853C75.7378 73.2372 76.0576 72.4437 76.399 71.526C77.0031 69.9084 77.5718 68.2186 78.4713 66.7411C78.8397 66.136 78.5035 65.6051 77.8697 65.5889C75.8181 65.5365 73.7828 65.3186 71.7671 64.9431Z"
                                        fill="white"
                                    />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M47.3442 55.6144L62.2771 57.6551L69.2177 60.6054L70.3634 61.4207L64.2082 73.3394L54.0914 75.5841L51.7515 82.4231L52.5694 90.0011L69.0672 87.3971L76.1837 86.2767L78.1213 92.9964L77.9236 95.7984L77.5357 97.2303L59.995 102.686C59.995 102.686 50.9375 102.154 49.3378 102.214C47.7381 102.275 36.0534 103.885 36.0534 103.885L33.3287 103.697C33.3287 103.697 27.0847 97.5977 26.068 95.3811C25.0514 93.1645 22.5187 79.552 22.5187 79.552L22.6606 77.4403L27.3419 63.8955C27.3419 63.8955 28.0108 63.2403 28.8435 62.1363C29.6762 61.0323 47.3442 55.6144 47.3442 55.6144Z"
                                        fill="#9DDADB"
                                    />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M74.9224 73.878C73.5844 73.997 72.2544 74.3665 71.0636 74.9899C70.5765 75.2454 70.1398 75.604 70.0295 76.171C69.9738 76.4605 70.0014 76.7564 70.0478 77.0449C70.0828 77.2635 70.1001 77.5434 70.2965 77.6848C70.33 77.7087 70.3654 77.7267 70.4022 77.7393C69.9625 77.9582 69.5457 78.2169 69.1766 78.4811C68.8393 78.7227 68.497 79.0882 68.3523 79.4913C68.3373 79.4467 68.3224 79.4052 68.3075 79.3657C68.0049 78.5715 67.5607 77.9286 66.8836 77.5106C66.7982 77.2403 65.9489 76.0948 65.2031 76.1675C64.3864 76.2466 63.7302 76.3314 63.0043 76.7358C62.7342 76.7401 62.4651 76.754 62.1994 76.776C62.1537 76.7792 62.1582 76.8413 62.2021 76.8447C62.419 76.864 62.6361 76.886 62.8533 76.9133C63.3696 76.976 63.8853 77.0608 64.3907 77.1712C64.9971 77.3038 65.6241 77.4362 66.1956 77.6863C67.304 78.1723 68.03 79.5251 67.9372 80.7296C67.9217 80.9272 67.8681 81.5246 67.5928 81.4736C67.3602 81.4305 67.2503 80.9526 67.1629 80.7775C66.9291 80.3124 66.5284 80.0181 66.0539 79.8265C65.4966 79.6011 64.904 79.4569 64.3287 79.2848C64.0029 79.1868 63.6771 79.0888 63.3505 78.9916C63.0164 78.891 62.697 78.7468 62.3488 78.8392C62.1384 78.8954 62.1236 79.1492 62.2481 79.2897C62.4377 79.5038 62.7093 79.5587 62.9737 79.6397C63.3229 79.7465 63.6712 79.8533 64.0196 79.96C64.5582 80.1247 65.121 80.2596 65.6479 80.4662L65.6331 80.5038C65.5904 80.4935 65.5424 80.5376 65.5526 80.589C65.6484 81.0645 65.7773 81.6135 65.6756 82.0973C65.5955 82.4808 65.2779 82.9143 64.8404 82.819C64.9061 82.7543 64.9271 82.6461 64.8775 82.5488C64.692 82.1885 62.3893 80.826 62.2093 81.3712C62.2034 81.3906 62.2245 81.4039 62.2408 81.4004C62.4102 81.3583 62.7074 81.6388 62.8477 81.7261C63.0501 81.8517 63.2555 81.9742 63.4559 82.1036C63.6753 82.2449 63.8898 82.3938 64.0992 82.5479C64.2638 82.6691 64.3893 82.7969 64.5751 82.8543C64.4808 82.9037 64.4078 82.9917 64.3794 83.1016C64.3073 83.3879 64.1567 83.6343 63.8842 83.7699C63.5985 83.9109 63.2678 83.8413 62.9629 83.8848C62.5475 83.9426 62.1912 84.1547 61.898 84.4494C61.2825 85.0695 61.0021 86.1317 60.1203 86.4472C59.5935 86.6354 58.998 86.552 58.4553 86.4963C57.8494 86.4341 57.2597 86.3891 56.656 86.5008C56.0781 86.608 55.5363 86.8299 55.0147 87.0955C54.5258 87.3443 53.9855 87.6255 53.5571 87.9853C53.4555 87.7085 53.3533 87.4347 53.2728 87.1512C53.0831 86.4809 52.9682 85.795 52.9204 85.1008C52.8754 84.4398 52.8872 83.7736 52.919 83.1126C52.9347 82.7824 52.9667 82.4532 52.9823 82.1231C52.9865 82.04 52.998 81.9507 53.0057 81.8616C53.7763 81.3665 54.5909 80.9788 55.4118 80.5804C55.4141 80.5796 55.4162 80.5779 55.4184 80.5772C55.4439 80.5643 55.4686 80.5523 55.494 80.5402C55.4932 80.5387 55.4924 80.5373 55.4909 80.5359C55.5841 80.4739 55.6477 80.3937 55.6843 80.3049C56.8571 79.4614 57.8215 78.3342 58.5231 77.0353C58.8171 76.491 59.0986 75.9272 59.4921 75.4451C59.9109 74.9308 60.4196 74.6153 61.057 74.4371C61.8022 74.2282 62.573 74.0908 63.3412 74.0002C63.7607 73.9511 64.2289 73.8814 64.6875 73.8663C65.0071 73.8563 65.3208 73.8718 65.6108 73.9401C66.0404 74.0408 66.3011 74.3546 66.5804 74.6712C66.8474 74.9751 67.113 75.2798 67.3634 75.5976C67.6006 75.8988 67.8258 76.2109 68.0234 76.5396C68.1419 76.7365 68.2526 76.9397 68.3472 77.1501C68.3804 77.2244 68.4236 77.3086 68.445 77.3863C68.4665 77.4647 68.4357 77.5496 68.5244 77.5462C68.1586 77.5652 67.9499 78.4871 68.3129 78.4519C68.8233 78.4027 69.0572 77.7798 68.9363 77.2395C68.7207 76.2756 67.7106 75.1399 67.5102 74.8988C67.0671 74.3662 66.6045 73.6669 65.919 73.4374C65.9093 73.4341 65.8988 73.4309 65.8891 73.4282C66.0787 73.2344 66.2255 73.0053 66.3655 72.7726C66.5097 72.5331 66.6821 72.2585 66.722 71.9793C66.7471 71.8015 66.5236 71.7091 66.4252 71.8676C66.2822 72.0989 66.2198 72.3871 66.1161 72.6392C66.0103 72.8949 65.8788 73.1376 65.7775 73.3954C65.5074 73.3235 65.2176 73.2968 64.9236 73.2953C65.275 72.7799 65.8712 71.7887 65.9428 71.6616C66.2714 71.073 66.5824 70.4674 66.8786 69.8615C67.1987 69.2051 67.4684 68.524 67.7736 67.8608C67.9467 67.4848 68.1211 67.1056 68.3153 66.7398C68.3824 66.6144 68.4546 66.4887 68.5377 66.3737C68.5538 66.351 68.5746 66.3317 68.5937 66.3102C68.6162 66.2967 68.6393 66.2818 68.6524 66.2739C68.7695 66.2006 68.8056 66.0393 68.886 65.9347C69.0145 65.7663 69.172 65.7411 69.3745 65.7311C69.8061 65.7103 70.2401 65.7109 70.6716 65.7064C71.306 65.7001 71.9399 65.7012 72.5742 65.7105C72.7661 65.7136 72.9572 65.7167 73.1492 65.7213C74.0719 65.7411 74.9944 65.7779 75.9154 65.8312C76.7303 65.878 77.547 65.9737 78.3619 66.0035C77.3607 68.6592 76.238 71.272 74.9506 73.8015C74.9375 73.8271 74.9281 73.8526 74.9224 73.878ZM69.0729 80.8438C68.8985 80.932 68.7301 81.0398 68.574 81.1613C68.5938 80.9806 68.5933 80.7909 68.5787 80.6012C68.7164 80.7381 68.8888 80.8131 69.0729 80.8438ZM76.4781 76.0602C76.4656 76.0621 76.454 76.0692 76.4486 76.082C76.2223 76.5978 76.3464 77.1596 76.7624 77.5415C76.9802 77.7405 77.4468 77.9569 77.4448 78.2976C77.4427 78.5731 77.152 78.8152 77.0327 79.047C76.9217 79.263 76.8861 79.4969 76.9902 79.7226C77.1233 80.0114 77.4686 80.1153 77.5964 80.3993C77.7582 80.7597 77.5346 81.2103 77.3781 81.5353C77.2325 81.8363 77.041 82.139 76.9183 82.4562C76.0347 82.957 74.0215 83.8819 73.777 83.9386C73.4791 84.0083 73.1802 84.0752 72.8804 84.1385C72.3053 84.2609 71.7284 84.3761 71.1496 84.4803C70.8201 84.5394 70.4898 84.5978 70.1592 84.6467C69.8705 84.6887 69.5453 84.7432 69.3033 84.534C68.8156 84.1111 69.0516 83.3624 69.3327 82.906C69.3383 82.8969 69.3379 82.8887 69.3355 82.8814C69.6139 82.805 69.8913 82.7174 70.1687 82.6529C70.7024 82.529 71.2403 82.4213 71.7794 82.3231C72.887 82.1218 74.004 81.9743 75.1194 81.8262C75.3957 81.789 75.3821 81.3527 75.1028 81.3892C73.5001 81.5973 71.8891 81.7983 70.314 82.1683C69.9191 82.2602 69.5275 82.3625 69.1386 82.4757C68.9548 82.5287 68.7586 82.6079 68.5642 82.6175C68.5524 82.618 68.5405 82.6184 68.5287 82.618C68.1474 82.6207 68.0796 82.2967 68.2786 82.0174C68.3032 81.9831 68.3286 81.9488 68.3547 81.9161C68.7077 81.4613 69.1572 81.1495 69.6203 80.8268C70.1493 80.7342 70.6734 80.5529 71.1894 80.4149C72.4635 80.0733 73.7375 79.7318 75.0123 79.3909C75.2622 79.3237 75.1404 78.9403 74.8904 79.0068C73.9227 79.265 72.955 79.523 71.9873 79.7811L70.5711 80.1592C70.2881 80.2343 69.9365 80.3772 69.6026 80.4366C69.4379 80.4657 69.2775 80.4748 69.1313 80.4463C68.659 80.3532 68.6132 79.7691 68.8019 79.4139C69.0133 79.015 69.4315 78.7547 69.8024 78.5192C70.4452 78.1105 71.1343 77.8082 71.8055 77.4643C71.9257 77.4331 72.046 77.4019 72.1663 77.3707C72.8658 77.1886 73.6689 77.0819 74.3221 76.7721C74.5178 76.6802 74.3972 76.3708 74.2007 76.3827C73.6857 76.4134 73.1536 76.6172 72.6542 76.745C72.1137 76.8839 71.5725 77.0222 71.032 77.1604C70.9777 77.1743 70.6578 77.2901 70.6081 77.2691C70.5765 77.2554 70.5613 77.148 70.5482 77.0773C70.506 76.8449 70.4724 76.6004 70.4997 76.3646C70.5597 75.8358 70.9888 75.5722 71.4248 75.3535C72.3957 74.8672 73.4683 74.5452 74.5421 74.3919C74.7896 74.3566 75.0374 74.331 75.2871 74.3133C75.5802 74.2933 75.8201 74.2324 75.9797 74.5158C76.2306 74.9625 76.3815 75.5433 76.4781 76.0602ZM75.7322 92.6269C75.4887 91.8906 75.5172 91.0935 75.3409 90.3397C75.25 89.9509 75.1313 89.5662 75.0034 89.188C74.9002 88.8826 74.735 88.5598 74.7055 88.238C74.7036 88.2165 74.7285 88.2032 74.7463 88.2124C75.0566 88.3748 75.3041 88.742 75.4885 89.0304C75.7092 89.3757 75.8815 89.7394 76.024 90.1232C76.3078 90.888 76.5522 91.8142 76.2536 92.6071C76.1647 92.8432 75.8234 92.9027 75.7322 92.6269ZM67.5453 98.5811C67.216 98.3694 66.9704 98.0653 66.6879 97.7995C66.4101 97.538 66.8125 97.1039 67.0904 97.3654C67.3314 97.5921 67.5441 97.8788 67.8244 98.0589C67.9594 98.1456 68.0265 98.309 67.946 98.4596C67.8747 98.5926 67.6799 98.6676 67.5453 98.5811ZM65.4303 90.046C66.0063 89.7706 66.5717 89.473 67.1776 89.2675C67.5397 89.1445 67.7165 89.7097 67.3565 89.8318C66.7985 90.0213 66.2786 90.2919 65.7483 90.5454C65.4077 90.7082 65.0875 90.2098 65.4303 90.046ZM59.2397 90.103C59.083 89.7551 59.6498 89.5811 59.8041 89.9241C59.9818 90.3189 60.1828 90.7025 60.3604 91.0972C60.5169 91.4451 59.9503 91.6191 59.796 91.2761C59.6183 90.8814 59.4172 90.4978 59.2397 90.103ZM53.4035 97.3903C53.3129 97.5211 53.1565 97.596 53.0028 97.5118C52.8741 97.4412 52.7897 97.2436 52.8814 97.1112C53.1491 96.7247 53.4206 96.3426 53.7384 95.995C53.996 95.7133 54.4299 96.116 54.1725 96.3975C53.8888 96.7078 53.6426 97.0451 53.4035 97.3903ZM51.0296 57.8346C51.3082 58.0098 51.5546 58.2261 51.7953 58.4491C52.0752 58.7084 51.6727 59.1425 51.3928 58.8832C51.19 58.6952 50.9853 58.5044 50.7504 58.3568C50.6147 58.2714 50.5489 58.1056 50.6289 57.9561C50.7007 57.8222 50.8942 57.7496 51.0296 57.8346ZM60.2705 67.0172C60.1286 67.3305 60.0019 67.637 60.0064 67.9867C60.0115 68.3677 59.42 68.3903 59.4149 68.0092C59.4089 67.5515 59.5624 67.1487 59.7484 66.738C59.9057 66.3905 60.4271 66.6711 60.2705 67.0172ZM63.2388 59.2485C63.5488 59.0244 63.864 59.5259 63.5568 59.748C63.3077 59.928 63.0585 60.1081 62.8094 60.2881C62.4996 60.5121 62.1843 60.0108 62.4915 59.7887C62.7406 59.6086 62.9897 59.4286 63.2388 59.2485ZM49.6138 73.1512C49.5738 73.5292 48.9977 73.39 49.0373 73.0157C49.0987 72.4371 49.1787 71.8654 49.3135 71.299C49.4018 70.9284 49.9782 71.0635 49.8899 71.4347C49.7551 72.0011 49.6751 72.5727 49.6138 73.1512ZM47.7967 80.0061C47.4157 80.0124 47.3932 79.4209 47.7743 79.4145C48.1191 79.4088 48.4613 79.4866 48.7968 79.5569C49.1701 79.6353 49.034 80.2116 48.6612 80.1333C48.3775 80.0738 48.0883 80.0012 47.7967 80.0061ZM47.5486 93.6849C47.4202 93.7536 47.2882 93.816 47.1583 93.8815C46.8981 94.0125 46.638 94.1438 46.3781 94.2753C45.8365 94.5492 45.2952 94.824 44.7545 95.0996C43.6721 95.6513 42.5805 96.1855 41.4952 96.7318C40.3885 97.289 39.285 97.8529 38.1829 98.4194C37.6638 98.6862 37.1402 98.9441 36.6178 99.2046C36.1712 99.4273 35.623 99.8077 35.1254 99.8604C35.0998 99.8631 35.09 99.831 35.104 99.8138C35.2844 99.5923 35.5803 99.4562 35.8227 99.3075C36.0704 99.1555 36.3231 99.0118 36.5745 98.8662C37.0987 98.5625 37.6236 98.2611 38.1533 97.9672C39.2129 97.3795 40.2747 96.7958 41.3367 96.2126C42.4199 95.6179 43.5015 95.0195 44.5951 94.444C45.11 94.1731 45.6254 93.9029 46.1412 93.6334C46.4206 93.4874 46.7002 93.3417 46.9798 93.1962C47.1005 93.1333 47.2198 93.0659 47.3436 93.0091C47.508 92.9336 47.6355 92.9429 47.8062 92.8938C48.0845 92.8138 48.2197 93.1665 48.0099 93.3302C47.8372 93.4651 47.7478 93.5782 47.5486 93.6849ZM43.8296 99.9006C43.7633 99.7554 43.8836 99.5712 44.0224 99.5289C44.1887 99.4783 44.3272 99.5752 44.3941 99.7217C44.5712 100.11 44.816 100.463 45.1249 100.758C45.401 101.021 44.9988 101.455 44.7224 101.192C44.3353 100.823 44.0507 100.385 43.8296 99.9006ZM40.5642 90.5152C40.2843 90.2558 40.6869 89.8217 40.9667 90.0811L41.7624 90.8186C42.0423 91.078 41.6397 91.5121 41.36 91.2527L40.5642 90.5152ZM32.6513 89.5637C32.1063 89.7462 31.4691 89.9192 31.1111 90.4037C31.0936 90.4274 31.0617 90.399 31.0718 90.3757C31.5151 89.3601 32.8815 88.958 33.8234 88.5724C34.4897 88.2996 35.1751 88.0683 35.8673 87.8587C35.7671 87.0639 35.9274 86.2019 35.9643 85.4057C36.0037 84.5558 36.0297 83.7041 36.0273 82.8531C36.025 81.9849 35.9993 81.1118 35.9379 80.2457C35.8767 79.3827 35.7322 78.5335 35.6504 77.6742C35.6425 77.5912 35.7583 77.5828 35.7859 77.6507C36.1065 78.4388 36.2641 79.3192 36.3906 80.1582C36.5208 81.0226 36.5859 81.8869 36.6066 82.7604C36.6278 83.6586 36.6095 84.5561 36.5718 85.4536C36.5539 85.879 36.5306 86.3041 36.5095 86.7293C36.4933 87.0538 36.4923 87.3752 36.4383 87.6908C36.856 87.5714 37.2748 87.4575 37.6925 87.3463C39.0243 86.9923 40.3625 86.6599 41.6877 86.2813C42.3382 86.0956 42.9781 85.8784 43.6253 85.6825C44.2347 85.498 44.877 85.278 45.5062 85.1822C45.7307 85.1479 45.7711 85.4553 45.6258 85.5657C45.1258 85.9458 44.4532 86.2228 43.8676 86.4471C43.2799 86.6722 42.6665 86.8414 42.062 87.0146C40.8012 87.3759 39.5262 87.6805 38.2535 87.9957C36.9826 88.3106 35.7092 88.6235 34.4551 89.0001C33.8511 89.1814 33.2492 89.3633 32.6513 89.5637ZM29.0311 73.8526C28.7091 74.0585 28.3924 73.5583 28.7132 73.3531C29.1331 73.0848 29.5835 72.8781 30.0378 72.6759C30.3865 72.5208 30.5605 73.0874 30.2168 73.2404C29.8084 73.4221 29.4084 73.6116 29.0311 73.8526ZM28.6717 95.8751C28.3488 96.0791 28.0318 95.579 28.3538 95.3757C28.8061 95.0901 29.3058 94.892 29.7761 94.6393C30.1107 94.4594 30.4296 94.9585 30.094 95.1388C29.6237 95.3915 29.124 95.5895 28.6717 95.8751ZM27.6623 83.4201C27.993 83.7113 28.4246 83.8379 28.8324 83.982C29.1881 84.1075 29.0561 84.6853 28.6968 84.5584C28.1887 84.3788 27.6719 84.2169 27.2598 83.8542C26.9732 83.6019 27.3764 83.1684 27.6623 83.4201ZM30.5524 66.3439C30.9086 66.4682 30.7766 67.0459 30.4167 66.9203C30.0177 66.781 29.6071 66.6789 29.208 66.5396C28.8519 66.4152 28.9838 65.8376 29.3437 65.9632C29.7428 66.1025 30.1533 66.2045 30.5524 66.3439ZM36.5287 59.378C36.8993 59.301 37.0798 59.8651 36.7076 59.9425C36.2459 60.0386 35.7919 60.1477 35.3576 60.3349C35.0069 60.4861 34.8326 59.9197 35.1787 59.7705C35.613 59.5832 36.0671 59.4741 36.5287 59.378ZM39.2088 75.6847C38.8604 75.5295 39.1412 75.0082 39.4879 75.1627C39.8534 75.3254 40.2303 75.4477 40.6249 75.5162C41.0007 75.5815 40.8635 76.1577 40.4893 76.0926C40.0451 76.0154 39.6198 75.8678 39.2088 75.6847ZM40.8034 66.3819C41.1678 66.2671 41.3452 66.832 40.9823 66.9464C40.3439 67.1476 39.6831 67.2647 39.0392 67.4466C38.6722 67.5503 38.4939 66.9857 38.8603 66.8822C39.5042 66.7002 40.165 66.5832 40.8034 66.3819ZM48.9434 63.173C49.3205 63.228 49.1825 63.8041 48.8078 63.7494C48.4089 63.6911 48.0074 63.7052 47.6059 63.7202C47.2246 63.7345 47.2028 63.1429 47.5834 63.1286C48.0397 63.1116 48.4905 63.1068 48.9434 63.173ZM75.9657 65.243C74.9958 65.1872 74.0251 65.15 73.0535 65.1313C73.0083 65.1307 72.9639 65.1295 72.9186 65.1289C72.9131 65.1188 72.9061 65.1094 72.899 65.0993C72.565 64.6469 72.3144 64.1915 72.0927 63.674C71.8807 63.1815 71.6741 62.6733 71.3597 62.2335C71.0012 61.7324 70.5283 61.3477 70.0134 61.0182C69.7169 61.2343 69.4436 61.4846 69.1949 61.7484C68.9331 62.0258 68.4989 61.6235 68.7607 61.3459C68.9817 61.1115 69.2189 60.8938 69.4708 60.6956C69.1648 60.5252 68.8531 60.366 68.549 60.2074C67.409 59.6131 66.2443 59.0677 65.0578 58.5737C64.5063 58.3435 63.9492 58.1418 63.3883 57.9372C63.0863 57.8272 62.7869 57.6823 62.4844 57.5531C62.4978 57.3422 62.4261 57.1095 62.2596 56.9773C62.1367 56.8805 62.0429 56.8463 61.8982 56.7801C61.866 56.7701 61.8465 56.7642 61.8375 56.7608C61.8442 56.762 61.8636 56.7672 61.8958 56.7764C61.9726 56.8083 61.9781 56.7977 61.9124 56.7454C61.9042 56.6258 61.6586 56.3819 61.6001 56.2604C61.3962 55.8438 61.3208 55.3979 61.0288 55.0224C60.6264 54.5053 59.9769 54.3285 59.3855 54.5316C59.2992 53.8943 59.2576 53.2273 58.9949 52.6655C58.9877 52.6503 58.966 52.6444 58.957 52.6618C58.7218 53.0995 58.7185 53.5772 58.718 54.0719C58.7171 54.5362 58.7527 55.0095 58.8309 55.4679C58.7936 55.4989 58.7555 55.5286 58.7158 55.5574C58.5298 55.6903 58.3279 55.795 58.1147 55.875C57.7088 56.0265 57.2799 56.102 56.8496 56.1391C55.7388 56.2345 54.5876 56.1656 53.486 56.0163C52.3718 55.8653 50.6638 55.6398 49.6578 55.1233C48.994 54.7828 48.3774 54.3595 47.7532 53.9507C47.9467 53.2325 47.974 52.4673 47.7294 51.876C47.7 51.8053 47.5871 51.7963 47.5689 51.8821C47.4516 52.4597 47.4328 53.0365 47.2693 53.6092C47.2667 53.6175 47.2641 53.6265 47.2614 53.6347C47.2023 53.5978 47.1431 53.5614 47.084 53.5252C46.9476 53.4422 46.7689 53.515 46.6938 53.6436C45.493 55.7041 43.4751 55.8961 41.3651 56.3361C39.0558 56.8175 36.7361 57.3305 34.5307 58.185C32.4217 59.0026 30.42 60.1522 28.8629 61.8151C28.5104 62.1916 28.1825 62.591 27.8745 63.0066C28.1888 63.0342 28.5013 63.0838 28.8112 63.1684C29.178 63.2685 29.0439 63.8453 28.6755 63.7447C28.2773 63.636 27.8771 63.59 27.474 63.5747C26.4317 65.1203 25.6392 66.858 24.9616 68.5645C23.6619 71.8366 22.8665 75.2988 22.5729 78.8041C22.8014 78.6551 23.0344 78.5126 23.2736 78.3792C23.606 78.194 23.9244 78.6932 23.5916 78.8787C23.222 79.0847 22.864 79.3098 22.5181 79.5523C22.4211 81.0855 22.4193 82.6249 22.5139 84.1583C22.7391 87.8137 23.3759 91.5609 24.6255 95.0095C25.2384 96.7019 26.029 98.3737 27.1657 99.7805C27.68 100.418 28.2585 100.988 28.9324 101.457C29.2587 101.684 29.6025 101.885 29.9635 102.052C30.4286 102.268 31.026 102.323 31.4319 102.638C31.5654 102.742 31.6707 102.882 31.7523 103.041C31.7203 103.35 31.7268 103.659 31.8228 103.963C31.8531 104.058 31.9285 104.134 32.0194 104.168C32.0219 104.195 32.0229 104.221 32.0238 104.246C32.0243 104.258 32.0421 104.26 32.0439 104.248C32.0467 104.225 32.0495 104.202 32.0523 104.178C32.0815 104.187 32.112 104.19 32.1431 104.189C33.2665 104.15 34.39 104.08 35.5133 104C35.4162 103.737 35.312 103.476 35.2114 103.213C35.0749 102.856 35.6406 102.68 35.7759 103.034C35.8935 103.342 36.0158 103.646 36.1261 103.955C37.3295 103.864 38.5321 103.765 39.7332 103.68C42.2876 103.498 44.8436 103.372 47.3999 103.222C51.3698 102.987 55.3652 102.663 59.3508 102.68C59.4773 102.383 59.6205 102.092 59.7557 101.798C59.9151 101.452 60.4366 101.732 60.2778 102.077C60.1838 102.281 60.0862 102.483 59.9939 102.687C60.8014 102.698 61.6086 102.723 62.4148 102.768C63.7906 102.844 65.157 103.021 66.5318 103.111C67.9296 103.204 69.2907 103.126 70.6633 102.844C70.9101 102.793 71.0509 102.637 71.1044 102.449C71.1065 102.448 71.108 102.446 71.1094 102.444C71.1772 102.358 71.2412 102.287 71.3076 102.225C71.3878 102.168 71.4748 102.12 71.5775 102.076C71.7692 101.995 71.9701 101.942 72.1745 101.904C72.3995 101.861 72.6286 101.849 72.8538 101.813C73.0436 101.781 73.2286 101.738 73.4132 101.686C73.7452 101.594 74.0592 101.478 74.3705 101.327C74.6417 101.196 74.8843 101.014 75.1123 100.816C75.5854 100.442 75.9896 99.9723 76.34 99.4865C76.544 99.2026 76.735 98.9087 76.9071 98.6039C77.2069 98.0756 77.4587 97.5291 77.7133 96.9782C77.8071 96.8142 77.8919 96.6468 77.9688 96.4761C77.4253 96.3381 76.8776 96.2296 76.3074 96.242C75.9262 96.2504 75.9038 95.6588 76.285 95.6505C76.939 95.6361 77.563 95.7654 78.1841 95.924C78.2111 95.8434 78.2367 95.7622 78.2602 95.6801C78.327 95.5081 78.381 95.3319 78.4246 95.154C78.4511 95.073 78.4777 94.9921 78.5043 94.9111C78.5603 94.632 78.6164 94.3522 78.6731 94.0723C78.7902 93.6236 78.8788 93.1693 78.9392 92.7101C78.9929 92.4074 79.0317 92.1031 79.0541 91.7957C79.1295 91.0501 79.1857 90.3067 79.1632 89.5567C79.1368 89.0949 79.0897 88.6346 79.022 88.1773C78.9888 87.8661 78.9407 87.5569 78.8803 87.2504C78.7993 86.7944 78.7192 86.3428 78.5963 85.8942C78.5056 85.5912 78.4149 85.288 78.3241 84.9848C78.1025 84.3543 77.8459 83.7375 77.5542 83.1361C77.538 83.0983 77.4601 83.0168 77.415 83.0177C77.381 83.0183 77.3347 83.0511 77.3518 83.092C77.3535 83.0956 77.3551 83.1 77.3568 83.1036C77.3399 83.0695 77.3238 83.0345 77.307 83.0004C77.2924 82.9683 77.2382 82.9053 77.1983 82.9075C77.1961 82.9076 77.1938 82.9077 77.1909 82.9085C77.201 82.9008 77.2103 82.8907 77.2194 82.8793C77.473 82.555 77.6296 82.1351 77.8058 81.7641C77.952 81.4579 78.0886 81.1358 78.1186 80.7947C78.1449 80.4954 78.0829 80.2037 77.8866 79.9697C77.6633 79.7035 77.2576 79.59 77.4652 79.1852C77.701 78.7246 78.0581 78.3193 77.6682 77.8209C77.4697 77.5671 77.1656 77.435 76.9351 77.2163C76.6701 76.9635 76.5354 76.6169 76.5285 76.258C76.5444 76.2663 76.5649 76.2611 76.5715 76.2386C76.7614 75.5827 76.5791 74.8773 76.3356 74.2549C76.2028 73.9171 75.9455 73.8328 75.6499 73.827C76.833 71.283 77.9325 68.702 78.8998 66.0677C78.932 65.9813 78.9636 65.895 78.995 65.8086C79.042 65.6794 78.9262 65.5143 78.7987 65.4909C77.8697 65.324 76.9074 65.2961 75.9657 65.243Z"
                                        fill="black"
                                    />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M66.0401 35.9984C65.5855 31.4096 63.8953 26.2516 59.4171 24.1599C49.5861 20.6407 37.2253 30.9104 36.9303 40.934C36.8251 44.3654 38.8671 48.033 42.3757 48.8529C43.1865 49.8464 44.3778 50.4268 45.5507 50.9253C59.5467 57.5262 68.1936 51.4011 66.0401 35.9984Z"
                                        fill="white"
                                    />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M69.0583 33.0188C68.5222 31.69 67.9591 30.3725 67.3697 29.0664C66.7958 27.7952 66.2716 26.4943 65.573 25.2891C61.4006 18.0912 54.3197 18.3597 50.6959 19.4582C48.7668 18.7124 45.2202 19.0779 43.2718 19.8908C40.1174 21.2068 36.3951 26.0544 35.1416 28.2165C32.374 32.9903 30.7718 39.2651 32.9319 44.5782C33.2142 45.2726 33.5649 45.9123 33.9558 46.5268C33.7365 46.849 33.4816 47.1559 33.1978 47.4587C32.3546 48.3587 31.5103 49.2301 30.7906 50.2364C30.0753 51.2365 29.491 52.2933 29.0701 53.45C28.2763 55.6314 28.3264 58.0654 29.5612 60.0713C30.6355 61.8167 32.4691 63.0772 34.4831 63.1277C34.5868 63.1381 34.6906 63.1473 34.7947 63.1538C35.0775 63.5822 35.4175 63.9737 35.8013 64.3116C36.9772 65.3481 39.7038 65.7994 41.2484 65.7763C41.3299 65.8369 41.4122 65.8975 41.4944 65.9573C42.4669 66.6647 43.4861 67.3769 44.5902 67.8645C45.3381 68.1953 46.3122 68.4582 47.0684 68.1704C47.4247 68.3894 47.993 68.319 48.3304 68.1159C48.8849 67.7823 49.3243 67.2029 49.5827 66.617C50.2093 65.1944 49.988 63.6722 49.7569 62.1866C49.5021 60.5457 49.2547 58.9038 49.0044 57.2627C48.8084 55.9794 48.6049 54.675 48.1659 53.4483C47.9389 52.8127 47.65 52.2046 47.2849 51.6364C47.2919 51.5873 47.2886 51.5385 47.2728 51.4932C47.1466 51.1322 46.9071 50.9495 46.6226 50.7115C46.5859 50.681 46.5492 50.6498 46.5132 50.6179C46.3697 50.4663 46.217 50.3262 46.0549 50.2087C45.9919 50.1497 45.9297 50.0898 45.8674 50.03C45.35 49.5275 44.8589 48.9974 44.4189 48.4262C43.9921 47.8722 43.6035 47.2915 43.2323 46.6991C42.8547 46.0966 42.5946 45.426 42.2179 44.8279C42.1856 44.7765 42.1083 44.7691 42.0671 44.8143C41.962 44.9316 41.8965 45.06 41.9148 45.1918L41.8604 45.202C41.8321 45.0032 41.6418 44.8475 41.3936 44.9006C41.0219 44.9798 40.7152 45.0159 40.3866 44.904C40.4292 44.524 40.4674 44.1434 40.5047 43.7621C40.5729 43.0605 40.6344 42.3569 40.6832 41.6538C40.8675 41.6905 41.0511 41.7465 41.2316 41.8196C41.4887 41.9231 41.7334 42.0664 41.9445 42.2457C42.1527 42.423 42.3011 42.6669 42.5515 42.7862C42.8396 42.9227 43.1712 42.6665 43.0763 42.3502C42.8839 41.711 41.9198 41.3773 41.3273 41.2776C41.1238 41.2431 40.9168 41.2332 40.7107 41.2454C40.7402 40.7941 40.7646 40.343 40.7815 39.8913C40.7897 39.6778 40.7964 39.4643 40.8024 39.25C41.2541 39.0944 41.7421 39.0345 42.22 39.0815C42.3815 39.2005 42.5429 39.3181 42.6992 39.4373C43.1957 39.8168 43.69 40.1987 44.1787 40.5882C44.223 40.6228 44.2665 40.6574 44.3108 40.6928C44.6009 40.9239 44.9424 40.6711 44.882 40.3305C44.3897 37.5397 46.0235 35.2429 47.97 33.4378C50.1246 31.439 54.1653 31.0625 56.6882 27.6461C57.9175 27.8481 60.669 28.4822 61.8609 30.2305C63.5295 32.6805 63.4092 34.9369 63.637 37.7792C63.8648 40.6237 64.2821 43.584 63.7416 46.4176C63.2431 49.0305 61.7114 51.3049 59.2432 52.4174C59.1821 52.4449 59.1202 52.4717 59.0582 52.4977C57.7805 53.0357 56.3712 53.2276 54.9979 53.0219C53.4779 52.7937 52.1917 52.1509 50.9039 51.3489C50.8297 51.3036 50.7277 51.4067 50.7851 51.477C52.5232 53.6075 55.8015 54.217 58.358 53.5403C58.4775 53.5083 58.5961 53.4742 58.7139 53.4372C58.2001 55.1176 58.3852 56.9337 59.1977 58.5201C59.6863 59.4746 60.4074 60.2892 61.2718 60.9207C62.2245 61.6162 63.3945 62.1627 64.0752 63.164C64.6987 64.0815 64.5642 65.144 63.5784 65.725C63.33 65.8721 63.2493 66.3202 63.5081 66.5059C63.607 66.5762 63.706 66.648 63.8071 66.7182C64.3867 67.122 65.9646 67.8619 66.2164 67.882C68.4521 68.0616 69.8868 66.3707 70.7728 64.4066C71.8131 62.1012 71.4158 59.3549 70.0933 57.2473C69.0324 55.5562 67.0076 53.9269 67.704 51.7093C67.9524 50.9172 68.4958 50.2294 69.0253 49.6066C69.6293 48.8972 70.2823 48.2297 70.8595 47.4969C71.4332 46.7695 71.9365 45.9825 72.2002 45.0869C72.5853 43.7779 72.3164 42.3885 71.9414 41.1106C71.1376 38.3671 70.1267 35.6686 69.0583 33.0188Z"
                                        fill="black"
                                    />
                                </g>
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M56.0152 49.8885C55.5104 49.7046 55.0541 49.3831 54.7134 48.9633C54.595 48.8174 54.5598 48.6599 54.5779 48.5139C54.5983 48.3498 54.6892 48.1983 54.8171 48.0941C54.9453 47.9896 55.1086 47.9343 55.2692 47.9532C55.4088 47.9697 55.5498 48.0404 55.6651 48.1938L55.6891 48.2245C55.8918 48.478 56.1511 48.6824 56.4425 48.8095C56.7234 48.932 57.0343 48.9823 57.3523 48.9341C57.9578 48.8424 58.3644 48.4976 58.793 48.0341C58.8461 47.9757 58.8991 47.9154 58.9524 47.8542C58.9854 47.7993 59.0328 47.7631 59.0861 47.7429C59.1453 47.7206 59.2132 47.7192 59.2762 47.7385C59.337 47.7572 59.3921 47.7948 59.43 47.8462C59.466 47.895 59.4878 47.9562 59.4842 48.0277C59.4609 48.4921 59.2346 48.9143 58.9032 49.2517C58.5352 49.6264 58.0386 49.8948 57.5655 50.0002C57.0443 50.1164 56.5069 50.0677 56.0152 49.8885ZM50.9215 39.8051C50.9542 39.037 52.1139 38.8189 52.2586 39.5723C52.3882 40.2471 52.2896 40.8753 52.007 41.4981C51.737 42.093 50.9924 41.8485 50.9167 41.3189C50.8152 40.6091 50.9012 40.283 50.9215 39.8051ZM59.7866 39.1295C59.9411 38.9103 60.1704 38.7561 60.4548 38.8276C61.3433 39.051 61.1316 40.3085 60.846 40.9275C60.6908 41.2637 60.1519 41.3678 59.8959 41.0868C59.4786 40.6284 59.2516 39.6899 59.7415 39.2043C59.7543 39.1796 59.7687 39.1547 59.7866 39.1295ZM51.8019 36.416L51.9398 36.3864C52.3664 36.2958 52.8977 36.2042 53.2146 36.538C53.3826 36.7149 53.451 37.0531 53.2411 37.2366C52.8718 37.5594 52.4461 37.4558 51.9906 37.4993C51.6151 37.5351 51.2559 37.6111 50.8975 37.7284C50.111 37.9858 49.4789 38.4252 48.8172 38.9064C48.7303 38.9696 48.6351 38.8591 48.6744 38.7741C49.0373 37.9915 49.773 37.332 50.5193 36.9187C50.9176 36.6981 51.3556 36.5111 51.8019 36.416ZM58.8583 35.804L58.9653 35.8217C60.1308 36.0196 61.6513 36.4454 62.242 37.5604C62.2689 37.7202 62.2482 37.7555 62.2311 37.7786L62.2254 37.7863C62.2114 37.8061 62.2006 37.833 62.1318 37.8575C62.1123 37.8536 62.0926 37.8495 62.0727 37.8451C61.8192 37.7888 61.6172 37.7057 61.4214 37.619L61.2091 37.5242C60.9627 37.4148 60.7144 37.3098 60.4527 37.2353C59.8941 37.0762 59.3217 36.9709 58.7428 36.9251C58.6173 36.9152 58.4954 36.8776 58.3978 36.8089C58.3051 36.7437 58.2327 36.6514 58.1965 36.5264C58.1497 36.3646 58.1567 36.2405 58.2387 36.0898C58.3004 35.9766 58.3918 35.8963 58.4984 35.8482C58.6071 35.7991 58.7324 35.7837 58.8583 35.804Z"
                                    fill="black"
                                />
                            </svg>
                        </div>
                        <div className="font-bold text-2xl handlee-regular flex justify-center items-center ml-6 ">
                            <span className="">{user.user}</span>
                        </div>
                    </Link>
                </div>
                <br className="pc" />
                <hr className="line-break pc" />
                <div>
                    <div className="flex justify-center items-center mt-4 gap-4">
                        <NavLink to="/" className="flex items-center gap-4 border-l-2 border-b-2 py-2 px-4 rounded-lg w-full overflow-hidden relative transition-all duration-300 ease-in-out hover:border-black transform hover:scale-y-110 hover:scale-x-110">
                            <i className="fi fi-rs-house-blank"></i>
                            <span className="font-semibold handlee-regular pc">
                                Home
                            </span>
                            <div className="absolute inset-0 border-l-2 border-b-2 border-transparent transition-all duration-300 ease-in-out hover:border-black"></div>
                        </NavLink>
                    </div>
                    <div className="flex justify-center items-center mt-4 gap-4">
                        <NavLink to="/notification/" className="flex items-center gap-4 border-l-2 border-b-2 py-2 px-4 rounded-lg w-full overflow-hidden relative transition-all duration-300 ease-in-out hover:border-black transform hover:scale-y-110 hover:scale-x-110">
                            <i className="fi fi-rs-bell"></i>
                            <span className="font-semibold handlee-regular pc">
                                Notification
                            </span>
                            <div className="absolute inset-0 border-l-2 border-b-2 border-transparent transition-all duration-300 ease-in-out hover:border-black"></div>
                        </NavLink>
                    </div>
                    <div className="flex justify-center items-center mt-4 gap-4">
                        <NavLink to="/message/" className="flex items-center gap-4 border-l-2 border-b-2 py-2 px-4 rounded-lg w-full overflow-hidden relative transition-all duration-300 ease-in-out hover:border-black transform hover:scale-y-110 hover:scale-x-110">
                            <i className="fi fi-rr-messages"></i>
                            <span className="font-semibold handlee-regular pc">
                                Message
                            </span>
                            <div className="absolute inset-0 border-l-2 border-b-2 border-transparent transition-all duration-300 ease-in-out hover:border-black"></div>
                        </NavLink>
                    </div>
                    <div className="flex justify-center items-center mt-4 gap-4">
                        <NavLink to="/bookmark" className="flex items-center gap-4 border-l-2 border-b-2 py-2 px-4 rounded-lg w-full overflow-hidden relative transition-all duration-300 ease-in-out hover:border-black transform hover:scale-y-110 hover:scale-x-110">
                            <i className="fi fi-rr-bookmark"></i>
                            <span className="font-semibold handlee-regular pc">
                                Bookmark
                            </span>
                            <div className="absolute inset-0 border-l-2 border-b-2 border-transparent transition-all duration-300 ease-in-out hover:border-black"></div>
                        </NavLink>
                    </div>
                    
                </div>
            </div>
            
        </>
    );
};

export default SideNavBar;
