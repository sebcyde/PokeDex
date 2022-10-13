import React, { useRef, useState } from 'react';
import Logo from '../Partials/Logo';
import PokeCards from '../Partials/PokeCards';

function PokeDex() {
	const [SortType, setSortType] = useState<string>('');

	const Shuffle = (event: any) => {
		if (event != undefined || null) {
			setSortType(event.target.value);
		}
	};

	return (
		<div className="w-100 h-100 flex flex-col align-center">
			<Logo />
			<select
				className="margin-thin w-50 h-30p"
				name="Sort"
				onChange={(event) => {
					Shuffle(event);
				}}
			>
				<option value="A-Z">A-Z</option>
				<option value="Z-A">Z-A</option>
				<option value="ID1">ID Low to High</option>
				<option value="ID2">ID High to Low</option>
			</select>
			<PokeCards sort={SortType} />
		</div>
	);
}

export default PokeDex;
