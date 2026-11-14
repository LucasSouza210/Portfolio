import type { ServiceItem } from "../../../../../../utils/constants";
import Title from "./components/Title";

export default function ServiceCard({ service }: { service: ServiceItem }) {

    const Icon = service.icon

    return (
        <div className="w-full aspect-3/4 flex flex-col items-center justify-center gap-0.5 border rounded-xl bg-default border-default">
            <Icon className="size-1/3 text-default"/>
            <Title label={service.label} />
        </div>
    )
}