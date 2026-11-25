import type { Lang } from "../contexts/LanguageProvider";
import type { ComponentType, SVGProps } from "react";
import type { IconType } from "react-icons"
import { TbArrowsJoin, TbBrandGithub, TbBriefcase, TbCode, TbHeadset, TbHome, TbMail, TbUser } from "react-icons/tb"
import { FaInstagram } from "react-icons/fa";
import { SiReact, SiTailwindcss, SiTypescript } from "react-icons/si";
import { FiBookOpen, FiCheckCircle, FiFlag, FiMapPin, FiMessageCircle, FiShield, FiTrendingUp, FiUsers } from "react-icons/fi";
import { LuMail, LuMapPin, LuPhone } from "react-icons/lu";
import { JavaScript, TypeScript, MySQL, HTML5, CSS, React, ReactRouter, TailwindCSS, Nodejs, VisualStudioCode, Git, Vite, Figma, Expressjs, Supabase } from "../assets/TechIcons"
import BR from "../assets/flags/BR";
import US from "../assets/flags/US";
import SP from "../assets/flags/SP";
import movixyPreview from "../assets/images/projects/movixy-preview.png"

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

export type ProfileInfo = {
    icon: IconType
    label: string
    status: boolean
}

export type ServiceItem = {
    label: string
    icon: IconType
}

export type PersonalSkill = {
    title: string
    icon: IconType
}

export type Tech = {
    key: string
    name: string
    icon: ComponentType<SVGProps<SVGSVGElement>>
    link: string
    description: string
    category: 'language' | 'library' | 'framework' | 'tool'
}

export type Project = {
    name: string
    desc: string
    tech: string[]
    preview: string
    url: string
    git: string
    soon?: boolean
}

export type SkillGroup = {
    title: string
    description: string
    list: Tech[]
}

export type SocialItem = {
    label: string
    info: string
    url: string
    icon: IconType
    email?: boolean
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
        href: 'lucassouzaf21@gmail.com',
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

export const profileMeta: ProfileInfo[] = [
    {
        icon: FiMapPin,
        label: 'Ceará, BR',
        status: false
    },
    {
        icon: FiCheckCircle,
        label: 'status',
        status: true
    }
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

export const techs: Record<'front' | 'back' | 'tools', Tech[]> = {
    front: [
        {
            key: 'js',
            name: 'JavaScript',
            icon: JavaScript,
            link: 'https://tc39.es/ecma262/',
            description: 'javascriptDescription',
            category: 'language',
        },
        {
            key: 'ts',
            name: 'TypeScript',
            icon: TypeScript,
            link: 'https://www.typescriptlang.org/',
            description: 'typescriptDescription',
            category: 'language',
        },
        {
            key: 'react',
            name: 'React',
            icon: React,
            link: 'https://react.dev/',
            description: 'reactDescription',
            category: 'library',
        },
        {
            key: 'router',
            name: 'React Router',
            icon: ReactRouter,
            link: 'https://reactrouter.com/',
            description: 'routerDescription',
            category: 'library',
        },
        {
            key: 'tw',
            name: 'Tailwind CSS',
            icon: TailwindCSS,
            link: 'https://tailwindcss.com/',
            description: 'tailwindDescription',
            category: 'framework',
        },
        {
            key: 'html',
            name: 'HTML',
            icon: HTML5,
            link: 'https://html.spec.whatwg.org/',
            description: 'htmlDescription',
            category: 'language',
        },
        {
            key: 'css',
            name: 'CSS',
            icon: CSS,
            link: 'https://www.w3.org/Style/CSS/Overview.en.html',
            description: 'cssDescription',
            category: 'language',
        },
    ],
    back: [
        {
            key: 'node',
            name: 'Node.js',
            icon: Nodejs,
            link: 'https://nodejs.org/en',
            description: 'nodeDescription',
            category: 'framework',
        },
        {
            key: 'express',
            name: 'Express.js',
            icon: Expressjs,
            link: 'https://expressjs.com/',
            description: 'expressDescription',
            category: 'framework',
        },
        {
            key: 'mysql',
            name: 'MySQL',
            icon: MySQL,
            link: 'https://www.mysql.com/',
            description: 'mysqlDescription',
            category: 'tool',
        },
        {
            key: 'supabase',
            name: 'Supabase',
            icon: Supabase,
            link: 'https://supabase.com/',
            description: 'supabaseDescription',
            category: 'tool',
        },
    ], tools: [
        {
            key: 'vsc',
            name: 'VS Code',
            icon: VisualStudioCode,
            link: 'https://code.visualstudio.com/',
            description: 'vscodeDescription',
            category: 'tool',
        },
        {
            key: 'git',
            name: 'Git',
            icon: Git,
            link: 'https://git-scm.com/',
            description: 'gitDescription',
            category: 'tool',
        },
        {
            key: 'vite',
            name: 'Vite',
            icon: Vite,
            link: 'https://vite.dev/',
            description: 'viteDescription',
            category: 'tool',
        },
        {
            key: 'figma',
            name: 'Figma',
            icon: Figma,
            link: 'https://www.figma.com/',
            description: 'figmaDescription',
            category: 'tool',
        },
    ],
}

export const projects: Project[] = [
    {
        name: 'Movixy',
        desc: 'movixyDescription',
        tech: ['ts', 'react', 'tw'],
        preview: movixyPreview,
        url: 'https://movixy.pages.dev',
        git: 'https://github.com/LucasSouza210/Movixy'
    },
    {
        name: '',
        desc: '',
        tech: [],
        preview: '',
        url: '',
        git: '',
        soon: true
    },
    {
        name: '',
        desc: '',
        tech: [],
        preview: '',
        url: '',
        git: '',
        soon: true
    }
]

export const skillGroups: SkillGroup[] = [
    {
        title: 'frontendTitle',
        description: 'frontendDescription',
        list: techs.front,
    },
    {
        title: 'backendTitle',
        description: 'backendDescription',
        list: techs.back,
    },
    {
        title: 'toolsTitle',
        description: 'toolsDescription',
        list: techs.tools,
    },
]

export const social: SocialItem[] = [
    {
        label: 'emailLabel',
        info: 'lucassouzaf21@gmail.com',
        url: 'lucassouzaf21@gmail.com',
        icon: LuMail,
        email: true
    },
    {
        label: 'phoneLabel',
        info: '(55) +88 9 8102-8865',
        url: 'https://wa.me/558881028865?s=t',
        icon: LuPhone
    },
    {
        label: 'locationLabel',
        info: 'Limoeiro do Norte, CE, Brasil',
        url: 'https://maps.app.goo.gl/ZoHYMBvMhxssWqby7',
        icon: LuMapPin
    },
]

export const contactFields = [
    {
        name: "name" as const,
        title: "nameLabel",
        placeholder: "namePlaceholder",
        rules: {
            required: "nameRequiredError",
        },
    },
    {
        name: "email" as const,
        title: "emailLabel",
        placeholder: "emailPlaceholder",
        rules: {
            required: "emailRequiredError",
            pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "emailInvalidError",
            },
        },
    },
    {
        name: "message" as const,
        title: "messageLabel",
        placeholder: "messagePlaceholder",
        maxLength: 500,
        textarea: true,
        rules: {
            required: "messageRequiredError",
        },
    },
]