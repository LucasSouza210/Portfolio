import SectionContainer from "../../components/ui/section-container/SectionContainer";
import Profile from "./components/profile/Profile";
import Bio from "./components/bio/Bio";
import Services from "./components/services/Services";
import Skills from "./components/skills/Skills";
import Actions from "./components/actions/Actions";

export default function About() {
    return (
        <SectionContainer id="about" title="aboutTitle">
            <div className="flex-1 flex flex-col gap-5">
                <Profile />
                <div className="w-full flex flex-col gap-3">
                    <Bio />
                    <Services />
                </div>
                <Skills />
                <Actions />
            </div>
        </SectionContainer>
    )
}