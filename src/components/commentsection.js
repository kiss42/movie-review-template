import './Option.css'
import React from 'react'
import TextField from '@mui/material/TextField'
import { useWindowWidth } from '@react-hook/window-size'
import PropTypes from 'prop-types'

function CommentField(props) {
	const windowWidth = useWindowWidth()
	const [textValue, setTextValue] = React.useState('')
	const updateText = (event) => {
		setTextValue(event.target.value)
		sessionStorage.setItem(props.title, event.target.value)
	}

	return( 
		<div className="radio-container" style={{ width: windowWidth < 1000 ? '90%' : '40%' }}>
			<TextField value={textValue} onChange={updateText} />
			<h3 className="snug">{props.title}</h3>
		</div>
	)
}

CommentField.propTypes = {
	title: PropTypes.string.isRequired
}

export default CommentField