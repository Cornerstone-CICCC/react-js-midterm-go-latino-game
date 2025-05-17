import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Cancel() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/catalog");
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

 return (
  <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-red-600 px-6 text-center">
    <div className="w-20 h-20 rounded-full border-4 border-red-500 flex items-center justify-center mb-6 shadow-lg bg-white">
      <span className="text-4xl font-extrabold text-red-500">✕</span>
    </div>
    <h1 className="text-4xl font-bold text-red-600 mb-2">Payment Canceled</h1>
    <p className="text-red-500 text-lg">
      Returning you to the Catalog...
    </p>
  </div>
);

}

export default Cancel;
