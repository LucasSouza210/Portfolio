import { useRef } from "react";
import { AnimatePresence, motion } from "motion/react";
import type { Tech } from "../../../../../../../../../../../../utils/constants";
import scrollIntoView from "../../../../../../../../../../../../utils/functions/scrollIntoView";
import Name from "./components/Name";
import Description from "./components/Description";
import Category from "./components/Category";
import Link from "./components/Link";

const alignClassName = {
    start: 'max-lg:left-0',
    center: 'max-lg:inset-x-0 max-lg:mx-auto',
    end: 'max-lg:right-0'
}

const columnClassName = [
    'lg:left-0',
    'lg:left-[calc((100%+var(--list-gap))/8)]',
    'lg:left-[calc((100%+var(--list-gap))*2/8)]',
    'lg:left-[calc((100%+var(--list-gap))*3/8)]',
    'lg:left-[calc((100%+var(--list-gap))*4/8)]',
    'lg:left-[calc((100%+var(--list-gap))*5/8)]'
]

export default function Dropdown({ open, align, column, skill }: { open: boolean, align: 'start' | 'center' | 'end', column: number, skill: Tech }) {

    const dropdownRef = useRef<HTMLDivElement>(null)

    const handleAnimationComplete = () => {
        if (dropdownRef.current) {
            scrollIntoView(dropdownRef.current)
        }
    }

    return (
        <AnimatePresence>
            {
                open &&
                <motion.div ref={dropdownRef} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} onAnimationComplete={handleAnimationComplete} transition={{ duration: 0.1 }} className={`w-[calc((250%+var(--list-gap))/3)] lg:w-[calc((300%-var(--list-gap)*5)/8)] flex flex-col gap-2.5 sm:gap-2.75 md:gap-3 lg:gap-2 xl:gap-2.5 2xl:gap-3 p-4 sm:p-4.5 md:p-5 lg:p-4 xl:p-4.5 2xl:p-5 border rounded-xl sm:rounded-[14px] md:rounded-2xl lg:rounded-[10px] xl:rounded-xl 2xl:rounded-[14px] absolute z-40 mt-3 sm:mt-3.5 md:mt-4 lg:mt-2.5 xl:mt-2.75 2xl:mt-3 bg-default border-default ${alignClassName[align]} ${columnClassName[column]}`}>
                    <Name name={skill.name} />
                    <Description desc={skill.description} />
                    <div className="w-full flex items-end justify-between">
                        <Category category={skill.category} />
                        <Link url={skill.link} />
                    </div>
                </motion.div>
            }
        </AnimatePresence>
    )
}