import { heroLinks } from "../../../../../../utils/constants";
import SocialLink from "./components/SocialLink";

export default function Social({ mobile }: { mobile?: boolean }) {
    return (
        <div className={`lg:flex-col items-center gap-2.5 sm:gap-3 md:gap-3.5 lg:gap-2 xl:gap-2.25 2xl:gap-2.5 ${mobile ? 'flex lg:hidden' : 'hidden lg:flex'}`}>
            {
                heroLinks.map((i, index) => (
                    <SocialLink link={i} key={index} />
                ))
            }
        </div>
    )
}