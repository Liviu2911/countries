import { useState, useEffect } from "react"
import { useQuery } from "@tanstack/react-query"
import Header from "./components/header"
import "@fontsource-variable/nunito"
import Loading from "./components/pages/loading"
import ErrorMessage from "./components/pages/error"
import Home from "./components/pages/home"

export type CountryType = {
  name: { common: string }
  population: number
  capital: string[]
  flags: { png: string }
  region: string
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

  const [darkMode, setDarkMode] = useState(false)
  const changeDarkMode = (type: boolean) => setDarkMode(type)

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
