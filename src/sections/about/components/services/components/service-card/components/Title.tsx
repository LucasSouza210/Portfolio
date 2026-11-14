import { useTranslate } from "../../../../../../../hooks/useTranslate"

export default function Title({ label }: { label: string }) {

    const { line } = useTranslate()

    return (
        <p className="text-xs font-medium tracking-wider text-default">
            {
                line(label)
            }
        </p>
    )
}