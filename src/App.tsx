import './Themes/Base.scss';
import React, { useEffect, useState } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import LoadingScreen from './Pages/LoadingScreen';
import PokeDex from './Pages/PokeDex';
import Dashboard from './Pages/Dashboard';
import Favourites from './Pages/Favourites';
import Settings from './Pages/Settings';
import Items from './Pages/Items';
import Machines from './Pages/Machines';
import Moves from './Pages/Moves';
import Abilities from './Pages/Abilities';

function App() {
	const [Loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 3000);
	}, []);

	return (
		<div className="App">
			{Loading ? (
				<LoadingScreen />
			) : (
				<Routes>
					<Route path="" element={<Dashboard />} />
					<Route path="pokedex" element={<PokeDex />} />
					<Route path="abilities" element={<Abilities />} />
					<Route path="favourites" element={<Favourites />} />
					<Route path="items" element={<Items />} />
					<Route path="machines" element={<Machines />} />
					<Route path="moves" element={<Moves />} />
					<Route path="settings" element={<Settings />} />
				</Routes>
			)}
		</div>
	);
}

export default App;
