import { Typography } from '@mui/material';
import NavBar from '../components/navbar/center_title_bar';
import SocialLink from '../components/social_link';
export default function Eventi() {
	return (
		<div>
			<NavBar title="Social" />
			<Typography variant='h2' gutterBottom component="div" sx={{ paddingTop: "32px", fontSize: "13px", mx: "16px", my: "5px"}}>
				SOCIAL
			</Typography>
			<SocialLink social_name="instagram" social_link="https://www.instagram.com" />
		</div>
	);
}