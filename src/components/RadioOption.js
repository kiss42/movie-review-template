import './Option.css'
import React from 'react'
import { FormControlLabel, Radio, RadioGroup } from '@mui/material'
import PropTypes from 'prop-types'

function RadioOption({ category, handleSelectionChange }) {
	const isScore = category.title === 'Score'

	return (
		<div className={`radio-container${isScore ? ' score-row' : ''}`}>
			<h3 className="snug">
				{category.icon ? `${category.icon} ` : ''}
				{isScore ? `${category.title} / 10` : category.title}
			</h3>
			<RadioGroup
				name={category.title}
				onChange={handleSelectionChange}
				row={isScore}
			>
				{category.options.map(option => (
					<FormControlLabel
						key={option}
						label={option}
						value={option}
						control={<Radio color="primary" />}
					/>
				))}
			</RadioGroup>
		</div>
	)
}

RadioOption.propTypes = {
	category: PropTypes.object.isRequired,
	handleSelectionChange: PropTypes.func.isRequired
}

export default React.memo(RadioOption)
