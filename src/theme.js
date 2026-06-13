import { createTheme } from '@mui/material/styles'

const theme = createTheme({
	palette: {
		mode: 'dark',
		primary: {
			main: '#818cf8'
		},
		secondary: {
			main: '#8b5cf6'
		},
		background: {
			default: '#0f1117',
			paper: '#1e293b'
		},
		text: {
			primary: '#e2e8f0',
			secondary: '#94a3b8'
		},
		divider: '#2d3748'
	},
	typography: {
		fontFamily: '\'Segoe UI\', system-ui, -apple-system, sans-serif'
	},
	components: {
		MuiOutlinedInput: {
			styleOverrides: {
				root: {
					'& fieldset': {
						borderColor: '#334155'
					},
					'&:hover fieldset': {
						borderColor: '#6366f1 !important'
					},
					'&.Mui-focused fieldset': {
						borderColor: '#818cf8 !important'
					}
				}
			}
		},
		MuiFormControlLabel: {
			styleOverrides: {
				label: {
					fontSize: 14,
					color: '#cbd5e1',
					lineHeight: 1.5
				}
			}
		},
		MuiRadio: {
			styleOverrides: {
				root: {
					color: '#475569',
					padding: '4px 9px'
				}
			}
		},
		MuiCheckbox: {
			styleOverrides: {
				root: {
					color: '#475569',
					padding: '4px 9px'
				}
			}
		}
	}
})

export default theme
