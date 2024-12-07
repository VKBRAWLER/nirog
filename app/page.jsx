"use client";
import { useState } from "react";

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
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font  sm:text-7xl text-10xl mb-4 font-black text-gray-900">Innovating Healthcare, Transforming Lives</h1>
            <p className="mb-8 leading-relaxed w-1/2">Empowering healthcare with intelligent solutions. Streamline diagnoses, enhance patient care, and redefine medical innovation.
</p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Login</button>
              <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Sign up</button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img className="object-cover object-center rounded" alt="hero" src="/images/Doctor.gif"/>
          </div>
        </div>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            {/* <div className="flex flex-col">
              <div className="h-1 bg-gray-200 rounded overflow-hidden">
                <div className="w-24 h-full bg-indigo-500"></div>
              </div>
              <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
                <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">Space The Final Frontier</h1>
                <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">Street art subway tile salvia four dollar toast bitters selfies quinoa yuccie synth meditation iPhone intelligentsia prism tofu. Viral gochujang bitters dreamcatcher.</p>
              </div>
            </div> */}
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
        </section>
      </section>
   </main>
  );
}
