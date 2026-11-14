import { useTranslate } from "../../../../../hooks/useTranslate"
import type { PersonalSkill } from "../../../../../utils/constants"

export default function Badge({ skill }: { skill: PersonalSkill }) {

    const { line } = useTranslate()

    const Icon = skill.icon

    return (
        <span className="flex items-center gap-1.5 border rounded-lg px-3 py-2 text-xs font-medium tracking-wider bg-default border-default text-default">
            <Icon className="text-indigo-500" />
            {
                line(skill.title)
            }
        </span>
    )
}