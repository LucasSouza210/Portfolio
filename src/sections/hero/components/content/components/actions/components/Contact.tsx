import { TbMail } from "react-icons/tb"
import { useTranslate } from "../../../../../../../hooks/useTranslate"

export default function Contact() {

    const { line } = useTranslate()

    return (
        <a href="#contact" className="h-11 sm:h-12 md:h-13 lg:h-7.5 xl:h-9 2xl:h-10.5 flex items-center justify-center gap-2 sm:gap-2.25 md:gap-2.5 lg:gap-1.5 xl:gap-1.75 2xl:gap-2 px-3.5 sm:px-4 md:px-4.5 lg:px-2.5 xl:px-3 2xl:px-3.5 border rounded-lg sm:rounded-[9px] md:rounded-[10px] lg:rounded-md xl:rounded-[7px] 2xl:rounded-lg text-sm sm:text-base md:text-lg lg:text-[10px] xl:text-xs 2xl:text-sm font-medium tracking-wider action-default border-action text-action">
            {
                line('contactTitle')
            }
            <TbMail />
        </a>
    )
}