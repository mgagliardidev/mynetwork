import SkillParagraph from "@/components/skillsParagraph";
import React from "react";

const Skills = () => {
  return (
    <div className="flex flex-col gap-6">
      <SkillParagraph
        title="Frontend"
        skills={["Html/CSS", "TailwindCSS", "Mobile UI"]}
      />

      <SkillParagraph
        title="Backend"
        skills={["NodeJS", "Next.js", "React", "Flutter", "ExpressJS"]}
      />

      <SkillParagraph
        title="Programming Languages"
        skills={[
          "JavaScript",
          "TypeScript",
          "Python",
          "C",
          "C++",
          "C#",
          "Java",
        ]}
      />

      <SkillParagraph
        title="Database"
        skills={["SQL", "MongoDB", "Firebase", "PostgreSQL"]}
      />

      <SkillParagraph
        title="Versioning"
        skills={["Git", "GitHub", "GitLab", "Azure DevOps", "CI/CD"]}
      />
    </div>
  );
};

export default Skills;
