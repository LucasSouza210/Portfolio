import { useRef } from "react"
import { motion } from "motion/react"
import { useTranslate } from "../../../../../hooks/useTranslate"
import scrollToEnd from "../../../../../utils/functions/scrollToEnd"
import type { Status } from "../MessageForm"

const variants = {
    hidden: { height: 0, opacity: 0 },
    visible: { height: 'auto', opacity: 1 }
}

export default function Result({ status }: { status: Status }) {

    const { line } = useTranslate()

    const ref = useRef<HTMLDivElement>(null)

    const handleAnimationComplete = (definition: unknown) => {
        if (definition === 'visible' && ref.current) {
            scrollToEnd(ref.current)
        }
    }

    return (
        <motion.div ref={ref} variants={variants} initial="hidden" animate="visible" exit="hidden" transition={{ duration: 0.2, ease: 'easeOut' }} onAnimationComplete={handleAnimationComplete} className="w-full overflow-hidden">
            <p role="status" className={`text-center text-sm sm:text-[15px] md:text-base lg:text-xs xl:text-[13px] 2xl:text-sm font-medium tracking-wider leading-5.5 sm:leading-6 md:leading-6.5 lg:leading-5 xl:leading-5.5 2xl:leading-6 ${status === 'success' ? 'text-green-500' : 'text-red-500'}`}>
                {
                    line(status === 'success' ? 'messageSent' : 'messageFailed')
                }
            </p>
        </motion.div>
    )
}