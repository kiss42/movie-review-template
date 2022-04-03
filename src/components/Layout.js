import '../app.css'
import React from 'react'
import PropTypes from 'prop-types'

function Layout({ children }){
	return  (
		<div>
			<header className="app-header">
				<h1>Review Template</h1>
				<h2>Movie & TV</h2>
			</header>
			{children}
			<footer className="app-footer">
				<p className="signature">
                Steven Pierre, {new Date().getFullYear()}
					{' '}(If you like this, check out the
					<a href="https://vojtastruhar.github.io/steam-review-template/"> original</a>)
				</p>
			</footer>
		</div>
	)}

Layout.propTypes = {
	children: PropTypes.element.isRequired
}

export default Layout
