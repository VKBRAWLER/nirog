"use client";
import { useContext } from "react";
import { useState, useEffect, useRef } from "react";
import BaseContext from "@app/(utils)/context/BaseContext";
import Image from 'next/image';
import { useRouter } from "next/navigation";

export default function Login() {
  const { baseURL, setAuthToken } = useContext(BaseContext);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const audioRef = useRef(null);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    console.log(e.target.username.value, e.target.password.value);
    try {
      const response = await fetch(`${baseURL}/auth/token/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: e.target.username.value,
          password: e.target.password.value,
        }),
      });
      let data = await response.json();
      console.log(data);
      setAuthToken(data);
      localStorage.setItem("accessToken", JSON.stringify(data));
      router.push("/dashboard");
    } catch (error) {
      console.error("Error logging in:", error);
      setIsLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <main>
      <div className="flex items-center min-h-screen w-full">
        <div className="w-3/4 lg:block hidden">
          <img src="/images/animation.gif" alt="Doctor" />
        </div>
        <div className='right min-h-screen flex justify-center items-center bg-gradient-to-r from-white to-[#8ec6f8] h-32 w-full'>
          <div className="flex flex-col w-full max-w-sm p-6 h-5/6 right">
            <div className='flex justify-center items-center mb-12 mt-0'><Image src="/images/nirog.png" alt="Logo" width={200} height={200} /></div>

            <div className="mb-6 flex-col justify-center items-center">
              <h2 className="text-3xl font-semibold text-center mb-8">Login</h2>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Username"
                className="p-3 border-b border-gray-300 rounded-none"
              />
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  placeholder="Password"
                  className="p-3 border-b border-gray-300 rounded-none w-full"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                >
                  {showPassword ? (
                    <svg className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12h.01M19.071 4.929a10 10 0 00-14.142 0M4.929 19.071a10 10 0 0014.142 0M12 15l-3-3m0 0l3-3m-3 3h12" />
                    </svg>
                  ) : (
                    <svg className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12h.01M19.071 4.929a10 10 0 00-14.142 0M4.929 19.071a10 10 0 0014.142 0M12 15l-3-3m0 0l3-3m-3 3h12" />
                    </svg>
                  )}
                </button>
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white p-3 rounded-full w-1/2 content-center mx-auto"
                disabled={isLoading}
              >
                {isLoading ? (
                  <svg className="animate-spin h-5 w-5 text-white mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : (
                  "Submit"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}