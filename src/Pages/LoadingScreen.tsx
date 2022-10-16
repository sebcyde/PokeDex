import React, { useEffect } from 'react';
import Pokeball from '../Assets/PB1.png';

function LoadingScreen() {
	const AOS = require('aos');

	useEffect(() => {
		AOS.init();
		AOS.refresh();
	}, []);

	return (
		<div
			className="w-100 h-100 margin-0auto flex flex-col just-center align-center"
			data-aos="zoom-in"
			data-aos-duration="700"
		>
			<div className="h-fit w-fit ">
				<img src={Pokeball} alt="Pokeball" className="h-80p spin" />
			</div>
		</div>
	);
}

export default LoadingScreen;
