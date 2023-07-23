import React from "react";

type Props = {
  letter?: string;
  heading?: string;
  coverSrc?: string;
  onClick?: () => void;
};
export default function NavBtn({
  coverSrc,
  letter,
  heading,
  onClick,
}: Props): React.ReactNode {
  return (
    <button
      type="button"
      className="flex flex-col items-start px-4 md:items-center md:px-0 justify-center overflow-hidden relative group hover:bg-raisin-black hover:text-rosy-brown"
      onClick={onClick}
    >
      <span className="text-[6rem] md:text-[18rem] font-display relative z-10 transition-transform group-hover:-rotate-2">
        {letter}
      </span>
      <span className="absolute top-2 left-4 md:top-auto md:bottom-4 text-sm md:text-lg font-display">
        {heading}
      </span>
      <div className="hidden md:group-hover:block absolute h-full w-full">
        <picture className="h-full w-full block">
          <img
            src={coverSrc}
            alt=""
            className="opacity-20 h-full w-full object-cover"
          />
        </picture>
      </div>
    </button>
  );
}
