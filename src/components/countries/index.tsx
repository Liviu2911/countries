import React from "react"
import Country from "./country"
import { CountryType } from "../../App"

type Props = {
  countries: CountryType[]
  darkMode: boolean
}

function Countries({ countries, darkMode }: Props) {
  return (
    <div className={`grid grid-cols-4 gap-2 w-full overflow-x-hidden`}>
      {countries.map(country => {
        const name = country.name.common
        const flag = country.flags.png
        return <Country name={name} flag={flag} />
      })}
    </div>
  )
}

export default Countries
