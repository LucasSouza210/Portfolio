import Info from "./components/info/Info";
import Social from "./components/social/Social";
import Actions from "./components/actions/Actions";

export default function Content() {
    return (
        <div className="flex flex-col items-center gap-6">
            <div className="flex flex-col items-center gap-5">
                <Info />
                <Social />
            </div>
            <Actions />
        </div>
    )
}