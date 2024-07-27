import Link from "next/link";
import React from "react";
import ResponsivePopover from "./responsivePopover";
import HoverHighlightParagraph from "./hoverHighlightParagraph";

const Header = () => {
  return (
    <div className="mx-auto flex justify-center items-center border-b border-gray-400 px-6 py-2 h-20">
      <h1 className="font-bold">Software Developer</h1>
      <div className="grow">
        <div className="hidden sm:flex items-center gap-10 justify-center">
          <HoverHighlightParagraph path="/overview" text="Overview" />
          <HoverHighlightParagraph path="/skills" text="Skills" />
          <HoverHighlightParagraph path="/career" text="Career" />
          <HoverHighlightParagraph path="/projects" text="Projects" />
          <HoverHighlightParagraph path="/contact" text="Contact" />
        </div>
      </div>
      <div className="sm:hidden">
        <ResponsivePopover/>
      </div>
      <div>
        <button className="text-white bg-black rounded-lg py-2 px-6 hidden sm:block">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Header;
