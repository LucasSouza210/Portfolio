import { useTranslate } from "../../../../../../../hooks/useTranslate"

export default function Role() {

    const { line } = useTranslate()

    return (
        <p className="text-xs sm:text-sm md:text-base lg:text-[10px] xl:text-[11px] 2xl:text-xs font-medium tracking-wider text-default">
            {
                line('role')
            }
        </p>
    )
}