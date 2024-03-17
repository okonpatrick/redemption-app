import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';


  
export default function LoginForm() {

    const navigate = useNavigate();

    const [rememberMe, setRememberMe] = useState(false);

    const toggleRememberMe = () => {
        setRememberMe(!rememberMe);
    };



    const redirectToDashboard = () => {
        navigate('/dashboard'); // Use navigate directly inside the component
    };


    const [selectedValue, setSelectedValue] = useState('');
    const genre = ['Log in As...','Beneficiary','Vendor', ];
  
    const handleSelectChange = (event) => {
      setSelectedValue(event.target.value);
    };

    return (
        <div className="min-h-screen flex items-center justify-center w-full dark:bg-gray-950">
            <div className="bg-white dark:bg-gray-900 shadow-md rounded-lg px-8 py-6 max-w-md">
                <h1 className="text-2xl font-bold text-center mb-4 dark:text-gray-200">Welcome Back!</h1>
                <form action="#">
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Login ID</label>
                        <input type="email" id="email" className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="your@email.com" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Password</label>
                        <input type="password" id="password" className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Enter your password" required />
                        <a href="#" className="text-xs text-gray-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Forgot Password?</a>
                    </div>

                    <p className='flex'></p>
<div className='flex'>

      <select
        className="outline-none focus:outline-none p-4 bg-white rounded-3xl"
        value={selectedValue}
        onChange={handleSelectChange}
        required
      >
        {genre.map((item, i) => (
          <option value={item} key={i}>
            {item}
          </option>
        ))}
      </select>
   


</div>
      

                    
                    {/* <div className="flex items-center justify-between mb-4">   
                        <div className="flex items-center">
                            <input 
                                type="checkbox" 
                                id="remember" 
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 focus:outline-none" 
                                checked={rememberMe}
                                onChange={toggleRememberMe} 
                            />
                            <label htmlFor="remember" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">Remember me</label>
                        </div>
                    </div> */}
                    <button onClick={redirectToDashboard} type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Login</button>
                </form>
            </div>
        </div>
    );
}
