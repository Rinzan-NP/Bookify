import TopBar from "../../components/User/TopBar/TopBar";
import SideNavBar from "../../components/Sidebar/SideNavBar";
import "../User/User.css";
import MobileNav from "../../components/Sidebar/MobileNav";
import AddPost from "../../components/Posts/AddPost";
import Admires from "../../components/RightSideBar/Admires";
import UserPost from "../../components/Posts/UserPost";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    "http://127.0.0.1:8000/api/get/posts/"
                );
                if (response.status === 200) {
                    console.log(response.data);
                    setData(response.data);
                }
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);

    return (
        <>
            <TopBar />
            <div className="flex px-14 py-12 side ">
                <div>
                    <SideNavBar />
                </div>
                <div
                    className="middle-box border-black border-4 md:p-5 rounded-xl w-8/12 p-4"
                    id="middle_boxs"
                >
                    <div className="mobile-hide">
                        <AddPost />
                    </div>
                    <div>
                        {data.map((post, index) => (
                            <UserPost
                                key={index}
                                user={post.user}
                                backgroundImage={post.background_image.background_image}
                                content={post.content}
                                likes={post.likes}
                            />
                        ))}
                    </div>
                </div>
                <div className="w-3/12 right-side-hide">
                    <Admires />
                </div>
            </div>
            <MobileNav />
        </>
    );
};

export default Home;
