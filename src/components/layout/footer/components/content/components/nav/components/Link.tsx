import { useTranslate } from "../../../../../../../../hooks/useTranslate"
import type { NavLink } from "../../../../../../../../utils/constants"

export default function Link({ link }: { link: NavLink }) {

    const { line } = useTranslate()

    return (
        <a href={`#${link.href}`} className="text-base font-medium tracking-wider text-action">
            {
                line(link.label)
            }
        </a>
    )
}