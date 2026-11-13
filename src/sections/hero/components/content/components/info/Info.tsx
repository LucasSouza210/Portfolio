import Greeting from "./components/Greeting";
import Name from "./components/Name";
import Subtitle from "./components/Subtitle";

export default function Info() {
    return (
        <div className="flex flex-col items-center gap-1">
            <Greeting />
            <Name />
            <Subtitle />
        </div>
    )
}