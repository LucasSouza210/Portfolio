import { useTranslate } from "../../../../../../../hooks/useTranslate"

export default function Description() {

    const { br } = useTranslate()

    return (
        <p className="sm:max-w-9/10 lg:max-w-none text-center lg:text-start text-base sm:text-lg md:text-xl lg:text-xs xl:text-sm 2xl:text-base font-medium tracking-wider leading-6.5 sm:leading-7.5 md:leading-8.5 lg:leading-5 xl:leading-6 2xl:leading-7 text-muted">
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