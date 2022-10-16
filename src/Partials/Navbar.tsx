import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import OptionDropdown from './Sorting/SortingDropdown';

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
	const [Sorting, setSorting] = useState<boolean>(false);
	let navigate = useNavigate();
	const AOS = require('aos');

	useEffect(() => {
		AOS.init();
		AOS.refresh();
	}, []);

	const Return = () => {
		navigate('/');
	};

	const DropSortBar = () => {
		setSorting(!Sorting);
	};

	return (
		<>
			<div style={NavStyle} data-aos="fade-up" data-aos-duration="700">
				<span className="material-symbols-outlined" onClick={Return}>
					keyboard_backspace
				</span>
				<span className="material-symbols-outlined">search</span>
				<span className="material-symbols-outlined" onClick={DropSortBar}>
					sort
				</span>
			</div>
			{Sorting ? <OptionDropdown /> : ''}
		</>
	);
}

export default Navbar;
