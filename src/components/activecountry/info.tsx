import { CountryType } from "../../App"

type Props = {
  population: string
  languages: string[]
  capital: string
  region: string
  subregion: string
  currency: string
  nativeName: string
  darkMode: boolean
}

function Info({
  population,
  languages,
  region,
  capital,
  subregion,
  currency,
  nativeName,
  darkMode,
}: Props) {
  const country = {
    "Native Name": nativeName,
    population,
    region,
    "Sub Region": subregion,
    capital,
    Currencies: currency,
  }
  return (
    <div
      className={`sm:grid sm:grid-cols-2 sm:gap-x-9 sm:gap-y-2 flex flex-col ml-8 sm:ml-0 ${
        darkMode ? "text-stone-200" : "text-stone-700"
      } font1`}
    >
      {Object.keys(country).map((keyName, i) => (
        <h1 key={`a${i}`}>
          <span className="wg700 capitalize">{keyName}: </span>
          {/* @ts-ignore */}
          {country[keyName]}
        </h1>
      ))}
      <h1>
        <span className="wg700">Languages: </span>
        {languages.map(
          (lan, i) => `${lan}${i < languages.length - 1 ? "," : ""}`
        )}
      </h1>
    </div>
  )
}

export default Info
