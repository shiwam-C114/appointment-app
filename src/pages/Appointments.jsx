import React, { useContext, useEffect, useState } from "react";
import { Box, Button, Grid, GridItem, Spacer } from "@chakra-ui/react";
import AuthContext from "../context/AuthContext";
import Login from "./Login";
function Appointments() {
  const [data, setData] = useState([]);
  const [isAuth, toggleAuth] = useContext(AuthContext);
  function getData() {
    fetch("http://localhost:8080/appointment")
      .then((res) => res.json())
      .then(setData);
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>{isAuth?
      <Grid margin={"10px"} templateColumns="repeat(3, 1fr)" gap={6}>
        {data.map((ele) => (
          <GridItem key={ele.id}>
            <Box border="1px" borderColor="gray.800">
              Name: {ele.name} <br />
              Age: {ele.age} <br />
              appointment details: {ele.appointment_details} <br />
              gender: {ele.gender} <br />
              data: {ele.data} <br />
              time: {ele.time} <br />
              <Button> show more</Button>
              &#160;
              <Button>Delete</Button>
            </Box>
          </GridItem>
        ))}
      </Grid>:<Login/>}
    </div>
  );
}

export default Appointments;
