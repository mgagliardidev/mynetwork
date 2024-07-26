"use client";

import React from "react";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { cn } from "@/lib/utils";
import useScroll from "@/hooks/use-scroll";

const Header = () => {
  const scrolled = useScroll(5);
  const selectedLayout = useSelectedLayoutSegment();

  return (
    <div
      className={cn(
        "sticky top-0 z-30 p-3 h-auto bg-white w-full inset-x-0 border-b border-gray-400",
        {
          "border-b border-gray-400 bg-white/75 backdrop-blur-lg": scrolled,
          "border-b border-gray-400 bg-white": selectedLayout,
        }
      )}
    >
      
      <div className="flex h-[40px] items-center justify-between px-5">
        {/* logo img */}
        <div className="flex items-center space-x-2">
          <Link href="/" className="flex items-center space-x-2 md:hidden">
            <span className="h-7 w-7 bg-zinc-300 rounded lg"></span>
            <span className="text-xl font-bold flex">Logo</span>
          </Link>
        </div>
        {/* account img */}
        <div className="hidden md:block">
          <div className="h-12 w-12 rounded-full bg-zinc-300 flex items-center justify-center">
            <span className="font-bold text-sm ">AP</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
