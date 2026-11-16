import type { ServiceItem } from "../../../../../../utils/constants";
import Index from "./components/Index";
import Title from "./components/Title";

export default function ServiceCard({ service, index }: { service: ServiceItem, index: number }) {

    const Icon = service.icon

    return (
        <div className="w-full lg:w-fit lg:h-8 xl:h-9 2xl:h-10 aspect-4/5 lg:aspect-6/1 flex flex-col lg:flex-row-reverse items-center justify-center lg:justify-between relative gap-px sm:gap-0.5 md:gap-0.75 lg:gap-0 lg:px-3 xl:px-3.25 2xl:px-3.5 border rounded-xl sm:rounded-[14px] md:rounded-2xl lg:rounded-md xl:rounded-[7px] 2xl:rounded-lg bg-default lg:bg-elevated border-default">
            <Index index={index} />
            <Icon className="size-1/3 lg:size-3.5 xl:size-4 2xl:size-4.5 text-indigo-500" />
            <Title label={service.label} index={index} />
        </div>
    )
}