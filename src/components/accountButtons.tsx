"use client";

import {
  Linkedin as LinkedinIcon,
  Github as GithubIcon,
  Send as SendIcon,
  FileDown as FileDownIcon,
} from "lucide-react";
import React from "react";

export const LinkedinButton = () => {
  return (
    <button onClick = {() => redirectToLink('https://www.linkedin.com/in/matteo-gagliardi-1ba898272/')} className="text-lg h-18 w-auto flex flex-row gap-1 items-center justify-center text-black bg-white border-black border-2 hover:bg-black hover:text-white rounded-lg py-2 px-6 mt-5">
      <LinkedinIcon />
      Linkedin
    </button>
  );
};

export const GithubButton = () => {
  return (
    <button onClick = {() => redirectToLink('https://github.com/mgagliardidev?tab=repositories')} className="text-lg h-18 flex flex-row gap-1 items-center justify-center text-black bg-white border-black border-2 hover:bg-black hover:text-white rounded-lg py-2 px-6 mt-5">
      <GithubIcon />
      Github
    </button>
  );
};

export const MailButton = () => {
  return (
    <button onClick={sendMailTo} className="text- h-18 flex flex-row gap-1 items-center justify-center text-black bg-white border-black border-2 hover:bg-black hover:text-white rounded-lg py-2 px-6 mt-5">
      <SendIcon />
      Mail
    </button>
  );
};

export const ResumeDownloadButton = () => {
  return (
    <button
      onClick={handleDownload}
      className="text- h-18 flex flex-row gap-1 items-center justify-center text-black bg-white border-black border-2 hover:bg-black hover:text-white rounded-lg py-2 px-6 mt-5"
    >
      <FileDownIcon />
      My Resume
    </button>
  );
};

const redirectToLink = (url: string) => {
  const link = document.createElement("a");
  link.href = url;
  link.target = "_blank";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

const handleDownload = () => {
  const link = document.createElement("a");
  link.href = "/assets/resumes/resume.pdf";
  link.download = "resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const sendMailTo = () => {
    const link = document.createElement("a");
    link.href = "mailto:example@example.com";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
