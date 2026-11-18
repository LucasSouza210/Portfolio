import type { Project } from "../../../../../../utils/constants";
import Info from "./components/info/Info";
import Development from "./components/Development";
import Footer from "./components/footer/Footer";

export default function Content({ project }: { project: Project }) {
    return (
        <div className="flex-1 flex flex-col gap-4 p-6">
            <Info name={project.name} description={project.desc} soon={project.soon} />
            {
                project.soon ?
                    <Development />
                    :
                    <Footer project={project} />
            }
        </div>
    )
}