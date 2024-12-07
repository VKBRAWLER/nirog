"use client";
import Image from "next/image";
import { useContext } from "react";
import BaseContext from "@app/(utils)/context/BaseContext";
import { useRouter } from "@node_modules/next/navigation";

const Register = () => {
  let router = useRouter();
  let { baseURL, setAuthToken } = useContext(BaseContext);
  let handleSubmit = async (e) => {
    e.preventDefault();
    let name = e.target.fullName.value;
    let aadhar = e.target.aadharNumber.value;
    let email = e.target.mail.value;
    let gender = e.target.gender.value;
    let date_of_birth = e.target.date.value;
    let phone = e.target.phonenumber.value;
    let password = e.target.password.value;
    let username = e.target.mail.value;

    let response = await fetch(`${baseURL}/user/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        name,
        aadhar,
        email,
        phone,
        gender,
        date_of_birth,
        password,
      }),
    });
    let data = await response.json();
    if (response.status === 201) {
      response = await fetch(`${baseURL}/auth/token/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });
      let login = await response.json();
      if (login.access) {
        setAuthToken(login);
        localStorage.setItem("accessToken", JSON.stringify(login));
        router.push("/dashboard");
      } else {
        alert("Invalid credentials");
      }
    } else {
      console.log(data);
    }
  };
  return (
    <main>
      <div className="flex items-center min-h-screen w-full justify-between">
        <div className="lg:w-1/2 lg:block hidden">
          <img
            src="/images/animation.gif"
            alt="Doctor"
            width="800"
            height="800"
          />
        </div>
        <div className="right min-h-screen w-full flex justify-center items-center bg-gradient-to-r from-white to-[#8ec6f8] lg:h-32 lg:w-1/2">
          <div className="flex flex-col w-full max-w-2xl p-6 shadow-lg rounded-lg right h-4/5">
            <div className="mb-6 flex-col justify-center items-center">
              <div className="flex justify-center items-center">
                <Image
                  src="/images/nirog.png"
                  alt="Logo"
                  width={250}
                  height={250}
                />
              </div>
            </div>
            <h2 className="text-4xl font-semibold text-center">
              Create Account
            </h2>
            <form className="flex flex-col space-y-6" onSubmit={handleSubmit}>
              <input
                type="text"
                name="fullName"
                id="fullName"
                placeholder="Full Name"
                className="text-2xl p-3 pl-0 pb-0 border-gray-500 bg-transparent  border-b focus:outline-none  border-t-0 border-l-0 border-r-0"
              />
              <input
                type="number"
                name="aadharNumber"
                id="aadharNumber"
                placeholder="Aadhar Number"
                className="text-2xl [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none p-3 pl-0 pb-0 border-gray-500 bg-transparent border-b focus:outline-none  border-t-0 border-l-0 border-r-0"
              />
              <input
                type="text"
                name="mail"
                id="mail"
                placeholder="Email"
                className="text-2xl p-4 pl-0 pb-0 border-gray-500 bg-transparent border-b focus:outline-none  border-t-0 border-l-0 border-r-0"
              />
              <input
                type="number"
                name="phonenumber"
                id="phonenumber"
                placeholder="Phone Number"
                className="text-2xl [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none p-3 pl-0 pb-0 border-gray-500 bg-transparent border-b focus:outline-none  border-t-0 border-l-0 border-r-0"
              />
              <div className="flex space-x-4">
                <select
                  name="gender"
                  id="gender"
                  className="inline-block w-1/2 text-2xl [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none p-3 pl-0 pb-0 border-gray-500 bg-transparent border-b focus:outline-none  border-t-0 border-l-0 border-r-0"
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
                <input
                  type="date"
                  name="date"
                  id="date"
                  className="inline-block w-1/2 text-2xl [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none p-3 pl-0 pb-0 border-gray-500 bg-transparent border-b focus:outline-none  border-t-0 border-l-0 border-r-0"
                />
              </div>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="text-2xl p-3 pl-0 pb-0 border-gray-500 bg-transparent border-b focus:outline-none border-t-0 border-l-0 border-r-0"
              />
              <button
                type="submit"
                className="text-2xl bg-blue-500 text-white p-4 rounded-full w-1/2 content-center mx-auto"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Register;