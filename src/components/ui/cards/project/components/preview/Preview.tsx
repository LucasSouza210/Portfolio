import type { Project } from "../../../../../../utils/constants";
import Backdrop from "./components/Backdrop";
import SoonBackground from "./components/SoonBackground";

export default function Preview({ project }: { project: Project }) {
    return (
        <div className="@container relative w-full aspect-video flex border-b overflow-hidden bg-elevated border-default">
            {
                project.soon ? <SoonBackground />
                    :
                    <Backdrop src={project.preview} name={project.name} />
            }
        </div>
    )
}