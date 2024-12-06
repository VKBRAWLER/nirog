"use client";
import BaseContext from "@app/(utils)/context/BaseContext";
import { useContext, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Login() {
  const { baseURL, setAuthToken } = useContext(BaseContext);
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
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
      if (data.access) {
        setAuthToken(data);
        localStorage.setItem("accessToken", JSON.stringify(data));
        router.push("/dashboard");
      } else {
        alert("Invalid credentials");
      }
    } catch (error) {
      console.error("Error logging in:", error);
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
        <div className="right min-h-screen flex justify-center items-center bg-gradient-to-r from-white to-[#8ec6f8] h-32 w-full">
          <div className="flex flex-col w-full max-w-sm p-6 h-5/6 right">
            <div className="flex justify-center items-center mb-12 mt-0">
              <Image
                src="/images/nirog.png"
                alt="Logo"
                width={200}
                height={200}
              />
            </div>

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
                    <svg
                      className="h-5 w-5 text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 12h.01M19.071 4.929a10 10 0 00-14.142 0M4.929 19.071a10 10 0 0014.142 0M12 15l-3-3m0 0l3-3m-3 3h12"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="h-5 w-5 text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 12h.01M19.071 4.929a10 10 0 00-14.142 0M4.929 19.071a10 10 0 0014.142 0M12 15l-3-3m0 0l3-3m-3 3h12"
                      />
                    </svg>
                  )}
                </button>
              </div>
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
