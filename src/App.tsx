import { useState } from "react"
import { useQuery } from "@tanstack/react-query"
import Header from "./components/header"
import Search from "./components/search"
import Filters from "./components/filters"
import "@fontsource-variable/nunito"
import Countries from "./components/countries"

export type CountryType = {
  name: { common: string }
  flags: { png: string }
}

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const changeDarkMode = (type: boolean) => setDarkMode(type)

  const getData = async () => {
    const res = await fetch("https://restcountries.com/v3.1/all")
    const data = res.json()
    return data
  }

  const { data, error, isLoading } = useQuery({
    queryKey: ["gettinDaData"],
    queryFn: getData,
  })

  if (isLoading) return <h1>Gettin Da Countries Dawg...</h1>
  if (error) return <h1>This error occured: {error.message}</h1>

  console.log(data)

  return (
    <div
      className={`z-10 w-screen h-screen overflow-x-hidden ${
        darkMode ? "bg-stone-700" : "bg-stone-200"
      } transition-3`}
    >
      <Header darkMode={darkMode} changeDarkMode={changeDarkMode} />

      <div className="flex justify-between w-full">
        <Search darkMode={darkMode} />
        <Filters darkMode={darkMode} />
      </div>

      <Countries countries={data} darkMode={darkMode} />
    </div>
  )
}

export default App
