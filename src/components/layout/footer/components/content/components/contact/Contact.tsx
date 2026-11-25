import Title from "./components/Title";
import Social from "./components/social/Social";

export default function Contact() {
    return (
        <div className="w-full lg:w-fit flex flex-col lg:self-start gap-4 sm:gap-4.25 md:gap-4.5 lg:gap-2.5 xl:gap-3.25 2xl:gap-4">
            <Title />
            <Social />
        </div>
    )
}