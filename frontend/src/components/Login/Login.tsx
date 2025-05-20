import { useNavigate } from 'react-router-dom'
import React, {useState} from 'react';
import axios from 'axios';

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
            alert('Login successful!');
            console.log(response.data);
            navigate('/catalog')
        } catch (error) {
            console.error('Login failed:', error);
            alert('Login failed. Please try again.');
        }
    };



    return(
        <div className="flex flex-row justify-between gap-2 border border-black mx-50 bg-white rounded-4xl mb-8">
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
                        {/*Password */}
                        <div className="flex justify-center p-2">
                        <label htmlFor="">
                            <input 
                            className="border border-black 
                            rounded-lg p-2" 
                            name="password"
                            type="password" 
                            placeholder="password"
                            value={formData.password}
                            onChange={handleChange}/>
                        </label>
                        </div>
                        {/*Email */}
                        <div className="flex justify-center p-2">
                            <input 
                            className="border border-black 
                            rounded-lg p-2" 
                            name="email"
                            type="email" 
                            placeholder="email"
                            value={formData.email}
                            onChange={handleChange}/>
                        </div>
                        {/*Sign up Button */}
                        <div className="flex flex-row justify-center">
                            <button type="submit" className="header text-2xl bg-[#f95959] p-2 rounded-s-lg">
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

export default Login