import React, { useState } from "react"
import { Link } from "gatsby"
import NavLinks from "@components/navLinks"
import { Hamburger, Times } from "@assets/icons"

const Header = () => {
  const [isOpen, toggleNav] = useState(false)

  return (
    <header className="header">
      <div className="wrapper header__nav-container">
        <Link to="/" className="header__logo">
          <p>Logo</p>
        </Link>

        <button
          id="nav-toggle"
          onClick={() => toggleNav(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className={!isOpen ? "show" : ""} aria-hidden="true">
            <Hamburger />
          </span>

          <span className={isOpen ? "show" : ""} aria-hidden="true">
            <Times />
          </span>
        </button>

        <nav className={isOpen ? "header__nav open" : "header__nav"}>
          <NavLinks specialClass="header__nav-list" />
        </nav>
      </div>
    </header>
  )
}

export default Header
