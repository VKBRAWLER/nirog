import 'tailwindcss/tailwind.css';
import Image from 'next/image';

const SignInPage = () => {
  return (
    <main>
      <div className="flex items-center min-h-screen w-full">
        <div className="w-3/4 lg:block hidden">
          <img src="/images/animation.gif" alt="Doctor" />
        </div>
        <div className='right min-h-screen flex justify-center items-center bg-gradient-to-r from-white to-[#8ec6f8] h-32 w-full'  >
          <div className="flex flex-col w-full max-w-sm p-6shadow-lg rounded-lg right ">
            <div className="mb-6 flex-col justify-center items-center">
              <div className='flex justify-center items-center'><Image src="/images/nirog.png" alt="Logo" width={100} height={100} /></div>
              <h2 className="text-2xl font-semibold text-center">Create Account</h2>
            </div>
            <form className="flex flex-col space-y-4">
              <input
                type="text"
                name="fullName"
                id="fullName"
                placeholder="Full Name"
                className="p-3 border border-b border-gray-300 rounded border-t-0 border-l-0 border-r-0"
              />
              <input
                type="number"
                name="aadharNumber"
                id="aadharNumber"
                placeholder="Aadhar Number"
                className="p-3 border border-b border-gray-300 rounded border-t-0 border-l-0 border-r-0"
              />
              <input
                type="text"
                name="mail"
                id="mail"
                placeholder="Email"
                className="p-3 border border-b border-gray-300 rounded border-t-0 border-l-0 border-r-0"
              />
              <input
                type="number"
                name="phonenumber"
                id="phonenumber"
                placeholder="Phone Number"
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
};

export default SignInPage;