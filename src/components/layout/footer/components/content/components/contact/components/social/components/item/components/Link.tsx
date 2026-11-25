export default function Link({ url, email, info }: { url: string, email: boolean | undefined, info: string }) {
    return (
        <a href={email ? `mailto:${url}` : url} className="text-sm sm:text-base md:text-lg lg:text-[10px] xl:text-xs 2xl:text-sm font-medium tracking-wider leading-min text-action" target="_blank" rel="noopener noreferrer">
            {info}
        </a>
    )
}