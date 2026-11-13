import { heroLinks } from "../../../../../../utils/constants";
import SocialLink from "./components/SocialLink";

export default function Social() {
    return (
        <div className="flex items-center gap-4">
            {
                heroLinks.map((i, index) => (
                    <SocialLink link={i} key={index} />
                ))
            }
        </div>
    )
}