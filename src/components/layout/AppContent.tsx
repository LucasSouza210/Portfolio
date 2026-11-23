import Hero from "../../sections/hero/Hero";
import About from "../../sections/about/About";
import Projects from "../../sections/projects/Projects";
import Skills from "../../sections/skills/Skills";
import Contact from "../../sections/contact/Contact";

export default function AppContent() {
    return (
        <main className="w-full min-h-full relative flex flex-col sm:items-center lg:items-start flex-1 overflow-x-clip">
            <Hero />
            <About />
            <Projects />
            <Skills />
            <Contact />
        </main>
    )
}