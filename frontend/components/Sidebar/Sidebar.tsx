
import { ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/router";
import SideNavigationButton from "../common/SideNavigationButton/SideNavigationButton";
import SideNavigationIcon from "../common/SideNavigationIcon/SideNavigationIcon";
import { FaCogs, FaFile, FaUser, FaVideo, FaCalendar  } from "react-icons/fa"
import { HiOutlineX, HiOutlineMenu } from "react-icons/hi";
import { IconButton } from "@material-tailwind/react";

export const SideBarList: React.FC<SidebarProps> = ({ sec, handleSection })  => {
  const list = Object.keys(sec).map((key) => {
        const c = sec[key];
        return (
          <SideNavigationButton icon = {c.icon} clicked = {c.clicked} text = {c.title} onClickButton = {handleSection} value = {c.value}/>
        )
  });
  return (
    <div className="w-80 bg-gray-50 h-screen pt-4">
      {list}
    </div>
  )
}

export const SideBarListIcons: React.FC<SidebarProps> = ({ sec, handleSection  }) => {
  const list = Object.keys(sec).map((key) => {
    const c = sec[key];
    return (
      <SideNavigationIcon icon = {c.icon} clicked = {c.clicked} onClickButton = {handleSection} value = {c.value}/>
    )
});
  return (
    <div className="w-20 bg-gray-50 h-screen pt-4">
      {list}
    </div>
  )
}

type secObject = {
  value: string;
  clicked: boolean;
  title: string;
  icon: ReactNode;
}
interface sec {
  [key: string]: any;
}
interface SidebarProps {
  sec: sec;
  handleSection: (name: string)=>void;
}

  const Sidebar: React.FC<SidebarProps> = ({ sec, handleSection }) => {
    const [openNav, setOpenNav] = useState(false);
 
    useEffect(() => {
      window.addEventListener(
        "resize",
        () => window.innerWidth >= 960 && setOpenNav(false)
      );
    }, []);

    const router = useRouter();
    return (
      <div>
        <IconButton
          variant="text"
          color="blue-gray"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <HiOutlineX className="h-6 w-6" strokeWidth={2} />
          ) : (
            <HiOutlineMenu className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
        <div className="hidden lg:flex">
          <SideBarList sec={sec} handleSection={handleSection}/>
        </div>
        {!openNav && <div className="">
          <SideBarListIcons sec={sec} handleSection={handleSection}/>
        </div>}
        {openNav && <div className="">
          <SideBarList sec={sec} handleSection={handleSection}/>
        </div>}
      </div>
    );
  }

  export default Sidebar;