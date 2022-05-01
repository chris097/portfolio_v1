import React from "react";
import {GrProjects} from "react-icons/gr";
import {FaBookmark,FaBook} from "react-icons/fa";
import {RiCodeSSlashFill} from "react-icons/ri";

const navs = [
    {
        id: 1, 
        name: "My Projects", 
        url: "/project", 
        icon: <GrProjects /> 
    },
    {
        id: 2, 
        name: "My Resume", 
        url: "https://docs.google.com/document/d/1alevpGv9L8-fKj1tBq3dKbMeOsA6Xg4xDsyqymWbpiA/edit",
        icon: <FaBookmark />
    },
    {
        id: 3, 
        name: "About Me", 
        url: "/about", 
        icon: <FaBook />
    },
    {
        id: 4, 
        name: "Hire Me", 
        url: "/hire", 
        icon: <RiCodeSSlashFill />
    },
];

export default navs;