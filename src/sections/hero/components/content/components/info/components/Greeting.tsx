import { useTranslate } from "../../../../../../../hooks/useTranslate"

export default function Greeting() {

    const { line } = useTranslate()

    return (
        <p className="text-lg sm:text-xl md:text-[22px] lg:text-sm xl:text-[15px] 2xl:text-base font-medium tracking-wider text-zinc-400">
            {
                line('greeting')
            }
        </p>
    )
}