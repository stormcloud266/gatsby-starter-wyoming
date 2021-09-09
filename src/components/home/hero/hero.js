import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Container, Title } from '@UI'
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
					placeholder='blurred'
				/>
			</div>
			<Title tag='h1' shadow className={styles.title}>
				Wyoming
			</Title>
		</Container>
	)
}

export default Hero
