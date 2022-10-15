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

export const PokeCardSorter = (Data: Pokemon[], sortType: string) => {
	let AllPokemon: Pokemon[] = [];
	let AllPokemonDetails: DetailedPokemon[] = [];
	let SortedCards: Pokemon[] = [];

	// Detailed Pull
	const Populate = async (Data: Pokemon[]) => {
		Data.forEach((object: Pokemon) => {
			AllPokemon.push(object);
			Axios.get(object.url).then((response: any) => {
				AllPokemonDetails.push(response.data);
			});
		});
	};

	Populate(Data).then(() => {
		if (sortType === 'A-Z') {
			AllPokemon.sort(compareAZ);
		} else if (sortType === 'Z-A') {
			AllPokemon.sort(compareZA);
		} else if (sortType === 'ID1') {
			AllPokemon.sort(compareIDLH);
		} else if (sortType === 'ID2') {
			AllPokemon.sort(compareIDHL).reverse();
		}
		return AllPokemon;
	});

	return AllPokemon;
};
