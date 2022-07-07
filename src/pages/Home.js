import React from 'react';
import Card from '../components/card/mycard';
import Hero from '../components/hero/hero';
import Navbar from '../components/navbar/homebar';
import Footer from '../components/footer/footer';

import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<div className="home">
			<Navbar />
			<Hero />
			<Link to="/eventi" style={{ textDecoration: 'none' }}>
				<Card
					image="./flash_back.svg"
					title="Flash Mob"
					subtitle="Prossimi eventi"
					text="Eventi in programma a cui poter partecipare, info sui flash mob e molto altro."
					alt="Flash Mob"
				/>
			</Link>
			<Link to="/social" style={{ textDecoration: 'none' }}>
				<Card
					image="./social_back.svg"
					title="Social"
					subtitle="Eventi passati"
					text="Seguici su tutte le nostre pagine social per rimanere aggiornato e rivivere gli eventi già svolti."
					alt="Social"
				/>
			</Link>
			<Footer />
		</div>
	);
}

export default Home;
