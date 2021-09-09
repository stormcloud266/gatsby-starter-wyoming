import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Fade } from 'react-awesome-reveal'
import { Container, Title, Button } from '@UI'
import * as styles from './hero.module.scss'

const Hero = () => {
	return (
		<Container className={styles.container}>
			<div className={styles.background}>
				<StaticImage
					src='../../../assets/images/dan-meyers-wyoming.jpg'
					alt=''
					placeholder='blurred'
					layout='fullWidth'
					quality={100}
					objectFit='cover'
					objectPosition='center bottom'
					style={{ position: 'static' }}
				/>
			</div>
			<div className={styles.content}>
				<Title tag='h1' shadow className={styles.title}>
					Wyoming
				</Title>
				<Fade triggerOnce duration={500} delay={500}>
					<Button cta to='/#contact'>
						Contact Us Today
					</Button>
				</Fade>
			</div>
		</Container>
	)
}

export default Hero
