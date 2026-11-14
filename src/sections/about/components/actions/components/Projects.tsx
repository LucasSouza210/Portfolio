import { FaArrowDownLong } from "react-icons/fa6"
import { useTranslate } from "../../../../../hooks/useTranslate"

export default function Projects() {

    const { line } = useTranslate()

    return (
        <button className="h-12 flex items-center justify-center gap-1.5 px-4 text-sm font-medium tracking-wider border rounded-[10px] action-brand text-action-inverse border-action">
            {
                line('projectsTitle')
            }
            <FaArrowDownLong className="size-3"/>
        </button>
    )
}