import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import { useLocation } from 'react-router-dom';
import logo from '../Assets/Logo2.png';
import pokedex from '../Assets/Logos/PokedexLogo.png';
import moves from '../Assets/Logos/MovesLogo.png';
import items from '../Assets/Logos/ItemsLogo.png';
import machines from '../Assets/Logos/MachinesLogo.png';
import settings from '../Assets/Logos/SettingsLogo.png';

export default function Logo() {
	const location = useLocation();
	const AOS = require('aos');

	useEffect(() => {
		AOS.init();
		AOS.refresh();
	}, []);

	return (
		<div
			className={`${
				location.pathname === '/' ? 'margin-0' : ''
			} w-100 flex just-center`}
			data-aos="fade-down"
			data-aos-duration="700"
		>
			<img
				src={
					location.pathname === '/'
						? logo
						: location.pathname.slice(1) === 'pokedex'
						? pokedex
						: location.pathname.slice(1) === 'moves'
						? moves
						: location.pathname.slice(1) === 'items'
						? items
						: location.pathname.slice(1) === 'machines'
						? machines
						: location.pathname.slice(1) === 'settings'
						? settings
						: ''
				}
				alt="Logo"
				className="w-80 margin-top-thin"
				style={{
					WebkitFilter: 'drop-shadow(2px 2px 3px #3BD5FF)',
					filter: 'drop-shadow(2px 2px 3px #3BD5FF)',
					margin: '30px auto',
				}}
			/>
		</div>
	);
}

// {{location.pathname === '/' ? 'position-absolute' : ''}}
