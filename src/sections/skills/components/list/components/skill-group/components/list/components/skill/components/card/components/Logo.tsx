import type { ComponentType, SVGProps } from "react";

export default function Logo({ icon }: { icon: ComponentType<SVGProps<SVGSVGElement>> }) {

    const Icon = icon

    return (
        <Icon className="size-8 sm:size-10 md:size-12 lg:size-6 xl:size-8 2xl:size-10" />
    )
}