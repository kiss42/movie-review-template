import './Option.css'
import './MovieSearch.css'
import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { Autocomplete, CircularProgress, TextField } from '@mui/material'
import { getPosterUrl, getTitle, getYear, searchTitles } from '../utility/tmdb'

function MovieSearch({ value, onTextChange, onMovieSelect }) {
	const [options, setOptions] = useState([])
	const [loading, setLoading] = useState(false)
	const debounceRef = useRef(null)

	useEffect(() => {
		if (!value.trim()) {
			setOptions([])
			return
		}

		const controller = new AbortController()

		clearTimeout(debounceRef.current)
		debounceRef.current = setTimeout(async () => {
			setLoading(true)
			try {
				const results = await searchTitles(value, controller.signal)
				setOptions(results)
			} catch (err) {
				if (err.name !== 'AbortError') {
					console.error('TMDB search failed:', err)
				}
			} finally {
				setLoading(false)
			}
		}, 400)

		return () => {
			clearTimeout(debounceRef.current)
			controller.abort()
		}
	}, [value])

	return (
		<div className="radio-container">
			<h3 className="snug">🍿 Movie/Series Name</h3>
			<Autocomplete
				freeSolo
				filterOptions={(x) => x}
				options={options}
				loading={loading}
				inputValue={value}
				getOptionLabel={(option) => (typeof option === 'string' ? option : getTitle(option))}
				isOptionEqualToValue={(option, val) => option.id === val.id}
				onInputChange={(event, newValue, reason) => {
					if (reason === 'input') {
						onTextChange(newValue)
						onMovieSelect(null)
					}
				}}
				onChange={(event, selected) => {
					if (selected && typeof selected !== 'string') {
						onTextChange(getTitle(selected))
						onMovieSelect(selected)
					}
				}}
				renderOption={(props, option) => {
					const posterUrl = getPosterUrl(option.poster_path, 'w92')
					const year = getYear(option)
					return (
						<li {...props} key={option.id} className="movie-option">
							{posterUrl
								? <img src={posterUrl} alt="" className="movie-option-poster" />
								: <div className="movie-option-poster movie-option-poster--placeholder">🎬</div>}
							<div className="movie-option-info">
								<span className="movie-option-title">{getTitle(option)}</span>
								<span className="movie-option-meta">
									{option.media_type === 'tv' ? 'TV' : 'Movie'}{year ? ` · ${year}` : ''}
								</span>
							</div>
						</li>
					)
				}}
				renderInput={(params) => (
					<TextField
						{...params}
						name="Movie/Series Name"
						variant="outlined"
						fullWidth
						size="small"
						placeholder="Search for a title..."
						InputProps={{
							...params.InputProps,
							endAdornment: (
								<>
									{loading ? <CircularProgress color="inherit" size={16} /> : null}
									{params.InputProps.endAdornment}
								</>
							)
						}}
					/>
				)}
			/>
		</div>
	)
}

MovieSearch.propTypes = {
	value: PropTypes.string.isRequired,
	onTextChange: PropTypes.func.isRequired,
	onMovieSelect: PropTypes.func.isRequired
}

export default React.memo(MovieSearch)
