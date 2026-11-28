import { useTranslate } from "../../../../../../hooks/useTranslate"

export default function Copyright() {

    const { line } = useTranslate()

    const year = new Date().getFullYear()

    return (
        <p className="text-xs sm:text-sm md:text-base lg:text-[10px] xl:text-xs 2xl:text-sm font-medium tracking-wider text-muted">
            {
                `© ${year} Lucas Souza. ${line('copyRight')}`
            }
        </p>
    )
}