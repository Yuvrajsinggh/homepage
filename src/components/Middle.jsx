import React, { useState } from 'react'
import { FaHeart, FaComment } from 'react-icons/fa';
import CommentView from '../utils/CommentView';

const Middle = ({posts}) => {
    const [currentMode, setCurrentMode] = useState('normal');
    const [likeCounts, setLikeCounts] = useState({});
    const [commentCounts, setCommentCounts] = useState({});
    const [selectedPostId, setSelectedPostId] = useState(null);

    const handleLike = (postId) => {
        setLikeCounts((prevCounts) => ({
          ...prevCounts,
          [postId]: (prevCounts[postId] || 0) + 1,
        }));
    };
    
    const handleComment = (postId) => {
        setCommentCounts((prevCounts) => ({
          ...prevCounts,
          [postId]: (prevCounts[postId] || 0) + 1,
        }));
        setSelectedPostId(postId);
    }
    
    const closeComments = () => {
        setSelectedPostId(null);
    };

    const anonymousPosts = posts.filter((post) => post.isAnonymous);
    const normalPosts = posts.filter((post) => !post.isAnonymous);
  return (
    <>
        <main className='ml-[275px] flex w-[55%] h-full min-h-screen flex-col border-l-[0.5px] border-r-[0.5px] border-black'>
            <div className='p-2 backdrop-blur z-10 bg-white/10 sticky top-0'>
                <div className="mb-4">
                        <button
                            className={`mr-2 px-4 py-2 ${
                                currentMode === 'normal' ? 'bg-blue-500 text-white' : 'bg-gray-300'
                            } rounded`}
                            onClick={() => setCurrentMode('normal')}
                        >
                            Normal Posts
                        </button>
                        <button
                        className={`px-4 py-2 ${
                            currentMode === 'anonymous' ? 'bg-blue-500 text-white' : 'bg-gray-300'
                        } rounded`}
                        onClick={() => setCurrentMode('anonymous')}
                        >
                            Anonymous Posts
                        </button>
                    </div>                
            </div>
                {currentMode === 'normal' && (
                    <div>
                        {normalPosts.map((post) => (
                            <div key={post.id} className="bg-white p-4 my-2">
                                <div className="flex items-center">
                                    <span className="font-semibold">{post.user.username}</span>
                                </div>
                                <p className="mt-2">{post.text}</p>
                                <div className="flex justify-between mt-4">
                                    <button
                                        id={`like-button-${post.id}`}
                                        className="text-blue-500 transition duration-300 transform hover:scale-110"
                                        onClick={() => {
                                            handleLike(post.id);
                                        }}
                                    >
                                        <FaHeart /> {likeCounts[post.id] || 0}
                                    </button>
                                    <button
                                        id={`comment-button-${post.id}`}
                                        className="text-blue-500 transition duration-300 transform hover:scale-110"
                                        onClick={() => {
                                            handleComment(post.id);
                                        }}
                                    >
                                        <FaComment /> {commentCounts[post.id] || 0}
                                    </button>
                                </div>
                                <p className="text-gray-500 mt-2">{post.timestamp}</p>
                            </div>
                        ))}
                    </div>
                )}

                {currentMode === 'anonymous' && (
                    <div>
                        {anonymousPosts.map((post) => (
                            <div key={post.id} className="bg-white p-4 my-2">
                                <div className="flex items-center">
                                    <span className="font-semibold">Anonymous</span>
                                </div>
                                <p className="mt-2">{post.text}</p>
                                <div className="flex justify-between mt-4">
                                <button
                                        id={`like-button-${post.id}`}
                                        className="text-blue-500 transition duration-300 transform hover:scale-110"
                                        onClick={() => {
                                            handleLike(post.id);
                                        }}
                                    >
                                        <FaHeart /> {likeCounts[post.id] || 0}
                                    </button>
                                    <button
                                        id={`comment-button-${post.id}`}
                                        className="text-blue-500 transition duration-300 transform hover:scale-110"
                                        onClick={() => {
                                            handleComment(post.id)
                                        }}
                                    >
                                        <FaComment /> {commentCounts[post.id] || 0}
                                    </button>
                                </div>
                                <p className="text-gray-500 mt-2">{post.timestamp}</p>
                            </div>
                        ))}
                    </div>
                )}
        </main>
        {selectedPostId !== null && (
            <CommentView postId={selectedPostId} onClose={closeComments} />
        )}
    </>
  )
}

export default Middle 