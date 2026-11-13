import { useTranslate } from "../../../../../../../hooks/useTranslate"
import { LuDownload } from "react-icons/lu"

export default function Resume() {

    const { line } = useTranslate()

    return (
        <button className="h-12 sm:h-13 md:h-14 lg:h-10 xl:h-11 2xl:h-12 aspect-4/1 lg:aspect-auto flex items-center justify-center gap-2 sm:gap-2.25 md:gap-2.5 lg:gap-1.5 xl:gap-1.75 2xl:gap-2 lg:px-4 xl:px-4.5 2xl:px-5 text-base sm:text-[17px] md:text-lg lg:text-xs xl:text-[13px] 2xl:text-sm font-medium tracking-wider rounded-[10px] sm:rounded-[11px] md:rounded-xl lg:rounded-lg xl:rounded-[9px] 2xl:rounded-[10px] action-brand text-action-inverse">
            {
                line('resume')
            }
            <LuDownload />
        </button>
    )
}