import React from 'react'
import NavLinks from '@global/navLinks'
import { Container, Flex } from '@UI'
import * as styles from './footer.module.scss'

const Footer = () => (
	<footer className={styles.footer}>
		<Container wrapper section>
			<Flex autoLayout collapseOnMd className={styles.flex}>
				<div>
					<p className={styles.logo}>Logo</p>
					<p className={styles.body}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. In
						obcaecati vitae consectetur.
					</p>
				</div>
				<nav className={styles.nav}>
					<NavLinks />
				</nav>
			</Flex>
		</Container>
	</footer>
)

export default Footer
