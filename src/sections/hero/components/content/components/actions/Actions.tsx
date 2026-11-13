import Resume from "./components/Resume";
import Contact from "./components/Contact";

export default function Actions() {
    return (
        <div className="flex flex-col gap-3">
            <Resume />
            <Contact />
        </div>
    )
}