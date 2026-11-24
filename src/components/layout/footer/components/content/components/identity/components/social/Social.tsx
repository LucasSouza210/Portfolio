import { heroLinks } from "../../../../../../../../../utils/constants";
import Link from "./components/Link";

export default function Social() {
    return (
        <div className="flex items-center gap-4">
            {
                heroLinks.map((i, index) => (
                    <Link link={i} key={index}/>
                ))
            }
        </div>
    )
}