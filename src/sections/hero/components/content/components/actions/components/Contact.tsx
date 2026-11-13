import { TbMail } from "react-icons/tb"
import { useTranslate } from "../../../../../../../hooks/useTranslate"

export default function Contact() {

    const { line } = useTranslate()

    return (
        <a href="#contact" className="h-12 aspect-4/1 flex items-center justify-center gap-2 text-base font-medium tracking-wider border rounded-[10px] action-default border-action text-action">
            {
                line('contactTitle')
            }
            <TbMail />
        </a>
    )
}