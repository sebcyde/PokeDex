import React from 'react';
import Pokeball from '../Assets/PB1.png';

function LoadingScreen() {
	return (
		<div className="w-100 h-100 margin-0auto flex flex-col just-center align-center">
			<div className="h-fit w-fit ">
				<img src={Pokeball} alt="Pokeball" className="h-80p spin" />
			</div>
		</div>
	);
}

export default LoadingScreen;
