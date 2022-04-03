import './Option.css'
import React from 'react'
import PropTypes from 'prop-types'
import {Checkbox, FormControlLabel} from '@material-ui/core'

function CheckboxOption({category, handleSelectionChange}) {
	let selectedOptions = React.useState(category.options.map(option => ({[option]: false})))

	const handleChange = (event) => {
		selectedOptions = selectedOptions.map(option => {
			if (option[event.target.name]) {
				return {
					[event.target.name]: event.target.checked
				}
			}})

		handleSelectionChange(event)
	}

	return (
		<div className="radio-container">
			<h3 className="snug">{category.title}</h3>
			{category.options.map((option) => (
				<FormControlLabel
					key={option}
					name={category.title}
					value={option}
					control={<Checkbox color="primary" onClick={handleChange} />}
					label={option}
					labelPlacement="end"
				/>
			))}
		</div>
	)
}

CheckboxOption.propTypes = {
	category: PropTypes.object.isRequired,
	handleSelectionChange: PropTypes.func.isRequired
}

export default CheckboxOption

