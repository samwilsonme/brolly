import _01d_light from '../assets/icons/light/01d.svg';
import _01n_light from '../assets/icons/light/01n.svg';
import _02d_light from '../assets/icons/light/02d.svg';
import _02n_light from '../assets/icons/light/02n.svg';
import _03d_light from '../assets/icons/light/03d.svg';
import _03n_light from '../assets/icons/light/03n.svg';
import _04d_light from '../assets/icons/light/04d.svg';
import _04n_light from '../assets/icons/light/04n.svg';
import _09d_light from '../assets/icons/light/09d.svg';
import _09n_light from '../assets/icons/light/09n.svg';
import _10d_light from '../assets/icons/light/10d.svg';
import _10n_light from '../assets/icons/light/10n.svg';
import _11d_light from '../assets/icons/light/11d.svg';
import _11n_light from '../assets/icons/light/11n.svg';
import _13d_light from '../assets/icons/light/13d.svg';
import _13n_light from '../assets/icons/light/13n.svg';
import _50d_light from '../assets/icons/light/50d.svg';
import _50n_light from '../assets/icons/light/50n.svg';
import umbrella_light from '../assets/icons/light/umbrella.svg';

// Dark theme icons
import _01d_dark from '../assets/icons/dark/01d.svg';
import _01n_dark from '../assets/icons/dark/01n.svg';
import _02d_dark from '../assets/icons/dark/02d.svg';
import _02n_dark from '../assets/icons/dark/02n.svg';
import _03d_dark from '../assets/icons/dark/03d.svg';
import _03n_dark from '../assets/icons/dark/03n.svg';
import _04d_dark from '../assets/icons/dark/04d.svg';
import _04n_dark from '../assets/icons/dark/04n.svg';
import _09d_dark from '../assets/icons/dark/09d.svg';
import _09n_dark from '../assets/icons/dark/09n.svg';
import _10d_dark from '../assets/icons/dark/10d.svg';
import _10n_dark from '../assets/icons/dark/10n.svg';
import _11d_dark from '../assets/icons/dark/11d.svg';
import _11n_dark from '../assets/icons/dark/11n.svg';
import _13d_dark from '../assets/icons/dark/13d.svg';
import _13n_dark from '../assets/icons/dark/13n.svg';
import _50d_dark from '../assets/icons/dark/50d.svg';
import _50n_dark from '../assets/icons/dark/50n.svg';
import umbrella_dark from '../assets/icons/dark/umbrella.svg';

// Icon paths for both light and dark themes
const iconPaths = {
  light: {
    '01d': _01d_light,
    '01n': _01n_light,
    '02d': _02d_light,
    '02n': _02n_light,
    '03d': _03d_light,
    '03n': _03n_light,
    '04d': _04d_light,
    '04n': _04n_light,
    '09d': _09d_light,
    '09n': _09n_light,
    '10d': _10d_light,
    '10n': _10n_light,
    '11d': _11d_light,
    '11n': _11n_light,
    '13d': _13d_light,
    '13n': _13n_light,
    '50d': _50d_light,
    '50n': _50n_light,
    umbrella: umbrella_light,
  },
  dark: {
    '01d': _01d_dark,
    '01n': _01n_dark,
    '02d': _02d_dark,
    '02n': _02n_dark,
    '03d': _03d_dark,
    '03n': _03n_dark,
    '04d': _04d_dark,
    '04n': _04n_dark,
    '09d': _09d_dark,
    '09n': _09n_dark,
    '10d': _10d_dark,
    '10n': _10n_dark,
    '11d': _11d_dark,
    '11n': _11n_dark,
    '13d': _13d_dark,
    '13n': _13n_dark,
    '50d': _50d_dark,
    '50n': _50n_dark,
    umbrella: umbrella_dark,
  }
};

// Get weather icon based on the theme
const getWeatherIcon = (icon, theme = 'light') => {
  if (icon) {
    const iconPath = iconPaths[theme][icon];
    if (iconPath) {
      return iconPath;
    }
  }
  // Default umbrella icon if not found
  return iconPaths[theme].umbrella;
};

export default getWeatherIcon;