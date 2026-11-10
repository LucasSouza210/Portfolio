import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./style/index.css"
import App from "./App"
import ThemeProvider from "./contexts/ThemeProvider"

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </StrictMode>
)