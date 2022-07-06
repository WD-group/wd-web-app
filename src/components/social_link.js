import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';

let social_name = "no_social_name";
let social_link = "";

export default function SocialLink(props) {
	return (
		<Card sx={{ mx: "16px", mt: "32px", backgroundColor: "#39108A", borderRadius: "0" }} elevation="0">
			<CardActionArea href={props.social_link ? props.social_link : social_link}>
				<CardContent sx={{height:"94px"}}>
					<Typography gutterBottom component="div" color="#fff" position="absolute" sx={{ fontSize:"24px" }}>
						{props.social_name ? props.social_name : social_name}
					</Typography>
					<InstagramIcon sx={{ color: "#fff", position:"absolute", right:"16px" }} />
				</CardContent>
			</CardActionArea>
		</Card>
	);
}