import React, { useEffect, useState } from 'react'
import { Fade } from 'react-awesome-reveal'
import { Card, Container, Flex, Title } from '@UI'
import * as styles from './cards.module.scss'

const Cards = ({ cardsTitle, cards }) => {
	const [windowWidth, setWindowWidth] = useState()

	const handleResize = () => {
		setWindowWidth(window.innerWidth)
	}

	useEffect(() => {
		handleResize()
		window.addEventListener('resize', handleResize)
		return () => window.removeEventListener('resize', handleResize)
	}, [])

	return (
		<Container bgAccent section isSection>
			<Container wrapperSmOnMd>
				<Title center margin fade>
					{cardsTitle}
				</Title>
				<Flex autoLayout collapseOnMd>
					{cards.map(({ title, text, icon }, i) => (
						<Fade
							triggerOnce
							delay={windowWidth > 900 ? 300 * i : 0}
							key={title}
							fraction={0.3}
						>
							<Card
								title={title}
								text={text}
								icon={icon}
								className={styles.card}
							/>
						</Fade>
					))}
				</Flex>
			</Container>
		</Container>
	)
}

export default Cards
