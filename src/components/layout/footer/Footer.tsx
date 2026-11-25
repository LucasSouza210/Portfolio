import Content from "./components/content/Content";
import Legal from "./components/legal/Legal";

export default function Footer() {
    return (
        <footer className="w-full flex sm:justify-center px-7 sm:px-0 py-6 sm:py-6.5 md:py-7 lg:py-4 xl:py-5 2xl:py-6 border-t bg-default border-default">
            <div className="w-full sm:max-w-md md:max-w-130 lg:max-w-164 xl:max-w-200 2xl:max-w-232 flex flex-col gap-6 sm:gap-6.5 md:gap-7 lg:gap-4 2xl:gap-6">
                <Content />
                <Legal />
            </div>
        </footer>
    )
}