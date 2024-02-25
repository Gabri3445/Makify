import Image from "next/image"
import Link from "next/link"
import { Heart } from "react-bootstrap-icons"

interface ItemCardProps {
    name: string
    username: string
    image: string,
    userImage: string
    likes: number
    itemLink: string
    userLink: string
}

const ItemCard = ({ name, username, image, userImage, likes, itemLink, userLink }: ItemCardProps) => {
    return (
        <div className="border w-80 h-80 rounded-lg flex flex-col justify-between bg-gray-900 group mx-3 my-3">
            <div className="w-full h-full bg-center bg-no-repeat bg-contain flex relative" style={{ backgroundImage: `url(${image})` }}>
                <div className="pt-4 px-4 h-fit w-full flex justify-between">
                    <div className="flex">
                        <div className="relative rounded-full border z-10  bg-white overflow-hidden mr-4">
                            <Link href={userLink} className="block"><Image src={userImage} width={32} height={32} alt="User icon"></Image></Link>
                        </div>
                        <div className="relative z-10 opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center">
                            <Link href={userLink} className="block">{username}</Link>
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <Heart className="mr-1" ></Heart> : {likes}
                    </div>
                </div>
                <Link href={itemLink} className="w-full h-full absolute z-0"></Link>
            </div>
            <Link href={itemLink}><div className="w-full text-center rounded-lg bg-teal-500 text-lg py-3 overflow-hidden whitespace-nowrap text-ellipsis px-5">{name}</div></Link>
        </div>
    )
}

export default ItemCard;