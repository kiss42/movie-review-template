import './reviewForm.css'
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import CheckboxOption from './components/CheckboxOption'
import RadioOption from './components/RadioOption'
import TextInput from './components/TextInput'
import { Button } from '@material-ui/core'
import CommentField from './components/CommentSection'
import generateReview from './utility/generateReview'

export function ReviewForm({ categories }) {
	const [reviewInfo, setReviewInfo] = useState('')

	return (
		<div className="categories-container">
			<div className="centered">
				<div>
					<TextInput title="Movie/Tv Show Name" />
					{categories.map((category, index) => (
						category.type === 'radio' ?
							<RadioOption key={index} category={category} /> :
							<CheckboxOption key={index} category={category} />
					))}
					<CommentField title="Comment Section" />
				</div>
			</div>
			<div className="button-centered">
				<Button variant="contained" color="primary" onClick={() => generateReview(setReviewInfo, categories)}>
					Generate Review
				</Button>
				{reviewInfo !== '' && <p className="review">{reviewInfo}</p>}
			</div>
		</div>
	)
}

ReviewForm.propTypes = {
	categories: PropTypes.arrayOf(PropTypes.object)
}

export default ReviewForm
