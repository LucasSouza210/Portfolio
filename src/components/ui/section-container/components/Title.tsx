import { useTranslate } from "../../../../hooks/useTranslate"

export default function Title({ title }: { title: string }) {

    const { line } = useTranslate()

    return (
        <p className="w-fit flex flex-col gap-px text-lg sm:text-[19px] md:text-xl lg:text-sm xl:text-base 2xl:text-lg font-medium tracking-wider text-title">
            {
                line(title)
            }
            <span className="w-full h-0.75 md:h-1 rounded-full bg-indigo-500"/>
        </p>
    )
}