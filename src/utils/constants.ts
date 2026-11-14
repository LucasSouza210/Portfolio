import type { Lang } from "../contexts/LanguageProvider";
import type { ComponentType, SVGProps } from "react";
import type { IconType } from "react-icons"
import { TbArrowsJoin, TbBrandGithub, TbBriefcase, TbCode, TbHeadset, TbHome, TbMail, TbUser } from "react-icons/tb"
import { FaInstagram } from "react-icons/fa";
import { SiReact, SiTailwindcss, SiTypescript } from "react-icons/si";
import BR from "../assets/flags/BR";
import US from "../assets/flags/US";
import SP from "../assets/flags/SP";
import { FiBookOpen, FiFlag, FiMessageCircle, FiShield, FiTrendingUp, FiUsers } from "react-icons/fi";

export type NavLink = {
    href: string
    label: string
    icon: IconType
}

export type SocialLink = {
    icon: IconType
    href: string
    label: string
    email: boolean
}

export type AboutSkill = {
    icon: IconType
    label: string
}

export type ServiceItem = {
    label: string
    icon: IconType
}

export type PersonalSkill = {
    title: string
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
        href: 'home',
        label: 'homeLink',
        icon: TbHome
    },
    {
        href: 'about',
        label: 'aboutLink',
        icon: TbUser
    },
    {
        href: 'projects',
        label: 'projectsLink',
        icon: TbBriefcase
    },
    {
        href: 'skills',
        label: 'skillsLink',
        icon: TbCode
    },
    {
        href: 'contact',
        label: 'contactLink',
        icon: TbMail
    },
]

export const heroLinks = [
    {
        icon: FaInstagram,
        href: 'https://www.instagram.com/lucassz.fg/',
        label: 'instagramLabel',
        email: false
    },
    {
        icon: TbBrandGithub,
        href: 'https://github.com/LucasSouza210',
        label: 'githubLabel',
        email: false
    },
    {
        icon: TbMail,
        href: 'lucassouzafigueiredo17@gmail.com',
        label: 'emailLabel',
        email: true
    }
]

export const stackIcons: AboutSkill[] = [
    {
        icon: SiReact,
        label: "React"
    },
    {
        icon: SiTypescript,
        label: "TypeScript"
    },
    {
        icon: SiTailwindcss,
        label: "Tailwind CSS"
    },
]

export const services: ServiceItem[] = [
    {
        label: 'creation',
        icon: TbCode
    },
    {
        label: 'support',
        icon: TbHeadset
    },
    {
        label: 'integration',
        icon: TbArrowsJoin
    }
]

export const personalSkills: PersonalSkill[] = [
    {
        title: "communication",
        icon: FiMessageCircle
    },
    {
        title: "leadership",
        icon: FiFlag
    },
    {
        title: "teaching",
        icon: FiBookOpen
    },
    {
        title: "proactivity",
        icon: FiTrendingUp
    },
    {
        title: "collaboration",
        icon: FiUsers
    },
    {
        title: "resilience",
        icon: FiShield
    }
]