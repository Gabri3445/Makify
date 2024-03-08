import Image from "next/image"

interface ProfileProps {
    userImage: string
    username: string
    bio: string
    printers: string[]
}

export default async function Profile(props: ProfileProps) {

    return (
        <div className="border border-gray-900 bg-gray-700 w-96 flex flex-col items-center justify-center py-5">
            <div className="rounded-full border-4 z-10 w-fit bg-white overflow-hidden">
                <Image src={props.userImage} width={72} height={72} alt="User icon"></Image>
            </div>
            <span className="mt-3 text-3xl">{props.username}</span>
            <div className="w-full mt-5 flex flex-col">
                <span className="w-10/12 mx-auto text-2xl ">Bio: </span>
                <span className="w-10/12 mx-auto">{props.bio}</span>
            </div>
            <div className="w-full mt-5 flex flex-col">
                <span className="w-10/12 mx-auto text-2xl ">My printers: </span>
                <span className="w-10/12 mx-auto">{props.printers.join()}</span>
            </div>
        </div>
    )
}