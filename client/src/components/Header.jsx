// import React from "react"
import { IoSearch } from "react-icons/io5"
import { Link } from "react-router-dom"

export default function Header() {
  return (
    <header className="bg-primary">
      <div className=" flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="text-sm md:text-lg font-semibold flex flex-wrap">
            <span className="text-[#ffffff] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
              Karmakar
            </span>
            <span className="text-[#ffffff8f] drop-shadow-[0_1.5px_1.5px_rgba(0,0,0,0.8)]">
              Estate
            </span>
          </h1>
        </Link>
        <form className="bg-[#bee3ef] rounded-full flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className=" w-24 sm:w-64 bg-transparent pl-[10px] focus:outline-none p-2 "
          ></input>
          <IoSearch className="text-[#104456] mr-4" />
        </form>
        <ul className="flex gap-4 text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
          <Link to="/Home">
            <li className="hidden sm:inline hover:underline">Home</li>
          </Link>
          <Link to="/about">
            <li className="hidden sm:inline hover:underline">About</li>
          </Link>
          <Link to="/sign-in">
            <li className="hidden sm:inline hover:underline">Sign in</li>
          </Link>
        </ul>
        {/* <h1 className="text-sm md:text-lg font-semibold flex flex-wrap">
        <span>For Buyers</span>
        <span>For Tenants</span>
        <span>For Owners</span>
      </h1> */}
      </div>
    </header>
  )
}
