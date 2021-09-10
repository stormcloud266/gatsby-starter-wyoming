import React from 'react'
import { Fade } from 'react-awesome-reveal'
import Layout from '@global/layout/layout'
import Seo from '@global/seo'
import { Container, Title, Flex, Button } from '@UI'
import image from '@images/map-undraw.svg'

const ErrorPage = () => (
	<Layout>
		<Seo title='Success!' />

		<Container
			section
			isSection
			wrapper
			textCenter
			style={{
				minHeight: '56rem',
				maxWidth: '80rem',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				marginTop: '7rem',
			}}
		>
			<Flex autoLayout style={{ alignItems: 'center' }}>
				<Fade triggerOnce>
					<img src={image} alt='' style={{ maxWidth: '28rem' }} />
				</Fade>
				<div>
					<Title tag='h1' fade shadow style={{ marginBottom: '1.4rem' }}>
						Page Not Found
					</Title>
					<p>The page you are looking for does not exist.</p>
					<Button to='/' style={{ marginTop: '2rem' }}>
						Return Home
					</Button>
				</div>
			</Flex>
		</Container>
	</Layout>
)

export default ErrorPage
