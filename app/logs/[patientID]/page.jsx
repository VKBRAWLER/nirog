"use client";
import { useParams } from "next/navigation";
import { useState } from "react";

const PatientLogs = () => {
  const { patientID } = useParams();
  const [logs, setLogs] = useState([
    {
      title: "Arrival",
      description: "Arrival at Shushila Tiwari Hospital",
    },
    {
      title: "Checkup",
      description: "Checkup at Shushila Tiwari Hospital",
    },
    {
      title: "Medication",
      description: "Medication at Shushila Tiwari Hospital",
    },
  ]);
  const [popUp, setPopUp] = useState(false);
  return (
    <main className="p-6 bg-gray-100 min-h-screen flex flex-col gap-8">
      <section className="flex justify-between items-center">
        <h1 className="text-3xl font-semibold">Patient Logs of {patientID}</h1>
        <button onClick={()=> {setPopUp(true);}} className="px-4 py-2 bg-blue-500 text-white rounded-lg">Add Log</button>
      </section>
      <section className="space-y-4">
        {logs.map((log, index) => (
          <div key={index} className="p-4 bg-white rounded-lg shadow-md flex flex-col gap-2">
            <h3 className="text-xl font-semibold">{log.title}</h3>
            <p className="text-gray-700">{log.description}</p>
          </div>
        ))}
        {popUp && 
        <section className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center" onClick={() => { setPopUp(false); }} >
        <div className="bg-gray-800 w-96 text-white rounded-2xl p-6 flex flex-col gap-3 relative" onClick={(e) => e.stopPropagation()}>
          {/* <IoCloseSharp className="absolute top-2 right-2 text-white cursor-pointer w-5 h-5" onClick={() => { setPopUp(false); }} /> */}
          <form className="flex flex-col gap-4">
            <input className="p-2 border border-gray-300 rounded-lg" type="text" placeholder="Title"/>
            <textarea className="p-2 border border-gray-300 rounded-lg" placeholder="Description"></textarea>
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">Add Log</button>
          </form>
        </div>
        </section>
        }
      </section>
    </main>
  )
}

export default PatientLogs;