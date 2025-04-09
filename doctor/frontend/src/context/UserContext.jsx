import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

const ConnectUserContext = (props) => {
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [doctors, setDoctors] = useState([]);
  const [userData, setUserData] = useState(false);

  const getDoctor = async () => {
    try {
      const { data } = await axios.get("http://localhost:4300/user/api/get-doctors", { headers: { token } });
      if (data.success) {
        setDoctors(data.doctors);
      }
    } catch (error) {
      console.error("Error fetching doctors:", error.message);
    }
  };

  useEffect(() => {
      getDoctor();
  }, []);


  const getUser = async () => {
    try {
      const { data } = await axios.get("http://localhost:4300/user/api/get-user", { headers: { token } });
      if (data.success) {
        setUserData(data.user);
      }
    } catch (error) {
      console.log("Error fetching doctors:" );
    }
  };

  useEffect(() => {
        if(token){
        getUser();
        }else{
          setUserData(false)
        }
    }, [token]);

  const value = {
    token,
    setToken,
    doctors,
    setDoctors,
    setUserData,
    userData,getUser
  };

  return (
    <UserContext.Provider value={value}>
      {props.children}
    </UserContext.Provider>
  );
};

export default ConnectUserContext;
