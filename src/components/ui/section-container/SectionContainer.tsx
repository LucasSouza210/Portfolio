import type { ReactNode } from "react"

type Props = {
    id: string
    children: ReactNode
}

export default function SectionContainer({ id, children }: Props) {
    return (
        <section id={id} className="w-full lg:mx-auto sm:max-w-96 md:max-w-md lg:max-w-156 xl:max-w-3xl 2xl:max-w-4xl min-h-[calc(100dvh-var(--header-height))] scroll-mt-(--header-height) flex flex-col">
            {children}
        </section>
    )
}