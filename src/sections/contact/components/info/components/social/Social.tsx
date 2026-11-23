import { social } from "../../../../../../utils/constants";
import Item from "./components/item/Item";

export default function Social() {
    return (
        <div className="w-full flex flex-col gap-6">
            {
                social.map((i, index) => (
                    <Item item={i} key={index} />
                ))
            }
        </div>
    )
}