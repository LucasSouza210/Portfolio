import { useTranslate } from "../../../../../hooks/useTranslate"
import type { PersonalSkill } from "../../../../../utils/constants"

export default function Badge({ skill }: { skill: PersonalSkill }) {

    const { line } = useTranslate()

    const Icon = skill.icon

    return (
        <span className="lg:w-fit flex items-center gap-1.5 sm:gap-1.75 md:gap-2 lg:gap-1 xl:gap-1.25 2xl:gap-1.5 border rounded-[7px] sm:rounded-lg md:rounded-[9px] lg:rounded-md xl:rounded-[7px] 2xl:rounded-lg px-3 sm:px-3.25 md:px-3.5 lg:px-2.5 xl:px-2.75 2xl:px-3 py-2 sm:py-2.25 md:py-2.5 lg:py-1.5 xl:py-1.75 2xl:py-2 text-xs sm:text-[13px] md:text-sm lg:text-[10px] xl:text-[11px] 2xl:text-xs font-medium tracking-wider bg-default border-default text-default">
            <Icon className="text-indigo-500" />
            {
                line(skill.title)
            }
        </span>
    )
}