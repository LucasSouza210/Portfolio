import Logo from "./components/Logo";

export default function Header() {
    return (
        <header className="w-full h-16 sm:h-17 md:h-18 lg:h-14 xl:h-16 2xl:h-18 flex justify-center border-b px-5 sm:px-0 sticky top-0 left-0 z-30 backdrop-blur-md bg-layout border-default">
            <div className="size-full sm:max-w-md md:max-w-130 lg:max-w-190 xl:max-w-236 2xl:max-w-282 flex justify-between items-center">
                <Logo />
            </div>
        </header>
    )
}