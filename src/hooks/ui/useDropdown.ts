import { useCallback, useEffect, useRef, useState } from "react"

export default function useDropdown<T extends HTMLElement = HTMLDivElement>() {
    const [open, setOpen] = useState(false)
    const ref = useRef<T | null>(null)

    const toggle = useCallback(() => setOpen((prev) => !prev), [])
    const close = useCallback(() => setOpen(false), [])
    const openDropdown = useCallback(() => setOpen(true), [])

    useEffect(() => {
        if (!open) return

        function handlePointerDown(event: PointerEvent) {
            if (!ref.current?.contains(event.target as Node)) {
                close()
            }
        }

        function handleEsc(event: KeyboardEvent) {
            if (event.key === "Escape") {
                close()
            }
        }

        document.addEventListener("pointerdown", handlePointerDown)
        document.addEventListener("keydown", handleEsc)

        return () => {
            document.removeEventListener("pointerdown", handlePointerDown)
            document.removeEventListener("keydown", handleEsc)
        }
    }, [open, close])

    return {
        ref,
        open,
        toggle,
        close,
        openDropdown,
    }
}