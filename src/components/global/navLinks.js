import React from 'react'
import { Link } from 'gatsby'
import config from '@config'

const NavLinks = () => {
	return (
		<>
			{config.navLinks.map(({ text, to }, i) => (
				<Link to={to} key={i}>
					{text}
				</Link>
			))}
		</>
	)
}

export default NavLinks
