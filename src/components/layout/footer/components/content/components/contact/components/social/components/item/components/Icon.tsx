import type { IconType } from "react-icons";

export default function Icon({ icon }: { icon: IconType }) {

    const Icon = icon

    return (
        <span className="h-10 sm:h-11.5 md:h-13 lg:h-7 xl:h-9 2xl:h-11 aspect-square flex items-center justify-center border rounded-lg sm:rounded-[9px] md:rounded-[10px] lg:rounded-md xl:rounded-[7px] 2xl:rounded-lg bg-elevated border-default text-default">
            {
                <Icon className="size-5 sm:size-5.75 md:size-6.5 lg:size-3.5 xl:size-4.5 2xl:size-5.5"/>
            }
        </span>
    )
}