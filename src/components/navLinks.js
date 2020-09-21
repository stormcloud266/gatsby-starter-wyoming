import React from "react"
import { Link } from "gatsby"

const NavLinks = ({ specialClass }) => (
  <ul className={specialClass}>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/page-2">Page Two</Link>
    </li>
    <li>
      <Link to="/">Example</Link>
    </li>
    <li>
      <Link to="/">Example</Link>
    </li>
    <li>
      <Link to="/">Example</Link>
    </li>
  </ul>
)

export default NavLinks