import React from 'react'
import Form from '@global/form/form'
import { Fade } from 'react-awesome-reveal'
import { Container, Flex, Title, Icon } from '@UI'
import config from '@config'
import * as styles from './contact.module.scss'

const Contact = () => {
	return (
		<Container wrapperSmOnMd section isSection id='contact'>
			<Fade triggerOnce fraction={0.2}>
				<Flex autoLayout collapseOnMd>
					<div>
						<Container textBlock>
							<Title>We'll Meet You There</Title>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eos
								doloribus labore laborum accusamus dolor natus aliquid quis
								quidem aperiam?
							</p>
						</Container>
						{config.contact.map(({ text, icon }) => (
							<Flex className={styles.iconContainer} key={text}>
								<Icon>{icon}</Icon>
								<p>{text}</p>
							</Flex>
						))}
					</div>
					<Form name='contact' />
				</Flex>
			</Fade>
		</Container>
	)
}

export default Contact
