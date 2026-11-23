import { useTranslate } from "../../../../../../../../../hooks/useTranslate"

export default function Description({ desc }: { desc: string }) {

    const { line } = useTranslate()

    return (
        <p className="text-sm sm:text-base md:text-lg lg:text-[10px] xl:text-xs 2xl:text-sm font-medium tracking-wider leading-6 sm:leading-6.5 md:leading-7.5 lg:leading-min text-default">
            {
                line(desc)
            }
        </p>
    )
}