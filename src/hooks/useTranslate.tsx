import { Translations } from "../utils/translations"
import useLang from "./useLang"

const breakTokens = /(\\n|\\m|\\d)/

export function useTranslate() {

    const { lang } = useLang()

    const getText = (content: string) => {
        const sections = Object.values(Translations)
        const block = sections.find(section => content in section)
        return (block as any)?.[content]?.[lang] ?? ''
    }

    const line = (content: string) => {
        return getText(content)
    }

    const br = (content: string) => {
        return getText(content)
            .split(breakTokens)
            .map((part: string, i: number) => {
                if (part === "\\n") return <br key={i} />
                if (part === "\\m") return <br key={i} className="lg:hidden" />
                if (part === "\\d") return <br key={i} className="hidden lg:block" />

                return <span key={i}>{part}</span>
            })
    }

    return { line, br }
}