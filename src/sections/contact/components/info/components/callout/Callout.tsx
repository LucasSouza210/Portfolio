import Title from "./components/Title";
import Description from "./components/Description";

export default function Callout() {
    return (
        <div className="w-full flex flex-col gap-2.5">
            <Title />
            <Description />
        </div>
    )
}