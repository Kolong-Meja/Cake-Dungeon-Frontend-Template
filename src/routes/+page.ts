import type { PageLoad } from './$types';
import {
	ChocolateCakePicture,
	CookiesPicture,
	IceCreamPicture,
	ChocolateCakeAnotherPicture,
	CheeseCakePicture,
	CarrotCakePicture,
	MousseCakePicture,
	RedVelvetCakePicture,
	SpongeCakePicture,
	StrawberryCheesecakePicture,
	CranberryCharlotteCakePicture,
	StrawberryCharlotteCakePicture,
} from '$lib';

export const load: PageLoad = async () => {
	const categories = [
		{
			id: 1,
			name: 'cakes',
			title: 'Cakes',
			image: ChocolateCakePicture
		},
		{
			id: 2,
			name: 'cookies',
			title: 'Cookies',
			image: CookiesPicture
		},
		{
			id: 3,
			name: 'ice-cream',
			title: 'Ice Cream',
			image: IceCreamPicture
		}
	];

	const cakes = [
		{
			id: 1,
			name: 'Chocolate Cake',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dapibus sapien velit, vel finibus nisl malesuada eu. Cras fringilla, purus sit amet luctus pretium, enim erat euismod elit, quis dignissim ligula nibh quis libero. Vivamus pretium interdum enim eget tempus. Mauris porta consectetur hendrerit. Mauris mollis id odio at pellentesque. Donec at elit id diam mollis tempor et vitae quam. Quisque sollicitudin risus diam. Ut posuere, leo id tincidunt pulvinar, erat diam elementum dolor, vel convallis erat nisi eu nibh. Ut in velit mollis, maximus massa imperdiet, euismod lorem. Donec tristique maximus quam sit amet tristique. Integer pellentesque ligula eget lacus malesuada, at dapibus eros sagittis. Fusce vitae arcu eget nibh congue suscipit. Pellentesque ut maximus ante. Cras condimentum facilisis turpis ac viverra. Vivamus sollicitudin dolor ut nunc varius sagittis.',
			price: 315000.0,
			stock: 100,
			size: 'small, medium, large',
			weight: 0.35,
			category: 'cakes',
			status: 'On Sale',
			image: ChocolateCakeAnotherPicture
		},
		{
			id: 2,
			name: 'Carrot Cake',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dapibus sapien velit, vel finibus nisl malesuada eu. Cras fringilla, purus sit amet luctus pretium, enim erat euismod elit, quis dignissim ligula nibh quis libero. Vivamus pretium interdum enim eget tempus. Mauris porta consectetur hendrerit. Mauris mollis id odio at pellentesque. Donec at elit id diam mollis tempor et vitae quam. Quisque sollicitudin risus diam. Ut posuere, leo id tincidunt pulvinar, erat diam elementum dolor, vel convallis erat nisi eu nibh. Ut in velit mollis, maximus massa imperdiet, euismod lorem. Donec tristique maximus quam sit amet tristique. Integer pellentesque ligula eget lacus malesuada, at dapibus eros sagittis. Fusce vitae arcu eget nibh congue suscipit. Pellentesque ut maximus ante. Cras condimentum facilisis turpis ac viverra. Vivamus sollicitudin dolor ut nunc varius sagittis.',
			price: 285000.0,
			stock: 100,
			size: 'small, medium, large',
			weight: 0.37,
			category: 'cakes',
			status: 'On Sale',
			image: CarrotCakePicture
		},
		{
			id: 3,
			name: 'Blueberry Cheesecake',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dapibus sapien velit, vel finibus nisl malesuada eu. Cras fringilla, purus sit amet luctus pretium, enim erat euismod elit, quis dignissim ligula nibh quis libero. Vivamus pretium interdum enim eget tempus. Mauris porta consectetur hendrerit. Mauris mollis id odio at pellentesque. Donec at elit id diam mollis tempor et vitae quam. Quisque sollicitudin risus diam. Ut posuere, leo id tincidunt pulvinar, erat diam elementum dolor, vel convallis erat nisi eu nibh. Ut in velit mollis, maximus massa imperdiet, euismod lorem. Donec tristique maximus quam sit amet tristique. Integer pellentesque ligula eget lacus malesuada, at dapibus eros sagittis. Fusce vitae arcu eget nibh congue suscipit. Pellentesque ut maximus ante. Cras condimentum facilisis turpis ac viverra. Vivamus sollicitudin dolor ut nunc varius sagittis.',
			price: 340000.0,
			stock: 100,
			size: 'small, medium, large',
			weight: 0.33,
			category: 'cakes',
			status: 'On Sale',
			image: CheeseCakePicture
		},
		{
			id: 4,
			name: 'Mousse Cake',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dapibus sapien velit, vel finibus nisl malesuada eu. Cras fringilla, purus sit amet luctus pretium, enim erat euismod elit, quis dignissim ligula nibh quis libero. Vivamus pretium interdum enim eget tempus. Mauris porta consectetur hendrerit. Mauris mollis id odio at pellentesque. Donec at elit id diam mollis tempor et vitae quam. Quisque sollicitudin risus diam. Ut posuere, leo id tincidunt pulvinar, erat diam elementum dolor, vel convallis erat nisi eu nibh. Ut in velit mollis, maximus massa imperdiet, euismod lorem. Donec tristique maximus quam sit amet tristique. Integer pellentesque ligula eget lacus malesuada, at dapibus eros sagittis. Fusce vitae arcu eget nibh congue suscipit. Pellentesque ut maximus ante. Cras condimentum facilisis turpis ac viverra. Vivamus sollicitudin dolor ut nunc varius sagittis.',
			price: 290000.0,
			stock: 100,
			size: 'small, medium, large',
			weight: 0.3,
			category: 'cakes',
			status: 'On Sale',
			image: MousseCakePicture
		},
		{
			id: 5,
			name: 'Red Velvet Cake',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dapibus sapien velit, vel finibus nisl malesuada eu. Cras fringilla, purus sit amet luctus pretium, enim erat euismod elit, quis dignissim ligula nibh quis libero. Vivamus pretium interdum enim eget tempus. Mauris porta consectetur hendrerit. Mauris mollis id odio at pellentesque. Donec at elit id diam mollis tempor et vitae quam. Quisque sollicitudin risus diam. Ut posuere, leo id tincidunt pulvinar, erat diam elementum dolor, vel convallis erat nisi eu nibh. Ut in velit mollis, maximus massa imperdiet, euismod lorem. Donec tristique maximus quam sit amet tristique. Integer pellentesque ligula eget lacus malesuada, at dapibus eros sagittis. Fusce vitae arcu eget nibh congue suscipit. Pellentesque ut maximus ante. Cras condimentum facilisis turpis ac viverra. Vivamus sollicitudin dolor ut nunc varius sagittis.',
			price: 350000.0,
			stock: 100,
			size: 'small, medium, large',
			weight: 0.35,
			category: 'cakes',
			status: 'On Sale',
			image: RedVelvetCakePicture
		},
		{
			id: 6,
			name: 'Sponge Cake',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dapibus sapien velit, vel finibus nisl malesuada eu. Cras fringilla, purus sit amet luctus pretium, enim erat euismod elit, quis dignissim ligula nibh quis libero. Vivamus pretium interdum enim eget tempus. Mauris porta consectetur hendrerit. Mauris mollis id odio at pellentesque. Donec at elit id diam mollis tempor et vitae quam. Quisque sollicitudin risus diam. Ut posuere, leo id tincidunt pulvinar, erat diam elementum dolor, vel convallis erat nisi eu nibh. Ut in velit mollis, maximus massa imperdiet, euismod lorem. Donec tristique maximus quam sit amet tristique. Integer pellentesque ligula eget lacus malesuada, at dapibus eros sagittis. Fusce vitae arcu eget nibh congue suscipit. Pellentesque ut maximus ante. Cras condimentum facilisis turpis ac viverra. Vivamus sollicitudin dolor ut nunc varius sagittis.',
			price: 280000.0,
			stock: 100,
			size: 'small, medium, large',
			weight: 0.39,
			category: 'cakes',
			status: 'On Sale',
			image: SpongeCakePicture
		},
		{
			id: 7,
			name: 'Strawberry Cheesecake',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dapibus sapien velit, vel finibus nisl malesuada eu. Cras fringilla, purus sit amet luctus pretium, enim erat euismod elit, quis dignissim ligula nibh quis libero. Vivamus pretium interdum enim eget tempus. Mauris porta consectetur hendrerit. Mauris mollis id odio at pellentesque. Donec at elit id diam mollis tempor et vitae quam. Quisque sollicitudin risus diam. Ut posuere, leo id tincidunt pulvinar, erat diam elementum dolor, vel convallis erat nisi eu nibh. Ut in velit mollis, maximus massa imperdiet, euismod lorem. Donec tristique maximus quam sit amet tristique. Integer pellentesque ligula eget lacus malesuada, at dapibus eros sagittis. Fusce vitae arcu eget nibh congue suscipit. Pellentesque ut maximus ante. Cras condimentum facilisis turpis ac viverra. Vivamus sollicitudin dolor ut nunc varius sagittis.',
			price: 320000.0,
			stock: 100,
			size: 'small, medium, large',
			weight: 0.4,
			category: 'cakes',
			status: 'On Sale',
			image: StrawberryCheesecakePicture
		},
		{
			id: 8,
			name: 'Charlotte Cake with Craberries',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dapibus sapien velit, vel finibus nisl malesuada eu. Cras fringilla, purus sit amet luctus pretium, enim erat euismod elit, quis dignissim ligula nibh quis libero. Vivamus pretium interdum enim eget tempus. Mauris porta consectetur hendrerit. Mauris mollis id odio at pellentesque. Donec at elit id diam mollis tempor et vitae quam. Quisque sollicitudin risus diam. Ut posuere, leo id tincidunt pulvinar, erat diam elementum dolor, vel convallis erat nisi eu nibh. Ut in velit mollis, maximus massa imperdiet, euismod lorem. Donec tristique maximus quam sit amet tristique. Integer pellentesque ligula eget lacus malesuada, at dapibus eros sagittis. Fusce vitae arcu eget nibh congue suscipit. Pellentesque ut maximus ante. Cras condimentum facilisis turpis ac viverra. Vivamus sollicitudin dolor ut nunc varius sagittis.',
			price: 300000.0,
			stock: 100,
			size: 'small, medium, large',
			weight: 0.35,
			category: 'cakes',
			status: 'On Sale',
			image: CranberryCharlotteCakePicture
		},
		{
			id: 9,
			name: 'Charlotte Cake with Strawberries',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dapibus sapien velit, vel finibus nisl malesuada eu. Cras fringilla, purus sit amet luctus pretium, enim erat euismod elit, quis dignissim ligula nibh quis libero. Vivamus pretium interdum enim eget tempus. Mauris porta consectetur hendrerit. Mauris mollis id odio at pellentesque. Donec at elit id diam mollis tempor et vitae quam. Quisque sollicitudin risus diam. Ut posuere, leo id tincidunt pulvinar, erat diam elementum dolor, vel convallis erat nisi eu nibh. Ut in velit mollis, maximus massa imperdiet, euismod lorem. Donec tristique maximus quam sit amet tristique. Integer pellentesque ligula eget lacus malesuada, at dapibus eros sagittis. Fusce vitae arcu eget nibh congue suscipit. Pellentesque ut maximus ante. Cras condimentum facilisis turpis ac viverra. Vivamus sollicitudin dolor ut nunc varius sagittis.',
			price: 325000.0,
			stock: 100,
			size: 'small, medium, large',
			weight: 0.38,
			category: 'cakes',
			status: 'On Sale',
			image: StrawberryCharlotteCakePicture
		}
	];

	return { categories, cakes };
};
