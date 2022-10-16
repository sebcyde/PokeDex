import React, { useContext, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { SortContext } from '../../Context/SortContext';

type Props = {};

const DropdownStyle = {
	backgroundColor: 'transparent',
	color: '#3BD5FF',
	fontFamily: 'Electrolize',
	fontSize: '19px',
	height: 'fit-content',
	border: 'none',
};

function OptionDropdown({}: Props) {
	const [SortType, setSortType] = useState<string>('ID1');
	const DropdownRef = useRef<HTMLSelectElement>(null);
	let Context = useContext(SortContext);
	const location = useLocation();

	const Shuffle = (event: any) => {
		if (event != undefined || null) {
			setSortType(event.target.value);
			Context.SortType = event.target.value;
		}
		console.log(`Context SortType is ${Context.SortType}`);
	};

	return (
		<div className=" w-100 h-fit flex just-center margin-bot-0 ">
			<select
				className="margin-thin w-50 h-30p flex margin-bot-0 slide-down position-relative"
				name="Sort"
				style={DropdownStyle}
				onChange={(event) => {
					Shuffle(event);
				}}
				ref={DropdownRef}
			>
				{location.pathname.slice(1) === 'pokedex' ? (
					<option value="ID1">ID Low to High</option>
				) : null}
				{location.pathname.slice(1) === 'pokedex' ? (
					<option value="ID2">ID High to Low</option>
				) : null}

				<option value="A-Z">A-Z</option>
				<option value="Z-A">Z-A</option>
			</select>
		</div>
	);
}

export default OptionDropdown;
