import type { AboutSkill } from "../../../../../../../../../utils/constants";

export default function Skill({ skill }: { skill: AboutSkill }) {

    const Icon = skill.icon

    return (
        <Icon className="size-4 sm:size-4.75 md:size-5.5 lg:size-4 text-default"/>
    )
}