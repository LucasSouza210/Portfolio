import { useTranslate } from "../../../../hooks/useTranslate"

export default function Title({ title }: { title: string }) {

    const { line } = useTranslate()

    return (
        <p className="w-fit flex flex-col gap-px text-lg font-medium tracking-wider text-title">
            {
                line(title)
            }
            <span className="w-full h-0.75 rounded-full bg-indigo-500"/>
        </p>
    )
}