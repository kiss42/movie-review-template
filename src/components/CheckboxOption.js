import './Option.css'
import React from 'react'
import PropTypes from 'prop-types'
import { Checkbox, FormControlLabel } from '@mui/material'

function CheckboxOption({ category, handleSelectionChange }) {
	return (
		<div className="radio-container">
			<h3 className="snug">{category.icon ? `${category.icon} ` : ''}{category.title}</h3>
			{category.options.map((option) => (
				<FormControlLabel
					key={option}
					name={category.title}
					value={option}
					control={<Checkbox color="primary" />}
					label={option}
					labelPlacement="end"
					onChange={handleSelectionChange}
				/>
			))}
		</div>
	)
}

CheckboxOption.propTypes = {
	category: PropTypes.object.isRequired,
	handleSelectionChange: PropTypes.func.isRequired
}

export default React.memo(CheckboxOption)
