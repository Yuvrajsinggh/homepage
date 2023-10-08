import React from 'react'
import SideNav from '../components/Sidebar'
import Pmiddle from '../components/Pmiddle'

const samplePosts = [
  {
    id: 1,
    username: 'John Doe',
    text: 'This is a normal post.',
    isAnonymous: false,
    timestamp: '2 hours ago',
  },
  {
    id: 2,
    username: 'Jane Smith',
    text: 'Another normal post here.',
    isAnonymous: false,
    timestamp: '1 hour ago',
  },
  {
    id: 3,
    username: null,
    text: 'An anonymous post with no user details.',
    isAnonymous: true,
    timestamp: '30 minutes ago',
  },
  {
    id: 4,
    username: null,
    text: 'An anonymous post with no user details.',
    isAnonymous: true,
    timestamp: '30 minutes ago',
  },
];

const Profile = () => {
  return (
    <div className='w-full h-full flex justify-center items-center relative'>
        <div className='mx-10 w-full h-full flex relative'>
            <SideNav />
            <Pmiddle posts={samplePosts} />
        </div>
    </div>
  )
}

export default Profile