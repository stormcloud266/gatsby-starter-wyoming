import React from 'react'
import { Link } from 'gatsby'
import { Container, Title } from '@UI'
import * as styles from './intro.module.scss'

const Intro = () => {
	return (
		<Container section isSection wrapperSm textBlock textCenter>
			<Title>Welcome to the Wyoming Gatsby Starter</Title>
			<p>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut, voluptate
				fuga. Nostrum illo quidem facilis, perferendis nemo provident omnis
				aliquid in! Quasi hic in repellendus praesentium unde reprehenderit
				eligendi cupiditate!
			</p>
			<Link to='/#contact'>Start Your Adventure</Link>
		</Container>
	)
}

export default Intro
