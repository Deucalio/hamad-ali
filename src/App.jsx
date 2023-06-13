import { useState, useEffect } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import blogPNG from "./assets/images/blog.png";
import memoryPNG from "./assets/images/memory.png";
import spideyPNG from "./assets/images/spidey.png";
import todoPNG from "./assets/images/todo.png";

import js from "./assets/images/js.png";
import py from "./assets/images/py.png";
import react from "./assets/images/react.png";
import node from "./assets/images/node.png";
import exp from "./assets/images/exp.png";
import tailwind from "./assets/images/tailwind.png";
import mongo from "./assets/images/mongo.png";
import sql from "./assets/images/sql.png";
import django from "./assets/images/django.png";

const Footer = () => {
  return (
    <>
      <footer className="mb-16 mt-2">
        <p className="px-4 text-lg opacity-75">Join me on this epic odyssey!</p>

        <ul className="flex flex-wrap lg:w-1/3 lg:gap-6 lg:px-6 justify-between px-4 py-6">
          <li>
            <a target="_blank" href="https://twitter.com/hammad_es7">
              <p className="flex flex-wrap items-center gap-3 transition-all duration-500 hover:opacity-50 hover:-translate-y-1">
                Twitter
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </span>
              </p>
            </a>
          </li>
          <li>
            <a target="_blank" href="https://github.com/Deucalio">
              <p className="flex flex-wrap items-center gap-3 transition-all duration-500 hover:opacity-50 hover:-translate-y-1">
                Github
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </span>
              </p>
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
};

const Contact = () => {
  return (
    <section className="contact-section h-96 border-orange-500">
      <p className="px-4 text-3xl font-semibold uppercase leading-9 opacity-95">
        Contact
      </p>

      <ul className="my-6 flex flex-col gap-5 lg:text-lg">
        <li className="">
          <a
            className="flex flex-wrap items-center gap-6 px-4 transition-all duration-500 hover:opacity-50 hover:-translate-y-1"
            target="_blank" href="https://twitter.com/hammad_es7"
          >
            <figure className="h-7 w-7">
              <img
                src="https://img.icons8.com/?size=512&id=13963&format=png"
                alt=""
              />
            </figure>

            <p className="flex gap-1">
              hammad_es7
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </span>
            </p>
          </a>
        </li>
        <p className="border-b-[1px] border-gray-800 opacity-70"></p>

        <li className="">
          <a target="_blank"
            className="flex flex-wrap items-center gap-6 px-4 transition-all duration-500 hover:opacity-50 hover:-translate-y-1"
            href="https://www.linkedin.com/in/hammad-ali-700b951b5/"
          >
            <figure className="h-7 w-7">
              <img
                src="https://img.icons8.com/?size=512&id=13930&format=png"
                alt=""
              />
            </figure>

            <p className="flex gap-1">
              hammad-ali-700b951b5
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </span>
            </p>
          </a>
        </li>
        <p className="border-b-[1px] border-gray-800 opacity-70"></p>

        <li className="">
          <a
            className="flex flex-wrap items-center gap-6 px-4 transition-all duration-500 hover:opacity-50 hover:-translate-y-1"
            href="mailto:captain.gaze@gmail.com"
          >
            <figure className="h-7 w-7">
              <img
                src="https://img.icons8.com/?size=512&id=LPcVDft9Isqt&format=png"
                alt=""
              />
            </figure>

            <p className="flex gap-1">
              captain.gaze@gmail.com
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </span>
            </p>
          </a>
        </li>
        <p className="mt-4 border-b-[1px] border-gray-800 opacity-70"></p>
      </ul>
    </section>
  );
};

const Skills = () => {
  return (
    <>
      <section className="mb-24 px-4 lg:px-12">
        <p className=" text-3xl font-semibold uppercase leading-9 opacity-95">
          Skills
        </p>
        <p className="opacity-80 py-4 lg:w-1/2">
          Staying up-to-date in the quickly advancing field of web development
          can be challenging, and I actively seek ways to keep myself updated,
          here are some of the technologies that I have worked with.
        </p>

        <ul className="mt-6 grid grid-cols-3 gap-4 lg:w-3/4 sm:place-items-center lg:gap-x-24 lg:gap-y-4 lg:pr-36 lg:place-items-start ">
          <li className="">
            <img className="sm:h-24" src={js} alt="" />
          </li>
          <li>
            <img className="sm:h-24" src={py} alt="" />
          </li>
          <li>
            <img className="sm:h-24" src={react} alt="" />
          </li>
          <li>
            <img className="sm:h-24" src={node} alt="" />
          </li>
          <li>
            <img className="sm:h-24" src={exp} alt="" />
          </li>
          <li>
            <img className="sm:h-24" src={tailwind} alt="" />
          </li>
          <img className="sm:h-24" src={mongo} alt="" />
          <li>
            <img className="sm:h-24" src={sql} alt="" />
          </li>
          <li>
            <img className="sm:h-24" src={django} alt="" />
          </li>
        </ul>
      </section>

      <p className="mb-10 -mt-3 border-b-[1px] border-gray-800 opacity-70"></p>
    </>
  );
};

const Projects = () => {
  return (
    <>
      <section className="mt-24 h-fit border-amber-500">
        <p className="px-4 text-3xl font-semibold uppercase opacity-95 lg:px-12">
          Projects
        </p>
        <p className="mt-4 px-4 lg:px-12 opacity-80  md:w-2/4">
          Below are some of the projects that I have worked on, and they have
          been immensely helpful in solidifying my concepts in web development.
        </p>

        <ul className="my-20 flex flex-col gap-12 border-rose-600">
          <li className="">
            <a target="_blank"
              className="grid grid-cols-1 lg:grid-cols-3 lg:place-items-center gap-7 px-4 lg:px-8 transition-all duration-500 hover:opacity-50 hover:-translate-y-1"
              href="https://mernstack-blog.vercel.app"
            >
              <figure className="h-full">
                <img className="lg:p-12 rounded-md " src={blogPNG} alt="" />
              </figure>
              <p className="flex flex-wrap items-center gap-5 pl-2 text-lg uppercase opacity-90 mr-12 w-full">
                BLOG
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6 text-[#FF4F00]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </span>
              </p>
              <p className="pl-2 opacity-80 w-full mr-24">
                A full-stack blog where users can read posts and leave their
                thoughts in the comments. This project is predominantly built on
                the MERN (MongoDB, Express.js, React, Node.js) stack.
              </p>
            </a>
            <p className="mt-4 border-b-[1px] border-gray-800 opacity-70"></p>
          </li>

          <li className="">
            <a target="_blank"
              className="grid grid-cols-1 lg:grid-cols-3 lg:place-items-center gap-7 px-4 transition-all duration-500 hover:opacity-50 hover:-translate-y-1"
              href="https://deucalio.github.io/memory-match/"
            >
              <figure className="h-full">
                <img
                  className="lg:p-4 rounded-md xl:h-56"
                  src={memoryPNG}
                  alt=""
                />
              </figure>
              <p className="flex flex-wrap items-center gap-5 pl-2 text-lg uppercase opacity-90 mr-12   w-full">
                Memory Match
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6 text-[#BA160C]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </span>
              </p>
              <p className="pl-2 opacity-80 w-full mr-24">
                Flip cards and match the same pair of images to win! This is the
                very first project I made with React
              </p>
            </a>
            <p className="mt-4 border-b-[1px] border-gray-800 opacity-70"></p>
          </li>

          <li className="">
            <a 
              target="_blank"
              className="grid grid-cols-1 lg:grid-cols-3 lg:place-items-center gap-7 px-4 transition-all duration-500 hover:opacity-50 hover:-translate-y-1"
              href="https://astounding-cupcake-04c95e.netlify.app"
            >
              <figure className="h-full">
                <img className="lg:p-4 rounded-md" src={spideyPNG} alt="" />
              </figure>
              <p className="flex flex-wrap items-center gap-5 pl-2 text-lg uppercase opacity-90 mr-12   w-full">
                Nvidia Store
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6 text-[#00FF00]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </span>
              </p>
              <p className="pl-2 opacity-80 w-full mr-24">
                Developed a shopping cart using React to reinforce understanding
                of React concepts, particularly state management, suffice it to
                say it served as a valuable learning experience.
              </p>
            </a>
            <p className="mt-4 border-b-[1px] border-gray-800 opacity-70"></p>
          </li>

          <li className="">
            <a target="_blank"
              className="grid grid-cols-1 lg:grid-cols-3 lg:place-items-center gap-7 px-4 transition-all duration-500 hover:opacity-50 hover:-translate-y-1"
              href="https://sage-kelpie-816120.netlify.app/"
            >
              <figure className="h-full">
                <img className="lg:p-4 rounded-md" src={todoPNG} alt="" />
              </figure>
              <p className="flex flex-wrap items-center gap-5 pl-2 text-lg uppercase opacity-90 mr-12   w-full">
                Todo list
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6 text-[#FF4F00]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </span>
              </p>
              <p className="pl-2 opacity-80 w-full mr-24">
                After familarzing myself with JavaScript and its syntax, I set
                out to create a somewhat beginner-friendly project, then
                converted this into React eventually to improv its functionality
                and user experience.
              </p>
            </a>
            <p className="mt-4 border-b-[1px] border-gray-800 opacity-70"></p>
          </li>
        </ul>
      </section>
    </>
  );
};

const App = () => {

 

  return (
    <>
      <Header />
      <Main />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
