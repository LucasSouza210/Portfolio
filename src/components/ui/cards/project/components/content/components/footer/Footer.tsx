import type { Project } from "../../../../../../../../utils/constants";
import Stack from "./components/Stack";
import Actions from "./components/actions/Actions";

export default function Footer({ project }: { project: Project }) {
    return (
        <div className="w-full flex items-center justify-between">
            <Stack tech={project.tech} />
            {
                !project.soon &&
                <Actions url={project.url} git={project.git} />
            }
        </div>
    )
}