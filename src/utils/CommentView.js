import React, { useState } from 'react';
import { FaTrash } from 'react-icons/fa';

const sampleComments = [
    {
        id: 1,
        text: 'This is the first sample comment.',
        timestamp: '2023-10-10 09:00 AM',
      },
      {
        id: 2,
        text: 'Sample comment number two.',
        timestamp: '2023-10-10 10:30 AM',
      },
      {
        id: 3,
        text: 'Another sample comment here.',
        timestamp: '2023-10-10 11:45 AM',
      },
];

const CommentView = ({ postId, onClose }) => {
  const [newComment, setNewComment] = useState('');
  const [comments, setComments] = useState(sampleComments);

  const handleSubmitComment = () => {
    if (newComment.trim() !== '') {
      const timestamp = new Date().toLocaleString(); // Get the current timestamp
      const comment = {
        id: comments.length + 1, // Generate a unique ID (you may need a more robust approach in a real app)
        text: newComment,
        timestamp,
      };

      // Update the comments array with the new comment
      setComments([...comments, comment]);

      // Clear the comment input field
      setNewComment('');
    }
  };

  const handleDeleteComment = (commentId) => {
    // Filter out the comment to be deleted from the comments array
    const updatedComments = comments.filter((comment) => comment.id !== commentId);
    setComments(updatedComments);
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded-lg w-[80%] max-w-xl max-h-[80%] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">Comments</h2>
          <button
            className="text-blue-500 hover:text-blue-700"
            onClick={onClose}
          >
            Close
          </button>
        </div>
        <div className="space-y-4">
          {comments.map((comment) => (
            <div key={comment.id} className="border rounded p-2">
              <p className="text-gray-800">{comment.text}</p>
              <p className="text-gray-500 mt-2">{comment.timestamp}</p>
              <button
                className="text-red-500 hover:text-red-700"
                onClick={() => handleDeleteComment(comment.id)}
              >
                <FaTrash /> Delete
              </button>
            </div>
          ))}
        </div>
        <div className="mt-4">
          <textarea
            className="w-full h-24 border rounded p-2"
            placeholder="Add a comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <button
            className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg"
            onClick={handleSubmitComment}
          >
            Add Comment
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommentView;
