import { useTranslate } from "../../../../../../../../hooks/useTranslate"

export default function Title() {

    const { line } = useTranslate()

    return (
        <p className="text-sm sm:text-base md:text-lg lg:text-[10px] xl:text-xs 2xl:text-sm font-medium tracking-[0.2em] uppercase text-muted">
            {
                line('navigation')
            }
        </p>
    )
}