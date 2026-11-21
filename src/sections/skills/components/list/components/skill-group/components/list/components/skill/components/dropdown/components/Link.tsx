import { FiArrowUpRight } from "react-icons/fi";

export default function Link({ url }: { url: string }) {
    return (
        <a href={url} className="size-7 sm:size-8 md:size-9 lg:size-6 xl:size-7 2xl:size-8 flex items-center justify-center border rounded-full action-elevated border-action text-action-muted" target="_blank" rel="noopener noreferrer">
            <FiArrowUpRight className="size-65/100" />
        </a>
    )
}