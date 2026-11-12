import { createContext, useCallback, useMemo, useRef, useState } from "react"
import type { ReactNode, RefObject } from "react"
import { navLinks } from "../utils/constants"
import useScrollSpy from "../hooks/ui/useScrollSpy"

const sectionIds = navLinks.map((link) => link.href)

type NavigationContextValue = {
    activeSection: string
    headerRef: RefObject<HTMLElement | null>
    setViewport: (viewport: HTMLElement | null) => void
    scrollToSection: (sectionId: string) => void
}

export const NavigationContext = createContext<NavigationContextValue | null>(null)

export default function NavigationProvider({ children }: { children: ReactNode }) {

    const headerRef = useRef<HTMLElement | null>(null)
    const [viewport, setViewport] = useState<HTMLElement | null>(null)

    const activeSection = useScrollSpy(sectionIds, viewport, headerRef)

    const scrollToSection = useCallback((sectionId: string) => {
        const element = document.getElementById(sectionId)
        if (!element || !viewport) return

        const marginTop = parseFloat(getComputedStyle(element).scrollMarginTop)
        const headerOffset = marginTop > 0 ? marginTop : (headerRef.current?.getBoundingClientRect().height ?? 0)

        const elementTop = element.getBoundingClientRect().top
        const viewportTop = viewport.getBoundingClientRect().top

        viewport.scrollTo({
            top: viewport.scrollTop + elementTop - viewportTop - headerOffset,
            behavior: "smooth"
        })
    }, [viewport])

    const value = useMemo(
        () => ({ activeSection, headerRef, setViewport, scrollToSection }),
        [activeSection, scrollToSection]
    )

    return (
        <NavigationContext.Provider value={value}>
            {children}
        </NavigationContext.Provider>
    )
}