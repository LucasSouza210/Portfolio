import { useTranslate } from "../../../hooks/useTranslate"

export default function Heading({ text, translate = true, className }: { text: string, translate?: boolean, className?: string }) {

    const { line } = useTranslate()

    return (
        <p className={`text-lg sm:text-[19px] md:text-xl lg:text-sm 2xl:text-base font-medium tracking-wider text-title ${className}`}>
            {
                translate ? line(text) : text
            }
        </p>
    )
}