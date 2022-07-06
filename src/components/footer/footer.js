import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import { Link } from 'react-router-dom';

export default function ElevateAppBar() {
	return (
		<React.Fragment>
			<CssBaseline />
			<AppBar position="relative" color="primary" sx={{ top: 'auto', bottom: 0, mt: "30px" }}>
				<Toolbar>
					<Link to="/">
						<img src="/big_logo.svg" alt="beiguaLogo" className={"navbar-logo-left"} href="/"/>
					</Link>
				</Toolbar>
			</AppBar>
		</React.Fragment>
	);
}
