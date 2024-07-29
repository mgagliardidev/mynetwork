import GitHubProjectCard from "@/components/githubProjectCard";
import React from "react";

const Projects = () => {
  return (
    <div className="flex flex-col gap-6">
      <GitHubProjectCard
        projectName="Store APP - in progress"
        technologies={["Flutter", "Supabase", "PostgresSQL", "Dart", "Provider (state managment)"]}
        description="E-commerce application for generic purposes. Written in Dart using Flutter, all products listed inside the app are stored in Supabase."
        repoLink="https://github.com/mgagliardidev/store_app"
      />

      <GitHubProjectCard
        projectName="Express API"
        technologies={["NodeJS", "TypeScript", "HTML/CSS", "ExpressJS", "Postman"]}
        description="Express API built with NodeJS and TypeScript. It is a RESTful API that allows users to write a file path (local or URL) and retrieve some info. The APIs are tested through Postman and Unit tests."
        repoLink="https://github.com/mgagliardidev/file_reader"
      />
    </div>
  );
};

export default Projects;
