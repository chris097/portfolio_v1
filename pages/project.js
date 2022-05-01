import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import Image from "next/image";
import circle1 from "../public/circle1.png";
import circle2 from "../public/circle2.png";
import covid from "../public/covid.png";
import dogApp from "../public/dogApp.png";
import wordlen from "../public/wordlen.png";
import Link from "next/link";
import Footer from "../components/Footer";

export default function Project () {
    return(
        <div>
            <Head>
                <title>Christian | Project Page</title>
                <meta name="description" content="Welcome to Christian Chiemela's project hub." />
                <link rel="icon" href="/logo1.svg" />
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
                    <h1 className="text-7xl font-poppins mt-6">Welcome to my project hub</h1>
                    <h4 className="text-xl w-85% font-poppins font-light mt-6">
                        As a frontend engineer, specialist in javascript. 
                        I have some couple of projects built with javascript libraries and typescript.
                        Am always a <span className="text-corered">ReactJs</span> fan.
                    </h4>
                    <div className=" space-x-7 mt-5">
                    <button className="bg-corered border-none text-white py-2 px-6 rounded">Hire Me</button>
                    </div>
                </div>
                <div className="flex flex-row-reverse">
                    <div className="h-12 w-12 mt-4">
                    <Image src={circle2} alt="circle" />
                    </div>
                </div>
                <div className="max-w-[80%] mx-auto mt-32 font-metamorphous">
                    <h1 className="text-7xl font-light mb-16">Recent Projects</h1>
                    <div className="flex items-center mb-28">
                        <div className="w-500px h-auto">
                            <Image src={covid} alt="project" />
                        </div>
                        <div className="ml-20">
                            <h1 className="text-4xl">Cov19Strain Application</h1>
                            <p className="w-600px mt-10 font-poppins">
                                Covid-19 tracker is an application that help you keep tracks of covid-19 situation locality and even beyond your locality. This application will teach/guide you to prevent yourself from been infected.
                            </p>
                            <div className="flex space-x-6 mt-8 text-sm font-poppins">
                                <div className="bg-primaryblue items-center flex justify-center text-white w-28 py-3">Reactjs</div>
                                <div className="bg-corered items-center flex justify-center text-white w-28 py-3">CSS</div>
                                <div className="bg-coreyellow items-center flex justify-center text-white w-28 py-3">Netlify</div>
                                <div className="bg-secondaryblue items-center flex justify-center text-white w-28 py-3">Github Link</div>
                            </div>
                            <button className="bg-corered border-none rounded-full w-20 h-20 text-white mt-16">
                                <Link href="https://cov9teen.netlify.app/" type="submit">
                                    <a>View</a>
                                </Link>
                            </button>
                        </div>
                    </div>
                    <div className="flex items-center flex-row-reverse mb-20">
                        <div className="w-500px h-auto ml-10">
                            <Image src={dogApp} alt="project" />
                        </div>
                        <div className="">
                            <h1 className="text-4xl">DogHub Application</h1>
                            <p className="w-600px mt-10 font-poppins">
                            Covid-19 tracker is an application that help you keep tracks of covid-19 situation locality and even beyond your locality. This application will teach/guide you to prevent yourself from been infected.
                            </p>
                            <div className="flex space-x-6 mt-8 text-sm font-poppins">
                                <div className="bg-primaryblue items-center flex justify-center text-white w-28 py-3">Reactjs</div>
                                <div className="bg-corered items-center flex justify-center text-white w-28 py-3">CSS</div>
                                <div className="bg-coreyellow items-center flex justify-center text-white w-28 py-3">Netlify</div>
                                <div className="bg-secondaryblue items-center flex justify-center text-white w-28 py-3">Github Link</div>
                            </div>
                            <button className="bg-corered border-none rounded-full w-20 h-20 text-white mt-16">
                                <Link href="https://doghubbs.netlify.app/" type="submit">
                                    <a>View</a>
                                </Link>
                            </button>
                        </div>
                    </div>
                    <div className="flex items-center mb-20">
                        <div className="w-500px h-auto">
                            <Image src={wordlen} alt="project" />
                        </div>
                        <div className="ml-20">
                            <h1 className="text-4xl">Wordlen Application</h1>
                            <p className="w-600px mt-10 font-poppins">
                            Covid-19 tracker is an application that help you keep tracks of covid-19 situation locality and even beyond your locality. This application will teach/guide you to prevent yourself from been infected.
                            </p>
                            <div className="flex space-x-6 mt-8 text-sm font-poppins">
                                <div className="bg-primaryblue items-center flex justify-center text-white w-28 py-3">Reactjs</div>
                                <div className="bg-corered items-center flex justify-center text-white w-28 py-3">CSS</div>
                                <div className="bg-coreyellow items-center flex justify-center text-white w-28 py-3">Netlify</div>
                                <div className="bg-secondaryblue items-center flex justify-center text-white w-28 py-3">Github Link</div>
                            </div>
                            <button className="bg-corered rounded-full border-none w-20 h-20 text-white mt-16">
                                <Link href="https://wordstore.netlify.app/" type="submit">
                                    <a>View</a>
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
            </main>
            {/*  */}
            <footer>
                <Footer />
            </footer>
        </div>
    )
}