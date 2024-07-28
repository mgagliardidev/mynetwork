import React from "react";

const SkillsParagraph = (props: any) => {
  return (
    <div className="bg-gray-200 rounded-lg py-10 px-7">
      <h1 className="text-3xl">{props.title}</h1>
      <p className="text-xl mt-3">{getFormattedSkills(props.skills)}</p>
    </div>
  );
};

function getFormattedSkills(skills: string[]): string {
  let skillsString = "";

  skills.forEach((s, index) => {
    skillsString += s + (index < skills.length - 1 ? " • " : "");
  });

  return skillsString;
}

export default SkillsParagraph;
