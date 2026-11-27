import { TbMail } from "react-icons/tb"
import { useTranslate } from "../../../../../../../hooks/useTranslate"

export default function Contact() {

    const { line } = useTranslate()

    return (
        <a href="#contact" className="h-11 sm:h-12 md:h-13 lg:h-8 xl:h-10 2xl:h-12 flex items-center justify-center gap-2 sm:gap-2.25 md:gap-2.5 lg:gap-1.5 xl:gap-1.75 2xl:gap-2 px-4 sm:px-4.5 md:px-5 lg:px-3 xl:px-3.5 2xl:px-4 border rounded-lg sm:rounded-[9px] md:rounded-[10px] lg:rounded-md xl:rounded-lg 2xl:rounded-[10px] text-sm sm:text-base md:text-lg lg:text-[10px] xl:text-[13px] 2xl:text-sm font-medium tracking-wider action-default border-action text-action">
            {
                line('contactTitle')
            }
            <TbMail />
        </a>
    )
}