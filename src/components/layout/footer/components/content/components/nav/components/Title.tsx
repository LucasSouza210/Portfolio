import { useTranslate } from "../../../../../../../../hooks/useTranslate"

export default function Title() {

    const { line } = useTranslate()

    return (
        <p className="text-sm font-medium tracking-[0.2em] uppercase text-muted">
            {
                line('navigation')
            }
        </p>
    )
}