import { useTranslate } from "../../../../../../../../../hooks/useTranslate";
import type { ProfileInfo } from "../../../../../../../../../utils/constants";

export default function Badge({ info }: { info: ProfileInfo }) {

    const { line } = useTranslate()

    const Icon = info.icon

    return (
        <span className="flex items-center gap-1 sm:gap-1.25 md:gap-1.5 lg:gap-1 xl:gap-1.25 2xl:gap-1.5 px-2 sm:px-2.5 md:px-3 lg:px-2.5 xl:px-2.75 2xl:px-3 py-1.5 sm:py-1.75 md:py-2 lg:py-1.5 xl:py-1.75 2xl:py-2 border rounded-md sm:rounded-[7px] md:rounded-lg lg:rounded-md xl:rounded-[7px] 2xl:rounded-lg text-[clamp(9px,2.667vw,10px)] sm:text-[11px] md:text-xs lg:text-[10px] xl:text-[11px] 2xl:text-xs font-medium tracking-wider bg-elevated border-default text-default">
            <Icon className={info.status ? 'text-green-500' : 'text-indigo-500'} />
            {
                info.status ? line(info.label) : info.label
            }
        </span>
    )
}