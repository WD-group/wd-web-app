import { Typography } from '@mui/material';
import NavBar from '../components/navbar/flashmobbar';
export default function Eventi() {
	return (
		<div>
			<NavBar />
			<Typography variant='h2' gutterBottom component="div" sx={{ paddingTop: "32px", fontSize: "13px", mx: "16px", my: "5px"}}>
				SOCIAL
			</Typography>
		</div>
	);
}