import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { PiHouse } from 'react-icons/pi';
import { AiOutlineMessage } from 'react-icons/ai';
import { TfiUser } from 'react-icons/tfi';
import { IoNotificationsOutline, IoSettingsOutline } from 'react-icons/io5';
import { SlLogout } from 'react-icons/sl';
import { RxTwitterLogo } from 'react-icons/rx';
import CreatePostPopup from '../utils/CreatePostPopup';

const NAVIGATION_ITEMS = [
    {
        title: 'Twitter',
        icon: RxTwitterLogo,
    },
    {
        title: 'Home',
        icon: PiHouse,
    },
    {
        title: 'Message',
        icon: AiOutlineMessage,
    },
    {
        title: 'Profile',
        icon: TfiUser,
    },
    {
        title: 'Notifications',
        icon: IoNotificationsOutline,
    },
    {
        title: 'Settings',
        icon: IoSettingsOutline,
    },
    {
        title: 'Log Out',
        icon: SlLogout,
    },
];

const SideNav = () => {
    const [isCreatePostPopupOpen, setIsCreatePostPopupOpen] = useState(false);
    const location = useLocation();

    const openCreatePostPopup = () => {
        setIsCreatePostPopupOpen(true);
    };

    const closeCreatePostPopup = () => {
        setIsCreatePostPopupOpen(false);
    };

    const handleCreatePost = (postText) => {
        console.log('Creating a new post with text:', postText);
        closeCreatePostPopup();
    };

    return (
        <>
            <section className='fixed w-{275px} flex flex-col h-screen space-y-4 my-4'>
                {NAVIGATION_ITEMS.map((item) => (
                    <Link
                        key={item.title}
                        to={`/${item.title.toLowerCase()}`}
                        className={`hover:bg-black/10 transition text-xl duration-200 rounded-3xl py-2 px-6 flex items-center justify-start w-fit space-x-2 ${
                            location.pathname.includes(item.title.toLowerCase()) ? 'font-bold' : ''
                        }`}
                    >
                        <div>
                            <item.icon />
                        </div>
                        {item.title !== 'Twitter' && <div>{item.title}</div>}
                    </Link>
                ))}
                <button
                    className='rounded-full bg-blue-500 m-2 p-2 text-xl text-center hover:bg-opacity-70 transition duration-200'
                    onClick={openCreatePostPopup}
                >
                    Create
                </button>
            </section>
            {isCreatePostPopupOpen && (
                <CreatePostPopup
                    isOpen={isCreatePostPopupOpen}
                    onClose={closeCreatePostPopup}
                    onCreatePost={handleCreatePost}
                />
            )}
        </>
    );
};

export default SideNav;
