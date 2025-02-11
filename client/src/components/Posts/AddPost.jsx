import React, { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const AddPost = () => {
    const [Quote, setQuote] = useState("");
    const user = useSelector((state) => state.auth);
    const user_detail = {
        user_id: user.id,
        username: user.user,
        email: user.email,
    };

    const baseUrl = "http://127.0.0.1:8000";
    const handlePost = async () => {
        try {
            const response = await axios.post( "http://127.0.0.1:8000/api/posts/", {
                Quote,user_detail
            });
            alert("Post added successfully");
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <>
            <div className="mb-4">
                <div className="border-black border-2 p-3 rounded-xl bg-gray-200">
                    <div className="bg-white p-3 rounded-xl flex gap-4">
                        <div className="bg-black h-16 w-16 rounded-xl p-5 flex items-center justify-center " onClick={handlePost}>
                            <svg
                                width="36"
                                height="49"
                                viewBox="0 0 36 49"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M15.1797 9.472C15.0624 9.472 14.9664 9.43467 14.8917 9.36C14.8171 9.28533 14.7797 9.18933 14.7797 9.072V6.048H11.8197C11.7024 6.048 11.6064 6.01067 11.5317 5.936C11.4571 5.86133 11.4197 5.77067 11.4197 5.664V4.656C11.4197 4.53867 11.4571 4.44267 11.5317 4.368C11.6064 4.29333 11.7024 4.256 11.8197 4.256H14.7797V1.328C14.7797 1.21067 14.8171 1.11467 14.8917 1.04C14.9664 0.965333 15.0624 0.927999 15.1797 0.927999H16.2837C16.4011 0.927999 16.4971 0.965333 16.5717 1.04C16.6464 1.11467 16.6837 1.21067 16.6837 1.328V4.256H19.6437C19.7504 4.256 19.8411 4.29333 19.9157 4.368C19.9904 4.44267 20.0277 4.53867 20.0277 4.656V5.664C20.0277 5.77067 19.9904 5.86133 19.9157 5.936C19.8411 6.01067 19.7504 6.048 19.6437 6.048H16.6837V9.072C16.6837 9.18933 16.6464 9.28533 16.5717 9.36C16.4971 9.43467 16.4011 9.472 16.2837 9.472H15.1797ZM2.48891 29C2.39291 29 2.31291 28.968 2.24891 28.904C2.18491 28.8293 2.15291 28.7493 2.15291 28.664C2.15291 28.6107 2.15824 28.5627 2.16891 28.52L5.97691 18.232C6.00891 18.1147 6.07291 18.0133 6.16891 17.928C6.26491 17.8427 6.39824 17.8 6.56891 17.8H8.61691C8.78757 17.8 8.92091 17.8427 9.01691 17.928C9.11291 18.0133 9.17691 18.1147 9.20891 18.232L13.0169 28.52C13.0276 28.5627 13.0329 28.6107 13.0329 28.664C13.0329 28.7493 13.0009 28.8293 12.9369 28.904C12.8729 28.968 12.7929 29 12.6969 29H11.0329C10.8729 29 10.7556 28.9627 10.6809 28.888C10.6062 28.8133 10.5582 28.744 10.5369 28.68L9.84891 26.888H5.33691L4.64891 28.68C4.62757 28.744 4.57957 28.8133 4.50491 28.888C4.43024 28.9627 4.31291 29 4.15291 29H2.48891ZM5.92891 24.824H9.24091L7.59291 20.216L5.92891 24.824ZM17.2288 29.16C16.6954 29.16 16.2208 29.0747 15.8048 28.904C15.3888 28.7227 15.0368 28.4667 14.7488 28.136C14.4608 27.7947 14.2421 27.3947 14.0928 26.936C13.9434 26.4667 13.8528 25.9493 13.8208 25.384C13.8101 25.1813 13.8048 25 13.8048 24.84C13.8048 24.6693 13.8101 24.488 13.8208 24.296C13.8421 23.7413 13.9274 23.2347 14.0768 22.776C14.2368 22.3173 14.4554 21.9227 14.7328 21.592C15.0208 21.2507 15.3728 20.9893 15.7888 20.808C16.2154 20.616 16.6954 20.52 17.2288 20.52C17.7834 20.52 18.2581 20.616 18.6528 20.808C19.0474 20.9893 19.3728 21.2293 19.6288 21.528V18.04C19.6288 17.9227 19.6661 17.8267 19.7408 17.752C19.8154 17.6773 19.9114 17.64 20.0288 17.64H21.6768C21.7834 17.64 21.8741 17.6773 21.9488 17.752C22.0234 17.8267 22.0608 17.9227 22.0608 18.04V28.6C22.0608 28.7173 22.0234 28.8133 21.9488 28.888C21.8741 28.9627 21.7834 29 21.6768 29H20.1408C20.0341 29 19.9434 28.9627 19.8688 28.888C19.7941 28.8133 19.7568 28.7173 19.7568 28.6V28.056C19.4901 28.376 19.1541 28.6427 18.7488 28.856C18.3434 29.0587 17.8368 29.16 17.2288 29.16ZM17.9648 27.24C18.3594 27.24 18.6741 27.1493 18.9088 26.968C19.1541 26.7867 19.3301 26.5573 19.4368 26.28C19.5541 26.0027 19.6181 25.704 19.6288 25.384C19.6501 25.1813 19.6608 24.9787 19.6608 24.776C19.6608 24.5733 19.6501 24.376 19.6288 24.184C19.6181 23.8853 19.5541 23.608 19.4368 23.352C19.3194 23.0853 19.1381 22.8667 18.8928 22.696C18.6581 22.5253 18.3488 22.44 17.9648 22.44C17.5594 22.44 17.2394 22.5307 17.0048 22.712C16.7701 22.8827 16.5994 23.112 16.4928 23.4C16.3968 23.688 16.3381 24.0027 16.3168 24.344C16.2848 24.6747 16.2848 25.0053 16.3168 25.336C16.3381 25.6773 16.3968 25.992 16.4928 26.28C16.5994 26.568 16.7701 26.8027 17.0048 26.984C17.2394 27.1547 17.5594 27.24 17.9648 27.24ZM27.1819 29.16C26.6486 29.16 26.1739 29.0747 25.7579 28.904C25.3419 28.7227 24.9899 28.4667 24.7019 28.136C24.4139 27.7947 24.1952 27.3947 24.0459 26.936C23.8966 26.4667 23.8059 25.9493 23.7739 25.384C23.7632 25.1813 23.7579 25 23.7579 24.84C23.7579 24.6693 23.7632 24.488 23.7739 24.296C23.7952 23.7413 23.8806 23.2347 24.0299 22.776C24.1899 22.3173 24.4086 21.9227 24.6859 21.592C24.9739 21.2507 25.3259 20.9893 25.7419 20.808C26.1686 20.616 26.6486 20.52 27.1819 20.52C27.7366 20.52 28.2112 20.616 28.6059 20.808C29.0006 20.9893 29.3259 21.2293 29.5819 21.528V18.04C29.5819 17.9227 29.6192 17.8267 29.6939 17.752C29.7686 17.6773 29.8646 17.64 29.9819 17.64H31.6299C31.7366 17.64 31.8272 17.6773 31.9019 17.752C31.9766 17.8267 32.0139 17.9227 32.0139 18.04V28.6C32.0139 28.7173 31.9766 28.8133 31.9019 28.888C31.8272 28.9627 31.7366 29 31.6299 29H30.0939C29.9872 29 29.8966 28.9627 29.8219 28.888C29.7472 28.8133 29.7099 28.7173 29.7099 28.6V28.056C29.4432 28.376 29.1072 28.6427 28.7019 28.856C28.2966 29.0587 27.7899 29.16 27.1819 29.16ZM27.9179 27.24C28.3126 27.24 28.6272 27.1493 28.8619 26.968C29.1072 26.7867 29.2832 26.5573 29.3899 26.28C29.5072 26.0027 29.5712 25.704 29.5819 25.384C29.6032 25.1813 29.6139 24.9787 29.6139 24.776C29.6139 24.5733 29.6032 24.376 29.5819 24.184C29.5712 23.8853 29.5072 23.608 29.3899 23.352C29.2726 23.0853 29.0912 22.8667 28.8459 22.696C28.6112 22.5253 28.3019 22.44 27.9179 22.44C27.5126 22.44 27.1926 22.5307 26.9579 22.712C26.7232 22.8827 26.5526 23.112 26.4459 23.4C26.3499 23.688 26.2912 24.0027 26.2699 24.344C26.2379 24.6747 26.2379 25.0053 26.2699 25.336C26.2912 25.6773 26.3499 25.992 26.4459 26.28C26.5526 26.568 26.7232 26.8027 26.9579 26.984C27.1926 27.1547 27.5126 27.24 27.9179 27.24ZM1.08397 48C0.966636 48 0.870636 47.9627 0.795969 47.888C0.721303 47.8133 0.683969 47.7173 0.683969 47.6V37.2C0.683969 37.0827 0.721303 36.9867 0.795969 36.912C0.870636 36.8373 0.966636 36.8 1.08397 36.8H5.45197C6.31597 36.8 7.06264 36.9333 7.69197 37.2C8.33197 37.4667 8.82797 37.872 9.17997 38.416C9.54264 38.9493 9.72397 39.616 9.72397 40.416C9.72397 41.2267 9.54264 41.8987 9.17997 42.432C8.82797 42.9547 8.33197 43.344 7.69197 43.6C7.06264 43.856 6.31597 43.984 5.45197 43.984H3.30797V47.6C3.30797 47.7173 3.27064 47.8133 3.19597 47.888C3.1213 47.9627 3.0253 48 2.90797 48H1.08397ZM3.25997 42H5.37197C5.91597 42 6.3373 41.8667 6.63597 41.6C6.9453 41.3333 7.09997 40.9333 7.09997 40.4C7.09997 39.9307 6.9613 39.5467 6.68397 39.248C6.4173 38.9493 5.97997 38.8 5.37197 38.8H3.25997V42ZM14.8941 48.16C14.0088 48.16 13.2674 48.016 12.6701 47.728C12.0728 47.4293 11.6141 47.008 11.2941 46.464C10.9848 45.92 10.8141 45.2853 10.7821 44.56C10.7714 44.3467 10.7661 44.1067 10.7661 43.84C10.7661 43.5627 10.7714 43.3227 10.7821 43.12C10.8141 42.384 10.9954 41.7493 11.3261 41.216C11.6568 40.672 12.1208 40.256 12.7181 39.968C13.3154 39.6693 14.0408 39.52 14.8941 39.52C15.7368 39.52 16.4568 39.6693 17.0541 39.968C17.6514 40.256 18.1154 40.672 18.4461 41.216C18.7768 41.7493 18.9581 42.384 18.9901 43.12C19.0114 43.3227 19.0221 43.5627 19.0221 43.84C19.0221 44.1067 19.0114 44.3467 18.9901 44.56C18.9581 45.2853 18.7821 45.92 18.4621 46.464C18.1528 47.008 17.6994 47.4293 17.1021 47.728C16.5048 48.016 15.7688 48.16 14.8941 48.16ZM14.8941 46.4C15.4168 46.4 15.8114 46.24 16.0781 45.92C16.3448 45.5893 16.4888 45.1093 16.5101 44.48C16.5208 44.32 16.5261 44.1067 16.5261 43.84C16.5261 43.5733 16.5208 43.36 16.5101 43.2C16.4888 42.5813 16.3448 42.1067 16.0781 41.776C15.8114 41.4453 15.4168 41.28 14.8941 41.28C14.3714 41.28 13.9714 41.4453 13.6941 41.776C13.4274 42.1067 13.2834 42.5813 13.2621 43.2C13.2514 43.36 13.2461 43.5733 13.2461 43.84C13.2461 44.1067 13.2514 44.32 13.2621 44.48C13.2834 45.1093 13.4274 45.5893 13.6941 45.92C13.9714 46.24 14.3714 46.4 14.8941 46.4ZM23.9755 48.16C23.3141 48.16 22.7435 48.0853 22.2635 47.936C21.7941 47.776 21.4101 47.584 21.1115 47.36C20.8235 47.136 20.6048 46.912 20.4555 46.688C20.3168 46.4533 20.2421 46.256 20.2315 46.096C20.2208 45.9787 20.2581 45.8827 20.3435 45.808C20.4288 45.7333 20.5141 45.696 20.5995 45.696H22.1515C22.1835 45.696 22.2155 45.7013 22.2475 45.712C22.2795 45.7227 22.3115 45.7493 22.3435 45.792C22.4821 45.888 22.6261 46 22.7755 46.128C22.9248 46.2453 23.0955 46.3467 23.2875 46.432C23.4901 46.5173 23.7408 46.56 24.0395 46.56C24.3915 46.56 24.6901 46.4907 24.9355 46.352C25.1808 46.2027 25.3035 45.9947 25.3035 45.728C25.3035 45.536 25.2448 45.376 25.1275 45.248C25.0208 45.12 24.8128 45.0027 24.5035 44.896C24.1941 44.7893 23.7355 44.672 23.1275 44.544C22.5515 44.416 22.0608 44.2453 21.6555 44.032C21.2501 43.8187 20.9461 43.552 20.7435 43.232C20.5408 42.9013 20.4395 42.5067 20.4395 42.048C20.4395 41.632 20.5675 41.232 20.8235 40.848C21.0901 40.464 21.4795 40.1493 21.9915 39.904C22.5035 39.648 23.1435 39.52 23.9115 39.52C24.4981 39.52 25.0101 39.5947 25.4475 39.744C25.8955 39.8827 26.2688 40.064 26.5675 40.288C26.8661 40.5013 27.0901 40.7253 27.2395 40.96C27.3995 41.184 27.4848 41.3813 27.4955 41.552C27.5061 41.6587 27.4741 41.7493 27.3995 41.824C27.3248 41.8987 27.2395 41.936 27.1435 41.936H25.7195C25.6661 41.936 25.6181 41.9307 25.5755 41.92C25.5328 41.8987 25.4955 41.872 25.4635 41.84C25.3355 41.7547 25.2021 41.6587 25.0635 41.552C24.9355 41.4347 24.7808 41.3333 24.5995 41.248C24.4181 41.1627 24.1835 41.12 23.8955 41.12C23.5435 41.12 23.2715 41.2 23.0795 41.36C22.8981 41.5093 22.8075 41.7013 22.8075 41.936C22.8075 42.0853 22.8555 42.224 22.9515 42.352C23.0475 42.48 23.2448 42.5973 23.5435 42.704C23.8421 42.8107 24.2955 42.9227 24.9035 43.04C25.6288 43.168 26.2048 43.36 26.6315 43.616C27.0581 43.872 27.3621 44.1707 27.5435 44.512C27.7355 44.8427 27.8315 45.2 27.8315 45.584C27.8315 46.0853 27.6821 46.5333 27.3835 46.928C27.0848 47.312 26.6475 47.616 26.0715 47.84C25.5061 48.0533 24.8075 48.16 23.9755 48.16ZM33.3361 48C32.6748 48 32.1094 47.8933 31.6401 47.68C31.1708 47.456 30.8134 47.1147 30.5681 46.656C30.3334 46.1973 30.2161 45.6213 30.2161 44.928V41.568H28.9681C28.8508 41.568 28.7548 41.5307 28.6801 41.456C28.6054 41.3813 28.5681 41.2853 28.5681 41.168V40.08C28.5681 39.9627 28.6054 39.8667 28.6801 39.792C28.7548 39.7173 28.8508 39.68 28.9681 39.68H30.2161V37.04C30.2161 36.9227 30.2534 36.8267 30.3281 36.752C30.4134 36.6773 30.5094 36.64 30.6161 36.64H32.1841C32.3014 36.64 32.3974 36.6773 32.4721 36.752C32.5468 36.8267 32.5841 36.9227 32.5841 37.04V39.68H34.5841C34.6908 39.68 34.7814 39.7173 34.8561 39.792C34.9308 39.8667 34.9681 39.9627 34.9681 40.08V41.168C34.9681 41.2853 34.9308 41.3813 34.8561 41.456C34.7814 41.5307 34.6908 41.568 34.5841 41.568H32.5841V44.736C32.5841 45.1413 32.6534 45.4613 32.7921 45.696C32.9414 45.92 33.1974 46.032 33.5601 46.032H34.7281C34.8348 46.032 34.9254 46.0693 35.0001 46.144C35.0748 46.2187 35.1121 46.3093 35.1121 46.416V47.6C35.1121 47.7173 35.0748 47.8133 35.0001 47.888C34.9254 47.9627 34.8348 48 34.7281 48H33.3361Z"
                                    fill="white"
                                />
                            </svg>
                        </div>
                        <div className="w-full">
                            <input
                                type="text"
                                className="border-2 border-black w-full rounded-xl h-full px-3"
                                placeholder="QUOTE"
                                value={Quote}
                                onChange={(e) => setQuote(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="py-2 flex items-center px-2 justify-between">
                        <div className="flex gap-5 items-center">
                            <div className="camera">
                                <svg
                                    width="30"
                                    height="30"
                                    viewBox="0 0 30 30"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M23.75 8.12503H22.15L21.75 6.87503C21.4907 6.14157 21.0097 5.50691 20.3736 5.05898C19.7376 4.61105 18.9779 4.37203 18.2 4.37503H11.8C11.0144 4.3765 10.2492 4.62463 9.61221 5.08441C8.97525 5.54419 8.49876 6.19239 8.25 6.93753L7.85 8.18753H6.25C5.25544 8.18753 4.30161 8.58262 3.59835 9.28588C2.89509 9.98914 2.5 10.943 2.5 11.9375V21.9375C2.5 22.9321 2.89509 23.8859 3.59835 24.5892C4.30161 25.2924 5.25544 25.6875 6.25 25.6875H23.75C24.7446 25.6875 25.6984 25.2924 26.4017 24.5892C27.1049 23.8859 27.5 22.9321 27.5 21.9375V11.9375C27.5083 11.4398 27.4174 10.9455 27.2327 10.4833C27.048 10.0211 26.773 9.60025 26.424 9.24538C26.0749 8.89052 25.6587 8.60869 25.1996 8.41634C24.7406 8.22399 24.2478 8.12496 23.75 8.12503ZM25 21.875C25 22.2065 24.8683 22.5245 24.6339 22.7589C24.3995 22.9933 24.0815 23.125 23.75 23.125H6.25C5.91848 23.125 5.60054 22.9933 5.36612 22.7589C5.1317 22.5245 5 22.2065 5 21.875V11.875C5 11.5435 5.1317 11.2256 5.36612 10.9911C5.60054 10.7567 5.91848 10.625 6.25 10.625H8.75C9.02258 10.6393 9.29233 10.5639 9.51804 10.4104C9.74376 10.2569 9.91303 10.0338 10 9.77503L10.675 7.72503C10.7589 7.47675 10.9186 7.26111 11.1317 7.10858C11.3448 6.95605 11.6004 6.87435 11.8625 6.87503H18.2625C18.5246 6.87435 18.7802 6.95605 18.9933 7.10858C19.2064 7.26111 19.3661 7.47675 19.45 7.72503L20.125 9.77503C20.2052 10.0135 20.3555 10.2221 20.5562 10.3738C20.7569 10.5254 20.9987 10.613 21.25 10.625H23.75C24.0815 10.625 24.3995 10.7567 24.6339 10.9911C24.8683 11.2256 25 11.5435 25 11.875V21.875ZM15 10.625C14.0111 10.625 13.0444 10.9183 12.2221 11.4677C11.3999 12.0171 10.759 12.798 10.3806 13.7116C10.0022 14.6252 9.90315 15.6306 10.0961 16.6005C10.289 17.5704 10.7652 18.4613 11.4645 19.1606C12.1637 19.8598 13.0546 20.336 14.0245 20.529C14.9945 20.7219 15.9998 20.6229 16.9134 20.2444C17.827 19.866 18.6079 19.2251 19.1573 18.4029C19.7068 17.5806 20 16.6139 20 15.625C20 14.2989 19.4732 13.0272 18.5355 12.0895C17.5979 11.1518 16.3261 10.625 15 10.625ZM15 18.125C14.5055 18.125 14.0222 17.9784 13.6111 17.7037C13.2 17.429 12.8795 17.0386 12.6903 16.5817C12.5011 16.1249 12.4516 15.6223 12.548 15.1373C12.6445 14.6523 12.8826 14.2069 13.2322 13.8573C13.5819 13.5076 14.0273 13.2695 14.5123 13.1731C14.9972 13.0766 15.4999 13.1261 15.9567 13.3153C16.4135 13.5045 16.804 13.825 17.0787 14.2361C17.3534 14.6472 17.5 15.1306 17.5 15.625C17.5 16.2881 17.2366 16.924 16.7678 17.3928C16.2989 17.8616 15.663 18.125 15 18.125Z"
                                        fill="#1B1B1B"
                                    />
                                </svg>
                            </div>
                            <div className="pin">
                                <svg
                                    width="30"
                                    height="30"
                                    viewBox="0 0 30 30"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M22.6 15.525L14.875 23.2625C13.8623 24.1625 12.5439 24.6416 11.1897 24.6017C9.83538 24.5619 8.5475 24.0061 7.58947 23.0481C6.63143 22.09 6.07564 20.8021 6.03577 19.4479C5.99591 18.0936 6.47498 16.7753 7.375 15.7625L17.375 5.76252C17.972 5.19539 18.764 4.87918 19.5875 4.87918C20.411 4.87918 21.203 5.19539 21.8 5.76252C22.3817 6.35201 22.7078 7.14686 22.7078 7.97502C22.7078 8.80318 22.3817 9.59803 21.8 10.1875L13.175 18.8C13.0896 18.8919 12.987 18.9662 12.873 19.0184C12.7589 19.0707 12.6357 19.1 12.5104 19.1046C12.385 19.1093 12.26 19.0892 12.1424 19.0455C12.0248 19.0018 11.9169 18.9354 11.825 18.85C11.7331 18.7647 11.6589 18.662 11.6066 18.548C11.5543 18.434 11.5251 18.3107 11.5204 18.1854C11.5158 18.06 11.5359 17.935 11.5795 17.8174C11.6232 17.6998 11.6896 17.5919 11.775 17.5L18.1875 11.1C18.4229 10.8646 18.5551 10.5454 18.5551 10.2125C18.5551 9.87964 18.4229 9.5604 18.1875 9.32502C17.9521 9.08964 17.6329 8.95741 17.3 8.95741C16.9671 8.95741 16.6479 9.08964 16.4125 9.32502L10 15.75C9.67913 16.0684 9.42446 16.4471 9.25067 16.8644C9.07687 17.2817 8.9874 17.7292 8.9874 18.1813C8.9874 18.6333 9.07687 19.0808 9.25067 19.4981C9.42446 19.9154 9.67913 20.2941 10 20.6125C10.6555 21.2369 11.526 21.5851 12.4313 21.5851C13.3365 21.5851 14.207 21.2369 14.8625 20.6125L23.475 11.9875C24.4686 10.9212 25.0095 9.51086 24.9838 8.0536C24.9581 6.59634 24.3678 5.20596 23.3372 4.17536C22.3066 3.14476 20.9162 2.55442 19.4589 2.52871C18.0017 2.503 16.5913 3.04392 15.525 4.03752L5.525 14.0375C4.1765 15.5311 3.45629 17.4873 3.51442 19.4987C3.57255 21.5101 4.40454 23.4216 5.83705 24.8347C7.26956 26.2479 9.1921 27.0538 11.2041 27.0846C13.2161 27.1154 15.1624 26.3687 16.6375 25L24.375 17.275C24.4916 17.1585 24.584 17.0201 24.6471 16.8678C24.7102 16.7156 24.7426 16.5523 24.7426 16.3875C24.7426 16.2227 24.7102 16.0595 24.6471 15.9072C24.584 15.7549 24.4916 15.6166 24.375 15.5C24.2585 15.3835 24.1201 15.291 23.9678 15.2279C23.8155 15.1649 23.6523 15.1324 23.4875 15.1324C23.3227 15.1324 23.1595 15.1649 23.0072 15.2279C22.8549 15.291 22.7166 15.3835 22.6 15.5V15.525Z"
                                        fill="#1B1B1B"
                                    />
                                </svg>
                            </div>
                            <div className="mic">
                                <svg
                                    width="30"
                                    height="30"
                                    viewBox="0 0 30 30"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M15 18.75C16.3261 18.75 17.5978 18.2232 18.5355 17.2855C19.4732 16.3479 20 15.0761 20 13.75V6.25C20 4.92392 19.4732 3.65215 18.5355 2.71447C17.5978 1.77678 16.3261 1.25 15 1.25C13.6739 1.25 12.4021 1.77678 11.4644 2.71447C10.5268 3.65215 9.99997 4.92392 9.99997 6.25V13.75C9.99997 15.0761 10.5268 16.3479 11.4644 17.2855C12.4021 18.2232 13.6739 18.75 15 18.75ZM12.5 6.25C12.5 5.58696 12.7634 4.95107 13.2322 4.48223C13.701 4.01339 14.3369 3.75 15 3.75C15.663 3.75 16.2989 4.01339 16.7677 4.48223C17.2366 4.95107 17.5 5.58696 17.5 6.25V13.75C17.5 14.413 17.2366 15.0489 16.7677 15.5178C16.2989 15.9866 15.663 16.25 15 16.25C14.3369 16.25 13.701 15.9866 13.2322 15.5178C12.7634 15.0489 12.5 14.413 12.5 13.75V6.25ZM25 13.75C25 13.4185 24.8683 13.1005 24.6339 12.8661C24.3994 12.6317 24.0815 12.5 23.75 12.5C23.4184 12.5 23.1005 12.6317 22.8661 12.8661C22.6317 13.1005 22.5 13.4185 22.5 13.75C22.5 15.7391 21.7098 17.6468 20.3033 19.0533C18.8967 20.4598 16.9891 21.25 15 21.25C13.0108 21.25 11.1032 20.4598 9.69667 19.0533C8.29015 17.6468 7.49997 15.7391 7.49997 13.75C7.49997 13.4185 7.36827 13.1005 7.13385 12.8661C6.89943 12.6317 6.58149 12.5 6.24997 12.5C5.91845 12.5 5.60051 12.6317 5.36609 12.8661C5.13167 13.1005 4.99997 13.4185 4.99997 13.75C5.00218 16.1841 5.89212 18.5339 7.50297 20.3587C9.11381 22.1836 11.3349 23.3582 13.75 23.6625V26.25H11.25C10.9184 26.25 10.6005 26.3817 10.3661 26.6161C10.1317 26.8505 9.99997 27.1685 9.99997 27.5C9.99997 27.8315 10.1317 28.1495 10.3661 28.3839C10.6005 28.6183 10.9184 28.75 11.25 28.75H18.75C19.0815 28.75 19.3994 28.6183 19.6339 28.3839C19.8683 28.1495 20 27.8315 20 27.5C20 27.1685 19.8683 26.8505 19.6339 26.6161C19.3994 26.3817 19.0815 26.25 18.75 26.25H16.25V23.6625C18.665 23.3582 20.8861 22.1836 22.497 20.3587C24.1078 18.5339 24.9978 16.1841 25 13.75Z"
                                        fill="#1B1B1B"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div className="flex items-center gap-5 post">
                            <div>
                                <span className="font-bold text-sm">
                                    Post Later
                                </span>
                            </div>
                            <div
                                className="bg-black rounded-3xl py-2 px-5 text-white text-sm font-semibold"
                                onClick={handlePost}
                            >
                                Post
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddPost;
