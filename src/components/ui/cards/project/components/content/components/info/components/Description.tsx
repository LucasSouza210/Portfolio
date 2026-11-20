import { useTranslate } from "../../../../../../../../../hooks/useTranslate"

export default function Description({ desc }: { desc: string }) {

    const { line } = useTranslate()

    return (
        <p className="text-sm sm:text-[15px] md:text-base lg:text-[10px] xl:text-xs 2xl:text-sm font-medium tracking-wider leading-6 sm:leading-6.75 md:leading-7.5 lg:leading-4.5 xl:leading-5.25 2xl:leading-6 text-default">
            {
                line(desc)
            }
        </p>
    )
}