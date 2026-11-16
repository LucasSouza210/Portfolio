import type { ReactNode } from "react"
import Title from "./components/Title"

type Props = {
    id: string
    children: ReactNode
    title?: string
}

export default function SectionContainer({ id, children, title }: Props) {
    return (
        <section id={id} className={`w-full lg:mx-auto sm:max-w-96 md:max-w-md lg:max-w-156 xl:max-w-3xl 2xl:max-w-4xl min-h-[calc(100dvh-var(--header-height))] scroll-mt-(--header-height) flex flex-col px-8 sm:px-0 ${title && 'gap-7 sm:gap-8 md:gap-9 lg:gap-6 py-6 sm:py-7 md:py-8 lg:py-5'}`}>
            {
                title &&
                <Title title={title} />
            }
            {children}
        </section>
    )
}