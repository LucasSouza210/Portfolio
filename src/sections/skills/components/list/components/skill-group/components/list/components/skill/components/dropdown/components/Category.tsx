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
        <span className="w-fit flex items-center gap-1 px-2 py-1.5 border rounded-md text-[10px] font-medium tracking-wider leading-min bg-elevated border-default text-default">
            <Icon className="size-3.5" aria-hidden="true" />
            {
                line(categoryKeys[category])
            }
        </span>
    )
}