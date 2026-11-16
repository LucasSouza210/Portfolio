import { useTranslate } from "../../../../../hooks/useTranslate"

export default function Content() {

    const { line } = useTranslate()

    return (
        <p className="text-sm sm:text-[15px] md:text-base lg:text-xs xl:text-sm 2xl:text-base font-medium tracking-wider leading-6 sm:leading-6.5 md:leading-7 lg:leading-5 xl:leading-6 2xl:leading-7 text-default">
            {
                line('bio')
            }
        </p>
    )
}