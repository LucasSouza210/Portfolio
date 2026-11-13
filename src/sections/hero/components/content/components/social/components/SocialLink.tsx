import type { SocialLink } from "../../../../../../../utils/constants";

export default function SocialLink({ link }: { link: SocialLink }) {

    const Icon = link.icon

    return (
        <a href={link.email ? `mailto:${link.href}` : link.href} className="text-action" target="_blank" rel="noopener noreferrer">
            <Icon className="size-7" />
        </a>
    )
}