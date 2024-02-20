'use client'
import { useRef, useState } from "react";
import { Search, X } from "react-bootstrap-icons";

const SearchBar = () => {
    const searchBar: React.RefObject<HTMLInputElement> = useRef(null)

    const [icon, setIcon] = useState(<Search className="cursor-pointer" onClick={() => searchBar?.current?.focus()}></Search>)
    return (
        <>
            <div className="w-96 bg-teal-800 h-8 rounded-md flex">
                <div className="pl-3 flex items-center">
                    {icon}
                </div>
                <input ref={searchBar} className="pl-3 w-full rounded-md bg-teal-800" onFocus={() => { setIcon(<X className="cursor-pointer"></X>) }} onBlur={() => setIcon(<Search onClick={() => searchBar?.current?.focus()} className="cursor-pointer"></Search>)} placeholder="Search..." type="search"></input>
            </div>
        </>
    )
}

export default SearchBar;