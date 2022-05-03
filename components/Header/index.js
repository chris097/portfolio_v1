import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
// import Link from "next/link";
import Logo from "../../public/logo.svg";
import {CgMenuGridR} from "react-icons/cg";
import {BsMoonStarsFill} from "react-icons/bs";
import {MdWbSunny} from "react-icons/md";
import Navbar from "../Modal/Navbar";
import Link from "next/link";
// import navs from "../Nav";

const Header = () => {

  const {systemTheme, theme, setTheme} = useTheme()
  const [mounted, setMounted] = useState(false);
  const [ show, setshow] = useState(false)

  const currentTheme = theme === 'system' ? systemTheme : theme;
  useEffect(() => {
    setMounted(true)
  },[])

  if(!mounted) return null;

  return(
    <header className="h-20 w-full fixed left-0 z-50 bg-white dark:bg-coredark border-b">
        <div className="flex justify-between items-center max-w-[90%] mx-auto h-full">
          <div className="flex items-center">
            <Link href="/">
              <a><Image src={Logo} alt="logo" /></a>
            </Link>
          </div>
          <div className="flex items-center space-x-3">
            <button
              type="button"
              aria-hidden="true"
              className="relative focus:outline-none outline-none border-none"
              data-testid="theme-button"
              // onClick={() => setTheme(systemTheme === 'dark' ? 'light':'dark')}
            >
            <div className="w-12 h-6 transition dark:bg-red-100 bg-gray-200 rounded-full outline-none dark:bg-yepprimary" />
            <div
              className={`absolute top-0 left-0 inline-flex items-center justify-center w-6 h-6 transition-all duration-150 transform scale-110 rounded-full shadow-sm translate-x-0 -translate-y-px bg-white text-yepprimary ${theme === 'light' ? 'translate-x-0 -translate-y-px  bg-white text-yepprimary' : 'translate-x-6 text-blue-100 bg-kiwi2'}`}>
        
        {currentTheme === 'dark' ? (
          <span><MdWbSunny onClick={() => setTheme('light')} color="#FF6B6B" /></span>
        ) : (
          <span><BsMoonStarsFill onClick={() => setTheme('dark')} color="#182039" /></span>
        )}
         
      </div>
            </button>
            <span onClick={() => setshow(open => !open)} className="text-2xl cursor-pointer">
              <CgMenuGridR  />
            </span>
          </div>
        </div>
        {show && <Navbar />}
      </header>
)};

export default Header;