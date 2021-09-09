import React from 'react'
import { Link } from 'gatsby'

const NavLinks = () => {
	const links = [
		{
			title: 'Home',
			to: '/',
		},
		{
			title: 'About',
			to: '/#about',
		},
		{
			title: 'Wild West',
			to: '/#west',
		},
		{
			title: 'Adventure',
			to: '/#adventure',
		},
		{
			title: 'Contact',
			to: '/#contact',
		},
	]
	return (
		<>
			{links.map(({ title, to }) => (
				<Link to={to} key={to}>
					{title}
				</Link>
			))}
		</>
	)
}

export default NavLinks
