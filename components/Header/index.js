import React, {useState} from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/logo.svg";
import {BsFillMoonStarsFill} from "react-icons/bs";
import navs from "../Nav";

const Header = () => {

  const [active, setActive] = useState(1);
  console.log(active);

  return(
    <header className="h-20 border">
        <div className="flex justify-between items-center max-w-[90%] mx-auto h-full">
          <div className="flex items-center">
            <Image src={Logo} alt="logo" />
          </div>
          <div className="flex">
            <nav className="mr-20">
              <div className="flex space-x-10">
                {navs?.map((nav, index) => (
                  <nav onClick={() => setActive(nav.id)} key={index} className={active === index+1 ? "text-primaryred" : "text-black"}>
                    <Link href={nav.url}>
                      <a>{nav.tag}</a>
                    </Link>
                </nav>
                ))}
              </div>
            </nav>
            <button>
              <BsFillMoonStarsFill />
          </button>
          </div>
        </div>
      </header>
)};

export default Header;