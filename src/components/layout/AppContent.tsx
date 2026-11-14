import Hero from "../../sections/hero/Hero";
import About from "../../sections/about/About";

export default function AppContent() {
    return (
        <main className="w-full min-h-full relative flex flex-col sm:items-center lg:items-start flex-1 overflow-x-hidden">
            <Hero />
            <About />
        </main>
    )
}