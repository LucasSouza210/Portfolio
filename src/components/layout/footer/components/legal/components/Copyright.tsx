import { useTranslate } from "../../../../../../hooks/useTranslate"

export default function Copyright() {

    const { line } = useTranslate()

    const year = new Date().getFullYear()

    return (
        <p className="text-xs font-medium tracking-wider text-muted">
            {
                `© ${year} Lucas Souza. ${line('copyRight')}`
            }
        </p>
    )
}