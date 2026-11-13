import { useTranslate } from "../../../../../../../hooks/useTranslate"

export default function Subtitle() {

    const { line } = useTranslate()

    return (
        <p className="text-base font-medium tracking-wider text-zinc-400">
            {
                line('role')
            }
        </p>
    )
}