import { useState, useEffect } from "react"
import { useQuery } from "@tanstack/react-query"
import Header from "./components/header"
import Loading from "./components/pages/loading"
import ErrorMessage from "./components/pages/error"
import Home from "./components/pages/home"
import "@fontsource-variable/nunito"

export type CountryType = {
  name: { common: string }
  population: number
  capital: string[]
  flags: { png: string }
  region: string
  subregion: string
  nativeName: { eng: { official: string } }
  currencies: any
  languages: any
  borders: string[]
  cca3: string
}

function App() {
  const getData = async () => {
    const res = await fetch("https://restcountries.com/v3.1/all")
    const data: CountryType[] = await res.json()
    return data
  }

  const { data, error, isLoading } = useQuery({
    queryKey: ["gettinDaData"],
    queryFn: getData,
  })

  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkmode")
      ? localStorage.getItem("darkmode") === "dark"
        ? true
        : false
      : false
  )
  const changeDarkMode = (type: boolean) => {
    setDarkMode(type)
    localStorage.setItem("darkmode", type ? "dark" : "white")
  }

  useEffect(() => {
    document.body.className = `${
      darkMode ? "bg-stone-700" : "bg-stone-200"
    } transition-3 z-10`
  }, [darkMode])

  return (
    <>
      <Header darkMode={darkMode} changeDarkMode={changeDarkMode} />
      {isLoading && <Loading darkMode={darkMode} />}
      {error && <ErrorMessage darkMode={darkMode} error={error} />}
      {!isLoading && data ? (
        <Home darkMode={darkMode} countries={data} />
      ) : (
        <></>
      )}
    </>
  )
}

export default App
