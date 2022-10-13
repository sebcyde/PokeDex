import React from 'react';
import logo from '../Assets/Logo.png';

export default function Logo() {
	return (
		<div className="position-absolute w-100 flex just-center">
			<img
				src={logo}
				alt="Logo"
				className="h-120p margin-top-thin"
				style={{
					WebkitFilter: 'drop-shadow(0px 15px 10px #222)',
					filter: 'drop-shadow(0px 15px 10px #222)',
				}}
			/>
		</div>
	);
}
