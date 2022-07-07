import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YoutubeIcon from '@mui/icons-material/YouTube';

let social_name = "no_social_name";
let social_link = "";

export default function SocialLink(props) {
	let icon;
	if (props.social_name === "Instagram") {
		icon = <InstagramIcon sx={{ color: "#fff", fontSize: "3.5em", marginLeft: "auto" }} />
	} else if(props.social_name === "Facebook") {
		icon = <FacebookIcon sx={{ color: "#fff", fontSize: "3.5em", marginLeft: "auto" }} />
	}else{
		icon = <YoutubeIcon sx={{ color: "#fff", fontSize: "3.5em", marginLeft: "auto" }} />
	}

	return (	
		<Card sx={{ mx: "16px", mt: "32px", backgroundColor: props.color, borderRadius: "0" }}>
			<CardActionArea href={props.social_link ? props.social_link : social_link} target="_blank">
				<CardContent sx={{height:"94px", display: "flex", alignItems: "center", flexDirection: "row"}}>
					<Typography gutterBottom component="div" color="#fff" sx={{ mb:"0", fontSize:"24px" }}>
						{props.social_name ? props.social_name : social_name}
					</Typography>
					{icon}
				</CardContent>
			</CardActionArea>
		</Card>
	);
}