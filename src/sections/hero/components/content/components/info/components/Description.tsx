import { useTranslate } from "../../../../../../../hooks/useTranslate"

export default function Description() {

    const { br } = useTranslate()

    return (
        <p className="max-w-4/5 lg:max-w-none text-center lg:text-start text-sm sm:text-base md:text-lg lg:text-[10px] xl:text-xs 2xl:text-sm font-medium tracking-wider leading-6 sm:leading-6.75 md:leading-7.5 lg:leading-4.5 xl:leading-5.5 2xl:leading-6.5 text-muted">
            <span className="lg:hidden">
                {
                    br('heroDescriptionMobile')
                }
            </span>
            <span className="hidden lg:inline">
                {
                    br('heroDescription')
                }
            </span>
        </p>
    )
}