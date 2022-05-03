import React from "react";
import Link from "next/link";
import navs from "../../Nav";


const Navbar = () => {
    return(
        <div className="flex flex-row-reverse font-poppins text-sm">
            <div className="w-44 h-auto bg-white dark:bg-coreblue shadow-sm mr-6 rounded py-4">
                <div className="flex justify-center align-baseline content-center">
                    <div className="space-y-1 w-full">
                        {navs.map((nav, index) => (
                            <Link href={nav.url} key={index}>
                                <a>
                                    <div className="flex cursor-pointer items-center space-x-2 dark:hover:bg-primaryblue hover:bg-red-100 dark:text-gray-200 text-gray-800 py-2 px-5">
                                        <span>{nav.icon}</span> 
                                        <span>{nav.name}</span>
                                    </div>
                                </a>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Navbar;