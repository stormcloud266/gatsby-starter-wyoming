import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from '@global/header/header'
import Footer from '@global/footer/footer'
import SkipLink from '@global/skipLink/skipLink'
// import CookieBanner from '@global/cookieBanner'

import '@globalStyles/global.scss'

const Layout = ({ children }) => {
	const mainRef = useRef()

	return (
		<>
			<SkipLink main={mainRef} />
			<Helmet htmlAttributes={{ lang: 'en' }} />
			<Header />
			<main role='main' id='main' tabIndex='-1' ref={mainRef}>
				{children}
			</main>
			<Footer />

			{/* uncomment this component to enable cookie consent banner for GDPR compliant tracking */}
			{/* <CookieBanner /> */}
		</>
	)
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout
