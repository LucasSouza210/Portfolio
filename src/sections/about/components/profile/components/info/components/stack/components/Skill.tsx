import type { AboutSkill } from "../../../../../../../../../utils/constants";

export default function Skill({ skill }: { skill: AboutSkill }) {

    const Icon = skill.icon

    return (
        <Icon className="size-4 text-default"/>
    )
}