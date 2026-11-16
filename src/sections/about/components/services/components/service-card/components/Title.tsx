import { useTranslate } from "../../../../../../../hooks/useTranslate"

export default function Title({ label, index }: { label: string, index: number }) {

    const { line } = useTranslate()

    return (
        <p className="lg:flex lg:items-center lg:gap-1.25 xl:gap-1.5 2xl:gap-1.75 text-xs sm:text-sm md:text-base lg:text-[10px] xl:text-[11px] 2xl:text-xs font-medium tracking-wider text-default">
            <span className="hidden lg:block lg:text-[8px] xl:text-[9px] 2xl:text-[10px] leading-none text-zinc-400">
                {
                    `0${index + 1}`
                }
            </span>
            {
                line(label)
            }
        </p>
    )
}