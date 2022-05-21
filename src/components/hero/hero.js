import * as React from 'react';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Paper } from '@mui/material';

export default function ActionAreaCard(props) {
	let text = "testo mancante";
	return (
		<Paper elevation={0} style={{ backgroundColor: "#5600E8", padding: "1rem", borderRadius: "0", paddingTop:"4rem"}}>
			<CardMedia
				component="img"
				//height="140"
				image="/big_logo.svg"
				alt=""
			/>
		<CardContent>
				<Typography variant="h6" color="white" align='center'>
					<br />
					Il Monte Beigua è in pericolo.<br/>
					La salute di tutta la popolazione ligure è in pericolo.<br /><br />
					Organizziamo una serie di Flash Mob per sensibilizzare le persone sul tema, così da evitare che per
					l'interesse di pochi i più finiscano per correggere il loro caffè con l'amianto.
				</Typography>
			</CardContent>
		</Paper>
	);
}