import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout1 = () => {
  return (
    <div>
        layout1 header
        <Outlet/>
        layout1 footer
    </div>
  )
}

export default Layout1