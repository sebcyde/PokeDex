import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

type Props = {};

function Dashboard({}: Props) {
	const AOS = require('aos');
	const navigate = useNavigate();

	useEffect(() => {
		AOS.init();
		AOS.refresh();
	}, []);

	const ClosePage = () => {};

	const Navigate = (location: string) => {
		ClosePage();
		// setTimeout(() => {
		navigate(location);
		// }, 1000);
	};

	return (
		<div className="w-100 h-100 flex flex-col align-center just-center margin-auto">
			<div
				className="black-hex-bg w-70 h-20p col-white bor-white-thin radius-25p pad-thin margin-xthin text-center flex align-center just-center "
				data-aos="fade-right"
				data-aos-duration="700"
				onClick={() => Navigate('/pokedex')}
			>
				<h2 className="margin-0">PokeDex</h2>
			</div>
			<div
				className="black-hex-bg w-70 h-20p col-white bor-white-thin radius-25p pad-thin margin-xthin text-center flex align-center just-center"
				data-aos="fade-left"
				data-aos-duration="700"
				onClick={() => Navigate('/favourites')}
			>
				<h2 className="margin-0">Favourites</h2>
			</div>
			<div
				className="black-hex-bg w-70 h-20p col-white bor-white-thin radius-25p pad-thin margin-xthin text-center flex align-center just-center"
				data-aos="fade-right"
				data-aos-duration="700"
				onClick={() => Navigate('/moves')}
			>
				<h2 className="margin-0">Moves</h2>
			</div>
			<div
				className="black-hex-bg w-70 h-20p col-white bor-white-thin radius-25p pad-thin margin-xthin text-center flex align-center just-center"
				data-aos="fade-left"
				data-aos-duration="700"
				onClick={() => Navigate('/items')}
			>
				<h2 className="margin-0">Items</h2>
			</div>
			<div
				className="black-hex-bg w-70 h-20p col-white bor-white-thin radius-25p pad-thin margin-xthin text-center flex align-center just-center"
				data-aos="fade-right"
				data-aos-duration="700"
				onClick={() => Navigate('/machines')}
			>
				<h2 className="margin-0">Machines</h2>
			</div>
			<div
				className="black-hex-bg w-70 h-20p col-white bor-white-thin radius-25p pad-thin margin-xthin text-center flex align-center just-center"
				data-aos="fade-left"
				data-aos-duration="700"
				onClick={() => Navigate('/settings')}
			>
				<h2 className="margin-0">Settings</h2>
			</div>
		</div>
	);
}

export default Dashboard;
