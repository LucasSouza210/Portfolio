import Info from "./components/info/Info";
import Social from "./components/social/Social";
import Actions from "./components/actions/Actions";

export default function Content() {
    return (
        <div className="flex items-center lg:gap-4 xl:gap-5 2xl:gap-6">
            <Social />
            <div className="flex flex-col items-center gap-5 sm:gap-5.5 md:gap-6 lg:gap-4 xl:gap-5 2xl:gap-6">
                <div className="flex flex-col items-center lg:items-start gap-4 sm:gap-4.5 md:gap-5 lg:gap-2.5 xl:gap-3.25 2xl:gap-4">
                    <Info />
                    <Actions />
                </div>
                <Social mobile />
            </div>
        </div>
    )
}