import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import circle1 from "../public/circle1.png";
import circle2 from "../public/circle2.png";

export default function Hire () {
    return(
        <div>
            <Head>
                <title>Christian | Portfolio</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {/*  */}
            <Header />
            {/*  */}
            <main>
            <div className="h-12 w-12 pt-20">
                    <Image src={circle1} alt="circle" />
                </div>
                <div className="max-w-[80%] mx-auto font-metamorphous mt-32">
                    <h4 className="text-3xl font-poppins">Hello Recruiter,</h4>
                    <h1 className="text-7xl font-poppins mt-6">Good frontend dev tastes good</h1>
                    <h4 className="text-xl w-85% font-poppins font-light mt-6">
                        If you are here I strongly believe we will be working closely or together as team soon.
                        Keep scrolling let me talk you through my journey so far.
                    </h4>
                </div>
                <div className="flex flex-row-reverse">
                    <div className="h-12 w-12 mt-4">
                    <Image src={circle2} alt="circle" />
                    </div>
                </div>
                {/*  */}
                <div className="max-w-[80%] mx-auto mt-32 font-metamorphous">
                    <h1 className="text-7xl font-light mb-10">Hire Me</h1>
                    <div className="mt-10 bg-white dark:bg-projectblue w-full h-auto pt-10 pb-20 font-poppins">
                        <div className="max-w-[80%] mx-auto">
                            <h1 className="text-2xl">Dear <span className="text-corered">Recruiter</span>,</h1>
                            <p className="text-sm mt-3 text-gray-600 dark:text-gray-200">Please fill the form, will respones with 24 hours.</p>
                            <form className="space-y-5">
                                <div className="mt-8">
                                    <label className="text-sm mb-10">{`Recruiter's Name`}</label>
                                    <div className="bg-gray-100 w-full rounded dark:bg-gray-900 h-14">
                                        <input 
                                            className="w-full h-full bg-transparent outline-none border-none px-3 text-sm" 
                                            type="text" 
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="text-sm">{`Company's Name`} </label>
                                    <div className="bg-gray-100 w-full rounded dark:bg-gray-900 h-14">
                                        <input 
                                            className="w-full h-full bg-transparent outline-none border-none px-3 text-sm" 
                                            type="text" 
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="text-sm">{`Job Type`} </label>
                                    <div className="bg-gray-100 w-full rounded dark:bg-gray-900 h-14">
                                        <select className="border-none w-full bg-transparent outline-none px-3 h-full text-sm">
                                            <option value="contract">Contract</option>
                                            <option value="partTime">Part-Time</option>
                                            <option value="contract">Full-Time</option>
                                        </select>
                                    </div>
                                </div>
                                <div>
                                    <label className="text-sm">{`Description`} </label>
                                    <div className="w-full h-40 rounded dark:bg-gray-900 bg-gray-100">
                                        <textarea className="border-none w-full outline-none bg-transparent focus:border-inherit p-3" />
                                    </div>
                                </div>
                                <button className="bg-corered dark:bg-coreblue border-none text-white mt-5 w-full py-3 rounded">Send</button>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
            {/*  */}
            <footer className="border-t border-gray-200 bg-white dark:bg-darkblue pt-10 mt-28">
                <Footer />
            </footer>
      </div>
    )
}