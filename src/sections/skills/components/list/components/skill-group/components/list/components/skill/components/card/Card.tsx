import type { Tech } from "../../../../../../../../../../../../utils/constants";
import Logo from "./components/Logo";
import Name from "./components/Name";

export default function Card({ skill, toggle, open }: { skill: Tech, toggle: () => void, open: boolean }) {
    return (
        <div className={`w-full aspect-4/5 flex flex-col items-center justify-center gap-2 sm:gap-2.5 md:gap-3 lg:gap-1.5 xl:gap-2 2xl:gap-2.5 p-3 sm:p-3.5 md:p-4 lg:p-2.5 xl:p-3 2xl:p-3.5 relative border rounded-xl sm:rounded-[14px] md:rounded-2xl lg:rounded-[10px] xl:rounded-xl 2xl:rounded-[14px] action-default ${open ? 'border-active' : 'border-action'}`} onClick={toggle}>
            <Logo icon={skill.icon} />
            <Name name={skill.name} />
        </div>
    )
}