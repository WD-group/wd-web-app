import { Typography } from '@mui/material';
import NavBar from '../components/navbar/flashmobbar';
export default function Eventi() {
	return (
		<div>
			<NavBar />
			<Typography variant='h2' gutterBottom component="div" sx={{ paddingTop: "32px", fontSize: "13px", mx: "16px", my: "5px"}}>
				L'idea del FLASH MOB è di disegnare con dei gessetti, per tutta la piazza, 
				delle sagome in stile "scena del crimile", 
				questo tipo di azione è alla portata di tutti, e soprattutto facile da realizzare. 
				<br/>
				Le sagome disegnate per terra hanno come scopo quello di sensibilizzare le persone sul tema della miniera del Beigua.
			</Typography>
		</div>
	);
}