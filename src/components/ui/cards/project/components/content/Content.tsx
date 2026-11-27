import type { Project } from "../../../../../../utils/constants";
import Info from "./components/info/Info";
import Development from "./components/Development";
import Footer from "./components/footer/Footer";

export default function Content({ project }: { project: Project }) {
    return (
        <div className={`flex-1 flex flex-col justify-between p-6 sm:p-7 md:p-8 lg:p-4 xl:p-5 2xl:p-6 ${project.soon ? 'gap-3 sm:gap-4 md:gap-5 lg:gap-2.5 xl:gap-3.25 2xl:gap-4' : 'gap-4 sm:gap-5 md:gap-6 lg:gap-3 xl:gap-4 2xl:gap-5'}`}>
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