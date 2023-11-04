import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"
import { BiChevronDown } from "react-icons/bi"

type Props = {
  darkMode: boolean
  activeFilter: string
  updateFilter: (region: string) => void
}

function Filters({ darkMode, activeFilter, updateFilter }: Props) {
  const [open, setOpen] = useState(false)
  const animation = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 100,
      transition: {
        duration: 0.2,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    },
  }
  return (
    <div className="m-16 font1 wg500">
      <button
        onClick={() => setOpen(!open)}
        className={`${
          darkMode
            ? "bg-stone-800 text-stone-200 hover:text-stone-600"
            : "bg-white  text-stone-700 hover:text-stone-400"
        } flex flex-row w-56 justify-between items-center p-5 rounded  transition-3`}
      >
        {activeFilter !== "" ? activeFilter : "Filter by Region"}
        <span className="text-xl">
          <BiChevronDown />
        </span>
      </button>
      <AnimatePresence initial={true}>
        {open && (
          <motion.div
            variants={animation}
            initial="initial"
            animate="animate"
            exit="exit"
            className={`absolute ${
              darkMode ? "bg-stone-800" : "bg-white"
            } rounded flex flex-col w-56 mt-2 gap-2 py-2 transition-3`}
          >
            <button
              onClick={() => updateFilter("Africa")}
              className={`${
                darkMode ? "text-stone-200" : "text-stone-700"
              } transition-3 hover:text-stone-400`}
            >
              Africa
            </button>
            <button
              onClick={() => updateFilter("Americas")}
              className={`${
                darkMode ? "text-stone-200" : "text-stone-700"
              } transition-3 hover:text-stone-400`}
            >
              Americas
            </button>
            <button
              onClick={() => updateFilter("Asia")}
              className={`${
                darkMode ? "text-stone-200" : "text-stone-700"
              } transition-3 hover:text-stone-400`}
            >
              Asia
            </button>
            <button
              onClick={() => updateFilter("Europe")}
              className={`${
                darkMode ? "text-stone-200" : "text-stone-700"
              } transition-3 hover:text-stone-400`}
            >
              Europe
            </button>
            <button
              onClick={() => updateFilter("Oceania")}
              className={`${
                darkMode ? "text-stone-200" : "text-stone-700"
              } transition-3 hover:text-stone-400`}
            >
              Oceania
            </button>
            <button
              onClick={() => updateFilter("")}
              className={`${
                darkMode ? "text-stone-200" : "text-stone-700"
              } transition-3 hover:text-stone-400`}
            >
              All
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Filters
