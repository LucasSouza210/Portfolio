import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Actions from "./components/Actions";

export default function MobileMenu() {
    return (
        <div className="min-h-full flex flex-col gap-4 sm:gap-4.5 md:gap-5 p-5 sm:p-5.5 md:p-6 border-l bg-secondary border-default">
            <Header />
            <Nav />
            <Actions />
        </div>
    )
}