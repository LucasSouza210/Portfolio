import { useTranslate } from "../../../hooks/useTranslate"
import image from "../../../assets/images/20261101_205328(2).jpg"

export default function HeroImage() {

    const { line } = useTranslate()

    return (
        <div className="w-4/6 sm:w-3/5  lg:w-34/100 lg:h-fit aspect-square flex border rounded-full p-1.5 sm:p-1.75 md:p-2 lg:p-1 xl:p-1.25 2xl:p-1.5 bg-default border-default overflow-hidden">
            <img src={image} alt={line('heroImageAlt')} className="size-full rounded-full object-cover border bg-default border-default" />
        </div>
    )
}