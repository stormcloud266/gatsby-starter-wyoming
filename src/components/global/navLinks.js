import React from 'react'
import { Link } from 'gatsby'
import links from '@data/links'

const NavLinks = () => {
	return (
		<>
			{links.navLinks.map(({ text, to }, i) => (
				<Link to={to} key={i}>
					{text}
				</Link>
			))}
		</>
	)
}

export default NavLinks
