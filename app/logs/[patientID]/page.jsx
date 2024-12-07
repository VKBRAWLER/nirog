"use client";
import { useParams } from "next/navigation";
const PatientLogs = () => {
  const { patientID } = useParams();
  return (
    <div>PatientLogs: {patientID}</div>
  )
}

export default PatientLogs;