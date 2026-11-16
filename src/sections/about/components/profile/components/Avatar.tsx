import { useTranslate } from "../../../../../hooks/useTranslate"
import avatar from "../../../../../assets/images/portfolioAbout.jpeg"

export default function Avatar() {

    const { line } = useTranslate()

    return (
        <div className="w-19/50 lg:w-0 lg:min-w-3/5 aspect-square flex p-1.5 md:p-1.75 lg:p-1.25 2xl:p-1.5 border rounded-full overflow-hidden bg-default lg:bg-elevated border-default">
            <img src={avatar} alt={line('heroImageAlt')} className="size-full object-cover rounded-full border border-default" />
        </div>
    )
}