import './Option.css'
import React from 'react'
import { TextField } from '@mui/material'
import PropTypes from 'prop-types'

function TextInput({ title, icon, handleSelectionChange, multiline, value, placeholder }) {
	return (
		<div className="radio-container">
			<h3 className="snug">{icon ? `${icon} ` : ''}{title}</h3>
			<TextField
				name={title}
				multiline={multiline}
				rows={multiline ? 4 : 1}
				onChange={handleSelectionChange}
				value={value || ''}
				placeholder={placeholder}
				variant="outlined"
				fullWidth
				size="small"
			/>
		</div>
	)
}

TextInput.propTypes = {
	title: PropTypes.string.isRequired,
	icon: PropTypes.string,
	handleSelectionChange: PropTypes.func.isRequired,
	multiline: PropTypes.bool,
	value: PropTypes.string,
	placeholder: PropTypes.string
}

export default React.memo(TextInput)
