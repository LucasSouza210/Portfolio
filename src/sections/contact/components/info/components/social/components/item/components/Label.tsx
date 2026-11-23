import { useTranslate } from "../../../../../../../../../hooks/useTranslate"

export default function Label({ label }: { label: string }) {

    const { line } = useTranslate()

    return (
        <p className="text-xs font-medium tracking-wider leading-min text-zinc-400">
            {
                line(label)
            }
        </p>
    )
}