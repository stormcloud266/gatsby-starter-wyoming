import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { Icon } from '@UI'
import * as styles from './card.module.scss'

const Card = ({ className, title, text, icon }) => {
	const classes = classnames(className && className, styles.card)

	return (
		<div className={classes}>
			<Icon>{icon}</Icon>
			<div className={styles.textContainer}>
				<h3 className={styles.title}>{title}</h3>
				<p className={styles.text}>{text}</p>
			</div>
		</div>
	)
}

export default Card

Card.propTypes = {
	title: PropTypes.string,
	text: PropTypes.string,
	icon: PropTypes.node,
	className: PropTypes.string,
}
