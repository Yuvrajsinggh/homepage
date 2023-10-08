import React, { useState } from 'react';

const EditProfileModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    // Initialize formData with user's existing data
  });

  const handleChange = (e) => {
    // Handle form field changes and update formData state
  };

  const handleSubmit = () => {
    // Implement logic to update user's profile information
    // You can make an API call here to update the data on the server
    // After successful update, close the modal using onClose()
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white p-4 w-1/3 rounded shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Edit Profile</h2>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8 p-4 bg-white rounded shadow-lg">
  <div className="mb-4">
    <label htmlFor="editname" className="block text-gray-700 font-bold mb-2">
      Username
    </label>
    <input
      type="text"
      name="name"
      id="editname"
      value={formData.username}
      onChange={handleChange}
      className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
    />
  </div>
  <div className="mb-4">
    <label htmlFor="editdn" className="block text-gray-700 font-bold mb-2">
      Display Name
    </label>
    <input
      type="text"
      name="name"
      id="editdn"
      value={formData.displayName}
      onChange={handleChange}
      className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
    />
  </div>
  <div className="mb-4">
    <label htmlFor="editbio" className="block text-gray-700 font-bold mb-2">
      Bio
    </label>
    <input
      type="text"
      name="name"
      id="editbio"
      value={formData.bio}
      onChange={handleChange}
      className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
    />
  </div>
  <div className="mt-4 flex justify-end">
    <button
      type="submit"
      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none"
    >
      Save Changes
    </button>
    <button
      onClick={onClose}
      className="ml-2 text-gray-500 hover:text-gray-700 focus:outline-none"
    >
      Cancel
    </button>
  </div>
</form>

      </div>
    </div>
  );
};

export default EditProfileModal;
