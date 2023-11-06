import React from "react"
import Country from "./country"
import { CountryType } from "../../App"

type Props = {
  countries: CountryType[]
  darkMode: boolean
  updateCountry: (country: CountryType) => void
}

function Countries({ countries, darkMode, updateCountry }: Props) {
  return (
    <div
      className={`sm:grid sm:grid-cols-4 flex flex-col w-full overflow-x-hidden`}
    >
      {countries.map(country => {
        return (
          <Country
            country={country}
            darkMode={darkMode}
            updateCountry={updateCountry}
            key={country.flags.png}
          />
        )
      })}
    </div>
  )
}

export default Countries
