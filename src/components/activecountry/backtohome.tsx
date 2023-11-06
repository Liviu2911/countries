import { IoIosArrowRoundBack } from "react-icons/io"
import { motion } from "framer-motion"
import { CountryType } from "../../App"

type Props = {
  changeActiveCountry: (country: CountryType | undefined) => void
  active: boolean
}

export default function BackToHome({ changeActiveCountry, active }: Props) {
  const animation = {
    initial: {
      x: -250,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1.5,
      },
    },
    exit: {
      opacity: 0,
      x: -250,
      transition: {
        duration: 1.5,
      },
    },
  }
  const darkMode = localStorage.getItem("darkmode")
    ? localStorage.getItem("darkmode") === "dark"
      ? true
      : false
    : false

  return (
    <motion.button
      variants={animation}
      initial="initial"
      animate="animate"
      exit="exit"
      onClick={() => changeActiveCountry(undefined)}
      className={`${
        darkMode
          ? "bg-stone-800 text-stone-200 hover:bg-stone-200 hover:text-stone-800"
          : "bg-white text-stone-800 hover:bg-stone-800 hover:text-stone-200"
      } ${
        active && "transition-3"
      } flex gap-2 px-6 py-1 absolute items-center font1 rounded back-btn top-24 left-4 sm:top-36 sm:left-12`}
    >
      <span className="text-2xl">
        <IoIosArrowRoundBack />
      </span>
      Back
    </motion.button>
  )
}
