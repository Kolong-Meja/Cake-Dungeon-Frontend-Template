import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	return {
		page_server_data: {
			title: 'About Cake Dungeon Online Store',
			content:
				'Cake Dungeon Online Store was formed in 2024 by combining sophisticated technological elements that are easily accessible to the general public. We innovated by creating an online shop site that sells various kinds of cakes and desserts that are unique and can be consumed by all levels of society. We also provide the best quality and prices for you for the cakes and desserts that we provide. Not only that, we also provide several articles on how to make cakes and desserts easily which we provide on this platform, for example if you want to make one of your favorite cakes or desserts from our online shop from home. So, what are you waiting for, enjoy our cakes and desserts while we develop and provide the best service to you.'
		}
	};
};
