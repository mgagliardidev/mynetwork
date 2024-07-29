import React from "react";
import PersonalInfoBlock from "@/components/personalInfoBlock";
import {
  GithubButton,
  LinkedinButton,
  MailButton,
  ResumeDownloadButton,
} from "@/components/accountButtons";

const Contact = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col md:flex-row lg:flex-row gap-5 justify-center items-center">
        <label className="flex h-40 w-40 flex-col mt-3 items-center justify-center rounded-full border bg-gray-300 uppercase tracking-wide shadow-lg">
          <h1 className="font-extrabold text-center justify-center items-center text-6xl text-white">
            MG
          </h1>
        </label>
        <PersonalInfoBlock
          name="Matteo"
          surname="Gagliardi"
          mail="matteogagliardi7599@gmail.com"
          dob="07/05/1999"
          nationality="Italian"
        />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-x-3 gap-y-1 mt-5">
          <LinkedinButton />
          <GithubButton />
          <MailButton />
          <ResumeDownloadButton />
        </div>
      </div>
    </>
  );
};

export default Contact;
