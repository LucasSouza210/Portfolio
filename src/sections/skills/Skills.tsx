import SectionContainer from "../../components/ui/section-container/SectionContainer";
import List from "./components/list/List";

export default function Skills() {
    return (
        <SectionContainer id="skills" title="skillsTitle" lastSection>
            <div className="flex-1 flex lg:items-center lg:justify-center">
                <List />
            </div>
        </SectionContainer>
    )
}