import { Typography } from '@mui/material';
import NavBar from '../components/navbar/center_title_bar';
import Footer from '../components/footer/footer';
export default function Eventi() {
	return (
		<div>
			<NavBar title="Flash Mob" />
			<div class="event-hero">
				<img src="/flash_mob_top.svg" alt="flashMobImage" className={"flash-mob-top"} sx={{ flexGrow: 1 }} />
				<div class="event-title">
					<Typography variant='poppinstitle' gutterBottom component="div" sx={{ paddingTop: "30px", mx: "16px", my: "0px"}}>
						Piazza Sarzano
					</Typography>
					<Typography variant='poppinssubtitle' gutterBottom component="div" sx={{ paddingTop: "0px", mx: "16px", my: "0px"}}>
						07/07/2022 - 15:00
					</Typography>
				</div>
			</div>
			<Typography variant='bodypoppins' gutterBottom component="div" sx={{ paddingTop: "16px", mx: "16px", my: "5px"}}>
				L'idea del FLASH MOB è di disegnare con dei gessetti, per tutta la piazza, 
				delle sagome in stile "scena del crimine", 
				questo tipo di azione è alla portata di tutti, e soprattutto facile da realizzare. 
				<br/>
				Le sagome disegnate per terra hanno come scopo quello di sensibilizzare le persone sul tema della miniera del Beigua.
			</Typography>
			<div class="images-section">
				<img src="/flash_mob_event.svg" alt="flashMobImage" className={"flash-mob-event-image"} sx={{ flexGrow: 1 }} />
				<img src="/dots.svg" alt="flashMobImage" className={"flash-mob-dots"} sx={{ flexGrow: 1 }} />
			</div>
			<Typography variant='bodypoppins' gutterBottom component="div" sx={{ mt: "32px", paddingLeft: "10px", mx: "16px", my: "16px", borderLeft: "3px solid #39108A"}}>
				Come tutti sappiamo le sagome delle scene del crimine vengono
				disegnate quando avviene un omicidio, l’idea di riproporre una 
				situazione analoga è una metafora per indicare quello che potrebbe
				succedere con l’apertura della cava.
			</Typography>
			<Footer />
		</div>
	);
}