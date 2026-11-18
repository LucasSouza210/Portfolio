import { useTranslate } from "../../../../../../../../../hooks/useTranslate"

export default function Description({ desc }: { desc: string }) {

    const { line } = useTranslate()

    return (
        <p className="text-sm font-medium tracking-wider leading-5.75 text-default">
            {
                line(desc)
            }
        </p>
    )
}