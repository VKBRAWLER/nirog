"use client";
import BaseContext from "@app/(utils)/context/BaseContext";
import { useContext } from "react";
import Image from 'next/image';

export default function Login() {
  const { baseURL, setAuthToken } = useContext(BaseContext);
  const handleSubmit = async (e) => {
    e.preventDefault();
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
      setAuthToken(data);
      localStorage.setItem("accessToken", JSON.stringify(data));
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };
  return (
    <main>
      <div className="flex items-center min-h-screen w-full">
        <div className="w-3/4 lg:block hidden">
          <img src="/images/animation.gif" alt="Doctor" />
        </div>
        <div className='right min-h-screen flex justify-center items-center bg-gradient-to-r from-white to-[#8ec6f8] h-32 w-full'  >
          <div className="flex flex-col w-full max-w-sm p-6 h-5/6 shadow-lg rounded-lg right ">
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
                className="p-3 border border-b border-gray-300 rounded border-t-0 border-l-0 border-r-0"
              />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="p-3 border-gray-300 rounded border-t-0 border-l-0 border-r-0"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white p-3 rounded-full w-1/2 content-center mx-auto"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
