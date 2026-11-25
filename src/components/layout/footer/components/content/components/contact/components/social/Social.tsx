import { social } from "../../../../../../../../../utils/constants";
import Item from "./components/item/Item";

export default function Social() {
    return (
        <div className="w-full flex flex-col gap-3 sm:gap-3.5 md:gap-4 lg:gap-2 xl:gap-2.5 2xl:gap-3">
            {
                social.map((i, index) => (
                    <Item item={i} key={index} />
                ))
            }
        </div>
    )
}