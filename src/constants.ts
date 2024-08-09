import { GitHubProjectCardProps } from "@/types/githubProjectCardProps"

export const skillsList = {
    frontend: [
        "Html/CSS", "TailwindCSS", "Mobile UI"
    ],
    frameWorks: [
        "NodeJS", "Next.js", "React", "Flutter", "ExpressJS"
    ],
    languages: [
        "JavaScript",
          "TypeScript",
          "Python",
          "C",
          "C++",
          "C#",
          "Java",
    ],
    database: [
        "SQL", "MongoDB", "Firebase", "PostgreSQL",
    ],
    versioning: [
        "Git", "GitHub", "GitLab", "Azure DevOps", "CI/CD"
    ]
}

export const headerMenuItems = [
    { name: "Overview", href: "/" },
    { name: "Skills", href: "/skills" },
    { name: "Career", href: "/career" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
]

export const projectsItems: GitHubProjectCardProps[] = [
    {
        projectName: "MyNetwork Site",
        technologies: ["NextJS", "Tailwind", "TypeScript", "ReactJS", "Vercel"],
        description: "Personal website with React, TypeScript and Tailwind and NextJS as backend. Uses Vercel for hosting.",
        repoLink: "https://github.com/mgagliardidev/mynetwork",
    },
    {
        projectName: "Store APP",
        technologies: ["Flutter", "Supabase", "PostgresSQL", "Dart", "Riverpod (state managment)"],
        description: "Full stack E-commerce application for generic purposes. Written in Dart using Flutter, all products listed inside the app are stored in Supabase.",
        repoLink: "https://github.com/mgagliardidev/store_app",
    },
    {
        projectName: "Restaurant demo app",
        technologies: ["Flutter", "Firebase", "Dart", "Provider (state managment)"],
        description: "Food ordering app. Written in Dart using Flutter, all products listed inside the app are stored in Firebase.",
        repoLink: "https://github.com/mgagliardidev/restaurant_demo",
    },
    {
        projectName: "Express API",
        technologies: ["NodeJS", "TypeScript", "HTML/CSS", "ExpressJS", "Postman"],
        description: "Express API built with NodeJS and TypeScript. It is a RESTful API that allows users to write a file path (local or URL) and retrieve some info. The APIs are tested through Postman and Unit tests.",
        repoLink: "https://github.com/mgagliardidev/file_reader",
    },
]