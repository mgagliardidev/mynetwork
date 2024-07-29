// components/GitHubProjectCard.tsx
import React from "react";
import { GitHubProjectCardProps } from "@/types/githubProjectCardProps";
import { SquareArrowOutUpRight as SquareArrowOutUpRightIcon } from "lucide-react";

const GitHubProjectCard: React.FC<GitHubProjectCardProps> = ({
  projectName,
  technologies,
  description,
  repoLink,
}) => {
  return (
    <a
      href={repoLink}
      target="_blank"
      rel="noopener noreferrer"
      className="block max-w-2xl mx-1 bg-white border border-gray-300 shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex-shrink-0 min-w-full"
    >
      <div className="p-8">
        <div className="flex flex-row justify-between">
          <h2 className="text-2xl font-bold text-black">{projectName}</h2>
          <SquareArrowOutUpRightIcon className="h-6 w-6" />
        </div>
        <div className="mt-4 min-w-full">
          <h4 className="text-lg font-semibold text-black">
            Technologies Used:
          </h4>

          <ul className="list-disc list-inside text-gray-600">
            {technologies.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </div>
        <p className="mt-6 text-gray-600">{description}</p>
      </div>
    </a>
  );
};

export default GitHubProjectCard;
