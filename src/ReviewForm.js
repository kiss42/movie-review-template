import './reviewForm.css'
import React, { useCallback, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Button } from '@mui/material'
import CheckboxOption from './components/CheckboxOption'
import MoviePosterCard from './components/MoviePosterCard'
import MovieSearch from './components/MovieSearch'
import RadioOption from './components/RadioOption'
import TextInput from './components/TextInput'
import generateReview from './utility/generateReview'

const LOADING_MESSAGES = [
	'Generating...',
	'Consulting the popcorn oracle...',
	'Counting plot holes...',
	'Bribing the film critics...',
	'Polishing your hot take...'
]

const COMMENTS_PLACEHOLDER = 'What the Dog Doing? Any thoughts the rating scales above couldn\'t capture...'

function initializeReview(categories) {
	const initialReview = {}
	categories.forEach(category => {
		initialReview[category.title] = category.type === 'check' ? [] : ''
	})
	initialReview['Movie/Series Name'] = ''
	initialReview['Comments'] = ''
	return initialReview
}

export function ReviewForm({ categories }) {
	const [reviewResult, setReviewResult] = useState('')
	const [reviewSelections, setReviewSelections] = useState(() => initializeReview(categories))
	const [loading, setLoading] = useState(false)
	const [loadingMessage, setLoadingMessage] = useState(LOADING_MESSAGES[0])
	const [selectedMovie, setSelectedMovie] = useState(null)

	useEffect(() => {
		setReviewSelections(initializeReview(categories))
	}, [categories])

	const handleGenerateReview = async () => {
		setLoading(true)
		setLoadingMessage(LOADING_MESSAGES[Math.floor(Math.random() * LOADING_MESSAGES.length)])
		const result = await generateReview(reviewSelections)
		setReviewResult(result)
		setLoading(false)
	}

	const handleReset = () => {
		setReviewSelections(initializeReview(categories))
		setReviewResult('')
		setSelectedMovie(null)
	}

	const handleMovieNameChange = useCallback((newValue) => {
		setReviewSelections(prev => ({
			...prev,
			'Movie/Series Name': newValue
		}))
	}, [])

	const handleSelectionChange = useCallback((event) => {
		setReviewSelections(prev => ({
			...prev,
			[event.target.name]: event.target.value
		}))
	}, [])

	const handleMultiSelectionChange = useCallback((event) => {
		setReviewSelections(prev => {
			const current = prev[event.target.name] || []
			const newSelections = event.target.checked
				? [...current, event.target.value]
				: current.filter(s => s !== event.target.value)
			return { ...prev, [event.target.name]: newSelections }
		})
	}, [])

	return (
		<div className="categories-container">
			<div className="form-wrapper">
				<MovieSearch
					value={reviewSelections['Movie/Series Name'] || ''}
					onTextChange={handleMovieNameChange}
					onMovieSelect={setSelectedMovie}
				/>
				{selectedMovie && <MoviePosterCard movie={selectedMovie} />}
				{categories.map((category) => (
					category.type === 'radio'
						? <RadioOption key={category.title} category={category} handleSelectionChange={handleSelectionChange} />
						: <CheckboxOption key={category.title} category={category} handleSelectionChange={handleMultiSelectionChange} />
				))}
				<TextInput
					title="Comments"
					icon="💬"
					handleSelectionChange={handleSelectionChange}
					multiline
					value={reviewSelections['Comments'] || ''}
					placeholder={COMMENTS_PLACEHOLDER}
				/>
			</div>
			<div className="button-centered">
				<div className="button-group">
					<Button
						variant="contained"
						onClick={handleGenerateReview}
						disabled={loading}
						sx={{
							background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
							color: '#fff',
							fontWeight: 700,
							padding: '12px 28px',
							fontSize: 15,
							borderRadius: '10px',
							textTransform: 'none',
							boxShadow: '0 4px 20px rgba(99, 102, 241, 0.35)',
							transition: 'all 0.2s ease',
							'&:hover': {
								background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
								transform: 'translateY(-1px)',
								boxShadow: '0 6px 28px rgba(99, 102, 241, 0.5)'
							}
						}}
					>
						{loading ? loadingMessage : '📋 Generate & Copy Review'}
					</Button>
					<Button
						variant="outlined"
						onClick={handleReset}
						sx={{
							color: '#94a3b8',
							borderColor: '#334155',
							borderRadius: '10px',
							textTransform: 'none',
							fontSize: 14,
							padding: '12px 20px',
							transition: 'all 0.2s ease',
							'&:hover': {
								borderColor: '#64748b',
								background: 'rgba(255,255,255,0.04)'
							}
						}}
					>
						Reset
					</Button>
				</div>
				{reviewResult && <p className="review">{reviewResult}</p>}
			</div>
		</div>
	)
}

ReviewForm.propTypes = {
	categories: PropTypes.arrayOf(PropTypes.object)
}

export default ReviewForm
