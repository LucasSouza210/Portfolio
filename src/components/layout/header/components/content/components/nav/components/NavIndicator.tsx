type Props = {
    left: number
    width: number
    isAnimated: boolean
}

export default function NavIndicator({ left, width, isAnimated }: Props) {
    return (
        <span aria-hidden="true" className="absolute left-0 lg:-bottom-2 xl:-bottom-2.25 2xl:-bottom-2.5 lg:h-0.5 2xl:h-0.75 rounded-full will-change-transform bg-indigo-500"
            style={{
                transform: `translateX(${left}px)`,
                width,
                transitionProperty: isAnimated ? "transform, width" : "none",
                transitionDuration: "300ms",
                transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)"
            }}
        />
    )
}