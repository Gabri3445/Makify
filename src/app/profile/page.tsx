import { signIn } from "next-auth/react";
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
            <div>
                Signed in as {session.user.email}
            </div>
        )
    }
}