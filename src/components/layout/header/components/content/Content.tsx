import Nav from "./components/nav/Nav";
import Actions from "./components/actions/Actions";

export default function Content() {
    return (
        <div className="h-full flex items-center lg:gap-5 xl:gap-6 2xl:gap-7">
            <Nav />
            <span className="hidden lg:block w-px h-3/8 bg-border" />
            <Actions />
        </div>
    )
}