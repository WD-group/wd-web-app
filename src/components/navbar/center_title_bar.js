import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export default function ElevateAppBar(props) {
	let title = "Titolo Mancante";
	return (
		<React.Fragment>
			<CssBaseline />
			<AppBar>
				<Toolbar>
					<Link to="/">
						<img src="/icon.svg" alt="home" className={"navbar-logo-shifted"} sx={{ flexGrow: 1, mt: "16px" }} />
					</Link>
					<Typography position="absolute" ml="40%" variant="poppinstitle" textAlign="center" component="div" >
						{props.title ? props.title : title}
					</Typography>
				</Toolbar>
			</AppBar>
		</React.Fragment>
	);
}
