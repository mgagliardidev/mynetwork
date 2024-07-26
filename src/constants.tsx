import { Icon } from "@iconify/react/dist/iconify.js";
import { SideNavItem } from "./types";

export const SIDENAVITEMS: SideNavItem[] = [

    {
        title: "Overview",
        link: "/",
        icon: <Icon icon="lucide:home" width="24" height="24"/>,
    },
    {
        title: "Skills",
        link: "/skills",
        icon: <Icon icon="lucide:star" width="24" height="24"/>,
    },
    {
        title: "Projects",
        link: "/projects",
        icon: <Icon icon="lucide:github" width="24" height="24"/>,
    },
    {
        title: "Career",
        link: "/career",
        icon: <Icon icon="lucide:mail" width="24" height="24"/>,
    },
    {
        title: "Contact",
        link: "/contact",
        icon: <Icon icon="lucide:contact" width="24" height="24"/>,
    }

]