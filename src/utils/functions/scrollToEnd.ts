export default function scrollToEnd(element: HTMLElement) {
    const viewport = element.closest<HTMLElement>('.scroll-container')
    const content = element.closest<HTMLElement>('main')

    if (!viewport || !content) return

    const viewportRect = viewport.getBoundingClientRect()
    const contentRect = content.getBoundingClientRect()

    const overflowBottom = contentRect.bottom - viewportRect.bottom

    if (overflowBottom > 0) {
        viewport.scrollTo({
            top: viewport.scrollTop + overflowBottom,
            behavior: 'smooth'
        })
    }
}