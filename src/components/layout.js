import React from "react"
import PropTypes from "prop-types"
import CookieConsent from 'react-cookie-consent'

import Header from "./header"
import Footer from "./footer"

import "../styles/styles.scss"

const Layout = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />

    <CookieConsent
      location="bottom"
      buttonText="Accept"
      declineButtonText="Decline"
      enableDeclineButton

      // uncomment to show cookie banner even after being accepted
      // debug

      cookieName="gatsby-gdpr-google-analytics"
      // setting two cookies on one click
      // onAccept={() => {
      //   Cookies.set("gatsby-gdpr-google-analytics")
      //   Cookies.set("gatsby-gdpr-facebook-pixel")
      // }}

      buttonStyle={{
        backgroundColor: "#141B24",
        color: "#dbd9da",
        textShadow: "none",
        fontSize:"1.4rem",
        borderRadius: "2px"
      }}
      declineButtonStyle={{
        backgroundColor: "transparent",
        color: "#1f1d1e",
        textShadow: "none",
        fontSize:"1.4rem",
      }}
      style={{
        background: "$color-orange",
        textShadow: "none",
        color: "#1f1d1e",
        fontSize:"1.5rem",
      }}
    >
      This website uses cookies to enhance the user experience.
    </CookieConsent>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
