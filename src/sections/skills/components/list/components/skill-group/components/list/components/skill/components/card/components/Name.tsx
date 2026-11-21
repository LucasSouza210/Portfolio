export default function Title({ name }: { name: string }) {
    return (
        <p className="text-center text-xs font-medium tracking-wider leading-5 text-wrap wrap-anywhere text-default">
            {name}
        </p>
    )
}