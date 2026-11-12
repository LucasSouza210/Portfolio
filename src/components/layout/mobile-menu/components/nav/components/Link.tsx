import { useContext } from "react";
import { NavigationContext } from "../../../../../../contexts/NavigationProvider";
import { type IconType } from "react-icons";
import { useTranslate } from "../../../../../../hooks/useTranslate";
import useOverlay from "../../../../../../hooks/ui/useOverlay";

type Link = {
    label: string
    href: string
    icon: IconType
}

export default function MenuLink({ link }: { link: Link }) {

    const { scrollToSection, activeSection } = useContext(NavigationContext)!

    const { closeOverlay } = useOverlay()

    const { line } = useTranslate()

    const Icon = link.icon

    const isActive = activeSection == link.href

    const handleNavigate = () => {
        closeOverlay()
        scrollToSection(link.href)
    }

    return (
        <button className={`w-full h-12 sm:h-13 md:h-14 aspect-12/3 flex items-center gap-2 sm:gap-2.5 md:gap-3 px-4 sm:px-4.5 md:px-5 rounded-[10px] sm:rounded-[11px] md:rounded-xl text-sm sm:text-[15px] md:text-base font-medium tracking-wider transition-default cursor-pointer ${isActive ? 'text-white bg-indigo-500' : 'text-default hover:text-white hover:bg-indigo-500/70'}`} onClick={handleNavigate}>
            <Icon className="size-4 sm:size-4.5 md:size-5" />
            {
                line(link.label)
            }
        </button>
    )
}