import type { SocialItem } from "../../../../../../../../utils/constants";
import Label from "./components/Label";
import Link from "./components/Link";

export default function Item({ item }: { item: SocialItem }) {

    const Icon = item.icon

    return (
        <div className="w-full flex items-center gap-4">
            <Icon className="size-5.5 text-zinc-400" />
            <div className="flex flex-col gap-3">
                <Label label={item.label} />
                <Link url={item.url} email={item.email} info={item.info} />
            </div>
        </div>
    )
}