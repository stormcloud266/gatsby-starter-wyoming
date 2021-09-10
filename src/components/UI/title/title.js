import React from 'react'
import PropTypes from 'prop-types'
import { Fade } from 'react-awesome-reveal'
import classnames from 'classnames'
import * as styles from './title.module.scss'

const Title = ({ tag, children, shadow, center, margin, className }) => {
	const classes = classnames(
		styles.title,
		shadow && styles.shadow,
		center && styles.center,
		margin && styles.margin,
		className && className
	)

	let content

	switch (tag) {
		case 'h1':
			content = <h1 className={classes}>{children}</h1>
			break
		case 'h2':
			content = <h2 className={classes}>{children}</h2>
			break
		case 'h3':
			content = <h3 className={classes}>{children}</h3>
			break
		case 'h4':
			content = <h4 className={classes}>{children}</h4>
			break
		case 'h5':
			content = <h5 className={classes}>{children}</h5>
			break
		case 'h6':
			content = <h6 className={classes}>{children}</h6>
			break
		case 'p':
			content = <p className={classes}>{children}</p>
			break
		default:
			content = <h2 className={classes}>{children}</h2>
	}

	return (
		<Fade triggerOnce fraction={1} duration={600}>
			{content}
		</Fade>
	)
}

export default Title

Title.propTypes = {
	tag: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p']),
	className: PropTypes.string,
	shadow: PropTypes.bool,
	children: PropTypes.node.isRequired,
}
