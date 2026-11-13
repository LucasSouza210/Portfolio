import { useTranslate } from "../../../hooks/useTranslate"
import image from "../../../assets/images/20261101_204940.jpg"

export default function HeroImage() {

    const { line } = useTranslate()

    return (
        <div className="size-56 flex border rounded-full p-1.5 bg-default border-default overflow-hidden">
            <img src={image} alt={line('heroImageAlt')} className="size-full rounded-full object-cover border bg-default border-default" />
        </div>
    )
}