import React, { useEffect, useState } from 'react';
import { PokeCardSorter } from './Sorting Algorithms/PokecardSorter';
import Axios from 'axios';

type Props = { sort: string };

type Pokemon = {
	name: string;
	url: string;
};

type APIPages = {
	next: string | null;
	previous: string | null;
};

function PokeCards({ sort }: Props) {
	const [Entries, setEntries] = useState<Pokemon[]>([]);
	const [SortedPokemon, setSortedPokemon] = useState<Pokemon[]>([]);

	const APICall = async (URL: string, sortType: string | null) => {
		console.log(`Sort Type is ${sortType}`);
		await Axios.get(URL)
			.then((response) => {
				if (sortType != 'ID1') {
					console.log('Starting sort');
					let Pokemon = PokeCardSorter(sortType!);
					return Pokemon;
				} else {
					console.log('Standard Request');
					console.log(response.data.results);
					let Pokemon = response.data.results;
					return Pokemon;
				}
			})
			.then((result) => {
				setEntries([...Entries]);
				let N = result;

				setEntries(N);
			});
	};

	useEffect(() => {
		APICall('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0', sort);
	}, [sort]);

	useEffect(() => {
		console.log(Entries);
	}, [Entries]);

	return (
		<div className="w-100 h-100 flex flex-col align-center margin-thin">
			{Entries.map((Entry, key) => {
				return (
					<div
						className="w-80 flex flex-col align-center margin-xthin bor-black-thin col-white black-hex-bg bor-silver-thin radius-25p"
						key={key}
					>
						<p>{Entry.name}</p>
					</div>
				);
			})}
		</div>
	);
}

export default PokeCards;
