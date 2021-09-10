import React from 'react'
import { Button } from '@UI'
import * as styles from './form.module.scss'

const Form = ({ name }) => {
	return (
		<form
			name={name}
			className={styles.form}
			method='post'
			data-netlify='true'
			data-netlify-honeypot='bot-field'
			action='/success'
		>
			<input type='hidden' name='bot-field' />
			<input type='hidden' name='form-name' value={name} />

			<div className={styles.section}>
				<input type='text' id='name' name='name' className={styles.input} />
				<label htmlFor='name' className={styles.label}>
					Name
				</label>
			</div>

			<div className={styles.section}>
				<input
					type='email'
					id='email'
					name='email'
					required
					className={styles.input}
				/>
				<label htmlFor='email' className={styles.label}>
					Email
				</label>
			</div>

			<div className={styles.section}>
				<textarea
					name='comment'
					id='comment'
					required
					className={styles.textarea}
				/>
				<label htmlFor='comment' className={styles.label}>
					Comment
				</label>
			</div>

			<Button type='submit' name='submit'>
				Send Email
			</Button>
		</form>
	)
}

export default Form
