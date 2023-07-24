import React from "react";
import "./nav-btn.css";

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
    <button type="button" className="nav-btn" onClick={onClick}>
      <span className="nav-btn--letter">{letter}</span>
      <span className="nav-btn--heading">{heading}</span>
      <div className="nav-btn--cover">
        <div></div>
        <picture>
          <img src={coverSrc} />
        </picture>
      </div>
    </button>
  );
}
