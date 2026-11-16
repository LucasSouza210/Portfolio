import Resume from "./components/Resume";
import Projects from "./components/Projects";

export default function Actions() {
    return (
        <div className="flex items-center gap-3 sm:gap-3.25 md:gap-3.5 lg:gap-2.5 xl:gap-2.75 2xl:gap-3">
            <Resume />
            <Projects />
        </div>
    )
}