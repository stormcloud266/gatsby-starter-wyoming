import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Fade } from 'react-awesome-reveal'
import { Container, Title, Flex, Button } from '@UI'
import * as styles from './textImage.module.scss'

const TextImage = () => {
	return (
		<Container section isSection bgAccent>
			<Fade triggerOnce fraction={0.3}>
				<Container wrapperSmOnMd>
					<Flex autoLayout collapseOnMd className={styles.flex}>
						<StaticImage
							src='../../../assets/images/sean-musil-wyoming.jpg'
							alt=''
							placeholder='blurred'
							layout='constrained'
							quality={100}
							width={700}
							className={styles.image}
						/>
						<Container textBlock>
							<Title>Welcome to the Wyoming Gatsby Starter</Title>
							<p>
								Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut,
								voluptate fuga. Nostrum illo quidem facilis, perferendis nemo
								provident omnis aliquid in! Quasi hic in repellendus praesentium
								unde reprehenderit eligendi cupiditate!
							</p>
							<Button to='/#contact'>Book Now</Button>
						</Container>
					</Flex>
				</Container>
			</Fade>
		</Container>
	)
}

export default TextImage
