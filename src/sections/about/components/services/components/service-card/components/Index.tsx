export default function Index({ index }: { index: number }) {
    return (
        <p className="block lg:hidden text-[10px] sm:text-[11px] md:text-xs font-medium tracking-wider leading-none absolute top-3.5 sm:top-4 md:top-4.5 left-3.5 sm:left-4 md:left-4.5 text-zinc-400">
            {
                `0${index + 1}`
            }
        </p>
    )
}