import React from "react"
import { BsMoon, BsFillSunFill } from "react-icons/bs"

type Props = {
  darkMode: boolean
  changeDarkMode: (type: boolean) => void
}

function Header({ darkMode, changeDarkMode }: Props) {
  return (
    <div
      className={`w-full h-20 ${
        darkMode ? "bg-stone-800" : "bg-white"
      } header-shadow flex items-center justify-between transition-3`}
    >
      <h1
        className={`sm:text-2xl text-sm font1 wg700 ml-12 ${
          darkMode && "text-stone-200"
        }`}
      >
        Where in the world?
      </h1>
      <button
        onClick={() => changeDarkMode(!darkMode)}
        className={`${
          darkMode
            ? "text-stone-200 hover:text-stone-600"
            : "hover:text-stone-400"
        } mr-12 wg500 sm:text-lg text-xs transition-3`}
      >
        {darkMode ? (
          <div className="flex flex-row items-center gap-2">
            <BsFillSunFill /> Light Mode
          </div>
        ) : (
          <div className="flex flex-row items-center gap-2">
            <BsMoon /> Dark Mode
          </div>
        )}
      </button>
    </div>
  )
}

export default Header
