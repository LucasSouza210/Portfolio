import { useTranslate } from "../../../../../../../../../../../hooks/useTranslate";
import { FiArrowUpRight } from "react-icons/fi";

export default function Link({ url }: { url: string }) {

    const { line } = useTranslate()

    return (
        <a href={url} aria-label={line('ariaProjectWebsite')} className="size-8 sm:size-9.5 md:size-11 lg:size-6 xl:size-7 2xl:size-8 flex items-center justify-center border rounded-full action-elevated border-action text-action" target="_blank" rel="noopener noreferrer">
            <FiArrowUpRight className="size-3/5" />
        </a>
    )
}