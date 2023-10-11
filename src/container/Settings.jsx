import React from 'react'
import SideNav from '../components/Sidebar'
import Smiddle from '../components/Smiddle'

const Settings = () => {
  return (
    <div className='w-full h-full flex justify-center items-center relative'>
        <div className='mx-10 w-full h-full flex relative'>
            <SideNav />
            <Smiddle />
        </div>
    </div>
  )
}

export default Settings
