"use client";
import { jwtDecode } from "jwt-decode"; // Correct import for `jwt-decode`
import axios from "axios";
import dayjs from "dayjs";
import { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import BaseContext from "../context/BaseContext";

const useAxios = () => {
  const { authToken, setUser, setAuthToken, baseURL } = useContext(BaseContext);
  const router = useRouter();

  useEffect(() => {
    // Redirect if not authenticated (client-side only)
    if (typeof window !== "undefined" && !authToken) {
      router.push("/auth/login");
    }
  }, [authToken, router]);

  const axiosInstance = axios.create({
    baseURL: baseURL,
    headers: {
      Authorization: `Bearer ${authToken?.access}`,
    },
  });

  axiosInstance.interceptors.request.use(async (req) => {
    // Ensure `authToken` exists before making requests
    if (!authToken) {
      router.push("/auth/login");
      return Promise.reject(new Error("No access token available"));
    }

    // Decode token and check expiration
    const user = jwtDecode(authToken.access);
    const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;

    if (!isExpired) {
      req.headers.Authorization = `Bearer ${authToken.access}`;
      return req;
    } else {
      // Attempt token refresh if expired
      try {
        const response = await axios.post(`${baseURL}/auth/token/refresh/`, {
          refresh: authToken.refresh,
        });
        console.log("Token refreshed:", response.data);

        // Update token and context state
        localStorage.setItem("accessToken", JSON.stringify(response.data));
        setUser(jwtDecode(response.data.access));
        setAuthToken(response.data);

        // Set new token in headers
        req.headers.Authorization = `Bearer ${response.data.access}`;
        return req;
      } catch (error) {
        console.error("Error refreshing token:", error);
        router.push("/auth/login");
        return Promise.reject(error);
      }
    }
  });

  axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response && error.response.status === 401) {
        router.push("/auth/login");
      }
      return Promise.reject(error);
    }
  );

  return axiosInstance;
};

export default useAxios;
