import { useTranslate } from "../../../../../../../hooks/useTranslate"

export default function Greeting() {

    const { line } = useTranslate()

    return (
        <p className="text-base sm:text-lg md:text-xl lg:text-[10px] xl:text-xs 2xl:text-sm font-medium tracking-wider leading-min text-muted">
            {
                line('greeting')
            }
        </p>
    )
}