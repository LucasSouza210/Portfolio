import { useTranslate } from "../../../../../../../hooks/useTranslate"
import { LuDownload } from "react-icons/lu"

export default function Resume() {

    const { line } = useTranslate()

    return (
        <button className="h-12 aspect-4/1 flex items-center justify-center gap-2 text-base font-medium tracking-wider rounded-[10px] action-brand text-action-inverse">
            {
                line('resume')
            }
            <LuDownload />
        </button>
    )
}