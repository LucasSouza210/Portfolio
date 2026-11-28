import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Actions from "./components/Actions";

export default function MobileMenu() {
    return (
        <div className="min-h-full flex flex-col gap-3.5 sm:gap-4 md:gap-4.5 p-5 sm:p-5.5 md:p-6 py-6 sm:py-6.5 md:py-7 border-l bg-secondary border-default">
            <Header />
            <Nav />
            <Actions />
        </div>
    )
}