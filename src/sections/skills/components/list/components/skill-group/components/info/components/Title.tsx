import { useTranslate } from "../../../../../../../../../hooks/useTranslate"

export default function Title({ title }: { title: string }) {

    const { line } = useTranslate()

    return (
        <p className="text-base font-medium tracking-wider leading-min text-title">
            {
                line(title)
            }
        </p>
    )
}