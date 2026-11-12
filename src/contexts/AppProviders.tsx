import type { ReactNode } from "react"
import ThemeProvider from "./ThemeProvider"
import LanguageProvider from "./LanguageProvider"
import NavigationProvider from "./NavigationProvider"

export default function AppProviders({ children }: { children: ReactNode }) {
    return (
        <ThemeProvider>
            <LanguageProvider>
                <NavigationProvider>
                    {children}
                </NavigationProvider>
            </LanguageProvider>
        </ThemeProvider>
    )
}