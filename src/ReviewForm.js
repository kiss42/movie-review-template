import './reviewForm.css'
import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import { Button } from '@material-ui/core'
import CheckboxOption from './components/CheckboxOption'
import RadioOption from './components/RadioOption'
import TextInput from './components/TextInput'
import generateReview from './utility/generateReview'

function initializeReview(categories){
	const initialReview = {}
	categories.forEach(category => { category.type === 'check' ?  initialReview[category.title] = [] :  initialReview[category.title] = '' })
	return initialReview
}

export function ReviewForm({ categories }) {
	const [reviewResult, setReviewResult] = useState('')
	const [reviewSelections, setReviewSelections] = useState()

	useEffect(() => {
		const emptyReview = initializeReview(categories)
		setReviewSelections(emptyReview)
	}, [])

	const handleGenerateReview = () => {
		setReviewResult(generateReview(reviewSelections))
	}

	const handleSelectionChange = (event) => {
		setReviewSelections({
			...reviewSelections,
			[event.target.name]: event.target.value
		})
	}

	const handleMultiSelectionChange = (event) => {
		let newSelections
		if (event.target.checked) {
			newSelections = [...reviewSelections[event.target.name], event.target.value]
		}
		else {
			newSelections = reviewSelections[event.target.name].filter(selection => selection !== event.target.value)
		}

		setReviewSelections({
			...reviewSelections,
			[event.target.name]: newSelections
		})
	}

	return (
		<div className="categories-container">
			{console.log(reviewSelections)}
			<div className="centered">
				<div>
					<TextInput title="Movie/Series Name" handleSelectionChange={handleSelectionChange} />
					{categories.map((category, index) => (
						category.type === 'radio' ?
							<RadioOption key={index} category={category} handleSelectionChange={handleSelectionChange} /> :
							<CheckboxOption key={index} category={category} handleSelectionChange={handleMultiSelectionChange} />
					))}
					<TextInput title="Comments" handleSelectionChange={handleSelectionChange} />
				</div>
			</div>
			<div className="button-centered">
				<Button variant="contained" color="primary" onClick={handleGenerateReview}>
					Generate Review
				</Button>
				{reviewResult && <p className="review">{reviewResult}</p>}
			</div>
		</div>
	)
}

ReviewForm.propTypes = {
	categories: PropTypes.arrayOf(PropTypes.object)
}

export default ReviewForm
