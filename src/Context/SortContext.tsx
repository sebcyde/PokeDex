import React, { createContext } from 'react';

type ContextType = {
	SortType: string;
};
export const SortContext = createContext<ContextType>({
	SortType: '',
});
