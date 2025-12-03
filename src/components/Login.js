import React from "react";
import Header from "./Header";

const Login = () => {
  return (
    <div className="relative">
      <Header />

      {/* Background image */}
      <div>
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/d615dd28-a1ac-4a03-995a-022d24e7b367/web/CZ-en-20251124-TRIFECTA-perspective_970fb79c-4afd-4cde-819f-da06d21061c8_medium.jpg"
          alt="bg-photo"
          className="w-full h-screen object-cover"
        />
      </div>
      {/* Centered form */}
      <form className="flex flex-col justify-center items-center w-1/4 absolute bg-black/80 px-11 pt-11 pb-40 rounded-lg top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <input
          placeholder="Email Address"
          className="w-full py-2 px-2 m-2 rounded outline-none border border-white  bg-black/10 p-6"
        />
        <input
          placeholder="Password"
          className="w-full  py-2 px-2 m-2 rounded outline-none border border-white  bg-black/10 p-6"
        />
        <button className="text-white w-full  py-1 px-2 m-2 rounded cursor-pointer bg-red-600">
          Sign In
        </button>
        <p className="text-gray-50">OR</p>
        <button className="text-white w-full  py-1 px-2 m-2 rounded cursor-pointer bg-red-600">
          Use a Sign-In code
        </button>
        <div className="flex">
          <input
            className="text-white mx-2 mt-2"
            name="rememberMe"
            type="checkbox"
            id="remember"
          />
          <label className="text-white text-sm mt-2" htmlFor="remember">
            Remember me
          </label>
        </div>
        <div>
          <p className="text-white text-sm mt-2">New to Netflix? <span className="text-bold text-white ">Sign up now</span></p>
        </div>
      </form>
    </div>
  );
};

export default Login;
