import Title from "./components/Title";
import Description from "./components/Description";

export default function Callout() {
    return (
        <div className="flex flex-col gap-2.5 sm:gap-2.75 md:gap-3 lg:gap-3 xl:gap-3.5 2xl:gap-4">
            <Title />
            <Description />
        </div>
    )
}