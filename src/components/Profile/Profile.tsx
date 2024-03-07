import Image from "next/image"

interface ProfileProps {
    userImage: string
}

export default async function Profile(props: ProfileProps) {

    return (
        <div>
            <div className="relative rounded-full border z-10  bg-white overflow-hidden mr-4">
                <Image src={props.userImage} width={32} height={32} alt="User icon"></Image>
            </div>
        </div>
    )
}