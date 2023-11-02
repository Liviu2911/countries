import React from "react"
import { AiOutlineSearch } from "react-icons/ai"

type Props = {
  darkMode: boolean
}

function Search({ darkMode }: Props) {
  return (
    <div
      className={`${
        !darkMode ? "bg-white" : "bg-stone-800"
      } sm:m-16 ml-auto mr-auto mt-4 w-72 sm:w-[450px] sm:h-[52px] h-10 rounded-[6px] flex items-center pl-8 gap-4`}
    >
      <button
        className={`${
          darkMode
            ? "hover:text-stone-400 text-stone-200"
            : "hover:text-stone-600 text-stone-400"
        } text-xl transition-3`}
      >
        <AiOutlineSearch />
      </button>
      <input
        type="text"
        placeholder="Search for a country..."
        className={`${!darkMode ? "bg-white" : "bg-stone-800 text-stone-200"}
      font1 wg500 w-[450px]`}
      />
    </div>
  )
}

export default Search
