import type { ComponentType, SVGProps } from "react";

export default function Logo({ icon }: { icon: ComponentType<SVGProps<SVGSVGElement>> }) {

    const Icon = icon

    return (
        <Icon className="size-8"/>
    )
}