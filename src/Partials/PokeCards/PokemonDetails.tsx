import React from 'react';

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

function PokemonDetails(Pokemon: PokemonDetail, Key: number) {
	return (
		<div
			className="w-80 flex flex-col align-center margin-xthin bor-black-thin col-white black-hex-bg bor-silver-thin radius-25p"
			key={Key}
		>
			<span className="flex">
				<img src={Pokemon.sprites.front_default} className="h-120p margin-0" />
				<span className="flex col">
					<p className="margin-right-thin">{Pokemon.id}.</p>
					<p className="Cap">{Pokemon.name}</p>
				</span>
			</span>
		</div>
	);
}

export default PokemonDetails;
