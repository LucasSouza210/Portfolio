import { useTranslate } from "../../../../../hooks/useTranslate"
import { LuDownload } from "react-icons/lu"

export default function Resume() {

    const { line } = useTranslate()

    return (
        <button className="h-12 flex items-center justify-center gap-1.5 px-4 text-sm font-medium tracking-wider border rounded-[10px] action-default text-action border-action">
            {
                line('resume')
            }
            <LuDownload />
        </button>
    )
}