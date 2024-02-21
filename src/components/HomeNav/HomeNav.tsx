import Link from "next/link";
import SearchBar from "./SearchBar";


interface HomeNavProps {
    username: string;
}

const HomeNav = (props: HomeNavProps) => {

    return (
        <div className="flex h-12 items-center justify-between bg-teal-500 relative">
            <h1 className="leading-[3rem] ml-7">Makify</h1>
            <div className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
                <SearchBar></SearchBar>
            </div>
            <div className="mr-7">
                <Link href="">{props.username}</Link>
            </div>
        </div>
    )
}

export default HomeNav;