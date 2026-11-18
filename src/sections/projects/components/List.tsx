import Project from "../../../components/ui/cards/project/Project";
import { projects } from "../../../utils/constants";

export default function List() {
    return (
        <div className="w-full flex flex-col lg:flex-row gap-5 sm:gap-6 md:gap-7 lg:gap-5">
            {
                projects.map((i, index) => (
                    <Project project={i} key={index} />
                ))
            }
        </div>
    )
}