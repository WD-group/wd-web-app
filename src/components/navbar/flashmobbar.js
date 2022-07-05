import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';

export default function ElevateAppBar(props) {
	return (
		<React.Fragment>
			<CssBaseline />
			<AppBar>
				<Toolbar>

					<img src="/icon.svg" alt="beiguaLogo" className={"navbar-logo-shifted"} sx={{ flexGrow: 1, mt: "16px" }} />
					<Typography position="absolute" left="0" right="0" variant="poppinstitle" textAlign="center" component="div" sx={{ mr: "auto", ml: "auto", flexGrow: 1 }}>
						Flash Mob
					</Typography>
					{/* <div sx={{ flexGrow: 1 }}></div> */}

				</Toolbar>
			</AppBar>
			{/* </ElevationScroll> */}
			<Toolbar />
		</React.Fragment>
	);
}
