import React, { useContext, useEffect, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  useDisclosure,
  Button,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const { isOpen, onOpen } = useDisclosure();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAuth, toggleAuth] = useContext(AuthContext);
  const initialRef = React.useRef(null);
  const navigate = useNavigate();

  function validate() {
    fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({email,password}),
    }).then(res=>res.json())
    .then(
        data=>{
            if(data.token === "QpwL5tke4Pnpja7X4"){
                toggleAuth(true)
                navigate("/appointments");
            }
        }
    )
  }

  useEffect(() => {
    onOpen();
  }, []);

  return (
    <div>
      <Modal initialFocusRef={initialRef} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Login</ModalHeader>
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                ref={initialRef}
                placeholder="User name"
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Password</FormLabel>
              <Input
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                placeholder="Password"
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              onClick={() => {
                validate()
              }}
              colorScheme="blue"
              mr={3}>
              Login
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default Login;
