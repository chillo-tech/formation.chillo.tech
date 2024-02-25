import { FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";

const commonSize = 40;

const FooterIcons = {
  "linkedin-filled-square": <FaLinkedin size={commonSize} />,
  "instagram-square": <FaInstagram size={commonSize} />,
  "facebook-circle-filled": <FaFacebook size={commonSize} />,
  "mail-rounded": <CiMail size={commonSize} />,
};

export { FooterIcons };
