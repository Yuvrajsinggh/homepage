import React from 'react'
import { TfiUser } from 'react-icons/tfi';

const Smiddle = () => {
  return (
    <>
        <div className="rounded shadow-lg ml-[275px] w-full h-screen border-black border-l-[0.5px]">
            <h3 className='border-black border-b-[0.5px] p-4 font-bold text-xl'>Settings</h3>
            {/* <div className='flex flex-col justify-center'>
                <button className='hover:bg-blue-200 h-full w-1/3 p-4 mt-32'>Account
                    <span>Your Account Settings</span>
                </button> 
            </div> */}
            <div className="flex flex-row">
                <div className="w-1/3">
                    {/* <h1>Settings Header</h1> */}
                        <div className='border-[orange] border-r-[5px] cursor-pointer p-2 flex flex-row shadow-md hover:bg-slate-200'>
                            <div className='text-[20px] w-8 mt-2'>
                                <TfiUser />
                            </div>
                            <div className="flex-col">
                                <h1 className=''>Your Account</h1>
                                <span className='text-xs text-gray-500'>Account Management</span>
                           </div>
                        </div>

                </div>
                
                <div className="w-2/3">
                    <h1 className='ml-[20px]'>Settings Content</h1>
                </div>
            </div>
        </div>
    </>
  )
}

export default Smiddle
