import React from 'react'
import { ThemeProvider, CssBaseline } from '@mui/material'
import ReviewForm from './ReviewForm'
import config from './config/template.json'
import Layout from './components/Layout'
import theme from './theme'

function App() {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Layout>
				<ReviewForm categories={config.categories} />
			</Layout>
		</ThemeProvider>
	)
}

export default App
