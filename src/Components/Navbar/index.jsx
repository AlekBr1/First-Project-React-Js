import React from 'react'
import { NavbarBorder, Menu, Button, ImageLogo, ConteinerLogo } from "./styles"
import { useNavigate } from 'react-router-dom'
import logo from "../../Images/logo.png"

const Navbar = () => {
  const Navigate = useNavigate()

  return (
    <NavbarBorder>
      <ConteinerLogo>
        <ImageLogo alt="Logo React" src={logo} />
      </ConteinerLogo>
      <Menu>
        <Button onClick={() => Navigate("/")}>Home</Button>
        <Button onClick={() => Navigate("/store")}>Store</Button>
        <Button onClick={() => Navigate("/service")}>Service</Button>
      </Menu>
    </NavbarBorder>
  )
}


export default Navbar