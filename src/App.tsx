import { useContext, useEffect, useMemo } from "react"
import type { EventListeners, PartialOptions } from "overlayscrollbars"
import { OverlayScrollbarsComponent } from "overlayscrollbars-react"
import NavigationProvider, { NavigationContext } from "./contexts/NavigationProvider"
import useOverlay from "./hooks/ui/useOverlay"
import Header from "./components/layout/header/Header"
import AppContent from "./components/layout/AppContent"
import Overlay from "./components/layout/Overlay"

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

  const { overlay } = useOverlay()

  const overlayOpen = overlay !== null

  const options = useMemo<PartialOptions>(() => ({
    ...scrollOptions,
    overflow: { x: "hidden", y: overlayOpen ? "hidden" : "scroll" },
  }), [overlayOpen])

  const scrollEvents = useMemo<EventListeners>(() => ({
    initialized: (instance) => {
      const { viewport } = instance.elements()
      viewport.classList.add("scroll-container", "scroll-smooth")
      setViewport(viewport)
    },
  }), [setViewport])

  useEffect(() => {
    const root = document.documentElement

    root.style.overflow = overlayOpen ? "hidden" : ""
    root.style.overscrollBehaviorY = overlayOpen ? "none" : ""

    return () => {
      root.style.overflow = ""
      root.style.overscrollBehaviorY = ""
    }
  }, [overlayOpen])

  return (
    <div className="w-full h-dvh flex flex-col">
      <div className="relative flex-1">
        <Overlay />
        <div className="absolute inset-0">
          <OverlayScrollbarsComponent element="div" className="size-full bg-page" options={options} events={scrollEvents}>
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