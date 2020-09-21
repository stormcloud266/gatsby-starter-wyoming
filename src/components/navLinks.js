import React from "react"
import { Link } from "gatsby"

const NavLinks = ({ specialClass }) => (
  <ul className={specialClass}>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/#about">About</Link>
    </li>
    <li>
      <Link to="/#west">Wild West</Link>
    </li>
    <li>
      <Link to="/#adventure">Adventure</Link>
    </li>
    <li>
      <Link to="/#contact">Contact</Link>
    </li>
  </ul>
)

export default NavLinks