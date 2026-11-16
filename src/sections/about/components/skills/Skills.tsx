import { personalSkills } from "../../../../utils/constants";
import Badge from "./components/Badge";
import Heading from "../../../../components/ui/tipography/Heading";

export default function Skills() {
    return (
        <div className="w-full flex flex-col gap-3 sm:gap-3.5 md:gap-4 lg:gap-2.5 xl:gap-2.75 2xl:gap-3">
            <Heading text="softSkillsTitle" />
            <div className="w-full 2xl:w-9/10 flex flex-wrap gap-2.5 sm:gap-2.75 md:gap-3 lg:gap-2 xl:gap-2.25 2xl:gap-2.5">
                {
                    personalSkills.map((i, index) => (
                        <Badge skill={i} key={index} />
                    ))
                }
            </div>
        </div>
    )
}