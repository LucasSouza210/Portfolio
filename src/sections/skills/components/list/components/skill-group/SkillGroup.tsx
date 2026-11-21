import type { SkillGroup } from "../../../../../../utils/constants";
import Info from "./components/info/Info";
import List from "./components/list/List";

export default function SkillGroup({ group }: { group: SkillGroup }) {
    return (
        <div className="w-full flex flex-col gap-4 sm:gap-4.5 md:gap-5 lg:gap-4 xl:gap-5 2xl:gap-6">
            <Info title={group.title} desc={group.description} />
            <List list={group.list} />
        </div>
    )
}