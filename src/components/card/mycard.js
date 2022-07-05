import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


export default function ActionAreaCard(props) {

	let title = "Titolo Mancante";
	let text = "Testo mancante";
	let subtitle = "Sottotitolo mancante";
	return (
		<Card sx={{ mt: "30px" }}>
			<CardActionArea>
				<CardContent>
					<Typography gutterBottom variant="h3" component="div">
						{props.title ? props.title : title}
					</Typography>
					<Typography gutterBottom variant="h4" component="div" fontWeight={700}>
						{props.subtitle ? props.subtitle : subtitle}
					</Typography>
				</CardContent>
				<CardMedia
					component="img"
					//height="140"
					image={props.image}
					alt={props.alt}
				/>
				<CardContent>
					<Typography variant="body2" color="text.secondary">
						{props.text?props.text:text}
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
}
