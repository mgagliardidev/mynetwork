import SkillParagraph from "@/components/skillsParagraph";
import {skillsList} from "../../constants";
import React from "react";

const Skills = () => {
  return (
    <div className="flex flex-col gap-6">
      <SkillParagraph
        title="Frontend"
        skills={skillsList.frontend}
      />

      <SkillParagraph
        title="Frameworks"
        skills={skillsList.frameWorks}
      />

      <SkillParagraph
        title="Programming Languages"
        skills={skillsList.languages}
      />

      <SkillParagraph
        title="Database"
        skills={skillsList.database}
      />

      <SkillParagraph
        title="Versioning"
        skills={skillsList.versioning}
      />
    </div>
  );
};

export default Skills;
