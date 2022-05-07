import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
// import { jsPDF } from "jspdf";
// import cvImage from "../../public/christian_chiemela.pdf";
import Logo from "../../public/logo.svg";
import darkLogo from "../../public/darkLogo.svg";
import {CgMenuGridR} from "react-icons/cg";
import {BsMoonStarsFill} from "react-icons/bs";
import {MdWbSunny} from "react-icons/md";
import Navbar from "../Modal/Navbar";
// import Link from "next/link";
// import navs from "../Nav";

const Header = () => {

  // const cvUrl = "https://docs.google.com/document/d/12axyNJZBW6_LnzKMIcyFdAv0Zrs4X-9_8JufoUEUjVU/edit";

  const {systemTheme, theme, setTheme} = useTheme();
  const [mounted, setMounted] = useState(false);
  const [ show, setshow] = useState(false);

  // const downloadCV = () => {

  //   const cvPdf =  new jsPDF();
  //   cvPdf.addFileToVFS(cvImage, 10, 10);
  //   cvPdf.save("christian_chiemela.pdf");

  // }

  const currentTheme = theme === 'system' ? systemTheme : theme;

  useEffect(() => {
    setMounted(true)
  },[])

  if(!mounted) return null;

  return(
    <header className="h-20 w-full fixed left-0 z-50 bg-white dark:bg-coredark border-b border-gray-200">
        <div className="flex justify-between items-center max-w-[90%] mx-auto h-full">
          <div className="flex items-center">
            <Link href="/">
              <a>{theme === 'dark' ? <Image src={darkLogo} alt="logo" /> : <Image src={Logo} alt="logo" />}</a>
            </Link>
          </div>
          <div className="flex items-center space-x-3">
            <button 
              className="text-sm cursor-pointer border-none outline-none dark:bg-blue-200 bg-red-100 px-4 p-1 text-gray-800 dark:text-gray-800 hover:opacity-75 rounded-full"
            >
              Download CV
            </button>
            <span className="border-r-2 h-5" />
            <button
              type="button"
              aria-hidden="true"
              className="relative focus:outline-none outline-none border-none"
              data-testid="theme-button"
              onClick={() => setTheme(theme === 'dark' ? 'light':'dark')}
            >
            <div className="w-10 h-5 transition dark:bg-blue-200 bg-red-100 rounded-full outline-none dark:bg-yepprimary" />
            <div
              className={`absolute top-0 left-0 mt-0.3 inline-flex items-center justify-center w-5 h-5 transition-all duration-150 transform scale-110 rounded-full shadow-sm translate-x-0 -translate-y-px bg-white text-yepprimary ${theme === 'light' ? 'translate-x-0 -translate-y-px  bg-white text-yepprimary' : 'translate-x-6 text-blue-100 bg-kiwi2'}`}>
              {currentTheme === 'dark' ? (
                <span><MdWbSunny onClick={() => setTheme('light')} color="#2B33E3" /></span>
              ) : (
                <span><BsMoonStarsFill onClick={() => setTheme('dark')} color="#FF6B6B" /></span>
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