import React from 'react';
import Card from '../components/card/mycard';
import Hero from '../components/hero/hero';
import Navbar from '../components/navbar/homebar';

const Home = () => {
	return (
		<div className="home">
			<Navbar />
			<Hero />
			<Card
				image="./flash_mob_card_back.jpg"
				title="Flash Mob"
				subtitle="Prossimi eventi"
				text="Eventi in programma a cui poter partecipare, info sui flash mob e molto altro."
				alt="Flash Mob"
			/>
			<Card
				image="./social_back.jpg"
				title="Social"
				subtitle="Eventi passati"
				text="Seguici su tutte le nostre pagine social per rimanere aggiornato e rivivere gli eventi già svolti."
				alt="Social"
			/>
		</div>
	);
}

export default Home;
