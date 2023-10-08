import React, { useState } from 'react';
import { FaThumbsUp, FaComment } from 'react-icons/fa';

const Post = ({ post }) => {
  const [liked, setLiked] = useState(false);
  const [showCommentBox, setShowCommentBox] = useState(false);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [likeCount, setLikeCount] = useState(post.likes || 0);
  const [commentCount, setCommentCount] = useState(post.comments ? post.comments.length : 0);

  const handleLike = () => {
    setLiked(!liked);
    setLikeCount(liked ? likeCount - 1 : likeCount + 1);
  };

  const handleCommentClick = () => {
    setShowCommentBox(!showCommentBox);
    setComments([]);
  };

  const handleAddComment = () => {
    if (newComment.trim() !== '') {
      setComments([...comments, newComment]);
      setNewComment('');
      setCommentCount(commentCount + 1);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4">
      <p className="text-gray-800">{post.isAnonymous ? 'Anonymous User' : post.username}</p>
      <p className="text-gray-600 mt-2">{post.text}</p>

      <div className="mt-4 flex items-center">
        <div className="mr-4 flex items-center">
          <button
            className={`focus:outline-none ${liked ? 'text-red-500' : 'text-gray-500'} transition duration-300`}
            onClick={handleLike}
          >
            <FaThumbsUp size={20} />
          </button>
          <span className="ml-2">{likeCount} {likeCount === 1 ? 'Like' : 'Likes'}</span>
        </div>
        <div className="mr-4 flex items-center">
          <button
            className="focus:outline-none text-gray-500 transition duration-300"
            onClick={handleCommentClick}
          >
            <FaComment size={20} />
          </button>
          <span className="ml-2">{commentCount} {commentCount === 1 ? 'Comment' : 'Comments'}</span>
        </div>
      </div>

      {showCommentBox && (
        <div className="mt-4">
          <input
            type="text"
            className="border rounded-md p-2 w-full"
            placeholder="Add a comment"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2"
            onClick={handleAddComment}
          >
            Add Comment
          </button>
        </div>
      )}

      {comments.length > 0 && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold">Comments:</h3>
          <ul>
            {comments.map((comment, index) => (
              <li key={index} className="mt-2">{comment}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Post;

