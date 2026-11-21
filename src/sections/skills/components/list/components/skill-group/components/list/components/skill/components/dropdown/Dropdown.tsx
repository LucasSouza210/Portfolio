import { useRef } from "react";
import { AnimatePresence, motion } from "motion/react";
import type { Tech } from "../../../../../../../../../../../../utils/constants";
import scrollIntoView from "../../../../../../../../../../../../utils/functions/scrollIntoView";
import Name from "./components/Name";
import Description from "./components/Description";
import Category from "./components/Category";
import Link from "./components/Link";

const alignClassName = {
    start: 'left-0',
    center: 'inset-x-0 mx-auto',
    end: 'right-0'
}

export default function Dropdown({ open, align, skill }: { open: boolean, align: 'start' | 'center' | 'end', skill: Tech }) {

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
                <motion.div ref={dropdownRef} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} onAnimationComplete={handleAnimationComplete} transition={{ duration: 0.1 }} className={`w-[calc((200%+0.5rem)/3)] flex flex-col gap-2.5 p-4 border rounded-xl absolute z-40 mt-3 bg-default border-default ${alignClassName[align]}`}>
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