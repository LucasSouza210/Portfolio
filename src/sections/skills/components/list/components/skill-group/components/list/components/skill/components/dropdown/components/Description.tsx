import { useLayoutEffect, useRef, useState } from "react"
import { useTranslate } from "../../../../../../../../../../../../../hooks/useTranslate"

export default function Description({ desc }: { desc: string }) {

    const { line } = useTranslate()

    const text = line(desc)

    const textRef = useRef<HTMLParagraphElement>(null)

    const [expanded, setExpanded] = useState(false)
    const [truncated, setTruncated] = useState(false)

    useLayoutEffect(() => {
        const element = textRef.current

        if (!element || expanded) return

        const update = () => setTruncated(element.scrollHeight > element.clientHeight + 1)

        update()

        const observer = new ResizeObserver(update)
        observer.observe(element)

        return () => observer.disconnect()
    }, [text, expanded])

    return (
        <div className="flex flex-col items-start">
            <p ref={textRef} className={`text-xs font-medium tracking-wider leading-5 text-default ${expanded ? '' : 'line-clamp-3'}`}>
                {text}
            </p>
            {
                truncated &&
                <button type="button" aria-expanded={expanded} className="text-xs font-semibold tracking-wider leading-5 text-action-brand" onClick={() => setExpanded((current) => !current)}>
                    {line(expanded ? "readLess" : "readMore")}
                </button>
            }
        </div>
    )
}