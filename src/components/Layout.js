import '../App.css'
import React, { useState } from 'react'
import PropTypes from 'prop-types'

const TAGLINES = [
	'Brutally honest opinions, served fresh 🍿',
	'Warning: contains feelings about fictional people',
	'No spoilers, just vibes (and a score out of 10)',
	'Because "it was fine" is not a review',
	'Tell the internet what you really think'
]

const FOOTER_JOKES = [
	'No popcorn was harmed in the making of this review.',
	'100% organic, free-range opinions.',
	'Side effects may include strong opinions about plot twists.',
	'Certified spoiler-free* (*we make no promises)'
]

function pickRandom(list) {
	return list[Math.floor(Math.random() * list.length)]
}

function Layout({ children }) {
	const [tagline] = useState(() => pickRandom(TAGLINES))
	const [footerJoke] = useState(() => pickRandom(FOOTER_JOKES))

	return (
		<div>
			<header className="app-header">
				<h1>🎬 Review Template</h1>
				<h2>Movie &amp; TV</h2>
				<p className="app-tagline">{tagline}</p>
			</header>
			{children}
			<footer className="app-footer">
				<div className="footer-content">
					<p className="signature">
						Made by Steven Pierre, {new Date().getFullYear()}
						{' · '}
						<a href="https://vojtastruhar.github.io/steam-review-template/">Inspired by the original</a>
					</p>
					<p className="footer-joke">{footerJoke}</p>
				</div>
			</footer>
		</div>
	)
}

Layout.propTypes = {
	children: PropTypes.element.isRequired
}

export default Layout
