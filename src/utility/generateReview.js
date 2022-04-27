import config from '../config/template.json'

// TODO: Fix this to build message according to category options and selections
export default function generateReview(reviewSelections){
	console.log(reviewSelections)
	let localReviewString = ''

	function appendCategoryTitle(title) {
		localReviewString += '** ' + title + ' **\n'
	}

	function appendOption(option, checked) {
		localReviewString += (checked ? '☑ ' : '☐ ') + option + '\n'
	}

	appendCategoryTitle('Movie/Series Show Name')
	localReviewString += `${reviewSelections['Movie/Series Name']}\n`
	localReviewString += '\n'

	config.categories.forEach(category => {
		const selection = reviewSelections[category.title]
		appendCategoryTitle(category.title)

		// With radio, only one option is selected
		category.options.forEach((option) => {
			const isChecked = category.type === 'radio' ? selection === option : selection.includes(option)
			appendOption(option, isChecked)
		})
		// newline under every category
		localReviewString += '\n'
	})

	// Credit
	localReviewString += '\nGrab this review template here!  https://kiss42.github.io/movie-review-template/'

	let result = ''
	navigator.clipboard.writeText(localReviewString).then(
		function () {
			console.log('Async: Copying to clipboard was successful!')
			result = 'The review has been copied into your clipboard!'
		},
		function (err) {
			console.error('Async: Could not copy text: ', err)
			result = 'Copying into clipboard failed. New window with the review should appear, please, copy it manually.'
		}
	)
	return result
}
