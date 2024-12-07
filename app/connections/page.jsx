"use client";
import BaseContext from "@app/(utils)/context/BaseContext";
import useAxios from "@app/(utils)/hooks/axios";
import React, { useContext, useEffect, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
const ConnectionsPage = () => {
  const { userInfo } = useContext(BaseContext);
  const [connections, setConnections] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [addConnections, setAddConnections] = useState(false);
  const api = useAxios();
  const getConnections = async () => {
    let response = await api.get("/connection/");
    if (response.status === 200) {
      console.log(response.data);
      setConnections(response.data);
    }
  };
  const handleAddConnection = async (e) => {
    setAddConnections(false);
    e.preventDefault();
    let response = await api.post("/connection/", {
      username: e.target.username.value,
    });
    if (response.status === 201) {
      getConnections();
    }
  };
  useEffect(() => {
    getConnections();
  }, []);
  const saveChange = () => {};

  if (editMode) {
    return (
      <main>
        <section className="relative my-3 rounded-2xl p-2 flex gap-2 justify-end">
          <button
            onClick={() => {
              setEditMode(false);
            }}
            className="border-2 border-red-600 py-2 px-3 rounded-2xl"
          >
            Cancel
          </button>
          <button
            onClick={saveChange}
            className="border-2 border-blue-600 py-2 px-3 rounded-2xl"
          >
            Save Changes
          </button>
        </section>
        <section className="relative my-3 rounded-2xl h-96 bg-[var(--TH01)] flex flex-col gap-3 p-2">
          {connections.map((connection, index) => (
            <div
              key={index}
              className="w-full h-20 bg-blue-300 relative rounded-2xl flex gap-3 pl-2"
            >
              <input
                type="checkbox"
                className="absolute right-2 top-7 w-6 h-6"
              />
              <img
                className="h-full p-1"
                src="/images/profile-user.png"
                alt=""
              />
              <div className="h-full flex flex-wrap p-2">
                <p className="font-robo-bold text-2xl">
                  {connection.user1.username == userInfo.username
                    ? `${connection.user2.name} (${connection.user2.username})`
                    : `${connection.user1.name} (${connection.user1.username})`}
                </p>
                <label className="absolute right-10 top-7 w-6 h-6">
                  <input
                    type="checkbox"
                    checked={connection.SOS}
                    onChange={() => {
                      const updatedConnections = [...connections];
                      updatedConnections[index].SOS =
                        !updatedConnections[index].SOS;
                      setConnections(updatedConnections);
                    }}
                  />{" "}
                  SOS
                </label>
                <p className="text-red-400 font-robo-bold absolute right-2 top-1">
                  {connection.SOS ? "SOS" : null}
                </p>
                <p className="text-blue-400 font-robo-bold w-full">
                  {connection.private ? "private" : "public"}
                </p>
                <label className="absolute right-24 top-7 w-6 h-6">
                  <input
                    type="checkbox"
                    checked={connection.private}
                    onChange={() => {
                      const updatedConnections = [...connections];
                      updatedConnections[index].private =
                        !updatedConnections[index].private;
                      setConnections(updatedConnections);
                    }}
                  />{" "}
                  Private
                </label>
              </div>
            </div>
          ))}
        </section>
      </main>
    );
  } else {
    return (
      <main className="">
        <section className="relative my-3 rounded-2xl p-2 flex gap-2 justify-end">
          <button
            onClick={() => {
              setAddConnections(true);
            }}
            className="border-2 border-blue-600 py-2 px-3 rounded-2xl"
          >
            Add Connection
          </button>
          <button
            onClick={() => {
              setEditMode(true);
            }}
            className="border-2 border-blue-600 py-2 px-3 rounded-2xl"
          >
            Edit Connections
          </button>
        </section>
        <section className="relative my-3 rounded-2xl h-96 bg-[var(--TH01)] flex flex-col gap-3 p-2">
          {connections.map((connection, index) => (
            <div
              key={index}
              className="w-full h-20 bg-blue-50 relative rounded-2xl flex gap-3 pl-2"
            >
              <img
                className="h-full p-1"
                src="/images/profile-user.png"
                alt=""
              />
              <div className="h-full flex flex-wrap p-2">
                <p className="font-robo-bold text-2xl">
                  {connection.user1.username == userInfo.username
                    ? `${connection.user2.name} (${connection.user2.username})`
                    : `${connection.user1.name} (${connection.user1.username})`}
                </p>
                <p className="text-red-400 font-robo-bold absolute right-2 top-1">
                  {connection.SOS ? "SOS" : null}
                </p>
                <p className="text-blue-400 font-robo-bold w-full">
                  {connection.private ? "private" : "public"}
                </p>
              </div>
            </div>
          ))}
        </section>
        {addConnections && (
          <section
            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center"
            onClick={() => {
              setAddConnections(false);
            }}
          >
            <form
              className="bg-gray-800 w-96 text-white rounded-2xl p-6 flex flex-col gap-3 relative"
              onClick={(e) => e.stopPropagation()}
              onSubmit={handleAddConnection}
            >
              <IoCloseSharp
                className="absolute top-2 right-2 text-white cursor-pointer w-5 h-5"
                onClick={() => {
                  setAddConnections(false);
                }}
              />
              <label className="font-robo-bold text-2xl">Add Connection</label>
              <input
                type="text"
                placeholder="Username"
                name="username"
                className="border-2 border-blue-600 rounded-2xl p-2"
              />

              <section className="flex gap-2 justify-end">
                <button
                  onClick={() => {
                    setAddConnections(false);
                  }}
                  className="border-2 border-red-600 py-2 px-3 rounded-2xl"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="border-2 border-blue-600 py-2 px-3 rounded-2xl"
                >
                  Add Connection
                </button>
              </section>
            </form>
          </section>
        )}
      </main>
    );
  }
};

export default ConnectionsPage;
