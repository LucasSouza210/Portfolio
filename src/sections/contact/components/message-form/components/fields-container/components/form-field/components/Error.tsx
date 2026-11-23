import { useRef } from "react";
import { motion } from "motion/react";
import type { FieldError } from "react-hook-form";
import { useTranslate } from "../../../../../../../../../hooks/useTranslate";
import scrollToEnd from "../../../../../../../../../utils/functions/scrollToEnd";

const variants = {
    hidden: { height: 0, opacity: 0 },
    visible: { height: 'auto', opacity: 1 }
}

export default function Error({ error }: { error: FieldError }) {

    const { line } = useTranslate()

    const ref = useRef<HTMLDivElement>(null)

    const handleAnimationComplete = (definition: unknown) => {
        if (definition === 'visible' && ref.current) {
            scrollToEnd(ref.current)
        }
    }

    return (
        <motion.div ref={ref} variants={variants} initial="hidden" animate="visible" exit="hidden" transition={{ duration: 0.2, ease: 'easeOut' }} onAnimationComplete={handleAnimationComplete} className="overflow-hidden">
            <p className="pt-2.5 sm:pt-2.75 md:pt-3 lg:pt-2 xl:pt-2.25 2xl:pt-2.5 text-xs sm:text-[13px] md:text-sm lg:text-[10px] xl:text-[11px] 2xl:text-xs font-medium tracking-wider text-red-500">
                {line(error.message ?? 'notInformed')}
            </p>
        </motion.div>
    )
}