import { createContext, useCallback, useMemo, useState } from "react"
import type { JSX, ReactNode } from "react"

export type OverlayConfig = {
    component: JSX.Element
    center?: boolean
    self?: boolean
    mobileOnly?: boolean
}

type OverlayOptions = Omit<OverlayConfig, "component">

type OverlayContextValue = {
    overlay: OverlayConfig | null
    openOverlay: (component: JSX.Element, options?: OverlayOptions) => void
    closeOverlay: () => void
}

export const OverlayContext = createContext<OverlayContextValue | null>(null)

export default function OverlayProvider({ children }: { children: ReactNode }) {

    const [overlay, setOverlay] = useState<OverlayConfig | null>(null)

    const openOverlay = useCallback((component: JSX.Element, options?: OverlayOptions) => {
        setOverlay({ component, ...options })
    }, [])

    const closeOverlay = useCallback(() => {
        setOverlay(null)
    }, [])

    const value = useMemo(
        () => ({ overlay, openOverlay, closeOverlay }),
        [overlay, openOverlay, closeOverlay]
    )

    return (
        <OverlayContext.Provider value={value}>
            {children}
        </OverlayContext.Provider>
    )
}