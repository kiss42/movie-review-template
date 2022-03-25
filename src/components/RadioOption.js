import './Option.css'
import React from 'react'
import { FormControlLabel, Radio, RadioGroup } from '@material-ui/core'
import { useWindowWidth } from '@react-hook/window-size'
import PropTypes from 'prop-types'


export default function RadioOption({category}) {
	const windowWidth = useWindowWidth()
	category.selectedState = ''

	const radioClicked = (event) => {
		category.selectedState = event.target.value
		sessionStorage.setItem(category.title, event.target.value)
	}


	return (
		<div className="radio-container" style={{ width: (windowWidth < 1000 ? '90%' : '40%') }}>
			<h3 className="snug">{category.title}</h3>
			<RadioGroup onChange={radioClicked}>
				{category.options.map(option => (
					<FormControlLabel key={option} value={option} control={<Radio color="primary" />} label={option} />
				))}
			</RadioGroup>
		</div>
	)
}

RadioOption.propTypes = {
	category: PropTypes.object
}

