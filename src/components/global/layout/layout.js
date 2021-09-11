import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from '@global/header/header'
import Footer from '@global/footer/footer'
// import CookieBanner from '@global/cookieBanner'

import '@globalStyles/global.scss'

const Layout = ({ children }) => (
	<>
		<Helmet htmlAttributes={{ lang: 'en' }} />
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
