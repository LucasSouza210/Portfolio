import Brand from "./components/Brand";
import Description from "./components/Description";
import Social from "./components/social/Social";

export default function Identity() {
    return (
        <div className="w-full lg:w-fit flex flex-col gap-4 sm:gap-4.5 md:gap-5 lg:gap-2.5 xl:gap-3 2xl:gap-3.5">
            <div className="w-full lg:w-fit flex flex-col gap-3 sm:gap-3.5 md:gap-4 lg:gap-2 xl:gap-2.5 2xl:gap-3">
                <Brand />
                <Description />
            </div>
            <Social />
        </div>
    )
}