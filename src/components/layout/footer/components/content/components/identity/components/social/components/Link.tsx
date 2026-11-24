import { useTranslate } from "../../../../../../../../../../hooks/useTranslate"
import type { SocialLink } from "../../../../../../../../../../utils/constants"

export default function Link({ link }: { link: SocialLink }) {

    const { line } = useTranslate()

    const Icon = link.icon

    return (
        <a href={link.email ? `mailto:${link.href}` : link.href} className="text-action-muted" target="_blank" rel="noopener noreferrer" aria-label={line(link.label)}>
            <Icon className="size-6.5" />
        </a>
    )
}