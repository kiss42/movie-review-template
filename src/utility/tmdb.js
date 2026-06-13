const API_KEY = process.env.REACT_APP_TMDB_API_KEY
const BASE_URL = 'https://api.themoviedb.org/3'
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p'

export function getPosterUrl(posterPath, size = 'w154') {
	return posterPath ? `${IMAGE_BASE_URL}/${size}${posterPath}` : null
}

export function getTitle(result) {
	return result.media_type === 'tv' ? result.name : result.title
}

export function getYear(result) {
	const date = result.media_type === 'tv' ? result.first_air_date : result.release_date
	return date ? date.slice(0, 4) : null
}

export async function searchTitles(query, signal) {
	if (!API_KEY || !query.trim()) {
		return []
	}

	const params = new URLSearchParams({
		api_key: API_KEY,
		query,
		include_adult: 'false'
	})

	const response = await fetch(`${BASE_URL}/search/multi?${params}`, { signal })

	if (!response.ok) {
		throw new Error(`TMDB search failed with status ${response.status}`)
	}

	const data = await response.json()

	return (data.results || [])
		.filter(result => result.media_type === 'movie' || result.media_type === 'tv')
		.filter(result => getTitle(result))
}
