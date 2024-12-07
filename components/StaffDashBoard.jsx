import Link from 'next/link';

const StaffDashBoard = () => {
  const Patients = [
    {
      "patientID": "123",
      "wardID": "ear",
      "admitDate": "2021-10-10",
      "dischargeDate": "2021-10-12",
      "status": "discharged"
    },
    {
      "patientID": "124",
      "wardID": "nose",
      "admitDate": "2021-10-10",
      "dischargeDate": "2021-10-12",
      "status": "discharged"
    },
    {
      "patientID": "125",
      "wardID": "throat",
      "admitDate": "2021-10-10",
      "dischargeDate": "2021-10-12",
      "status": "discharged"
    },
    {
      "patientID": "126",
      "wardID": "ear",
      "admitDate": "2021-10-10",
      "dischargeDate": null,
      "status": "admitted"
    }
  ]
  return (
    <section className="relative my-3 rounded-2xl bg-[var(--TH01)] flex flex-col gap-3 p-4">
      <h1 className="text-2xl font-bold mb-4">Patients</h1>
      <div>
        {Patients.map((patient, index) => (
          <Link href={`/logs/${patient.patientID}`} key={index} className="w-full bg-white shadow-md rounded-lg p-4 mb-4 flex flex-col gap-2">
            <div className="flex justify-between">
              <p className="font-bold text-lg">Patient ID: {patient.patientID}</p>
              <p className={`font-bold text-lg ${patient.status === 'admitted' ? 'text-green-500' : 'text-red-500'}`}>
                {patient.status}
              </p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-600">Ward: {patient.wardID}</p>
              <p className="text-gray-600">Admit Date: {patient.admitDate}</p>
            </div>
            {patient.dischargeDate && (
              <p className="text-gray-600">Discharge Date: {patient.dischargeDate}</p>
            )}
          </Link>
        ))}
      </div>
    </section>
  )
}

export default StaffDashBoard;