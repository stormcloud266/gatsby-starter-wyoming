import React, { useEffect, useState } from 'react'
import { Fade } from 'react-awesome-reveal'
import { Card, Container, Flex, Title } from '@UI'
import { Alarm, Pin, Battery } from '@images/icons'
import * as styles from './cards.module.scss'

const Cards = () => {
	const [windowWidth, setWindowWidth] = useState()

	const handleResize = () => {
		setWindowWidth(window.innerWidth)
	}

	useEffect(() => {
		handleResize()
		window.addEventListener('resize', handleResize)
		return () => window.removeEventListener('resize', handleResize)
	}, [])

	const cards = [
		{
			title: 'Wake Up with the Sun',
			text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae facere mollitia repellat quam, quis blanditiis.',
			icon: <Alarm />,
		},
		{
			title: 'Explore Wide Open Spaces',
			text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae facere mollitia repellat quam, quis blanditiis.',
			icon: <Pin />,
		},
		{
			title: 'Recharge Your Mental Batterie',
			text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae facere mollitia repellat quam, quis blanditiis.',
			icon: <Battery />,
		},
	]
	return (
		<Container bgAccent section isSection>
			<Container wrapperSmOnMd>
				<Title center margin fade>
					A Little Bit of Everything
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
