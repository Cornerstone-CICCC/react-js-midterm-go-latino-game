import CheckoutButton from '../Cart/CheckoutButton'

const Home = () => {
    return (
        <div className="bg-[#455d7a] flex justify-center flex-col items-center">
            <div className="flex flex-col justify-center items-center">
                <p className="flex justify-center border border-[#233142] outline-double rounded-lg w-75 text-[#e3e3e3] mt-6">
                    New summer collection 2025
                </p>
                <p className="flex justify-center text-[#e3e3e3] text-[50px] intro p-4">
                    Where heritage is reinvented
                </p>
            </div>

            <div className="flex flex-row gap-6 p-6">
                <div className="flex flex-col">
                    <img className="rounded-s-full w-full max-w-80 h-full" src="/images/model1.png" alt="model 1" />
                </div>
                <div className="flex flex-col">
                    <img className="rounded-t-full  w-full max-w-80 h-full" src="/images/model3.png" alt="model 2" />
                </div>
                <div className="flex flex-col">
                    <img className="rounded-b-full  w-full max-w-80 h-full" src="/images/model2.png" alt="model 3" />
                </div>
                <div className="flex flex-col">
                    <img className="rounded-e-full  w-full max-w-80 h-full" src="/images/model4.png" alt="model 4" />
                </div>
            </div>

            {/* Aquí va el botón */}
            <div className="mt-8 mb-12">
                <CheckoutButton />
            </div>
        </div>
    );
}

export default Home
