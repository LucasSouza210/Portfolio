import Brand from "./components/Brand";
import Description from "./components/Description";
import Social from "./components/social/Social";

export default function Identity() {
    return (
        <div className="w-full flex flex-col gap-4">
            <div className="w-full flex flex-col gap-3">
                <Brand />
                <Description />
            </div>
            <Social />
        </div>
    )
}