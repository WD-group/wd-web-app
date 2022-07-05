import * as React from 'react';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Paper } from '@mui/material';

export default function ActionAreaCard(props) {
	let text = "testo mancante";
	return (
		<Paper elevation={0} style={{ backgroundColor: "#6D3EBB", padding: "16px", borderRadius: "0", paddingTop:"32px"}}>
			<CardMedia
				component="img"
				//height="140"
				image="/big_logo.svg"
				alt=""
			/>
		<CardContent>
				<Typography variant="h5" color="white" align='center'>
					<br/>
					Per sensibilizzare sul rischio dovuto all’ipotetica apertura della miniera sul Beigua, 
					M.O.B si propone di organizzare una serie di eventi nei quali le persone potranno prendere 
					parte a dei Flash Mob
				</Typography>
			</CardContent>
		</Paper>
	);
}