import type { ReactNode } from "react"

type Props = {
    id: string
    children: ReactNode
    center?: boolean
}

export default function SectionContainer({ id, children, center }: Props) {
    return (
        <section id={id} className={`w-full min-h-[calc(100dvh-var(--header-height))] scroll-mt-(--header-height) flex flex-col ${center && 'items-center justify-center'}`}>
            {children}
        </section>
    )
}