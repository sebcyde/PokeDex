import React, { useEffect, useState } from 'react';
import Axios from 'axios';

type Props = { sort: string };

type Pokemon = {
	name: string;
	url: string;
};

function PokeCards({ sort }: Props) {
	const [Entries, setEntries] = useState<Pokemon[]>([]);

	useEffect(() => {
		Axios.get('https://pokeapi.co/api/v2/pokemon?limit=200')
			.then((response) => {
				let Pokemon = response.data.results;
				setEntries(Array.from(Pokemon));
			})
			.then(() => {
				console.log(Entries);
			});
	}, []);

	useEffect(() => {
		Axios.get('https://pokeapi.co/api/v2/pokemon?limit=200').then(
			(response) => {
				let Pokemon = response.data.results;
				setEntries(Array.from(Pokemon));
				console.log(Entries);
			}
		);
	}, [sort]);

	const NextPage = (lastentry: number) => {};

	const PrevPage = (firstentry: number) => {};

	return (
		<div className="w-100 h-100 flex flex-col align-center">
			<h3>{sort}</h3>
			{Entries.map((Entry) => {
				return (
					<div className="w-80 flex flex-col align-center margin-xthin bor-black-thin">
						<p>{Entry.name}</p>
					</div>
				);
			})}
		</div>
	);
}

export default PokeCards;
