import { Box, Button, Center } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Routes, Route, useParams } from "react-router-dom";
import AuthContext from "../context/AuthContext";

function Appointment() {
  let { id } = useParams();
  const [data, setData] = useState({});
  const [isAuth, toggleAuth] = useContext(AuthContext);
  const nav = useNavigate();
  function getData() {
    fetch(`http://localhost:8080/appointment/${id}`)
      .then((res) => res.json())
      .then(setData);
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      {isAuth ? (
        <>
          <Center>
            <Box padding={"10px"} border="1px" borderColor="gray.800">
              Name: {data.name} <br />
              Age: {data.age} <br />
              appointment details: {data.appointment_details} <br />
              gender: {data.gender} <br />
              data: {data.data} <br />
              time: {data.time} <br />
              <Button colorScheme="teal">Delete</Button>
            </Box>
          </Center>
        </>
      ) : (
        nav("/login")
      )}
      <Outlet />
    </div>
  );
}

export default Appointment;
