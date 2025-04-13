import _01d from '../assets/icons/01d.svg'
import _01n from '../assets/icons/01n.svg'
import _02d from '../assets/icons/02d.svg'
import _02n from '../assets/icons/02n.svg'
import _03d from '../assets/icons/03d.svg'
import _03n from '../assets/icons/03n.svg'
import _04d from '../assets/icons/04d.svg'
import _04n from '../assets/icons/04n.svg'
import _09d from '../assets/icons/09d.svg'
import _09n from '../assets/icons/09n.svg'
import _10d from '../assets/icons/10d.svg'
import _10n from '../assets/icons/10n.svg'
import _11d from '../assets/icons/11d.svg'
import _11n from '../assets/icons/11n.svg'
import _13d from '../assets/icons/13d.svg'
import _13n from '../assets/icons/13n.svg'
import _50d from '../assets/icons/50d.svg'
import _50n from '../assets/icons/50n.svg'
import umbrella from '../assets/icons/umbrella.svg'

const iconPaths = {
  '01d': _01d,
  '01n': _01n,
  '02d': _02d,
  '02n': _02n,
  '03d': _03d,
  '03n': _03n,
  '04d': _04d,
  '04n': _04n,
  '09d': _09d,
  '09n': _09n,
  '10d': _10d,
  '10n': _10n,
  '11d': _11d,
  '11n': _11n,
  '13d': _13d,
  '13n': _13n,
  '50d': _50d,
  '50n': _50n
};

const getWeatherIcon = (icon) => {
  if (icon) {
    const iconPath = iconPaths[icon];
    if (iconPath) {
      return iconPath;
    }
  }
  // Default icon if the provided icon is not found
  return umbrella;
};

export default getWeatherIcon;