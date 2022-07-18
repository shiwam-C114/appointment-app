import React from 'react'
import { Outlet } from 'react-router-dom'

function AddApp() {
  return (
    <div>AddApp
        <Outlet/>
    </div>
  )
}

export default AddApp