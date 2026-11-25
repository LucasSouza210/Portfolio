import type { SocialItem } from "../../../../../../../../../../../utils/constants"
import Icon from "./components/Icon"
import Label from "./components/Label"
import Link from "./components/Link"

export default function Item({ item }: { item: SocialItem }) {


    return (
        <div className="w-full flex items-center gap-3 sm:gap-3.75 md:gap-4.5 lg:gap-2.5 xl:gap-3 2xl:gap-3.5">
            <Icon icon={item.icon} />
            <div className="flex flex-col gap-3 sm:gap-3.5 md:gap-4 lg:gap-2.25 xl:gap-2.75 2xl:gap-3.25">
                <Label label={item.label} />
                <Link url={item.url} email={item.email} info={item.info} />
            </div>
        </div>
    )
}