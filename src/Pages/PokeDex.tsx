import React, { useRef, useState } from 'react';
import Logo from '../Partials/Logo';
import PokeCards from '../Partials/PokeCards';
// import OptionDropdown from '../Partials/PokeCards/OptionDropdown';

function PokeDex() {
	const [SortType, setSortType] = useState<string>('ID1');

	const Shuffle = (event: any) => {
		if (event != undefined || null) {
			setSortType(event.target.value);
		}
	};

	return (
		<div className="w-100 h-100 flex flex-col align-center">
			{/* <OptionDropdown /> */}
			<select
				className="margin-thin w-50 h-30p flex margin-bot-0 bor-black-thin"
				name="Sort"
				onChange={(event) => {
					Shuffle(event);
				}}
			>
				<option value="ID1">ID Low to High</option>
				<option value="ID2">ID High to Low</option>
				<option value="A-Z">A-Z</option>
				<option value="Z-A">Z-A</option>
			</select>
			{/* <PokeCards sort={SortType} /> */}
		</div>
	);
}

export default PokeDex;
