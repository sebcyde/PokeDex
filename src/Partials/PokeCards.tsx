import React, { useEffect, useState } from 'react';
import Axios from 'axios';

import { Pagination, Icon } from 'react-materialize';

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
	const [Pages, setPages] = useState<APIPages>({ next: null, previous: null });
	const [Entries, setEntries] = useState<Pokemon[]>([]);
	const [Count, setCount] = useState<number>(0);

	const APICall = async (URL: string) => {
		Axios.get(URL)
			.then((response) => {
				let Pokemon = response.data;
				let RawPages = {
					next: Pokemon.next,
					previous: Pokemon.previous,
				};
				setCount(Pokemon.count);
				setEntries(Array.from(Pokemon.results));
				setPages(RawPages);
			})
			.then(() => {
				console.log(Count);
			});
	};

	// useEffect(() => {
	// 	APICall('https://pokeapi.co/api/v2/pokemon');
	// }, []);

	// useEffect(() => {
	// 	APICall('https://pokeapi.co/api/v2/pokemon');
	// }, []);

	useEffect(() => {
		APICall('https://pokeapi.co/api/v2/pokemon');
	}, [sort]);

	const PaginationController = () => {};

	const NextPage = () => {
		APICall(Pages.next!);
		console.log(Entries);
		console.log(Pages);
		console.log(Count);
	};

	const PrevPage = () => {
		APICall(Pages.previous!);
		console.log(Entries);
		console.log(Pages);
		console.log(Count);
	};

	return (
		<div className="w-100 h-100 flex flex-col align-center">
			{/* <h3>{sort}</h3> */}
			<h4 className="font-15">{Pages.next}</h4>
			<h4 className="font-15">{Pages.previous}</h4>
			<button onClick={NextPage}>next</button>
			<button className="margin-thin" onClick={PrevPage}>
				previous
			</button>
			{Entries.map((Entry, key) => {
				return (
					<div
						className="w-80 flex flex-col align-center margin-xthin bor-black-thin col-white black-hex-bg"
						key={key}
					>
						<p>{Entry.name}</p>
					</div>
				);
			})}
			<Pagination
				activePage={1}
				items={Count / Entries.length}
				leftBtn={<Icon>chevron_left</Icon>}
				rightBtn={<Icon>chevron_right</Icon>}
				// onSelect={(event) => {
				// 	Paginate(event);
				// }}
			/>
		</div>
	);
}

export default PokeCards;
