// place files you want to import through the `$lib` alias in this folder.
import { changeThemeToggle } from './services/animation';
import NavBar from './components/home/NavBar.svelte';
import HeaderSection from './components/home/HeaderSection.svelte';
import WelcomeSection from './components/home/WelcomeSection.svelte';
import CakeDungeonLogo from './images/Cake Dungeon-Logo.png';
import HeaderBgPicture from './images/Cakes - Header BG Low Brightness.jpg';
import WelcomeSectionPicture from './images/Cake Welcome Section Picture.jpg';

export {
	changeThemeToggle,
	CakeDungeonLogo,
	HeaderBgPicture,
	WelcomeSectionPicture,
	NavBar,
	HeaderSection,
	WelcomeSection
};
