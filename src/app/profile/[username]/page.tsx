import Profile from "~/components/Profile/Profile";
import ProfileItems from "~/components/Profile/ProfileItems";
import { db } from "~/server/db";

export default async function ProfilePage({ params }: { params: { username: string } }) {
    
    const user = await db.user.findUnique({
        where: {
            name: params.username
        },
        select: {
            name: true,
            image: true,
            items: {
                select: {
                    id: true,
                    image: true,
                    likes: true,
                    name: true
                }
            },
            id: true
        },
    })

    if(user) {
        return (
            <div className="mx-auto w-11/12 mt-5 flex">
                <Profile userImage={user.image ?? ""} bio="bio" printers={["printer"]} username="username"></Profile>
                <ProfileItems id={user.id}></ProfileItems>
            </div>
        )
    } else {
        return (
            <div>
                User not found
            </div>
        )
    }
}