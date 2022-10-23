import axios, { AxiosResponse } from 'axios';

export const GetStandardBalls = async () => {
	axios
		.get(
			'https://pokeapi.co/api/v2/item-category/standard-balls/?offset=0&limit=10000000'
		)
		.then((result) => {
			console.log(result.data);
			// result.data.results.forEach((result: InitialItem, index: number) => {
			// 	axios.get(result.url).then((ItemData) => {
			// 		RawItems.push({
			// 			name: result.name,
			// 			url: result.url,
			// 			data: ItemData.data,
			// 		});
			// 	});
			// });
		});
};
