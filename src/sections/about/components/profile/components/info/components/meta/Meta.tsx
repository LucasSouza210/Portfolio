import { profileMeta } from "../../../../../../../../utils/constants";
import Badge from "./components/Badge";

export default function Meta() {
    return (
        <div className="flex items-center gap-2 sm:gap-2.5 md:gap-3 lg:gap-2 xl:gap-2.25 2xl:gap-2.5">
            {
                profileMeta.map((i, index) => (
                    <Badge info={i} key={index} />
                ))
            }
        </div>
    )
}