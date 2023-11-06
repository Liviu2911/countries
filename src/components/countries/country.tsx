import React from "react"
import { CountryType } from "../../App"
import { getPop } from "./getpopulation"

type Props = {
  darkMode: boolean
  updateCountry: (country: CountryType) => void
  country: CountryType
}

function Country({ country, darkMode, updateCountry }: Props) {
  const { name, flags, region, capital, population } = country
  let pop = getPop(population)
  return (
    <div className="hoverin transition-3 mt-12">
      <button
        className="w-72 mr-auto ml-auto flex flex-col gap-0"
        onClick={() => updateCountry(country)}
      >
        <img
          src={flags.png}
          alt=""
          className="w-96 h-36 rounded-tr rounded-tl img transition-3"
        />
        <div
          className={`${
            darkMode ? "bg-stone-800 text-stone-200" : "bg-white"
          } rounded-bl rounded-br w-full h-40 text-left flex flex-col gap-3`}
        >
          <h1 className="font1 wg700 mt-7 ml-7 text-xl">{name.common}</h1>
          <div className="flex flex-col gap-1 font1 wg500 ml-7 text-sm">
            <h2>
              <span className="wg700">Population:</span> {pop}
            </h2>
            <h2>
              <span className="wg700">Region:</span> {region}
            </h2>
            <h2>
              <span className="wg700">Capital:</span> {capital}
            </h2>
          </div>
        </div>
      </button>
    </div>
  )
}

export default Country
