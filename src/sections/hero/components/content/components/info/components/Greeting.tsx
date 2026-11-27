import { useTranslate } from "../../../../../../../hooks/useTranslate"

export default function Greeting() {

    const { line } = useTranslate()

    return (
        <p className="text-base sm:text-lg md:text-xl lg:text-xs xl:text-[15px] 2xl:text-base font-medium tracking-wider leading-min text-muted lg:text-default">
            {
                line('greeting')
            }
        </p>
    )
}