import React from 'react'
import Form from '@global/form/form'
import { Fade } from 'react-awesome-reveal'
import { Container, Flex, Title, Icon } from '@UI'
import { Phone, Email, Pin } from '@images/icons'
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
						<Flex className={styles.iconContainer}>
							<Icon>
								<Phone />
							</Icon>
							<p>(555) 123 - 4567</p>
						</Flex>
						<Flex className={styles.iconContainer}>
							<Icon>
								<Email />
							</Icon>
							<p>ex@mple.com</p>
						</Flex>
						<Flex className={styles.iconContainer}>
							<Icon>
								<Pin />
							</Icon>
							<p>123 Street, City ST</p>
						</Flex>
					</div>
					<Form name='contact' />
				</Flex>
			</Fade>
		</Container>
	)
}

export default Contact
