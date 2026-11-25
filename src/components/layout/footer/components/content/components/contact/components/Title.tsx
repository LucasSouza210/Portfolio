import { useTranslate } from "../../../../../../../../hooks/useTranslate"

export default function Title() {

    const { line } = useTranslate()

    return (
        <p className="text-sm sm:text-base md:text-lg lg:text-[8px] xl:text-[10px] 2xl:text-xs font-medium tracking-[0.2em] uppercase text-muted">
            {
                line('contactTitle')
            }
        </p>
    )
}