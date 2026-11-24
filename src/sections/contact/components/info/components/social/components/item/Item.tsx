import type { SocialItem } from "../../../../../../../../utils/constants";
import Label from "./components/Label";
import Link from "./components/Link";

export default function Item({ item }: { item: SocialItem }) {

    const Icon = item.icon

    return (
        <div className="w-full flex items-center gap-4 sm:gap-4.5 md:gap-5 lg:gap-2.5 xl:gap-3.25 2xl:gap-4">
            <Icon className="size-5.5 sm:size-6.25 md:size-7 lg:size-4 xl:size-4.75 2xl:size-5.5 text-muted" />
            <div className="flex flex-col gap-3 sm:gap-3.5 md:gap-4 lg:gap-2.5 xl:gap-3 2xl:gap-3.5">
                <Label label={item.label} />
                <Link url={item.url} email={item.email} info={item.info} />
            </div>
        </div>
    )
}