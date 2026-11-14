import { services } from "../../../../utils/constants";
import Title from "./components/Title";
import ServiceCard from "./components/service-card/ServiceCard";

export default function Services() {
    return (
        <div className="w-full flex flex-col gap-3">
            <Title />
            <div className="w-full flex items-center gap-4">
                {
                    services.map((i, index) => (
                        <ServiceCard service={i} key={index} />
                    ))
                }
            </div>
        </div>
    )
}