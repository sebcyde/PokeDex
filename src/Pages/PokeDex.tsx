import React, { useContext, useEffect, useRef, useState } from 'react';
import 'aos/dist/aos.css';
import { SortContext } from '../Context/SortContext';
import PokeCards from '../Partials/PokeCards';

function PokeDex() {
	const AOS = require('aos');
	let Context = useContext(SortContext);

	useEffect(() => {
		AOS.init();
		AOS.refresh();
	}, []);

	return (
		<div className="w-100 h-100 flex flex-col align-center">
			<PokeCards sort={Context.SortType} />
		</div>
	);
}

export default PokeDex;
