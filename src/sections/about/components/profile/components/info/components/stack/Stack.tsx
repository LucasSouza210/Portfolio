import { stackIcons } from "../../../../../../../../utils/constants";
import Skill from "./components/Skill";

export default function Stack() {
    return (
        <div className="flex items-center gap-3">
            {
                stackIcons.map((i, index) => (
                    <Skill skill={i} key={index} />
                ))
            }
        </div>
    )
}