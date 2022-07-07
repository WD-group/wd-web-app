import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import { Link } from 'react-router-dom';
import { Button, Typography } from '@mui/material';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton'
import CookieIcon from '@mui/icons-material/Cookie';
import CloseIcon from '@mui/icons-material/Close';
import Collapse from '@mui/material/Collapse';




export default function ElevateAppBar() {
	
	const [open, setOpen] = React.useState(true);

	return (
		<React.Fragment>
			<CssBaseline />
			<AppBar position="relative" color="primary" sx={{ top: 'auto', bottom: 0, mt: "30px" }}>
				<Toolbar>
					<Link to="/">
						<img src="/big_logo.svg" alt="beiguaLogo" className={"navbar-logo-left"} href="/"/>
					</Link>



					<Collapse in={open} className='cookie-infos'>
						<Alert
							color="primary"
							icon={false}
							action={
								<IconButton
									aria-label="close"
									color="primary"
									size="small"
									onClick={() => {
										setOpen(false);
									}}
								>
									<CloseIcon fontSize="inherit" />
								</IconButton>
							}
							sx={{ mb: 2 }}
						>
							Questo sito utilizza Cookie.
						</Alert>
					</Collapse>
					
				</Toolbar>
			</AppBar>
		</React.Fragment>
	);
}
