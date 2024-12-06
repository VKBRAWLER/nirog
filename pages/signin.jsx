import 'tailwindcss/tailwind.css';
import Image from 'next/image';

const SignInPage = () => {
  return (
    <main>
      <div className="flex items-center min-h-screen w-full justify-between">
        <div className="lg:w-1/2 lg:block hidden">
          <img src="/images/animation.gif" alt="Doctor" width="800" height="800" />
        </div>
        <div className='right min-h-screen flex justify-center items-center bg-gradient-to-r from-white to-[#8ec6f8] lg:h-32 lg:w-1/2'  >
          <div className="flex flex-col w-full max-w-2xl p-6 shadow-lg rounded-lg right h-4/5">
            <div className="mb-6 flex-col justify-center items-center">
              <div className='flex justify-center items-center'><Image src="/images/nirog.png" alt="Logo" width={250} height={250} /></div>
            </div>
            <h2 className="text-4xl font-semibold text-center">Create Account</h2>
            <form className="flex flex-col space-y-6">
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

export default SignInPage;