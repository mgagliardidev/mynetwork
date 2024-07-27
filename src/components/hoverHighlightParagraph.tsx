import Link from "next/link";
import React from "react";

const HoverHighlightParagraph = (props: any) => {
  return (
    <Link href={props.path}>
      <p className="hover:text-white hover:bg-black rounded-lg py-2 px-2">
        {props.text}
      </p>
    </Link>
  );
};

export default HoverHighlightParagraph;
