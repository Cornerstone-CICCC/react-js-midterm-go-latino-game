import './Main.css'
import { Link } from 'react-router-dom'
const Main = () => {
    return (
        <div className="bg-[#455d7a] flex justify-center flex-col items-center main">
                         {/*Login, Signup */}
        <div className='buttonsHeader flex justify-center gap-4 bg-[#050505] w-full h-80'>
            <h3 className='text-2xl text-white'>Signup and enjoy our latest season</h3>
                <div className='mainBtn gap-4'>
                    {/*Login */}
                    <button 
                    type="button"
                    className="flex flex-col text-2xl bg-[#f95959] p-4 rounded-s-lg text-white">
                        <Link to="/login">Login</Link>
                    </button>
                    {/*Signup */}
                    <button 
                    type="button"
                    className="flex flex-col text-2xl bg-[#f95959] p-4 rounded-s-lg">
                        <Link to="/signup">Signup</Link>
                    </button>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center">
                <p className="intro2 flex justify-center border border-[#233142] outline-double rounded-lg text-[#e3e3e3] mt-6">New summer collection 2025</p>
                <p className="flex justify-center text-[#e3e3e3] intro">Where heritage is reinvented</p>
            </div>
       
            <div className="imagesMain flex flex-row gap-6 p-6">
                <div className="flex justify-center items-center">
                    <img className="image-container rounded-s-full w-full max-w-80 h-full" src="/images/model1.png" alt="model 1" />
                </div>
                <div className="flex  justify-center items-center">
                    <img className="image-container rounded-t-full  w-full max-w-80 h-full" src="/images/model3.png" alt="model 3" />
                </div>
                <div className="flex justify-center items-center">
                    <img className="image-container rounded-b-full  w-full max-w-80 h-full" src="/images/model2.png" alt="model 2" />
                </div>
                <div className="flex justify-center items-center">
                    <img className="image-container rounded-e-full  w-full max-w-80 h-full" src="/images/model4.png" alt="model 4" />
                </div>
            </div>

        </div>
    );
}

export default Main