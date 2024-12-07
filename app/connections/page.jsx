"use client";
import React, { useEffect, useState } from 'react'
import { IoCloseSharp } from 'react-icons/io5';
const ConnectionsPage = () => {
  const [connections, setConnections] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [addConnections, setAddConnections] = useState(false);
  useEffect(() => {
    setConnections([{ name: 'John Doe', SOS: false, private: false, listed: true }, { name: 'Jane Doe', SOS: true, private: false, listed: true }, { name: 'John Smith', SOS: false, private: true, listed: true }, { name: 'Jane Smith', SOS: true, private: true, listed: true },]);
  }, []);
  const saveChange = () => { console.log(connections); };
  if (editMode) {
    return (
      <main>
        <section className="relative my-3 rounded-2xl p-2 flex gap-2 justify-end">
          <button onClick={() => { setEditMode(false); }} className='border-2 border-red-600 py-2 px-3 rounded-2xl'>Cancel</button>
          <button onClick={saveChange} className='border-2 border-blue-600 py-2 px-3 rounded-2xl'>Save Changes</button>
        </section>
        <section className="relative my-3 rounded-2xl h-96 bg-[var(--TH01)] flex flex-col gap-3 p-2">
          {connections.map((connection, index) => (
            <div key={index} className="w-full h-20 bg-blue-300 relative rounded-2xl flex gap-3 pl-2">
              <input type="checkbox" className='absolute right-2 top-7 w-6 h-6' />
              <img className='h-full p-1' src='/images/profile-user.png' alt="" />
              <div className='h-full flex flex-wrap p-2'>
                <p className='font-robo-bold text-2xl'>{connection.name}</p>
                <label className='absolute right-10 top-7 w-6 h-6'>
                  <input type="checkbox" checked={connection.SOS} onChange={() => { const updatedConnections = [...connections]; updatedConnections[index].SOS = !updatedConnections[index].SOS; setConnections(updatedConnections); }} /> SOS
                </label>
                <p className='text-red-400 font-robo-bold absolute right-2 top-1'>{connection.SOS ? "SOS" : null}</p>
                <p className='text-blue-400 font-robo-bold w-full'>{connection.private ? "private" : "public"}</p>
                <label className='absolute right-24 top-7 w-6 h-6'>
                  <input type="checkbox" checked={connection.private} onChange={() => { const updatedConnections = [...connections]; updatedConnections[index].private = !updatedConnections[index].private; setConnections(updatedConnections); }} /> Private
                </label>
              </div>
            </div>
          ))}
        </section>
      </main>
    )
  } else {
    return (
      <main className=''>
        <section className="relative my-3 rounded-2xl p-2 flex gap-2 justify-end">
          <button onClick={() => { setAddConnections(true) }} className='border-2 border-blue-600 py-2 px-3 rounded-2xl'>Add Connection</button>
          <button onClick={() => { setEditMode(true); }} className='border-2 border-blue-600 py-2 px-3 rounded-2xl'>Edit Connections</button>
        </section>
        <section className="relative my-3 rounded-2xl h-96 bg-[var(--TH01)] flex flex-col gap-3 p-2">
          {connections.map((connection, index) => (
            <div key={index} className="w-full h-20 bg-blue-50 relative rounded-2xl flex gap-3 pl-2">
              <img className='h-full p-1' src='/images/profile-user.png' alt="" />
              <div className='h-full flex flex-wrap p-2'>
                <p className='font-robo-bold text-2xl'>{connection.name}</p>
                <p className='text-red-400 font-robo-bold absolute right-2 top-1'>{connection.SOS ? "SOS" : null}</p>
                <p className='text-blue-400 font-robo-bold w-full'>{connection.private ? "private" : "public"}</p>
              </div>
            </div>
          ))}
        </section>
        {addConnections &&
          <section className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center" onClick={() => { setAddConnections(false) }}>
            <form className="bg-gray-800 w-96 text-white rounded-2xl p-6 flex flex-col gap-3 relative" onClick={(e) => e.stopPropagation()} >
              <IoCloseSharp className="absolute top-2 right-2 text-white cursor-pointer w-5 h-5" onClick={() => { setAddConnections(false) }} />
              <label className='font-robo-bold text-2xl'>Add Connection</label>
              <input type="text" placeholder='Name' className='border-2 border-blue-600 rounded-2xl p-2' />
              <label className='font-robo-bold text-2xl'>SOS</label>
              <input type="checkbox" className='border-2 border-blue-600 rounded-2xl p-2' />
              <label className='font-robo-bold text-2xl'>Private</label>
              <input type="checkbox" className='border-2 border-blue-600 rounded-2xl p-2' />
              <section className='flex gap-2 justify-end'>
                <button onClick={() => { setAddConnections(false) }} className='border-2 border-red-600 py-2 px-3 rounded-2xl'>Cancel</button>
                <button onClick={() => { setAddConnections(false) }} className='border-2 border-blue-600 py-2 px-3 rounded-2xl'>Add Connection</button>
              </section>
            </form>
          </section>
        }
      </main>
    )
  }
}

export default ConnectionsPage;