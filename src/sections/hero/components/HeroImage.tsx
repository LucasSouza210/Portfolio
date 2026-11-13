import { useTranslate } from "../../../hooks/useTranslate"
import image from "../../../assets/images/20261101_204940.jpg"

export default function HeroImage() {

    const { line } = useTranslate()

    return (
        <div className="size-52 sm:size-58 md:size-64 lg:w-35/100 lg:h-fit lg:aspect-square flex border rounded-full p-1.5 sm:p-1.75 md:p-2 lg:p-1 xl:p-1.25 2xl:p-1.5 bg-default border-default overflow-hidden">
            <img src={image} alt={line('heroImageAlt')} className="size-full rounded-full object-cover border bg-default border-default" />
        </div>
    )
}