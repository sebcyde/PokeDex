import React, { MutableRefObject } from 'react';

const ClosePage = async (
	MenuItem: MutableRefObject<HTMLDivElement | null>,
	MenuItems: React.RefObject<HTMLDivElement>[]
) => {
	console.log(MenuItems);

	await MenuItems.forEach((item, index: number) => {
		if (index % 2 === 0) {
			console.log('even');
		} else {
			console.log('odd');
		}
		return;
	});
};

export { ClosePage };
