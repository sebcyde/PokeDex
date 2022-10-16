import 'aos/dist/aos.css';
import { CSSProperties } from 'react';
import React, { MutableRefObject, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import DivBackground from '../Assets/Sci-Fi/Blue/Hud1.png';
import { ClosePage } from '../Partials/Animations/ClosePage';

function Dashboard() {
	const AOS = require('aos');
	const navigate = useNavigate();
	const PokeDexRef = useRef<HTMLDivElement>(null);
	const FavouritesRef = useRef<HTMLDivElement>(null);
	const MovesRef = useRef<HTMLDivElement>(null);
	const ItemsRef = useRef<HTMLDivElement>(null);
	const MachinesRef = useRef<HTMLDivElement>(null);
	const SettingsRef = useRef<HTMLDivElement>(null);
	const MenuItems: React.RefObject<HTMLDivElement>[] = [
		PokeDexRef,
		MovesRef,
		ItemsRef,
		MachinesRef,
		SettingsRef,
	];

	useEffect(() => {
		AOS.init({ mirror: true });
		AOS.refresh();
	}, []);

	document.addEventListener('aos:out', ({ detail }) => {
		console.log('animated out', detail);
	});

	const Navigate = async (
		location: string,
		MenuItem: MutableRefObject<HTMLDivElement | null>,
		MenuItems: React.RefObject<HTMLDivElement>[]
	) => {
		await ClosePage(MenuItem, MenuItems).then(() => {
			setTimeout(() => {
				// navigate(location);
				console.log(location);
			}, 500);
		});
	};

	const MenuItemStyle: CSSProperties = {
		backgroundImage: `url(${DivBackground})`,
		backgroundRepeat: 'no-repeat',
		backgroundSize: '100% 150px',
		backgroundPosition: '-10%',
		boxSizing: `border-box`,
		height: 'fit-content',
		overflow: 'visible',
		marginTop: '5px',
		padding: '20px 10px',
		width: '70%',
	};

	return (
		<div className="w-100 margin-top-thin flex flex-col align-center  padding-thin">
			<div
				className="col-aqua pad-thin margin-xthin text-center flex align-center just-center"
				data-aos="fade-left"
				data-aos-duration="700"
				onClick={() => Navigate('/pokedex', PokeDexRef, MenuItems)}
				style={MenuItemStyle}
				ref={PokeDexRef}
			>
				<h2 className="margin-0 font-25">PokeDex</h2>
			</div>
			{/* <div
				className="col-aqua pad-thin margin-xthin text-center flex align-center just-center"
				data-aos="fade-left"
				data-aos-duration="700"
				onClick={() => Navigate('/favourites', FavouritesRef, MenuItems)}
				style={MenuItemStyle}
				ref={FavouritesRef}
			>
				<h2 className="margin-0 font-25">Favourites</h2>
			</div> */}
			<div
				className="col-aqua pad-thin margin-xthin text-center flex align-center just-center"
				data-aos="fade-right"
				data-aos-duration="700"
				onClick={() => Navigate('/moves', MovesRef, MenuItems)}
				style={MenuItemStyle}
				ref={MovesRef}
			>
				<h2 className="margin-0 font-25">Moves</h2>
			</div>
			<div
				className="col-aqua pad-thin margin-xthin text-center flex align-center just-center"
				data-aos="fade-left"
				data-aos-duration="700"
				onClick={() => Navigate('/items', ItemsRef, MenuItems)}
				style={MenuItemStyle}
				ref={ItemsRef}
			>
				<h2 className="margin-0 font-25">Items</h2>
			</div>
			<div
				className="col-aqua pad-thin margin-xthin text-center flex align-center just-center"
				data-aos="fade-right"
				data-aos-duration="700"
				onClick={() => Navigate('/machines', MachinesRef, MenuItems)}
				style={MenuItemStyle}
				ref={MachinesRef}
			>
				<h2 className="margin-0 font-25">Machines</h2>
			</div>
			<div
				className="col-aqua pad-thin margin-xthin text-center flex align-center just-center"
				data-aos="fade-left"
				data-aos-duration="700"
				onClick={() => Navigate('/settings', SettingsRef, MenuItems)}
				style={MenuItemStyle}
				ref={SettingsRef}
			>
				<h2 className="margin-0 font-25">Settings</h2>
			</div>
		</div>
	);
}

export default Dashboard;
