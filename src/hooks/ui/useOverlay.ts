import { useContext } from "react"
import { OverlayContext } from "../../contexts/OverlayProvider"

export default function useOverlay() {

    const overlayContext = useContext(OverlayContext)

    if (!overlayContext) {
        throw new Error("useOverlay must be used within an OverlayProvider")
    }

    return overlayContext
}