import './MoviePosterCard.css'
import React from 'react'
import PropTypes from 'prop-types'
import { getPosterUrl, getTitle, getYear } from '../utility/tmdb'

function MoviePosterCard({ movie }) {
	const posterUrl = getPosterUrl(movie.poster_path, 'w154')
	const year = getYear(movie)

	return (
		<div className="poster-card">
			{posterUrl
				? <img src={posterUrl} alt={`${getTitle(movie)} poster`} className="poster-card-image" />
				: <div className="poster-card-image poster-card-image--placeholder">🎬</div>}
			<div className="poster-card-info">
				<h3 className="poster-card-title">{getTitle(movie)}</h3>
				<span className="poster-card-meta">
					{movie.media_type === 'tv' ? 'TV Series' : 'Movie'}{year ? ` · ${year}` : ''}
				</span>
				{movie.overview && <p className="poster-card-overview">{movie.overview}</p>}
			</div>
		</div>
	)
}

MoviePosterCard.propTypes = {
	movie: PropTypes.object.isRequired
}

export default React.memo(MoviePosterCard)
