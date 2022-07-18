import { Button, Center } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
    const nav = useNavigate()

    function handleClk() {
        nav("/appointments")
    }
  return (
    <div>
        <Center>
            <h1>Appointment app</h1>
        
        <Button onClick={handleClk}>Appointments</Button>
        </Center>
    </div>
  )
}

export default Home