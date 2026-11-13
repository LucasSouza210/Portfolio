import type { Lang } from "../contexts/LanguageProvider";
import type { ComponentType, SVGProps } from "react";
import type { IconType } from "react-icons"
import { TbBriefcase, TbCode, TbHome, TbMail, TbUser } from "react-icons/tb"
import { FaEnvelope, FaGithub, FaInstagram } from "react-icons/fa";
import BR from "../assets/flags/BR";
import US from "../assets/flags/US";
import SP from "../assets/flags/SP";

export type NavLink = {
    href: string
    label: string
    icon: IconType
}

export type SocialLink = {
    icon: IconType
    href: string
    email: boolean
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

export const heroLinks = [
    {
        icon: FaInstagram,
        href: 'https://www.instagram.com/lucassz.fg/',
        email: false
    },
    {
        icon: FaGithub,
        href: 'https://github.com/LucasSouza210',
        email: false
    },
    {
        icon: FaEnvelope,
        href: 'lucassouzafigueiredo17@gmail.com',
        email: true
    }
]