import { useContext, useMemo } from "react"
import type { EventListeners, PartialOptions } from "overlayscrollbars"
import { OverlayScrollbarsComponent } from "overlayscrollbars-react"
import Header from "./components/layout/header/Header"
import AppContent from "./components/layout/AppContent"
import NavigationProvider, { NavigationContext } from "./contexts/NavigationProvider"

const scrollOptions: PartialOptions = {
  overflow: { x: "hidden" },
  scrollbars: {
    theme: "os-theme-page",
    autoHide: "scroll",
    autoHideDelay: 1200
  }
}

function AppLayout() {

  const navigation = useContext(NavigationContext)

  const { setViewport } = navigation!

  const scrollEvents = useMemo<EventListeners>(() => ({
    initialized: (instance) => {
      const { viewport } = instance.elements()
      viewport.classList.add("scroll-container", "scroll-smooth")
      setViewport(viewport)
    },
  }), [setViewport])

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

export default function App() {
  return (
    <NavigationProvider>
      <AppLayout />
    </NavigationProvider>
  )
}