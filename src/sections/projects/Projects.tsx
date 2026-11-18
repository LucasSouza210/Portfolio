import SectionContainer from "../../components/ui/section-container/SectionContainer";
import List from "./components/List";

export default function Projects() {
    return (
        <SectionContainer id="projects" title="projectsTitle">
            <div className="flex-1 flex lg:items-center lg:justify-center">
                <List />
            </div>
        </SectionContainer>
    )
}