import Link from "next/link";
import React from "react";

const HoverHighlightParagraph = (props: any) => {
  return (
    <Link href={props.path} onClick={props.onClick}>
      <p className={'hover:text-white hover:bg-black rounded-lg py-2 px-2 ' + (props.isActive ? 'bg-black text-white' : 'text-black bg-white')}>
        {props.text}
      </p>
    </Link>
  );
};

export default HoverHighlightParagraph;
