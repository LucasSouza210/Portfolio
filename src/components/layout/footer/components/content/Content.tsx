import Identity from "./components/identity/Identity";
import Nav from "./components/nav/Nav";
import Contact from "./components/contact/Contact";

export default function Content() {
    return (
        <div className="w-full flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 sm:gap-5.5 md:gap-6 lg:gap-0">
            <Identity />
            <Nav />
            <Contact />
        </div>
    )
}