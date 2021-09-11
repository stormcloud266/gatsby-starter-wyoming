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

const links = {
	socialLinks: [
		{
			label: 'Twitter',
			url: 'https://www.twitter.com',
			icon: <Twitter />,
		},
		{
			label: 'Facebook',
			url: 'https://www.facebook.com',
			icon: <Facebook />,
		},
		{
			label: 'LinkedIn',
			url: 'https://www.linkedin.com',
			icon: <LinkedIn />,
		},
		{
			label: 'Instagram',
			url: 'https://www.instagram.com',
			icon: <Instagram />,
		},
	],
	contact: [
		{
			text: '(555) 123 - 4567',
			url: 'tel:(555) 123 - 4567',
			icon: <Phone />,
		},
		{
			text: 'ex@mple.com',
			url: 'mailto:ex@mple.com',
			icon: <Email />,
		},
		{
			text: '123 Street, City ST',
			url: 'https://www.google.com/maps/place/Kailua-Kona,+HI/@19.6643179,-156.0255674,12z/data=!3m1!4b1!4m13!1m7!3m6!1s0x7bffdb064f79e005:0x4b7782d274cc8628!2sHawaii!3b1!8m2!3d19.8967662!4d-155.5827818!3m4!1s0x79540eb26a91b401:0x7911d83882da5a7!8m2!3d19.6400008!4d-155.9976196',
			icon: <Pin />,
			openInNewTab: true,
		},
	],
	navLinks: [
		{ text: 'Home', to: '/' },
		{ text: 'About', to: '/#about' },
		{ text: 'Wild West', to: '/#west' },
		{ text: 'Adventure', to: '/#adventure' },
		{ text: 'Contact', to: '/#contact' },
	],
}

export default links
