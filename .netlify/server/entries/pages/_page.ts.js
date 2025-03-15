import { B as BirthdayCake, C as ChocolateCake, a as CarrotCake, b as CheeseCake, M as MousseCake, R as RedVelvetCake, L as LemonSpongeCake, A as AppleCake, c as BananaCake, d as BlackForestCake } from "../../chunks/Red Velvet Cake.js";
const Cookies = "/_app/immutable/assets/Cookies.kXlxkXUr.jpg";
const IceCream = "/_app/immutable/assets/Ice%20Cream.CtyQLLe2.jpg";
const load = async () => {
  const categories = [
    {
      id: 1,
      name: "cakes",
      title: "Cakes",
      image: BirthdayCake
    },
    {
      id: 2,
      name: "cookies",
      title: "Cookies",
      image: Cookies
    },
    {
      id: 3,
      name: "ice-cream",
      title: "Ice Cream",
      image: IceCream
    }
  ];
  const cakes = [
    {
      id: 1,
      name: "Chocolate Cake",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dapibus sapien velit, vel finibus nisl malesuada eu. Cras fringilla, purus sit amet luctus pretium, enim erat euismod elit, quis dignissim ligula nibh quis libero. Vivamus pretium interdum enim eget tempus. Mauris porta consectetur hendrerit. Mauris mollis id odio at pellentesque. Donec at elit id diam mollis tempor et vitae quam. Quisque sollicitudin risus diam. Ut posuere, leo id tincidunt pulvinar, erat diam elementum dolor, vel convallis erat nisi eu nibh. Ut in velit mollis, maximus massa imperdiet, euismod lorem. Donec tristique maximus quam sit amet tristique. Integer pellentesque ligula eget lacus malesuada, at dapibus eros sagittis. Fusce vitae arcu eget nibh congue suscipit. Pellentesque ut maximus ante. Cras condimentum facilisis turpis ac viverra. Vivamus sollicitudin dolor ut nunc varius sagittis.",
      price: 315e3,
      stock: 100,
      size: "small, medium, large",
      weight: 0.35,
      category: "cakes",
      status: "On Sale",
      image: ChocolateCake
    },
    {
      id: 2,
      name: "Carrot Cake",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dapibus sapien velit, vel finibus nisl malesuada eu. Cras fringilla, purus sit amet luctus pretium, enim erat euismod elit, quis dignissim ligula nibh quis libero. Vivamus pretium interdum enim eget tempus. Mauris porta consectetur hendrerit. Mauris mollis id odio at pellentesque. Donec at elit id diam mollis tempor et vitae quam. Quisque sollicitudin risus diam. Ut posuere, leo id tincidunt pulvinar, erat diam elementum dolor, vel convallis erat nisi eu nibh. Ut in velit mollis, maximus massa imperdiet, euismod lorem. Donec tristique maximus quam sit amet tristique. Integer pellentesque ligula eget lacus malesuada, at dapibus eros sagittis. Fusce vitae arcu eget nibh congue suscipit. Pellentesque ut maximus ante. Cras condimentum facilisis turpis ac viverra. Vivamus sollicitudin dolor ut nunc varius sagittis.",
      price: 285e3,
      stock: 100,
      size: "small, medium, large",
      weight: 0.37,
      category: "cakes",
      status: "On Sale",
      image: CarrotCake
    },
    {
      id: 3,
      name: "Cheesecake",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dapibus sapien velit, vel finibus nisl malesuada eu. Cras fringilla, purus sit amet luctus pretium, enim erat euismod elit, quis dignissim ligula nibh quis libero. Vivamus pretium interdum enim eget tempus. Mauris porta consectetur hendrerit. Mauris mollis id odio at pellentesque. Donec at elit id diam mollis tempor et vitae quam. Quisque sollicitudin risus diam. Ut posuere, leo id tincidunt pulvinar, erat diam elementum dolor, vel convallis erat nisi eu nibh. Ut in velit mollis, maximus massa imperdiet, euismod lorem. Donec tristique maximus quam sit amet tristique. Integer pellentesque ligula eget lacus malesuada, at dapibus eros sagittis. Fusce vitae arcu eget nibh congue suscipit. Pellentesque ut maximus ante. Cras condimentum facilisis turpis ac viverra. Vivamus sollicitudin dolor ut nunc varius sagittis.",
      price: 34e4,
      stock: 100,
      size: "small, medium, large",
      weight: 0.33,
      category: "cakes",
      status: "On Sale",
      image: CheeseCake
    },
    {
      id: 4,
      name: "Mousse Cake",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dapibus sapien velit, vel finibus nisl malesuada eu. Cras fringilla, purus sit amet luctus pretium, enim erat euismod elit, quis dignissim ligula nibh quis libero. Vivamus pretium interdum enim eget tempus. Mauris porta consectetur hendrerit. Mauris mollis id odio at pellentesque. Donec at elit id diam mollis tempor et vitae quam. Quisque sollicitudin risus diam. Ut posuere, leo id tincidunt pulvinar, erat diam elementum dolor, vel convallis erat nisi eu nibh. Ut in velit mollis, maximus massa imperdiet, euismod lorem. Donec tristique maximus quam sit amet tristique. Integer pellentesque ligula eget lacus malesuada, at dapibus eros sagittis. Fusce vitae arcu eget nibh congue suscipit. Pellentesque ut maximus ante. Cras condimentum facilisis turpis ac viverra. Vivamus sollicitudin dolor ut nunc varius sagittis.",
      price: 29e4,
      stock: 100,
      size: "small, medium, large",
      weight: 0.3,
      category: "cakes",
      status: "On Sale",
      image: MousseCake
    },
    {
      id: 5,
      name: "Red Velvet Cake",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dapibus sapien velit, vel finibus nisl malesuada eu. Cras fringilla, purus sit amet luctus pretium, enim erat euismod elit, quis dignissim ligula nibh quis libero. Vivamus pretium interdum enim eget tempus. Mauris porta consectetur hendrerit. Mauris mollis id odio at pellentesque. Donec at elit id diam mollis tempor et vitae quam. Quisque sollicitudin risus diam. Ut posuere, leo id tincidunt pulvinar, erat diam elementum dolor, vel convallis erat nisi eu nibh. Ut in velit mollis, maximus massa imperdiet, euismod lorem. Donec tristique maximus quam sit amet tristique. Integer pellentesque ligula eget lacus malesuada, at dapibus eros sagittis. Fusce vitae arcu eget nibh congue suscipit. Pellentesque ut maximus ante. Cras condimentum facilisis turpis ac viverra. Vivamus sollicitudin dolor ut nunc varius sagittis.",
      price: 35e4,
      stock: 100,
      size: "small, medium, large",
      weight: 0.35,
      category: "cakes",
      status: "On Sale",
      image: RedVelvetCake
    },
    {
      id: 6,
      name: "Lemon Sponge Cake",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dapibus sapien velit, vel finibus nisl malesuada eu. Cras fringilla, purus sit amet luctus pretium, enim erat euismod elit, quis dignissim ligula nibh quis libero. Vivamus pretium interdum enim eget tempus. Mauris porta consectetur hendrerit. Mauris mollis id odio at pellentesque. Donec at elit id diam mollis tempor et vitae quam. Quisque sollicitudin risus diam. Ut posuere, leo id tincidunt pulvinar, erat diam elementum dolor, vel convallis erat nisi eu nibh. Ut in velit mollis, maximus massa imperdiet, euismod lorem. Donec tristique maximus quam sit amet tristique. Integer pellentesque ligula eget lacus malesuada, at dapibus eros sagittis. Fusce vitae arcu eget nibh congue suscipit. Pellentesque ut maximus ante. Cras condimentum facilisis turpis ac viverra. Vivamus sollicitudin dolor ut nunc varius sagittis.",
      price: 28e4,
      stock: 100,
      size: "small, medium, large",
      weight: 0.39,
      category: "cakes",
      status: "On Sale",
      image: LemonSpongeCake
    },
    {
      id: 7,
      name: "Apple Cake",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dapibus sapien velit, vel finibus nisl malesuada eu. Cras fringilla, purus sit amet luctus pretium, enim erat euismod elit, quis dignissim ligula nibh quis libero. Vivamus pretium interdum enim eget tempus. Mauris porta consectetur hendrerit. Mauris mollis id odio at pellentesque. Donec at elit id diam mollis tempor et vitae quam. Quisque sollicitudin risus diam. Ut posuere, leo id tincidunt pulvinar, erat diam elementum dolor, vel convallis erat nisi eu nibh. Ut in velit mollis, maximus massa imperdiet, euismod lorem. Donec tristique maximus quam sit amet tristique. Integer pellentesque ligula eget lacus malesuada, at dapibus eros sagittis. Fusce vitae arcu eget nibh congue suscipit. Pellentesque ut maximus ante. Cras condimentum facilisis turpis ac viverra. Vivamus sollicitudin dolor ut nunc varius sagittis.",
      price: 32e4,
      stock: 100,
      size: "small, medium, large",
      weight: 0.4,
      category: "cakes",
      status: "On Sale",
      image: AppleCake
    },
    {
      id: 8,
      name: "Banana Cake",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dapibus sapien velit, vel finibus nisl malesuada eu. Cras fringilla, purus sit amet luctus pretium, enim erat euismod elit, quis dignissim ligula nibh quis libero. Vivamus pretium interdum enim eget tempus. Mauris porta consectetur hendrerit. Mauris mollis id odio at pellentesque. Donec at elit id diam mollis tempor et vitae quam. Quisque sollicitudin risus diam. Ut posuere, leo id tincidunt pulvinar, erat diam elementum dolor, vel convallis erat nisi eu nibh. Ut in velit mollis, maximus massa imperdiet, euismod lorem. Donec tristique maximus quam sit amet tristique. Integer pellentesque ligula eget lacus malesuada, at dapibus eros sagittis. Fusce vitae arcu eget nibh congue suscipit. Pellentesque ut maximus ante. Cras condimentum facilisis turpis ac viverra. Vivamus sollicitudin dolor ut nunc varius sagittis.",
      price: 3e5,
      stock: 100,
      size: "small, medium, large",
      weight: 0.35,
      category: "cakes",
      status: "On Sale",
      image: BananaCake
    },
    {
      id: 9,
      name: "Black Forest Cake",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dapibus sapien velit, vel finibus nisl malesuada eu. Cras fringilla, purus sit amet luctus pretium, enim erat euismod elit, quis dignissim ligula nibh quis libero. Vivamus pretium interdum enim eget tempus. Mauris porta consectetur hendrerit. Mauris mollis id odio at pellentesque. Donec at elit id diam mollis tempor et vitae quam. Quisque sollicitudin risus diam. Ut posuere, leo id tincidunt pulvinar, erat diam elementum dolor, vel convallis erat nisi eu nibh. Ut in velit mollis, maximus massa imperdiet, euismod lorem. Donec tristique maximus quam sit amet tristique. Integer pellentesque ligula eget lacus malesuada, at dapibus eros sagittis. Fusce vitae arcu eget nibh congue suscipit. Pellentesque ut maximus ante. Cras condimentum facilisis turpis ac viverra. Vivamus sollicitudin dolor ut nunc varius sagittis.",
      price: 325e3,
      stock: 100,
      size: "small, medium, large",
      weight: 0.38,
      category: "cakes",
      status: "On Sale",
      image: BlackForestCake
    }
  ];
  return { categories, cakes };
};
export {
  load
};
