import { skillGroups } from "../../../../utils/constants";
import SkillGroup from "./components/skill-group/SkillGroup";

export default function List() {
    return (
        <div className="w-full flex flex-col gap-6 sm:gap-6.5 md:gap-7 lg:gap-5 xl:gap-5.5 2xl:gap-6">
            {
                skillGroups.map((i, index) => (
                    <SkillGroup group={i} key={index} />
                ))
            }
        </div>
    )
}