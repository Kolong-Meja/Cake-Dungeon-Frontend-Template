import type { PageLoad } from './$types';

export const load: PageLoad = async ({ parent, data }) => {
	await parent();
    
	const { page_server_data } = data;

	return {
        page_server_data,
    };
};
