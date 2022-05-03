import React from "react";
import Image from "next/image";
import Logo from "../../public/logo.svg";
import { BsTelephoneFill } from "react-icons/bs";
import { MdMail } from "react-icons/md";
import socialNavs from "../Nav/socialNavs";
import Link from "next/link";


const Footer = () => (
    <div className="border-t border-gray-200 bg-white dark:bg-darkblue pt-10 mt-28">
        <div className="max-w-[90%] mx-auto flex justify-between font-poppins pb-10">
            <div>
                <div className="flex items-center">
                    <Image src={Logo} alt="logo" />
                    <span className="font-bold font-metamorphous -ml-4">Christian Chiemela</span>
                </div>
                <div className="flex items-center space-x-2 -mt-3">
                    <span><BsTelephoneFill /></span>
                    <span>+2347015362583</span>
                </div>
                <div className="flex items-center space-x-2 mt-2">
                    <span><MdMail /></span>
                    <span>chrisfidel.international@gmail.com</span>
                </div>
            </div>
            <div className="space-y-11">
                <div className="flex flex-row-reverse mt-10">
                    {socialNavs?.map((socialNav, index) => (
                        <Link key={index} href={socialNav.url}>
                        <span className="bg-coreblue cursor-pointer mr-7 rounded-full p-2">
                            {socialNav.icon} 
                        </span>
                        </Link>
                    ))}
                </div>
                <p className="text-sm mr-7">Copyright © 2022 designed by Christian Chiemela All rights reserved.</p>
            </div>
        </div>
    </div>
);

export default Footer;