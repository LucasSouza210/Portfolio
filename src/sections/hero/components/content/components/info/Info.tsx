import Greeting from "./components/Greeting";
import Name from "./components/Name";
import Description from "./components/Description";

export default function Info() {
    return (
        <div className="flex flex-col items-center lg:items-start gap-3 sm:gap-3.5 md:gap-4 lg:gap-2 xl:gap-2.5 2xl:gap-3">
            <div className="flex flex-col items-center lg:items-start gap-4 sm:gap-4.75 md:gap-5.5 lg:gap-3 xl:gap-3.75 2xl:gap-4.5">
                <Greeting />
                <Name />
            </div>
            <Description />
        </div>
    )
}