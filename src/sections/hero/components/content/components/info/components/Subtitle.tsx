import { useTranslate } from "../../../../../../../hooks/useTranslate"

export default function Subtitle() {

    const { line } = useTranslate()

    return (
        <p className="text-base sm:text-lg md:text-xl lg:text-sm xl:text-[15px] 2xl:text-base font-medium tracking-wider text-zinc-400">
            {
                line('role')
            }
        </p>
    )
}