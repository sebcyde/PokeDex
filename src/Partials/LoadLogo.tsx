import React from 'react';
import Pokeball from '../Assets/PB1.png';

type Props = {};

function LoadLogo({}: Props) {
	return (
		<div className="w-100 margin-0auto flex flex-col just-center align-center">
			<div className="h-fit w-fit  margin-xthick">
				<img src={Pokeball} alt="Pokeball" className="h-70p spin" />
			</div>
		</div>
	);
}

export default LoadLogo;
