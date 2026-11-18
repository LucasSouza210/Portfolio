import { useTranslate } from "../../../../hooks/useTranslate"

export default function Title({ title }: { title: string }) {

    const { line } = useTranslate()

    return (
        <p className="w-fit flex flex-col gap-2 sm:gap-2.25 md:gap-2.5 lg:gap-1.5 xl:gap-1.75 2xl:gap-2 text-lg sm:text-[19px] md:text-xl lg:text-sm xl:text-base 2xl:text-lg font-medium tracking-wider text-title">
            <span className="leading-min">
                {
                    line(title)
                }
            </span>
            <span className="w-full h-0.75 sm:h-1 md:h-1.25 lg:h-0.75 2xl:h-1 rounded-full bg-indigo-500" />
        </p>
    )
}