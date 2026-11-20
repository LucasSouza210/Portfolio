import { getIcons } from "../../../../../../../../../utils/functions/getIcons"

export default function Stack({ tech }: { tech: string[] }) {
    return (
        <div className="flex items-center gap-3 sm:gap-3.5 md:gap-4 lg:gap-2.5 xl:gap-3 2xl:gap-3.5">
            {
                getIcons(tech).map((item, index) => {

                    const Icon = item.icon

                    return <Icon className="size-5.5 sm:size-6.25 md:size-7 lg:size-4 xl:size-4.75 2xl:size-5.5" aria-label={item.name} key={index} />
                })
            }
        </div>
    )
}