import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";

function AddApp() {
  const [form, setForm] = useState({
    name: "demo",
    age: "sa",
    appointment_details: "iji",
    time: "",
    date: "",
    gender: "",
  });
  async function postData(url = "", data = {}) {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response.json();
  }
  function submit() {
    postData("http://localhost:8080/appointment/", { ...form }).then((data) => {
      console.log(data);
    });
  }

  function handleChange(e) {
    
    console.log({...{[e.target.name]: e.target.value}, ...form});
    setForm({...form,[e.target.name]:e.target.value  });
  }

  return (
    <div>
      <FormControl>
        <FormLabel>FORM</FormLabel>
        <Input name="name" onChange={handleChange} placeholder="name" />
        <Input name="age" onChange={handleChange} placeholder="Age" />
        <Input
          name="appointment_details"
          onChange={handleChange}
          placeholder="appointment detail"
        />
        <Input name="time" onChange={handleChange} placeholder="time" />
        <Input name="date" onChange={handleChange} placeholder="date" />
        <Input name="gender" onChange={handleChange} placeholder="gender" />
      </FormControl>
      <Button onClick={submit} colorScheme="blue">Submit</Button>

      <Outlet />
    </div>
  );
}

export default AddApp;
