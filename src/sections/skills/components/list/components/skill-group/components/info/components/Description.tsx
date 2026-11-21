import { useTranslate } from "../../../../../../../../../hooks/useTranslate"

export default function Description ({desc}: {desc: string}) {

    const { line } = useTranslate()

    return (
        <p className="text-xs font-medium tracking-wider leading-5 text-default">
            {
                line(desc)
            }
        </p>
    )
}