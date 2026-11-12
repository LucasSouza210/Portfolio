import { useEffect, useState } from "react"
import type { RefObject } from "react"

export default function useScrollSpy(
    sectionIds: string[],
    viewport: HTMLElement | null,
    headerRef: RefObject<HTMLElement | null>
) {
    const [activeSection, setActiveSection] = useState(sectionIds[0])

    useEffect(() => {
        if (!viewport) return

        let frame = 0

        const updateActiveSection = () => {
            frame = 0

            const viewportTop = viewport.getBoundingClientRect().top
            const headerHeight = headerRef.current?.offsetHeight ?? 0
            const activationLine = headerHeight + viewport.clientHeight * 0.3
            const isScrollable = viewport.scrollHeight > viewport.clientHeight
            const isAtBottom = viewport.scrollTop + viewport.clientHeight >= viewport.scrollHeight - 2

            // a última seção (Contact) costuma ser curta e nunca chega na linha de ativação
            if (isScrollable && isAtBottom) {
                setActiveSection(sectionIds[sectionIds.length - 1])
                return
            }

            let currentSection = sectionIds[0]

            for (const sectionId of sectionIds) {
                const element = document.getElementById(sectionId)
                if (!element) continue

                if (element.getBoundingClientRect().top - viewportTop <= activationLine) {
                    currentSection = sectionId
                }
            }

            setActiveSection(currentSection)
        }

        const requestUpdate = () => {
            if (!frame) frame = requestAnimationFrame(updateActiveSection)
        }

        updateActiveSection()
        viewport.addEventListener("scroll", requestUpdate, { passive: true })
        window.addEventListener("resize", requestUpdate)

        return () => {
            if (frame) cancelAnimationFrame(frame)
            viewport.removeEventListener("scroll", requestUpdate)
            window.removeEventListener("resize", requestUpdate)
        }
    }, [sectionIds, viewport, headerRef])

    return activeSection
}