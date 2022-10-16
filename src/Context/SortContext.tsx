import React, { createContext } from 'react';

type ContextType = {
	SortType: string;
};
export const SortContext = createContext<ContextType>({
	SortType: '',
});

// export const SortContext = createContext<ContextType>(['', () => { }]);
// export const useSort = () => useContext(SortContext);

// export const SortProvider = ({ children }: any) => {
// 	const [Sort, setSort] = useState('Initial Value');

// 	return (
// 		<SortContext.Provider value={[Sort, setSort]}>
// 			{children}
// 		</SortContext.Provider>
// 	);
// };
