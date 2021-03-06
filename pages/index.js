import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Circle1 from "../public/circle1.png";
import Circle2 from "../public/circle2.png";
import Rainbow from "../public/rainbow.png";
import Header from '../components/Header';
import socialNavs from '../components/Nav/socialNavs';
import { Rotate, Slide } from 'react-awesome-reveal';

export default function Home() {
  
  return (
    <div>
      <Head>
        <title>Christian | Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo1.svg" />
      </Head>
      {/*  */}
      <Header />
      {/*  */}
      <main>
        <div className="md:h-12 md:w-12 w-8 h-8 pt-16">
          <Image src={Circle1} alt="circle" />
        </div>
        <div className="md:h-12 md:w-12 w-8 h-8 fixed right-0 md:bottom-32 bottom-20">
          <Image src={Circle2} alt="circle" />
        </div>
        {/*  */}
        <div className="md:max-w-[70%] md:text-left text-center mx-auto pt-10">
            <div className="md:h-20 md:w-20 w-14 h-14 ml-10 md:0 mb-5">
              <Rotate>
                <Image src={Rainbow} alt="rainbow" />
              </Rotate>
            </div>
            <div className=" font-poppins mt-14">
              <Slide direction='up'><h4 className="text-3xl">Hello Recruiter,</h4></Slide>
              <Slide direction='down'>
                <h1 className="md:text-7xl text-5xl font-metamorphous my-4">{`I'm Christian Chiemela`}</h1>
              </Slide>
              <Slide>
                <h4 className="md:text-xl mx-auto md:mx-0 text-md font-light mt-6 w-85%">
                  a frontend engineer, specialist in javascript. Love Building amazing things with 
                <span className="text-corered font-metamorphous"> ReactJs</span> and 
                <span className="text-corered font-metamorphous"> Typescript</span>.
                </h4>
              </Slide>
             <Slide direction='down'>
              <div className="flex space-x-7 justify-center md:justify-start mt-7">
                  {socialNavs?.map((socialNav, index) => (
                    <Link key={index} href={socialNav.url}>
                      <span 
                        className="bg-coreblue cursor-pointer rounded-full h-7 flex justify-center items-center w-7"
                      >
                        {socialNav.icon} 
                      </span>
                    </Link>
                  ))}
                </div>
             </Slide>
            </div>
          <div className="flex flex-row-reverse md:mt-10 mt-5 md:mr-0 mr-10">
            <div className="md:h-20 md:w-20 w-14 h-14">
              <Rotate>
                <Image className="flex flex-row-reverse" src={Rainbow} alt="rainbow" />
              </Rotate>
            </div>
          </div>
        </div>
      </main>
      {/*  */}
      <footer>
          <p 
            className="md:fixed bottom-6 mt-5 w-full text-center text-sm font-metamorphous"
          >
            Copyright ?? 2022 designed by Christian Chiemela All rights reserved.
          </p>
      </footer>
    </div>
  )
}
