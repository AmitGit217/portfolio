import react from "./assets/icons/react.svg";
import css from "./assets/icons/css.svg";
import mongo from "./assets/icons/mongodb.svg";
import node from "./assets/icons/node.svg";
import express from "./assets/icons/express.svg";
import js from "./assets/icons/js.svg";
import html from "./assets/icons/html.svg";
import jest from "./assets/icons/jest.svg";
import nest from "./assets/icons/nest.svg";
import postgres from "./assets/icons/postgres.svg";
import docker from "./assets/icons/docker.svg";
import typescript from "./assets/icons/typescript.svg";

const cards = [
    {
        about: "Social media app for sharing and liking images from around the world",
        mainImage:
            "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c29jaWFsJTIwbWVkaWF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        stack: [react, css, mongo, node, express, js, html, jest],
        link: "https://github.com/AmitGit217/react-around-api-full",
    },
    {
        about: "REST api with full CRUD implementation using Nest.js framework",
        mainImage:
            "https://cdn.dribbble.com/users/808903/screenshots/3831862/dribbble_szablon__1_1.png",
        stack: [node, nest, jest, postgres, docker, typescript],
        link: "https://github.com/AmitGit217/nest-api",
    },
];

export default cards;
