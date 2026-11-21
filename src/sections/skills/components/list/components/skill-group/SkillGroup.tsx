import type { SkillGroup } from "../../../../../../utils/constants";
import Info from "./components/info/Info";
import List from "./components/list/List";

export default function SkillGroup({ group }: { group: SkillGroup }) {
    return (
        <div className="w-full flex flex-col gap-4">
            <Info title={group.title} desc={group.description} />
            <List list={group.list} />
        </div>
    )
}