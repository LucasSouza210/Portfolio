import type { Lang } from "../contexts/LanguageProvider";
import type { ComponentType, SVGProps } from "react";
import BR from "../assets/flags/BR";
import US from "../assets/flags/US";
import SP from "../assets/flags/SP";

export const langOptions: { lang: Lang; label: string; flag: ComponentType<SVGProps<SVGSVGElement>> }[] = [
    {
        lang: 'pt',
        label: 'Português',
        flag: BR
    },
    {
        lang: 'en',
        label: 'English',
        flag: US
    },
    {
        lang: 'es',
        label: 'Español',
        flag: SP
    },
]

export const navLinks = [
    {
        href: 'Home',
        label: 'homeLink'
    },
    {
        href: 'About',
        label: 'aboutLink'
    },
    {
        href: 'Projects',
        label: 'projectsLink'
    },
    {
        href: 'Skills',
        label: 'skillsLink'
    },
    {
        href: 'Contact',
        label: 'contactLink'
    },
]