import React from "react"
import { Link } from "react-router-dom"

export default function SignUp() {
  return (
    <div>
      <h1 className="text-black text-center text-3xl my-7 font-medium pt-5">
        Sign Up
      </h1>
      <form className="flex flex-col gap-5 items-center">
        <input
          type="text"
          placeholder="Username"
          className="border p-3 rounded-lg w-2/6"
          id="username"
        ></input>
        <input
          type="email"
          placeholder="Email"
          className="border p-3 rounded-lg w-2/6"
          id="email"
        ></input>
        <input
          type="password"
          placeholder="Password"
          className="border p-3 rounded-lg w-2/6"
          id="password"
        ></input>
        <button className="text-white bg-[#3c4a5d] border p-3 rounded-lg w-2/6 border-white hover:bg-[#3c4a5dee]">
          SIGN UP
        </button>
        {/* <button className="text-white bg-[#3C4A5D] border p-3 rounded-lg w-2/6 border-white">
          GOOGLE SIGN UP
        </button> */}
        <h3 className="text-left mt-5">
          Have an account?{" "}
          <Link to="/sign-in">
            <span className="text-blue-600">Sign in</span>
          </Link>
        </h3>
      </form>
    </div>
  )
}
