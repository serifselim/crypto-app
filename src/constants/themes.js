import logoDark from '../assets/logoDark.png';
import logoLight from '../assets/logoLight.png';
import { MdLightMode, MdDarkMode } from 'react-icons/md';


const darkTheme = {
    primaryColor: '#D862DA',
    firstBgColor: '#282140',
    secondBgColor: '#393254',
    foregroundColor: '#fff',
    searchBgColor: '#4F125',
    borderColor: 'rgba(255, 255, 255, .2)',
    themeMode: <MdLightMode size={25} />,
    logo: logoDark
};

const lightTheme = {
    primaryColor: '#D862DA',
    firstBgColor: '#fff',
    secondBgColor: '#F5F5F5',
    foregroundColor: '#000',
    searchBgColor: 'EEC2EF',
    borderColor: 'rgba(0, 0, 0, .2)',
    themeMode: <MdDarkMode size={25} />,
    logo: logoLight
};

export {
    lightTheme,
    darkTheme
};