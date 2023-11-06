import { useState, useEffect } from "react"
import { CountryType } from "../../App"
import BackToHome from "./backtohome"
import { getPop } from "../countries/getpopulation"
import Info from "./info"

type Props = {
  country: CountryType
  darkMode: boolean
  borders: CountryType[]
  changeActiveCountry: (country: CountryType | undefined) => void
}

const getCurrency = (obj: {}): string => {
  let res: string = ""
  for (let key in obj) res = key
  return res
}

const getLanguages = (obj: {}): any[] => {
  let res: any[] = []
  // @ts-ignore
  for (let key in obj) res.push(obj[key])
  return res
}

export default function ActiveCountry({
  country,
  darkMode,
  borders,
  changeActiveCountry,
}: Props) {
  const {
    currencies,
    capital,
    region,
    subregion,
    population,
    flags,
    name,
    languages,
  } = country
  const [active, setActive] = useState<boolean>()
  const currency: string = currencies[getCurrency(currencies)].name
  const newLanguages: string[] = getLanguages(languages)
  const flag = flags.png
  const pop = getPop(population)
  useEffect(() => {
    if (country !== undefined) {
      setTimeout(() => {
        setActive(true)
      }, 2400)
    } else setActive(false)
  }, [country])

  console.log(borders)
  return (
    <div className={`${country !== undefined ? "z-10" : "-z-10"}`}>
      <BackToHome changeActiveCountry={changeActiveCountry} active={active!} />

      <img
        src={flag}
        alt=""
        className="sm:ml-56 sm:mt-64 sm:absolute sm:scale-[1.5] w-80 h-40 mr-auto ml-auto mt-24"
      />

      <div className="flex flex-col absolute sm:top-72 sm:right-[450px] sm:w-[550px] sm:h-96 justify-around top-96">
        <h1
          className={`font1 wg700 sm:text-3xl text-xl ml-8 pb-10 sm:pb-0 ${
            darkMode ? "text-stone-200" : "text-stone-700"
          }`}
        >
          {name.common}
        </h1>
        <Info
          capital={capital[0]}
          region={region}
          subregion={subregion}
          languages={newLanguages}
          currency={currency}
          population={pop}
          nativeName={name.common}
          darkMode={darkMode}
        />
        <div
          className={`flex flex-wrap gap-2 font1 sm:w-[500px] w-80 overflow-hidden ${
            darkMode ? "text-stone-200" : "text-stone-700"
          } font1 items-center wg700 ml-8 sm:ml-0`}
        >
          Borders:
          {borders.map(border => (
            <button
              key={`border${border.cca3}`}
              onClick={() => changeActiveCountry(border)}
              className={`${
                darkMode
                  ? "bg-stone-800 hover:bg-stone-400 text-stone-200"
                  : "bg-white"
              } transition-3 sm:px-5 sm:py-1.5 px-3 py-1 rounded-sm wg500`}
            >
              {border.name.common}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
