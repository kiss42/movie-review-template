import './Option.css'
import React from 'react'
import Checkbox from './Checkbox'
import { useWindowWidth } from '@react-hook/window-size'
import PropTypes from 'prop-types'

function CheckboxOption({category}) {
	const windowWidth = useWindowWidth()

	return (
		<div className="radio-container" style={{ width: (windowWidth < 1000 ? '90%' : '40%') }}>
			<h3 className="snug">{category.title}</h3>
			{category.options.map((option, index) => (
				<Checkbox key={option} option={{ title: option, index: index, category: category.title }} />
			))}
		</div>
	)

}

CheckboxOption.propTypes = {
	category: PropTypes.object.isRequired
}

export default CheckboxOption

