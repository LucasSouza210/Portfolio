import Content from "./components/content/Content";
import Legal from "./components/legal/Legal";

export default function Footer() {
    return (
        <footer className="w-full min-h-80 flex sm:justify-center px-7 sm:px-0 py-7 border-t bg-default border-default">
            <div className="w-full sm:max-w-md md:max-w-130 lg:max-w-164 xl:max-w-200 2xl:max-w-232 flex flex-col gap-5">
                <Content />
                <Legal />
            </div>
        </footer>
    )
}