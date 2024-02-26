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
    clock: FaBell,
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
    return this.icons[name](props);
  };
}

const iconService = new IconService();
export { iconService };
