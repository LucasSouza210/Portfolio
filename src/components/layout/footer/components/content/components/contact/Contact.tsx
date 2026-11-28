import Title from "./components/Title";
import Social from "./components/social/Social";

export default function Contact() {
    return (
        <div className="w-full lg:w-fit flex flex-col lg:self-start gap-3.5 sm:gap-4 md:gap-4.5 lg:gap-2 xl:gap-2.75 2xl:gap-3.5">
            <Title />
            <Social />
        </div>
    )
}