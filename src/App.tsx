import React, { useState } from "react";
import NavBtn from "./components/NavBtn";
import Chevron from "@/assets/chevron.svg";
import SectionHome from "./components/SectionHome";
import SectionAbout from "./components/SectionAbout";
import SectionPortfolio from "./components/SectionPortfolio";
import SectionContact from "./components/SectionContact";
import SectionFollow from "./components/SectionFollow";
import { RouteName } from "./utils";

const sections: {
  letter: string;
  heading: string;
  coverSrc: string;
  routeName?: RouteName;
}[] = [
  {
    letter: "L",
    heading: "Home",
    coverSrc: "/brushes.webp",
    routeName: "home",
  },
  {
    letter: "O",
    heading: "About",
    coverSrc: "/loren.webp",
    routeName: "about",
  },
  {
    letter: "R",
    heading: "Portfolio",
    coverSrc: "/gummy.webp",
    routeName: "portfolio",
  },
  {
    letter: "E",
    heading: "Contact",
    coverSrc: "/painting.webp",
    routeName: "contact",
  },
  {
    letter: "N",
    heading: "Follow",
    coverSrc: "/studio.jpeg",
    routeName: "follow",
  },
];

function App() {
  const [selectedSection, setSelectedSection] =
    useState<React.ReactNode | null>(null);

  function handleNavBtnClick(name?: RouteName) {
    switch (name) {
      case "home":
        setSelectedSection(<SectionHome />);
        break;
      case "about":
        setSelectedSection(<SectionAbout />);
        break;
      case "portfolio":
        setSelectedSection(<SectionPortfolio />);
        break;
      case "contact":
        setSelectedSection(<SectionContact />);
        break;
      case "follow":
        setSelectedSection(<SectionFollow />);
        break;
      default:
        setSelectedSection(null);
    }
  }

  return (
    <>
      <header className="h-screen w-screen grid grid-row-5 md:grid-rows-none md:grid-cols-5 divide-y divide-[#a88f8d] md:divide-y-0 md:divide-x">
        {sections.map((s, i) => {
          return (
            <NavBtn
              key={i}
              letter={s.letter}
              heading={s.heading}
              coverSrc={s.coverSrc}
              onClick={() => handleNavBtnClick(s.routeName)}
            />
          );
        })}
      </header>
      {selectedSection && (
        <main className="absolute inset-0 bg-white z-10 overflow-auto">
          <button
            type="button"
            className="absolute top-4 left-2"
            onClick={() => setSelectedSection(null)}
          >
            <img src={Chevron} alt="Back" className="h-10 w-10 " />
            <span className="sr-only">Back</span>
          </button>
          {selectedSection}
        </main>
      )}
      <footer className="rotate-180">
        <p className="rotate-90 fixed left-2 -bottom-4 origin-bottom-left uppercase text-xs tracking-widest">
          Copyright 2023 — Loren Valle Art
        </p>
      </footer>
    </>
  );
}

export default App;
