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

					<img src="/icon.svg" alt="beiguaLogo" className={"navbar-logo"} sx={{ flexGrow: 1, mt: "16px" }} />
					<Typography variant="h6" textAlign="center" component="div" fontWeight={700} fontSize={24} sx={{ flexGrow: 1 }}>
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
