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
    <button onClick={handleClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-4">
    Fetch Tokens
    </button>
   </main>
  );
}
