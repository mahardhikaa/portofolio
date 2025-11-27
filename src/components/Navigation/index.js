import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";

import biodata from '../../data/biodata.json';
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
 
function NavList() {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium text-[#C7C7C7] font-bebas tracking-wider"
      >
        <a href="/" className="flex items-center hover:text-blue-500 transition-colors">
          Home
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium text-[#C7C7C7] font-bebas tracking-wider"
      >
        <a href="/About" className="flex items-center hover:text-blue-500 transition-colors">
          About
        </a>
      </Typography>
      <Typography
  as="li"
  variant="small"
  color="blue-gray"
  className="p-1 font-medium text-[#C7C7C7] font-bebas tracking-wider"
>
  <a href="#contact" className="flex items-center hover:text-blue-500 transition-colors scroll-smooth">
    Contact
  </a>
</Typography>

    </ul>
  );
}
 
const Navigation = () => {
  const [openNav, setOpenNav] = React.useState(false);
 
  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);
 
  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
 
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
 
  return (
    <Navbar 
        variant="filled"
        className="max-w-full px-10 py-3 shadow-none border-0 rounded-none !bg-[#0A0A0A] !bg-opacity-100 mb-0"
    >
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5 !text-[#C7C7C7] font-bebas text-[22px] tracking-wider"
        >
          {biodata.name}
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
}

export default Navigation;