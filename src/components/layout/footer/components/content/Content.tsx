import Identity from "./components/identity/Identity";
import Nav from "./components/nav/Nav";

export default function Content() {
    return (
        <div className="w-full flex flex-col gap-5">
            <Identity />
            <Nav />
        </div>
    )
}