import { Link } from 'react-router-dom'

function Login() {
    return(
        <div className="flex flex-row justify-between gap-2 border border-black mx-50 bg-[#e3e3e3] rounded-4xl mb-8">
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
                    <form action="">
                        {/*Password */}
                        <div className="flex justify-center p-2">
                        <label htmlFor="">
                            <input 
                            className="border border-black 
                            rounded-lg p-2" 
                            type="password" 
                            placeholder="Password"/>
                        </label>
                        </div>
                        {/*Email */}
                        <div className="flex justify-center p-2">
                        <label htmlFor="">
                            <input 
                            className="border border-black 
                            rounded-lg p-2" 
                            type="email" 
                            placeholder="Email"/>
                        </label>
                        </div>
                        {/*Sign up Button */}
                        <div className="flex flex-row justify-center">
                            <button className="header text-2xl bg-[#f95959] p-2 rounded-s-lg">
                            <Link to="/login">Login</Link>
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