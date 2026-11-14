import { useTranslate } from "../../../../../hooks/useTranslate"
import avatar from "../../../../../assets/images/portfolioAbout.jpeg"

export default function Avatar() {

    const { line } = useTranslate()

    return (
        <div className="w-40/100 max-w-30 aspect-square flex p-1.5 border rounded-full overflow-hidden bg-default border-default">
            <img src={avatar} alt={line('heroImageAlt')} className="size-full object-cover rounded-full border border-default" />
        </div>
    )
}