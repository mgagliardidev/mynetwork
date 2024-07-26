import Link from "next/link";
import React from "react";
import ResponsivePopover from "./responsivePopover";

const Header = () => {
  return (
    <div className="mx-auto flex justify-center items-center border-b2 px-6 py-2 h-24">
      <h1 className="font-bold">Software Developer</h1>
      <div className="grow">
        <div className="hidden sm:flex items-center gap-10 justify-center">
          <Link href="/">
            <p>Overview</p>
          </Link>
          <Link href="/skills">
            <p>Skills</p>
          </Link>
          <Link href="/career">
            <p>Career</p>
          </Link>
          <Link href="/contact">
            <p>Contact</p>
          </Link>
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
