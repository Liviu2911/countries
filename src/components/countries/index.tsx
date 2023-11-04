import React from "react"
import Country from "./country"
import { CountryType } from "../../App"

type Props = {
  countries: CountryType[]
  darkMode: boolean
  // activateCountry: (country: CountryType) => void
}

function Countries({ countries, darkMode }: Props) {
  return (
    <div className={`grid grid-cols-4 w-full overflow-x-hidden`}>
      {countries.map(country => {
        return (
          <Country
            country={country}
            darkMode={darkMode}
            // activateCountry={activateCountry}
            key={country.flags.png}
          />
        )
      })}
    </div>
  )
}

export default Countries
