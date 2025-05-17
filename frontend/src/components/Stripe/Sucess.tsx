import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Success() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/catalog");
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-green-900 px-6 text-center">
      <div className="w-20 h-20 rounded-full border-4 border-green-500 flex items-center justify-center mb-6 shadow-md bg-white">
        <span className="text-3xl font-bold text-green-500">✓</span>
      </div>
      <h1 className="text-4xl font-bold mb-2">Payment Successful</h1>
      <p className="text-green-800 text-lg">
        You’ll be redirected to the Catalog shortly.
      </p>
    </div>
  );
}

export default Success;
