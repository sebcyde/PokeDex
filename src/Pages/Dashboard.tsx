import 'aos/dist/aos.css';
import styled from 'styled-components';
import React, { MutableRefObject, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import DivBackground from '../Assets/Sci-Fi/Blue/Hud1.png';

function Dashboard() {
	const AOS = require('aos');
	const navigate = useNavigate();
	const PokeDexRef = useRef<HTMLDivElement>(null);
	const FavouritesRef = useRef<HTMLDivElement>(null);
	const MovesRef = useRef<HTMLDivElement>(null);
	const ItemsRef = useRef<HTMLDivElement>(null);
	const MachinesRef = useRef<HTMLDivElement>(null);
	const SettingsRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		AOS.init();
		AOS.refresh();
	}, []);

	const ClosePage = (MenuItem: MutableRefObject<HTMLDivElement | null>) => {};

	const Navigate = async (
		location: string,
		MenuItem: MutableRefObject<HTMLDivElement | null>
	) => {
		await ClosePage(MenuItem);
		navigate(location);
	};

	const MenuItemStyle = {
		backgroundImage: `url(${DivBackground})`,
		backgroundRepeat: 'no-repeat',
		backgroundSize: '100% 150px',
		backgroundPosition: '-10%',
		backgroundColor: 'crimson',
	};

	return (
		<div className="w-100 h-100 flex flex-col align-center just-center margin-auto">
			<div
				className="w-70 col-aqua pad-thin margin-xthin text-center flex align-center just-center "
				data-aos="fade-right"
				data-aos-duration="700"
				onClick={() => Navigate('/pokedex', PokeDexRef)}
				style={MenuItemStyle}
				ref={PokeDexRef}
			>
				<h2 className="margin-0 font-25">PokeDex</h2>
			</div>
			<div
				className="w-70 col-aqua pad-thin margin-xthin text-center flex align-center just-center"
				data-aos="fade-left"
				data-aos-duration="700"
				onClick={() => Navigate('/favourites', FavouritesRef)}
				style={MenuItemStyle}
				ref={FavouritesRef}
			>
				<h2 className="margin-0 font-25">Favourites</h2>
			</div>
			<div
				className="w-70 col-aqua pad-thin margin-xthin text-center flex align-center just-center"
				data-aos="fade-right"
				data-aos-duration="700"
				onClick={() => Navigate('/moves', MovesRef)}
				style={MenuItemStyle}
				ref={MovesRef}
			>
				<h2 className="margin-0 font-25">Moves</h2>
			</div>
			<div
				className="w-70 col-aqua pad-thin margin-xthin text-center flex align-center just-center"
				data-aos="fade-left"
				data-aos-duration="700"
				onClick={() => Navigate('/items', ItemsRef)}
				style={MenuItemStyle}
				ref={ItemsRef}
			>
				<h2 className="margin-0 font-25">Items</h2>
			</div>
			<div
				className="w-70 col-aqua pad-thin margin-xthin text-center flex align-center just-center"
				data-aos="fade-right"
				data-aos-duration="700"
				onClick={() => Navigate('/machines', MachinesRef)}
				style={MenuItemStyle}
				ref={MachinesRef}
			>
				<h2 className="margin-0 font-25">Machines</h2>
			</div>
			<div
				className="w-70 col-aqua pad-thin margin-xthin text-center flex align-center just-center"
				data-aos="fade-left"
				data-aos-duration="700"
				onClick={() => Navigate('/settings', SettingsRef)}
				style={MenuItemStyle}
				ref={SettingsRef}
			>
				<h2 className="margin-0 font-25">Settings</h2>
			</div>
		</div>
	);
}

export default Dashboard;
