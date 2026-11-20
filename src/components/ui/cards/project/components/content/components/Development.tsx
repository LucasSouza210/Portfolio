import { FaRegClock } from "react-icons/fa"
import { useTranslate } from "../../../../../../../hooks/useTranslate"

export default function Development() {

    const { line } = useTranslate()

    return (
        <span className="w-fit flex items-center gap-1.5 sm:gap-1.75 md:gap-2 lg:gap-1 xl:gap-1.25 2xl:gap-1.5 text-xs sm:text-[13px] md:text-sm lg:text-[8px] xl:text-[10px] 2xl:text-xs font-medium tracking-wider leading-min border rounded-full py-2 sm:py-2.25 md:py-2.5 lg:py-1.5 xl:py-1.75 2xl:py-2 px-2.5 sm:px-3 md:px-3.5 lg:px-2 xl:px-2.5 2xl:px-3 bg-elevated border-default text-default">
            <FaRegClock className="text-indigo-500" />
            {
                line('inDevelopment')
            }
        </span>
    )
}