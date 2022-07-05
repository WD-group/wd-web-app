import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Footer from './components/footer/footer';
import Home from './pages/Home';
import Eventi from './pages/Eventi';
import Social from './pages/Social';

import { createTheme, ThemeProvider } from '@mui/material/styles';

import "@fontsource/poppins";
import "@fontsource/montserrat";

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
		poppinstitle: {
			fontFamily: "Poppins",
			fontWeight: 900,
			fontSize: "24px",
		},
		poppinssubtitle: {
			fontFamily: "Poppins",
			fontWeight: 500,
			fontSize: "14px",
		},
		bodymontserrat: {
			fontFamily: "Montserrat",
			fontWeight: 700,
			fontSize: "14px",
		},
		bodypoppins: {
			fontFamily: "Poppins",
			fontWeight: "lighter",
			fontSize: "13px",
		}
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
						<Route path="/social" element={<Social />} />
					</Routes>
				</div>
				<Footer />
			</ThemeProvider>
		</Router>
	);
}

export default App;
