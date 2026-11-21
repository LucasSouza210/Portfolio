import type { Tech } from "../../../../../../../../utils/constants";
import Skill from "./components/skill/Skill";

const alignments = ['start', 'center', 'end'] as const

export default function List({ list }: { list: Tech[] }) {
    return (
        <div className="relative w-full grid grid-cols-3 gap-4">
            {
                list.map((i, index) => (
                    <Skill skill={i} align={alignments[index % 3]} key={index} />
                ))
            }
        </div>
    )
}