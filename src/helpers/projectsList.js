import project01 from "./../img/projects/01.jpg";
import project01Big from "./../img/projects/01-big.jpg";

import project02 from "./../img/projects/02.jpg";
import project02Big from "./../img/projects/02-big.jpg";

import project03 from "./../img/projects/03.jpg";
import project03Big from "./../img/projects/03-big.jpg";

import project04 from "./../img/projects/04.jpg";
import project04Big from "./../img/projects/04-big.jpg";

import project05 from "./../img/projects/05.jpg";
import project05Big from "./../img/projects/05-big.jpg";

import project06 from "./../img/projects/06.jpg";
import project06Big from "./../img/projects/06-big.jpg";

import project07 from "./../img/projects/07.jpg";
import project07Big from "./../img/projects/07-big.jpg";

import project08 from "./../img/projects/08.jpg";
import project08Big from "./../img/projects/08-big.jpg";

import project09 from "./../img/projects/09.jpg";
import project09Big from "./../img/projects/09-big.jpg";

const projects = [
  {
    title: "My portfolio",
    description:
      "My portfolio, built with React, where you can explore my projects, view my CV, and find my contact information. In addition to using standard hooks like useState and useEffect, I also utilized useLocalStorage to store user preferences for the site's dark or light theme. The portfolio is implemented across multiple pages, each displaying individual projects using HashRouter and the useParams hook.",
    img: project08,
    imgBig: project08Big,
    skills: "HTML, CSS, JS, React",
    gitHubLink: "https://portfolio-two-green-98.vercel.app/#/",
  },
  {
    title: "Momentum",
    description: "A web application where you can check the weather in any location worldwide. The website will remember your name and greet you differently based on the time of day. Each time you visit the page, you can discover a new landscape, a fresh quote, and even listen to music.",
    img: project07,
    imgBig: project07Big,
    skills: "HTML, SCSS, JS, Webpack, Local storage, REST API, DOM API",
    gitHubLink: "https://rolling-scopes-school.github.io/tematut-JSFEPRESCHOOL2022Q4/momentum/",
  },

  {
    title: "Posts",
    description: "A project displaying posts fetched from the server, with the ability to search for posts based on keywords. For server requests, I utilized Axios.",
    img: project09,
    imgBig: project09Big,
    skills: "HTML, CSS, JSX, React, Axios",
    gitHubLink: "https://tematut.github.io/DLS/",
  },
  {
    title: "Shelter",
    description: "A website about plants designed from a Figma mockup.",
    img: project04,
    imgBig: project04Big,
    skills: "HTML, SCSS, JS, Webpack, Responsive Design, Figma, Pixel perfect, DOM API",
    gitHubLink: "https://rolling-scopes-school.github.io/tematut-JSFE2023Q1/shelter/index.html",
  },
  {
    title: "RSS-CSS-Selectors",
    description: "This is a CSS selector improvement simulator aimed at enhancing your skills in choosing correct selectors. The simulator consists of 10 levels.",
    img: project06,
    imgBig: project06Big,
    skills: "HTML, SCSS, JS, TS, Webpack, ESlinter, Jest, Local storage",
    gitHubLink: "https://rolling-scopes-school.github.io/tematut-JSFE2023Q1/RSS-CSS-Selectors/",
  },
  {
    title: "Minesweeper",
    description: "A custom version of the well-known game Minesweeper.",
    img: project05,
    imgBig: project05Big,
    skills: "HTML, SCSS, JS, Webpack",
    gitHubLink: "https://rolling-scopes-school.github.io/tematut-JSFE2023Q1/minesweeper/build/",
  },
  {
    title: "Plants",
    description: "A website about plants designed from a Figma mockup.",
    img: project02,
    imgBig: project02Big,
    skills: "HTML, SCSS, JS, Responsive Design, Figma, Pixel perfect",
    gitHubLink: "https://rolling-scopes-school.github.io/tematut-JSFEPRESCHOOL2022Q4/plants/",
  },
  {
    title: "Battleship",
    description: "One of my first jobs, 4 years ago.",
    img: project01,
    imgBig: project01Big,
    skills: "HTML, JS",
    gitHubLink: "https://tematut.github.io/battleship/battleship.html",
  },
  {
    title: "Virtual-keyboard",
    description: "Just virtual-keyboard.",
    img: project03,
    imgBig: project03Big,
    skills: "HTML, CSS, JS, DOM API",
    gitHubLink: "https://tematut.github.io/virtual-keyboard/dist/",
  },
];

export { projects };
