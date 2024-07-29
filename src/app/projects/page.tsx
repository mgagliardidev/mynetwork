import GitHubProjectCard from "@/components/githubProjectCard";
import { projectsItems } from "../../constants";
import React from "react";

const Projects = () => {
  return (
    <div className="flex w-full items-center justify-center">
      <div className="flex flex-col gap-6 items-center justify-center">
        {projectsItems.map((project, index) => (
          <GitHubProjectCard
            key={index}
            projectName={project.projectName}
            technologies={project.technologies}
            description={project.description}
            repoLink={project.repoLink}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
