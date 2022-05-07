import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import Image from "next/image";
import { Rotate, Slide } from "react-awesome-reveal";
import circle1 from "../public/circle1.png";
import circle2 from "../public/circle2.png";
import covid from "../public/covid.png";
import dogApp from "../public/dogApp.png";
import wordlen from "../public/wordlen.png";
import Link from "next/link";
import Footer from "../components/Footer";
import { FiExternalLink } from "react-icons/fi";

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
                <div className="md:h-12 md:w-12 w-8 h-8 pt-20">
                    <Image src={circle1} alt="circle" />
                </div>
                <div className="max-w-[80%] mx-auto font-metamorphous mt-32">
                    <Slide direction="up">
                        <h4 className="text-3xl font-poppins">Hello Recruiter,</h4>
                    </Slide>
                    <Slide direction="down">
                        <h1 className="md:text-7xl text-5xl font-poppins mt-6">Welcome to my project hub</h1>
                    </Slide>
                    <Slide>
                        <h4 className="md:text-xl text-md w-85% font-poppins font-light mt-6">
                            As a frontend engineer, specialist in javascript. 
                            I have some couple of projects built with javascript libraries and typescript.
                            Am always a <span className="text-corered">ReactJs</span> fan.
                        </h4>
                    </Slide>
                    <Slide direction="down">
                        <div className="mt-5">
                            <button className="bg-corered border-none text-white py-2 px-6 rounded">Hire Me</button>
                        </div>
                    </Slide>
                </div>
                <div className="flex flex-row-reverse">
                    <div className="md:h-12 md:w-12 w-8 h-8 mt-4">
                    <Image src={circle2} alt="circle" />
                    </div>
                </div>
                <div className="max-w-[80%] mx-auto mt-32 font-metamorphous">
                   <Slide direction="up">
                    <h1 className="md:text-7xl text-5xl font-light mb-16">Recent Projects</h1>
                   </Slide>
                    <div className="md:flex items-center mb-28">
                        <div className="w-500px h-auto">
                            <Slide direction="left">
                                <Image src={covid} alt="project" />
                            </Slide>
                        </div>
                        <div className="md:ml-20">
                            <Slide direction="down">
                                <h1 className="text-4xl">Cov19Strain Application</h1>
                            </Slide>
                            <Slide direction="right">
                                <p className="md:w-600px mt-10 font-poppins">
                                    Covid-19 tracker is an application that help you keep tracks of covid-19 situation locality and even beyond your locality. This application will teach/guide you to prevent yourself from been infected.
                                </p>
                            </Slide>
                            
                            <Slide direction="up">
                                <div className="flex space-x-6 mt-8 text-sm font-poppins">
                                    <div className="bg-primaryblue items-center flex justify-center text-white w-28 py-3">Reactjs</div>
                                    <div className="bg-corered items-center flex justify-center text-white w-28 py-3">CSS</div>
                                    <div className="bg-coreyellow items-center flex justify-center text-white w-28 py-3">Netlify</div>
                                    <div className="bg-secondaryblue items-center flex justify-center text-white w-28 py-3">Github</div>
                                </div>
                            </Slide>
                            <div className="flex justify-between items-center">
                                <Rotate>
                                    <button className="bg-corered border-none rounded-full w-20 h-20 text-white mt-16">
                                        <Link href="https://cov9teen.netlify.app/" type="submit">
                                            <a>View</a>
                                        </Link>
                                    </button>
                                </Rotate>
                                <Link href="https://github.com/chris097/Cov9teen-react-app">
                                    <a> <FiExternalLink className="text-2xl cursor-pointer mr-10" /></a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="md:flex items-center flex-row-reverse mb-20">
                        <Slide direction="right">
                            <div className="w-500px h-auto md:ml-10">
                                <Image src={dogApp} alt="project" />
                            </div>
                        </Slide>
                        <div className="">
                            <Slide direction="down">
                                <h1 className="text-4xl">DogHub Application</h1>
                            </Slide>
                            <Slide direction="left">
                                <p className="md:w-600px mt-10 font-poppins">
                                Covid-19 tracker is an application that help you keep tracks of covid-19 situation locality and even beyond your locality. This application will teach/guide you to prevent yourself from been infected.
                                </p>
                            </Slide>
                            <Slide direction="up">
                                <div className="flex space-x-6 mt-8 text-sm font-poppins">
                                    <div className="bg-primaryblue items-center flex justify-center text-white w-28 py-3">Reactjs</div>
                                    <div className="bg-corered items-center flex justify-center text-white w-28 py-3">TailwindCSS</div>
                                    <div className="bg-coreyellow items-center flex justify-center text-white w-28 py-3">{`Redux & RTK`}</div>
                                    <div className="bg-secondaryblue items-center flex justify-center text-white w-28 py-3">Netlify</div>
                                </div>
                            </Slide>
                            <div className="flex justify-between items-center">
                                <Rotate>
                                    <button className="bg-corered border-none rounded-full w-20 h-20 text-white mt-16">
                                        <Link href="https://cov9teen.netlify.app/" type="submit">
                                            <a>View</a>
                                        </Link>
                                    </button>
                                </Rotate>
                                <Link href="https://github.com/chris097/doghub">
                                    <a> <FiExternalLink className="text-2xl cursor-pointer mr-10" /></a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="md:flex items-center mb-20">
                        <Slide direction="left">
                            <div className="w-500px h-auto">
                                <Image src={wordlen} alt="project" />
                            </div>
                        </Slide>
                        <div className="md:ml-20">
                            <Slide direction="down">
                                <h1 className="text-4xl">Wordlen Application</h1>
                            </Slide>
                            <Slide direction="right">
                                <p className="md:w-600px mt-10 font-poppins">
                                Covid-19 tracker is an application that help you keep tracks of covid-19 situation locality and even beyond your locality. This application will teach/guide you to prevent yourself from been infected.
                                </p>
                            </Slide>
                            <Slide direction="up">
                                <div className="flex space-x-6 mt-8 text-sm font-poppins">
                                    <div className="bg-primaryblue items-center flex justify-center text-white w-28 py-3">Reactjs</div>
                                    <div className="bg-corered items-center flex justify-center text-white w-28 py-3">Chakra UI</div>
                                    <div className="bg-coreyellow items-center flex justify-center text-white w-28 py-3">{`Redux & RTK`}</div>
                                    <div className="bg-secondaryblue items-center flex justify-center text-white w-28 py-3">Netlify</div>
                                </div>
                            </Slide>
                            <div className="flex justify-between items-center">
                                <Rotate>
                                    <button className="bg-corered border-none rounded-full w-20 h-20 text-white mt-16">
                                        <Link href="https://cov9teen.netlify.app/" type="submit">
                                            <a>View</a>
                                        </Link>
                                    </button>
                                </Rotate>
                                <Link href="https://github.com/chris097/wordlen_app">
                                    <a> <FiExternalLink className="text-2xl cursor-pointer mr-10" /></a>
                                </Link>
                            </div>
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