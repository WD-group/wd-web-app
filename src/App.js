import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Footer from './components/footer/footer';
import Home from './pages/Home';
import Eventi from './pages/Eventi';

import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
	typography: {
		h3: {
			fontWeight: 700,
			fontSize: "20px",
		},
		h4: {
			fontWeight: 500,
			fontSize: "14px",
		},
		h5: {
			fontWeight: 400,
			fontSize: "17px",
		},
		body2: {
			fontWeight: 700,
			fontSize: "14px",
		},
	},
	palette: {
		primary: {
			main: '#39108A',
			dark: '#5600E8',
		},
		background: {
			default: '#fff',
		}
	}
})


function App() {
	return (
		<Router>
			<ThemeProvider theme={theme}>
				<div className='content'>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/eventi" element={<Eventi />} />
					</Routes>
				</div>
				<Footer />
			</ThemeProvider>
		</Router>
	);
}

export default App;
