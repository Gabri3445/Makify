import EditUsername from "~/components/Profile/EditUsername";
import GoToSignIn from "~/components/Profile/GoToSignIn";
import { getServerAuthSession } from "~/server/auth"

export default async function ProfilePage() {

    const session = await getServerAuthSession();

    if (!session) {
        return (
            <><GoToSignIn></GoToSignIn></>
        )
    }
    else {
        return (
            <div className="w-2/3 mx-auto mt-14">
                <span className="text-6xl">ABOUT YOU</span>
                <EditUsername id={session.user.id}></EditUsername>
            </div>
        )
    }
}