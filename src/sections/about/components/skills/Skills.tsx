import { personalSkills } from "../../../../utils/constants";
import Title from "./components/Title";
import Badge from "./components/Badge";

export default function Skills() {
    return (
        <div className="w-full flex flex-col gap-3">
            <Title />
            <div className="w-full flex flex-wrap gap-2.5">
                {
                    personalSkills.map((i, index) => (
                        <Badge skill={i} key={index} />
                    ))
                }
            </div>
        </div>
    )
}