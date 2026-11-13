import { useTranslate } from "../../../../../../../hooks/useTranslate";
import type { SocialLink } from "../../../../../../../utils/constants";

export default function SocialLink({ link }: { link: SocialLink }) {

    const { line } = useTranslate()

    const Icon = link.icon

    return (
        <a href={link.email ? `mailto:${link.href}` : link.href} className="text-action" target="_blank" rel="noopener noreferrer" aria-label={line(link.label)}>
            <Icon className="size-7 sm:size-8 md:size-9 lg:size-5 2xl:size-6" />
        </a>
    )
}