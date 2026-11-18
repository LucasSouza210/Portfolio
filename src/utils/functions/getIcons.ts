import { techs } from "../constants"

export const getIcons = (list: string[]) => {
    return Object.values(techs)
        .flat()
        .filter(item => list.includes(item.key))
}