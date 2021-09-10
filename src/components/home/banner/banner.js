import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Container, Title } from '@UI'
import * as styles from './banner.module.scss'

const Banner = () => {
	return (
		<Container
			section
			isSection
			textCenter
			className={styles.container}
			id='adventure'
			bgDark
		>
			<div className={styles.background}>
				<StaticImage
					src='../../../assets/images/trevor-vannoy-wyoming.jpg'
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
				<Title center shadow fade>
					Your Next Adventure Starts Here
				</Title>
			</Container>
		</Container>
	)
}

export default Banner
