import { Translations } from "../utils/translations"
import useLang from "./useLang"

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
            .split(/(\\n|\\m|\\d)/)
            .map((part: string, i: number) => {
                if (part === "\\all") return <br key={i} />
                if (part === "\\mob") return <br key={i} className="lg:hidden" />
                if (part === "\\desk") return <br key={i} className="hidden lg:block" />

                return <span key={i}>{part}</span>
            })
    }

    return { line, br }
}