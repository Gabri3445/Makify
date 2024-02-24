'use client'
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { Search, X } from "react-bootstrap-icons";

//TODO refactor this

const SearchBar = () => {
    const searchBar: React.RefObject<HTMLInputElement> = useRef(null)

    const router = useRouter();

    const [icon, setIcon] = useState(<Search className="cursor-pointer" onClick={() => searchBar?.current?.focus()}></Search>)
    return (
        <>
            <div className="md:w-96 w-40 bg-teal-800 h-8 rounded-md flex">
                <div className="pl-3 flex items-center">
                    {icon}
                </div>
                <form className="flex items-center" onSubmit={() => router.push(`search/${searchBar.current?.value}`)}>
                    <input ref={searchBar} className="pl-3 w-full rounded-md bg-teal-800" onFocus={() => { setIcon(<X className="cursor-pointer" size={20}></X>) }} onBlur={() => setIcon(<Search onClick={() => searchBar?.current?.focus()} className="cursor-pointer"></Search>)} placeholder="Search..." type="search"></input>
                </form>
            </div>
        </>
    )
}

export default SearchBar;