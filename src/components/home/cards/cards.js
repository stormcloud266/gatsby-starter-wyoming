import React from 'react'
import { Card, Container, Flex, Title } from '@UI'
import { Alarm, Pin, Battery } from '@images/icons'
import * as styles from './cards.module.scss'

const Cards = () => {
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
				<Title center margin>
					A Little Bit of Everything
				</Title>
				<Flex autoLayout collapseOnMd>
					{cards.map(({ title, text, icon }) => (
						<Card title={title} text={text} icon={icon} key={title} />
					))}
				</Flex>
			</Container>
		</Container>
	)
}

export default Cards
