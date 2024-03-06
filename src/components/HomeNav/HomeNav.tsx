import Link from "next/link";
import SearchBar from "./SearchBar";
import SignUpMenu from "./SignUpMenu";
import ProfileMenu from "./ProfileMenu";
import { getServerAuthSession } from "~/server/auth";

const HomeNav = async () => {

    const session = await getServerAuthSession()

    return (
        <div className="flex h-12 items-center justify-between bg-teal-500 relative">
            <Link href="/" className="leading-[3rem] ml-7 text-lg">Makify</Link>
            <div className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
                <SearchBar></SearchBar>
            </div>
            <div className="mr-7 flex items-center justify-center">
                <Link href="/upload" className="pr-5">+ Upload</Link>
                {session ? <ProfileMenu username={session.user.name!}></ProfileMenu> : <SignUpMenu></SignUpMenu> }
            </div>
        </div>
    )
}

/*
<Link href="">{props.username}</Link>
*/

export default HomeNav;