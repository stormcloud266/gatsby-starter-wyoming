import React from 'react'
import CookieConsent, { Cookies } from 'react-cookie-consent'

const CookieBanner = () => (
	<CookieConsent
		location='bottom'
		buttonText='Accept'
		declineButtonText='Decline'
		enableDeclineButton
		// uncomment to show cookie banner even after being accepted
		// debug
		cookieName='gatsby-gdpr-google-analytics'
		// setting two cookies on one click
		onAccept={() => {
			Cookies.set('gatsby-gdpr-google-analytics')
			Cookies.set('gatsby-gdpr-facebook-pixel')
		}}
		buttonStyle={{
			backgroundColor: '#e98976',
			color: '#dbd9da',
			textShadow: 'none',
			fontSize: '1.4rem',
			borderRadius: '2px',
		}}
		declineButtonStyle={{
			backgroundColor: 'transparent',
			color: '#c1bcbe',
			textShadow: 'none',
			fontSize: '1.4rem',
		}}
		style={{
			background: '#272526',
			textShadow: 'none',
			color: '#c1bcbe',
			fontSize: '1.5rem',
		}}
	>
		This website uses cookies to enhance the user experience.
	</CookieConsent>
)

export default CookieBanner
