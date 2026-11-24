import { useTranslate } from "../../../../../../../../../hooks/useTranslate"

export default function Label({ label }: { label: string }) {

    const { line } = useTranslate()

    return (
        <p className="text-xs sm:text-sm md:text-base lg:text-[8px] xl:text-[10px] 2xl:text-xs font-medium tracking-wider leading-min text-muted">
            {
                line(label)
            }
        </p>
    )
}