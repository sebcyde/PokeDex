import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

type Props = {};

const NavStyle = {
	width: '100%',
	display: 'flex',
	justifyContent: 'space-evenly',
	top: '0px',
	color: '#3BD5FF',
};

// Needs to be made sticky
function Navbar({}: Props) {
	let navigate = useNavigate();
	const AOS = require('aos');

	useEffect(() => {
		AOS.init();
		AOS.refresh();
	}, []);

	const Return = () => {
		navigate('/');
	};

	return (
		<div style={NavStyle} data-aos="fade-up" data-aos-duration="700">
			<span className="material-symbols-outlined" onClick={Return}>
				keyboard_backspace
			</span>
			<span className="material-symbols-outlined">search</span>
			<span className="material-symbols-outlined">sort</span>
		</div>
	);
}

export default Navbar;
