import './Option.css'
import React from 'react'
import { FormControlLabel, Radio, RadioGroup } from '@material-ui/core'
import PropTypes from 'prop-types'


export default function RadioOption({category, handleSelectionChange}) {
	return (
		<div className="radio-container" >
			<h3 className="snug">{category.title}</h3>
			<RadioGroup name={category.title} onChange={handleSelectionChange}>
				{category.options.map(option => (
					<FormControlLabel key={option} label={option}  value={option} control={<Radio color="primary" />}/>
				))}
			</RadioGroup>
		</div>
	)
}

RadioOption.propTypes = {
	category: PropTypes.object.isRequired,
	handleSelectionChange: PropTypes.func.isRequired
}

