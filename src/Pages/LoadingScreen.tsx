import React from 'react';
import Pokeball from '../Assets/Pokeball.png';

function LoadingScreen() {
	return (
		<div className="w-100 h-100 margin-0auto flex flex-col just-center align-center">
			<div className="h-fit w-fit pulse">
				<img src={Pokeball} alt="Pokeball" className="h-100p spin" />
			</div>
		</div>
	);
}

export default LoadingScreen;
