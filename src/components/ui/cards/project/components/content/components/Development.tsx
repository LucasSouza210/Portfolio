import { FaRegClock } from "react-icons/fa"
import { useTranslate } from "../../../../../../../hooks/useTranslate"

export default function Development() {

    const { line } = useTranslate()

    return (
        <span className="w-fit flex items-center gap-1.5 text-xs font-medium tracking-wider leading-min border rounded-full py-2 px-2.5 bg-elevated border-default text-default">
            <FaRegClock className="text-indigo-500" />
            {
                line('inDevelopment')
            }
        </span>
    )
}