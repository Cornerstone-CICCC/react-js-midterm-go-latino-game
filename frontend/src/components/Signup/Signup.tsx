function Signup() {
    return(
        <div className="flex flex-row justify-between gap-4 border border-black mx-50 bg-[#e3e3e3] rounded-4xl mb-8 p-8">
            <div className="flex flex-col border border-black p-8">
                <div className="logo flex flex-row justify-center">
                    <img src="vite.svg" alt="logo" />
                </div> 
                <div className="signupTitle flex flex-col items-center">
                    <p className="header text-[40px]">Sign up</p>
                    <p className="text-[#929aab]">Welcome to our community - Let's create your account!</p>
                </div>
                {/*Form */}
                <div className="userForm">
                    <form action="">
                        {/*Full Name */}
                        <div>
                        <label htmlFor="">
                            Name:
                            <input className="border border-black rounded-4" type="text" />
                        </label>
                        </div>
                    </form>
                </div>
            </div>
            <div className="flex flex-col">
                <img className="border rounded-lg" src="/images/model2.png" alt="model" />
            </div>
        </div>
    );
}

export default Signup