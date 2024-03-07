import EditBio from "~/components/EditProfile/EditBio";
import EditPrinters from "~/components/EditProfile/EditPrinters";
import EditUsername from "~/components/EditProfile/EditUsername";
import GoToSignIn from "~/components/EditProfile/GoToSignIn";
import { getServerAuthSession } from "~/server/auth"

export default async function EditProfilePage() {

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
                <EditBio id={session.user.id}></EditBio>
                <EditPrinters id={session.user.id}></EditPrinters>
            </div>
        )
    }
}