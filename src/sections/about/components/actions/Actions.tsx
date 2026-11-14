import Resume from "./components/Resume";
import Projects from "./components/Projects";

export default function Actions() {
    return (
        <div className="flex items-center gap-4">
            <Resume />
            <Projects />
        </div>
    )
}