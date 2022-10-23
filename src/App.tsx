import './Themes/Base.scss';
import React, { useEffect, useState, useContext } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import LoadingScreen from './Pages/LoadingScreen';
import PokeDex from './Pages/PokeDex';
import Dashboard from './Pages/Dashboard';
import Favourites from './Pages/Favourites';
import Settings from './Pages/Settings';
import Items from './Pages/Items';
import Machines from './Pages/Machines';
import Moves from './Pages/Moves';
import Abilities from './Pages/Abilities';
import Logo from './Partials/Logo';
import Footer from './Partials/Footer';
import Navbar from './Partials/Navbar';

function App() {
	const [Loading, setLoading] = useState<boolean>(true);

	const location = useLocation();

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 2000);
	}, []);

	useEffect(() => {
		setLoading(true);
		if (location.pathname != '/') {
			console.log(location.pathname.slice(1));
		} else {
			console.log(location.pathname);
		}
		setTimeout(() => {
			setLoading(false);
		}, 2000);
	}, [location]);

	const Nav =
		(location.pathname != '/' && location.pathname === '/pokedex') ||
		(location.pathname != '/' && location.pathname === '/moves') ||
		(location.pathname != '/' && location.pathname === '/items') ||
		(location.pathname != '/' && location.pathname === '/machines') ? (
			<Navbar />
		) : (
			''
		);

	const logo =
		location.pathname === '/' ||
		'pokedex' ||
		'moves' ||
		'items' ||
		'machines' ||
		'settings' ? (
			<Logo />
		) : (
			''
		);

	return (
		<div className="App">
			{Loading ? (
				<LoadingScreen />
			) : (
				<>
					{logo}
					{Nav}

					<Routes>
						<Route path="/" element={<Dashboard />} />
						<Route path="pokedex" element={<PokeDex />} />
						<Route path="abilities" element={<Abilities />} />
						<Route path="favourites" element={<Favourites />} />
						<Route path="items" element={<Items />} />
						<Route path="machines" element={<Machines />} />
						<Route path="moves" element={<Moves />} />
						<Route path="settings" element={<Settings />} />
					</Routes>

					{location.pathname === '/' ? <Footer /> : ''}
				</>
			)}
		</div>
	);
}

export default App;
