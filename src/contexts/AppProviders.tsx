import type { ReactNode } from "react"
import ThemeProvider from "./ThemeProvider"
import LanguageProvider from "./LanguageProvider"
import OverlayProvider from "./OverlayProvider"
import NavigationProvider from "./NavigationProvider"

export default function AppProviders({ children }: { children: ReactNode }) {
    return (
        <ThemeProvider>
            <LanguageProvider>
                <OverlayProvider>
                    <NavigationProvider>
                        {children}
                    </NavigationProvider>
                </OverlayProvider>
            </LanguageProvider>
        </ThemeProvider>
    )
}