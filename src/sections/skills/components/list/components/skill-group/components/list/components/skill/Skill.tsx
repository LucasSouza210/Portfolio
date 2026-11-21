import useDropdown from "../../../../../../../../../../hooks/ui/useDropdown"
import type { Tech } from "../../../../../../../../../../utils/constants"
import Card from "./components/card/Card"
import Dropdown from "./components/dropdown/Dropdown"

export default function Skill({ skill, align }: { skill: Tech, align: 'start' | 'center' | 'end' }) {

    const { ref, open, toggle } = useDropdown()

    return (
        <div ref={ref}>
            <div className="flex justify-center">
                <Card skill={skill} toggle={toggle} open={open} />
            </div>
            <Dropdown open={open} align={align} skill={skill} />
        </div>
    )
}