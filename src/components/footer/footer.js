import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';


export default function ElevateAppBar(props) {
	return (
		<React.Fragment>
			<CssBaseline />
			{/* <ElevationScroll {...props}> */}
			<AppBar position="relative" color="primary" sx={{ top: 'auto', bottom: 0, mt: "30px" }}>
				<Toolbar>
				
					<img src="/big_logo.svg" alt="beiguaLogo"  className={"navbar-logo-left"}/>
				
				</Toolbar>
			</AppBar>
			{/* </ElevationScroll> */}
		</React.Fragment>
	);
}
