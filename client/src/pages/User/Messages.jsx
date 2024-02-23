import React from 'react'
import SideNavBar from '../../components/Sidebar/SideNavBar'
import MobileNav from '../../components/Sidebar/MobileNav'
import TopBar from '../../components/User/TopBar/TopBar'
import Msg from '../../components/Messages/Msg'

const Messages = () => {
  return (
    <>
    <TopBar />
            <div className="flex px-14 py-12 side gap-7 paddings gappings">
                <div>
                    <SideNavBar/>
                </div>
                <div className='w-full'>
                    <Msg/>
                    
                </div>
                
            </div>

            <MobileNav />
    </>
  )
}

export default Messages