"use client"
import { PopoverButton } from "@headlessui/react";
import Link from "next/link";
import React from "react";

const PopOverListButton = () => {
  return (
    <li className="p-4">
      <PopoverButton onClick={() => console.log("clicked")} className="bg-black text-white rounded-md h-10 w-56">Sign Up</PopoverButton>
    </li>
  );
};

export default PopOverListButton;
