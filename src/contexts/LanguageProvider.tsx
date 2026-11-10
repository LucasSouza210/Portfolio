import { createContext, useCallback, useEffect, useMemo, useState } from "react"
import type { ReactNode } from "react"

export type Lang = "pt" | "en" | "es"

type LanguageContextValue = {
    lang: Lang
    setLang: (lang: Lang) => void
}

const langStorageKey = "lang"

const htmlLangByLang = {
    pt: "pt-BR",
    en: "en",
    es: "es",
} as const

function isLang(value: unknown): value is Lang {
    return value === "pt" || value === "en" || value === "es"
}

function getInitialLang(): Lang {
    try {
        const saved = localStorage.getItem(langStorageKey)
        if (isLang(saved)) return saved
    } catch (error) { }

    const browserLang = navigator.language.slice(0, 2)
    return isLang(browserLang) ? browserLang : "pt"
}

export const LanguageContext = createContext<LanguageContextValue | null>(null)

export default function LanguageProvider({ children }: { children: ReactNode }) {

    const [lang, setLangState] = useState<Lang>(getInitialLang)

    const setLang = useCallback((nextLang: Lang) => {
        setLangState(nextLang)
        try {
            localStorage.setItem(langStorageKey, nextLang)
        } catch (error) { }
    }, [])

    useEffect(() => {
        document.documentElement.lang = htmlLangByLang[lang]
    }, [lang])

    const value = useMemo(() => ({ lang, setLang }), [lang, setLang])

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    )
}