import { UserContext } from '@/context/UserContext';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from "react-toastify";

function Login() {
  const [state, setState] = useState('login');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setToken } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      if (state === 'sign up') {
        const { data } = await axios.post('http://localhost:4300/user/api/user-register', { name, email, password }); 
        if (data.success) {
          toast.success('registered successfully')
          setState('login'); 
        }
      } else {
        const { data } = await axios.post('http://localhost:4300/user/api/user-login', { email, password }); 
        if (data.success) {
          const token=(data.token)
          localStorage.setItem('token',token)
          toast.success(data.message)
          setToken(token); 
          navigate('/'); 
        }else{
           console.log(data.message)
        }
      }
    } catch (error) {
      console.error( error.message);
    }
  };
  
  
  const forgetPassword = () => {
    navigate('/forgot-password');
  };

  return (
    <div className="flex justify-center items-center my-8">
      <div className="bg-white p-4 rounded-md border border-blue-800 w-full max-w-xs">
        <h1 className="text-lg font-semibold text-center text-blue-800 mb-2">
          {state === 'sign up' ? 'Create Account' : 'Login'}
        </h1>

        <p className="text-sm text-gray-600 text-center mb-4">
          Please {state === 'sign up' ? 'sign up' : 'login'} to book an appointment
        </p>

        <form onSubmit={handleSubmit}>
          {state === 'sign up' && (
            <div className="mb-2">
              <label className="block text-xs text-gray-700 font-medium mb-1" htmlFor="name">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-2 py-1 text-xs border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-800"
                placeholder="Full name"
                required
              />
            </div>
          )}

          <div className="mb-2">
            <label className="block text-xs text-gray-700 font-medium mb-1" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-2 py-1 text-xs border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-800"
              placeholder="Email"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-xs text-gray-700 font-medium mb-1" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-2 py-1 text-xs border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-800"
              placeholder="Password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-1 bg-blue-800 text-white text-sm rounded hover:bg-blue-600 transition-all duration-300"
          >
            {state === 'sign up' ? 'Create Account' : 'Login'}
          </button>

          {state !== 'sign up' && (
            <p
              className="mt-3 text-xs text-blue-800 cursor-pointer text-center hover:underline"
              onClick={forgetPassword}
            >
              Forgot Password?
            </p>
          )}

          <p className="mt-3 text-xs text-gray-600 text-center">
            {state === 'sign up' ? 'Already have an account?' : "Don't have an account?"}
            <span
              className="text-blue-800 font-medium cursor-pointer ml-1 hover:underline"
              onClick={() => setState(state === 'sign up' ? 'login' : 'sign up')}
            >
              {state === 'sign up' ? 'Login here' : 'Sign up here'}
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
