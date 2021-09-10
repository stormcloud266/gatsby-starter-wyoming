import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import * as styles from './icon.module.scss'

const Icon = ({ children, className }) => {
	const classes = classnames(className && className, styles.icon)
	return <div className={classes}>{children}</div>
}

export default Icon

Icon.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node.isRequired,
}
