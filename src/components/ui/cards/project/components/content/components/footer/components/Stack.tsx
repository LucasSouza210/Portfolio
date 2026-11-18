import { getIcons } from "../../../../../../../../../utils/functions/getIcons"

export default function Stack({ tech }: { tech: string[] }) {
    return (
        <div className="flex items-center gap-3">
            {
                getIcons(tech).map((item, index) => {

                    const Icon = item.icon

                    return <Icon className="size-5 sm:size-4.5 md:size-5 lg:size-3 xl:size-3.5 2xl:size-4" aria-label={item.name} key={index} />
                })
            }
        </div>
    )
}