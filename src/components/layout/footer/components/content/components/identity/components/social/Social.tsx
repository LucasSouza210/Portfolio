import { heroLinks } from "../../../../../../../../../utils/constants";
import Link from "./components/Link";

export default function Social() {
    return (
        <div className="flex items-center gap-3.5 sm:gap-4.25 md:gap-5 lg:gap-2.5 xl:gap-3 2xl:gap-3.5">
            {
                heroLinks.map((i, index) => (
                    <Link link={i} key={index} />
                ))
            }
        </div>
    )
}