import { useTranslate } from "../../../../../../../hooks/useTranslate"

export default function Role() {

    const { line } = useTranslate()

    return (
        <p className="text-xs font-medium tracking-wider text-default">
            {
                line('role')
            }
        </p>
    )
}