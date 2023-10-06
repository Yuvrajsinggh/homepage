import React from 'react'
import SideNav from '../components/Sidebar'
import Middle from '../components/Middle'
import Right from '../components/Right'

const samplePosts = [
  {
    id: 1,
    user: {
      username: 'John Doe',
      profilePicture: 'profile-pic-1.jpg',
    },
    text: 'This is a normal post.',
    isAnonymous: false,
    image: 'post-image-1.jpg',
    timestamp: '2 hours ago',
  },
  {
    id: 2,
    user: {
      username: 'Jane Smith',
      profilePicture: 'profile-pic-2.jpg',
    },
    text: 'Another normal post here.',
    isAnonymous: false,
    image: null,
    timestamp: '1 hour ago',
  },
  {
    id: 3,
    user: {
      username: null,
      profilePicture: null,
    },
    text: 'An anonymous post with no user details.',
    isAnonymous: true,
    image: 'post-image-2.jpg',
    timestamp: '30 minutes ago',
  },
  {
    id: 4,
    user: {
      username: null,
      profilePicture: null,
    },
    text: 'An anonymous post with no user details.',
    isAnonymous: true,
    image: 'post-image-2.jpg',
    timestamp: '30 minutes ago',
  },
  {
    id: 5,
    user: {
      username: null,
      profilePicture: null,
    },
    text: 'An anonymous post with no user details.',
    isAnonymous: true,
    image: 'post-image-2.jpg',
    timestamp: '30 minutes ago',
  },
  {
    id: 5,
    user: {
      username: null,
      profilePicture: null,
    },
    text: 'An anonymous post with no user details.',
    isAnonymous: true,
    image: 'post-image-2.jpg',
    timestamp: '30 minutes ago',
  },
];

const Home = () => {
  return (
    <div className='w-full h-full flex justify-center items-center relative'>
        <div className='mx-10 w-full h-full flex relative'>
            <SideNav/>
            <Middle posts={samplePosts}/>
            <Right />
        </div>
    </div>
  )
}

export default Home