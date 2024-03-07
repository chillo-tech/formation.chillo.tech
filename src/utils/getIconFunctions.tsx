import { IconBaseProps } from "react-icons";
import {
  BsFileCode,
  BsFillFileTextFill,
  BsFillPatchCheckFill,
  BsLaptop,
} from "react-icons/bs";
import { FaClock, FaInfinity, FaTrophy } from "react-icons/fa6";
import { HiUsers } from "react-icons/hi2";
import { IoStatsChartSharp } from "react-icons/io5";
import { MdMenuBook, MdOndemandVideo, MdVideoLibrary } from "react-icons/md";

const getIconForOptions = (iconName: string) => {
  const iconProps: IconBaseProps = {
    size: 17,
  };
  switch (iconName) {
    case "menu-book":
      return <MdMenuBook {...iconProps} />;
    case "file-text":
      return <BsFillFileTextFill {...iconProps} />;
    case "check":
      return <BsFillPatchCheckFill {...iconProps} />;
    case "video":
      return <MdVideoLibrary {...iconProps} />;
    case "video-demo":
      return <MdOndemandVideo {...iconProps} />;
    case "laptop":
      return <BsLaptop {...iconProps} />;
    case "community":
      return <HiUsers {...iconProps} />;
    case "cloud-download":
      return <FaInfinity {...iconProps} />;
    case "infinity":
      return <BsLaptop {...iconProps} />;
    case "clock":
      return <FaClock {...iconProps} />;
    case "trophy":
      return <FaTrophy {...iconProps} />;
    case "code":
      return <BsFileCode {...iconProps} />;
    case "stats":
      return <IoStatsChartSharp {...iconProps} />;
    default:
      return <MdMenuBook {...iconProps} />;
  }
};

export { getIconForOptions };
