export default function scrollIntoView(element: HTMLElement, margin = 24) {
    const viewport = element.closest<HTMLElement>('.scroll-container')

    if (!viewport) return

    const viewportRect = viewport.getBoundingClientRect()
    const elementRect = element.getBoundingClientRect()

    const overflowBottom = elementRect.bottom - (viewportRect.bottom - margin)
    const overflowTop = elementRect.top - (viewportRect.top + margin)

    if (overflowBottom > 0) {
        viewport.scrollTo({
            top: viewport.scrollTop + overflowBottom,
            behavior: 'smooth'
        })
    } else if (overflowTop < 0) {
        viewport.scrollTo({
            top: viewport.scrollTop + overflowTop,
            behavior: 'smooth'
        })
    }
}