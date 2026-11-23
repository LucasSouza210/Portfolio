import SectionContainer from "../../components/ui/section-container/SectionContainer";
import Info from "./components/info/Info";
import MessageForm from "./components/message-form/MessageForm";

export default function Contact() {
    return (
        <SectionContainer id="contact" title="contactTitle" lastSection>
            <div className="flex-1 flex flex-col lg:flex-row lg:justify-between gap-7 sm:gap-8 md:gap-9 lg:gap-0">
                <Info />
                <MessageForm />
            </div>
        </SectionContainer>
    )
}