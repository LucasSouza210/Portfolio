import { useTranslate } from "../../../../../../../../hooks/useTranslate"
import type { NavLink } from "../../../../../../../../utils/constants"

export default function Link({ link }: { link: NavLink }) {

    const { line } = useTranslate()

    return (
        <a href={`#${link.href}`} className="text-sm sm:text-base md:text-lg lg:text-[10px] xl:text-xs 2xl:text-sm font-medium tracking-wider leading-min text-action">
            {
                line(link.label)
            }
        </a>
    )
}