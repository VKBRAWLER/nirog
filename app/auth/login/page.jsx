"use client";
import BaseContext from "@app/(utils)/context/BaseContext";
import useAxios from "@app/(utils)/hooks/axios";
import React, { useContext } from "react";

export default function Login() {
  const api = useAxios();
  const { baseURL, setAuthToken } = useContext(BaseContext);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${baseURL}/auth/token/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: e.target.username.value,
          password: e.target.password.value,
        }),
      });
      let data = await response.json();
      setAuthToken(data);
      localStorage.setItem("accessToken", JSON.stringify(data));
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit} method="post">
        <input type="text" name="username" placeholder="Email" />
        <input type="password" name="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
