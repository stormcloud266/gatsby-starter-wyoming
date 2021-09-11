import React from 'react'
import { Fade } from 'react-awesome-reveal'
import NavLinks from '@global/navLinks'
import { Container, Flex, Icon } from '@UI'
import * as config from '@data/config'
import links from '@data/links'
import * as styles from './footer.module.scss'

const Footer = () => {
	return (
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
							<p className={styles.copyright}>
								Copyright &#169; {config.copyright}
							</p>
							<div className={styles.socialIcons}>
								{links.socialLinks.map(({ label, url, icon }) => (
									<a
										href={url}
										target='_blank'
										rel='noreferrer'
										key={url}
										aria-label={`Go to ${label}`}
									>
										<Icon sm>{icon}</Icon>
									</a>
								))}
							</div>
						</div>
						<nav className={styles.nav}>
							<NavLinks />
						</nav>
					</Flex>
				</Container>
			</Fade>
		</footer>
	)
}

export default Footer
