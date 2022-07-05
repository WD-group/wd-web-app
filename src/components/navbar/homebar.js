import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
// import PropTypes from 'prop-types';
// import useScrollTrigger from '@mui/material/useScrollTrigger';

/*
function ElevationScroll(props) {
	const { children, window } = props;
	// Note that you normally won't need to set the window ref as useScrollTrigger
	// will default to window.
	// This is only being set here because the demo is in an iframe.
	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 0,
		target: window ? window() : undefined,
	});

	return React.cloneElement(children, {
		elevation: trigger ? 4 : 0,
	});
}

ElevationScroll.propTypes = {
	children: PropTypes.element.isRequired,
	window: PropTypes.func,
};
*/

export default function ElevateAppBar(props) {
	return (
		<React.Fragment>
			<CssBaseline />
			{/* <ElevationScroll {...props}> */}
				<AppBar>
					<Toolbar>
						
						<img src="/icon.svg" alt="beiguaLogo"  className={"navbar-logo"}/>
						
					</Toolbar>
				</AppBar>
			{/* </ElevationScroll> */}
			<Toolbar />
		</React.Fragment>
	);
}
