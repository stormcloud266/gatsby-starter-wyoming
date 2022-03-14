import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Fade } from 'react-awesome-reveal'
import { Button, Container, Title } from '@UI'
import * as styles from './hero.module.scss'

const Hero = ({ title, linkText, linkUrl }) => {
	return (
		<Container className={styles.container}>
			<div className={styles.background}>
				<StaticImage
					src='../../../assets/images/hero.jpg'
					alt=''
					placeholder='blurred'
					layout='fullWidth'
					quality={100}
					objectFit='cover'
					objectPosition='center center'
					style={{ position: 'static' }}
				/>
			</div>

			<Container wrapper textCenter textBlock>
				<Title tag='h1' shadow center fade className={styles.title}>
					{title}
				</Title>
				<Fade triggerOnce delay={300}>
					<Button to={linkUrl}>{linkText}</Button>
				</Fade>
			</Container>
		</Container>
	)
}

export default Hero
