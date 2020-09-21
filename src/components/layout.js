import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import Footer from "./footer"
// import CookieBanner from "./cookieBanner"

import "../assets/styles/styles.scss"

const Layout = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />

    {/* uncomment this component to enable cookie consent banner for GDPR compliant tracking */}
    {/* <CookieBanner /> */}
    
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
