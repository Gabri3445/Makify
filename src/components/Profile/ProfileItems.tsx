import { db } from "~/server/db"
import ItemCard from "../ItemCard/ItemCard"

interface ProfileItemsProps {
    id: string
}

export default function ProfileItems (props: ProfileItemsProps) {

    const items = db.item.findMany({
        where: {
            createdById: props.id
        }
    })

    const array = new Array(20).fill(0)

    return (
        <div className="w-full ml-5 flex flex-wrap justify-center">
            {array.map((_, i) => (
            <ItemCard key={i} userLink="fdsfds" itemLink="dds" image="https://images.pexels.com/photos/20241941/pexels-photo-20241941/free-photo-of-cute-cats-near-building.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" likes={0} name="Articulated flexy Nicolo Martiradonna" userImage="https://cdn-icons-png.flaticon.com/512/2815/2815428.png" username="Gabri3445"></ItemCard>
        ))}
        </div>
    )
}