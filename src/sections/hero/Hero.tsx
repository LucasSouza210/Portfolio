import SectionContainer from "../../components/ui/section-container/SectionContainer";
import HeroImage from "./components/HeroImage";
import Content from "./components/content/Content";

export default function Hero() {
    return (
        <SectionContainer id="home">
            <div className="flex-1 flex flex-col lg:flex-row-reverse items-center justify-center lg:justify-between gap-6 sm:gap-6.5 md:gap-7 lg:gap-0 py-7 sm:py-0">
                <HeroImage />
                <Content />
            </div>
        </SectionContainer>
    )
}