import Avatar from "./components/Avatar";
import Info from "./components/info/Info";
import Services from "../services/Services";

export default function Profile() {
    return (
        <div className="w-full lg:w-fit lg:h-fit flex lg:flex-col items-center lg:justify-center gap-5 sm:gap-5.5 md:gap-6 lg:gap-3 xl:gap-3.5 2xl:gap-4">
            <Avatar />
            <Info />
            <Services />
        </div>
    )
}