import { useTranslate } from "../../../../../../../../hooks/useTranslate"

export default function Description() {

    const { line } = useTranslate()

    return (
        <p className="text-sm font-medium tracking-wider leading-6 text-default">
            {
                line('footerDescription')
            }
        </p>
    )
}