import { useTranslate } from "../../../../../../../hooks/useTranslate"

export default function Greeting() {

    const { line } = useTranslate()

    return (
        <p className="text-lg font-medium tracking-wider text-zinc-400">
            {
                line('greeting')
            }
        </p>
    )
}