import type { ReactNode } from "react"
import Title from "./components/Title"

type Props = {
    id: string
    children: ReactNode
    title?: string
    lastSection?: boolean
}

export default function SectionContainer({ id, children, title, lastSection }: Props) {
    return (
        <section id={id} className={`w-full lg:mx-auto sm:max-w-96 md:max-w-md lg:max-w-164 xl:max-w-200 2xl:max-w-232 scroll-mt-(--header-height) flex flex-col px-7 sm:px-0 ${title ? `gap-6.5 sm:gap-7 md:gap-7.5 lg:gap-5 xl:gap-6 2xl:gap-7 pt-7 sm:pt-7.5 md:pt-8 lg:pt-6 xl:pt-7 2xl:pt-8 ${lastSection ? 'pb-7 sm:pb-8 md:pb-9' : 'pb-2 sm:pb-1 md:pb-1.5'} lg:pb-12 xl:pb-7 2xl:pb-16` : 'min-h-[calc(100dvh-var(--header-height))]'}`}>
            {
                title &&
                <Title title={title} />
            }
            {children}
        </section>
    )
}