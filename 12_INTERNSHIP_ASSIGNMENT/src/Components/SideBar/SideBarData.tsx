import { CiSettings } from "react-icons/ci";
import { FaHome } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";

export const SideBarData = [
   {
     title : 'Home ',
     Icon: <FaHome size={35}/>  ,
     path: "#home"
   },
   {
    title : 'Services',
    Icon: <CiSettings size={35}/> ,
    path: "#Services"
  }, 
  {
    title : 'About',
    Icon: <FcAbout size={35}/> ,
    path: "#about"
  },
]