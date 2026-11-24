import type { InputHTMLAttributes, Ref } from "react"
import { useTranslate } from "../../../../../../../../../../../hooks/useTranslate"

export default function FormInput({ ref, maxLength, inputProps }: { ref: Ref<HTMLInputElement>, maxLength?: number, inputProps: InputHTMLAttributes<HTMLInputElement> }) {

    const { line } = useTranslate()

    return (
        <input ref={ref} type="text" maxLength={maxLength} className="size-full lg:w-full lg:aspect-13/2 flex items-center px-3.5 sm:px-4 md:px-4.5 lg:px-3 xl:px-3.75 2xl:px-4 text-xs sm:text-sm md:text-base lg:text-[10px] xl:text-[11px] 2xl:text-xs font-medium tracking-wider outline-none text-default placeholder:text-muted" {...inputProps} placeholder={line(inputProps.placeholder ?? 'notInformed')} />
    )
}