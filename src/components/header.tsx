"use client";
import React, { useEffect, useState } from "react";
import { headerMenuItems } from "../constants";
import ResponsivePopover from "./responsivePopover";
import HoverHighlightParagraph from "./hoverHighlightParagraph";

const Header = () => {
  const menuItems = headerMenuItems;
  const getCurrentPathIndex = (currentPath: string) => {
    
    return menuItems.findIndex((item) => item.href === currentPath);
  };

  const [activeItem, setActiveItem] = useState<number|null>(null);

  const handleMenuItemClick = (index: number) => {
    setActiveItem(index);
  };

  useEffect(() => {
    const currentPath = window.location.pathname;
    setActiveItem(getCurrentPathIndex(currentPath));
  }, []);

  return (
    <div className="mx-auto flex justify-center items-center border-b border-gray-400 px-6 py-2 h-20 top-0 z-50 bg-white sticky">
      <h1 className="font-bold">Software Developer</h1>
      <div className="grow">
        <div className="hidden sm:flex items-center gap-10 justify-center">
          {menuItems.map((item, index) => (
            <HoverHighlightParagraph
              onClick={() => handleMenuItemClick(index)}
              key={index}
              isActive={activeItem === index}
              path={item.href}
              text={item.name}
            />
          ))}
          {/* <HoverHighlightParagraph path="/" text="Overview" />
          <HoverHighlightParagraph path="/skills" text="Skills" />
          <HoverHighlightParagraph path="/career" text="Career" />
          <HoverHighlightParagraph path="/projects" text="Projects" />
          <HoverHighlightParagraph path="/contact" text="Contact" /> */}
        </div>
      </div>
      <div className="sm:hidden">
        <ResponsivePopover />
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
