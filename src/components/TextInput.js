import './Option.css'
import React from 'react'
import { TextField } from '@material-ui/core'
import PropTypes from 'prop-types'

function TextInput({title, handleSelectionChange, multiline}) {


	return (
		<div className="radio-container">
			<h3 className="snug">{title}</h3>
			<TextField name={title} multiline={multiline} onChange={handleSelectionChange} />
		</div>
	)
}

TextInput.propTypes = {
	title: PropTypes.string.isRequired,
	handleSelectionChange: PropTypes.func.isRequired,
	multiline: PropTypes.bool
}

export default TextInput