import { useEffect, useState } from "react"
import { CountryType } from "../../App"
import Countries from "../countries"
import Filters from "../filters"
import Search from "../search"
import ActiveCountry from "../activecountry"
import { AnimatePresence, motion } from "framer-motion"
import BackToHome from "../activecountry/backtohome"

type Props = {
  countries: CountryType[]
  darkMode: boolean
}

function Home({ countries, darkMode }: Props) {
  const [activeCountry, setActiveCountry] = useState<CountryType | undefined>()
  const updateCountry = (country: CountryType | undefined) =>
    setActiveCountry(country)
  const [borders, setBorders] = useState<CountryType[]>([])
  const [data, setData] = useState<CountryType[]>(countries)

  // Search
  const [searchValue, setSearchValue] = useState("")

  const updateSearchValue = (value: string) => setSearchValue(value)
  const search = () => {
    setData(
      countries.filter(country =>
        country.name.common
          .toLocaleLowerCase()
          .includes(searchValue.toLocaleLowerCase())
      )
    )
  }
  const backHome = () => {
    setData(countries)
    setSearchValue("")
  }

  // Filters
  const updateFilter = (region: string) => {
    if (region !== "") {
      setData(countries.filter(country => country.region === region))
    } else setData(countries)
  }

  useEffect(() => {
    if (activeCountry !== undefined) {
      setBorders(
        countries.filter(country => {
          console.log(country.name.common)
          return (
            country.borders !== undefined &&
            country.borders.indexOf(activeCountry.cca3) !== -1
          )
        })
      )
    }
  }, [activeCountry])

  return (
    <>
      {activeCountry && (
        <ActiveCountry
          darkMode={darkMode}
          country={activeCountry}
          borders={borders}
          changeActiveCountry={updateCountry}
        />
      )}

      <AnimatePresence initial>
        {!activeCountry && (
          <motion.div
            variants={{
              initial: { opacity: 0 },
              animate: {
                opacity: 1,
                transition: { duration: 0.5, type: "tween" },
              },
              exit: {
                opacity: 0,
                transition: { duration: 0.5, type: "tween" },
              },
            }}
          >
            <div className="w-full flex sm:flex-row flex-col sm:justify-between gap-3 sm:gap-0 items-center">
              <Search
                searchValue={searchValue}
                search={search}
                darkMode={darkMode}
                updateSearch={updateSearchValue}
                backHome={backHome}
              />
              <Filters darkMode={darkMode} updateFilter={updateFilter} />
            </div>
            <Countries
              darkMode={darkMode}
              countries={data}
              updateCountry={updateCountry}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Home
