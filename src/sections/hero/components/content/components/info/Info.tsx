import Greeting from "./components/Greeting";
import Name from "./components/Name";
import Subtitle from "./components/Subtitle";

export default function Info() {
    return (
        <div className="flex flex-col items-center lg:items-start gap-1 sm:gap-2 md:gap-3 lg:gap-1.5 xl:gap-1.75 2xl:gap-2">
            <Greeting />
            <Name />
            <Subtitle />
        </div>
    )
}