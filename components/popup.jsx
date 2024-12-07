"use client";
import { useState, useEffect, useRef } from "react";

export default function DelayedComponentPage() {
  const [showPopup, setShowPopup] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const authToken = JSON.parse(localStorage.getItem("accessToken")); // Use your authentication mechanism
    const socket = new WebSocket(
      `ws://172.16.9.113:8000/ws/patient-add?token=${authToken.access}/`
    );

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      console.log("Notification received:", data);

      // Handle the notification
      alert(data.message); // Example: Display a notification
    };

    return () => socket.close();
  }, []);

  useEffect(() => {
    // Set a timer to show the popup after 5 seconds
    // const timer = setTimeout(() => {
    //   setShowPopup(true);
    //   // Play the siren sound
    //   const audio = new Audio("/sounds/siren.mp3");
    //   audioRef.current = audio;
    //   audio.play();
    // }, 5000);
    // Cleanup the timer when the component unmounts
    // return () => clearTimeout(timer);
  }, []);

  const handleClosePopup = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    setShowPopup(false);
  };

  return (
    <div className="p-4">
      {/* Conditionally render the popup */}
      {showPopup && (
        <div className="z-10 fixed inset-0 flex items-center justify-center bg-red-500 bg-opacity-50 animate-breathing-bg">
          <div className="bg-white w-1/2 h-1/2  flex flex-col justify-center items-center p-6 rounded-2xl shadow-lg text-center animate-breathing relative">
            <button
              onClick={handleClosePopup}
              className="p-4 absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              style={{ fontSize: "2.5rem" }}
            >
              &times;
            </button>
            <h2 className="text-5xl font-extrabold text-red-600">
              Critical Situation
            </h2>
            <p className="mt-4 text-8xl">⚠️</p>
          </div>
        </div>
      )}
      <style jsx>{`
        @keyframes breathing {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
          100% {
            transform: scale(1);
          }
        }
        .animate-breathing {
          animation: breathing 2s infinite;
        }

        @keyframes breathing-bg {
          0% {
            background-color: rgba(255, 0, 0, 0.5);
          }
          50% {
            background-color: rgba(255, 0, 0, 0.7);
          }
          100% {
            background-color: rgba(255, 0, 0, 0.5);
          }
        }
        .animate-breathing-bg {
          animation: breathing-bg 2s infinite;
        }
      `}</style>
    </div>
  );
}
