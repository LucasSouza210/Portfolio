import { useTranslate } from "../../../../../../../../../hooks/useTranslate"

export default function Name({ name, soon }: { name: string, soon: boolean | undefined }) {

    const { line } = useTranslate()

    return (
        <p className="text-lg sm:text-xl md:text-[22px] lg:text-sm xl:text-base 2xl:text-lg font-medium tracking-wider leading-min text-title">
            {
                soon ? line('comingSoon') : name
            }
        </p>
    )
}