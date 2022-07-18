import React from 'react'
import { Outlet } from 'react-router-dom'

function Appointment() {
  return (
    <div>Appointment
        <Outlet/>
    </div>
  )
}

export default Appointment