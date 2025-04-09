import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'

const Forgotpassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      "http://localhost:4300/user/api/forgot-password",
      {  email }
    );
    if(response.data.success){
      navigate('/login')
    }else{
      console.log('error',response.data.message)
    }
  };

  return (
    <div className="flex justify-center items-center h-screen w-full">
      <div className="flex-col border px-5 py-7 w-72">
        <form onSubmit={handleSubmit}>
          <h1 className="text-indigo-600 text-center mb-2">Forgot password</h1>
          <div className="mb-2">
          <label htmlFor="email" className="block text-sm mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="email"
              name="email"
              value={email}
              className="w-full px-2 py-1 text-xs border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-indigo-500"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="bg-indigo-600 w-full rounded py-1 flex items-center justify-center text-white"
          >
            Send Email
          </button>
        </form>
      </div>
    </div>
  );
};

export default Forgotpassword;
