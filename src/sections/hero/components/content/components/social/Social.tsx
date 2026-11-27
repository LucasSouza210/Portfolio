import { heroLinks } from "../../../../../../utils/constants";
import SocialLink from "./components/SocialLink";

export default function Social({ mobile }: { mobile?: boolean }) {
    return (
        <div className={`lg:flex-col items-center gap-3 sm:gap-3.5 md:gap-4 lg:gap-2.5 xl:gap-3 2xl:gap-3.5 ${mobile ? 'flex lg:hidden' : 'hidden lg:flex'}`}>
            {
                heroLinks.map((i, index) => (
                    <SocialLink link={i} key={index} />
                ))
            }
        </div>
    )
}