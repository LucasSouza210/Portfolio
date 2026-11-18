export default function Backdrop({ src, name }: { src: string, name: string }) {
    return (
        <img className="size-full object-cover object-top" src={src} alt={name} />
    )
}