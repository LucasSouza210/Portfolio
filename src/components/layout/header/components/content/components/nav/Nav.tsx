import { useCallback, useContext, useEffect, useLayoutEffect, useRef, useState } from "react"
import { navLinks } from "../../../../../../../utils/constants"
import { NavigationContext } from "../../../../../../../contexts/NavigationProvider"
import Link from "./components/Link"
import NavIndicator from "./components/NavIndicator"

type IndicatorStyle = {
    left: number
    width: number
}

export default function Nav() {

    const { activeSection, scrollToSection } = useContext(NavigationContext)!

    const navRef = useRef<HTMLDivElement>(null)
    const itemRefs = useRef<(HTMLAnchorElement | null)[]>([])

    const [indicator, setIndicator] = useState<IndicatorStyle>({ left: 0, width: 0 })
    const [isAnimated, setIsAnimated] = useState(false)

    const activeIndex = navLinks.findIndex((link) => link.href === activeSection)
    const hasMeasured = indicator.width > 0

    const measureIndicator = useCallback(() => {
        const item = itemRefs.current[activeIndex]
        const nav = navRef.current

        if (!item || !nav) return

        const navRect = nav.getBoundingClientRect()
        const itemRect = item.getBoundingClientRect()

        setIndicator({
            left: itemRect.left - navRect.left,
            width: itemRect.width
        })
    }, [activeIndex])

    useLayoutEffect(() => {
        measureIndicator()
    }, [measureIndicator])

    useEffect(() => {
        const observer = new ResizeObserver(measureIndicator)

        itemRefs.current.forEach((item) => {
            if (item) observer.observe(item)
        })

        return () => observer.disconnect()
    }, [measureIndicator])

    useEffect(() => {
        if (!hasMeasured) return

        const frame = requestAnimationFrame(() => setIsAnimated(true))
        return () => cancelAnimationFrame(frame)
    }, [hasMeasured])

    return (
        <div ref={navRef} className="hidden lg:flex flex-col relative">
            <div className="flex items-center lg:gap-5 xl:gap-5.5 2xl:gap-6">
                {
                    navLinks.map((i, index) =>
                        <Link key={i.href} ref={(element) => { itemRefs.current[index] = element }} href={i.href} label={i.label} isActive={activeSection === i.href} onNavigate={scrollToSection} />
                    )
                }
            </div>
            <NavIndicator left={indicator.left} width={indicator.width} isAnimated={isAnimated} />
        </div>
    )
}