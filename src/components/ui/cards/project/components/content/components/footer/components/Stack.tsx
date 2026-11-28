import { getIcons } from "../../../../../../../../../utils/functions/getIcons"

export default function Stack({ tech }: { tech: string[] }) {
    return (
        <div className="flex items-center gap-3 sm:gap-3.5 md:gap-4 lg:gap-2.5 xl:gap-3 2xl:gap-3.5">
            {
                getIcons(tech).map((item, index) => {

                    const Icon = item.icon

                    return <Icon className="size-6 sm:size-7 md:size-8 lg:size-4.5 xl:size-5.25 2xl:size-6" aria-label={item.name} key={index} />
                })
            }
        </div>
    )
}