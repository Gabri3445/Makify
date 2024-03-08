import Profile from "~/components/Profile/Profile";
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
            }
        },
    })

    if(user) {
        return (
            <div className="mx-auto w-11/12 mt-5">
                <Profile userImage={user.image ?? ""} bio="bio" printers={["printer"]} username="username"></Profile>
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