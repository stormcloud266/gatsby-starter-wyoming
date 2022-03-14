import React from 'react'
import { Link } from 'gatsby'
import { Fade } from 'react-awesome-reveal'
import { Container, Title } from '@UI'
// import * as styles from './intro.module.scss'

const Intro = ({ title, body, linkText, linkUrl }) => {
	return (
		<Fade triggerOnce fraction={0.5} id='about'>
			<Container section isSection wrapperSm textBlock textCenter id='about'>
				<Title>{title}</Title>
				<p>{body}</p>
				<Link to={linkUrl}>{linkText}</Link>
			</Container>
		</Fade>
	)
}

export default Intro
