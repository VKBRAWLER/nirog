"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoMdNotifications } from "react-icons/io";
import { MdOutlineHandshake } from "react-icons/md";
import { CgDanger } from "react-icons/cg";
import BaseContext from "@app/(utils)/context/BaseContext";
import useAxios from "@app/(utils)/hooks/axios";
import { useContext, useEffect, useState } from "react";

const Header = () => {
  const pathname = usePathname().toLowerCase();
  if (pathname.includes("auth")) return null;
  const [notifications, setNotifications] = useState(false);
  const { userInfo, setUserInfo } = useContext(BaseContext);
  let api = useAxios();
  let getUserInfo = async () => {
    let response = await api.get("/user/");
    if (response.status === 200) {
      setUserInfo(response.data);
      localStorage.setItem("userInfo", JSON.stringify(response.data));
    }
  };
  const SignOut = () => {
    setUserInfo(null);
    localStorage.removeItem("userInfo");
    window.location.href = "/auth/login";
  };
  useEffect(() => {
    getUserInfo();
  }, []);
  const notificationList = [
    {
      title: "New Connection",
      description: "John Doe wants to connect with you",
    },
    {
      title: "Emergency",
      description: "Jane Doe has sent an SOS",
    },
    {
      title: "New Connection",
      description: "John Smith wants to connect with you",
    },
    {
      title: "New Connection",
      description: "Jane Smith wants to connect with you",
    },
  ]
  return (
    <header className='bg-blue-100 h-24 flex justify-between lg:px-5 items-center relative'>
      <img className='h-full' src="/images/nirog.png" alt="" />
      {userInfo &&
        <nav className="flex gap-4 lg:gap-8 items-center">
          <Link className="underline text-blue-900 lg:text-2xl" href={'/dashboard'}>DashBoard</Link>
          <button className="underline text-blue-900 lg:text-2xl" onClick={SignOut}>Sign Out</button>
          <IoMdNotifications className='text-4xl' onClick={() => { setNotifications(!notifications); }} />
        </nav>
      }
      {notifications &&
        <section className="absolute top-28 border-black border-2 right-6 z-20 bg-white shadow-lg w-96 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Notifications</h3>
          <ul>
            {notificationList.map((notification, index) => (
              <li key={index} className="mb-2 border-b-2 border-blue-500 flex items-center gap-2">
                {notification.title === "Emergency" ? <CgDanger className='text-4xl text-red-500' /> : <MdOutlineHandshake className='text-4xl' />}
                <div>
                  <h4 className={`font-robo-bold ${notification.title === "Emergency" && "text-red-500"}`}>{notification.title}</h4>
                  <p className="text-sm text-gray-600">{notification.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>
      }
    </header>
  )
}



export default Header;