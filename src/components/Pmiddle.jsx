import React, { useState } from 'react';
import EditProfileModal from './EditProfileModal';
import Post from './Post';
import { Link } from 'react-router-dom';



const Profile = ({posts}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [showAnonymousPosts, setShowAnonymousPosts] = useState(false);


  const handleEditClick = () => {
    setIsEditing(true);
  };

  const toggleAnonymousPosts = () => {
    setShowAnonymousPosts(!showAnonymousPosts);
  };

  const handleCloseModal = () => {
    setIsEditing(false);
  };

  const user = {
    username: 'YourUsername',
    displayName: 'Your Display Name',
    bio: 'This is your bio. You can write a short description about yourself here.',
    followers: 1000, // Replace with actual follower count
    following: 500, // Replace with actual following count
  };

  // Filter posts based on the showAnonymousPosts state
  const filteredPosts = showAnonymousPosts
    ? posts.filter((posts) => posts.isAnonymous)
    : posts.filter((posts) => !posts.isAnonymous);

  return (
    <div className="bg-white p-4 rounded shadow-lg ml-[275px] w-full h-screen">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Your Profile</h1>
        <button
          onClick={handleEditClick}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Edit Profile
        </button>
      </div>
      <div className="mt-4">
        <p className="text-gray-600">@{user.username}</p>
        <p className="mt-2">{user.bio}</p>
      </div>
      <div className="mt-6">
        <div className="flex">
          <div className="mr-6">
            <Link to="/followers">
                <p className="font-semibold">{user.followers}</p>
                Followers
            </Link>
          </div>
          <div>
            <Link to="/following">
                <p className="font-semibold">{user.following}</p>
                Following
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-6">
        <div className="flex items-center mb-4">
          <ul className="flex w-full justify-around">
            <li className='hover:border-b-2 border-black' 
              onClick={() => toggleAnonymousPosts(true)}
            >
              Anonymous Posts
            </li>
            <li className='hover:border-b-2 border-black'
              onClick={() => toggleAnonymousPosts(false)}
            >
              Normal Posts
            </li>
          </ul>
        </div>
        <ul className="mt-2 space-y-4">
          {filteredPosts.map((post) => (
            <li key={post.id}>
              <Post post={post} />
            </li>
          ))}
        </ul>
      </div>
      {isEditing && <EditProfileModal onClose={handleCloseModal} />}
    </div>
  );
};

export default Profile;
