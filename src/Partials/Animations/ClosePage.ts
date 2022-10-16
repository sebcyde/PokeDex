import React, { MutableRefObject } from 'react';

const ClosePage = async (
	MenuItem: MutableRefObject<HTMLDivElement | null>,
	MenuItems: React.RefObject<HTMLDivElement>[]
) => {
	let Classes = ['slide-out-right', 'slide-out-left'];
	console.log(MenuItems);

	MenuItems.forEach((item, index: number) => {
		let Item = item.current;
		if (item != MenuItem && Item != null) {
			Item.classList.add(Classes[index % Classes.length]);
		}
		console.log('Break');
		return;
	});
};

export { ClosePage };
