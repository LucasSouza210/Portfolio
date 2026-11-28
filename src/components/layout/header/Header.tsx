import Logo from "./components/Logo";
import Content from "./components/content/Content";

export default function Header() {
    return (
        <header className="w-full h-16 sm:h-17 md:h-18 lg:h-13 xl:h-14.5 2xl:h-16 flex justify-center border-b px-5 sm:px-0 sticky top-0 left-0 z-30 backdrop-blur-md bg-layout border-default">
            <div className="size-full sm:max-w-96 md:max-w-md lg:max-w-164 xl:max-w-200 2xl:max-w-232 flex justify-between items-center">
                <Logo />
                <Content />
            </div>
        </header>
    )
}