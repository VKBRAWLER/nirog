"use client";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [accessToken, setAccessToken] = useState(null);
  const handleClick = () => {
    async function fetchTokens() {
      try {
        const response = await fetch('/api/auth', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
    
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
    
        const data = await response.json();
        console.log('Tokens:', data);
        return data;
      } catch (error) {
        console.error('Failed to fetch tokens:', error);
      }
    }
    fetchTokens();
  }
  return (
   <main>
      <section className="text-gray-600 body-font bg-[url('/images/bg.jpg')] bg-cover bg-center">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font  sm:text-7xl text-10xl mb-4 font-black text-gray-900">Innovating Healthcare, Transforming Lives</h1>
            <p className="mb-8 leading-relaxed w-1/2">Empowering healthcare with intelligent solutions. Streamline diagnoses, enhance patient care, and redefine medical innovation.
</p>

            <div classNameName="flex justify-center">
              <Link href="/auth/login">
                <button classNameName="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  Login
                </button>
              </Link>
              <Link href="/auth/register">
                <button classNameName="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                  Sign up
                </button>
              </Link>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img className="object-cover object-center rounded-full" alt="hero" src="/images/Doctor.gif"/>
          </div>
        </div>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
              <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                <div className="rounded-lg h-64 overflow-hidden">
                  <img alt="content" className="object-cover object-center h-full w-full" src="/images/twentyFourSeven.gif"/>
                </div>
                <h2 className="text-xl font-bold title-font text-gray-900 mt-5">24/7 Services</h2>
                <p className="text-base leading-relaxed mt-2">Our web app offers 24/7 emergency care.</p>
                
              </div>
              <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                <div className="rounded-lg h-64 overflow-hidden">
                  <img alt="content" className="object-fit object-center h-full w-full" src="/images/safety.gif"/>
                </div>
                <h2 className="text-xl font-medium title-font text-gray-900 mt-5">Patient Safety</h2>
                <p className="text-base leading-relaxed mt-2">Our web app prioritizes patient safety with secure data handling, reliable healthcare guidance, and 24/7 access to certified medical professionals.</p>
                
              </div>
              <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                <div className="rounded-lg h-64 overflow-hidden">
                  <img alt="content" className="object-cover  object-center h-full w-full" src="/images/emergency.svg"/>
                </div>
                <h2 className="text-xl font-medium title-font text-gray-900 mt-5">Emergency Care.</h2>
                <p className="text-base leading-relaxed mt-2">Our web app ensures prompt emergency care with 24/7 medical assistance, instant doctor consultations, and guidance for urgent health situations such as immediately providing with blood.</p>
              </div>
            </div>
          </div>
          <footer class="text-gray-600 body-font">
            <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
              <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
                <span class="ml-3 text-xl">Nirog</span>
              </a>
              <p class="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2024 Nirog —
                <a href="https://twitter.com/knyttneve" class="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">@madewithpassion</a>
              </p>
              <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                <a class="text-gray-500">
                  <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>
                <a class="ml-3 text-gray-500">
                  <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>
                <a class="ml-3 text-gray-500">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                  </svg>
                </a>
                <a class="ml-3 text-gray-500">
                  <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
                    <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                  </svg>
                </a>
              </span>
            </div>
          </footer>
        </section>
      </section>
   </main>
  );
}
