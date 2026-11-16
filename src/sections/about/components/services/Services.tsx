import { services } from "../../../../utils/constants";
import Heading from "../../../../components/ui/tipography/Heading";
import ServiceCard from "./components/service-card/ServiceCard";

export default function Services({ mobile }: { mobile?: boolean }) {
    return (
        <div className={`w-full flex flex-col gap-3 sm:gap-3.5 md:gap-4 lg:gap-2.5 ${mobile ? 'flex lg:hidden' : 'hidden lg:flex'}`}>
            <Heading text="servicesTitle" className="lg:hidden"/>
            <div className="w-full flex lg:flex-col items-center gap-4 sm:gap-4.75 md:gap-5.5 lg:gap-2.5 xl:gap-2.75 2xl:gap-3">
                {
                    services.map((i, index) => (
                        <ServiceCard service={i} index={index} key={index} />
                    ))
                }
            </div>
        </div>
    )
}