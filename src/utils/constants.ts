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
