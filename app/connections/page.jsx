"use client";
import React, { useEffect, useState } from 'react'

const ConnectionsPage = () => {
  const [connections, setConnections] = useState([]);
  useEffect(() => {
    setConnections([
      {
        name: 'John Doe',
        SOS: false,
        private: false,
      },
      {
        name: 'Jane Doe',
        SOS: true,
        private: false,
      },
      {
        name: 'John Smith',
        SOS: false,
        private: true,
      },
      {
        name: 'Jane Smith',
        SOS: true,
        private: true,
      },
    ]);
  }, []);
  return (
    <main className=''>
      <section className="relative my-3 rounded-2xl h-96 bg-[var(--TH01)] flex flex-col gap-3 p-2">
      {connections.map((connection, index) => (
        <div className="w-full h-20 bg-blue-50 relative rounded-l-full flex gap-3">
          <img className='h-full' src='/images/profile-user.png' alt="" />
          <div className='h-full flex flex-wrap gap-4'>
          <p className='font-robo-bold text-2xl'>{connection.name}</p>
          <p className='text-red-400 font-robo-bold absolute right-2 top-1'>{connection.SOS ? "SOS" : null}</p>
          <p className='text-blue-400 font-robo-bold w-full'>{connection.private ? "private" : "public"}</p>
          </div>
        </div>
      ))}
      </section>
    </main>
  )
}

export default ConnectionsPage;