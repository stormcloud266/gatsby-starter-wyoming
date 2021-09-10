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
					objectPosition='center center'
					style={{ position: 'static' }}
				/>
			</div>

			<Container wrapper>
				<Title tag='h1' shadow center fade className={styles.title}>
					Gatsby Starter Wyoming
				</Title>
			</Container>
		</Container>
	)
}

export default Hero
