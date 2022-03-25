import './Option.css'
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Checkbox as MaterialCheckbox, FormControlLabel } from '@material-ui/core'
import arrayRemove from '../utility/arrays-helper'

function Checkbox({option}) {
	const [isChecked, setIsChecked] = useState(false)

	const toggle = () => {
		option.isOn = !isChecked
		var saved = JSON.parse(sessionStorage.getItem(option.option) || '[]')

		if (!isChecked) {
			saved.push(option.title)
		} else {
			saved = arrayRemove(saved, option.title)
		}
		sessionStorage.setItem(option.option, JSON.stringify(saved))

		setIsChecked(!isChecked)
	}

	return (
		<FormControlLabel
			value={option.index}
			control={<MaterialCheckbox color="primary" onClick={toggle} />}
			label={option.title}
			labelPlacement="end"
			checked={isChecked}
		/>
	)
}

Checkbox.propTypes = {
	option: PropTypes.object.isRequired
}

export default Checkbox