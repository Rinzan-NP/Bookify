import React from 'react'
import TopBar from '../../components/User/TopBar/TopBar'
import SideNavBar from '../../components/Sidebar/SideNavBar'
import MobileNav from '../../components/Sidebar/MobileNav'
import UserProfile from '../../components/Profile/UserProfile'

const Profile = () => {
  return (
    <>
            <TopBar />
            <div className="flex px-14 py-12 side gap-7 paddings gappings">
                <div>
                    <SideNavBar />
                </div>

                <div className="w-full" id="middle_boxes">
                    <UserProfile/>
                </div>
                
            </div>

            <MobileNav />
        </>
  )
}

export default Profile