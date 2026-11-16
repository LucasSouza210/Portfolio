import { useTranslate } from "../../../../../../../hooks/useTranslate"

export default function Role() {

    const { line } = useTranslate()

    return (
        <p className="text-xs sm:text-sm md:text-base lg:text-xs xl:text-[13px] 2xl:text-sm font-medium tracking-wider text-default">
            {
                line('role')
            }
        </p>
    )
}