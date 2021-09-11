import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import * as styles from './icon.module.scss'

const Icon = ({ children, sm, className }) => {
	const classes = classnames(
		sm && styles.small,
		className && className,
		styles.icon
	)
	return (
		<span className={classes} aria-hidden='true'>
			{children}
		</span>
	)
}

export default Icon

Icon.propTypes = {
	sm: PropTypes.bool,
	className: PropTypes.string,
	children: PropTypes.node.isRequired,
}
