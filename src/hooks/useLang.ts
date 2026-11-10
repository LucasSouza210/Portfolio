import { useContext } from "react"
import { LanguageContext } from "../contexts/LanguageProvider"

export default function useLang() {
    const context = useContext(LanguageContext)

    if (!context) {
        throw new Error("useLang must be used within LanguageProvider")
    }

    return context
}