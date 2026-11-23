import SectionContainer from "../../components/ui/section-container/SectionContainer";
import Info from "./components/info/Info";
import MessageForm from "./components/message-form/MessageForm";

export default function Contact() {
    return (
        <SectionContainer id="contact" title="contactTitle" lastSection>
            <div className="flex-1 flex flex-col gap-8">
                <Info />
                <MessageForm />
            </div>
        </SectionContainer>
    )
}