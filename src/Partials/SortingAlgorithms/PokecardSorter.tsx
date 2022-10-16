import Axios from 'axios';
import { compareAZ, compareIDHL, compareIDLH, compareZA } from './Functions';

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

export const PokeCardSorter = (Data: Pokemon[], sortType: string) => {
	let AllPokemonDetails: PokemonDetail[] = [];

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
