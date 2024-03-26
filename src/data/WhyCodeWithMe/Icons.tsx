import { IconBaseProps } from "react-icons";
import {
  FaBell,
  FaCheck,
  FaEarthAmericas,
  FaUsers,
  FaVideo,
  FaWheelchair,
} from "react-icons/fa6";

class IconService {
  icons = {
    bell: FaBell,
    videos: FaVideo,
    settings: FaWheelchair,
    world: FaEarthAmericas,
    people: FaUsers,
    check: FaCheck,
  };

  getIcon = (name: keyof typeof this.icons, propsToAdd?: IconBaseProps) => {
    const props: IconBaseProps = {
      size: 27,
      ...propsToAdd,
    };
    if(!this.icons[name]) return null
    return this.icons[name](props);
  };
}

const iconService = new IconService();
export { iconService };
