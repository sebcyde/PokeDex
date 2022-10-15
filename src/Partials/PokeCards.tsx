import React, { useEffect, useState } from 'react';
import { PokeCardSorter } from './Sorting Algorithms/PokecardSorter';
import Axios from 'axios';
import LoadLogo from './LoadLogo';

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
	const [Loading, setLoading] = useState<boolean>(true);
	const [Entries, setEntries] = useState<Pokemon[]>([]);
	const [SortedPokemon, setSortedPokemon] = useState<Pokemon[]>([]);
	const URL: string = 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0';

	const APICall = async (URL: string, sortType: string | null) => {
		console.log(`Sort Type is ${sortType}`);
		await Axios.get(URL)
			.then((response: any) => {
				console.log('Starting sort.');
				let Data = response.data.results;
				let Pokemon = PokeCardSorter(Data, sortType!);
				return Pokemon;
			})
			.then((result: any) => {
				console.log('Sort complete.');
				setLoading(false);
				console.log(result);
			});
	};

	useEffect(() => {
		setLoading(true);
		APICall(URL, sort);
	}, [sort]);

	useEffect(() => {
		console.log(Entries);
	}, [Entries]);

	return (
		<div className="w-100 h-100 flex flex-col align-center margin-thin">
			{Loading ? (
				<LoadLogo />
			) : (
				Entries.map((Entry, key) => {
					return (
						<div
							className="w-80 flex flex-col align-center margin-xthin bor-black-thin col-white black-hex-bg bor-silver-thin radius-25p"
							key={key}
						>
							<p>{Entry.name}</p>
						</div>
					);
				})
			)}
		</div>
	);
}

export default PokeCards;
