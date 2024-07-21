import type { PageLoad } from '../$types';

export const load: PageLoad = async () => {
	return {
		categories: [
			{
				id: 1,
				name: 'Cooking',
				articles: [
					{
						id: 1,
						title: 'How to make Chocolate Cake in 5 ways',
						description:
							'Morbi vitae hendrerit eros. Proin feugiat elit eget tellus venenatis, ut placerat diam porta. Sed elementum nulla non tellus posuere, sed consectetur tellus condimentum. Ut ultricies pharetra ipsum et tincidunt. Quisque placerat eu arcu in lacinia. Quisque suscipit efficitur eros vitae vehicula. Praesent id ligula hendrerit, vehicula tortor sed, eleifend tellus. Nunc aliquet massa in accumsan consectetur. Aenean mattis quis tortor ac consectetur. Nam tempor nisl lorem, vitae vestibulum sem pretium nec. Phasellus dignissim in metus eu gravida. Pellentesque sed augue nec quam luctus rutrum quis sed ipsum. Praesent sit amet mattis tortor, a laoreet turpis. Praesent nisl metus, maximus.'
					},
					{
						id: 2,
						title: 'Make Cheesecake with Strawberry in easy way',
						description:
							'Morbi vitae hendrerit eros. Proin feugiat elit eget tellus venenatis, ut placerat diam porta. Sed elementum nulla non tellus posuere, sed consectetur tellus condimentum. Ut ultricies pharetra ipsum et tincidunt. Quisque placerat eu arcu in lacinia. Quisque suscipit efficitur eros vitae vehicula. Praesent id ligula hendrerit, vehicula tortor sed, eleifend tellus. Nunc aliquet massa in accumsan consectetur. Aenean mattis quis tortor ac consectetur. Nam tempor nisl lorem, vitae vestibulum sem pretium nec. Phasellus dignissim in metus eu gravida. Pellentesque sed augue nec quam luctus rutrum quis sed ipsum. Praesent sit amet mattis tortor, a laoreet turpis. Praesent nisl metus, maximus.'
					},
					{
						id: 3,
						title: 'You could mixed up Chocolate and Cheesecake',
						description:
							'Morbi vitae hendrerit eros. Proin feugiat elit eget tellus venenatis, ut placerat diam porta. Sed elementum nulla non tellus posuere, sed consectetur tellus condimentum. Ut ultricies pharetra ipsum et tincidunt. Quisque placerat eu arcu in lacinia. Quisque suscipit efficitur eros vitae vehicula. Praesent id ligula hendrerit, vehicula tortor sed, eleifend tellus. Nunc aliquet massa in accumsan consectetur. Aenean mattis quis tortor ac consectetur. Nam tempor nisl lorem, vitae vestibulum sem pretium nec. Phasellus dignissim in metus eu gravida. Pellentesque sed augue nec quam luctus rutrum quis sed ipsum. Praesent sit amet mattis tortor, a laoreet turpis. Praesent nisl metus, maximus.'
					}
				]
			},
			{
				id: 2,
				name: 'Productivity',
				articles: [
					{
						id: 1,
						title: "Here's some tips how to manage your cake recipe better",
						description:
							'Morbi vitae hendrerit eros. Proin feugiat elit eget tellus venenatis, ut placerat diam porta. Sed elementum nulla non tellus posuere, sed consectetur tellus condimentum. Ut ultricies pharetra ipsum et tincidunt. Quisque placerat eu arcu in lacinia. Quisque suscipit efficitur eros vitae vehicula. Praesent id ligula hendrerit, vehicula tortor sed, eleifend tellus. Nunc aliquet massa in accumsan consectetur. Aenean mattis quis tortor ac consectetur. Nam tempor nisl lorem, vitae vestibulum sem pretium nec. Phasellus dignissim in metus eu gravida. Pellentesque sed augue nec quam luctus rutrum quis sed ipsum. Praesent sit amet mattis tortor, a laoreet turpis. Praesent nisl metus, maximus.'
					},
					{
						id: 2,
						title: 'How to make your cake more attractive',
						description:
							'Morbi vitae hendrerit eros. Proin feugiat elit eget tellus venenatis, ut placerat diam porta. Sed elementum nulla non tellus posuere, sed consectetur tellus condimentum. Ut ultricies pharetra ipsum et tincidunt. Quisque placerat eu arcu in lacinia. Quisque suscipit efficitur eros vitae vehicula. Praesent id ligula hendrerit, vehicula tortor sed, eleifend tellus. Nunc aliquet massa in accumsan consectetur. Aenean mattis quis tortor ac consectetur. Nam tempor nisl lorem, vitae vestibulum sem pretium nec. Phasellus dignissim in metus eu gravida. Pellentesque sed augue nec quam luctus rutrum quis sed ipsum. Praesent sit amet mattis tortor, a laoreet turpis. Praesent nisl metus, maximus.'
					},
					{
						id: 3,
						title: "Fail to make a cake? Here's some tips that makes you easily make a pretty cake",
						description:
							'Morbi vitae hendrerit eros. Proin feugiat elit eget tellus venenatis, ut placerat diam porta. Sed elementum nulla non tellus posuere, sed consectetur tellus condimentum. Ut ultricies pharetra ipsum et tincidunt. Quisque placerat eu arcu in lacinia. Quisque suscipit efficitur eros vitae vehicula. Praesent id ligula hendrerit, vehicula tortor sed, eleifend tellus. Nunc aliquet massa in accumsan consectetur. Aenean mattis quis tortor ac consectetur. Nam tempor nisl lorem, vitae vestibulum sem pretium nec. Phasellus dignissim in metus eu gravida. Pellentesque sed augue nec quam luctus rutrum quis sed ipsum. Praesent sit amet mattis tortor, a laoreet turpis. Praesent nisl metus, maximus.'
					}
				]
			},
			{
				id: 3,
				name: 'CookBook Reviews',
				articles: [
					{
						id: 1,
						title: "7 Cookbooks that change the way you bake a cake",
						description:
							'Morbi vitae hendrerit eros. Proin feugiat elit eget tellus venenatis, ut placerat diam porta. Sed elementum nulla non tellus posuere, sed consectetur tellus condimentum. Ut ultricies pharetra ipsum et tincidunt. Quisque placerat eu arcu in lacinia. Quisque suscipit efficitur eros vitae vehicula. Praesent id ligula hendrerit, vehicula tortor sed, eleifend tellus. Nunc aliquet massa in accumsan consectetur. Aenean mattis quis tortor ac consectetur. Nam tempor nisl lorem, vitae vestibulum sem pretium nec. Phasellus dignissim in metus eu gravida. Pellentesque sed augue nec quam luctus rutrum quis sed ipsum. Praesent sit amet mattis tortor, a laoreet turpis. Praesent nisl metus, maximus.'
					},
					{
						id: 2,
						title: 'These are 5 cookbooks that really great for you to read in 2024',
						description:
							'Morbi vitae hendrerit eros. Proin feugiat elit eget tellus venenatis, ut placerat diam porta. Sed elementum nulla non tellus posuere, sed consectetur tellus condimentum. Ut ultricies pharetra ipsum et tincidunt. Quisque placerat eu arcu in lacinia. Quisque suscipit efficitur eros vitae vehicula. Praesent id ligula hendrerit, vehicula tortor sed, eleifend tellus. Nunc aliquet massa in accumsan consectetur. Aenean mattis quis tortor ac consectetur. Nam tempor nisl lorem, vitae vestibulum sem pretium nec. Phasellus dignissim in metus eu gravida. Pellentesque sed augue nec quam luctus rutrum quis sed ipsum. Praesent sit amet mattis tortor, a laoreet turpis. Praesent nisl metus, maximus.'
					},
					{
						id: 3,
						title: "My top three cookbooks you should read before you start baking",
						description:
							'Morbi vitae hendrerit eros. Proin feugiat elit eget tellus venenatis, ut placerat diam porta. Sed elementum nulla non tellus posuere, sed consectetur tellus condimentum. Ut ultricies pharetra ipsum et tincidunt. Quisque placerat eu arcu in lacinia. Quisque suscipit efficitur eros vitae vehicula. Praesent id ligula hendrerit, vehicula tortor sed, eleifend tellus. Nunc aliquet massa in accumsan consectetur. Aenean mattis quis tortor ac consectetur. Nam tempor nisl lorem, vitae vestibulum sem pretium nec. Phasellus dignissim in metus eu gravida. Pellentesque sed augue nec quam luctus rutrum quis sed ipsum. Praesent sit amet mattis tortor, a laoreet turpis. Praesent nisl metus, maximus.'
					}
				]
			}
		]
	};
};
