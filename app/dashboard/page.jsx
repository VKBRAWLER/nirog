"use client"; 
import TimeLine from '@components/TimeLine';
import BaseContext from "@app/(utils)/context/BaseContext";
import useAxios from "@app/(utils)/hooks/axios";
import React, { useContext, useEffect, useState } from "react";
import DashBoard from '@components/DashBoard';

const DashBoardPage = () => {
  const { userInfo, setUserInfo } = useContext(BaseContext);
  const [options, setOptions] = useState(true); // true = timeline, false = dashboard
  let api = useAxios();
  let getUserInfo = async () => {
    let response = await api.get("/user/");
    if (response.status === 200) {
      setUserInfo(response.data);
      localStorage.setItem("userInfo", JSON.stringify(response.data));
    }
  };
  useEffect(() => {
    getUserInfo();
  }, []);
  return (
    <main className="flex flex-col gap-1 lg:p-10">
      <section className="relative">
        <div className="w-full h-40 lg:h-72 bg-[var(--TH01)] relative lg:rounded-3xl">
          <img
            className="absolute left-1/2 lg:left-28 lg:translate-x-0 lg:translate-y-[10rem] transform -translate-x-1/2 bottom-0 translate-y-1/2 w-52 lg:w-64 bg-white rounded-full p-2"
            src="/images/profile-user.png"
            alt=""
          />
          <img
            className="absolute right-0 bottom-0 h-[120%] hidden lg:block"
            src="/images/doctors.png"
            alt=""
          />
        </div>
        <div className="w-full pt-[7rem] lg:pt-1 flex flex-col lg:flex-row lg:justify-between gap-8 lg:h-40">
          <div className="text-center lg:text-left text-lg flex flex-col lg:pl-96 lg:pt-1">
            <p className="font-robo-bold text-3xl pb-3 lg:pb-1">
              {userInfo?.name}
            </p>
            <p className="text-2xl">@{userInfo?.username}</p>
            <p className="text-2xl">
              {new Date().getFullYear() -
                parseInt(userInfo?.date_of_birth?.split("-")[0])}{" "}
              years
            </p>
            <p className="text-2xl">{userInfo?.gender}</p>
          </div>
          <div className="flex justify-evenly lg:items-end lg:gap-1">
            <button onClick={()=> { setOptions(true); }} className={`px-2 py-1 rounded-xl text-2xl border-4 border-blue-400 w-[8.5rem] hover:text-white hover:bg-blue-400 ${options ? 'text-white bg-blue-400' : 'text-blue-400 bg-white' } `}>
              TimeLine
            </button>
            <button onClick={()=> { setOptions(false); }} className={`px-2 py-1 rounded-xl text-2xl border-4 border-blue-400 w-[8.5rem] hover:text-white hover:bg-blue-400 ${!options ? 'text-white bg-blue-400' : 'text-blue-400 bg-white' } `}>
              DashBoard
            </button>
          </div>
        </div>
      </section>
      {options ? <TimeLine /> : <DashBoard />}

    </main>
  );
};

export default DashBoardPage;
