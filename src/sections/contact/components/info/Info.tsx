import Callout from "./components/callout/Callout";
import Social from "./components/social/Social";

export default function Info() {
    return (
        <div className="w-full flex flex-col gap-5 sm:gap-5.5 md:gap-6 lg:gap-5 xl:gap-5.5 2xl:gap-6 lg:pt-2 xl:pt-2.5 2xl:pt-3">
            <Callout />
            <Social />
        </div>
    )
}