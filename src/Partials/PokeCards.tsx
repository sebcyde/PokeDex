import React, { useEffect, useState } from 'react';
import { PokeCardSorter } from './SortingAlgorithms/PokecardSorter';
import Axios from 'axios';
import LoadLogo from './LoadLogo';
import PokemonDetails from './PokeCards/PokemonDetails';

type Props = { sort: string };

type Pokemon = {
	name: string;
	url: string;
};

type PokemonDetail = {
	id: number;
	name: string;
	abilities: Object[];
	types: Object[];
	height: number;
	weight: number;
	sprites: {
		back_default: string;
		back_female: string;
		back_shiny: string;
		back_shiny_female: string;
		front_default: string;
		front_female: string;
		front_shiny: string;
		front_shiny_female: string;
	};
};

function PokeCards({ sort }: Props) {
	const [Loading, setLoading] = useState<boolean>(true);
	const [Entries, setEntries] = useState<PokemonDetail[]>([]);
	const [SortedPokemon, setSortedPokemon] = useState<JSX.Element[]>([]);
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
				setEntries(result);
				setSortedPokemon(
					Entries.map((Entry: PokemonDetail, i: number) => {
						return PokemonDetails(Entry, i);
					})
				);
			})
			.then(() => {
				setLoading(false);
				console.log(Entries);
			});
	};

	useEffect(() => {
		setLoading(true);
		APICall(URL, sort);
	}, [sort]);

	return (
		<div className="w-100 h-100 flex flex-col align-center margin-thin">
			{Loading ? <LoadLogo /> : SortedPokemon}
		</div>
	);
}

export default PokeCards;
