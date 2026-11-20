export default function Backdrop({ src, name }: { src: string, name: string }) {
    return (
        <div className="size-full origin-top will-change-transform group-hover:scale-[1.04] group-focus-within:scale-[1.04]" style={{
            transitionProperty: "transform, scale",
            transitionDuration: "700ms",
            transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)"
        }}>
            <img className="size-full object-cover object-top" src={src} alt={name} />
        </div>
    )
}