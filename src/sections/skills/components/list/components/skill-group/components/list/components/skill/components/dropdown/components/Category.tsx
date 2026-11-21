import type { IconType } from "react-icons"
import { TbBooks, TbBraces, TbStack2, TbTool } from "react-icons/tb"
import type { Tech } from "../../../../../../../../../../../../../utils/constants"
import { useTranslate } from "../../../../../../../../../../../../../hooks/useTranslate"

const categoryIcons: Record<Tech["category"], IconType> = {
    language: TbBraces,
    library: TbBooks,
    framework: TbStack2,
    tool: TbTool
}

const categoryKeys = {
    language: "languageCategory",
    library: "libraryCategory",
    framework: "frameworkCategory",
    tool: "toolCategory"
} as const

export default function Category({ category }: { category: Tech["category"] }) {

    const { line } = useTranslate()

    const Icon = categoryIcons[category]

    return (
        <span className="w-fit flex items-center gap-1 sm:gap-1.25 md:gap-1.5 lg:gap-1 xl:gap-1.25 2xl:gap-1.5 px-2 sm:px-2.5 md:px-3 lg:px-1.5 xl:px-2 2xl:px-2.5 py-1.5 sm:py-1.75 md:py-2 lg:py-1 xl:py-1.25 2xl:py-1.5 border rounded-md sm:rounded-[7px] md:rounded-lg lg:rounded-[5px] xl:rounded-md 2xl:rounded-[7px] text-[10px] sm:text-[11px] md:text-xs lg:text-[9px] xl:text-[10px] 2xl:text-[11px] font-medium tracking-wider leading-min bg-elevated border-default text-default">
            <Icon className="size-3.5 sm:size-3.75 md:size-4 lg:size-3 xl:size-3.25 2xl:size-3.5" aria-hidden="true" />
            {
                line(categoryKeys[category])
            }
        </span>
    )
}