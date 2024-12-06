"use client";
import { useState } from "react";

export default function Home() {
  const [accessToken, setAccessToken] = useState(null);
  const handleClick = () => {
    const fetchTokens = async () => {
      try {
        const response = await fetch('/api/auth/user', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const data = await response.json();
        setAccessToken(data.accessToken);
      } catch (error) {
        console.error('Failed to fetch tokens');
      }
    };
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
