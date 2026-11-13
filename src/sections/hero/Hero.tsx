import SectionContainer from "../../components/ui/section-container/SectionContainer";
import HeroImage from "./components/HeroImage";
import Content from "./components/content/Content";

export default function Hero() {
    return (
        <SectionContainer id="hero" center>
            <div className="flex flex-col items-center gap-5">
                <HeroImage />
                <Content />
            </div>
        </SectionContainer>
    )
}