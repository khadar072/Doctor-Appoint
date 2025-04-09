import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Resetpassword = () => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { id, token } = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:4300/user/api/reset-password/${id}/${token}`,
        { password }
      );

      if (response.data.success) {
        navigate('/login');
      } else {
        setError(response.data.message);
      }
    } catch (err) {
      setError('Error resetting password');
      console.error(err);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen w-full">
      <div className="flex-col border px-5 py-7 w-72">
        <form onSubmit={handleSubmit}>
          <h1 className="text-indigo-600 text-center mb-2">Reset Password</h1>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <div className="mb-2">
            <label htmlFor="password" className="block text-sm mb-1">
              New Password
            </label>
            <input
              type="password"
              placeholder="Enter new password"
              name="password"
              value={password}
              className="w-full px-2 py-1 text-xs border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-indigo-500"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="bg-indigo-600 w-full rounded py-1 flex items-center justify-center text-white"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Resetpassword;
 