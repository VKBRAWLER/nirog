"use client";
import { useContext, useEffect, useState } from "react";
import { MdOutlinePersonAddAlt1 } from "react-icons/md";
import { FaIdCard } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import useAxios from "@app/(utils)/hooks/axios";
import StaffDashBoard from "@components/StaffDashBoard";
import BaseContext from "@app/(utils)/context/BaseContext";

const DashBoard = () => {
  const { userInfo } = useContext(BaseContext);

  const role = userInfo?.role;
  if (!role) {return null; }
  if (role.user_type !== "Admin") { return <StaffDashBoard />; }
  const [popUp, setPopUp] = useState(null);
  return (
    <section className="bg-gray-300 rounded-t-2xl p-2 h-96 flex justify-between">
      <img className="h-96 hidden lg:block" src="/images/computer.svg" alt="" />
      <div className="flex flex-col gap-3 items-center justify-center w-full">
        <button
            onClick={() => {
            setPopUp("Staff");
          }}
          className="bg-blue-500 w-40 lg:w-72 h-10 lg:h-16 rounded-2xl flex justify-between items-center"
        >
          <MdOutlinePersonAddAlt1 className="h-full w-6 lg:w-14 ml-1 lg:ml-3" />{" "}
          <span className="bg-white w-32 lg:w-52 lg:text-2xl h-full px-3 py-2 lg:py-4 rounded-2xl">
            Add Staff
          </span>
        </button>
        <button
          onClick={() => {
            setPopUp("Patient");
          }}
          className="bg-blue-500 w-40 lg:w-72 h-10 lg:h-16 rounded-2xl flex justify-between items-center"
        >
          <FaIdCard className="h-full w-6 lg:w-14 ml-1 lg:ml-3" />{" "}
          <span className="bg-white w-32 lg:w-52 lg:text-2xl h-full px-3 py-2 lg:py-4 rounded-2xl">
            Assign Patient
          </span>
        </button>
      </div>
      {popUp === "Staff" && (
        <A_Staff
          exitBtn={() => {
            setPopUp(null);
          }}
        />
      )}
      {popUp === "Patient" && (
<A_Patient
          exitBtn={() => {
            setPopUp(null);
          }}
        />
      )}
    </section>
  );
};

export default DashBoard;

const A_Staff = ({ exitBtn }) => {
  const api = useAxios();
  const handleSumbitBtn = async (e) => {
    e.preventDefault();
    let response = await api.post("/staff/", {
      user: e.target.user_id.value,
      ward: e.target.ward.value,
    });
    if (response.status == 201) {
      exitBtn();
    }
  };

  const [wards, setWards] = useState([]);
  useEffect(() => {
    setWards(["ear", "nose", "throat"]);
  }, []);
  return (
    <section
      className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center"
      onClick={() => {
        exitBtn();
      }}
    >
      <div
        className="bg-gray-800 w-96 text-white rounded-2xl p-6 flex flex-col gap-3 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <IoCloseSharp
          className="absolute top-2 right-2 text-white cursor-pointer w-5 h-5"
          onClick={() => {
            exitBtn();
          }}
        />
        <h1 className="text-center text-2xl mb-4">Add Staff</h1>
        <form onSubmit={handleSumbitBtn} className="flex flex-col gap-3">
          <input
            type="text"
            name="user_id"
            placeholder="Enter User"
            className="p-2 rounded-md text-black"
          />
          <select name="ward" className="p-2 rounded-md text-black mt-2">
            <option value={null}>
              Select Ward
            </option>
            {wards.map((ward, index) => (
              <option key={index} value={ward}>
                {ward}
              </option>
            ))}
          </select>
          <button
            className="rounded-xl p-2 px-4 mx-3 bg-blue-500 text-white disabled:opacity-75"
            type="submit"
          >
            Assign
          </button>
        </form>
      </div>
    </section>
  );
};

const A_Patient = ({ exitBtn }) => {
  const api = useAxios();
  const handleSumbitBtn = async (e) => {
    e.preventDefault();
    let user = e.target.user_id.value;
    let ward = e.target.ward.value;
    let staff = e.target.staff.value;
    let admit = e.target.admit_time.value;
    let response = await api.post("/patient/", {
      user,
      ward,
      staff,
      admit,
    });
    if (response.status === 201) {
      exitBtn();
    }
  };
  const [wards, setWards] = useState([]);
  const [staffs, setStaffs] = useState([]);
  const loadStaff = async (e) => {
    let response = await api.get(`/staff?ward=${e.target.value}`);
    console.log(response);
    if (response.status === 200) {
      setStaffs(response.data);
    }
  };
  useEffect(() => {
    setWards(["ear", "nose", "throat"]);
  }, []);
  return (
    <section
      className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center"
      onClick={() => {
        exitBtn();
      }}
    >
      <div
        className="bg-gray-800 w-96 text-white rounded-2xl p-6 flex flex-col gap-3 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <IoCloseSharp
          className="absolute top-2 right-2 text-white cursor-pointer w-5 h-5"
          onClick={() => {
            exitBtn();
          }}
        />
        <h1 className="text-center text-2xl mb-4">Assign Patient</h1>
        <form onSubmit={handleSumbitBtn} className="flex flex-col gap-3">
          <input
            type="text"
            name="user_id"
            placeholder="Enter User"
            className="p-2 rounded-md text-black"
          />
          <select
            onChange={loadStaff}
            name="ward"
            className="p-2 rounded-md text-black mt-2"
          >
            <option selected value={null}>
              Select Ward
            </option>
            {wards.map((ward, index) => (
              <option key={index} value={ward}>
                {ward}
              </option>
            ))}
          </select>
          <select
            name="staff"
            className="p-2 rounded-md text-black mt-2"
            disabled={!staffs.length}
          >
            <option value={null}>Select Staff</option>
            {staffs.map((staff, index) => (
              <option key={index} value={staff.id}>
                {staff.user.name}
              </option>
            ))}
          </select>
          <div className="flex flex-col gap-1 my-2">
            <label htmlFor="">Admit Time</label>
            <input
              type="datetime-local"
              placeholder="Admit Time"
              className="p-2 rounded-md text-black"
              name="admit_time"
            />
          </div>
          <button
            className="rounded-xl p-2 px-4 mx-3 bg-blue-500 text-white disabled:opacity-75"
            type="submit"
          >
            Assign
          </button>
        </form>
      </div>
    </section>
  );
};