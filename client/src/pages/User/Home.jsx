import React, { useEffect, useState } from "react";
import TopBar from "../../components/User/TopBar/TopBar";
import SideNavBar from "../../components/Sidebar/SideNavBar";
import "../User/User.css";
import MobileNav from "../../components/Sidebar/MobileNav";
import Post from "../../components/Posts/Posts";
import AddPost from "../../components/Posts/AddPost";
import Admires from "../../components/RightSideBar/Admires";
import Postes from "../../components/Posts/Postes";

const Home = () => {
    const [data, setdata] = useState({})
    useEffect(() =>{
        fetchData();
    });

    const fetchData = async () =>{
        try {
            const response  = await axios.get('http://127.0.0.1:8000/api/home/')
        if (response.status == 200){
            setdata(response)
        }
        } catch (error) {
            
        }
        
    }
    return (
        <>
            <TopBar />
            <div className="flex px-14 py-12 side ">
                <div>
                    <SideNavBar name={data.name} />
                </div>
                <div
                    className="middle-box border-black border-4 p-5 rounded-xl w-8/12"
                    id="middle_boxs"
                >
                    <div className="mobile-hide">
                        <AddPost />
                    </div>
                    <div>
                        <Postes/>
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
