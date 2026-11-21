import type { Tech } from "../../../../../../../../utils/constants";
import Skill from "./components/skill/Skill";

const alignments = ['start', 'center', 'end'] as const

const desktopColumns = 8
const dropdownColumns = 3

const getDropdownColumn = (index: number, total: number) => {
    const column = index % desktopColumns
    const offset = index === 0 ? 0 : index === total - 1 ? 2 : 1
    return Math.min(Math.max(column - offset, 0), desktopColumns - dropdownColumns)
}

export default function List({ list }: { list: Tech[] }) {
    return (
        <div className="relative w-full grid grid-cols-3 lg:grid-cols-8 gap-(--list-gap) [--list-gap:1rem] sm:[--list-gap:1.125rem] md:[--list-gap:1.25rem] lg:[--list-gap:0.75rem] xl:[--list-gap:1rem] 2xl:[--list-gap:1.125rem]">
            {
                list.map((i, index) => (
                    <Skill skill={i} align={alignments[index % 3]} column={getDropdownColumn(index, list.length)} key={index} />
                ))
            }
        </div>
    )
}