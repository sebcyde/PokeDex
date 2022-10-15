import Axios from 'axios';
import { compareAZ, compareIDHL, compareIDLH, compareZA } from './Functions';

type Pokemon = {
	name: string;
	url: string;
};

type DetailedPokemon = {
	name: string;
	id: number;
};

export const PokeCardSorter = (sortType: string) => {
	let AllPokemon: Pokemon[] = [];
	let AllPokemonDetails: DetailedPokemon[] = [];
	let SortedCards: Pokemon[] = [];

	// Detailed Pull
	const Populate = async () => {
		await Axios.get(
			'https://pokeapi.co/api/v2/pokemon?limit=1000000&offset=0'
		).then((response) => {
			let Next = response.data.next;
			let Data = response.data.results;
			Data.forEach((object: Pokemon) => {
				AllPokemon.push(object);
				Axios.get(object.url).then((response) => {
					AllPokemonDetails.push(response.data);
				});
			});
		});
	};

	// Standard Pull
	// const Populate = async () => {
	// 	await Axios.get(
	// 		'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0'
	// 	).then((response) => {
	// 		response.data.results.forEach((object: Pokemon) => {
	// 			AllPokemon.push(object);
	// 		});
	// 	});
	// };

	Populate().then(() => {
		console.log('Starting sort.');
		if (sortType === 'A-Z') {
			AllPokemon.sort(compareAZ);
		} else if (sortType === 'Z-A') {
			AllPokemon.sort(compareZA);
		} else if (sortType === 'ID1') {
			AllPokemon.sort(compareIDLH);
		} else if (sortType === 'ID2') {
			AllPokemon.sort(compareIDHL).reverse();
		}
		console.log('Sort complete.');
		return AllPokemon;
	});

	return AllPokemon;
};
