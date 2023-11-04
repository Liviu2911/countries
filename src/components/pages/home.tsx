import { useState } from "react"
import { CountryType } from "../../App"
import Countries from "../countries"
import Filters from "../filters"
import Search from "../search"

type Props = {
  countries: CountryType[]
  darkMode: boolean
}

function Home({ countries, darkMode }: Props) {
  const [data, setData] = useState<CountryType[]>(countries)

  // Search
  const [searchValue, setSearchValue] = useState("")

  const updateSearchValue = (value: string) => setSearchValue(value)
  const search = () => {
    const newData = countries
    setData(
      newData.filter(country =>
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
  const [filter, setFilter] = useState("")
  const updateFilter = (region: string) => {
    setFilter(region)
    if (region !== "") {
      const newData = countries
      setData(newData.filter(country => country.region === region))
    } else setData(countries)
  }
  return (
    <>
      <div className="w-full flex justify-between items-center">
        <Search
          searchValue={searchValue}
          search={search}
          darkMode={darkMode}
          updateSearch={updateSearchValue}
          backHome={backHome}
        />
        <Filters
          darkMode={darkMode}
          activeFilter={filter}
          updateFilter={updateFilter}
        />
      </div>

      <Countries darkMode={darkMode} countries={data} />
    </>
  )
}

export default Home
