import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai"

type Props = {
  darkMode: boolean
  searchValue: string
  updateSearch: (value: string) => void
  search: () => void
  backHome: () => void
}

function Search({
  darkMode,
  searchValue,
  updateSearch,
  search,
  backHome,
}: Props) {
  return (
    <div
      className={`${
        !darkMode ? "bg-white" : "bg-stone-800"
      } sm:m-16 ml-auto mr-auto mt-4 w-80 sm:w-[450px] sm:h-[52px] h-10 sm:rounded-[6px] rounded-[3px] flex items-center pl-8 gap-4 z-10`}
    >
      <button
        onClick={() => search()}
        className={`${
          darkMode
            ? "hover:text-stone-700 hover:bg-stone-200 text-stone-200"
            : "hover:text-stone-200 hover:bg-stone-700 text-stone-400"
        } text-xl transition-3 p-1 rounded`}
      >
        <AiOutlineSearch />
      </button>
      <input
        type="text"
        value={searchValue}
        placeholder="Search for a country..."
        onChange={e => updateSearch(e.target.value)}
        className={`${!darkMode ? "bg-white" : "bg-stone-800 text-stone-200"}
      font1 wg500 w-[450px]`}
      />

      {searchValue !== "" && (
        <button
          className={`mr-6 hover:text-red-500 transition-3 text-lg ${
            darkMode ? "text-stone-200" : "text-stone-700"
          }`}
          onClick={() => backHome()}
        >
          <AiOutlineClose />
        </button>
      )}
    </div>
  )
}

export default Search
