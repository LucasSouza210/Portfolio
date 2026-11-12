import Nav from "./components/nav/Nav";
import Actions from "./components/Actions/Actions";

export default function Content() {
    return (
        <div className="h-full flex items-center lg:gap-5 xl:gap-5.5 2xl:gap-6">
            <Nav />
            <Actions />
        </div>
    )
}