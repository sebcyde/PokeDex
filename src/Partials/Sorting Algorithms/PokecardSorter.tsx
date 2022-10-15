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
	let AllPokemonDetails: DetailedPokemon[] = [];

	// Detailed Pull
	const Populate = async (Data: Pokemon[]) => {
		Data.forEach((object: Pokemon) => {
			Axios.get(object.url).then((response: any) => {
				AllPokemonDetails.push(response.data);
			});
		});
	};

	if (sortType === 'A-Z') {
		Data.sort(compareAZ);
		Populate(Data);
	} else if (sortType === 'Z-A') {
		Data.sort(compareZA);
		Populate(Data);
	} else if (sortType === 'ID1') {
		Data.sort(compareIDLH);
		Populate(Data);
	} else if (sortType === 'ID2') {
		Data.sort(compareIDHL).reverse();
		Populate(Data);
	}

	return AllPokemonDetails;
};
