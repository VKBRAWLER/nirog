"use client";
import { createContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { useRouter } from "next/navigation";

const BaseContext = createContext();

export default BaseContext;

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const BaseProvider = ({ children }) => {
  const baseURL = API_URL;

  const router = useRouter();

  let [authToken, setAuthToken] = useState(null);
  let [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    setUserInfo(
      localStorage.getItem("userInfo")
        ? JSON.parse(localStorage.getItem("userInfo"))
        : null
    );
    setAuthToken(
      localStorage.getItem("accessToken")
        ? JSON.parse(localStorage.getItem("accessToken"))
        : null
    );

    if (authToken) {
      getUserDetails();
    }
  }, []);

  let userLogout = () => {
    setAuthToken(null);
    setUserInfo(null);
    typeof window !== "undefined" && localStorage.removeItem("accessToken");
    typeof window !== "undefined" && localStorage.removeItem("userInfo");
    router.push("/auth/login");
  };

  let getUserDetails = async () => {
    if (!userInfo) {
      let response = await axiosInstance.get("/userInfo/");
      if (response.status === 200) {
        setUserInfo(response.data);
        localStorage.setItem("userInfo", JSON.stringify(response.data));
      } else {
        userLogout();
      }
    }
  };

  let contextData = {
    userLogout: userLogout,
    authToken: authToken,
    userInfo: userInfo,
    setUserInfo: setUserInfo,
    setAuthToken,
    baseURL: baseURL,
  };

  return (
    <BaseContext.Provider value={contextData}>{children}</BaseContext.Provider>
  );
};
