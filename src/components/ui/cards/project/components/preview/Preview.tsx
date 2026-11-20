import type { Project } from "../../../../../../utils/constants";
import Backdrop from "./components/Backdrop";
import SoonBackground from "./components/SoonBackground";

export default function Preview({ project }: { project: Project }) {
    return (
        <div className="@container w-full aspect-video sm:aspect-16/8 lg:aspect-video flex border-b overflow-hidden relative bg-elevated border-inherit">
            {
                project.soon ? <SoonBackground />
                    :
                    <Backdrop src={project.preview} name={project.name} />
            }
        </div>
    )
}