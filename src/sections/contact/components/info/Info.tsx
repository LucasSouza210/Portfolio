import Callout from "./components/callout/Callout";
import Social from "./components/social/Social";

export default function Info() {
    return (
        <div className="w-full flex flex-col gap-5">
            <Callout />
            <Social />
        </div>
    )
}