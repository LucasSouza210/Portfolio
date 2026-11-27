import { useTranslate } from "../../../../../../../hooks/useTranslate";
import type { SocialLink } from "../../../../../../../utils/constants";

export default function SocialLink({ link }: { link: SocialLink }) {

    const { line } = useTranslate()

    const Icon = link.icon

    return (
        <a href={link.email ? `mailto:${link.href}` : link.href} className="size-10 sm:size-11 md:size-12 lg:size-7 xl:size-9 2xl:size-9 flex items-center justify-center bg-center border rounded-lg sm:rounded-[9px] md:rounded-[10px] lg:rounded-md 2xl:rounded-lg action-default border-action text-action-muted" target="_blank" rel="noopener noreferrer" aria-label={line(link.label)}>
            <Icon className="size-55/100" />
        </a>
    )
}