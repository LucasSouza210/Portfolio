import type { ServiceItem } from "../../../../../../utils/constants";
import Title from "./components/Title";

export default function ServiceCard({ service, index }: { service: ServiceItem, index: number }) {

    const Icon = service.icon

    return (
        <div className="w-full lg:h-8 xl:h-9 2xl:h-10 aspect-5/6 lg:aspect-auto flex flex-col lg:flex-row-reverse items-center justify-center lg:justify-between gap-px sm:gap-0.5 md:gap-0.75 lg:gap-0 lg:px-3 xl:px-3.25 2xl:px-3.5 border rounded-xl sm:rounded-[14px] md:rounded-2xl lg:rounded-md xl:rounded-[7px] 2xl:rounded-lg bg-default border-default">
            <Icon className="size-1/3 lg:size-3.5 xl:size-4 2xl:size-4.5 text-indigo-500" />
            <Title label={service.label} index={index}/>
        </div>
    )
}