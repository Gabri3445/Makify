import Link from "next/link";
import SearchBar from "./SearchBar";


interface HomeNavProps {
    username: string;
}

const HomeNav = (props: HomeNavProps) => {

    return (
        <div className="flex h-12 items-center justify-between bg-teal-500">
            <h1 className="leading-[3rem] pl-7">Makify</h1>
            <div>
                <SearchBar></SearchBar>
            </div>
            <div className="pr-7">
                <Link href="">{props.username}</Link>
            </div>
        </div>
    )
}

export default HomeNav;