import { FaArrowDownLong } from "react-icons/fa6"
import { useTranslate } from "../../../../../hooks/useTranslate"

export default function Projects() {

    const { line } = useTranslate()

    return (
        <button className="h-12 sm:h-13 md:h-14 lg:h-8 xl:h-9 2xl:h-10 flex items-center justify-center gap-1 sm:gap-1.25 md:gap-1.5 lg:gap-1 xl:gap-1.25 2xl:gap-1.5 px-4 sm:px-4.5 md:px-5 lg:px-3 xl:px-3.5 2xl:px-4 text-sm sm:text-[15px] md:text-base lg:text-[10px] xl:text-[11px] 2xl:text-xs font-medium tracking-wider border rounded-[10px] sm:rounded-[11px] md:rounded-xl lg:rounded-md xl:rounded-[7px] 2xl:rounded-lg action-brand text-action-inverse border-action">
            {
                line('projectsTitle')
            }
            <FaArrowDownLong className="size-3 sm:size-3.5 md:size-4 lg:size-2 xl:size-2.5 2xl:size-3"/>
        </button>
    )
}