import { FaGithub } from "react-icons/fa";

export default function Repository({ git }: { git: string }) {
    return (
        <a href={git} className="size-8 sm:size-9.5 md:size-11 lg:size-6 xl:size-7 2xl:size-8 flex items-center justify-center text-action-muted" target="_blank" rel="noopener noreferrer">
            <FaGithub className="size-90/100" />
        </a>
    )
}