import React from "react";

type Props = {
  letter?: string;
  number?: string;
  coverSrc?: string;
  children?: React.ReactNode;
};
export default function AppSection({
  children,
  coverSrc,
  letter,
  number,
}: Props): React.ReactNode {
  return (
    <div className="flex flex-col items-center justify-center overflow-hidden relative group hover:bg-raisin-black hover:text-rosy-brown">
      <span className="text-[6rem] md:text-[18rem] font-display relative z-10 transition-transform group-hover:-rotate-2">
        {letter}
      </span>
      <span className="absolute top-2 md:top-auto md:bottom-2 left-8 text-2xl font-display">
        {number}
      </span>
      <div className="hidden group-hover:block absolute h-full w-full">
        <picture className="h-full w-full block">
          <img
            src={coverSrc}
            alt=""
            className="opacity-20 h-full w-full object-cover"
          />
        </picture>
      </div>
      <div className="hidden group-hover:block z-10 text-xs p-4 md:p-8">
        {children}
      </div>
    </div>
  );
}
