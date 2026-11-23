export default function Link({ url, email, info }: { url: string, email: boolean | undefined, info: string }) {
    return (
        <a href={email ? `mailto:${url}` : url} className="text-sm font-medium tracking-wider leading-min text-action" target="_blank" rel="noopener noreferrer">
            {info}
        </a>
    )
}