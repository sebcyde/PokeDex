import Axios from 'axios';
import { textSpanContainsPosition } from 'typescript';

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

	function compareAZ(a: any, b: any) {
		let fa = a.name.toLowerCase(),
			fb = b.name.toLowerCase();

		if (fa < fb) {
			return -1;
		}
		if (fa > fb) {
			return 1;
		}
		return 0;
	}

	function compareZA(a: any, b: any) {
		let fa = a.name.toLowerCase(),
			fb = b.name.toLowerCase();

		if (fa > fb) {
			return -1;
		}
		if (fa < fb) {
			return 1;
		}
		return 0;
	}

	function compareIDLH(a: any, b: any) {
		return a.id - b.id;
	}

	function compareIDHL(a: any, b: any) {
		return b.id - a.id;
	}

	const RecursiveCall = async (URL: string) => {
		Axios.get(URL).then((response) => {
			let Data = response.data.results;
			Data.forEach((object: Pokemon) => {
				Axios.get(object.url).then((response) => {
					AllPokemonDetails.push(response.data);
				});
			});
		});
	};

	const Populate = async () => {
		await Axios.get('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
			.then((response) => {
				response.data.results.forEach((object: Pokemon) => {
					AllPokemon.push(object);
				});
			})
			.then(() => {
				console.log(AllPokemon);
			});
	};

	Populate().then(() => {
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
