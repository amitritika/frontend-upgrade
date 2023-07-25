
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import SideNavigationButton from "../common/SideNavigationButton/SideNavigationButton";
import SideNavigationIcon from "../common/SideNavigationIcon/SideNavigationIcon";
import { FaCogs, FaFile, FaUser, FaVideo, FaCalendar  } from "react-icons/fa"
import { HiOutlineX, HiOutlineMenu } from "react-icons/hi";
import { IconButton } from "@material-tailwind/react";

const SideBarList = () => {
  return (
    <div className="w-80 bg-gray-50 h-screen pt-4">
      <SideNavigationButton icon = {<FaCogs />} text = "User Settings" clicked = {false} />
      <SideNavigationButton icon = {<FaCogs />} text = "User Settings" clicked = {false} />
      <SideNavigationButton icon = {<FaCogs />} text = "User Settings" clicked = {false} />
      <SideNavigationButton icon = {<FaCogs />} text = "User Settings" clicked = {false} />
      <SideNavigationButton icon = {<FaCogs />} text = "User Settings" clicked = {false} />
    </div>
  )
}

const SideBarListIcons = () => {
  return (
    <div className="w-20 bg-gray-50 h-screen pt-4">
      <SideNavigationIcon icon = {<FaCogs />} clicked = {false} />
      <SideNavigationIcon icon = {<FaCogs />} clicked = {false} />
      <SideNavigationIcon icon = {<FaCogs />} clicked = {false} />
      <SideNavigationIcon icon = {<FaCogs />} clicked = {false} />
      <SideNavigationIcon icon = {<FaCogs />} clicked = {false} />
    </div>
  )
}

  const Sidebar = () => {
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
          <SideBarList />
        </div>
        {!openNav && <div className="">
          <SideBarListIcons />
        </div>}
        {openNav && <div className="">
          <SideBarList />
        </div>}
      </div>
    );
  }

  export default Sidebar;