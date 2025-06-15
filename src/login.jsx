import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // nanti bisa tambah validasi login di sini
    navigate("/home");
  };

  return (
    <div className="w-full h-full px-6 py-8 flex flex-col items-center text-center">
      <img
        src="/illustration.png"
        alt="Ilustrasi"
        className="w-60 mb-4"
      />

      <div className="bg-yellow-300 w-full rounded-[30px] shadow-lg px-6 py-6 flex flex-col items-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4 drop-shadow-md">Login</h2>

        <input
          type="text"
          placeholder="USERNAME"
          className="w-full mb-3 px-4 py-2 rounded-full border border-black outline-none text-sm"
        />
        <input
          type="password"
          placeholder="PASSWORD"
          className="w-full mb-6 px-4 py-2 rounded-full border border-black outline-none text-sm"
        />

        <button
          onClick={handleLogin}
          className="bg-green-500 hover:bg-green-600 text-white font-bold px-10 py-2 rounded-full shadow-md"
        >
          LOGIN
        </button>
      </div>

      <div className="w-full mt-6 flex justify-between text-xs px-2 text-black">
        <span>
          New user?{" "}
          <a href="#" className="text-green-700 font-semibold hover:text-green-900 hover:underline transition">
            Sign Up
          </a>
        </span>
        <a href="#" className="italic hover:text-black hover:underline transition">
          Forgot Your Password?
        </a>
      </div>
    </div>
  );
}

export default Login;
