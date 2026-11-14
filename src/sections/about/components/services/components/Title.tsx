import { useTranslate } from "../../../../../hooks/useTranslate"

export default function Title() {

    const { line } = useTranslate()

    return (
        <p className="text-lg font-medium tracking-wider text-title">
            {
                line('servicesTitle')
            }
        </p>
    )
}