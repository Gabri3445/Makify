import Link from "next/link";
import SearchBar from "./SearchBar";
import SignUpMenu from "./SignUpMenu";

const HomeNav = () => {

    return (
        <div className="flex h-12 items-center justify-between bg-teal-500 relative">
            <h1 className="leading-[3rem] ml-7">Makify</h1>
            <div className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
                <SearchBar></SearchBar>
            </div>
            <div className="mr-7 flex items-center justify-center">
                <Link href="/upload" className="pr-5">+ Upload</Link>
                <SignUpMenu/>  {/*show sign up if not logged in*/}
            </div>
        </div>
    )
}

/*
<Link href="">{props.username}</Link>
*/

export default HomeNav;