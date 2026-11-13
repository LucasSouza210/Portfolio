import Info from "./components/info/Info";
import Social from "./components/social/Social";
import Actions from "./components/actions/Actions";

export default function Content() {
    return (
        <div className="flex items-center lg:gap-4.5 xl:gap-5.25 2xl:gap-6">
            <Social />
            <div className="flex flex-col items-center lg:items-start gap-6 sm:gap-6.5 md:gap-7 lg:gap-4 xl:gap-5 2xl:gap-6">
                <div className="flex flex-col items-center gap-5 sm:gap-5.5 md:gap-6 lg:gap-0">
                    <Info />
                    <Social mobile />
                </div>
                <Actions />
            </div>
        </div>
    )
}