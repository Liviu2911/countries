type Props = {
  darkMode: boolean
}

function Loading({ darkMode }: Props) {
  return (
    <div
      className={`${
        darkMode ? "text-stone-200" : "text-stone-800"
      } font1 text-2xl w-72 mr-auot ml-auto transition-3`}
    >
      Gettin Da data for ya nigga....
    </div>
  )
}

export default Loading
