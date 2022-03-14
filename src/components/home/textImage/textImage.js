import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Fade } from 'react-awesome-reveal'
import { Container, Title, Flex, Button } from '@UI'
import * as styles from './textImage.module.scss'

const TextImage = ({ title, body, linkText, linkUrl }) => {
	return (
		<Container section isSection bgAccent id='west'>
			<Fade triggerOnce fraction={0.3}>
				<Container wrapperSmOnMd>
					<Flex autoLayout collapseOnMd className={styles.flex}>
						<StaticImage
							src='../../../assets/images/sean-musil-wyoming.jpg'
							alt='large lake surrounded by trees at sunset.'
							placeholder='blurred'
							layout='constrained'
							quality={100}
							width={700}
							className={styles.image}
						/>
						<Container textBlock className={styles.textBlock}>
							<Title>{title}</Title>
							<p>{body}</p>
							<Button to={linkUrl}>{linkText}</Button>
						</Container>
					</Flex>
				</Container>
			</Fade>
		</Container>
	)
}

export default TextImage
