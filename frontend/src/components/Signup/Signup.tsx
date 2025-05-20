import React, { useState } from 'react';
import axios from 'axios';

function Signup() {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    age: '',
    email: '',
    password: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4500/customers', formData, {
        withCredentials: true,
      });
      alert('Signup successful!');
      console.log(response.data);
    } catch (error) {
      console.error('Signup failed:', error);
      alert('Signup failed. Please try again.');
    }
  };

  return (
    <div className="flex flex-row justify-between gap-2 border border-black mx-50 bg-white rounded-4xl mb-8">
      <div className="flex flex-col m-8 px-8">
        <div className="logo flex flex-row justify-center">
          <img className="w-25" src="logoSignUp.svg" alt="logo" />
        </div>
        <div className="signupTitle flex flex-col items-center">
          <p className="header text-[40px]">Sign up</p>
          <p className="text-[#929aab]">Welcome to our community - Let's create your account!</p>
        </div>
        {/* Form */}
        <div className="userForm">
          <form onSubmit={handleSubmit}>
            {/* First Name */}
            <div className="flex justify-center p-2">
              <input
                className="border border-black rounded-lg p-2"
                type="text"
                name="firstname"
                placeholder="First Name"
                value={formData.firstname}
                onChange={handleChange}
              />
            </div>
            {/* Last Name */}
            <div className="flex justify-center p-2">
              <input
                className="border border-black rounded-lg p-2"
                type="text"
                name="lastname"
                placeholder="Last Name"
                value={formData.lastname}
                onChange={handleChange}
              />
            </div>
            {/* Age */}
            <div className="flex justify-center p-2">
              <input
                className="border border-black rounded-lg p-2"
                type="number"
                name="age"
                placeholder="Age"
                value={formData.age}
                onChange={handleChange}
              />
            </div>
            {/* Password */}
            <div className="flex justify-center p-2">
              <input
                className="border border-black rounded-lg p-2"
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            {/* Email */}
            <div className="flex justify-center p-2">
              <input
                className="border border-black rounded-lg p-2"
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            {/* Signup Button */}
            <div className="flex flex-row justify-center">
              <button type="submit" className="header text-2xl bg-[#f95959] p-2 rounded-s-lg text-white">
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="flex flex-col justify-center w-150">
        <img className="border h-full" src="/images/signup-bg.png" alt="model" />
      </div>
    </div>
  );
}

export default Signup;
