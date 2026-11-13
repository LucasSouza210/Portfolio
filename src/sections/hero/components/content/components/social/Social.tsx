import { heroLinks } from "../../../../../../utils/constants";
import SocialLink from "./components/SocialLink";

export default function Social({ mobile }: { mobile?: boolean }) {
    return (
        <div className={`lg:flex-col items-center gap-4 sm:gap-4.5 md:gap-5 lg:gap-3.5 xl:gap-4 2xl:gap-4.5 ${mobile ? 'flex lg:hidden' : 'hidden lg:flex'}`}>
            {
                heroLinks.map((i, index) => (
                    <SocialLink link={i} key={index} />
                ))
            }
        </div>
    )
}