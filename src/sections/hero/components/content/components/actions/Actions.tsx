import Resume from "./components/Resume";
import Contact from "./components/Contact";

export default function Actions() {
    return (
        <div className="flex flex-col lg:flex-row gap-3 sm:gap-3.25 md:gap-3.5 lg:gap-2.5 xl:gap-2.75 2xl:gap-3">
            <Resume />
            <Contact />
        </div>
    )
}