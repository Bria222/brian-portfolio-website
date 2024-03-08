import { FaAngellist, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const socialLinks = [
  {
    title: "Twitter",
    href: "https://twitter.com/bree47632965",
    icon: <FaTwitter />,
  },
  {
    title: "Github",
    href: "https://github.com/Bria222",
    icon: <FaGithub />,
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/brian-nyachae/",
    icon: <FaLinkedinIn />,
  },
  {
    title: "AngelList",
    href: "https://angel.co/u/brian-nyachae",
    icon: <FaAngellist />,
  },
  {
    title: "Gmail",
    href: "mailto:techconsultants.bree@gmail.com",
    icon: <SiGmail />,
  },
];
export default socialLinks;
export type socialLinksType = typeof socialLinks;

