import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Success() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white text-black text-center px-4">
      <h1 className="text-3xl font-semibold mb-2">Payment Successful</h1>
      <p className="text-gray-600 mb-6">You’ll be redirected to the homepage shortly.</p>
      <div className="w-16 h-16 border-4 border-green-500 rounded-full flex items-center justify-center">
        <span className="text-2xl text-green-500">✓</span>
      </div>
    </div>
  );
}

export default Success;
