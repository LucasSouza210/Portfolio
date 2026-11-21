import type { Tech } from "../../../../../../../../../../../../utils/constants";
import Logo from "./components/Logo";
import Name from "./components/Name";

export default function Card({ skill, toggle, open }: { skill: Tech, toggle: () => void, open: boolean }) {
    return (
        <div className={`w-full aspect-4/5 flex flex-col items-center justify-center gap-2 p-3 relative border rounded-xl action-default ${open ? 'border-active' : 'border-action'}`} onClick={toggle}>
            <Logo icon={skill.icon} />
            <Name name={skill.name} />
        </div>
    )
}