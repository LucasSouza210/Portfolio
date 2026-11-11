import type { EventListeners, PartialOptions } from "overlayscrollbars"
import { OverlayScrollbarsComponent } from "overlayscrollbars-react"
import Header from "./components/layout/header/Header"
import AppContent from "./components/layout/AppContent"

const scrollOptions: PartialOptions = {
  overflow: { x: "hidden" },
  scrollbars: {
    theme: "os-theme-page",
    autoHide: "scroll",
    autoHideDelay: 1200
  }
}

const scrollEvents: EventListeners = {
  initialized: (instance) => {
    instance.elements().viewport.classList.add("scroll-container", "scroll-smooth")
  },
}

export default function App() {
  return (
    <div className="w-full h-dvh flex flex-col">
      <div className="relative flex-1">
        {/* overlay here */}
        <div className="absolute inset-0">
          <OverlayScrollbarsComponent element="div" className="size-full bg-page" options={scrollOptions} events={scrollEvents}>
            <Header />
            <AppContent />
          </OverlayScrollbarsComponent>
        </div>
      </div>
    </div>
  )
}