import { useTranslate } from "../../../../../../../hooks/useTranslate"
import { LuDownload } from "react-icons/lu"

export default function Resume() {

    const { line } = useTranslate()

    return (
        <button className="h-11 sm:h-12 md:h-13 lg:h-8 xl:h-10 2xl:h-12 flex items-center justify-center gap-2 sm:gap-2.25 md:gap-2.5 lg:gap-1.5 xl:gap-1.75 2xl:gap-2 px-4 sm:px-4.5 md:px-5 lg:px-3 xl:px-3.5 2xl:px-4 rounded-lg sm:rounded-lg md:rounded-[10px] lg:rounded-md xl:rounded-[9px] 2xl:rounded-[10px] text-sm sm:text-base md:text-lg lg:text-[10px] xl:text-[13px] 2xl:text-sm font-medium tracking-wider action-brand text-action-inverse">
            {
                line('resume')
            }
            <LuDownload />
        </button>
    )
}