export default function Name({ name }: { name: string }) {
    return (
        <p className="text-base font-medium tracking-wider leading-min text-title">
            {name}
        </p>
    )
}