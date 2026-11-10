import { createContext, useCallback, useEffect, useMemo, useState } from "react"
import type { ReactNode } from "react"

export type Theme = "light" | "dark"

type ThemeContextValue = {
    theme: Theme
    toggleTheme: () => void
}

const themeStorageKey = "theme"

export const ThemeContext = createContext<ThemeContextValue | null>(null)

function getInitialTheme(): Theme {
    return document.documentElement.getAttribute("theme") === "light" ? "light" : "dark"
}

export default function ThemeProvider({ children }: { children: ReactNode }) {

    const [theme, setTheme] = useState<Theme>(getInitialTheme)

    const toggleTheme = useCallback(() => {
        const nextTheme: Theme = theme === "dark" ? "light" : "dark"
        setTheme(nextTheme)
        try {
            localStorage.setItem(themeStorageKey, nextTheme)
        } catch (error) { }
    }, [theme])

    useEffect(() => {
        document.documentElement.setAttribute("theme", theme)
    }, [theme])

    const value = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme])

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}