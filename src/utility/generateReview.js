import config from '../config/template.json'

export default async function generateReview(reviewSelections) {
	let localReviewString = ''

	function appendCategoryTitle(title) {
		localReviewString += '** ' + title + ' **\n'
	}

	function appendOption(option, checked) {
		localReviewString += (checked ? '☑ ' : '☐ ') + option + '\n'
	}

	appendCategoryTitle('Movie/Series Name')
	localReviewString += `${reviewSelections['Movie/Series Name']}\n\n`

	config.categories.forEach(category => {
		const selection = reviewSelections[category.title]
		appendCategoryTitle(category.title)

		category.options.forEach((option) => {
			const isChecked = category.type === 'radio' ? selection === option : selection.includes(option)
			appendOption(option, isChecked)
		})
		localReviewString += '\n'
	})

	appendCategoryTitle('Comments')
	localReviewString += `${reviewSelections['Comments'] || ''}\n\n`

	localReviewString += 'Grab this review template here!  https://kiss42.github.io/movie-review-template/'

	try {
		await navigator.clipboard.writeText(localReviewString)
		return 'Review copied to your clipboard! Paste it anywhere.'
	} catch (err) {
		console.error('Could not copy text: ', err)
		return 'Could not copy automatically. Here\'s your review:\n\n' + localReviewString
	}
}
