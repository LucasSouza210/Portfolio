import SectionContainer from "../../components/ui/section-container/SectionContainer";
import Profile from "./components/profile/Profile";
import Bio from "./components/bio/Bio";
import Services from "./components/services/Services";
import Skills from "./components/skills/Skills";
import Actions from "./components/actions/Actions";

export default function About() {
    return (
        <SectionContainer id="about" title="aboutTitle">
            <div className="flex-1 flex flex-col lg:flex-row lg:justify-between lg:items-center gap-5 sm:gap-5.5 md:gap-6 lg:gap-7 xl:gap-8 2xl:gap-9">
                <Profile />
                <div className="w-full lg:w-55/100 flex flex-col lg:justify-center gap-5 sm:gap-5.5 md:gap-6 lg:gap-3 xl:gap-3.5 2xl:gap-4">
                    <div className="w-full flex flex-col gap-3 sm:gap-3.5 md:gap-4 lg:gap-0">
                        <Bio />
                        <Services mobile/>
                    </div>
                    <Skills />
                    <Actions />
                </div>
            </div>
        </SectionContainer>
    )
}