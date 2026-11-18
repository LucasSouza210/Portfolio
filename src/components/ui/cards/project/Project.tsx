import type { Project } from "../../../../utils/constants";
import Preview from "./components/preview/Preview";
import Content from "./components/content/Content";

export default function Project({ project }: { project: Project }) {
    return (
        <div className="w-full flex flex-col border rounded-[30px] overflow-hidden bg-default border-default">
            <Preview project={project} />
            <Content project={project} />
        </div>
    )
}