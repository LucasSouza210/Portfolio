import { useTranslate } from "../../../../../../../hooks/useTranslate"

export default function Title() {

    const { line } = useTranslate()

    return (
        <p className="text-base font-medium tracking-wider leading-min text-title">
            {
                line('calloutTitle')
            }
        </p>
    )
}