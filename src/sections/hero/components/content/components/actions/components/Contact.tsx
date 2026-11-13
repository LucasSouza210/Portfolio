import { TbMail } from "react-icons/tb"
import { useTranslate } from "../../../../../../../hooks/useTranslate"

export default function Contact() {

    const { line } = useTranslate()

    return (
        <a href="#contact" className="h-12 sm:h-13 md:h-14 lg:h-10 xl:h-11 2xl:h-12 aspect-4/1 lg:aspect-auto flex items-center justify-center gap-2 sm:gap-2.25 md:gap-2.5 lg:gap-1.5 xl:gap-1.75 2xl:gap-2 lg:px-4 text-base sm:text-[17px] md:text-lg lg:text-xs xl:text-[13px] 2xl:text-sm font-medium tracking-wider border rounded-[10px] sm:rounded-[11px] md:rounded-xl lg:rounded-lg xl:rounded-[9px] 2xl:rounded-[10px] action-default border-action text-action">
            {
                line('contactTitle')
            }
            <TbMail />
        </a>
    )
}