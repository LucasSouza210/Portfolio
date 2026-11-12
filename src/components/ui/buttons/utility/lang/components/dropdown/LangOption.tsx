import { useContext, type ComponentType, type SVGProps } from "react"
import { LanguageContext, type Lang } from "../../../../../../../contexts/LanguageProvider"

interface LangOptionProps {
    option: { lang: Lang, flag: ComponentType<SVGProps<SVGSVGElement>> }
    label: string
    Flag: ComponentType<{ className?: string }>
    close: () => void
}

export default function LangOption({ option, label, Flag, close }: LangOptionProps) {

    const { lang, setLang } = useContext(LanguageContext)!

    const handleClose = () => {
        setTimeout(() => {
            setLang(option.lang)
            close()
        }, 50)
    }

    return (
        <button className={`h-9 sm:h-10 md:h-11 lg:h-8 xl:h-8.5 2xl:h-9 flex items-center gap-1.5 sm:gap-1.75 md:gap-2 lg:gap-1.5 xl:gap-1.75 2xl:gap-2 px-3 sm:px-3.25 md:px-3.5 lg:px-2.5 xl:px-2.75 2xl:px-3 border rounded-[7px] sm:rounded-lg md:rounded-[9px] lg:rounded-md xl:rounded-[7px] 2xl:rounded-lg transition-all duration-300 ease-in-out cursor-pointer ${option.lang == lang ? 'bg-elevated border-default text-indigo-500' : 'border-transparent text-default hover:bg-elevated'}`} aria-label={label} onClick={handleClose}>
            <Flag className="h-2.5 sm:h-2.75 md:h-3 lg:h-2 xl:h-2.25 2xl:h-2.5 w-auto" />
            <p className="text-sm sm:text-base md:text-lg lg:text-xs xl:text-[13px] 2xl:text-sm font-semibold tracking-wide md:tracking-wider lg:tracking-wide 2xl:tracking-wider uppercase">{option.lang}</p>
        </button>
    )
}