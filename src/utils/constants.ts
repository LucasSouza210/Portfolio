import type { Lang } from "../contexts/LanguageProvider";
import type { ComponentType, SVGProps } from "react";
import type { IconType } from "react-icons"
import { TbBriefcase, TbCode, TbHome, TbMail, TbUser } from "react-icons/tb"
import BR from "../assets/flags/BR";
import US from "../assets/flags/US";
import SP from "../assets/flags/SP";

export type NavLink = {
    href: string
    label: string
    icon: IconType
}

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

export const navLinks: NavLink[] = [
    {
        href: 'Home',
        label: 'homeLink',
        icon: TbHome
    },
    {
        href: 'About',
        label: 'aboutLink',
        icon: TbUser
    },
    {
        href: 'Projects',
        label: 'projectsLink',
        icon: TbBriefcase
    },
    {
        href: 'Skills',
        label: 'skillsLink',
        icon: TbCode
    },
    {
        href: 'Contact',
        label: 'contactLink',
        icon: TbMail
    },
]