import { useTranslate } from "../../../../../hooks/useTranslate"

export default function Content() {

    const { line } = useTranslate()

    return (
        <p className="text-sm font-medium tracking-wider leading-6 text-default">
            {
                line('bio')
            }
        </p>
    )
}