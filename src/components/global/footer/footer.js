import React from 'react'
import { Fade } from 'react-awesome-reveal'
import NavLinks from '@global/navLinks'
import { Container, Flex } from '@UI'
import * as styles from './footer.module.scss'

const Footer = () => (
	<footer className={styles.footer}>
		<Fade triggerOnce>
			<Container wrapper>
				<Flex collapseOnMd className={styles.flex}>
					<div className={styles.textContainer}>
						<p className={styles.logo}>Logo</p>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. In
							obcaecati vitae consectetur.
						</p>
					</div>
					<nav className={styles.nav}>
						<NavLinks />
					</nav>
				</Flex>
			</Container>
		</Fade>
	</footer>
)

export default Footer
