import { FaGithub } from "react-icons/fa";

export default function Repository({ git }: { git: string }) {
    return (
        <a href={git} className="size-8 flex items-center justify-center text-action-muted" target="_blank" rel="noopener noreferrer">
            <FaGithub className="size-92/100" />
        </a>
    )
}