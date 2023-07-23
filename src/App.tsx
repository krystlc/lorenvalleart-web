import React, { useState } from "react";
import NavBtn from "./components/NavBtn";
import Chevron from "@/assets/chevron.svg";
import SectionHome from "./components/SectionHome";
import SectionAbout from "./components/SectionAbout";
import SectionPortfolio from "./components/SectionPortfolio";
import SectionContact from "./components/SectionContact";
import SectionFollow from "./components/SectionFollow";

const sections: {
  letter: string;
  heading: string;
  coverSrc: string;
  component?: JSX.Element;
}[] = [
  {
    letter: "L",
    heading: "Home",
    coverSrc: "/brushes.webp",
    component: <SectionHome />,
  },
  {
    letter: "O",
    heading: "About",
    coverSrc: "/loren.webp",
    component: <SectionAbout />,
  },
  {
    letter: "R",
    heading: "Portfolio",
    coverSrc: "/gummy.webp",
    component: <SectionPortfolio />,
  },
  {
    letter: "E",
    heading: "Contact",
    coverSrc: "/painting.webp",
    component: <SectionContact />,
  },
  {
    letter: "N",
    heading: "Follow",
    coverSrc: "/studio.jpeg",
    component: <SectionFollow />,
  },
];

function App() {
  const [selectedSection, setSelectedSection] =
    useState<React.ReactNode | null>(null);

  return (
    <>
      <main className="h-screen w-screen grid grid-row-5 md:grid-rows-none md:grid-cols-5 divide-y divide-[#a88f8d] md:divide-y-0 md:divide-x">
        {sections.map((s, i) => {
          return (
            <NavBtn
              key={i}
              letter={s.letter}
              heading={s.heading}
              coverSrc={s.coverSrc}
              onClick={() => setSelectedSection(s.component)}
            />
          );
        })}
        {selectedSection && (
          <section className="absolute inset-0 flex items-center justify-center bg-white z-10">
            <button
              type="button"
              className="absolute top-2 left-2"
              onClick={() => setSelectedSection(null)}
            >
              <img src={Chevron} alt="Back" className="h-10 w-10 " />
              <span className="sr-only">Back</span>
            </button>
            {selectedSection}
          </section>
        )}
      </main>
      <footer className="rotate-180">
        <p className="rotate-90 fixed left-2 -bottom-4 origin-bottom-left uppercase text-xs tracking-widest">
          Copyright 2023 — Loren Valle Art
        </p>
      </footer>
    </>
  );
}

export default App;
