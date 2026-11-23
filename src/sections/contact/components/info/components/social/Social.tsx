import { social } from "../../../../../../utils/constants";
import Item from "./components/item/Item";

export default function Social() {
    return (
        <div className="w-full flex flex-col gap-6 sm:gap-6.75 md:gap-7.5 lg:gap-4 xl:gap-4.75 2xl:gap-5.5">
            {
                social.map((i, index) => (
                    <Item item={i} key={index} />
                ))
            }
        </div>
    )
}