import type { Ref } from "react"
import { useTranslate } from "../../../../../../../../hooks/useTranslate"

type Props = {
    href: string
    label: string
    isActive: boolean
    onNavigate: (href: string) => void
    ref?: Ref<HTMLAnchorElement>
}

export default function Link({ href, label, isActive, onNavigate, ref }: Props) {

    const { line } = useTranslate()

    return (
        <a ref={ref} href={`#${href}`} aria-current={isActive ? "location" : undefined} className={`lg:text-xs xl:text-[13px] 2xl:text-sm font-medium tracking-wider ${isActive ? 'text-zinc-700 dark:text-zinc-100' : 'text-action'}`} style={{ transitionProperty: "color, opacity" }}
            onClick={(event) => {
                event.preventDefault()
                onNavigate(href)
            }}>
            {
                line(label)
            }
        </a>
    )
}