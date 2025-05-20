import { Link, useNavigate } from 'react-router-dom'
import React, {useState} from 'react';
import axios from 'axios';


import './Login.css'
import toast from 'react-hot-toast';
function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const navigate = useNavigate();


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:4500/customers/login', formData, {
                withCredentials: true,
            });
            toast.success('Login successful!')
            console.log(response.data);
            navigate('/catalog')
        } catch (error) {
            console.error('Login failed:', error);
            toast.error('Login failed. Please try again.')
        }
    };



    return(
        <div className="flex gap-2 border border-black bg-white rounded-4xl mb-8 loginContainer pb-4 justify-center">
            <div className="flex flex-col m-8 px-8">
                <div className="logo flex flex-row justify-center">
                    <img className='w-25' src="logoSignUp.svg" alt="logo" />
                </div> 
                <div className="signupTitle flex flex-col items-center">
                    <p className="header text-[40px]">Login</p>
                    <p className="text-[#929aab]">Glad to have you back!! - Let's get started!</p>
                </div>
                {/*Form */}
                <div className="userForm">
                    <form onSubmit={handleSubmit}>
                        {/*Email */}
                        <div className="flex justify-center p-2">
                            <input 
                            name="email"
                            className="border border-black 
                            

                            rounded-lg p-2 text-[22px]" 
                            type="email" 
                            placeholder="email"
                            value={formData.email}
                            onChange={handleChange}/>
                        </div>
                        {/*Password */}
                        <div className="flex justify-center p-2">
                        <label htmlFor="">
                            <input 
                            name="password"
                            className="border border-black 


                            rounded-lg p-2 text-[22px]" 
                            type="password" 
                            placeholder="password"
                            value={formData.password}
                            onChange={handleChange}/>
                        </label>
                        </div>
                        {/*Sign up Button */}
                        <div className="flex flex-row justify-center">

                            <button className="header text-[26px] bg-[#f95959] p-2 rounded-s-lg justify-center w-20">
                            <Link to="/login">Login</Link>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="flex">
                <img className="border h-full image-container " src="/images/signup-bg.png" alt="model" />
            </div>
        </div>
        
    );
}

export default Login