import { useEffect } from "react"
import { AnimatePresence, motion } from "framer-motion"
import useOverlay from "../../hooks/ui/useOverlay"
import useMediaQuery from "../../hooks/ui/useMediaQuery"

const belowLg = "(max-width: 1023.98px)"

export default function Overlay() {

    const { overlay, closeOverlay } = useOverlay()

    const isBelowLg = useMediaQuery(belowLg)

    useEffect(() => {
        if (overlay?.mobileOnly && !isBelowLg) closeOverlay()
    }, [overlay, isBelowLg, closeOverlay])

    useEffect(() => {
        if (!overlay) return

        function handleEsc(event: KeyboardEvent) {
            if (event.key === "Escape") closeOverlay()
        }

        document.addEventListener("keydown", handleEsc)
        return () => document.removeEventListener("keydown", handleEsc)
    }, [overlay, closeOverlay])

    return (
        <AnimatePresence>
            {overlay && (
                <motion.div key="backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25, ease: "easeIn" }} className={`${overlay.self ? 'justify-end' : 'justify-center'} flex items-center fixed inset-0 z-40 overscroll-contain backdrop-blur-[2px] bg-zinc-950/50 overflow-hidden`} onClick={closeOverlay}>
                    <motion.div role="dialog" aria-modal="true" className={overlay.center ? 'w-full sm:w-fit flex justify-center items-stretch px-8 sm:px-0' : 'h-full'} initial={overlay.center ? { y: "100%" } : { x: "100%" }} animate={overlay.center ? { y: 0 } : { x: 0 }} exit={overlay.center ? { y: "100%" } : { x: "100%" }} transition={{ type: "tween", duration: 0.25, ease: "easeInOut" }} onClick={(event) => event.stopPropagation()} style={{ willChange: "transform" }}>
                        {overlay.component}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}