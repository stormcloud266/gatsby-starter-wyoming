import React from 'react'
import {
	Twitter,
	Facebook,
	LinkedIn,
	Instagram,
	Phone,
	Email,
	Pin,
} from '@images/icons'

const config = {
	title: `Gatsby Starter Wyoming`,
	description: `Gatsby starter with SCSS, web fonts, analytics. Built with small businesses in mind.`,
	author: `Tawnee`,
	creator: `@stormcloud266`, // Your Twitter handle
	siteUrl: `https://gatsby-starter-wyoming.netlify.app/`, // keep trailing slash
	webFonts: ['Sacramento', 'Kumbh Sans:400'],
	socialLinks: [
		{ url: 'https://www.twitter.com', icon: <Twitter /> },
		{ url: 'https://www.facebook.com', icon: <Facebook /> },
		{ url: 'https://www.linkedin.com', icon: <LinkedIn /> },
		{ url: 'https://www.instagram.com', icon: <Instagram /> },
	],
	analytics: {
		googleAnalyticsID: '',
		googleTagManagerID: '',
		facebookPixelID: '',
	},
	contact: [
		{ text: '(555) 123 - 4567', icon: <Phone /> },
		{ text: 'ex@mple.com', icon: <Email /> },
		{ text: '123 Street, City ST', icon: <Pin /> },
	],
	manifest: {
		short_name: `wyoming`,
		background_color: `#222021`,
		theme_color: `#222021`,
	},
	copyright: '2021',
}

export default config
